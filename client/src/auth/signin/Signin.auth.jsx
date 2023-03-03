import { Button } from '../../component/button/Button.component';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { AuthContainer, AuthSection, Form, Input, Legend } from '../Auth.styled';

const Signin = () => {
  return (
    <AuthContainer>
      <AuthSection signin></AuthSection>
      <AuthSection>
        <Form>
            <HeadingH2>Welcome Back to <Span hero>Oi<Span exclamation>!</Span></Span></HeadingH2>
            <Para>Sign in for an optimal experience</Para>
            <fieldset>
                <Legend>Username</Legend>
                <Input type="text" />
            </fieldset>
            <fieldset>
                <Legend>Password</Legend>
                <Input type="password" />
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
