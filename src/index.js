import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

registerServiceWorker();