import { Button } from '../../component/button/Button.component';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { Form, Input, Legend, AuthContainer, AuthSection } from '../Auth.styled';

const Signup = () => {
  return (
    <AuthContainer>
      <AuthSection signup></AuthSection>
      <AuthSection>
        <Form>
            <HeadingH2>Create your <Span hero>Oi<Span exclamation>!</Span></Span> account in few steps.</HeadingH2>
            <Para>Sign up to explore some of the best features we have to offer.</Para>
            <fieldset>
                <Legend>First Name</Legend>
                <Input type="text" />
            </fieldset>
            <fieldset>
                <Legend>Last Name</Legend>
                <Input type="text" />
            </fieldset>
            <fieldset>
                <Legend>Email</Legend>
                <Input type="email" />
            </fieldset>
            <fieldset>
                <Legend>Username</Legend>
                <Input type="text" />
            </fieldset>
            <fieldset>
                <Legend>Phone No</Legend>
                <Input type="tel" />
            </fieldset>
            <fieldset>
                <Legend>Date of Birth</Legend>
                <Input type="date" />
            </fieldset>
            <fieldset>
                <Legend>Password</Legend>
                <Input type="password" />
            </fieldset>
            <fieldset>
                <Legend>Confirm Password</Legend>
                <Input type="password" />
            </fieldset>
            <div>
                <input type="checkbox" />
                <label htmlFor=""> I accept the <a href="">terms of use</a></label>
            </div>
            <div>
                <Button primary>Sign Up</Button>
            </div>
            <Para>Already for have an account? <a href="signin">Sign in</a></Para>
        </Form>
      </AuthSection>
    </AuthContainer>
  );
};

export default Signup;
