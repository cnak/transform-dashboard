import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import request module
import axios from 'axios';

// Import components
import BirthdayWidget from './BirthdayWidget';
import { UPDATE_BIRTHDAY_NAME } from '../actions/birthday-actions';

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
        onIsLoading()
        return axios.get(this.props.href)
            .then(resp => {
                onIsntLoading()
                OnUpdate(UPDATE_BIRTHDAY_NAME, resp.data.name)
                OnUpdate(UPDATE_DATE, resp.data.date)
                OnUpdate(UPDATE_IMAGE, resp.data.imageUrl)

            })
    }

    render() {
        return (
            // Render the number widget
            <BirthdayWidget heading={this.props.heading}
                colspan={this.props.colspan}
                rowspan={this.props.rowspan}
                imageUrl={this.state.imageUrl}
                birthdayName={this.state.birthdayName}
                date={this.state.date}
                loading={this.state.loading} />
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

mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onIsLoading: Is_Loading,
        onIsntLoading: Isnt_Loading,
        OnUpdate: Update

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayWidgetContainer);