import { FormikValues, useFormik, FormikErrors } from 'formik';
import classes from './ContactForm.module.scss';
import ButtonBig from '../../UI/ButtonBig';
import { useState } from 'react';
// import Email from '../../Utils/smtp.js';

//TODO send email
// const sendEmail = (values) => {
//   Email.send({
//     Host: 'smtp.gmail.com',
//     Username: 'portfoliod3s@gmail.com',
//     Password: 'ZAQ!2wsx',
//     To: 'damiansobierajdev@gmail.com',
//     From: values.email,
//     Subject: 'Contact from Portfolio',
//     Body: `${values.email} ${values.text}`,
//   }).then(message => alert(message));
// };

const ContactForm = () => {
  const [formHasError, setFormHasError] = useState(true);
  const validate = (values: FormikValues) => {
    const errors: FormikErrors<any> = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 2) {
      errors.name = '> 1 characters';
    }

    if (!values.text) {
      errors.text = 'Required';
    } else if (values.text.length < 2) {
      errors.text = '> 2 characters';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email';
    }
    if (Object.keys(errors).length === 0) {
      setFormHasError(false);
    } else {
      setFormHasError(true);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },
    validate,
    onSubmit: async values => {
      // sendEmail(values);
      const response = await fetch(
        'https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/emails.json',
        {
          method: 'POST',
          body: JSON.stringify(values, null, 2),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      console.log(data);
    },
  });

  const checkErrors = (
    inptName: 'name' | 'email' | 'text'
  ): JSX.Element | string | null => {
    if (formik.errors[inptName] && formik.touched[inptName]) {
      const errorDiv = (
        <div className={classes['form-error']}>{formik.errors[inptName]}</div>
      );
      return errorDiv;
    }
    return null;
  };

  function checkErrorState(inptName: 'name' | 'email' | 'text') {
    if (formik.errors[inptName] && formik.touched[inptName]) {
      return classes['input-error'];
    } else return undefined;
  }

  const checkCorner = (inptName: 'name' | 'email' | 'text') => {
    if (formik.errors[inptName] && formik.touched[inptName])
      return classes['error-corner'];
    else return null;
  };

  const checkError = (inptName: 'name' | 'email' | 'text') => {
    if (formik.errors[inptName] && formik.touched[inptName])
      return classes['label--error'];
    else return null;
  };

  return (
    <div id='contact-me' className={classes['contact-me']}>
      <div className={classes.container}>
        {/* <form onSubmit={e => e.preventDefault()}> */}
        <form onSubmit={formik.handleSubmit}>
          <div className={classes['name-email']}>
            <div className={`${classes.name} ${checkCorner('name')}`}>
              <div className={`${classes.labels}`}>
                <label
                  className={`${classes.label} ${checkError('name')}`}
                  htmlFor='name'
                >
                  Your Name
                </label>
                {checkErrors('name')}
              </div>
              <input
                className={`${classes.input} ${checkErrorState('name')}`}
                id='name'
                type='text'
                autoComplete='off'
                name='name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className={`${classes.email} ${checkCorner('email')}`}>
              <div className={classes.labels}>
                <label
                  className={`${classes.label} ${checkError('email')}`}
                  htmlFor='email'
                >
                  Your Email
                </label>
                {checkErrors('email')}
              </div>
              <input
                className={`${classes.input} ${checkErrorState('email')}`}
                id='email'
                type='email'
                name='email'
                autoComplete='off'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className={`${classes.textfield}`}>
            <div className={classes.labels}>
              <label
                className={`${classes.label} ${checkError('text')}`}
                htmlFor='text'
              >
                Your Message
              </label>
              {checkErrors('text')}
            </div>
            <textarea
              className={checkErrorState('text')}
              id='text'
              name='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.text}
            />
          </div>
          <ButtonBig
            isGreyedOut={formHasError ? true : false}
            type={formHasError ? 'button' : 'submit'}
            text='Send'
          ></ButtonBig>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
