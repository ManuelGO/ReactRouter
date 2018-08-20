import {FETCH_CUSTOMERS} from './../constants'
import { createAction} from 'redux-actions';
import {getCustomers} from '../services';


export const fetchCustomers = createAction(FETCH_CUSTOMERS, getCustomers);