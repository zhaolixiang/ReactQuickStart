'use strict';//总是使用严格模式是一种好习惯
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
ReactDOM.render(
    <h1>
        <Logo/>Welcome to The App!
    </h1>,
    document.getElementById('app')
);

// React.render(
//     <h1>
//         <Logo/>Welocome to The App!
//     </h1>,
//     document.getElementById("app")
// )