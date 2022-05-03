import React from "react";
import { Formik } from "formik";
import { EditForm, FieldContainer, Label, StyledField, StyledInlineErrorMessage, Button } from "./FormCard.style";
import { WarningIcon } from "../../styles/Icon.style";
export const FormCard = (props) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ name: props.intern.name || "", email: props.intern.email || "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

          if (!values.name) {
            errors.name = "This Field is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <EditForm>
            <FieldContainer>
              <Label>Full name *</Label>
              <StyledField
                className={errors.name && touched.name ? "invalid" : null}
                type="name"
                name="name"
                placeholder="Full Name"
                value={values.name}
              />
              <WarningIcon className={errors.name && touched.name ? "invalid" : null} />
              <StyledInlineErrorMessage name="name" component="div" />
            </FieldContainer>

            <FieldContainer>
              <Label>Email address *</Label>
              <StyledField
                className={errors.email && touched.email ? "invalid" : null}
                type="email"
                name="email"
                placeholder="email"
                value={values.email}
              />
              <WarningIcon className={errors.email && touched.email ? "invalid" : null} />
              <StyledInlineErrorMessage name="email" component="div" />
            </FieldContainer>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </EditForm>
        )}
      </Formik>
    </>
  );
};
