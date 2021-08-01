"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _SideNav = require("./SideNav");

var _default = {
  title: 'Tjikko/SideNav',
  component: _SideNav.SideNav,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The SideNav'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SideNav.SideNav, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  navObj: [{
    type: "linkheader",
    status: "active",
    text: "All",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "header",
    status: "default",
    text: "Use case",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Event",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Sales office",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Presentation",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Remote",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "header",
    status: "default",
    text: "Industry",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Residential",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Commercial",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Engineering",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Mix",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }]
};