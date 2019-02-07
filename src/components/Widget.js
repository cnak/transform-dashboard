import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../elements/Loading';
import '../styles/Widget.css';

class Widget extends Component {
  constructor(props) {
    super(props);

    this.spanStyles = {};

    if (props.colspan !== 1) {
      this.spanStyles.gridColumn = `span ${props.colspan}`;
    }
    if (props.rowspan !== 1) {
      this.spanStyles.gridRow = `span ${props.rowspan}`;
    }
  }

  render() {
    const { heading, loading, children } = this.props;
    return (
      <div style={this.spanStyles} className="Widget">
        <div className="header">
          <h2>{heading}</h2>
          {loading ? <Loading /> : ''}
        </div>
        <div className="content">{children}</div>
      </div>
    );
  }
}

Widget.defaultProps = {
  heading: 'Unnamed Widget',
  children: 'Widget children',
  colspan: 1,
  rowspan: 1
};

Widget.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  children: PropTypes.string
};

export default Widget;
