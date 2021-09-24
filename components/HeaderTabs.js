import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');

    return (
        <View style={tailwind`flex flex-row justify-center`}>
            <HeaderButton
                btnText="Delivery"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                btnText="Pickup"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={tailwind`${props.activeTab === props.btnText ? 'bg-yellow-500' : 'bg-gray-700'} rounded-xl px-3 py-2 mr-2`}
            onPress={() => props.setActiveTab(props.btnText)}
        >
            <Text style={{
                color: props.activeTab === props.btnText ? 'white' : 'gray',
                fontSize: 15,
            }}>
                {props.btnText}
            </Text>
        </TouchableOpacity>
    )
}
