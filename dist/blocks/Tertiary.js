"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tertiary = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tertiary = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-5xl"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(props, null, 2)));
};

exports.Tertiary = Tertiary;