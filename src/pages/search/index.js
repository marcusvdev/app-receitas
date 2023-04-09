import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card } from '../../components/card';
import api from '../../services/api';

export function Search() {

    const route = useRoute();
    const [receipes, setReceipes] = useState([]);

    useEffect(() => {
        
        async function fetchReceipes() {
            const res = await api.get(`/foods?name_like=${route.params?.name}`);
            setReceipes(res.data);
        }
        fetchReceipes();

    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Card data={item} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text style={styles.resEmpty}>Nenhum resultado para sua busca.</Text>}
            />
        </View>
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
    resEmpty:{
        fontSize: 16
    }
})