import { useRef, useState } from 'react';
import { Button } from '../../component/button/Button.component';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { useSignup } from '../../services/query/query.service';
import {
  Form,
  Input,
  Legend,
  AuthContainer,
  AuthSection,
} from '../Auth.styled';

const formField = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  phone_no: '',
  date_of_birth: '',
  password: '',
  confirm_password: '',
};

const Signup = () => {
  const [formData, setFormData] = useState(formField);
  const {
    first_name,
    last_name,
    email,
    username,
    phone_no,
    date_of_birth,
    password,
    confirm_password,
  } = formData;
  const Conf_pass = useRef();
  const { mutate, isLoading } = useSignup();
  const resetFeild = () => {
    setFormData(formField);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
    resetFeild();
  };

  return (
    <AuthContainer>
      <AuthSection signup></AuthSection>
      <AuthSection>
        <Form onSubmit={handleSubmit}>
          <HeadingH2>
            Create your{' '}
            <Span hero>
              Oi<Span exclamation>!</Span>
            </Span>{' '}
            account in few steps.
          </HeadingH2>
          <Para>
            Sign up to explore some of the best features we have to offer.
          </Para>
          <fieldset>
            <Legend>First Name</Legend>
            <Input
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Legend>Last Name</Legend>
            <Input
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Legend>Email</Legend>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Legend>Username</Legend>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Legend>Phone No</Legend>
            <Input
              type="tel"
              name="phone_no"
              value={phone_no}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Legend>Date of Birth</Legend>
            <Input
              type="date"
              name="date_of_birth"
              max="2010-01-01"
              value={date_of_birth}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Legend>Password</Legend>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset ref={Conf_pass}>
            <Legend ref={Conf_pass}>Confirm Password</Legend>
            <Input
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange}
              onBlur={(e) =>
                e.target.value != password
                  ? (Conf_pass.current.style =
                      'color: red; border: 1px solid red')
                  : (Conf_pass.current.style = 'unset')
              }
            />
          </fieldset>
          <div>
            <input type="checkbox" />
            <label htmlFor="">
              {' '}
              I accept the <a href="">terms of use</a>
            </label>
          </div>
          <div>
            <Button primary>Sign Up</Button>
          </div>
          <Para>
            Already for have an account? <a href="signin">Sign in</a>
          </Para>
        </Form>
      </AuthSection>
    </AuthContainer>
  );
};

export default Signup;
