import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PasswordReset } from 'react-cognito';

import RegisterForm from './auth/RegisterForm';
import ChangePasswordForm from './auth/ChangePasswordForm';
import UpdateEmailForm from './auth/UpdateEmailForm';
import PasswordResetForm from './auth/PasswordResetForm';
import AuthPage from './auth/AuthPage';

const changePassword = () => (
  <div>
    <ChangePasswordForm />
    <Link to="/">Home</Link>
  </div>
);

const updateEmail = () => (
  <div>
    <UpdateEmailForm />
    <Link to="/">Home</Link>
  </div>
);

const passwordReset = () => (
  <PasswordReset>
    <PasswordResetForm />
  </PasswordReset>
);

const registerForm = () => (
  <div>
    <p>Complete this form</p>
    <RegisterForm />
    <Link to="/">Home</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/register" component={registerForm} />
        <Route exact path="/reset" component={passwordReset} />
        <Route exact path="/change_password" component={changePassword} />
        <Route exact path="/change_email" component={updateEmail} />
      </div>
    </Router>
  );
};

export default App;
