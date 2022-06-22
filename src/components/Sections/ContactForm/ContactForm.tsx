import {
  Form,
  Formik,
  Field,
  ErrorMessage,
  FormikErrors,
  FormikTouched,
} from "formik";
import classes from "./ContactForm.module.scss";
import ButtonBig from "../../UI/ButtonBig";

const ContactForm = () => {
  const checkErrorsAndTouched = (
    errors: FormikErrors<{ name: string; email: string; text: string }>,
    touched: FormikTouched<{ name: string; email: string; text: string }>
  ) => {
    return (
      Object.keys(errors).length > 0 ||
      !touched.name ||
      !touched.email ||
      !touched.text
    );
  };

  return (
    <div id="contact-me" className={classes["contact-me"]}>
      <div className={classes.container}>
        <Formik
          initialValues={{ name: "", email: "", text: "" }}
          validate={(values) => {
            const errors: { [key: string]: string } = {};
            if (!values.name) {
              errors.name = "Required";
            } else if (values.name.length < 2) {
              errors.name = "> 1 characters";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email";
            }
            if (!values.text) {
              errors.text = "Required";
            } else if (values.text.length < 2) {
              errors.text = "> 2 characters";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await fetch(
              "https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
              {
                method: "POST",
                body: JSON.stringify(values, null, 2),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();
            console.log(data);
          }}
        >
          {({ errors, touched }) => (
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

              <ButtonBig
                isGreyedOut={
                  checkErrorsAndTouched(errors, touched) ? true : false
                }
                type={
                  checkErrorsAndTouched(errors, touched) ? "button" : "submit"
                }
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
