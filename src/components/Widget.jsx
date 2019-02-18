import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    const { heading, loading, children, heightSize, bkColor } = this.props;

    const colors = () => {
      if (bkColor === 'black') {
        return classNames({
          Widget,
          blackBackground: true
        });
      }
      if (bkColor === 'white') {
        return classNames({
          Widget,
          whiteBackground: true
        });
      }
      if (bkColor === 'blue') {
        return classNames({
          Widget,
          blueBackground: true
        });
      }
      return classNames({
        Widget
      });
    };

    const displayHeading = headingText => {
      if (headingText) {
        return <h2>{headingText}</h2>;
      }
      return <div />;
    };

    const getHeight = () => {
      if (heightSize === 'half') {
        return '8em';
      }
      if (heightSize === 'full') {
        return '21em';
      }
      return '';
    };

    const styles = {
      height: getHeight()
    };

    return (
      <div style={Object.assign({}, styles)} className={colors()}>
        <div className="header">
          {displayHeading(heading)}
          {loading ? <Loading /> : ''}
        </div>
        <div className="content">{children}</div>
      </div>
    );
  }
}

Widget.defaultProps = {
  heading: '',
  colspan: 1,
  rowspan: 1
};

Widget.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number
};

export default Widget;
