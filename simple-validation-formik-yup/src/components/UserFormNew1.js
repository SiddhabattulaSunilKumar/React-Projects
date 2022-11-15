import React from "react";
import "./UserForm.module.css";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  phone: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const UseFormNew1 = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label>Phone</label>
          <Field name="phone" type="text" />
          <ErrorMessage name="phone" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default UseFormNew1;
