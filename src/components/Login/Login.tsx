import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  return (
    <>
      <h3>Login</h3>
      <input name="login" />
      <input name="password" type="password" />
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
};

export default Login;
