"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchIcon = _ref => {
  var {
    color,
    darkColor = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    className: "fill-current ".concat(color, " ").concat(darkColor),
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.5233 11.4628L15.7355 14.6743L14.6743 15.7355L11.4628 12.5233C10.2678 13.4812 8.7815 14.0022 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5C10.976 0.5 14 3.524 14 7.25C14.0022 8.7815 13.4812 10.2678 12.5233 11.4628ZM11.0188 10.9063C11.9706 9.92741 12.5022 8.61532 12.5 7.25C12.5 4.349 10.1503 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1503 4.349 12.5 7.25 12.5C8.61532 12.5022 9.92741 11.9706 10.9063 11.0188L11.0188 10.9063Z"
  }));
};

exports.SearchIcon = SearchIcon;