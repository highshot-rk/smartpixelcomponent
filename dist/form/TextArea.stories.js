"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Success = exports.Validate = exports.Error = exports.Focused = exports.Text = exports.default = void 0;

var _TextArea = require("./TextArea");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/Forms/TextArea',
  component: _TextArea.TextArea,
  parameters: {
    componentSubtitle: 'The Forms/TextArea'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_TextArea.TextArea, args);

var Text = Template.bind({});
exports.Text = Text;
Text.args = {
  text: 'Text Area',
  placeholder: 'Placeholder',
  information: 'informations',
  error: 'Error Message',
  label: 'Label'
};
var Focused = Template.bind({});
exports.Focused = Focused;
Focused.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isFocussed: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isError: true
});
var Validate = Template.bind({});
exports.Validate = Validate;
Validate.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isValidating: true
});
var Success = Template.bind({});
exports.Success = Success;
Success.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isSuccess: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  text: "",
  isDisabled: true
});