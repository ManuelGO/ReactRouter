import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import AppFrames from '../components/AppFrames';
import CustomerActions from '../components/CustomerActions';

class HomeContainer extends Component {
    onClickHandler = () => {
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
               <AppFrames header="Home Page" 
                        body={
                            <div>
                                Esta es la pantalla inicial.
                                <CustomerActions>
                                    <button onClick={this.onClickHandler}> Listado de Clientes </button>
                                </CustomerActions>
                            </div>
                        }>
                        </AppFrames>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);