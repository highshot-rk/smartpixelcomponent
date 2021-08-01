"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _PopUpNavItem = require("../popupnavitem/PopUpNavItem");

var _excluded = ["styles", "linkList"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var ListNav = _ref => {
  var {
    styles = "elevated",
    linkList = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  linkList = linkList == null || linkList == undefined ? [] : linkList;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-lg bg-gray-50 dark:bg-transparent px-3 py-2.5 w-max\n                ".concat(styles == "elevated" && "shadow-lg", "\n                ").concat(linkList.length > 1 && styles == "elevated" && "flex", "\n                ").concat(linkList.length > 1 && styles == "flat" && "grid grid-cols-2", "\n            "),
    style: {
      width: 'fit-content'
    }
  }, linkList.map((menu, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "m-1.5 w-max",
      key: index
    }, linkList.length > 1 && /*#__PURE__*/_react.default.createElement("div", {
      className: "font-semibold text-sm leading-5 uppercase px-3 py-2.5 dark:text-gray-100 text-gray-800"
    }, menu.groupcaption), menu.grouplist.map((menuItem, subIndex) => {
      return /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
        caption: menuItem.name,
        type: menuItem.type ? menuItem.type : "default",
        key: subIndex,
        className: "px-3 py-2.5",
        href: menuItem.url
      });
    }));
  }));
};

exports.ListNav = ListNav;