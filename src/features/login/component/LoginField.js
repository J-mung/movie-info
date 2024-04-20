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

export default LoginField;
