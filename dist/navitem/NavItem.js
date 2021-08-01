"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopUpNavItem = require("../popupnavitem/PopUpNavItem");

var _ArrowDown = require("../svg/ArrowDown");

var _ListNav = require("../listnav/ListNav");

var _excluded = ["caption", "link", "styles"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var NavItem = _ref => {
  var {
    caption = "Label",
    link = null,
    styles = "default/white"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var [mouseIn, setMouseIn] = (0, _react.useState)(false);
  var [mouseClick, setMouseClick] = (0, _react.useState)(false);
  var keys = [];

  try {
    keys = props.submenu === undefined || props.submenu === null ? [] : Object.keys(props.submenu);
  } catch (error) {
    console.log("sub menu structure error");
    keys = [];
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "w-max relative\n                ".concat(props.className ? props.className : "", "\n            "),
    style: {
      width: 'fit-content'
    },
    onMouseEnter: () => {
      setMouseIn(true);
      setMouseClick(true);
    },
    onMouseLeave: () => setMouseIn(false)
  }), /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
    onClick: () => setMouseClick(!mouseClick),
    type: styles == "default/white" ? "special" : "default",
    caption: caption,
    href: link,
    className: "flex items-center \n                    ".concat(mouseIn && styles == "default" ? "text-brand-600" : "", "\n                    ").concat(mouseIn && styles == "default/white" ? "text-brand-300" : "", "\n                    ").concat(mouseIn && styles == "flat" ? "text-brand-100 dark:text-brand-300" : "", "\n                ")
  }, keys.length > 0 && /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2.5"
  }, /*#__PURE__*/_react.default.createElement(_ArrowDown.ArrowDown, {
    color: "\n                                ".concat(!mouseIn && styles == "default" ? "text-gray-800" : "", "\n                                ").concat(!mouseIn && styles == "default/white" ? "text-gray-100" : "", "\n                                ").concat(!mouseIn && styles == "flat" ? "text-gray-100 dark:text-gray-100" : "", "\n                                ").concat(mouseIn && styles == "default" ? "text-brand-600" : "", "\n                                ").concat(mouseIn && styles == "default/white" ? "text-brand-300" : "", "\n                                ").concat(mouseIn && styles == "flat" ? "text-brand-300 dark:text-brand-300" : "", "\n                            "),
    darkColor: "text-gray-50"
  }))), mouseIn && mouseClick && keys.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute left-0 top-full pt-3.5 w-max"
  }, /*#__PURE__*/_react.default.createElement(_ListNav.ListNav, {
    styles: styles == "flat" ? "flat" : "elevated",
    linkList: props.submenu
  })));
};

exports.NavItem = NavItem;