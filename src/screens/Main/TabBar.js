import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { observer } from 'mobx-react';
import { keyboard } from '~/mobx/keybord';

const TabBar = observer(({ state: { index }, navigation: { jumpTo } }) => {
    return (
        <View
            style={style.container}
        >

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('HomeTab')}>
                <Fontisto name={'blood-drop'} color={index === 0 ? 'rgba(120, 184, 76, 1)' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('SearchTab')}>
                <Fontisto name={'search'} color={index === 1 ? 'rgba(120, 184, 76, 1)' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('MessageTab')}>
                <Entypo name={'message'} color={index === 2 ? 'rgba(120, 184, 76, 1)' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('NotifyTab')}>
                <Ionicons name={'notifications'} color={index === 3 ? 'rgba(120, 184, 76, 1)' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('ProfileTab')}>
                <AntDesign name={'user'} color={index === 4 ? 'rgba(120, 184, 76, 1)' : '#444444'} size={32} />
            </TouchableOpacity>
        </View>
    );
}
)

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#111111'
    },
    tabButton: { paddingVertical: 10 }
})

export { TabBar };