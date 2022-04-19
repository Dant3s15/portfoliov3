import { FormikValues, useFormik, FormikErrors } from 'formik';
import classes from './ContactForm.module.scss';
import ButtonBig from '../../UI/ButtonBig';

const validate = (values: FormikValues) => {
  const errors: FormikErrors<FormikValues> = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'More than 1 characters';
  }

  if (!values.text) {
    errors.text = 'Required';
  } else if (values.text.length < 2) {
    errors.text = 'More than 2 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const sendEmail = values => {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'portfoliod3s@gmail.com',
    Password: 'ZAQ!2wsx',
    To: 'damiansobierajdev@gmail.com',
    From: values.email,
    Subject: 'Contact from Portfolio',
    Body: `${values.email} ${values.text}`,
  }).then(message => alert(message));
};

const ContactForm = props => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },
    validate,
    onSubmit: async values => {
      sendEmail(values);
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
    },
  });

  const checkErrors = inptName => {
    if (formik.errors[inptName] && formik.touched[inptName]) {
      return (
        <div className={classes['form-error']}>{formik.errors[inptName]}</div>
      );
    }
    return null;
  };

  const checkErrorState = inptName => {
    if (formik.errors[inptName] && formik.touched[inptName]) {
      return classes['input-error'];
    } else return null;
  };

  const checkCorner = inptName => {
    if (formik.errors[inptName] && formik.touched[inptName])
      return classes['error-corner'];
    else return null;
  };

  return (
    <div id='contact-me' className={classes['contact-me']}>
      <div className={classes.container}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes['name-email']}>
            <div className={`${classes.name} ${checkCorner('name')}`}>
              <div className={classes.labels}>
                <label htmlFor='name'>Your Name</label>
                {checkErrors('name')}
              </div>
              <input
                className={checkErrorState('name')}
                id='name'
                type='text'
                name='name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className={`${classes.email} ${checkCorner('email')}`}>
              <div className={classes.labels}>
                <label htmlFor='email'>Your Email</label>
                {checkErrors('email')}
              </div>
              <input
                className={`${checkErrorState('email')}`}
                id='email'
                type='email'
                name='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className={`${classes.textfield} ${checkCorner('text')}`}>
            <div className={classes.labels}>
              <label htmlFor='text'>Your Message</label>
              {checkErrors('text')}
            </div>
            <textarea
              className={checkErrorState('text')}
              id='text'
              type='text'
              name='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.text}
            />
          </div>
          <ButtonBig type='submit' text='Send'></ButtonBig>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
