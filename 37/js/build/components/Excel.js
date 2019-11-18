'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，我们建议使用 prop-types 库 来定义contextTypes。


var Excel = function (_React$Component) {
    _inherits(Excel, _React$Component);

    function Excel() {
        _classCallCheck(this, Excel);

        return _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).apply(this, arguments));
    }

    _createClass(Excel, [{
        key: 'getInitialState',

        // propTypes:{
        //     headers:[],
        //     initialData: []
        // },
        // propTypes:{
        //     headers:React.PropTypes.isRequired.arrayOf(React.PropTypes.string),
        //     initialData: React.PropTypes.arrayOf(
        //         React.PropTypes.arrayOf(React.PropTypes.string)
        //     ).isRequired
        // },
        value: function getInitialState() {
            return {
                data: this.props.initialData,
                sortby: null,
                descending: false,
                edit: null, // [行索引, 列索引],
                search: false
            };
        }
    }, {
        key: '_sort',
        value: function _sort(e) {
            var column = e.target.cellIndex;
            var data = this.state.data.slice();
            var descending = this.state.sortby === column && !this.state.descending;
            data.sort(function (a, b) {
                return descending ? a[column] < b[column] ? 1 : -1 : a[column] > b[column] ? 1 : -1;
            });
            this.setState({
                data: data,
                sortby: column,
                descending: descending
            });
        }
    }, {
        key: '_showEditor',
        value: function _showEditor(e) {
            this.setState({
                edit: {
                    row: parseInt(e.target.dataset.row, 10),
                    cell: e.target.cellIndex
                }
            });
        }
    }, {
        key: '_save',
        value: function _save(e) {
            e.preventDefault();
            //进行保存
            var input = e.target.firstChild;
            var data = this.state.data.slice();
            data[this.state.edit.row][this.state.edit.cell] = input.value;
            this.setState({
                edit: null,
                data: data
            });
        }
    }, {
        key: '_renderToolBar',
        value: function _renderToolBar() {

            return _react2.default.DOM.div({ className: 'toolbar' }, _react2.default.DOM.button({ onClick: this._toggleSearch, className: 'toolbar' }, 'search'), _react2.default.DOM.a({ onClick: this._download.bind(this, 'json'), href: 'data.json' }, 'Export JSON'), _react2.default.DOM.a({ onClick: this._download.bind(this, 'csv'), href: 'data.csv' }, 'Export CSV'));
        }
    }, {
        key: '_download',
        value: function _download(format, ev) {
            var contents = format === 'json' ? JSON.stringify(this.state.data) : this.state.data.reduce(function (result, row) {
                return result + row.reduce(function (rowresult, cell, idx) {
                    return rowresult + '"' + cell.replace(/"/g, '""') + '"' + (idx < row.length - 1 ? ',' : '');
                }, '') + "\n";
            }, '');
            var URL = window.URL || window.webkitURL;
            var blob = new Blob([contents], { type: 'text/' + format });
            ev.target.href = URL.createObjectURL(blob);
            ev.target.download = 'data.' + format;
        }
    }, {
        key: '_renderSearch',
        value: function _renderSearch() {
            if (!this.state.search) {
                return null;
            }
            return _react2.default.DOM.tr({ onChange: this._search }, this.props.headers.map(function (_ignore, idx) {
                return _react2.default.DOM.td({ key: idx }, _react2.default.DOM.input({ type: 'text', 'data-idx': idx }));
            }));
        }
    }, {
        key: '_toggleSearch',
        value: function _toggleSearch() {
            if (this.state.search) {
                this.setState({
                    data: this._preSearchData,
                    search: false
                });
                this._preSearchData = null;
            } else {
                this._preSearchData = this.state.data;
                this.setState({
                    search: true
                });
            }
        }
    }, {
        key: '_search',
        value: function _search(e) {
            var needle = e.target.value.toLowerCase();
            if (!needle) {
                // 当搜索字符串被删除时
                this.setState({
                    data: this._preSearchData
                });
                return;
            }
            // 需要搜索的那一列的索引值
            var idx = e.target.dataset.idx;
            var searchData = this._preSearchData.filter(function (row) {
                return row[idx].toString().toLowerCase().indexOf(needle) > -1;
            });
            this.setState({
                data: searchData
            });
        }
    }, {
        key: '_renderTable',
        value: function _renderTable() {
            return _react2.default.DOM.table(null, _react2.default.DOM.thead({ onClick: this._sort }, _react2.default.DOM.tr(null, this.props.headers.map(function (title, idx) {
                console.log(this);
                if (this.state.sortby === idx) {
                    title += this.state.descending ? '\u2191' : '\u2193';
                }
                return _react2.default.DOM.th({ key: idx }, title);
            }, this))), _react2.default.DOM.tbody({ onDoubleClick: this._showEditor }, this._renderSearch(), this.state.data.map(function (row, rowidx) {
                return _react2.default.DOM.tr({ key: rowidx }, row.map(function (cell, idx) {
                    console.log("state", this);
                    var content = cell;
                    var edit = this.state.edit;
                    if (edit && edit.row === rowidx && edit.cell === idx) {
                        content = _react2.default.DOM.form({ onSubmit: this._save }, _react2.default.DOM.input({
                            type: 'text',
                            defaultValue: content
                        }));
                    }
                    return _react2.default.DOM.td({
                        key: idx,
                        'data-row': rowidx
                    }, content);
                }, this));
            }, this)));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'Excel' },
                this._renderToolbar(),
                this._renderTable()
            );
        }
    }]);

    return Excel;
}(_react2.default.Component);

Excel.propTypes = {
    headers: _propTypes2.default.arrayOf(_propTypes2.default.string),
    initialData: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)).isRequired
};

exports.default = Excel;