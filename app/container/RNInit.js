import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Counter from '../components/Counter';

// Binding
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
const actions = [];

class RNInit extends Component {
    render() {
        return (
            <Counter {...this.props} />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(RNInit)