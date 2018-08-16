import React, { Component } from 'react';
import AppFrames from '../components/AppFrames';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';
import {withRouter} from 'react-router-dom';

const customers = [
    {
        "dni":"100001",
        "name":"Manuel Gonzalez",
        "age":"37",
    },
    {
        "dni":"200002",
        "name":"Manuel Gonzalez",
        "age":"37",
    },
    {
        "dni":"300003",
        "name":"Manuel Gonzalez",
        "age":"37",
    },
];

class CustomersContainer extends Component {

    addNew = () => {
        this.props.history.push('/customers/new');
    }

    renderbody = customer => (
        <div>
            <CustomerList customer={customer} urlPath={'customer/'}></CustomerList>
            <CustomerActions>
                <button onClick={this.addNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrames header="Listado de Clientes"
                            body={this.renderbody(customers)}></AppFrames>
            </div>
        );
    }
}


export default withRouter(CustomersContainer);