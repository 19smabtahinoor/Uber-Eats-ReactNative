import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem, { localRestaurant } from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY = "NJhlX_R0eEnlk57gW0SGO1SHQqyZhdYBgfu8aM0mKCyq0r3S6gqWn4eUjnYPeKpjB18gRP4yU-Kpt1DMqy-qjaGyR11CL-JL7g-eYNdq-KqY-E4kzpEIN4nG6LtNYXYx"


export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurant)
    const [city, setCity] = useState('New York')

    // yelp api fetch
    const getRestaurantsFromYelp = () => {
        const yelpUrl  = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl , apiOptions)
            .then(res => res.json())
            .then(json => setRestaurantData(json.businesses))
    }
    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city])

    return (
        <SafeAreaView style={tailwind`bg-gray-900 pt-12`}>
            <View style={tailwind`bg-gray-900 p-3 pb-4`}>
                <HeaderTabs />
                <SearchBar setCity={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
