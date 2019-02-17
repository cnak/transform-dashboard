import React from 'react';
import Widget from './components/Widget';
import ListWidgetContainer from './containers/List/ListWidgetContainer';

import './styles/App.css';
import WeatherWidgetContainer from './containers/Weather/WeatherWidgetContainer';
import Header from './containers/Header';
import Footer from './containers/Footer';
import GalleryWidgetContainer from './containers/GalleryWidget/GalleryWidgetContainer';
import Tube from './containers/TubeStatus/Tube/Tube';
import OverheardWidgetContainer from './containers/Overheard';

const Dashboard = () => {
  const BASE_API_URL = 'http://localhost:3001';
  return (
    <div>
      <Header />
      <div className="App">
        <Widget>
          <GalleryWidgetContainer href={`${BASE_API_URL}/images/latest`} />
        </Widget>
        <Widget heading="Team news">
          <ListWidgetContainer
            href={`${BASE_API_URL}/team-news/all`}
            heading="Team news"
            rowspan={3}
            bkColor="pink"
          />
        </Widget>
        <Widget heading="Transport">
          <Tube />
        </Widget>
        <Widget>
          <WeatherWidgetContainer href={`${BASE_API_URL}/weather/current`} heightSize="half" />
        </Widget>
        <Widget>
          <Widget heading="Wifi Password" heightSize="half" bkColor="blue">
            <h1 style={{ fontWeight: '300' }}> W1nterTim3</h1>
          </Widget>
        </Widget>
        <Widget>
          <OverheardWidgetContainer href={`${BASE_API_URL}/overheard/all`} />
        </Widget>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
