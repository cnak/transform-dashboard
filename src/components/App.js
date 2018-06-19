import React, { Component } from 'react';

// Import widgets being used in this component
import Widget from './Widget';
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import BirthdayWidgetContainer from '../components/BirthdayWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
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
                    heading="Next Birthday" />
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
        );
    }
}

export default App;