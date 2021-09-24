import React from 'react'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default function SearchBar({ setCity }) {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyB2Wfv6IK4HBOlEG8fdFzEzaIBpT_QRLmI"}}
                onPress={(data, details = null) => {
                    setCity(data.description.split(',')[0])
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#374151',
                        borderRadius: 20, 
                        fontWeight: '700',
                        marginTop: 7,
                        color: '#fff'
                    },
                    textInputContainer: {
                        backgroundColor: '#374151',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                        color: '#fff'

                    }
                }}
                renderLeftButton={() => {
                    return (
                        <View style={{ marginLeft: 10 }}>
                            <EvilIcons name="location" size={28} color="#f59e0b" />
                        </View>
                    )
                }}
                renderRightButton={() => {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            marginRight: 8,
                            backgroundColor: '#f59e0b',
                            alignItems: 'center',
                            borderRadius: 50,
                            padding: 10
                        }}>
                            <EvilIcons name="search" size={24} />
                        </View>
                    )
                }}

            />
        </View>
    )
}
