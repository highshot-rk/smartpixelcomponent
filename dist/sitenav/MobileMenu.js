"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavItem = require("../navitem/NavItem");

var _excluded = ["demobuttontext", "demourl", "styles", "menudata"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var MobileMenu = _ref => {
  var {
    demobuttontext = "Free Demo",
    demourl = "#",
    styles = "black",
    menudata = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "bg-gray-900\n                ".concat(styles == "transWhite" && "bg-opacity-10", "\n            ")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between pb-5 pt-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demourl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demobuttontext)), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "mr-7",
    styles: "default/white",
    caption: props.languagelist.current ? props.languagelist.current : "En",
    submenu: props.languagelist.submenu
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mx-2 bg-opacity-10 mt-6 text-gray-400"
  }), menudata.map((menu, menuIndex) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: menuIndex
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "font-borda uppercase text-gray-50 text-lg tracking-widest pl-6 pt-6 "
    }, menu.submenu == null ? /*#__PURE__*/_react.default.createElement("a", {
      href: menu.captionlink
    }, menu.caption) : menu.caption), /*#__PURE__*/_react.default.createElement("div", null, menu.submenu == null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement("div", {
      className: "grid grid-cols-2"
    }, menu.submenu.map((group, groupIndex) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: groupIndex
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text-gray-100 font-semibold tracking-wider text-sm pl-6 pt-5"
      }, group.groupcaption), group.grouplist.map((item, itemIndex) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "px-6 pt-5 text-gray-100",
          key: itemIndex
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: "\n                                                                                ".concat(item.type == "button" && "text-brand-300 hover:text-brand-600", "\n                                                                            "),
          href: item.url
        }, item.name));
      }));
    }))), menudata.length - 1 > menuIndex && /*#__PURE__*/_react.default.createElement("hr", {
      className: "mx-2 bg-opacity-10 mt-6 text-gray-400"
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-20"
  }));
};

exports.MobileMenu = MobileMenu;