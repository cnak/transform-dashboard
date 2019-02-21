import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

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

  displayToast = reminders => {
    return reminders.forEach(element => {
      toast(
        () => (
          <div>
            <h4>{element.heading}</h4>
            <p>{element.content}</p>
          </div>
        ),
        { autoClose: element.duration }
      );
    });
  };

  dismiss = () => toast.dismiss(this.toastId);

  render() {
    const toasts = [
      {
        heading: 'Timesheets reminder',
        content: 'Submit timesheets(s) for the following weeks(s) by 10am, Monday 25th ',
        duration: 15000
      },
      {
        heading: 'Lift broken',
        content: 'FyI one lift is broken, but is being fixed',
        duration: 19000
      },
      {
        heading: 'Who wants cake',
        content: "There's lemon cake in the usual place",
        duration: 18000
      }
    ];

    return (
      <div>
        <ToastContainer autoClose={false}>{this.displayToast(toasts)}</ToastContainer>
      </div>
    );
  }
}

export default RemindersWidgetContainer;
