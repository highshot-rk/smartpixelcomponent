"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["headerText", "paragraph"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var TextBlock = _ref => {
  var {
    headerText = '',
    paragraph = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "p-6\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-gray-100 text-lg tracking-wider uppercase font-semibold"
  }, headerText), /*#__PURE__*/_react.default.createElement("hr", {
    className: "border-brand-600 mt-4"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-100 text-base mt-8"
  }, paragraph));
};

exports.TextBlock = TextBlock;