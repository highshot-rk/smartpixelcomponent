"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQ = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FAQ = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-5xl"
  }, "FAQ"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(props, null, 2)));
};

exports.FAQ = FAQ;