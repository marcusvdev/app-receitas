import { View, Text, StyleSheet } from 'react-native';

export function List({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16
    }
})