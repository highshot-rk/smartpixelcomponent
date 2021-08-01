"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _Search = require("../svg/Search");

var _excluded = ["type", "text", "icon", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = _ref => {
  var {
    type = "primary",
    text = 'LABEL',
    icon = 'none',
    size = "default"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var cssClasses = "inline-flex items-center space-x-3 leading-0\n        ".concat(type == "primary" && !props.forceDark && "rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200", "\n        ").concat(type == "primary" && props.forceDark && "rounded-lg bg-brand-400 hover:bg-brand-200", "\n        ").concat(type == "tertiary" && "bg-none", "\n        ").concat(size == "small" && "h-8 max-h-8 px-3.5 py-2.5", "\n        ").concat(size == "default" && "h-10 max-h-10 px-4 py-3.5", "\n        ").concat(size == "large" && "h-12 max-h-12 py-4 px-5", "\n    ");

  var Content = () => {
    return /*#__PURE__*/_react.default.createElement("div", null, icon != "none" && /*#__PURE__*/_react.default.createElement(_Search.SearchIcon, {
      color: "text-white",
      darkColor: "dark:text-black"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "font-semibold tracking-wide uppercase\n                        ".concat(type == "primary" && !props.forceDark && "text-white dark:text-brand-900", "\n                        ").concat(type == "primary" && props.forceDark && "text-brand-900", "\n                        ").concat(type == "tertiary" && !props.forceDark && "text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-200", "\n                        ").concat(type == "tertiary" && props.forceDark && "text-brand-400 hover:text-brand-200", "\n                        ").concat(size == "small" && "text-xxs", "\n                        ").concat(size == "default" && "text-xs", "\n                        ").concat(size == "large" && "text-sm", "\n                    ")
    }, text));
  };

  if (props.url) return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: props.url,
    className: cssClasses
  }, props), /*#__PURE__*/_react.default.createElement(Content, null));
  if (!props.url) return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: cssClasses
  }, props), /*#__PURE__*/_react.default.createElement(Content, null));
};

exports.Button = Button;