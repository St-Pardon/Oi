import { useEffect, useState } from 'react';
import { Button } from '../../component/button/Button.component';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { useSignin } from '../../services/query/query.service';
import {
  AuthContainer,
  AuthSection,
  Back,
  Error,
  Form,
  Input,
  Legend,
} from '../Auth.styled';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from '../../component/Loaders/loaders.component';
import { MdClose } from 'react-icons/md';

const formField = {
  username: '',
  password: '',
};

const Signin = ({ socket, setIsAuthenticated, isAuthenticated }) => {
  const [formData, setFormData] = useState(formField);
  const { username, password } = formData;
  const navigate = useNavigate();

  const onSuccess = (res) => {
    const { data } = res;
    setIsAuthenticated(true);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    // localStorage.setItem('authenticated', true);
    socket(true);
  };

  const onError = (err) => {
    console.log(err);
  };

  //route redirection
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/chat');
    }
  }, [isAuthenticated]);

  const { mutate, isLoading, error } = useSignin(onSuccess, onError);

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
      <AuthSection signin></AuthSection>
      <AuthSection>
        <Form onSubmit={handleSubmit}>
          <Back>
            <Link to={'/'}>
              <MdClose size={'35px'} color='black' />
            </Link>
          </Back>
          <HeadingH2>
            Welcome Back to{' '}
            <Span hero>
              Oi<Span exclamation>!</Span>
            </Span>
          </HeadingH2>
          {isLoading ? (
            <ThreeDots />
          ) : (
            <>
              <Para>Sign in for an optimal experience</Para>
              {error ? <Error>Invlaid Username or Password</Error> : null}
              <fieldset>
                <Legend>Email or Username</Legend>
                <Input
                  type="text"
                  name="username"
                  value={username}
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
              <div>
                <Button primary>Signin</Button>
              </div>
              <Para>
                Don't have an account? <a href="signup">Sign Up</a>
              </Para>
              <Para>
                <a href="/signup">Reset Password</a>
              </Para>{' '}
            </>
          )}
        </Form>
      </AuthSection>
    </AuthContainer>
  );
};

export default Signin;
