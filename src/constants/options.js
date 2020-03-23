export const options = [
  {
    addr: '0x98cc3bd6af1880fcfda17ac477b2f612980e5e33',
    title: 'cDai Insurance',

    // constants in contract
    symbol: 'ocDai',
    name: 'Opyn cDai Insurance',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: '0x0000000000000000000000000000000000000000',
    underlying: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
    strike: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    strikePrice: 1.859e-10,
    minRatio: 1.4,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0xA6923533A6362008e9b536271C2Bdc0FF1467D3c',
    expiry: 1612915200
  },
  {
    addr: '0x87fe8eba753076a943bd2a5f6c3556188064797e',
    title: 'Opyn ETH Put $100',

    // constants in contract
    symbol: 'oETH $100 Put',
    name: 'Opyn ETH Put $100 03/30/20',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    underlying: "0x0000000000000000000000000000000000000000",
    strike: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    strikePrice: 1e-6,
    minRatio: 1,
    exchange: '0x39246c4f3f6592c974ebc44f80ba6dc69b817c71',
    uniswapExchange: '0xA680B19749672A632e1E493Be7807638A57c952F',
    expiry: 1585526400
  },
  {
    addr: '0x8ed9f862363ffdfd3a07546e618214b6d59f03d4',
    title: 'cUSDC Insurance',

    // constants in contract
    symbol: 'ocUSDC',
    name: 'Opyn cUSDC Insurance',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: '0x0000000000000000000000000000000000000000',
    underlying: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
    strike: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    strikePrice: 2.08e-10,
    minRatio: 1.4,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0xE3A0a2431a093fed99037987eD0A88550e5E79AA',
    expiry: 1612915200
  },
  {
    addr: '0x4ba8c6ce0e855c051e65dfc37883360efaf7c82b',
    title: 'y.curve.fi Insurance',
     // constants in contract
     symbol: 'oCRV',
     name: 'Opyn y.curve.fi Insurance',
     decimals: 8,
     oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
     collateral: '0x0000000000000000000000000000000000000000',
     underlying: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
     strike: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
     strikePrice: 9.2e-16,
     minRatio: 1.6,
     exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
     uniswapExchange: '0x21f5E9D4Ec20571402A5396084B1634314A68c97',
     expiry: 1585440000
  },
  {
    addr: '0xddac4aed7c8f73032b388efe2c778fc194bc81ed',
    title: 'cDai Insurance (Old)',
    // constants in contract
    symbol: 'ocDai',
    name: 'Opyn cDai Insurance',
    decimals: 8,
    oracle: '0x7054e08461e3eCb7718B63540adDB3c3A1746415',
    collateral: '0x0000000000000000000000000000000000000000',
    underlying: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
    strike: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    strikePrice: 2e-10,
    minRatio: 1.4,
    exchange: '0x5778f2824a114f6115dc74d432685d3336216017',
    uniswapExchange: '0x8a0976500EED661202810bAB030a057DF15c4CC9',
    expiry: 1612915200
  },
]

export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'