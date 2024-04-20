import '../../../css/Login.css';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [userId, setUserId] = React.useState('');
  const [userPw, setUserPw] = React.useState('');
  const [loginInvalid, setLoginInvalid] = React.useState(false);

  const handleChangeId = (e) => {
    console.log('onChange Email: ', e.target.value);
    setUserId(e.target.value);
  };
  const handleChangePw = (e) => {
    console.log('onChange Password: ', e.target.value);
    setUserPw(e.target.value);
  };
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    console.log('Email: ', userId);
    console.log('Password: ', userPw);

    if (userId === 'test@test.com' && userPw === '1234') {
      navigate('/home');
    } else {
      console.log('로그인 정보를 다시 확인해 주세요.');
      setLoginInvalid(true);
    }
  };

  return (
    <div className="login_container">
      <h2>login</h2>
      <form id="login_form" encType="multipart/form-data" onSubmit={onSubmit}>
        <div className="login_field">
          <label htmlFor="id_input" style={{ marginTop: 10 }}>
            <AiOutlineUser className="login_field_icon" size={30} />
          </label>
          <input
            type="text"
            id="id_input"
            placeholder="Email"
            onChange={handleChangeId}
          />
        </div>
        <div className="login_field">
          <label htmlFor="pw_input" style={{ marginTop: 10 }}>
            <AiOutlineLock className="login_field_icon" size={30} />
          </label>
          <input
            type="password"
            id="pw_input"
            placeholder="Password"
            onChange={handleChangePw}
          />
        </div>

        {loginInvalid ? (
          <div>
            <p id="user_feedback">로그인 정보를 확인하세요.</p>
          </div>
        ) : (
          <></>
        )}

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginScreen;
