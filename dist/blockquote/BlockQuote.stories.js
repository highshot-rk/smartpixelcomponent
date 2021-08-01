"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _BlockQuote = require("./BlockQuote");

var _default = {
  title: 'Tjikko/BlockQuote',
  component: _BlockQuote.BlockQuote,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The BlockQuote'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_BlockQuote.BlockQuote, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  speech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  avatarUrl: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random())),
  customerName: "Maria Lopez, VP of Design at Meshery"
};