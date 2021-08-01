"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compact = exports.Default = exports.default = void 0;

var _LogoPizza = require("./LogoPizza");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/LogoPizza',
  component: _LogoPizza.LogoPizza,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The LogoPizza'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_LogoPizza.LogoPizza, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  companyArr: [{
    imgUrl: "./images/test_logo_01.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_02.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_03.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_04.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_05.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_06.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_07.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_08.png",
    href: "#"
  } //{ imgUrl: "../../assets/images/test_logo_09.png", href: "#" },
  ],
  mode: "Default"
};
var Compact = Template.bind({});
exports.Compact = Compact;
Compact.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  mode: "Compact"
});