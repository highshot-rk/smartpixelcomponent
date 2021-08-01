"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _SiteNav = require("./SiteNav");

var _default = {
  title: 'Tjikko/SiteNav',
  component: _SiteNav.SiteNav,
  argTypes: {
    styles: {
      control: {
        type: "select",
        options: ["black", "transWhite"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons SiteNav'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SiteNav.SiteNav, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  styles: "black",
  languagelist: {
    current: "En",
    submenu: [{
      groupcaption: null,
      grouplist: [{
        name: "De",
        url: "/de"
      }, {
        name: "Afr",
        url: "/afr"
      }]
    }]
  },
  menudata: [{
    caption: "Why SmartPixel",
    submenu: [{
      groupcaption: null,
      grouplist: [{
        name: "Features",
        url: "/features"
      }, {
        name: "Customer Success Stories",
        url: "/customer"
      }, {
        name: "Quality and reliability",
        url: "/quality"
      }, {
        name: "Contact Sales team",
        url: "/contact",
        type: "button"
      }]
    }]
  }, {
    caption: "Solutions",
    submenu: [{
      groupcaption: "BY INDUSTRY",
      grouplist: [{
        name: "Real estate",
        url: "/real"
      }, {
        name: "Others",
        url: "/thers"
      }]
    }, {
      groupcaption: "BY USE CASE",
      grouplist: [{
        name: "Sales Office",
        url: "/sale"
      }, {
        name: "Presentation",
        url: "/presentation"
      }, {
        name: "Remote",
        url: "/remote"
      }, {
        name: "Contact Sales team",
        url: "/contact",
        type: "button"
      }]
    }]
  }, {
    caption: "Portfolio",
    captionlink: "/protfolio",
    submenu: null
  }]
};