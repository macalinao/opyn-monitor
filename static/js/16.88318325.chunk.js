(this["webpackJsonpweb-liquidate"]=this["webpackJsonpweb-liquidate"]||[]).push([[16],{470:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),o=t(490);function i(e,n,t,a,r,o,i){try{var l=e[o](i),c=l.value}catch(s){return void t(s)}l.done?n(c):Promise.resolve(c).then(a,r)}n.default=function(e){var n=e.preferred;return{name:e.label||"Coinbase",iconSrc:e.iconSrc||"https://cdn-images-1.medium.com/max/1200/1*7ywNS48PnonfsvvMu1tTsA.png",svg:e.svg,wallet:function(){var e,n=(e=r.a.mark((function e(n){var t,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getProviderName,a=n.createLegacyProviderInterface,o=window.web3&&window.web3.currentProvider,e.abrupt("return",{provider:o,interface:o&&"Coinbase"===t(o)?a(o):null});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function l(e){i(o,a,r,l,c,"next",e)}function c(e){i(o,a,r,l,c,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}(),type:"injected",link:"https://go.cb-w.com/",installMessage:o.b,mobile:!0,preferred:n}}},490:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},r=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(n,"</b> to continue. Click below to install and then load this Dapp with <b>").concat(n,"</b>.\n  </p>\n  ")}}}]);
//# sourceMappingURL=16.88318325.chunk.js.map