import { useState } from "react";
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
import { format, parseISO } from "date-fns";
import en from "date-fns/locale/es";
registerLocale("en", en);

export const FormCard = ({ intern }) => {
  const dateFormatted = format(new Date("2021-09-20T12:12:36.166584+02:00"), "dd.MM.yyyy");
  console.log(dateFormatted);
  const [startDate, setStartDate] = useState(new Date("2022/02/08"));
  const [endDate, setEndDate] = useState(new Date("2022/02/10"));
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

            <DateContainer>
              <DatePickerContainer>
                <Label>Internship start *</Label>
                <DatePicker
                  className={errors.email && touched.email ? "invalid" : null}
                  wrapperClassName="date-picker"
                  locale="en"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd.MM.yyyy"
                  // value={values.startDate}
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
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd.MM.yyyy"
                />
                <WarningIcon className={errors.startDate && touched.startDate ? "invalid" : null} />
                <StyledInlineErrorMessage name="email" component="div" />
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
