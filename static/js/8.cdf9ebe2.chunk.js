(this["webpackJsonpweb-liquidate"]=this["webpackJsonpweb-liquidate"]||[]).push([[8],{457:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=(n(494),n(496),n(497),n(498),n(500),n(531)),i=n(186),c=n(717),u=n(724),s=n(9),f=n.n(s);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){d(a,r,o,i,c,"next",e)}function c(e){d(a,r,o,i,c,"throw",e)}i(void 0)}))}}function g(e){return v.apply(this,arguments)}function v(){return(v=h(o.a.mark((function e(t){var n,r,s,d,g,v,E,y,w,_,b,T,I,S,O,N,A,C;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C=function(){return(C=h(o.a.mark((function e(t){var r,a,s,l,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(v.values())[0],e.prev=1,e.next=4,c.a.create();case 4:a=e.sent,s=new u.a(a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error connecting to Ledger wallet");case 11:return e.prev=11,(l=new i.Transaction(t,{chain:d(n)})).raw[6]=f.a.Buffer.from([n]),l.raw[7]=f.a.Buffer.from([]),l.raw[8]=f.a.Buffer.from([]),e.next=18,s.signTransaction(r,l.serialize().toString("hex"));case 18:return h=e.sent,l.v=f.a.Buffer.from(h.v,"hex"),l.r=f.a.Buffer.from(h.r,"hex"),l.s=f.a.Buffer.from(h.s,"hex"),e.abrupt("return","0x".concat(l.serialize().toString("hex")));case 25:throw e.prev=25,e.t1=e.catch(11),e.t1;case 28:return e.prev=28,a.close(),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[1,8],[11,25,28,31]])})))).apply(this,arguments)},A=function(e){return C.apply(this,arguments)},N=function(e){return new Promise((function(t,n){y.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,r){e&&n(e);var o=r&&r.result;t(null!=o?new s(o).toString(10):null)}))}))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return new Promise(function(){var n=h(o.a.mark((function n(r,a){var i,s,f,l,p,d,h,m,y,w,b,T,I;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(E||r([null]),!((i=v.size)>0)||t){n.next=4;break}return n.abrupt("return",r(_()));case 4:if(s=[],e>1)for(f=i>1?i:0;f<e+i;f++)l="".concat(g,"/").concat(f,"'/0/0"),p="".concat(g,"/0'/").concat(f),s.push(l,p);else s.push("".concat(g,"/0'/0"));return n.prev=6,n.next=9,c.a.create();case 9:d=n.sent,h=new u.a(d),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(6),a({message:"Error connecting to Ledger wallet"});case 16:m=0,y=s;case 17:if(!(m<y.length)){n.next=33;break}return w=y[m],n.prev=19,n.next=22,h.getAddress(w);case 22:b=n.sent,T=b.address,v.set(T.toLowerCase(),w),n.next=30;break;case 27:return n.prev=27,n.t1=n.catch(19),n.abrupt("return",a({message:"There was a problem trying to connect to your Ledger."}));case 30:m++,n.next=17;break;case 33:I=_(),d.close(),r(I);case 36:case"end":return n.stop()}}),n,null,[[6,13],[19,27]])})));return function(e,t){return n.apply(this,arguments)}}())},S=function(e){var t=p(v.entries()),n=t.findIndex((function(t){return l(t,1)[0]===e}));t.unshift(t.splice(n,1)[0]),v=new Map(t)},I=function(){return(I=h(o.a.mark((function e(){var t,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:5,e.next=3,O(t,!0);case 3:return n=e.sent,e.abrupt("return",Promise.all(n.map((function(e){return new Promise(function(){var t=h(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:r=t.sent,n({address:e,balance:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},T=function(){return I.apply(this,arguments)},b=function(){return E?_()[0]:void 0},_=function(){return Array.from(v.keys())},w=function(){return E=!0,O(1)},n=t.networkId,r=t.rpcUrl,s=t.BigNumber,d=t.networkName,g=m(n),v=new Map,E=!1,(y=Object(a.a)({getAccounts:function(e){O().then((function(t){return e(null,t)})).catch((function(t){return e(t,null)}))},signTransaction:function(e,t){A(e).then((function(e){return t(null,e)})).catch((function(e){return t(e,null)}))},rpcUrl:r})).getPrimaryAddress=b,y.getAllAccountsAndBalances=T,y.enable=w,y.setPrimaryAccount=S,y.getBalance=N,y.send=y.sendAsync,e.abrupt("return",y);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return"m/44'/60'"}t.default=function(e){var t=e.rpcUrl,n=e.networkId,r=e.preferred,a=e.label,i=e.iconSrc;return{name:a||"Ledger",svg:e.svg||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:i,wallet:function(){var e=h(o.a.mark((function e(r){var a,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.BigNumber,i=r.networkName,e.next=3,g({rpcUrl:t,networkId:n,BigNumber:a,networkName:i});case 3:return c=e.sent,e.abrupt("return",{provider:c,interface:{name:"Ledger",connect:c.enable,disconnect:function(){return c.stop()},address:{get:function(){var e=h(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=h(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=h(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.getPrimaryAddress(),e.abrupt("return",t&&c.getBalance(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,preferred:r}}},486:function(e,t,n){"use strict";var r={},o={},a=function(e,t){o[e]=t},i=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t};n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return l}));i("AccountNameRequired"),i("AccountNotSupported"),i("AmountRequired"),i("BluetoothRequired"),i("BtcUnmatchedApp"),i("CantOpenDevice"),i("CashAddrNotSupported"),i("CurrencyNotSupported"),i("DeviceAppVerifyNotSupported"),i("DeviceGenuineSocketEarlyClose"),i("DeviceNotGenuine"),i("DeviceOnDashboardExpected"),i("DeviceOnDashboardUnexpected"),i("DeviceInOSUExpected"),i("DeviceHalted"),i("DeviceNameInvalid"),i("DeviceSocketFail"),i("DeviceSocketNoBulkStatus"),i("DisconnectedDevice"),i("DisconnectedDeviceDuringOperation"),i("EnpointConfig");var c=i("EthAppPleaseEnableContractData"),u=(i("FeeEstimationFailed"),i("FirmwareNotRecognized"),i("HardResetFail"),i("InvalidXRPTag"),i("InvalidAddress"),i("InvalidAddressBecauseDestinationIsAlsoSource"),i("LatestMCUInstalledError"),i("UnknownMCU"),i("LedgerAPIError"),i("LedgerAPIErrorWithMessage"),i("LedgerAPINotAvailable"),i("ManagerAppAlreadyInstalled"),i("ManagerAppRelyOnBTC"),i("ManagerAppDepInstallRequired"),i("ManagerAppDepUninstallRequired"),i("ManagerDeviceLocked"),i("ManagerFirmwareNotEnoughSpace"),i("ManagerNotEnoughSpace"),i("ManagerUninstallBTCDep"),i("NetworkDown"),i("NoAddressesFound"),i("NotEnoughBalance"),i("NotEnoughBalanceToDelegate"),i("NotEnoughBalanceInParentAccount"),i("NotEnoughSpendableBalance"),i("NotEnoughBalanceBecauseDestinationNotCreated"),i("NoAccessToCamera"),i("NotEnoughGas"),i("NotSupportedLegacyAddress"),i("GasLessThanEstimate"),i("PasswordsDontMatch"),i("PasswordIncorrect"),i("RecommendSubAccountsToEmpty"),i("RecommendUndelegation"),i("TimeoutTagged"),i("UnexpectedBootloader"),i("MCUNotGenuineToDashboard"),i("RecipientRequired"),i("UnavailableTezosOriginatedAccountReceive"),i("UnavailableTezosOriginatedAccountSend"),i("UpdateFetchFileFail"),i("UpdateIncorrectHash"),i("UpdateIncorrectSig"),i("UpdateYourApp"),i("UserRefusedDeviceNameChange"),i("UserRefusedAddress"),i("UserRefusedFirmwareUpdate"),i("UserRefusedAllowManager"),i("UserRefusedOnDevice"),i("TransportOpenUserCancelled"),i("TransportInterfaceNotAvailable"),i("TransportRaceCondition"));i("TransportWebUSBGestureRequired"),i("DeviceShouldStayInApp"),i("WebsocketConnectionError"),i("WebsocketConnectionFailed"),i("WrongDeviceForAccount"),i("WrongAppForCurrency"),i("ETHAddressNonEIP"),i("CantScanQRCode"),i("FeeNotLoaded"),i("FeeRequired"),i("FeeTooHigh"),i("SyncError"),i("PairingFailed"),i("GenuineCheckFailed"),i("LedgerAPI4xx"),i("LedgerAPI5xx"),i("FirmwareOrAppUpdateRequired"),i("NoDBPathGiven"),i("DBWrongPassword"),i("DBNotReset");function s(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}s.prototype=new Error,a("TransportError",(function(e){return new s(e.message,e.id)}));var f={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function l(e){this.name="TransportStatusError";var t=Object.keys(f).find((function(t){return f[t]===e}))||"UNKNOWN_ERROR",n=function(e){switch(e){case 26368:return"Incorrect length";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,r=e.toString(16);this.message="Ledger device: ".concat(n," (0x").concat(r,")"),this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}l.prototype=new Error,a("TransportStatusError",(function(e){return new l(e.statusCode)}))},531:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(494),o=n.n(r),a=n(496),i=n.n(a),c=n(497),u=n.n(c),s=n(498),f=n.n(s),l=n(500),p=n.n(l);function d(e){var t=e.getAccounts,n=e.signTransaction,r=e.rpcUrl,a=new u.a({getAccounts:t,signTransaction:n}),c=new i.a({rpcUrl:r.includes("http")?r:"https://".concat(r)}),s=new o.a;return s.addProvider(new f.a),s.addProvider(new p.a),s.addProvider(a),s.addProvider(c),s.start(),s}},535:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},536:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},568:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},717:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w}));var r=n(3),o=n.n(r),a=n(6),i=n(535),c=n(885),u=n(718),s=n(568),f=n(536),l=n(886),p=n(719),d=n(722),h=n(723),g=n(486);function v(e,t,n){var r=new g.c(t,n);return r.originalError=e,r}var m=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};function E(t,n,r,o){var a=function(t,n){for(var r=e.alloc(t.length),o=0;o<t.length;o++)r[o]=t[o]^n[o%n.length];return r}(t,r),i=e.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),c={version:"U2F_V2",keyHandle:m(a.toString("base64")),challenge:m(i.toString("base64")),appId:location.origin};return Object(h.a)("apdu","=> "+t.toString("hex")),Object(p.sign)(c,n/1e3).then((function(t){var n,r=t.signatureData;if("string"===typeof r){var a,i=e.from((n=r).replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*n.length%4),"base64");return a=o?i.slice(5):i,Object(h.a)("apdu","<= "+a.toString("hex")),a}throw t}))}var y=[];var w=function(t){function n(){var e;return Object(i.a)(this,n),(e=Object(c.a)(this,Object(u.a)(n).call(this))).scrambleKey=void 0,e.unwrap=!0,y.push(Object(s.a)(e)),e}return Object(l.a)(n,t),Object(f.a)(n,null,[{key:"open",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.length>1&&void 0!==r[1]?r[1]:5e3,e.abrupt("return",new n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),Object(f.a)(n,[{key:"exchange",value:function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(t,this.exchangeTimeout,this.scrambleKey,this.unwrap);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),!("object"===typeof e.t0.metaData)){e.next=14;break}throw 5===e.t0.metaData.code&&(y.forEach((function(e){return e.emit("disconnect")})),y=[]),v(e.t0,"Failed to sign with Ledger device: U2F "+e.t0.metaData.type,"U2F_"+e.t0.metaData.code);case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(t){this.scrambleKey=e.from(t,"ascii")}},{key:"setUnwrap",value:function(e){this.unwrap=e}},{key:"close",value:function(){return Promise.resolve()}}]),n}(d.a);w.isSupported=p.isSupported,w.list=function(){return Object(p.isSupported)().then((function(e){return e?[null]:[]}))},w.listen=function(e){var t=!1;return Object(p.isSupported)().then((function(n){t||(n?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new g.c("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))})),{unsubscribe:function(){t=!0}}}}).call(this,n(9).Buffer)},718:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},719:function(e,t,n){"use strict";e.exports=n(720)},720:function(e,t,n){"use strict";(function(t){e.exports=s;var r=n(721),o="undefined"!==typeof navigator&&!!navigator.userAgent,a=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),i=o&&navigator.userAgent.match(/Edge\/1[2345]/),c=null;function u(e){return c||(c=new e((function(e,t){function n(){e({u2f:null,native:!0})}return o?a?n():("undefined"!==typeof window.u2f&&"function"===typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),i?n():"http:"===location.protocol?n():"undefined"===typeof MessageChannel?n():void r.isSupported((function(t){t?e({u2f:r,native:!1}):n()}))):n()}))),c}function s(e){return{isSupported:p.bind(e),ensureSupport:h.bind(e),register:g.bind(e),sign:v.bind(e),ErrorCodes:s.ErrorCodes,ErrorNames:s.ErrorNames}}function f(e,t){var n=null!=t?t.errorCode:1,r=s.ErrorNames[""+n],o=new Error(e);return o.metaData={type:r,code:n},o}function l(e,t){var n={};return n.promise=new e((function(e,r){n.resolve=e,n.reject=r,t.then(e,r)})),n.promise.cancel=function(t,r){u(e).then((function(e){r&&!e.native&&e.u2f.disconnect(),n.reject(f(t,{errorCode:-1}))}))},n}function p(){return u(this).then((function(e){return!!e.u2f}))}function d(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported")}}function h(){return u(this).then(d)}function g(e,t,n){var r=this;return Array.isArray(e)||(e=[e]),"number"===typeof t&&"undefined"===typeof n&&(n=t,t=null),t||(t=[]),l(r,u(r).then((function(o){d(o);var a=o.native,i=o.u2f;return new r((function(r,o){if(a){var c=e[0].appId;i.register(c,e,t,(function(e){e.errorCode?o(f("Registration failed",e)):(delete e.errorCode,r(e))}),n)}else i.register(e,t,(function(e,t){e?o(e):t.errorCode?o(f("Registration failed",t)):r(t)}),n)}))}))).promise}function v(e,t){var n=this;return Array.isArray(e)||(e=[e]),l(n,u(n).then((function(r){d(r);var o=r.native,a=r.u2f;return new n((function(n,r){if(o){var i=e[0].appId,c=e[0].challenge;a.sign(i,c,e,(function(e){e.errorCode?r(f("Sign failed",e)):(delete e.errorCode,n(e))}),t)}else a.sign(e,(function(e,t){e?r(e):t.errorCode?r(f("Sign failed",t)):n(t)}),t)}))}))).promise}function m(e){s[e]=function(){if(!t.Promise)throw new Error("The platform doesn't natively support promises");var n=[].slice.call(arguments);return s(t.Promise)[e].apply(null,n)}}s.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},s.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},m("isSupported"),m("ensureSupport"),m("register"),m("sign")}).call(this,n(10))},721:function(e,t,n){"use strict";var r=r||{};e.exports=r,r.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",r.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},r.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},r.Request,r.Response,r.Error,r.SignRequest,r.SignResponse,r.RegisterRequest,r.RegisterResponse,r.disconnect=function(){r.port_&&r.port_.port_&&(r.port_.port_.disconnect(),r.port_=null)},r.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var t={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(r.EXTENSION_ID,t,(function(){chrome.runtime.lastError?r.getIframePort_(e):r.getChromeRuntimePort_(e)}))}else r.getIframePort_(e)},r.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(r.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout((function(){e(null,new r.WrappedChromeRuntimePort_(t))}),0)},r.WrappedChromeRuntimePort_=function(e){this.port_=e},r.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},r.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var n=e.toLowerCase();"message"==n||"onmessage"==n?this.port_.onMessage.addListener((function(e){t({data:e})})):console.error("WrappedChromeRuntimePort only supports onMessage")},r.getIframePort_=function(e){var t="chrome-extension://"+r.EXTENSION_ID,n=document.createElement("iframe");n.src=t+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n);var o=!1,a=new MessageChannel;a.port1.addEventListener("message",(function t(n){"ready"==n.data?(a.port1.removeEventListener("message",t),o||(o=!0,e(null,a.port1))):console.error('First event on iframe port was not "ready"')})),a.port1.start(),n.addEventListener("load",(function(){n.contentWindow.postMessage("init",t,[a.port2])})),setTimeout((function(){o||(o=!0,e(new Error("IFrame extension not supported")))}),200)},r.EXTENSION_TIMEOUT_SEC=30,r.port_=null,r.waitingForPort_=[],r.reqCounter_=0,r.callbackMap_={},r.getPortSingleton_=function(e){r.port_?e(null,r.port_):(0==r.waitingForPort_.length&&r.getMessagePort((function(e,t){for(e||(r.port_=t,r.port_.addEventListener("message",r.responseHandler_));r.waitingForPort_.length;)r.waitingForPort_.shift()(e,t)})),r.waitingForPort_.push(e))},r.responseHandler_=function(e){var t=e.data,n=t.requestId;if(n&&r.callbackMap_[n]){var o=r.callbackMap_[n];delete r.callbackMap_[n],o(null,t.responseData)}else console.error("Unknown or missing requestId in response.")},r.isSupported=function(e){r.getPortSingleton_((function(t,n){e(!t)}))},r.sign=function(e,t,n){r.getPortSingleton_((function(o,a){if(o)return t(o);var i=++r.reqCounter_;r.callbackMap_[i]=t;var c={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:"undefined"!==typeof n?n:r.EXTENSION_TIMEOUT_SEC,requestId:i};a.postMessage(c)}))},r.register=function(e,t,n,o){r.getPortSingleton_((function(a,i){if(a)return n(a);var c=++r.reqCounter_;r.callbackMap_[c]=n;var u={type:r.MessageTypes.U2F_REGISTER_REQUEST,signRequests:t,registerRequests:e,timeoutSeconds:"undefined"!==typeof o?o:r.EXTENSION_TIMEOUT_SEC,requestId:c};i.postMessage(u)}))}},722:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var r=n(3),o=n.n(r),a=n(6),i=n(535),c=n(536),u=n(43),s=n.n(u),f=n(486),l=function(){function t(){var n=this;Object(i.a)(this,t),this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this._events=new s.a,this.send=function(){var t=Object(a.a)(o.a.mark((function t(r,a,i,c){var u,s,l,p,d=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=d.length>4&&void 0!==d[4]?d[4]:e.alloc(0),s=d.length>5&&void 0!==d[5]?d[5]:[f.b.OK],!(u.length>=256)){t.next=4;break}throw new f.c("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig");case 4:return t.next=6,n.exchange(e.concat([e.from([r,a,i,c]),e.from([u.length]),u]));case 6:if(l=t.sent,p=l.readUInt16BE(l.length-2),s.some((function(e){return e===p}))){t.next=10;break}throw new f.e(p);case 10:return t.abrupt("return",l);case 11:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}(),this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a,i,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.exchangeBusyPromise){e.next=2;break}throw new f.d("An action was already pending on the Ledger device. Please deny or reconnect.");case 2:return a=new Promise((function(e){r=e})),n.exchangeBusyPromise=a,i=!1,c=setTimeout((function(){i=!0,n.emit("unresponsive")}),n.unresponsiveTimeout),e.prev=6,e.next=9,t();case 9:return u=e.sent,i&&n.emit("responsive"),e.abrupt("return",u);case 12:return e.prev=12,clearTimeout(c),r&&r(),n.exchangeBusyPromise=null,e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[6,,12,17]])})));return function(t){return e.apply(this,arguments)}}(),this._appAPIlock=null}return Object(c.a)(t,[{key:"exchange",value:function(e){throw new Error("exchange not implemented")}},{key:"setScrambleKey",value:function(e){}},{key:"close",value:function(){return Promise.resolve()}},{key:"on",value:function(e,t){this._events.on(e,t)}},{key:"off",value:function(e,t){this._events.removeListener(e,t)}},{key:"emit",value:function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=this._events).emit.apply(t,[e].concat(r))}},{key:"setDebugMode",value:function(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"setExchangeUnresponsiveTimeout",value:function(e){this.unresponsiveTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,t,n){var r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var u=i.value;e[u]=this.decorateAppAPIMethod(u,e[u],e,n)}}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}}},{key:"decorateAppAPIMethod",value:function(e,t,n,r){var i=this;return(function(){var c=Object(a.a)(o.a.mark((function a(){var c,u,s,l,p=arguments;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(c=i._appAPIlock)){o.next=3;break}return o.abrupt("return",Promise.reject(new f.c("Ledger Device is busy (lock "+c+")","TransportLocked")));case 3:for(o.prev=3,i._appAPIlock=e,i.setScrambleKey(r),u=p.length,s=new Array(u),l=0;l<u;l++)s[l]=p[l];return o.next=9,t.apply(n,s);case 9:return o.abrupt("return",o.sent);case 10:return o.prev=10,i._appAPIlock=null,o.finish(10);case 13:case"end":return o.stop()}}),a,null,[[3,,10,13]])})));return function(){return c.apply(this,arguments)}}())}}],[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(r,o){var a=!1,i=e.listen({next:function(n){a=!0,i&&i.unsubscribe(),c&&clearTimeout(c),e.open(n.descriptor,t).then(r,o)},error:function(e){c&&clearTimeout(c),o(e)},complete:function(){c&&clearTimeout(c),a||o(new f.c(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),c=n?setTimeout((function(){i.unsubscribe(),o(new f.c(e.ErrorMessage_ListenTimeout,"ListenTimeout"))}),n):null}))}}]),t}();l.isSupported=void 0,l.list=void 0,l.listen=void 0,l.open=void 0,l.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",l.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,n(9).Buffer)},723:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var r=0,o=[],a=function(e,t,n){var a={type:e,id:String(++r),date:new Date};t&&(a.message=t),n&&(a.data=n),function(e){for(var t=0;t<o.length;t++)try{o[t](e)}catch(n){console.error(n)}}(a)};e.__ledgerLogsListen=function(e){return o.push(e),function(){var t=o.indexOf(e);-1!==t&&(o[t]=o[o.length-1],o.pop())}}}).call(this,n(10))},724:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var r=n(535),o=n(536),a=n(725),i=n(486),c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w0w";Object(r.a)(this,t),this.transport=void 0,this.transport=e,e.decorateAppAPIMethods(this,["getAddress","provideERC20TokenInformation","signTransaction","signPersonalMessage","getAppConfiguration"],n)}return Object(o.a)(t,[{key:"getAddress",value:function(t,n,r){var o=Object(a.b)(t),i=e.alloc(1+4*o.length);return i[0]=o.length,o.forEach((function(e,t){i.writeUInt32BE(e,1+4*t)})),this.transport.send(224,2,n?1:0,r?1:0,i).then((function(e){var t={},n=e[0],o=e[1+n];return t.publicKey=e.slice(1,1+n).toString("hex"),t.address="0x"+e.slice(1+n+1,1+n+1+o).toString("ascii"),r&&(t.chainCode=e.slice(1+n+1+o,1+n+1+o+32).toString("hex")),t}))}},{key:"provideERC20TokenInformation",value:function(e){var t=e.data;return this.transport.send(224,10,0,0,t).then((function(){return!0}),(function(e){if(e&&27904===e.statusCode)return!1;throw e}))}},{key:"signTransaction",value:function(t,n){for(var r,o=this,c=Object(a.b)(t),u=0,s=e.from(n,"hex"),f=[],l=function(){var t=0===u?149-4*c.length:150,n=u+t>s.length?s.length-u:t,r=e.alloc(0===u?1+4*c.length+n:n);0===u?(r[0]=c.length,c.forEach((function(e,t){r.writeUInt32BE(e,1+4*t)})),s.copy(r,1+4*c.length,u,u+n)):s.copy(r,0,u,u+n),f.push(r),u+=n};u!==s.length;)l();return Object(a.a)(f,(function(e,t){return o.transport.send(224,4,0===t?0:128,0,e).then((function(e){r=e}))})).then((function(){return{v:r.slice(0,1).toString("hex"),r:r.slice(1,33).toString("hex"),s:r.slice(33,65).toString("hex")}}),(function(e){throw function(e){return e&&27264===e.statusCode?new i.a("Please enable Contract data on the Ethereum app Settings"):e}(e)}))}},{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then((function(e){var t={};return t.arbitraryDataEnabled=1&e[0],t.version=e[1]+"."+e[2]+"."+e[3],t}))}},{key:"signPersonalMessage",value:function(t,n){for(var r,o=this,i=Object(a.b)(t),c=0,u=e.from(n,"hex"),s=[],f=function(){var t=0===c?149-4*i.length-4:150,n=c+t>u.length?u.length-c:t,r=e.alloc(0===c?1+4*i.length+4+n:n);0===c?(r[0]=i.length,i.forEach((function(e,t){r.writeUInt32BE(e,1+4*t)})),r.writeUInt32BE(u.length,1+4*i.length),u.copy(r,1+4*i.length+4,c,c+n)):u.copy(r,0,c,c+n),s.push(r),c+=n};c!==u.length;)f();return Object(a.a)(s,(function(e,t){return o.transport.send(224,8,0===t?0:128,0,e).then((function(e){r=e}))})).then((function(){return{v:r[0],r:r.slice(1,33).toString("hex"),s:r.slice(33,65).toString("hex")}}))}}]),t}()}).call(this,n(9).Buffer)},725:function(e,t,n){"use strict";function r(e){var t=[];return e.split("/").forEach((function(e){var n=parseInt(e,10);isNaN(n)||(e.length>1&&"'"===e[e.length-1]&&(n+=2147483648),t.push(n))})),t}function o(e,t){return Promise.resolve().then((function(){return function e(n,r,o){return n>=r.length?o:t(r[n],n).then((function(t){return o.push(t),e(n+1,r,o)}))}(0,e,[])}))}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},885:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(568);function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",(function(){return a}))},886:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=8.cdf9ebe2.chunk.js.map