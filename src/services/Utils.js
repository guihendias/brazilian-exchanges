import axios from 'axios';
import keys from '../config/keys';
var BlinkTradeWS = require("blinktrade").BlinkTradeWS;
var blinktrade = new BlinkTradeWS({ prod: true });


// var BlinkTrade = new BlinkTradeRest({
//     prod: true,
//     brokerId: 4,
//     currency: 'BRL',
//   });
  

// const CURRENCY = 'BRL';
// const BASE_FOXBIT_URL = 'https://api.blinktrade.com/api/v1';
const BASE_URL_MERCADOBITCOIN = 'https://www.mercadobitcoin.net/api';

export const mercadobitcoin = {
    async ticker(){
        const returnValued = await axios.get(`${BASE_URL_MERCADOBITCOIN}/BTC/ticker/`);
        console.log(returnValued);
    },
    async orderbook(){
        const returnValued = await axios.get(`${BASE_URL_MERCADOBITCOIN}/BTC/orderbook/`);
        console.log(returnValued);
    },
    async trades(){
        const returnValued = await axios.get(`${BASE_URL_MERCADOBITCOIN}/BTC/trades/`);
        console.log(returnValued);
    }
}