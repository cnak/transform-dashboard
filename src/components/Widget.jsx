import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from '../elements/Loading';
import Heading from './Heading';

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
    const {
      heading,
      headingBackgroundColor,
      headingTitleColor,
      loading,
      children,
      heightSize,
      bkColor,
      lastUpdatedStatusTime
    } = this.props;

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

    if (!lastUpdatedStatusTime) {
      return <div className="content">{children}</div>;
    }

    return (
      <div style={Object.assign({}, styles)} className={colors()}>
        <div className="header">
          <Heading
            headingTitle={heading}
            headingTitleColor={headingTitleColor}
            backgroundColor={headingBackgroundColor}
            lastUpdatedStatusTime={lastUpdatedStatusTime}
          />
          {loading ? <Loading /> : ''}
        </div>
        <div className="content">{children}</div>
      </div>
    );
  }
}

Widget.defaultProps = {
  heading: '',
  headingBackgroundColor: '',
  colspan: 1,
  rowspan: 1
};

Widget.propTypes = {
  heading: PropTypes.string,
  headingBackgroundColor: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number
};

export default Widget;
