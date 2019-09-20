import React, { Component } from 'react';
import './Tram.css';
import axios from 'axios';
import Widget from '../../../components/Widget';
import StatusCard from '../StatusCard/StatusCard';

const trams = [
    { id: 'altrincham', name: 'Altrincham – Piccadilly' },
    { id: 'ashton-under-lyne', name: 'Ashton-under-Lyne – MediaCityUK' },
    { id: 'bury', name: 'Altrincham – Bury' },
    { id: 'east didsbury', name: 'East Didsbury – Shaw and Crompton' },
    { id: 'eccles via mediacityuk', name: 'Eccles - MediaCityUK' },
    { id: 'manchester airport', name: 'Manchester Airport – Victoria' },
    { id: 'mediacityuk', name: 'Ashton-under-Lyne – Eccles' },
    { id: 'rochdale via oldham', name: 'East Didsbury – Rochdale Town Centre' }
];

/**
 *  Create an initial array of tram statuses containing:
 *  { key:ashton-under-lyne, line: lineName, status: 'Good Service', reason: null }
 * @param list of tram objects
 */
function createStatuses(list) {
    return list.map(item => {
        return {
            key: item.id,
            line: item.name,
            status: 'Good Service',
            reason: null
        };
    });
}

/**
 * Removes the last 3 characters of the date,
 * removes seconds from the date received.
 */
function formatDate(date) {
    return date.slice(0, -3);
}

class Tram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tramStatuses: [],
            lastUpdatedTime: ''
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
        this.setGetDataInterval();
    }

    componentDidUpdate() {
        clearInterval(this.interval);
        this.setGetDataInterval();
    }

    async getData() {
        const { href } = this.props;
        const response = await (await axios.get(href)).data;
        // Gets date from the json object and removes the last 3 characters
        const lastUpdateTime = formatDate(response.retrievalDate);

        const tramStatuses = createStatuses(trams);

        if (response.items.length === 1) {
            // All statuses are the same update the status in case you there's a catastrophic failure in all lines
            tramStatuses.forEach(tram => {
                // eslint-disable-next-line no-param-reassign
                tram.status = response.items[0].status;
            });
        } else {
            response.items.forEach(item => {
                if (item.id) {
                    const find = tramStatuses.find(tram => {
                        return item.name.toLowerCase() === tram.key.toLowerCase();
                    });
                    if (find) {
                        find.status = item.status;
                        find.reason = item.detail;
                    }
                }
            });
        }
        if (tramStatuses) {
            this.setState({
                loading: false,
                tramStatuses,
                lastUpdatedTime: `TRAM STATUS @ ${lastUpdateTime}`
            });
        }
    }

    setGetDataInterval() {
        const now = new Date();
        const tenMinutes = 60000 * 10;
        const thirtyMinutes = 60000 * 30;
        if (now.getHours() >= 16 && now.getHours() < 19) {
            this.interval = setInterval(this.getData, tenMinutes);
        } else {
            this.interval = setInterval(this.getData, thirtyMinutes);
        }
    }

    showStatusCard = data => {
        return data.map(item => (
            <StatusCard
                key={item.key}
                id={item.key}
                name={item.line}
                status={item.status ? item.status : null}
                reason={item.reason ? item.reason : null}
                severity={null}
            />
        ));
    };

    render() {
        const { loading, tramStatuses, lastUpdatedTime } = this.state;

        const headingProps = {
            headingTitle: '',
            headingTitleColor: '#6dc5e8',
            headingBackgroundColor: 'white',
            lastUpdatedStatusTime: lastUpdatedTime
        };

        if (loading === true) {
            return <div style={{ fontSize: '50px' }}>Loading</div>;
        }
        return (
            <Widget heading={headingProps}>
                <div className="tram-wrapper">{this.showStatusCard(tramStatuses)}</div>
            </Widget>
        );
    }
}

export default Tram;
