"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _TertiaryBlock = require("./TertiaryBlock");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/TertiaryBlock',
  component: _TertiaryBlock.TertiaryBlock,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "vertical"]
      }
    },
    mirror: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {
    componentSubtitle: 'The TertiaryBlock'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_TertiaryBlock.TertiaryBlock, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "default",
  mirror: false,
  imageurl: "https://source.unsplash.com/random",
  info: {
    head: "Heading",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo."
  }
};
var WidthControl = Template.bind({});
exports.WidthControl = WidthControl;
WidthControl.args = _objectSpread({
  className: "w-80"
}, Default.args);