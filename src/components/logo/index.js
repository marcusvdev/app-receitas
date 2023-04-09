import { View, Text, StyleSheet } from 'react-native';

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logoText}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: "#4CBE6C",
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 16
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})