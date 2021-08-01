"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMediaHook = require("react-media-hook");

var _outline = require("@heroicons/react/outline");

var _react2 = require("@headlessui/react");

var _Logo = require("../svg/Logo");

var _NavItem = require("../navitem/NavItem");

var _MobileMenu = require("./MobileMenu");

var _excluded = ["demobuttontext", "demourl", "menudata", "styles"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var SiteNav = _ref => {
  var {
    demobuttontext = "Free Demo",
    demourl = "#",
    menudata = [],
    styles = "black"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var [mobileExpand, setMobileExpand] = (0, _react.useState)(false);
  var large = (0, _reactMediaHook.useMediaPredicate)("(min-width: 1024px)");
  var medium = (0, _reactMediaHook.useMediaPredicate)("(max-width: 1023px)");
  var mobile = (0, _reactMediaHook.useMediaPredicate)("(max-width: 640px)");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "bg-gray-900 flex items-center justify-between md:justify-Start\n                ".concat(styles == "transWhite" && "bg-opacity-10", "\n                ").concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xl"
  }, "Hello"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-7 lg:pt-10 lg:pb-9 lg:pl-10 sm:pl-6 pl-6 md:py-8 sm:pt-6 sm:pb-7"
  }, /*#__PURE__*/_react.default.createElement(_Logo.Logo, {
    width: large ? "269" : medium ? "215" : mobile ? "161" : "269",
    height: large ? "20" : medium ? "16" : mobile ? "12" : "20"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex m-auto items-center"
  }, menudata.map((menuitem, index) => {
    return /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
      key: index,
      link: menuitem.captionlink ? menuitem.captionlink : "",
      styles: "default/white",
      caption: menuitem.caption,
      submenu: menuitem.submenu,
      className: "mr-9"
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex items-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demourl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demobuttontext), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "pl-6 lg:mr-11 sm:mr-9",
    styles: "default/white",
    caption: props.languagelist.current ? props.languagelist.current : "En",
    submenu: props.languagelist.submenu
  })), /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-transparent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "md:hidden mr-4"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-transparent inline-flex items-center justify-center",
    onClick: () => setMobileExpand(!mobileExpand)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), mobileExpand ? /*#__PURE__*/_react.default.createElement(_outline.XIcon, {
    className: "text-gray-300 w-5 h-5"
  }) : /*#__PURE__*/_react.default.createElement(_outline.MenuIcon, {
    className: "h-5 w-5\n                                    ".concat(styles == "black" && "text-gray-300", "\n                                    ").concat(styles == "transWhite" && "text-gray-300", "\n                                ")
  }))))), mobileExpand ? /*#__PURE__*/_react.default.createElement(_MobileMenu.MobileMenu, _extends({
    styles: styles,
    menudata: menudata
  }, props)) : "");
};

exports.SiteNav = SiteNav;