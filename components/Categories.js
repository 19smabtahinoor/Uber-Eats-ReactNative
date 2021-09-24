import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts",
    },
];

export default function Categories() {
    return (
        <View style={tailwind`bg-gray-700 mx-2 rounded-lg p-4`}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map(item => (
                    <View style={tailwind`flex items-center mr-6`} key={Math.random()}>
                        <Image source={item.image} style={{
                            width: 50,
                            height: 40,
                            resizeMode: 'contain'
                        }} />
                        <Text style={tailwind`text-white font-semibold pt-2`}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
