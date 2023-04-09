import { View, Text, StyleSheet } from 'react-native';

export function Steps({data, index}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Passo {index+1}</Text>
            <Text>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 18
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16
    }
})