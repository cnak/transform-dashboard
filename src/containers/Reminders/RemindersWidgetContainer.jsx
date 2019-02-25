import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment';

import 'react-toastify/dist/ReactToastify.css';
import './Reminders.css';

export class RemindersWidgetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reminders: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData().then(_ => {
      this.interval = setInterval(this.getData, 60000);
    });
  }

  async getData() {
    const { href } = this.props;

    try {
      const response = await axios.get(href);

      this.setState({ reminders: response.data });
    } catch (error) {
      console.log('failed to get  reminder');
    }
  }

  getDuration = (startDate, startTime, endDate, endTime) => {
    /* eslint-disable prefer-template */
    const startDateTime = moment(startDate + ' ' + startTime, 'DD/MM/YYYY HH:mm');
    const endDateTime = moment(endDate + ' ' + endTime, 'DD/MM/YYYY HH:mm');

    const diff = endDateTime.toDate() - startDateTime.toDate();
    return diff;
  };

  displayToast = () => {
    const { reminders } = this.state;

    return reminders.forEach(element => {
      toast(
        () => (
          <div>
            <h4>{element.heading}</h4>
            <p>{element.content}</p>
          </div>
        ),
        {
          autoClose: this.getDuration(
            element.startDate,
            element.startTime,
            element.endDate,
            element.endTime
          )
        }
      );
    });
  };

  dismiss = () => toast.dismiss(this.toastId);

  render() {
    return (
      <div>
        <ToastContainer autoClose={false}>{this.displayToast()}</ToastContainer>
      </div>
    );
  }
}

export default RemindersWidgetContainer;
