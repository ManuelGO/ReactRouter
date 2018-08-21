import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrames from "../components/AppFrames";
import { Route } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

class SingleCustomerContainer extends Component {
  renderBody = () => (
    <Route
      path="/customer/:dni/edit"
      children={({ match }) =>
        match ? (
          <CustomerEdit {...this.props.customer} /> //initialValues={this.props.customer} : el formulario en CustomerEdit (redux-form) toma initialValues. a partir de la propiedad name de cada Field
        ) : (
          <CustomerData {...this.props.customer} />
        )
      }
    />
  );
  render() {
    return (
      <div>
        <AppFrames
          header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}
        />
      </div>
    );
  }
}

SingleCustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  customer: state.customers.find(c => c.dni === props.dni)
});
export default connect(
  mapStateToProps,
  null
)(SingleCustomerContainer);
