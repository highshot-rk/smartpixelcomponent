"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["styles", "crumblist"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BreadCrumb = _ref => {
  var {
    styles = "responsive",
    crumblist = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("nav", _extends({}, props, {
    "aria-label": "Breadcrumb",
    className: "\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap"
  }, crumblist.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "fontStyle-xl\n                                        ".concat(styles == 'fixed' && "", "\n                                        ").concat(styles == 'responsive' && "hover:text-brand-300"),
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: styles == 'responsive' ? item.url : null
    }, item.name)), crumblist.length - 1 > index && /*#__PURE__*/_react.default.createElement("span", {
      className: "px-2.5"
    }, "/"));
  })));
};

exports.BreadCrumb = BreadCrumb;