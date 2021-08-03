import React from 'react';
import { View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Splash = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}>
            <Fontisto
                name={'blood-drop'}
                color={'rgba(120, 184, 76, 1)'}
                size={162}
            />
        </View>
    );
}

export { Splash };