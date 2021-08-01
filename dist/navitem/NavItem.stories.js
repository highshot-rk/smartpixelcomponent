"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiData = exports.SingleData = exports.None = exports.default = void 0;

var _NavItem = require("./NavItem");

var _default = {
  title: 'Tjikko/NavItem',
  component: _NavItem.NavItem,
  argTypes: {
    styles: {
      control: {
        type: "select",
        options: ["default", "default/white", "flat"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons NavItem'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_NavItem.NavItem, args);

var None = Template.bind({});
exports.None = None;
None.args = {
  styles: "default",
  submenu: null
};
var SingleData = Template.bind({});
exports.SingleData = SingleData;
SingleData.args = {
  submenu: [{
    groupcaption: "Group 01",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL",
      type: "link"
    }, {
      name: "Link 02",
      url: "/linkURL",
      type: "button"
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
  submenu: [{
    groupcaption: "Group 01",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL",
      type: "link"
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
      url: "/linkURL",
      type: "link"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL",
      type: "link"
    }]
  }, {
    groupcaption: "Group 03",
    grouplist: [{
      name: "Link 01",
      url: "/linkURL",
      type: "button"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL"
    }]
  }]
};