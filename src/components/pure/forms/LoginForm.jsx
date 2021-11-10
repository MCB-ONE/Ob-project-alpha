import React, { /* useEffect, useState */ } from 'react';
// Formik Yup import
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
/** Icons imports */
import { AiFillUnlock } from 'react-icons/ai';
import { loginUser } from '../../../services/axiosService';
import Spinner from '../Spinner';
/** Style imports */
import '../../../styles/css/form.scss';

// Models
/* import { User } from '../../../models/user.class' */

// Import service login axios service

const LoginForm = ({ login }) => {
    /* const [isLoged, setIsLoged] = useState('');
    useEffect(() => {
        console.log(login);
      }, [login]);
 */
    const initialValues = {
        username: '',
        password: '',
    };

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, '*Nombre de usuario demasiado corto')
                .max(12, '*Nombre de usuario demasiado largo')
                .required('*Campo obligatorio'),
            password: Yup.string()
                .min(8, '*Contraseña muy corta')
                .required('*Campo obligatorio'),
        },
    );

    // Submit handle trigger userLogin service
    const authUser = (values) => {
        loginUser(values.username, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Fallo al logearse');
                }
            })
            .catch((error) => {
                alert(`Ha habido un error: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'));
    };

    return (
      <>
        {
                login === null ? (
                  <Formik
                    initialValues={initialValues}
                        // *** Yup Validation Schema ***
                    validationSchema={registerSchema}
                        // ** onSubmit Event
                    onSubmit={async (values) => {
                            authUser(values);
                        }}
                  >

                    {({
                            /* values, */
                            touched,
                            errors,
                            isSubmitting,
                            /* handleChange,
                            handleBlur, */
                        }) => (
                          <Form className="primary-form">
                            <h3 className="h2 text-center">
                              Acceso
                              <AiFillUnlock className="form-icon" />
                            </h3>
                            <div className="row my-4">
                              <div className="form-group col-12 mb-4">
                                {// eslint-disable-next-line jsx-a11y/label-has-associated-control
                                  <label htmlFor="username" className="mb-1">Usuario</label>
                                        }
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
                                {// eslint-disable-next-line jsx-a11y/label-has-associated-control
                                  <label htmlFor="password" className="mb-1">Contraseña</label>
                                        }
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
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100">Acceder</button>
                            {isSubmitting ? (
                              <div className="loader-container">
                                <Spinner className="loader" />
                              </div>

                                ) : null}
                          </Form>
                        )}
                  </Formik>
                ) : <p className="big-message">Usted ya esta registrado</p>
            }

      </>
    );
};

export default LoginForm;
