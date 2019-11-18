'use strict';

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Suggest = require('./components/Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Rating = require('./components/Rating');

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'div',
    { style: { padding: "20px" } },
    _react2.default.createElement(
        'h1',
        null,
        'Component discover33'
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Logo'
    ),
    _react2.default.createElement(
        'div',
        { style: { display: 'inline-block', background: 'purple' } },
        _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Buttons'
    ),
    _react2.default.createElement(
        'div',
        null,
        'Button with onClick:',
        _react2.default.createElement(
            _Button2.default,
            { onClick: function onClick() {
                    return alert('ouch');
                } },
            'Click me'
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        'A link:',
        _react2.default.createElement(
            _Button2.default,
            { href: 'http://www.baidu.com' },
            'Follow me'
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        'Custom class name:',
        _react2.default.createElement(
            _Button2.default,
            { className: 'custom' },
            'I do nothing'
        )
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Suggest'
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Suggest2.default, { options: ['eenie', 'meenie', 'miney', 'mo'] })
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Rating'
    ),
    _react2.default.createElement(
        'div',
        null,
        'No initialvalue:',
        _react2.default.createElement(_Rating2.default, null)
    ),
    _react2.default.createElement(
        'div',
        null,
        'Initial Value4:',
        _react2.default.createElement(_Rating2.default, { defaultValue: 4 })
    ),
    _react2.default.createElement(
        'div',
        null,
        'This one goes to 11:',
        _react2.default.createElement(_Rating2.default, { max: 11 })
    ),
    _react2.default.createElement(
        'div',
        null,
        'Read-only:',
        _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: 3 })
    ),
    _react2.default.createElement(
        'h2',
        null,
        'Form inputs'
    ),
    _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Vanilla input'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(FormInput, null)
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Prefilled'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(FormInput, { defaultValue: 'it\'s like a default' })
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Year'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(FormInput, { type: 'year' })
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Rating'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(FormInput, { type: 'rating', defaultValue: 4 })
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Suggest'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(FormInput, {
                        type: 'suggest',
                        options: ['red', 'green', 'blue'],
                        defaultValue: 'green' })
                )
            ),
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Vanilla textarea'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(FormInput, { type: 'text' })
                )
            )
        )
    )
), document.getElementById("pad"));