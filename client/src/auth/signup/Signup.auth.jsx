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
  Error,
  Back,
} from '../Auth.styled';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from '../../component/Loaders/loaders.component';
import { MdClose } from 'react-icons/md';

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
  const navigate = useNavigate();
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

  const onSuccess = (res) => {
    navigate('/signin');
  };

  const onError = (err) => {
    consoleq.log(err);
  };
  const { mutate, isLoading, error } = useSignup(onSuccess, onError);
  const resetFeild = () => {
    setFormData(formField);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.toLowerCase() });
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
        {isLoading ? (
          <ThreeDots />
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <Back>
                <Link to={'/'}>
                  <MdClose size={'35px'} color={'black'} />
                </Link>
              </Back>
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
              {error ? <Error>An Error Ocurred. Try Again.</Error> : null}
              <fieldset>
                <Legend req>First Name</Legend>
                <Input
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <Legend req>Last Name</Legend>
                <Input
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <Legend req>Email</Legend>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <Legend req>Username</Legend>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <Legend req>Phone No</Legend>
                <Input
                  type="tel"
                  name="phone_no"
                  value={phone_no}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <Legend req>Date of Birth</Legend>
                <Input
                  type="date"
                  name="date_of_birth"
                  max="2010-01-01"
                  value={date_of_birth}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset>
                <Legend req>Password</Legend>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset ref={Conf_pass}>
                <Legend ref={Conf_pass} req>
                  Confirm Password
                </Legend>
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
                  required
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
                Already for have an account? <a href="/signin">Sign in</a>
              </Para>
            </Form>
          </>
        )}
      </AuthSection>
    </AuthContainer>
  );
};

export default Signup;
