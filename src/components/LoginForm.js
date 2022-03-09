import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="form-group border p-4 rounded mt-5 ">
            <div className="row">
              <FormikControl
                control="input"
                // control='chakraInput'
                type="email"
                label="Email"
                name="email"
              />
            </div>
            <div className="row">
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
            </div>

            <button
              className="btn btn-success"
              type="submit"
              disabled={!formik.isValid}
            >
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
