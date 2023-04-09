import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    }
})