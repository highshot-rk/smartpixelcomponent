"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderText = void 0;

var _react = _interopRequireDefault(require("react"));

var _BreadCrumb = require("../breadcrumb/BreadCrumb");

var _Input = require("../form/Input");

var _Button = require("../buttons/Button");

var _SP = require("../svg/SP");

var _excluded = ["breadcrumb"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var HeaderText = _ref => {
  var {
    breadcrumb = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: " flex flex-col\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.BreadCrumb, {
    crumblist: breadcrumb,
    styles: "fixed",
    className: "text-gray-50 pb-3"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-gray-50 fontStyle-5xl " // lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'

  }, props.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-50 text-base break-words pt-4"
  }, props.text), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-4"
  }, props.styles.type == "default" && /*#__PURE__*/_react.default.createElement("a", {
    href: props.styles.url,
    className: "bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300"
  }, props.styles.buttonText), props.styles.type == "form" && /*#__PURE__*/_react.default.createElement("form", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, {
    placeholder: props.styles.formPlaceholder
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: props.styles.buttonText,
    forceDark: "true",
    type: "primary",
    icon: "none",
    size: "large"
  })), props.styles.type == "case" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement(_SP.SP, {
    width: "48",
    height: "48"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 ml-7",
    href: props.styles.url
  }, props.styles.caseText))));
};

exports.HeaderText = HeaderText;