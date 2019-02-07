import React, { Component } from 'react';

// Import components
import Widget from './Widget';
import ListDisplay from './ListDisplay';
import ListItem from './ListItem';

// Import styling
import '../styles/ListWidget.css';

class ListWidget extends Component {
  // Sort items in descending order
  sortListItems() {
    const sortedItems = this.props.listItems.slice();
    return sortedItems;
  }

  // Decide whether to show widget
  showWidget() {
    const sortedItems = this.sortListItems();
    // Show loading indicator while initial data is being fetched
    if (this.props.listItems.length === 0) {
      return null;
    }

    // Get min/max values for progress bar
    const min = 0;
    const max = sortedItems[0].value;

    return (
      <ListDisplay>
        {sortedItems.map((item, index) => (
          <ListItem key={item.label} label={item.label} value={item.value} min={min} max={max} />
        ))}
      </ListDisplay>
    );
  }

  render() {
    return (
      // Wrap the list display component in the generic wrapper
      <Widget
        heading={this.props.heading}
        colspan={this.props.colspan}
        rowspan={this.props.rowspan}
        loading={this.props.loading}
      >
        <div className="ListWidget">
          {/* Conditionally show the widget */}
          {this.showWidget()}
        </div>
      </Widget>
    );
  }
}

// Enforce the type of props to send to this component
ListWidget.propTypes = {
  heading: React.PropTypes.string,
  colspan: React.PropTypes.number,
  rowspan: React.PropTypes.number,
  loading: React.PropTypes.bool.isRequired,
  listItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default ListWidget;
