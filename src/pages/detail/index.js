import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export function Detail() {

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => ''}>
                    <Entypo name='heart' size={28} color="#FF4141" />
                </Pressable>
            )
        })
    }, [navigation, route.params?.data])

    return (
        <View style={styles.container}>
            <Text>{route.params?.data.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f5f5f5",
    }
})