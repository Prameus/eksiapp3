import React from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Bugun } from './Bugun';
import { TabBar } from './TabBar';
const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}
        >
            <Tab.Navigator
                tabBar={TabBar}
            >
                <Tab.Screen name={'bugun'} component={Bugun} />
                <Tab.Screen name={'gundem'} component={Bugun} />
                <Tab.Screen name={'debe'} component={Bugun} />
                <Tab.Screen name={'sorunsallar'} component={Bugun} />
                <Tab.Screen name={'takip'} component={Bugun} />
                <Tab.Screen name={'tarihtebugun'} component={Bugun} />
                <Tab.Screen name={'son'} component={Bugun} />
                <Tab.Screen name={'kenar'} component={Bugun} />
                <Tab.Screen name={'caylaklar'} component={Bugun} />
            </Tab.Navigator>
        </View>
    );
};

export { HomeTab };