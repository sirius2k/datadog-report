import React from 'react';
import ReactDOM from 'react-dom';
// TODO : Remove index.css and App
//import './index.css';
//import App from './App';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);
// TODO : Remove below code if it is not neccesary
//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();