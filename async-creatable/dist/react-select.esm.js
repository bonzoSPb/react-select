import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/assertThisInitialized';
import '@babel/runtime/helpers/possibleConstructorReturn';
import '@babel/runtime/helpers/getPrototypeOf';
import '@babel/runtime/helpers/inherits';
import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '@babel/runtime/helpers/typeof';
import '../../dist/index-e8b81353.esm.js';
import { S as Select } from '../../dist/Select-69df950d.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-a3b43064.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
