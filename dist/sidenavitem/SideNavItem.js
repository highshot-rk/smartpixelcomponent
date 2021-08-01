"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _excluded = ["url", "type", "text", "status", "spacer", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var SideNavItem = _ref => {
  var {
    url = "#",
    type = "linkheader",
    text = "Link Header",
    status = "default",
    spacer = false,
    children = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("li", _extends({}, props, {
    className: "list-none border-l-2 pr-3 \n                ".concat(spacer ? "py-1.5" : "py-2.5", " \n                ").concat(type == "link" ? "pl-7" : "pl-5", "\n                ").concat(status == "default" ? "border-gray-100" : "border-brand-600 text-brand-700", "\n                hover:border-brand-600 hover:text-brand-700 text-gray-600 cursor-pointer\n            ")
  }), spacer ? "" : /*#__PURE__*/_react.default.createElement("a", {
    href: url ? url : "#",
    className: "fontStyle-sm\n                    ".concat(type == "header" ? "font-semibold" : "", "\n                ")
  }, text));
};

exports.SideNavItem = SideNavItem;