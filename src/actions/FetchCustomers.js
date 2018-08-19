import {FETCH_CUSTOMERS} from './../constants'
import { createAction} from 'redux-actions';

const customers = [
    {
        "dni":"100001",
        "name":"Manuel Gonzalez",
        "age":"37",
    },
    {
        "dni":"200002",
        "name":"Manuel Arvelo",
        "age":"37",
    },
    {
        "dni":"300003",
        "name":"Manuel Gonzalez",
        "age":"37",
    },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);