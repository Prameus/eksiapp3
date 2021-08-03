import React, { useState, useEffect } from 'react';
import { View, StatusBar, Keyboard } from 'react-native';
import { Navigation } from './Navigation';
import { observer } from 'mobx-react'
import { Splash } from '~screens';
import { keyboard } from './mobx/keybord'

const App = observer(() => {
    useEffect(() => {
        Keyboard.addListener('keyboardDidhide', keyboard.close)
        Keyboard.addListener('keyboardDidShow', keyboard.open)
    }, [])

    return (
        <>
            <StatusBar backgroundColor={'rgba(40, 40, 40, 1)'} />

            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        </>
    );
});

export { App };