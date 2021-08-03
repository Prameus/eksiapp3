import React from 'react';
import { View, ViewPropTypes, TextPropTypes } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import propTypes from 'prop-types';

const Button = props => {
    const { text, onPress, style, textStyle, isActive } = props;

    return (
        <View>
            <RNEButton
                title={text}
                type={'clear'}
                onPress={onPress}
                titleStyle={{
                    color: 'white'
                }}
            />

            <View
                style={{
                    backgroundColor: 'rgba(120, 184, 76, 1)',
                    height: 3,
                    width: '90%',
                    alignSelf: 'center',
                    display: isActive ? 'flex' : 'none'
                }}
            />
        </View>
    );
};


Button.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
    style: ViewPropTypes.style,
    textStyle: ViewPropTypes.style,
    //textStyle: TextPropTypes || Text.propTypes,
    isActive: propTypes.bool
    //textStyle: propTypes.oneOf([ViewPropTypes.style, TextPropTypes?.style])
};

Button.defaultProps = {
    text: 'Buton',
    onPress: () => alert('butonu dokunuldu'),
    style: {},
    textStyle: {},
    isActive: false
};

//propTypes
//default Props

export { Button };