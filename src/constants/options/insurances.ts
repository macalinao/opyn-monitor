import * as tokens from '../tokens';
import { option } from '../../types'
/* eslint-disable import/prefer-default-export */
export const insurances: option[] = [
  {
    title: 'cDai Insurance',
    addr: '0x98cc3bd6af1880fcfda17ac477b2f612980e5e33',
    symbol: 'ocDai',
    name: 'Opyn cDai Insurance',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: tokens.OPYN_ETH,
    underlying: tokens.cDAI,
    strike: tokens.USDC,
    strikePrice: 1.859e-10,
    minRatio: 1.4,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0xA6923533A6362008e9b536271C2Bdc0FF1467D3c',
    expiry: 1612915200,
  },
  {
    addr: '0x8ed9f862363ffdfd3a07546e618214b6d59f03d4',
    title: 'cUSDC Insurance',

    // constants in contract
    symbol: 'ocUSDC',
    name: 'Opyn cUSDC Insurance',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: tokens.OPYN_ETH,
    underlying: tokens.cUSDC,
    strike: tokens.USDC,
    strikePrice: 2.08e-10,
    minRatio: 1.4,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0xE3A0a2431a093fed99037987eD0A88550e5E79AA',
    expiry: 1612915200,
  },
  {
    addr: '0x4ba8c6ce0e855c051e65dfc37883360efaf7c82b',
    title: 'y.curve.fi Insurance',
    // constants in contract
    symbol: 'oCRV',
    name: 'Opyn y.curve.fi Insurance',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: tokens.OPYN_ETH,
    underlying: tokens.CurveFi,
    strike: tokens.USDC,
    strikePrice: 9.2e-16,
    minRatio: 1.6,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0x21f5E9D4Ec20571402A5396084B1634314A68c97',
    expiry: 1585440000,
  },
  {
    addr: '0xddac4aed7c8f73032b388efe2c778fc194bc81ed',
    title: 'cDai Insurance (Old)',
    // constants in contract
    symbol: 'ocDai',
    name: 'Opyn cDai Insurance ',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: tokens.OPYN_ETH,
    underlying: tokens.cDAI,
    strike: tokens.USDC,
    strikePrice: 2e-10,
    minRatio: 1.4,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0x8a0976500EED661202810bAB030a057DF15c4CC9',
    expiry: 1612915200,
  },
];
