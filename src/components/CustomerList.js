import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItems from './CustomerListItems';

const CustomerList = ({customer, urlPath}) => {
    return (
        <div>
            <div className="customer-list">
                {
                    customer.map(c => 
                        <CustomerListItems 
                                    key={c.dni} 
                                    dni={c.dni}
                                    name={c.name}
                                    editAction={'Editar'}
                                    delAction={'Eliminar'}
                                    urlPath={urlPath}>
                        </CustomerListItems>
                    )
                }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customer: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;