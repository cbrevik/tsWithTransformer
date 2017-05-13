import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';
import Logger from './lib/Logger';

export default class App extends Component<{}, {}> {
    onButtonPress() {
        console.log("Button pressed!");
        Logger.log("Button pressed");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Hello TypeScript</Text>
                <Button text="Hello button" onPress={this.onButtonPress} />
            </View>
        );
    }
}