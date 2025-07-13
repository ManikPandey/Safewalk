import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Dashboard />
        </Provider>
    );
};

export default App;
