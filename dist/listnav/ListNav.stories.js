"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiData = exports.SingleData = exports.default = void 0;

var _ListNav = require("./ListNav");

var _default = {
  title: 'Tjikko/ListNav',
  component: _ListNav.ListNav,
  argTypes: {
    styles: {
      control: {
        type: "select",
        options: ["flat", "elevated"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons ListNav'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_ListNav.ListNav, args);

var SingleData = Template.bind({});
exports.SingleData = SingleData;
SingleData.args = {
  linkList: [{
    groupcaption: "Group 01",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL",
      type: "button"
    }]
  }]
};
var MultiData = Template.bind({});
exports.MultiData = MultiData;
MultiData.args = {
  linkList: [{
    groupcaption: "Group 01",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL",
      type: "button"
    }]
  }, {
    groupcaption: "Group 02",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL"
    }]
  }, {
    groupcaption: "Group 03",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL"
    }]
  }]
};