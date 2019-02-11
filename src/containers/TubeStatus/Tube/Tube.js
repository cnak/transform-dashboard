import React, { Component } from 'react';
import axios from 'axios';
import StatusCard from '../StatusCard/StatusCard';
import './Tube.css';

const API_URL = `https://api.tfl.gov.uk/line/mode/tube/status?app_id=37b3cb3e&app_key=2e35b8e85289633355f76896fcbe68a2`;

const nearbyLines = [
  'bakerloo',
  'central',
  'northern',
  'circle',
  'hammersmith & city',
  'victoria',
  'jubilee'
];

class Tube extends Component {
  state = {
    loading: true,
    apiData: []
  };

  componentDidMount() {
    axios.get(API_URL).then(response => {
      this.setState({ loading: false });
      this.setState({ apiData: response.data });
    });
  }

  showStatusCard = data => {
    return data
      .filter(item => nearbyLines.includes(item.name.toLowerCase()))
      .map(item => (
        <StatusCard
          key={item.id}
          name={item.name}
          status={item.lineStatuses[0].statusSeverityDescription}
          reason={item.lineStatuses[0].reason ? item.lineStatuses[0].reason : null}
          severity={item.lineStatuses[0].statusSeverity}
        />
      ));
  };

  render() {
    const { loading, apiData } = this.state;

    if (loading === true) {
      return <div style={{ fontSize: '50px' }}>Loading</div>;
    }
    return (
      <div>
        <div className="tube-wrapper">{this.showStatusCard(apiData)}</div>
      </div>
    );
  }
}

export default Tube;
