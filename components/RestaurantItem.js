import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import tailwind from 'tailwind-react-native-classnames';

export const localRestaurant = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },  
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    }
]

export default function RestaurantItem({ restaurantData }) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginTop: 15 }}>
            {restaurantData.map(item => (
                <View style={tailwind`p-2 rounded-lg bg-gray-700 mx-2 my-3`} key={Math.random()}>
                    <RestaurantImage image={item.image_url} />
                    <RestaurantInfo name={item.name} rating={item.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}

// Restaurant Image Component 
const RestaurantImage = ({ image }) => {
    return (
        <>
            <Image source={{ uri: image }}
                style={{ width: '100%', height: 180, borderRadius: 10 }}
            />
            <TouchableOpacity style={{
                position: 'absolute',
                right: 20,
                top: 20,
                backgroundColor: "#a8a2a4a6",
                borderRadius: 50,
                width: 40,
                height: 40,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <EvilIcons name="heart" size={28} color="#fff" />
            </TouchableOpacity>
        </>
    )
}


// Restaurant Info Component 
const RestaurantInfo = ({ name, rating }) => {
    return (
        <View style={tailwind`flex flex-col mt-3`}>
            {/* Title  */}
            <Text style={tailwind`text-white text-xl font-bold`}>{name}</Text>
            {/* Other Infos  */}
            <View style={tailwind`flex flex-row justify-between py-2`}>

                {/* time  */}
                <View style={tailwind`flex flex-row items-center`}>
                    <AntDesign name="clockcircleo" size={15} color="#eee" />
                    <Text style={tailwind`text-white ml-2`}>30-45 min</Text>
                </View>

                {/* Rating  */}

                <View style={tailwind`flex-row`}>
                    <AntDesign name="star" size={20} color="#fdca00" />
                    <Text style={tailwind`text-white ml-2`}>{rating}</Text>
                </View>
            </View>
        </View>
    )
}