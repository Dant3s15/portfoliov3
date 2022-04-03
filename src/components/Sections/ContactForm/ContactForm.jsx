import { useFormik } from 'formik';
import classes from './ContactForm.module.scss';
import ButtonBig from '../../UI/ButtonBig';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'More than 2 characters';
  }

  if (!values.text) {
    errors.text = 'Required';
  } else if (values.text.length < 3) {
    errors.text = 'More than 2 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const ContactForm = props => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },
    validate,
    onsubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes['contact-me']}>
      <div className={classes.container}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes['name-email']}>
            <div className={classes.name}>
              <div className={classes.labels}>
                <label htmlFor='name'>Your Name</label>
                {formik.errors.name && formik.touched.name ? (
                  <div className={classes['form-error']}>
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <input
                id='name'
                type='text'
                name='name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className={classes.email}>
              <div className={classes.labels}>
                <label htmlFor='email'>Your Email</label>
                {formik.errors.email && formik.touched.email ? (
                  <div className={classes['form-error']}>
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <input
                id='email'
                type='email'
                name='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className={classes.textfield}>
            <div className={classes.labels}>
              <label htmlFor='text'>Your Message</label>
              {formik.errors.text && formik.touched.text ? (
                <div className={classes['form-error']}>
                  {formik.errors.text}
                </div>
              ) : null}
            </div>
            <textarea
              id='text'
              type='text'
              name='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.text}
            />
          </div>
          <ButtonBig text='Send'></ButtonBig>
        </form>
      </div>
    </div>
  );
  // return (
  //   <div className={classes['contact-me']}>
  //     <div className={classes.container}>
  //       <label htmlFor='name'>Name</label>
  //       <div className='input'>
  //         <input id='name' type='text' />
  //       </div>
  //       <label htmlFor='email'>E-mail</label>
  //       <input id='email' type='email' />
  //       <label htmlFor='text'>Message...</label>

  //       <input id='text' type='text' />
  //     </div>
  //   </div>
  // );
};

export default ContactForm;
