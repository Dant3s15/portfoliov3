import { useFormik } from 'formik';
import classes from './ContactForm.module.scss';
import ButtonBig from '../../UI/ButtonBig';

const ContactForm = props => {
  const formik = useFormik({
    initialValues: {
      name: 'name',
    },
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
              <label htmlFor='name'>Your Name</label>
              <input
                id='name'
                type='text'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className={classes.email}>
              <label htmlFor='email'>Your Email</label>
              <input
                id='email'
                type='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className={classes.textfield}>
            <label htmlFor='text'>Your Message</label>
            <textarea
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
              id='text'
              type='text'
              name='text'
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
