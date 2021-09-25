import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image'
import tailwind from 'tailwind-react-native-classnames'

//yelp api 
const yelpRestaurantIndo = {
    name: 'Farrhourse Kitchen Thai Cuisine',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    price: '$17.00',
    reviews: '1050',
    rating: '2.3',
    categories: [{ title: 'Thai' }, { title: 'Confort Food' }, { title: 'rich Food' }]
}



export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params  

    const formatedCategoris = categories.map(cat => cat.title).join(" . ")

    const description = `${formatedCategoris} ${price ? ' . ' + price : ""} . 🎟 . ${rating} ⭐ (${reviews})`
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

//Restaurant Image Component
const RestaurantImage = (props) => {
    return (
        <Image source={{ uri: props.image }} style={tailwind`w-full h-64`} />
    )
}

//Restaurant Title Component
const RestaurantName = (props) => {
    return (
        <Text style={tailwind`text-white text-lg py-3 px-2`}>{props.name}</Text>
    )
}


///Restaurant Descripttion
const RestaurantDescription = (props) => {
    return (
        <Text style={tailwind`text-gray-400 px-2 pb-4`}>{props.description}</Text>
    )
}