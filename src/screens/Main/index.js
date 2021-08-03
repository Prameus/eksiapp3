import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, SearchTab, MessageTab, NotifyTab, ProfileTab } from '../index';
import { TabBar } from '~/screens/Main/TabBar';

const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}>

            <Tab.Navigator
                tabBar={d => <TabBar state={d.state} navigation={d.navigation} />}
            >
                {/* yukarida tabBar icine onlari yazmak yerine (...d ile de yapilabilir) */}
                <Tab.Screen name={'HomeTab'} component={HomeTab} />
                <Tab.Screen name={'SearchTab'} component={SearchTab} />
                <Tab.Screen name={'MessageTab'} component={MessageTab} />
                <Tab.Screen name={'NotifyTab'} component={NotifyTab} />
                <Tab.Screen name={'ProfileTab'} component={ProfileTab} />
            </Tab.Navigator>
        </View>
    );
};

export { Main };