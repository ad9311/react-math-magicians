/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /* eslint-disable react/destructuring-assignment */
  handleKeyDown(e) {
    this.props.handleKeyDown(e.target.value);
  }
  /* eslint-enable react/destructuring-assignment */

  render() {
    const { value, orange } = this.props;
    const classList = `key ${orange ? 'orange-bg' : 'gray-bg'}`;
    return (
      <input className={classList} type="button" value={value} onClick={this.handleKeyDown} />
    );
  }
}

Key.propTypes = {
  value: PropTypes.string,
  orange: PropTypes.bool,
  handleKeyDown: PropTypes.func,
};

Key.defaultProps = {
  value: '',
  orange: false,
  handleKeyDown: () => undefined,
};

export default Key;
