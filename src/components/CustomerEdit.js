import React from "react";
import PropTypes from "prop-types";
import { setPropsAsInitial } from "../HOC/setPropsAsInitial";
import { reduxForm, Field } from "redux-form"; //HOC!!!

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="dni">DNI</label>
          <Field name="dni" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="age">EDAD</label>
          <Field name="age" component="input" type="number" />
        </div>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.string
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
