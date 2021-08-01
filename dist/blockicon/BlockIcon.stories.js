"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _BlockIcon = require("./BlockIcon");

var _default = {
  title: 'Tjikko/blocks/BlockIcon',
  component: _BlockIcon.BlockIcon,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The BlockIcon'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_BlockIcon.BlockIcon, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "horizontal",
  imageurl: "",
  heading: "Heading",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
};