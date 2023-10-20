import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIcon from '../Components/HomeIcon';
import HomeSearch from '../Components/HomeSearch';
import HomeBanner from '../Components/HomeBanner';
import ProductTitle from '../Components/ProductTitle';
import ProductCarousel from '../Components/ProductCarousel';
import { selling } from '../Utils/Data';

const Home = () => {
    const bookData = require('../Utils/books.json')
    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.view}>
                    <HomeIcon />
                    <HomeSearch />
                    <HomeBanner />
                    <ProductTitle title={'Ưu đãi độc quyền'} />
                    <ProductCarousel data={bookData} />
                    <ProductTitle title={'Sản phẩm bán chạy'} />
                    <ProductCarousel data={selling} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    areaView: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        paddingHorizontal: 20,
        paddingTop: 10,
        flex: 1
    },
    view: {
        gap: 20,
        paddingBottom: 20
    }
})