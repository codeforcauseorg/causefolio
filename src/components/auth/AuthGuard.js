import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoggedUser } from 'src/services/authService';

function AuthGuard({ children }) {
  const user = getLoggedUser();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.any
};

export default AuthGuard;
