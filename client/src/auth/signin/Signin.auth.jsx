import { useState } from 'react';
import { Button } from '../../component/button/Button.component';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { useSignin } from '../../services/query/query.service';
import { AuthContainer, AuthSection, Form, Input, Legend } from '../Auth.styled';
import { useNavigate} from 'react-router-dom'

const formField = {
  username: '',
  password: ''
}

const Signin = ({setUser, isAuthenticated}) => {
  const [formData, setFormData] = useState(formField)
  const {username, password} = formData
   const navigate = useNavigate()
  const onSuccess = (res) => {
    const { data } = res;
    // const fullname = `${data.details.first_name} ${data.details.last_name}`;
    // localStorage.setItem("token", data.access_token);
    // localStorage.setItem("userId", data.details.id);
    // localStorage.setItem("fullname", fullname);
    setUser(data)
    socket(true)
    navigate("/chat");
    // getJob_type(data.details.job_title);
    // getUser_role(data.details.user_role);
  };

  const onError = (err) => {
    console.log(err)
  }

  const {mutate} = useSignin(onSuccess, onError)

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
            <Para><a href="/signup">Reset Password</a></Para>
        </Form>
      </AuthSection>
    </AuthContainer>
  );
};

export default Signin;
