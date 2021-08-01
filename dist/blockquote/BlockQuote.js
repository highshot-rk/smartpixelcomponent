"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockQuote = void 0;

var _react = _interopRequireDefault(require("react"));

var _image_back = _interopRequireDefault(require("./image_back.png"));

var _excluded = ["speech", "avatarUrl", "customerName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BlockQuote = _ref => {
  var {
    speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    avatarUrl = _image_back.default,
    customerName = 'Maria Lopez, VP of Design at Meshery'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "flex flex-col space-y-6"
  }, props), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-lg text-center text-brand-900"
  }, "\u201C", speech, "\u201D"), /*#__PURE__*/_react.default.createElement("img", {
    className: "w-20 h-20 mx-auto rounded-full",
    src: avatarUrl ? avatarUrl : _image_back.default,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs text-center uppercase"
  }, customerName));
};

exports.BlockQuote = BlockQuote;