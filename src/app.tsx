import React from 'react';
import { View, Text } from 'react-native';

import Button from './button';

export default function () {
    return (
        <View style={{ flex: 1 }}>
            <Text>Hello TypeScript</Text>
            <Button text="Hello button" onPress={() => console.log("Hello pressed")} />
        </View>
    )
}