import React from 'react';
import Widget from './components/Widget';
import ListWidgetContainer from './containers/List/ListWidgetContainer';

import './styles/App.css';
import WeatherWidgetContainer from './containers/Weather/WeatherWidgetContainer';
import Header from './containers/Header';
import Footer from './containers/Footer';
import GalleryWidgetContainer from './containers/GalleryWidget/GalleryWidgetContainer';

const App = () => {
  const BASE_API_URL = 'http://localhost:3001';
  return (
    <div>
      <Header />
      <div className="App">
        <GalleryWidgetContainer
          href={`${BASE_API_URL}/images/latest`}
          heading="Life at Transform"
        />
        <Widget heading="Weather">
          <WeatherWidgetContainer href={`${BASE_API_URL}/weather/current`} />
        </Widget>
        <Widget heading="Team Social">
          <ListWidgetContainer href={`${BASE_API_URL}/team-social/all`} heading="" rowspan={3} />
        </Widget>
        <Widget heading="Team News">
          <ListWidgetContainer href={`${BASE_API_URL}/team-news/all`} heading="" rowspan={3} />
        </Widget>
        <Widget heading="Holidays">
          <ListWidgetContainer href={`${BASE_API_URL}/holidays/all`} heading="" rowspan={3} />
        </Widget>
        <Widget heading="Overheard at ET">
          <h1> like cake- but chicken.`</h1>
        </Widget>
        <Widget heading="Wifi Password" size="1">
          <h1> W1nt3rT1m3`</h1>
        </Widget>
      </div>
      <Footer />
    </div>
  );
};
export default App;
