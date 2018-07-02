import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'Minimal configuration';

ReactDOM.render(
<div><App /></div>,
document.getElementById('app')
);
module.hot.accept();