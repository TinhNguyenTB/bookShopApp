import { StyleSheet, Image, View } from 'react-native'
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HomeBanner = () => {
    return (
        <View>
            <Image resizeMode='stretch' style={styles.img} source={require('../assets/BannerBookshop.png')} />
        </View>
    )
}

export default HomeBanner

const styles = StyleSheet.create({
    img: {
        height: responsiveHeight(15),
        width: responsiveWidth(90)
    }
})