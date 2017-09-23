import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Dashboard from './screens/dashboard';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
