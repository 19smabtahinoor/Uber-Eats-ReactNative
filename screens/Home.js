import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import Categories from '../components/Home/Categories'
import HeaderTabs from '../components/Home/HeaderTabs'
import RestaurantItem, { localRestaurant } from '../components/Home/RestaurantItem'
import SearchBar from '../components/Home/SearchBar'
import TopTabs from '../components/Home/TopTabs'

const YELP_API_KEY = "NJhlX_R0eEnlk57gW0SGO1SHQqyZhdYBgfu8aM0mKCyq0r3S6gqWn4eUjnYPeKpjB18gRP4yU-Kpt1DMqy-qjaGyR11CL-JL7g-eYNdq-KqY-E4kzpEIN4nG6LtNYXYx"


export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurant)
    const [city, setCity] = useState('New York')
    const [activeTab, setActiveTab] = useState('Delivery')

    // yelp api fetch
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then(res => res.json())
            .then(json => setRestaurantData(
                json.businesses.filter(business =>
                    business.transactions.includes(activeTab.toLowerCase())
                )
            ))
    }
    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab])

    return (
        <SafeAreaView style={tailwind`bg-gray-900 pt-12`}>
            <View>
                <TopTabs />
            </View>
            <View style={tailwind`bg-gray-900 p-3 pb-4`}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
