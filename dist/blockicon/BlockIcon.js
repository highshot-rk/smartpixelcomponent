"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _test_blockicon = _interopRequireDefault(require("../../assets/images/test_blockicon.png"));

var _excluded = ["type", "heading", "text"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BlockIcon = _ref => {
  var {
    type = "horizontal",
    heading = "Heading",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "\n                ".concat(type == "horizontal" && "flex", "\n                ").concat(props.classNames ? props.classNames : "", "\n            ")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "\n                    ".concat(type == "vertical" && "py-2", "\n                    ").concat(type == "horizontal" && "px-6 pb-14", "\n                ")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: props.imageurl ? props.imageurl : _test_blockicon.default,
    className: "w-14 h-14"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "\n                    ".concat(type == "vertical" && "mt-6", "\n                    ").concat(type == "horizontal" && "ml-6", "\n                "),
    style: {
      width: type == "horizontal" ? "310px" : "290px"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-2xl"
  }, heading && heading == "" ? heading : "Heading"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-base pt-2"
  }, text && text == "" ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua")));
};

exports.BlockIcon = BlockIcon;