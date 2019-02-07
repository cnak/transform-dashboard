import React from 'react';
import Widget from './components/Widget';
import ListWidgetContainer from './containers/List/ListWidgetContainer';

import './styles/App.css';
import WeatherWidgetContainer from './containers/Weather/WeatherWidgetContainer';
import Banner from './containers/Banner/Banner';
import GalleryWidgetContainer from './containers/GalleryWidget/GalleryWidgetContainer';

const App = () => {
  return (
    <div>
      <Banner />
      <div className="App">
        <Widget heading="Weather">
          <WeatherWidgetContainer href="http://localhost:3001/weather/current" />
        </Widget>
        <Widget heading="Team Social">
          <ListWidgetContainer
            href="http://localhost:3001/team-social/all"
            heading=""
            rowspan={3}
          />
        </Widget>
        <Widget heading="Team News">
          <ListWidgetContainer href="http://localhost:3001/team-news/all" heading="" rowspan={3} />
        </Widget>
        <Widget heading="Holidays">
          <ListWidgetContainer href="http://localhost:3001/holidays/all" heading="" rowspan={3} />
        </Widget>
        <Widget heading="Overheard at transform">
          <h1> Tara: "It's a snack. You know, like cake- but chicken." </h1>
        </Widget>
        <GalleryWidgetContainer
          href="http://localhost:3001/images/latest"
          heading="Life at Transform"
        />
      </div>
    </div>
  );
};
export default App;
