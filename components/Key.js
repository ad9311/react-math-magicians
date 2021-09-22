import React from 'react';
import PropTypes from 'prop-types';

const Key = (props) => {
  const { value, orange, event } = props;
  const classList = `key ${orange ? 'orange-bg' : 'gray-bg'}`;

  const handleClick = (e) => {
    event(e.target.value);
  };

  return (
    <input className={classList} type="button" value={value} onClick={handleClick} />
  );
};

Key.propTypes = {
  value: PropTypes.string,
  orange: PropTypes.bool,
  event: PropTypes.func,
};

Key.defaultProps = {
  value: '',
  orange: false,
  event: () => '',
};

export default Key;
