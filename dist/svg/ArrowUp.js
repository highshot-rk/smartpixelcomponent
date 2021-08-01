"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowUp = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowUp = _ref => {
  var {
    color,
    darkColor = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-current ".concat(darkColor, " ").concat(color)
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.99993 2.121L1.28743 5.8335L0.226929 4.773L4.99993 0L9.77293 4.773L8.71243 5.8335L4.99993 2.121Z"
  }));
};

exports.ArrowUp = ArrowUp;