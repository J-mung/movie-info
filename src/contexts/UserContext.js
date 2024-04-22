import PropTypes from 'prop-types';
import React, { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};

export const useUserContext = () => React.useContext(UserContext);

export default UserContext;
