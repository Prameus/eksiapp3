import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchTab = () => {
    return (
        <View
            style={style.container}
        >
            <Text>SearchTab</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333'
    }
})
export { SearchTab }