import React from 'react';
import { View, Text } from 'react-native';

const MessageTab = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}
        >
            <Text>MessageTab</Text>
        </View>
    );
};

export { MessageTab };