"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoPizza = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFastMarquee = _interopRequireDefault(require("react-fast-marquee"));

var _excluded = ["companyArr", "mode"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var LogoPizza = _ref => {
  var {
    companyArr = [],
    mode = "Default"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "logo-pizza"
  }, props), /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(mode == "Compact" ? "text-2xl" : "text-4xl", " text-center mb-16")
  }, "Trusted by"), /*#__PURE__*/_react.default.createElement(_reactFastMarquee.default, {
    gradientWidth: "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16"
  }, companyArr.map((company, id) => /*#__PURE__*/_react.default.createElement("div", {
    key: id,
    className: mode == "Default" ? "h-14 lg:h-24 md:h-20" : "h-14 lg:h-16 md:h-12"
  }, company.imgUrl && company.imgUrl !== "" ? /*#__PURE__*/_react.default.createElement("img", {
    className: "w-auto h-full",
    src: company.imgUrl ? company.imgUrl : "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-full bg-black"
  }))))));
};

exports.LogoPizza = LogoPizza;