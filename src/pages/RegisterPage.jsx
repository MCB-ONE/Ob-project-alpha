import React from 'react';
import { Container } from 'react-bootstrap/';
import RegisterForm from '../components/pure/forms/RegisterForm';

const RegisterPage = () => {
    return (
      <Container className="app-content container">
        <RegisterForm />
      </Container>
    );
};

export default RegisterPage;
