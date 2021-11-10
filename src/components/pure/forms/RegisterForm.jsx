import React from 'react';
// Formik Yup import
import {
    Formik, Form, Field, ErrorMessage,
   } from 'formik';
   import * as Yup from 'yup';
// Icons import
import { AiFillUnlock } from 'react-icons/ai';
import Spinner from '../Spinner';
/** Style imports */
import '../../../styles/css/form.scss';

// Models
/* import { User } from '../../../models/user.class' */

// Import service register axios service
import { registerUser } from '../../../services/axiosService';

const RegisterForm = () => {
    /* let user = new User(); */

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
    };

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, '*Nombre de usuario demasiado corto')
                .max(12, '*Nombre de usuario demasiado largo')
                .required('*Campo obligatorio'),
            email: Yup.string()
                .email('*Formato de email no válido')
                .required('*Campo obligatorio'),
            password: Yup.string()
                .min(8, '*Contraseña muy corta')
                .required('*Campo obligatorio'),
            confirm: Yup.string()
                .when('password', {
                    is: (value) => (!!(value && value.length > 0)),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        '*Las contraseñas no coinciden',
                    ),
                }).required('Campo obligatorio'),
        },
    );

    return (
      <Formik
        initialValues={initialValues}
            // *** Yup Validation Schema ***
        validationSchema={registerSchema}
            // ** onSubmit Event
        onSubmit={async (values) => {
                const { username } = values;
                const { email } = values;
                const { password } = values;
                console.log(username, email, password);
                registerUser(username, email, password)
                .then((response) => {
                    if (response && response.status === 200) {
                        console.log(JSON.stringify(response));
                    } else {
                        throw new Error('User not created');
                    }
                })
                .catch((error) => alert(`Something went wrong: ${error}`));
            }}
      >

        {({
                /* values, */
                touched,
                errors,
                isSubmitting,
                /* handleChange, */
                /* handleBlur, */
}) => (
  <Form className="primary-form">
    <h3 className="h2 text-center">
      Registro
      <AiFillUnlock className="form-icon" />
    </h3>
    <div className="row my-4">
      <div className="form-group col-12 mb-4">
        <label htmlFor="username" className="mb-1">Usuario</label>
        <Field id="username" type="text" name="username" placeholder="Nombre de usuario" className="form-control" />
        {/* Username Errors */}
        {
                                errors.username && touched.username
                                && (
                                <ErrorMessage name="username" component="div" className="form-error" />
                                )
                            }
      </div>
      <div className="form-group col-12 mb-4">
        <label htmlFor="email" className="mb-1">Email</label>
        <Field id="email" type="email" name="email" placeholder="ejemplo@email.com" className="form-control" />

        {/* Email Errors */}
        {
                                errors.email && touched.email
                                && (
                                <ErrorMessage name="email" component="div" className="form-error" />
                                )
                            }
      </div>
      <div className="form-group col-12 mb-4">
        <label htmlFor="password" className="mb-1">Contraseña</label>
        <Field
          id="password"
          name="password"
          type="password"
          className="form-control"
        />
        {/* Password Errors */}
        {
                                errors.password && touched.password
                                && (
                                <ErrorMessage name="password" component="div" className="form-error" />
                                )
                            }
      </div>
      <div className="form-group col-12 mb-4">
        <label htmlFor="confirm" className="mb-1">Repetir contraseña</label>
        <Field
          id="confirm"
          name="confirm"
          type="password"
          className="form-control"
        />
        {/* Confirm Password Errors */}
        {
                                errors.confirm && touched.confirm
                                && (
                                <ErrorMessage name="confirm" component="div" className="form-error" />
                                )
                            }
      </div>
    </div>
    <button type="submit" className="btn btn-primary btn-lg w-100">Registerme</button>
    {isSubmitting ? (
      <div className="loader-container">
        <Spinner className="loader" />
      </div>

                    ) : null}
  </Form>
            )}

      </Formik>
    );
};

export default RegisterForm;
