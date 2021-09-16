import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { handleKeyDown } = this.props;
    handleKeyDown(e.target.value);
  }

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
