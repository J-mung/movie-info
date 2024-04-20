const Valid = ({ userId, userPw }) => {
  const email = 'test@test.com';
  const password = '1234';

  const isLoginValid = () => {
    if (userId === '' && userPw === '') {
      return '';
    } else if (userId !== email) {
      return 'Email을 확인해 주세요.';
    } else if (userPw !== password) {
      return '비밀번호를 확인해 주세요.';
    } else if (userId !== email && userPw !== password) {
      return '회원정보를 확인해 주세요.';
    } else {
      return '';
    }
  };

  return (
    <div>
      <p id="user_feedback">{isLoginValid()}</p>
    </div>
  );
};

export default Valid;
