import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'

const foods = [
    {
        title: "Lasaga",
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        title: "Red Curry",
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$10.50',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        title: "Delicious Cake",
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$73.50',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
]
export default function MenuItem() {
    return (
        <View style={tailwind`mt-4 pb-24`}>
            {foods.map(food => (
                <View key={Math.random()}>
                    <TouchableOpacity  style={tailwind`bg-gray-700 mx-2 my-2 p-4 rounded-lg flex-row`}>
                        <FoodInfo food={food} />
                        <FoodImage foodImage={food} />
                    </TouchableOpacity>
                </View>
            ))}
            {/* <FoodImage /> */}
        </View>
    )
}


// Food Info Component 
const FoodInfo = (props) => {
    return (
        <View style={tailwind`w-48 justify-evenly flex-grow`}>
            <Text style={tailwind`text-white text-lg`}>{props.food.title}</Text>
            <Text style={tailwind`text-white text-sm`}>{props.food.description}</Text>
            <Text style={tailwind`text-white`}>{props.food.price}</Text>
        </View>
    )
}

//Food Image Component 
const FoodImage = (props) => {
    return (
        <TouchableOpacity>
            <Image source={{ uri: props.foodImage.image }} style={tailwind`w-24 h-24 rounded-lg`} />
        </TouchableOpacity>
    )
}