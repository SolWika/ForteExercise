import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import {
  EditForm,
  FieldContainer,
  Label,
  StyledField,
  StyledInlineErrorMessage,
  DateContainer,
  DatePickerContainer,
  Button,
} from "./FormCard.style";
import { WarningIcon } from "../../styles/Icon.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/es";

export const FormCard = ({ intern }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date(intern.internshipStart));
  const [endDate, setEndDate] = useState(new Date(intern.internshipEnd));
  registerLocale("en", en);
  setDefaultLocale("en");

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: intern.name || "",
          email: intern.email || "",
          startDate: intern.internshipStart || "",
          endDate: intern.internshipEnd || "",
        }}
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
          if (!values.startDate) {
            errors.startDate = "This Field is required";
          }
          if (!values.endDate) {
            errors.endDate = "This Field is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let data = {
            id: intern.id,
            name: values.name,
            email: values.email,
            internshipStart: values.startDate,
            internshipEnd: values.endDate,
          };
          setSubmitting(true);
          fetch(`http://localhost:3001/interns/${intern.id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          });
          setSubmitting(false);
          // navigate("/");
        }}
      >
        {({ isSubmitting, errors, touched, values, setFieldValue }) => (
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

            <DateContainer>
              <DatePickerContainer>
                <Label>Internship start *</Label>
                <DatePicker
                  className={errors.email && touched.email ? "invalid" : null}
                  wrapperClassName="date-picker"
                  locale="en"
                  selected={startDate}
                  onChange={(date) => {
                    setFieldValue("startDate", date);
                    setStartDate(date);
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd.MM.yyyy"
                />
                <WarningIcon className={errors.startDate && touched.startDate ? "invalid" : null} />
                <StyledInlineErrorMessage name="startDate" component="div" />
              </DatePickerContainer>

              <DatePickerContainer>
                <Label>Internship end *</Label>
                <DatePicker
                  wrapperClassName="date-picker"
                  locale="en"
                  selected={endDate}
                  onChange={(date) => {
                    setFieldValue("endDate", date);
                    setEndDate(date);
                  }}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd.MM.yyyy"
                />
                <WarningIcon className={errors.endDate && touched.endDate ? "invalid" : null} />
                <StyledInlineErrorMessage name="endDate" component="div" />
              </DatePickerContainer>
            </DateContainer>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </EditForm>
        )}
      </Formik>
    </>
  );
};
