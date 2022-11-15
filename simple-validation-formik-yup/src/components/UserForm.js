import React from "react";
import "./UserForm.module.css";
import { useFormik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  phone: Yup.string().max(10, "Must be 10 characters").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  //console.log(formik.errors);

  return (
      <form  onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Email</label>
          <Field id="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label>Phone</label>
          <Field id="phone" type="number" />
          <ErrorMessage name="phone" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form >
  );
};

export default UserForm;
