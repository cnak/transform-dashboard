import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Widget from '../../components/Widget';
import ListDisplay from './ListDisplay';
import ListItem from './ListItem';
import './ListWidget.css';

class ListWidget extends Component {
  sortListItems() {
    const { listItems } = this.props;
    const sortedItems = listItems.slice();
    return sortedItems;
  }

  showWidget() {
    const sortedItems = this.sortListItems();
    const { listItems } = this.props;
    if (listItems.length === 0) {
      return null;
    }

    const min = 0;
    const max = sortedItems[0].value;

    return (
      <ListDisplay>
        {sortedItems.map(item => (
          <ListItem key={item.label} label={item.label} value={item.value} min={min} max={max} />
        ))}
      </ListDisplay>
    );
  }

  render() {
    const { heading, loading, colspan, rowspan } = this.props;
    return (
      <Widget heading={heading} colspan={colspan} rowspan={rowspan} loading={loading}>
        <div className="ListWidget">{this.showWidget()}</div>
      </Widget>
    );
  }
}

ListWidget.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.object)
};

ListWidget.defaultProps = {
  heading: '',
  listItems: {},
  colspan: 1,
  rowspan: 1
};

export default ListWidget;
