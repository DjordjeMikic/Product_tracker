import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PasswordContainer, OtherOption } from './style';
import StartLayout from '../../components/StartLayout';
import Form from '../../components/Form';
import { Input, Submit } from '../../components/common';
import {
  lightSuccess,
  lightRed,
  red,
  success
} from '../../globalStyles/colors';
import axios from '../../store/axiosConf';
import { setError, setSuccess } from '../../store/user/actions';
import { UserE, UserSuccess } from '../../components/Status';
import { useMe } from '../../hooks/useMe';

const Register = () => {
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [same, setSame] = useState(null);

  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clearBoth } = useMe();

  const onBlur = () => {
    if(info.password === info.confirmPassword) {
      setSame({
        color: success,
        bgColor: lightSuccess
      });
    } else {
      setSame({
        color: red,
        bgColor: lightRed
      });
    }
  }

  const onChange = (a) => {
    setInfo({
      ...info,
      [a.target.name]: a.target.value
    })
  }

  const onSubmit = async (a) => {
    a.preventDefault();
    try {      
      let res = await axios({
        method: 'post',
        url: '/users/register',
        data: info
      });

      if(res.status === 201) {
        setInfo({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

        dispatch(setSuccess(res.data));

        setTimeout(() => {
          clearBoth();
          navigate('/');
        })
      }
    } catch(e) {
      dispatch(setError(e));
    }
  }

  return (
    <StartLayout className="flex column">
      <Form
        onSubmit={onSubmit}
        bannerText="Sign Up to WireS"
      >
        {user.error && <UserE />}
        {user.success && <UserSuccess />}
        <Input
          type="text"
          info="Full Name"
          name="fullName"
          value={info.fullName}
          onChange={onChange}
          required
        />

        <Input
          type="email"
          info="Email Address"
          name="email"
          value={info.email}
          onChange={onChange}
          required
        />

        <PasswordContainer className="flex">

          <Input
            type="password"
            info="Password"
            name="password"
            color={same?.color}
            bgColor={same?.bgColor}
            value={info.password}
            onChange={onChange}
            onBlur={onBlur}
            required
          />

          <Input
            type="password"
            info="Confirm Password"
            name="confirmPassword"
            color={same?.color}
            bgColor={same?.bgColor}
            value={info.confirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            required
          />
          
        </PasswordContainer>

        <Submit type="submit" info="Sign Up" />

        <OtherOption>
          If you already have an account you can {' '}
          <Link to="/">Login here !</Link>
        </OtherOption>
      </Form>
    </StartLayout>
  )
}

export default Register;
