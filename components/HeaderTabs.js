import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.btnText ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
            onPress={() => props.setActiveTab(props.btnText)}
        >
            <Text style={{
                color: props.activeTab === props.btnText ? 'white' : 'black',
                fontSize: 15,
            }}>
                {props.btnText}
            </Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({

})
