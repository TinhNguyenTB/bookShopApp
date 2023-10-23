import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const nav = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            nav.replace('Tabs');
        }, 2000);
    }, []);

    return (
        <View style={styles.bg}>
            <View style={styles.container}>
                <Image source={require('../assets/iconMain.jpg')} style={styles.img} />
            </View>
            <StatusBar style='light' />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 250,
        width: 250
    }
})