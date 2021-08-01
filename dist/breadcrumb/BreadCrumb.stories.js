"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _BreadCrumb = require("./BreadCrumb");

var _default = {
  title: 'Tjikko/BreadCrumb',
  component: _BreadCrumb.BreadCrumb,
  argTypes: {
    styles: {
      control: {
        type: "select",
        options: ["fixed", "responsive"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The BreadCrumb'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_BreadCrumb.BreadCrumb, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  styles: "fixed",
  crumblist: [{
    name: "breadcrumb",
    url: "/bread1"
  }, {
    name: "breadcrumb",
    url: "/bread2"
  }, {
    name: "breadcrumb",
    url: "/bread3"
  }]
};