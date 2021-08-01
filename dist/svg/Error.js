"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorIcon = _ref => {
  var {
    color,
    darkColor = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    height: "15",
    viewBox: "0 0 32 32",
    width: "15",
    className: "fill-current ".concat(darkColor, " ").concat(color),
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    id: "Error_1_"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Error"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "16",
    cy: "16",
    id: "BG",
    r: "16"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z",
    id: "Exclamatory_x5F_Sign",
    fill: "white"
  })))));
};

exports.ErrorIcon = ErrorIcon;