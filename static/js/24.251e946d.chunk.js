(this["webpackJsonpweb-liquidate"]=this["webpackJsonpweb-liquidate"]||[]).push([[24],{481:function(e,n,t){"use strict";t.r(n);t(59);var i=t(100);t(4),t(71),t(72);n.default=function(e){Object(i.d)({name:"balance options",value:e,type:"object"});var n=e.minimumBalance;return Object(i.d)({name:"minimumBalance",value:n,type:"string"}),function(e){var t=e.balance,i=e.BigNumber;if(i(t).lt(i(n||0)))return{heading:"Get Some ETH",description:"Your current account has less than the necessary minimum balance of ".concat(i(n).div(i("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:'\n        <svg height="18" viewBox="0 0 429 695" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="m0 394 213 126.228516 214-126.228516-214 301z"/><path d="m0 353.962264 213.5-353.962264 213.5 353.962264-213.5 126.037736z"/></g></svg>\n        '}}}}}]);
//# sourceMappingURL=24.251e946d.chunk.js.map