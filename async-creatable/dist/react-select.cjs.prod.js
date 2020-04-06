"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray"), 
require("@babel/runtime/helpers/defineProperty"), require("@babel/runtime/helpers/classCallCheck"), 
require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/assertThisInitialized"), 
require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), 
require("@babel/runtime/helpers/inherits"), require("react"), require("memoize-one"), 
require("@emotion/core"), require("react-dom"), require("prop-types"), require("@babel/runtime/helpers/typeof"), 
require("../../dist/index-01ac1b69.cjs.prod.js");

var reactSelect = require("../../dist/Select-64187808.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("../../dist/stateManager-f7f98a2b.cjs.prod.js"), reactSelect$1 = require("../../async/dist/react-select.cjs.prod.js"), reactSelect$2 = require("../../creatable/dist/react-select.cjs.prod.js"), SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select), SelectCreatableState = stateManager.manageState(SelectCreatable), AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
