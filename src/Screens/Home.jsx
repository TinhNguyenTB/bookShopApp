import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeSearch from '../Components/HomeSearch';
import Category from '../Components/Category';
import ProductTitle from '../Components/ProductTitle';
import ProductCarousel from '../Components/ProductCarousel';
import FlashMessage from "react-native-flash-message";

const bookData = require('../Utils/books.json');
const bookSelling = require('../Utils/selling.json');

const Home = () => {
    return (
        <SafeAreaView style={styles.areaView}>
            <FlashMessage />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.view}>
                    <HomeSearch />
                    <Category />
                    <ProductTitle title={'Ưu đãi độc quyền'} />
                    <ProductCarousel data={bookData} />
                    <ProductTitle title={'Sản phẩm bán chạy'} />
                    <ProductCarousel data={bookSelling} />
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
        paddingTop: 10
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