import PropTypes from 'prop-types';

const LoginField = ({ type, id, placeholder, onChange, child }) => {
  return (
    <div className="login_field">
      <label htmlFor={id} style={{ marginTop: 10, marginRight: 5 }}>
        {child}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

LoginField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  child: PropTypes.node.isRequired
};

export default LoginField;
