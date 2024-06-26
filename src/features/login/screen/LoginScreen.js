import '../../../css/Login.css';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginField from '../component/LoginField';
import Valid from './../component/Valid';
import PasswordField from './../component/PasswordField';
import { useUserContext } from '../../../contexts/UserContext';

const LoginScreen = () => {
  const [userId, setUserId] = React.useState('');
  const [userPw, setUserPw] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);

  const { setUser } = useUserContext();

  const handleChangeId = (e) => {
    console.log('onChange Email: ', e.target.value);
    setUserId(e.target.value);
    setIsSubmit(false);
  };
  const handleChangePw = (e) => {
    console.log('onChange Password: ', e.target.value);
    setUserPw(e.target.value);
    setIsSubmit(false);
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    console.log('Submit');
    console.log('Email: ', userId);
    console.log('Password: ', userPw);

    if (userId === 'test@test.com' && userPw === '1234') {
      setIsSubmit(false);
      setUser(userId);
    } else {
      console.log('로그인 정보를 다시 확인해 주세요.');
    }
  };

  const onClickSignUp = () => {
    navigate('/signUp');
  };

  return (
    <div className="login_container">
      <h2>login</h2>
      <form id="login_form" encType="multipart/form-data" onSubmit={onSubmit}>
        <LoginField
          type={'text'}
          id={'id_input'}
          placeholder={'Email'}
          onChange={handleChangeId}
          child={<AiOutlineUser className="login_field_icon" size={30} />}
        />
        <PasswordField
          id={'pw_input'}
          placeholder={'Password'}
          onChange={handleChangePw}
          child={<AiOutlineLock className="login_field_icon" size={30} />}
        />

        {isSubmit ? <Valid userId={userId} userPw={userPw} /> : <></>}

        <input type="submit" value="Login" />
      </form>
      <button id="sign_up_btn" onClick={onClickSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default LoginScreen;
