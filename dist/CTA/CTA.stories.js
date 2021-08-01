"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _CTA = require("./CTA");

var _default = {
  title: 'Tjikko/blocks/CTA',
  component: _CTA.CTA,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The CTA'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_CTA.CTA, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  ctalist: [{
    name: "MAIN cta",
    url: "#"
  }, {
    name: "SECONDARY CTA",
    url: "#"
  }],
  caption: "We can also create any simulated realities",
  description: "for any use case you may have in mind"
};