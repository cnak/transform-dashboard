import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'net';
import { is_loading, isnt_loading, add_data } from '../actions/graph-actions';

// Import request module

// Import components
import GraphWidget from './GraphWidget';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { is_loading, isnt_loading } from '../actions/birthday-actions';

class GraphWidgetContainer extends Component {
  constructor() {
    super();

    // Set initial state
    // this.state = {
    //     loading: false,
    //     data: []
    // }

    // Bind function to refer to component
    this.getData = this.getData.bind(this);
  }

  // Fetch data when the component is added
  componentDidMount() {
    this.getData().then(_ => {
      // Re-fetch every minute
      this.interval = setInterval(this.getData, 60000);
    });
  }

  // Fetch new data
  getData() {
    // Tell the Widget component we're currently loading
    onIsLoading();

    // Fetch data
    return axios
      .get(this.props.href)
      .then(response => {
        // Update state with data
        onIsntLoading(), onAddData(response.data);
      })
      .catch(error => {
        // At least tell the Widget component we have stopped loading
        console.log(error);
        onIsntLoading();
      });
  }

  render() {
    return (
      // Render the graph widget
      <GraphWidget
        heading={this.props.heading}
        colspan={this.props.colspan}
        rowspan={this.props.rowspan}
        data={this.props.data}
        loading={this.props.loading}
      />
    );
  }
}

// Enforce the type of props to send to this component
GraphWidgetContainer.propTypes = {
  heading: React.PropTypes.string,
  colspan: React.PropTypes.number,
  rowspan: React.PropTypes.number,
  href: React.PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.graphReducer.loading,
    data: state.graphReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onIsLoading: is_loading,
    onIsntLoading: isnt_loading,
    onAddData: add_data
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphWidgetContainer);
