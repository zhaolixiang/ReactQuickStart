'use strict'; //总是使用严格模式是一种好习惯

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Excel = require('./components/Excel');

var _Excel2 = _interopRequireDefault(_Excel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = localStorage.getItem('headers');
var data = localStorage.getItem("data");

if (!headers) {
    headers = ["Title", "Year", "Rating", "Comments"];
}
if (!data) {
    data = [["Test", "2015", "3", "meh"]];
}
console.log("headers", headers);
console.log("data", data);
_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        _react2.default.createElement(_Logo2.default, null),
        'Welcome to Whinepad!'
    )
), document.getElementById('pad'));

// React.render(
//     <h1>
//         <Logo/>Welocome to The App!
//     </h1>,
//     document.getElementById("app")
// )