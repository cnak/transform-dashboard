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
import RemindersWidgetContainer from './containers/Reminders';
import WifiPasswordContainer from './containers/WifiPassword';

const Dashboard = () => {
  const BASE_API_URL = 'http://localhost:3001';
  return (
    <div>
      <Header />
      <div className="App">
        <Widget>
          <GalleryWidgetContainer href={`${BASE_API_URL}/gallery/latest`} />
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
        <Widget heading="Reminders">
          <RemindersWidgetContainer href={`${BASE_API_URL}/reminders/all`} />
        </Widget>
        <Widget>
          <WeatherWidgetContainer href={`${BASE_API_URL}/weather/current`} heightSize="half" />
        </Widget>
        <Widget>
          <WifiPasswordContainer href={`${BASE_API_URL}/wifi-passwords/latest`} />
        </Widget>
        <Widget>
          <OverheardWidgetContainer href={`${BASE_API_URL}/overheard/current`} />
        </Widget>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
