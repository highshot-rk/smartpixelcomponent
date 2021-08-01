"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Search = require("../svg/Search");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var SearchBar = props => {
  var [autoFocus, setInputFocus] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-72 flex rounded-lg items-center overflow-hidden\n                ".concat(!props.isDisabled && "hover:border-gray-300 dark:border-gray-400", " dark:bg-gray-800 dark:text-white text-base h-12 max-h-12 py-3 px-4 rounded-lg border border-gray-200 ").concat(props.isDisabled && "dark:border-gray-500", " focus:outline-none focus:ring-2 focus:border-input_focus focus:border-transparent\n                ").concat((props.isFocussed || autoFocus) && "shadow-input_focus outline-none ring-2 border-input_focus border-transparent dark:ring-offset-0"),
    defaultValue: props.text
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: props.isDisabled
  }, /*#__PURE__*/_react.default.createElement(_Search.SearchIcon, {
    color: "text-gray-600"
  })), /*#__PURE__*/_react.default.createElement("input", {
    disabled: props.isDisabled,
    className: "border-none ml-3.5 focus:outline-none dark:bg-gray-800 bg-white dark:text-white",
    defaultValue: props.text,
    placeholder: props.placeHolder,
    onFocus: () => setInputFocus(true),
    onBlur: () => setInputFocus(false)
  }));
};

exports.SearchBar = SearchBar;