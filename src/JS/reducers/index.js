import React from 'react';
import { combineReducers } from 'redux';
import {authenticate} from './authenticate'


export default combineReducers({
	authentic: authenticate,

})