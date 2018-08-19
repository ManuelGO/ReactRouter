import React, { Component } from 'react';
import AppFrames from '../components/AppFrames';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCustomers} from './../actions/FetchCustomers';
import { getCustomers } from '../components/selectors/customers';

class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
    }

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
                            body={this.renderbody(this.props.customers)}></AppFrames>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
}

//const mapDispatchToProps = { fetchCustomers}

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers})(CustomersContainer));