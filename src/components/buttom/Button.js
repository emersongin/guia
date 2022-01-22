import React, { Component } from 'react';
import { Button } from 'react-native';

class ActionButton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <Button>Hello, {this.props.name}</Button>;
    }
}

export default ActionButton;
