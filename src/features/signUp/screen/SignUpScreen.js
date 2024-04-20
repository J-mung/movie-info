import React from 'react';
import SignUpField from '../component/SignUpField';
import { AiTwotoneMail, AiOutlineLock, AiOutlineUserAdd } from 'react-icons/ai';
import '../../../css/SignUp.css';
import PasswordField from './../component/PasswordField';
import { useNavigate } from 'react-router-dom';

const SignUpScreen = () => {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pwConfirm, setPwConfirm] = React.useState('');
  const [nickName, setNickName] = React.useState('');
  const [isValid, setIsValid] = React.useState('');

  const handleChangeEmail = (e) => {
    console.log('onChange Email: ', e.target.value);
    setEmail(e.target.value);
  };
  const handleChangePw = (e) => {
    console.log('onChange Pw: ', e.target.value);
    setPw(e.target.value);
  };
  const handleChangePwConfirm = (e) => {
    console.log('onChange Pw: ', e.target.value);
    setPwConfirm(e.target.value);
  };
  const handleChangeNickName = (e) => {
    console.log('onChange Pw: ', e.target.value);
    setNickName(e.target.value);
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit signUp fomr');

    if (email === '' && pw === '' && pwConfirm === '' && nickName === '') {
      setIsValid('회원가입란을 모두 채워 주십시오.');
    } else if (pw !== pwConfirm) {
      setIsValid('비밀번호가 서로 일치하지 않습니다.');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="sign_up_container">
      <h2>Sign Up</h2>
      <form id="sign_up_form" encType="multipart/form-data" onSubmit={onSubmit}>
        <SignUpField
          type="text"
          id="email_input"
          placeholder="Email"
          onChange={handleChangeEmail}
          child={<AiTwotoneMail className="sign_up_field_icon" size={30} />}
        />
        <PasswordField
          id="pw_input"
          placeholder="Password"
          onChange={handleChangePw}
          child={<AiOutlineLock className="sign_up_field_icon" size={30} />}
        />
        <PasswordField
          id="pw_confirm_input"
          placeholder="Password Confirm"
          onChange={handleChangePwConfirm}
          child={<AiOutlineLock className="sign_up_field_icon" size={30} />}
        />
        <SignUpField
          type="text"
          id="nick_name_input"
          placeholder="Your NickName"
          onChange={handleChangeNickName}
          child={<AiOutlineUserAdd className="sign_up_field_icon" size={30} />}
        />

        {isValid !== '' ? <p style={{ color: 'red' }}>{isValid}</p> : <></>}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpScreen;
