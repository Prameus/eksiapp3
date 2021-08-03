import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileTab = () => {
    return (
        <View
            style={style.container}
        >
            <Text>SearchTab</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(40, 40, 40, 1)'
    }
})

export { ProfileTab };