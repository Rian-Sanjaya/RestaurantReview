import React, { Component } from 'react';
import { Text } from 'react-native'

// relative path
// import HeaderStyle from './HeaderStyle'

// absolute path
import HeaderStyle from 'styles/HeaderStyle'

export default class Header extends Component {
    render() {
        return (
            <Text style={HeaderStyle.iOSHeader}>Restaurant Review</Text>
        )
    }
}