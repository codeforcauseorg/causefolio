import React from 'react';
import PropTypes from 'prop-types';

function Logo(props, variant) {
  if (variant === 'black') {
    return (
      <img alt="Logo" height="32px" src="/static/logo/logo.png" {...props} />
    );
  }
  return (
    <img alt="Logo" height="32px" src="/static/logo/logo.svg" {...props} />
  );
}
Logo.propTypes = {
  variant: PropTypes.string
};
export default Logo;
