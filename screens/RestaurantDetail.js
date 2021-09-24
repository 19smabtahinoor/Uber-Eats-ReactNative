import React from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import About from '../components/Restaurant Detail/About'

export default function RestaurantDetail() {
    return (
        <View style={tailwind`bg-gray-900`}>
            <About />
        </View>
    )
}
