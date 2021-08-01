"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderText = require("../headertext/HeaderText");

var _reactMediaHook = require("react-media-hook");

var _bg_bigheader = _interopRequireDefault(require("../../assets/images/bg_bigheader.jpg"));

var _bunny = _interopRequireDefault(require("../../assets/images/bunny.mp4"));

var _excluded = ["bgImage"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BigHeader = _ref => {
  var {
    bgImage = "../images"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("header", _extends({}, props, {
    className: "min-h-568 lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative\n                ".concat(props.className ? props.className : '', "\n            "),
    style: {
      //backgroundImage: 'url(https://source.unsplash.com/random)'
      backgroundImage: "url(".concat(_bg_bigheader.default, ")")
    }
  }), props.bgtype == "video" && desktop && /*#__PURE__*/_react.default.createElement("video", {
    id: "videoBG",
    poster: _bg_bigheader.default,
    autoPlay: true,
    muted: true,
    loop: true,
    className: "absolute z-0 top-0 left-0 object-cover w-full h-full hidden sm:block"
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: _bunny.default,
    type: "video/mp4"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-10 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-10 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-20 bottom-0 left-0 p-6 lg:p-12 md:p-12 sm:p-12"
  }, /*#__PURE__*/_react.default.createElement(_HeaderText.HeaderText, _extends({}, props.headerinfo, {
    style: {
      backgroundColor: 'transparent'
    }
  }))));
};

exports.BigHeader = BigHeader;