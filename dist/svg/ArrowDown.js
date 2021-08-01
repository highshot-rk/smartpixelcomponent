"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowDown = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDown = _ref => {
  var {
    color,
    darkColor = "",
    hoverColor = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-current ".concat(darkColor, " ").concat(color)
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.00005 3.879L8.71255 0.166504L9.77305 1.227L5.00005 6L0.227051 1.227L1.28755 0.166504L5.00005 3.879Z"
  }));
};

exports.ArrowDown = ArrowDown;