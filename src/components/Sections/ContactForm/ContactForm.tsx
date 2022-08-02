import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./ContactForm.module.scss";
import ButtonPrimary from "../../UI/ButtonPrimary";
import { FC } from "react";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  text: Yup.string()
    .min(2, "Too Short")
    .max(200, "Too Long")
    .required("Required"),
});

interface Props {
  popupState: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupTxt: React.Dispatch<
    React.SetStateAction<{
      message: string;
      btnTxt: string;
    }>
  >;
}

const ContactForm: FC<Props> = ({ popupState, setPopupTxt }) => {
  return (
    <div id="contact-me" className={classes["contact-me"]}>
      <div className={classes.container}>
        <Formik
          initialValues={{ name: "", email: "", text: "" }}
          validationSchema={ContactFormSchema}
          onSubmit={async (values, { resetForm }) => {
            await fetch(
              "https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
              {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((response) => {
                if (response.status >= 400 && response.status < 600) {
                  throw new Error(
                    `Bad response from server: error ${response.status}(${response.statusText})`
                  );
                }
                if (!response.ok) {
                  throw new Error("Message sending error");
                }
                return response;
              })
              .then((returnedResponse) => {
                setPopupTxt({
                  btnTxt: "ok",
                  message: "Message sent",
                });
                popupState(true);
                resetForm();
              })
              .catch((error) => {
                console.log(`${error}`);
                setPopupTxt({
                  btnTxt: "ok",
                  message: "Sending error",
                });
                popupState(true);
              });
          }}
        >
          {({ errors, touched, dirty, isValid }) => (
            <Form>
              <div className={classes["name-email"]}>
                <div className={classes.name}>
                  <div className={`${classes.labels}`}>
                    <label className={classes.label} htmlFor="name">
                      Your Name
                    </label>
                  </div>
                  <Field
                    className={`${classes.input} 
                    ${errors.name && touched.name && classes["input-error"]}
                  `}
                    id="name"
                    type="text"
                    autoComplete="off"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => (
                      <div className={classes["form-error"]}>{msg}</div>
                    )}
                  />
                </div>
                <div className={classes.email}>
                  <div className={classes.labels}>
                    <label className={classes.label} htmlFor="email">
                      Your Email
                    </label>
                  </div>
                  <Field
                    className={`${classes.input} ${
                      errors.email && touched.email && classes["input-error"]
                    }`}
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <div className={classes["form-error"]}>{msg}</div>
                    )}
                  />
                </div>
              </div>
              <div className={`${classes.textfield}`}>
                <div className={classes.labels}>
                  <label className={classes.label} htmlFor="text">
                    Your Message
                  </label>
                </div>
                <Field
                  as="textarea"
                  className={
                    errors.text && touched.text && classes["input-error"]
                  }
                  id="text"
                  name="text"
                />
                <ErrorMessage
                  className={classes[".form-error "]}
                  name="text"
                  render={(msg) => (
                    <div className={classes["form-error"]}>{msg}</div>
                  )}
                />
              </div>
              <ButtonPrimary
                isGreyedOut={!dirty || (dirty && !isValid)}
                type="submit"
                text="Send"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
