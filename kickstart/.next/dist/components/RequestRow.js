'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Frank\\Learning\\Ethereum development\\Git\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            approveLoading: false,
            finalizeLoading: false
        }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            _this.setState({ approveLoading: true });
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context.sent;
                            _context.next = 8;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 8:
                            _this.setState({ approveLoading: false });
                            // Router.pushRoute(`/campaigns/${this.props.address}/requests`);
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](0);

                            _this.setState({ approveLoading: false });

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[0, 11]]);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;

                            _this.setState({ finalizeLoading: true });
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context2.sent;
                            _context2.next = 8;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 8:
                            _this.setState({ finalizeLoading: false });
                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2['catch'](0);

                            _this.setState({ finalizeLoading: false });

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[0, 11]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                value = _props.value,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalCount > approversCount / 2;
            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, loading: this.state.approveLoading, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, loading: this.state.finalizeLoading, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJzdGF0ZSIsImFwcHJvdmVMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwib25BcHByb3ZlIiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwidmFsdWUiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFHZjs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0Y7NEJBQVEsQUFDWSxBQUNoQjs2QixBQUZJLEFBRWE7QUFGYixBQUNKLGlCQUdKLEEscUZBQVksbUJBQUE7MEJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQUE7NENBRUo7O2tDQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFoQixBQUFjLEFBQWtCLEFBQzFCO0FBSEYsdUNBR2Esd0JBQVMsTUFBQSxBQUFLLE1BSDNCLEFBR2EsQUFBb0I7NENBSGpDO21DQUltQixjQUFBLEFBQUssSUFKeEIsQUFJbUIsQUFBUzs7NkJBQTFCO0FBSkYsZ0RBQUE7NENBQUE7NENBS0UsQUFBUyxRQUFULEFBQWlCLGVB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