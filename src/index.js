import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResetCss from './lib/resetCss'

ReactDOM.render(
<React.Fragment>
    <ResetCss/>
    <App />
</React.Fragment>
    , document.getElementById('root'));
