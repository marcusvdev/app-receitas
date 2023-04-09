import { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Image, Modal, Share } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { List } from '../../components/list';
import { Steps } from '../../components/steps';
import { VideoView } from '../../components/video';
import { isFavorite, saveFavorite, removeFavorite } from '../../utils/storage';

export function Detail() {

    const [showVideo, setShowVideo] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {

        async function getStatusFavorite(){
            const receipeFavorite = await isFavorite(route.params?.data);
            setIsFav(receipeFavorite);
        }
        getStatusFavorite();

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <View style={styles.headerLinks}>
                    <Pressable onPress={() => handleFavReceipe(route.params?.data)}>
                        {isFav ? (
                            <Entypo name='heart' size={28} color="#FF4141" />
                        ) : (
                            <Entypo name='heart-outlined' size={28} color="#FF4141" />
                        )}
                    </Pressable>
                    <Pressable onPress={shareReceita}>
                        <Feather name='share-2' size={24} color="#121212" />
                    </Pressable>
                </View>
            )
        })
    }, [navigation, route.params?.data, isFav])

    function handleVideo(){
        setShowVideo(true);
    }

    async function handleFavReceipe(receipe){
        if(isFav){
            await removeFavorite(receipe.id);
            setIsFav(false);
        } else {
            await saveFavorite('@appreceitas', receipe);
            setIsFav(true);
        }
    }

    async function shareReceita(){
        try{
            await Share.share({
                url: 'https://marcusvdev.github.io/',
                message: `Veja essa receita incrível: ${route.params?.data.name}`
            })
        } catch(error){}
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            
            <Pressable onPress={handleVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={48} color="#FAFAFA" />
                </View>
                <Image
                    source={{uri: route.params?.data.cover}}
                    style={styles.thumbnail}
                />
            </Pressable>
            
            <View>
                <Text style={styles.headingText}>Ingredientes ({route.params?.data.total_ingredients})</Text>
            </View>
            
            {route.params?.data.ingredients.map((item) => (
                <List data={item} key={item.id} />
            ))}

            <View>
                <Text style={styles.headingText}>Modo de Preparo</Text>
            </View>

            {route.params?.data.instructions.map((item, index) => (
                <Steps data={item} index={index} key={item.id} />
            ))}

            <Modal visible={showVideo} animationType="slide">
                <VideoView
                    handleClose={() => setShowVideo(false)}
                    videoUrl={route.params?.data.video}
                />
            </Modal>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F3F9FF",
        paddingTop: 16,
        paddingBottom: 32,
        paddingStart: 16,
        paddingEnd: 16,
    },
    headerLinks:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
    },
    thumbnail:{
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    playIcon:{
        position: 'absolute',
        left: 0, top: 0, right: 0, bottom: 0,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText:{
        marginTop: 16,
        marginBottom: 16,
        fontSize: 18,
        fontWeight: 'bold'
    }
})