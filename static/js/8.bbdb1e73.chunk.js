(this["webpackJsonpweb-liquidate"]=this["webpackJsonpweb-liquidate"]||[]).push([[8],{1403:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=(n(1432),n(1433),n(1434),n(1435),n(1437),n(1468)),c=n(192),i=n(1612),u=n(1616),s=n(7),l=n.n(s);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){h(a,r,o,c,i,"next",e)}function i(e){h(a,r,o,c,i,"throw",e)}c(void 0)}))}}function v(e){return g.apply(this,arguments)}function g(){return(g=d(o.a.mark((function e(t){var n,r,s,h,v,g,y,b,w,E,A,T,O,I,S,x,N,k;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k=function(){return(k=d(o.a.mark((function e(t){var r,a,s,f,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(g.values())[0],e.prev=1,e.next=4,i.a.create();case 4:a=e.sent,s=new u.a(a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error connecting to Ledger wallet");case 11:return e.prev=11,(f=new c.Transaction(t,{chain:h(n)})).raw[6]=l.a.Buffer.from([n]),f.raw[7]=l.a.Buffer.from([]),f.raw[8]=l.a.Buffer.from([]),e.next=18,s.signTransaction(r,f.serialize().toString("hex"));case 18:return d=e.sent,f.v=l.a.Buffer.from(d.v,"hex"),f.r=l.a.Buffer.from(d.r,"hex"),f.s=l.a.Buffer.from(d.s,"hex"),e.abrupt("return","0x".concat(f.serialize().toString("hex")));case 25:throw e.prev=25,e.t1=e.catch(11),e.t1;case 28:return e.prev=28,a.close(),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[1,8],[11,25,28,31]])})))).apply(this,arguments)},N=function(e){return k.apply(this,arguments)},x=function(e){return new Promise((function(t,n){b.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,r){e&&n(e);var o=r&&r.result;t(null!=o?new s(o).toString(10):null)}))}))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return new Promise(function(){var n=d(o.a.mark((function n(r,a){var c,s,l,f,p,h,d,m,b,w,A,T,O;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y||r([null]),!((c=g.size)>0)||t){n.next=4;break}return n.abrupt("return",r(E()));case 4:if(s=[],e>1)for(l=c>1?c:0;l<e+c;l++)f="".concat(v,"/").concat(l,"'/0/0"),p="".concat(v,"/0'/").concat(l),s.push(f,p);else s.push("".concat(v,"/0'/0"));return n.prev=6,n.next=9,i.a.create();case 9:h=n.sent,d=new u.a(h),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(6),a({message:"Error connecting to Ledger wallet"});case 16:m=0,b=s;case 17:if(!(m<b.length)){n.next=33;break}return w=b[m],n.prev=19,n.next=22,d.getAddress(w);case 22:A=n.sent,T=A.address,g.set(T.toLowerCase(),w),n.next=30;break;case 27:return n.prev=27,n.t1=n.catch(19),n.abrupt("return",a({message:"There was a problem trying to connect to your Ledger."}));case 30:m++,n.next=17;break;case 33:O=E(),h.close(),r(O);case 36:case"end":return n.stop()}}),n,null,[[6,13],[19,27]])})));return function(e,t){return n.apply(this,arguments)}}())},I=function(e){var t=p(g.entries()),n=t.findIndex((function(t){return f(t,1)[0]===e}));t.unshift(t.splice(n,1)[0]),g=new Map(t)},O=function(){return(O=d(o.a.mark((function e(){var t,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:5,e.next=3,S(t,!0);case 3:return n=e.sent,e.abrupt("return",Promise.all(n.map((function(e){return new Promise(function(){var t=d(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:r=t.sent,n({address:e,balance:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},T=function(){return O.apply(this,arguments)},A=function(){return y?E()[0]:void 0},E=function(){return Array.from(g.keys())},w=function(){return y=!0,S(1)},n=t.networkId,r=t.rpcUrl,s=t.BigNumber,h=t.networkName,v=m(n),g=new Map,y=!1,(b=Object(a.a)({getAccounts:function(e){S().then((function(t){return e(null,t)})).catch((function(t){return e(t,null)}))},signTransaction:function(e,t){N(e).then((function(e){return t(null,e)})).catch((function(e){return t(e,null)}))},rpcUrl:r})).getPrimaryAddress=A,b.getAllAccountsAndBalances=T,b.enable=w,b.setPrimaryAccount=I,b.getBalance=x,b.send=b.sendAsync,e.abrupt("return",b);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return"m/44'/60'"}t.default=function(e){var t=e.rpcUrl,n=e.networkId,r=e.preferred,a=e.label,c=e.iconSrc;return{name:a||"Ledger",svg:e.svg||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:c,wallet:function(){var e=d(o.a.mark((function e(r){var a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.BigNumber,c=r.networkName,e.next=3,v({rpcUrl:t,networkId:n,BigNumber:a,networkName:c});case 3:return i=e.sent,e.abrupt("return",{provider:i,interface:{name:"Ledger",connect:i.enable,disconnect:function(){return i.stop()},address:{get:function(){var e=d(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=d(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=d(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.getPrimaryAddress(),e.abrupt("return",t&&i.getBalance(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,preferred:r}}},1424:function(e,t,n){"use strict";var r={},o={},a=function(e,t){o[e]=t},c=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t};n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return f}));c("AccountNameRequired"),c("AccountNotSupported"),c("AmountRequired"),c("BluetoothRequired"),c("BtcUnmatchedApp"),c("CantOpenDevice"),c("CashAddrNotSupported"),c("CurrencyNotSupported"),c("DeviceAppVerifyNotSupported"),c("DeviceGenuineSocketEarlyClose"),c("DeviceNotGenuine"),c("DeviceOnDashboardExpected"),c("DeviceOnDashboardUnexpected"),c("DeviceInOSUExpected"),c("DeviceHalted"),c("DeviceNameInvalid"),c("DeviceSocketFail"),c("DeviceSocketNoBulkStatus"),c("DisconnectedDevice"),c("DisconnectedDeviceDuringOperation"),c("EnpointConfig");var i=c("EthAppPleaseEnableContractData"),u=(c("FeeEstimationFailed"),c("FirmwareNotRecognized"),c("HardResetFail"),c("InvalidXRPTag"),c("InvalidAddress"),c("InvalidAddressBecauseDestinationIsAlsoSource"),c("LatestMCUInstalledError"),c("UnknownMCU"),c("LedgerAPIError"),c("LedgerAPIErrorWithMessage"),c("LedgerAPINotAvailable"),c("ManagerAppAlreadyInstalled"),c("ManagerAppRelyOnBTC"),c("ManagerAppDepInstallRequired"),c("ManagerAppDepUninstallRequired"),c("ManagerDeviceLocked"),c("ManagerFirmwareNotEnoughSpace"),c("ManagerNotEnoughSpace"),c("ManagerUninstallBTCDep"),c("NetworkDown"),c("NoAddressesFound"),c("NotEnoughBalance"),c("NotEnoughBalanceToDelegate"),c("NotEnoughBalanceInParentAccount"),c("NotEnoughSpendableBalance"),c("NotEnoughBalanceBecauseDestinationNotCreated"),c("NoAccessToCamera"),c("NotEnoughGas"),c("NotSupportedLegacyAddress"),c("GasLessThanEstimate"),c("PasswordsDontMatch"),c("PasswordIncorrect"),c("RecommendSubAccountsToEmpty"),c("RecommendUndelegation"),c("TimeoutTagged"),c("UnexpectedBootloader"),c("MCUNotGenuineToDashboard"),c("RecipientRequired"),c("UnavailableTezosOriginatedAccountReceive"),c("UnavailableTezosOriginatedAccountSend"),c("UpdateFetchFileFail"),c("UpdateIncorrectHash"),c("UpdateIncorrectSig"),c("UpdateYourApp"),c("UserRefusedDeviceNameChange"),c("UserRefusedAddress"),c("UserRefusedFirmwareUpdate"),c("UserRefusedAllowManager"),c("UserRefusedOnDevice"),c("TransportOpenUserCancelled"),c("TransportInterfaceNotAvailable"),c("TransportRaceCondition"));c("TransportWebUSBGestureRequired"),c("DeviceShouldStayInApp"),c("WebsocketConnectionError"),c("WebsocketConnectionFailed"),c("WrongDeviceForAccount"),c("WrongAppForCurrency"),c("ETHAddressNonEIP"),c("CantScanQRCode"),c("FeeNotLoaded"),c("FeeRequired"),c("FeeTooHigh"),c("SyncError"),c("PairingFailed"),c("GenuineCheckFailed"),c("LedgerAPI4xx"),c("LedgerAPI5xx"),c("FirmwareOrAppUpdateRequired"),c("NoDBPathGiven"),c("DBWrongPassword"),c("DBNotReset");function s(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}s.prototype=new Error,a("TransportError",(function(e){return new s(e.message,e.id)}));var l={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function f(e){this.name="TransportStatusError";var t=Object.keys(l).find((function(t){return l[t]===e}))||"UNKNOWN_ERROR",n=function(e){switch(e){case 26368:return"Incorrect length";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,r=e.toString(16);this.message="Ledger device: ".concat(n," (0x").concat(r,")"),this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}f.prototype=new Error,a("TransportStatusError",(function(e){return new f(e.statusCode)}))},1468:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(1432),o=n.n(r),a=n(1433),c=n.n(a),i=n(1434),u=n.n(i),s=n(1435),l=n.n(s),f=n(1437),p=n.n(f);function h(e){var t=e.getAccounts,n=e.signTransaction,r=e.rpcUrl,a=new u.a({getAccounts:t,signTransaction:n}),i=new c.a({rpcUrl:r.includes("http")?r:"https://".concat(r)}),s=new o.a;return s.addProvider(new l.a),s.addProvider(new p.a),s.addProvider(a),s.addProvider(i),s.start(),s}},1473:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},1474:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},1493:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},1612:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w}));var r=n(3),o=n.n(r),a=n(6),c=n(1473),i=n(1776),u=n(1613),s=n(1493),l=n(1474),f=n(1777),p=n(557),h=n(1614),d=n(1615),v=n(1424);function g(e,t,n){var r=new v.c(t,n);return r.originalError=e,r}var m=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};function y(t,n,r,o){var a=function(t,n){for(var r=e.alloc(t.length),o=0;o<t.length;o++)r[o]=t[o]^n[o%n.length];return r}(t,r),c=e.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),i={version:"U2F_V2",keyHandle:m(a.toString("base64")),challenge:m(c.toString("base64")),appId:location.origin};return Object(d.a)("apdu","=> "+t.toString("hex")),Object(p.sign)(i,n/1e3).then((function(t){var n,r=t.signatureData;if("string"===typeof r){var a,c=e.from((n=r).replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*n.length%4),"base64");return a=o?c.slice(5):c,Object(d.a)("apdu","<= "+a.toString("hex")),a}throw t}))}var b=[];var w=function(t){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(u.a)(n).call(this))).scrambleKey=void 0,e.unwrap=!0,b.push(Object(s.a)(e)),e}return Object(f.a)(n,t),Object(l.a)(n,null,[{key:"open",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.length>1&&void 0!==r[1]?r[1]:5e3,e.abrupt("return",new n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),Object(l.a)(n,[{key:"exchange",value:function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t,this.exchangeTimeout,this.scrambleKey,this.unwrap);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),!("object"===typeof e.t0.metaData)){e.next=14;break}throw 5===e.t0.metaData.code&&(b.forEach((function(e){return e.emit("disconnect")})),b=[]),g(e.t0,"Failed to sign with Ledger device: U2F "+e.t0.metaData.type,"U2F_"+e.t0.metaData.code);case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(t){this.scrambleKey=e.from(t,"ascii")}},{key:"setUnwrap",value:function(e){this.unwrap=e}},{key:"close",value:function(){return Promise.resolve()}}]),n}(h.a);w.isSupported=p.isSupported,w.list=function(){return Object(p.isSupported)().then((function(e){return e?[null]:[]}))},w.listen=function(e){var t=!1;return Object(p.isSupported)().then((function(n){t||(n?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new v.c("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))})),{unsubscribe:function(){t=!0}}}}).call(this,n(7).Buffer)},1613:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},1614:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n(3),o=n.n(r),a=n(6),c=n(1473),i=n(1474),u=n(29),s=n.n(u),l=n(1424),f=function(){function t(){var n=this;Object(c.a)(this,t),this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this._events=new s.a,this.send=function(){var t=Object(a.a)(o.a.mark((function t(r,a,c,i){var u,s,f,p,h=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=h.length>4&&void 0!==h[4]?h[4]:e.alloc(0),s=h.length>5&&void 0!==h[5]?h[5]:[l.b.OK],!(u.length>=256)){t.next=4;break}throw new l.c("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig");case 4:return t.next=6,n.exchange(e.concat([e.from([r,a,c,i]),e.from([u.length]),u]));case 6:if(f=t.sent,p=f.readUInt16BE(f.length-2),s.some((function(e){return e===p}))){t.next=10;break}throw new l.e(p);case 10:return t.abrupt("return",f);case 11:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}(),this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a,c,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.exchangeBusyPromise){e.next=2;break}throw new l.d("An action was already pending on the Ledger device. Please deny or reconnect.");case 2:return a=new Promise((function(e){r=e})),n.exchangeBusyPromise=a,c=!1,i=setTimeout((function(){c=!0,n.emit("unresponsive")}),n.unresponsiveTimeout),e.prev=6,e.next=9,t();case 9:return u=e.sent,c&&n.emit("responsive"),e.abrupt("return",u);case 12:return e.prev=12,clearTimeout(i),r&&r(),n.exchangeBusyPromise=null,e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[6,,12,17]])})));return function(t){return e.apply(this,arguments)}}(),this._appAPIlock=null}return Object(i.a)(t,[{key:"exchange",value:function(e){throw new Error("exchange not implemented")}},{key:"setScrambleKey",value:function(e){}},{key:"close",value:function(){return Promise.resolve()}},{key:"on",value:function(e,t){this._events.on(e,t)}},{key:"off",value:function(e,t){this._events.removeListener(e,t)}},{key:"emit",value:function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=this._events).emit.apply(t,[e].concat(r))}},{key:"setDebugMode",value:function(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"setExchangeUnresponsiveTimeout",value:function(e){this.unresponsiveTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,t,n){var r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var u=c.value;e[u]=this.decorateAppAPIMethod(u,e[u],e,n)}}catch(s){o=!0,a=s}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}}},{key:"decorateAppAPIMethod",value:function(e,t,n,r){var c=this;return(function(){var i=Object(a.a)(o.a.mark((function a(){var i,u,s,f,p=arguments;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(i=c._appAPIlock)){o.next=3;break}return o.abrupt("return",Promise.reject(new l.c("Ledger Device is busy (lock "+i+")","TransportLocked")));case 3:for(o.prev=3,c._appAPIlock=e,c.setScrambleKey(r),u=p.length,s=new Array(u),f=0;f<u;f++)s[f]=p[f];return o.next=9,t.apply(n,s);case 9:return o.abrupt("return",o.sent);case 10:return o.prev=10,c._appAPIlock=null,o.finish(10);case 13:case"end":return o.stop()}}),a,null,[[3,,10,13]])})));return function(){return i.apply(this,arguments)}}())}}],[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(r,o){var a=!1,c=e.listen({next:function(n){a=!0,c&&c.unsubscribe(),i&&clearTimeout(i),e.open(n.descriptor,t).then(r,o)},error:function(e){i&&clearTimeout(i),o(e)},complete:function(){i&&clearTimeout(i),a||o(new l.c(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),i=n?setTimeout((function(){c.unsubscribe(),o(new l.c(e.ErrorMessage_ListenTimeout,"ListenTimeout"))}),n):null}))}}]),t}();f.isSupported=void 0,f.list=void 0,f.listen=void 0,f.open=void 0,f.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",f.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,n(7).Buffer)},1615:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var r=0,o=[],a=function(e,t,n){var a={type:e,id:String(++r),date:new Date};t&&(a.message=t),n&&(a.data=n),function(e){for(var t=0;t<o.length;t++)try{o[t](e)}catch(n){console.error(n)}}(a)};e.__ledgerLogsListen=function(e){return o.push(e),function(){var t=o.indexOf(e);-1!==t&&(o[t]=o[o.length-1],o.pop())}}}).call(this,n(12))},1616:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n(1473),o=n(1474),a=n(1617),c=n(1424),i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w0w";Object(r.a)(this,t),this.transport=void 0,this.transport=e,e.decorateAppAPIMethods(this,["getAddress","provideERC20TokenInformation","signTransaction","signPersonalMessage","getAppConfiguration"],n)}return Object(o.a)(t,[{key:"getAddress",value:function(t,n,r){var o=Object(a.b)(t),c=e.alloc(1+4*o.length);return c[0]=o.length,o.forEach((function(e,t){c.writeUInt32BE(e,1+4*t)})),this.transport.send(224,2,n?1:0,r?1:0,c).then((function(e){var t={},n=e[0],o=e[1+n];return t.publicKey=e.slice(1,1+n).toString("hex"),t.address="0x"+e.slice(1+n+1,1+n+1+o).toString("ascii"),r&&(t.chainCode=e.slice(1+n+1+o,1+n+1+o+32).toString("hex")),t}))}},{key:"provideERC20TokenInformation",value:function(e){var t=e.data;return this.transport.send(224,10,0,0,t).then((function(){return!0}),(function(e){if(e&&27904===e.statusCode)return!1;throw e}))}},{key:"signTransaction",value:function(t,n){for(var r,o=this,i=Object(a.b)(t),u=0,s=e.from(n,"hex"),l=[],f=function(){var t=0===u?149-4*i.length:150,n=u+t>s.length?s.length-u:t,r=e.alloc(0===u?1+4*i.length+n:n);0===u?(r[0]=i.length,i.forEach((function(e,t){r.writeUInt32BE(e,1+4*t)})),s.copy(r,1+4*i.length,u,u+n)):s.copy(r,0,u,u+n),l.push(r),u+=n};u!==s.length;)f();return Object(a.a)(l,(function(e,t){return o.transport.send(224,4,0===t?0:128,0,e).then((function(e){r=e}))})).then((function(){return{v:r.slice(0,1).toString("hex"),r:r.slice(1,33).toString("hex"),s:r.slice(33,65).toString("hex")}}),(function(e){throw function(e){return e&&27264===e.statusCode?new c.a("Please enable Contract data on the Ethereum app Settings"):e}(e)}))}},{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then((function(e){var t={};return t.arbitraryDataEnabled=1&e[0],t.version=e[1]+"."+e[2]+"."+e[3],t}))}},{key:"signPersonalMessage",value:function(t,n){for(var r,o=this,c=Object(a.b)(t),i=0,u=e.from(n,"hex"),s=[],l=function(){var t=0===i?149-4*c.length-4:150,n=i+t>u.length?u.length-i:t,r=e.alloc(0===i?1+4*c.length+4+n:n);0===i?(r[0]=c.length,c.forEach((function(e,t){r.writeUInt32BE(e,1+4*t)})),r.writeUInt32BE(u.length,1+4*c.length),u.copy(r,1+4*c.length+4,i,i+n)):u.copy(r,0,i,i+n),s.push(r),i+=n};i!==u.length;)l();return Object(a.a)(s,(function(e,t){return o.transport.send(224,8,0===t?0:128,0,e).then((function(e){r=e}))})).then((function(){return{v:r[0],r:r.slice(1,33).toString("hex"),s:r.slice(33,65).toString("hex")}}))}}]),t}()}).call(this,n(7).Buffer)},1617:function(e,t,n){"use strict";function r(e){var t=[];return e.split("/").forEach((function(e){var n=parseInt(e,10);isNaN(n)||(e.length>1&&"'"===e[e.length-1]&&(n+=2147483648),t.push(n))})),t}function o(e,t){return Promise.resolve().then((function(){return function e(n,r,o){return n>=r.length?o:t(r[n],n).then((function(t){return o.push(t),e(n+1,r,o)}))}(0,e,[])}))}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},1776:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(1493);function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",(function(){return a}))},1777:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=8.bbdb1e73.chunk.js.map