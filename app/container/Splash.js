import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image source={require('../images/splashscreenlogo.png')} style={styles.logo} resizeMode="contain" />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 220,
        height: 220
    }
});