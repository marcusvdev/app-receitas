import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getFavorites } from '../../utils/storage';
import { Card } from '../../components/card';

export function Favorites() {

    const [receipes, setReceipes] = useState([]);
    const isFocused = useIsFocused;

    useEffect(() => {
        let isActive = true;

        async function getReceipes(){
            const res = await getFavorites('@appreceitas');
            if(isActive){
                setReceipes(res);
            }
        }
        
        if(isActive){
            getReceipes();
        }

        return () => {
            isActive = false;
        }
        
    }, [isFocused, receipes])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Meus favoritos</Text>

            {receipes.length === 0 && (
                <Text>Você ainda não tem nenhuma receita favorita.</Text>
            )}

            <FlatList
                showsVerticalScrollIndicator={false}
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Card data={item} />}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 24,
    }
})