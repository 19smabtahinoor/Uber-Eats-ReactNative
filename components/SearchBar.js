import React from 'react'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => {
                    return (
                        <View style={{ marginLeft: 10 }}>
                            <EvilIcons name="location" size={28} />
                        </View>
                    )
                }}
                renderRightButton={() => {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            marginRight: 8,
                            backgroundColor: 'white',
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
