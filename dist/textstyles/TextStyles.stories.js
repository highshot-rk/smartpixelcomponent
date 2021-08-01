"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Headings = exports.Body = exports.All = exports.default = void 0;

var _TextStyles = require("./TextStyles");

var _default = {
  title: 'Tjikko/Styles/Text Styles',
  component: _TextStyles.TextStyles,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The TextStyles'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_TextStyles.TextStyles, args);

var All = Template.bind({});
exports.All = All;
All.args = {
  type: "all"
};
var Body = Template.bind({});
exports.Body = Body;
Body.args = {
  type: "body"
};
var Headings = Template.bind({});
exports.Headings = Headings;
Headings.args = {
  type: "heading"
};