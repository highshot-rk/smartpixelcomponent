"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _Error = require("../svg/Error");

var _Validating = require("../svg/Validating");

var _Tick = require("../svg/Tick");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var TextArea = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-y-1 w-72"
  }, props.label && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-semibold flex flex-row justify-between dark:text-gray-300 ".concat(props.isDisabled && "text-gray-500 dark:text-gray-600")
  }, /*#__PURE__*/_react.default.createElement("p", null, props.label), props.isError && props.label && /*#__PURE__*/_react.default.createElement(_Error.ErrorIcon, {
    color: "text-red-600",
    darkColor: "dark:text-red-500"
  }), props.isValidating && props.label && /*#__PURE__*/_react.default.createElement(_Validating.ValidatingIcon, {
    color: "text-blue-600",
    darkColor: "dark:text-blue-500"
  }), props.isSuccess && props.label && /*#__PURE__*/_react.default.createElement(_Tick.TickIcon, {
    color: "text-green-600",
    darkColor: "dark:text-green-500"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "".concat(!props.isDisabled && "hover:border-gray-300 dark:border-gray-400", " dark:bg-gray-800 dark:text-white text-base py-3 px-4 rounded-lg border border-gray-200 ").concat(props.isDisabled && "dark:border-gray-500", " w-72 focus:outline-none focus:ring-2 focus:border-input_focus focus:shadow-input_focus focus:border-transparent\n                    ").concat(props.isFocussed && "shadow-input_focus outline-none ring-2 border-input_focus border-transparent dark:ring-offset-0", "\n                    ").concat(props.isError && "drop-shadow-sm outline-none ring-2 dark:ring-red-500 ring-red-600 border-transparent dark:ring-offset-0", "\n                    ").concat(props.isValidating && "drop-shadow-sm outline-none ring-2 dark:ring-blue-500 ring-blue-600 border-transparent dark:ring-offset-0", "\n                    ").concat(props.isSuccess && "drop-shadow-sm outline-none ring-2 dark:ring-green-500 ring-green-600 border-transparent dark:ring-offset-0"),
    defaultValue: props.text,
    placeholder: props.placeholder,
    disabled: props.isDisabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal dark:text-gray-300 ".concat(props.isDisabled && "text-gray-500 dark:text-gray-600", " ")
  }, props.information), props.isError && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-red-700"
  }, props.error));
};

exports.TextArea = TextArea;