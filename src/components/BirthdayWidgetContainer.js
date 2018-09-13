import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UPDATE_BIRTHDAY_NAME, UPDATE_DATE, UPDATE_IMAGE } from '../actions/birthday-actions';
import { is_loading, isnt_loading, update } from '../actions/birthday-actions';
// Import request module
import axios from 'axios';

// Import components
import BirthdayWidget from './BirthdayWidget';


class BirthdayWidgetContainer extends Component {
    constructor() {
        super();

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
        this.props.onIsLoading()
        return axios.get(this.props.href)
            .then(resp => {
                this.props.onIsntLoading()
                this.props.OnUpdate(UPDATE_BIRTHDAY_NAME, resp.data.name)
                this.props.OnUpdate(UPDATE_DATE, resp.data.date)
                this.props.OnUpdate(UPDATE_IMAGE, resp.data.imageUrl)

            })
    }

    render() {
        return (
            // Render the number widget
            <BirthdayWidget heading={this.props.heading}
                colspan={this.props.colspan}
                rowspan={this.props.rowspan}
                imageUrl={this.props.imageUrl}
                birthdayName={this.props.birthdayName}
                date={this.props.date}
                loading={this.props.loading} />
        );
    }
}

// Enforce the type of props to send to this component
BirthdayWidgetContainer.propTypes = {
    heading: React.PropTypes.string.isRequired,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
    loading: state.birthdayReducer.loading,
    imageUrl: state.birthdayReducer.imageUrl,
    birthdayName: state.birthdayReducer.birthdayName
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onIsLoading: is_loading,
        onIsntLoading: isnt_loading,
        OnUpdate: update

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayWidgetContainer);