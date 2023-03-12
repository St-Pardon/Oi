import { useState } from 'react';
import { Button } from '../../component/button/Button.component';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { useSignin } from '../../services/query/query.service';
import { AuthContainer, AuthSection, Form, Input, Legend } from '../Auth.styled';

const formField = {
  username: '',
  password: ''
}

const Signin = () => {
  const [formData, setFormData] = useState(formField)
  const {username, password} = formData

  const {mutate} = useSignin()

  const resetFeild = () => {
    setFormData(formField);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    mutate(formData);
    resetFeild();
  };
  return (
    <AuthContainer>
      <AuthSection signin></AuthSection>
      <AuthSection>
        <Form onSubmit={handleSubmit}>
            <HeadingH2>Welcome Back to <Span hero>Oi<Span exclamation>!</Span></Span></HeadingH2>
            <Para>Sign in for an optimal experience</Para>
            <fieldset>
                <Legend>Username</Legend>
                <Input type="text" name='username' value={username} onChange={handleChange} />
            </fieldset>
            <fieldset>
                <Legend>Password</Legend>
                <Input type="password" name='password' value={password} onChange={handleChange} />
            </fieldset>
            <div>
                <Button primary>Signin</Button>
            </div>
            <Para>Don't have an account? <a href="signup">Sign Up</a></Para>
            <Para><a href="signup">Reset Password</a></Para>
        </Form>
      </AuthSection>
    </AuthContainer>
  );
};

export default Signin;
