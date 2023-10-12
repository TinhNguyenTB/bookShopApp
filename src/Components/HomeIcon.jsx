import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HomeIcon = () => {
    return (
        <View style={styles.view}>
            <Image style={styles.img} source={require('../assets/iconMainCycle.png')} />
        </View>
    )
}

export default HomeIcon

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 70,
        width: 70
    }
})