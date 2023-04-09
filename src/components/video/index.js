import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import WebView from 'react-native-webview';

export function VideoView({handleClose, videoUrl}){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                <Feather name='x' size={24} color="#121212" style={styles.closeBtnIcon} />
                <Text style={styles.closeBtnTxt}>Fechar vídeo</Text>
            </TouchableOpacity>
            <WebView
            style={styles.contentVideo}
            source={{uri: videoUrl}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    closeBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: "#eaeaea"
    },
    closeBtnIcon:{
        marginRight: 8,
    },
    closeBtnTxt:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentVideo:{
        flex: 1
    }
})