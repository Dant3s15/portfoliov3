import { useFormik } from 'formik';
import classes from './ContactForm.module.scss';

const ContactForm = props => {
  const formik = useFormik({
    initialValues: {
      email: 'your@email.com',
      text: 'Your message',
    },
    onsubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes['contact-me']}>
      <div className={classes.container}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Your Email</label>
          <input
            id='email'
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
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
