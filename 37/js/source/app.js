'use strict';//总是使用严格模式是一种好习惯
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Excel from './components/Excel';

var headers=localStorage.getItem('headers');
var data=localStorage.getItem("data");

if (!headers){
    headers=["Title","Year","Rating","Comments"];
}
if(!data){
    data=[["Test","2015","3","meh"]];
}
console.log("headers",headers);
console.log("data",data);
ReactDOM.render(
    <div>
        <h1>
            <Logo/>Welcome to Whinepad!
        </h1>
        {/*<Excel headers={headers} initialData={data}/>*/}
    </div>,
    document.getElementById('pad')
);

// React.render(
//     <h1>
//         <Logo/>Welocome to The App!
//     </h1>,
//     document.getElementById("app")
// )