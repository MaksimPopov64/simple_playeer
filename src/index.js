import React from 'react';
import ReactDOM from 'react-dom';
import Common from './components/Common/Common';

const title = 'Minimal configuration';

ReactDOM.render(
<div><Common /></div>,
document.getElementById('app')
);
module.hot.accept();