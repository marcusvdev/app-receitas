import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export function Card({data}){
    
    const navigation = useNavigation();
    function handleNavigate(){
        navigation.navigate('Detail', {data: data});
    }

    return(
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.container}
            onPress={handleNavigate}
        >
            <Image
                source={{uri: data.cover}}
                style={styles.thumb}
            />
            <View style={styles.desc}>
                <Text style={styles.descTitle}>{data.name}</Text>
                <Text style={styles.descText}>{data.total_ingredients} ingredientes | {data.time} min</Text>
            </View>
            <LinearGradient
                style={styles.gradient}
                colors={['transparent', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.99)']}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
    thumb:{
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    desc: {
        height: '100%',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 14,
        zIndex: 2
    },
    descTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold'
    }
    ,
    descText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20,
    }, 
    gradient: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        borderRadius: 8
    }
})