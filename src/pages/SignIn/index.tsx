import React from 'react';

import Form from '../../components/Form'
import Input from '../../components/Input'


const SignIn: React.FC = () => {

  return (
  <div>
    <h1>Login</h1>
    <Form>
      <Input  name="email" placeholder="email" />
      <Input  name="password" placeholder="senha" />

      <button type="button" > Entrar</button>
    </Form>
  </div>
  );
}

export default SignIn;