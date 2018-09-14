import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { is_loading, isnt_loading } from '../actions/action-helper';


// Import request module
import axios from 'axios';

// Import components
import NumberWidget from '../components/NumberWidget';
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { is_loading, isnt_loading } from '../actions/action-helper';

class NumberWidgetContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            min: undefined,
            max: undefined,
            value: undefined
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        this.getData().then(_ => {
            this.interval =
                setInterval(this.getData, 60000);
        });
    }

    // Fetch new data
    getData() {
        // Tell the Widget component we're currently loading

        this.setState({ loading: true });
        return axios.get(this.props.href)
            .then(resp => {
                this.setState({
                    loading: false,
                    min: resp.data.min,
                    max: resp.data.max,
                    value: resp.data.value
                });
            })
        // Fetch data

    }

    render() {
        return (
            // Render the number widget
            <NumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} min={this.state.min} max={this.state.max} value={this.state.value} loading={this.state.loading} />
        );
    }
}

// Enforce the type of props to send to this component
NumberWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        loading: state.numberReducer.loading,
        min: state.numberReducer.min,
        max: state.numberReducer.max,
        value: state.numberReducer.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onIsLoading: is_loading,
        OnIsntLoading: isnt_loading,
        onGetMin: get_min,
        onGetMax: get_max,
        onGetValue: get_value
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberWidgetContainer);