import React from 'react';
import LoginForm from '../components/pure/forms/LoginForm';

const LoginPage = ({ login }) => {
    return (
      <div className="app-content container">
        <LoginForm login={login} />
      </div>
    );
};

export default LoginPage;
