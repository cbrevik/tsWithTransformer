import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

interface Props {
    text: string,
    onPress: () => void
}

export default class Button extends Component<Props, {}> {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}