"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopUpNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["caption", "type", "href", "isActive"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var PopUpNavItem = _ref => {
  var {
    caption = "Link",
    type = "default",
    href = "#",
    isActive = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "flex items-center\n                ".concat(type != "default" && "uppercase", "\n                ").concat(type == "special" && "px-3 py-2.5 text-gray-100 tracking-wider font-semibold text-sm ", "\n                    ").concat(type == "special" && !isActive && "hover:text-brand-300 dark:text-gray-100 dark:hover:text-brand-300", "\n                    ").concat(type == "special" && isActive && "text-brand-300 dark:text-brand-300", "\n                ").concat(type == "default" && "px-3 py-2.5 text-sm  ", "\n                    ").concat(type == "default" && !isActive && "text-gray-800  hover:text-brand-600 dark:text-gray-100 dark:hover:text-brand-300", "\n                    ").concat(type == "default" && isActive && "text-brand-600 dark:text-brand-300", "\n                ").concat(type == "header" && "px-3 py-2.5 font-semibold tracking-wider text-gray-800 text-sm dark:text-gray-100", "\n                ").concat(type == "button" && "px-3 py-3.5 tracking-wider text-xs font-semibold ", "\n                    ").concat(type == "button" && !isActive && "text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-100", "\n                    ").concat(type == "button" && isActive && "text-brand-700 dark:text-brand-100", "\n            "),
    style: {
      width: 'fit-content'
    }
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: href
  }, caption), props.children ? props.children : "");
};

exports.PopUpNavItem = PopUpNavItem;