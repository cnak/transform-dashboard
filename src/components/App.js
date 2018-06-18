import React, { Component } from 'react';

// Import widgets being used in this component
import Widget from './Widget';
// import NumberWidget from '../components/NumberWidget';
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Widget>
                    <ListWidgetContainer
                        href="http://localhost:3001/stats/top"
                        heading="Top Ticket Answerers"
                        rowspan={3} />
                </Widget>
                <Widget>
                    <NumberWidgetContainer
                        href="http://localhost:3001/tickets/open"
                        heading="Open Ticket Total"
                        max={9} value={5} />
                </Widget>
            </div>
        );
    }
}

export default App;