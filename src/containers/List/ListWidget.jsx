import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    const { bkColor } = this.props;
    const colors = () => {
      if (bkColor === 'pink') {
        return classNames({
          ListWidget: true,
          Widget: true,
          pinkBackground: true
        });
      }
      return classNames({
        ListWidget: true
      });
    };
    return <div className={colors()}>{this.showWidget()}</div>;
  }
}

ListWidget.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object)
};

ListWidget.defaultProps = {
  listItems: {}
};

export default ListWidget;
