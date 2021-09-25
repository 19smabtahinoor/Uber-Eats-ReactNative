import React from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import About from '../components/Restaurant Detail/About'
import MenuItem from '../components/Restaurant Detail/MenuItem'

export default function RestaurantDetail() {
    return (
        <View style={tailwind`bg-gray-900`}>
            <About />
            <ScrollView showsVerticalScrollIndicator={false} >
                <MenuItem />
            </ScrollView>
        </View>
    )
}
