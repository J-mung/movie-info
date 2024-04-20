import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { PropTypes } from 'prop-types';
import '../../../css/SignUp.css';

const PasswordField = ({ id, placeholder, onChange, child }) => {
  const [type, setType] = React.useState('password');
  const [icon, setIcon] = React.useState('eyeOff');

  const onChangeType = () => {
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
    setIcon((prev) => (prev === 'eyeOff' ? 'eye' : 'eyeOff'));
  };

  return (
    <div className="sign_up_field">
      <label htmlFor={id} style={{ marginTop: 10, marginRight: 5 }}>
        {child}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button type="button" onClick={onChangeType}>
        {icon === 'eye' ? (
          <AiFillEye className="sign_up_password_field_icon" size={30} />
        ) : (
          <AiFillEyeInvisible
            className="sign_up_password_field_icon"
            size={30}
          />
        )}
      </button>
    </div>
  );
};

PasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  child: PropTypes.node.isRequired
};

export default PasswordField;
