import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Binding
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
const actions = [
    userActions
];

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.user.counter ?? 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.user.counter !== state.counter) {
            return {
                counter: props.user.counter
            };
        }
        return null;
    }

    setCounter = (value) => () => {
        this.props.actions.setCounter(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Counter</Text>
                <Text style={styles.counterText}>{this.state.counter}</Text>
                <View style={styles.actionButtonWrap}>
                    <TouchableOpacity style={[styles.actionButton, { marginRight: 20 }]} onPress={this.setCounter(this.state.counter - 1)}>
                        <Text style={styles.actionButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={this.setCounter(this.state.counter + 1)}>
                        <Text style={styles.actionButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        color: '#111',
        marginBottom: 10,
    },
    counterText: {
        fontSize: 45,
        color: '#111'
    },
    actionButtonWrap: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#0090F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonText: {
        fontSize: 27,
        color: '#FFF',
        lineHeight: 32
    }
})

//Binding
function mapStateToProps(state) {
    return { ...state }
}
function mapDispatchToProps(dispatch) {
    const creators = Map().merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject()
    return { actions: bindActionCreators(creators, dispatch), dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)