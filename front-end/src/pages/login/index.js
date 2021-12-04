import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, checkIsLoggedIn } from '../../store/user/actions';

import { OtherOption, Forgot, PasswordContainer } from '../register/style';

import { Input, Submit, CheckBox } from '../../components/common';
import StartLayout from '../../components/StartLayout';
import Form from '../../components/Form';

const Login = () => {
  const [info, setInfo] = useState({
    email: '',
    password: ''
  });

  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const onChange = (a) => {
    setInfo({
      ...info,
      [a.target.name]: a.target.value
    })
  }

  const onSubmit = async (a) => {
    a.preventDefault();
    dispatch(login(info));
  }

  useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, [dispatch]);

  if(user.token || user.userInfo) {
    return <Navigate replace to="/dashboard/products" />;
  }

  return (
    <StartLayout className="flex column">
      <Form
        onSubmit={onSubmit}
        bannerText="Sign In to WireS"
      >
        <Input
          type="email"
          info="Email Address"
          name="email"
          value={info.email}
          onChange={onChange}
          required
        />
        <Input
          type="password"
          info="Password"
          name="password"
          value={info.password}
          onChange={onChange}
          required
        />

        <PasswordContainer className="flex" style={{ marginTop: '2%' }}>
          <CheckBox info="Remember me" />
          <Forgot>Forgot password</Forgot>
        </PasswordContainer>

        <Submit info="Sign In" />

        <OtherOption>
          If you don't have an account register you can {' '}
          <Link to="/register">Register here !</Link>
        </OtherOption>

      </Form>
    </StartLayout>
  )
}

export default Login;
