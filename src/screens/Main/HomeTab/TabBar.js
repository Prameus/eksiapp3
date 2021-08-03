import { observer } from 'mobx-react';
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';


const tabs = [
    { title: 'bugün', name: 'bugun' },
    { title: 'gündem', name: 'gundem' },
    { title: 'debe', name: 'debe' },
    { title: 'sorunsallar', name: 'sorunsallar' },
    { title: 'takip', name: 'takip' },
    { title: 'tarihte bugün', name: 'tarihtebugun' },
    { title: 'son', name: 'son' },
    { title: 'kenar', name: 'kenar' },
    { title: 'çaylaklar', name: 'caylaklar' },
];

const TabBar = ({ state: { index }, navigation: { jumpTo } }) => {
    const item = ({ title, name, i }) => (
        <TouchableOpacity
            style={style.tabButton}
            onPress={() => jumpTo(name)}
            key={i}
        >
            <Text style={style.buttonTitle}>{title}</Text>

            <View
                style={{
                    height: 3,
                    width: '80%',
                    backgroundColor: 'rgba(120, 184, 76, 1)',
                    marginTop: 4,
                    borderRadius: 10,
                    alignSelf: 'center',
                    display: index === i ? 'flex' : 'none'
                }}
            />
        </TouchableOpacity>
    );

    return (
        <View
            style={style.container}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {tabs.map((d, i) => item({ ...d, i }))}
            </ScrollView>
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'rgba(40, 40, 40, 1)'
    },
    tabButton: {
        paddingVertical: 10
    },
    tabButtonActive: {
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});

export { TabBar };