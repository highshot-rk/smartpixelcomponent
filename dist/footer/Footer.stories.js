"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Footer = require("./Footer");

var _default = {
  title: 'Tjikko/Footer',
  component: _Footer.Footer,
  argTypes: {// type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The Footer'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Footer.Footer, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  footermenu: [{
    caption: 'Why Smart Pixel',
    menuList: [{
      name: "Features",
      url: "/Features"
    }, {
      name: "Customers Success Stories",
      url: "/customers"
    }, {
      name: "Quality & Reliability",
      url: "/quality"
    }]
  }, {
    caption: 'Solutions by INDUSTRY',
    menuList: [{
      name: "Real estate",
      url: "/real"
    }, {
      name: "Others",
      url: "/others"
    }]
  }, {
    caption: 'Solutions BY USE CASE',
    menuList: [{
      name: "Sales Officee",
      url: "/sale"
    }, {
      name: "Presentation",
      url: "/presentation"
    }, {
      name: "Remote",
      url: "/remote"
    }]
  }, {
    caption: 'Other links',
    menuList: [{
      name: "Portfolio",
      url: "/portfolio"
    }, {
      name: "Company",
      url: "/company"
    }, {
      name: "Contact us",
      url: "/contact"
    }, {
      name: "Career",
      url: "/career"
    }]
  }]
};