"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTA = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../buttons/Button");

var _excluded = ["ctalist", "caption", "description"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var CTA = _ref => {
  var {
    ctalist = [],
    caption = "",
    description = ""
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full py-24 text-center bg-gray-900"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-4xl text-gray-50"
  }, caption && caption !== "" ? caption : "We can also create any simulated realities"), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-Inter text-lg text-gray-50 mt-4 leading-7 mb-7"
  }, description && description !== "" ? description : "for any use case you may have in mind"), /*#__PURE__*/_react.default.createElement("div", {
    className: "inline-flex space-x-4"
  }, ctalist.map((cta, index) => index == 0 && /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: cta.name,
    url: cta.url,
    type: "primary",
    icon: "none",
    size: "large"
  }) || /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: cta.name,
    url: cta.url,
    type: "tertiary",
    icon: "none",
    size: "large"
  }))));
};

exports.CTA = CTA;