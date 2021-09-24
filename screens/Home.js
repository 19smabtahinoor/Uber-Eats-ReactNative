import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
    }
})
