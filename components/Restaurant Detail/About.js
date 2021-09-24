import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image'
import tailwind from 'tailwind-react-native-classnames'

const image = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'

const title = 'Farrhourse Kitchen Thai Cuisine'
const description = 'Thai  Confort Food . $$ . 🎟 . 4 ⭐(29+)'
export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
            {/* Restaurant Descript  */}
        </View>
    )
}

//Restaurant Image Component
const RestaurantImage = (props) => {
    return(
        <Image source={{uri: props.image}} style={tailwind`w-full h-64`} />
    )
}

//Restaurant Title Component
const RestaurantTitle = (props) => {
    return(
        <Text style={tailwind`text-white text-lg py-3 px-2`}>{props.title}</Text>
    )
}


///Restaurant Descripttion
const RestaurantDescription = (props) => {
    return(
        <Text style={tailwind`text-gray-400 px-2 pb-4`}>{props.description}</Text>
    )
}