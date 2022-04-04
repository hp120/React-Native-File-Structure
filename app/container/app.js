import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/configureStore';
import RNInit from './RNInit';
import Splash from './Splash';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2500);
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={null}>
                        <RNInit />
                    </PersistGate>
                </Provider>
            );
        }
        else {
            return (
                <Splash />
            );
        }
    }
}