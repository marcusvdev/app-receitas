import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../../components/logo';

export default function Home() {

    const [inputValue, setInputValue] = useState('');

    function handleSearch(){
        console.log('Você digitou:', inputValue);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.heading}>Encontre a receita que combina com você</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='Busque uma receita...'
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color="#4cbe6c" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    form:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ececec',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input:{
        width: '90%',
        height: 54,
    }
})