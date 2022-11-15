import React from "react";
import "./UserForm.module.css";
import { useFormik, ErrorMessage,Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  phone: Yup.string().max(10, "Must be 10 characters").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const UseFormNew = () => {
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

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input id="name" type="text" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label>Email</label>
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Phone</label>
          <input id="phone" type="number" {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseFormNew;
