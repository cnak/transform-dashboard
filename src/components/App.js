import React, { Component } from 'react';

// Import widgets being used in this component
import Widget from './Widget';
import BirthdayWidgetContainer from '../components/BirthdayWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';

// Add in styles
import '../styles/App.css';
import WeatherWidgetContainer from './Weather/WeatherWidgetContainer';
import Banner from './Banner/Banner';

class App extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="App">
                    <Widget heading="Weather">
                        <WeatherWidgetContainer
                            href="http://localhost:3001/weather/current" />
                    </Widget>
                    <Widget heading="Team Social">
                        <ListWidgetContainer
                            href="http://localhost:3001/team-social/all"
                            heading=""
                            rowspan={3} />
                    </Widget>
                    <Widget heading="Team News">
                        <ListWidgetContainer
                            href="http://localhost:3001/team-news/all"
                            heading=""
                            rowspan={3} />
                    </Widget>
                    <BirthdayWidgetContainer
                        href="http://localhost:3001/birthday/next"
                        heading="Today's Birthday" />
                    <Widget heading="Holidays">
                        <ListWidgetContainer
                            href="http://localhost:3001/holidays/all"
                            heading=""
                            rowspan={3} />
                    </Widget>
                    <Widget heading="Overheard at transform">
                        <h1>Tara : "It's a snack. You know, like cake- but chicken."</h1>
                    </Widget>
                    <BirthdayWidgetContainer
                        href="http://localhost:3001/winning-behaviour/now"
                        heading="This Month's Winning Behaviour" />
                </div>
            </div>
        );
    }
}

export default App;