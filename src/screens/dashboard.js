import React, { Component } from 'react';
import Header from '../components/Header';
import App from '../components/App';
import { mercadobitcoin } from '../services/Utils';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            timestamp: null
        };
    }

    componentDidMount() {
        mercadobitcoin.ticker();
        mercadobitcoin.orderbook();
        mercadobitcoin.trades();

        setInterval(() => {
            this.setState({ timestamp: new Date().toLocaleString() });
        }, 1000);
    }

    render() {
        const { timestamp } = this.state;

        return (
            <div>
                <Header timestamp={timestamp} />
                <App />
            </div>
        );
    }
}

export default Dashboard;