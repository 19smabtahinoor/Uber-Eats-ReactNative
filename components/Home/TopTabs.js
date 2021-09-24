import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import tailwind from 'tailwind-react-native-classnames'


export default function TopTabs() {
    return (
        <View style={tailwind`flex-row items-center justify-between px-3 py-3 bg-gray-900`}>            
            <Icon name="home" text="Home" />
            <Icon name="search1" text="Browse" />
            <Icon name="shoppingcart" text="Grocery" />
            <Icon name="carryout" text="Order" />
            <Icon name="user" text="Account" />
        </View>
    )
}


const Icon = (props) => {
    return(
        <TouchableOpacity style={tailwind`items-center`}>
            <AntDesign name={props.name} size={30} color="#fff" />
            <Text style={tailwind`text-white pt-1`}>{props.text}</Text>
        </TouchableOpacity>
    )
}