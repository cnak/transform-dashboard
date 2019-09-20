import React, { Component } from 'react';
import { tenSeconds, twelveHours } from '../../helper/DateUtils';
import Widget from '../../components/Widget';
import Polaroid from './Polaroid/Polaroid';
import './Birthdays.css';
import LoadingSpinner from '../../components/LoadingSpinner';

class Birthdays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      birthdays: [],
      currentPerson: {}
    };

    this.getData = this.getData.bind(this);
    this.rotateCurrentPerson = this.rotateCurrentPerson.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.setGetDataInterval();
    this.setRotatorInterval();
  }

  async getData() {
    const { href } = this.props;
    const { birthdays } = this.state;

    // TODO Add once api endpoint is done
    //
    // await axios.get(href).then(response => {
    //   this.setState({ birthdays: response.data });
    // });

    const response = [
      { name: 'Alex Baeza', photoUrl: undefined },
      { name: 'Chris Mills', photoUrl: undefined },
      { name: 'Lewis Williams', photoUrl: undefined },
      { name: 'Martin McFly', photoUrl: undefined }
    ];
    this.setState({
      loading: false,
      birthdays: response
    });
  }

  setGetDataInterval() {
    this.interval = setInterval(this.getData, twelveHours());
  }

  setRotatorInterval() {
    this.timer = setInterval(this.rotateCurrentPerson, tenSeconds());
  }

  showCard = personData => {
    if (personData.name) {
      return <Polaroid data={personData} />;
    }
    return <p>No cake today, move along nothing to see here</p>;
  };

  async rotateCurrentPerson() {
    console.info('rotateCurrentPerson');
    const { birthdays, currentPerson } = this.state;

    const found = birthdays.find(bday => bday.name === currentPerson.name);

    const currentIndex = birthdays.indexOf(found);
    if (currentIndex === birthdays.length - 1) {
      return this.setState({ currentPerson: birthdays[0] });
    }
    return this.setState({ currentPerson: birthdays[currentIndex + 1] });
  }

  render() {
    const { loading, currentPerson } = this.state;

    const headingProps = {
      headingTitle: "Today's Birthdays",
      headingTitleColor: '#6dc5e8',
      headingBackgroundColor: 'white'
    };

    if (loading === true) {
      return (
        <Widget heading={headingProps}>
          <LoadingSpinner />
        </Widget>
      );
    }

    console.info('invoked');
    return (
      <Widget heading={headingProps}>
        <div className="birthday-wrapper">{this.showCard(currentPerson)}</div>
      </Widget>
    );
  }
}

export default Birthdays;
