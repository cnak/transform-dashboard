import React, { Component } from 'react';

// Import components
import Widget from '../components/Widget';
import BirthdayDisplay from '../components/BirthdayDisplay';
import Progress from '../components/Progress';

//Import styling
import '../styles/BirthdayWidget.css';

class BirthdayWidget extends Component {
    // Decide whether to show widget
    showWidget() {
        // Show loading indicator while initial data is being fetched
        if (this.props.imageUrl === undefined) {
            return <p>Loading...</p>;
        }

        return <div className="BirthdayWidget">
            <BirthdayDisplay max={this.props.max} imageUrl={this.props.imageUrl} birthdayName={this.props.birthdayName} date={this.props.date} />
            {/* Conditionally show the progress bar */}
            {this.showProgress()}
        </div>
    }

    // Decide whether to show a progress bar
    showProgress() {
        // Only show if the required min, max and imageUrl props are supplied
        if (this.props.min !== undefined &&
            this.props.max !== undefined &&
            this.props.imageUrl !== undefined) {
            return <Progress min={this.props.min}
                max={this.props.max}
                imageUrl={this.props.imageUrl} />;
        }
        return null;
    }

    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                {this.showWidget()}
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
BirthdayWidget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    loading: React.PropTypes.bool.isRequired,
    imageUrl: React.PropTypes.string
}

export default BirthdayWidget;