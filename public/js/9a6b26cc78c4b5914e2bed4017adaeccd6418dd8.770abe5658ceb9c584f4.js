(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?a=!1:(p.add(s),r[f]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:l,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(f){return void n(f)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return o}))},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),p=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=p},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},o0o1:function(e,t,n){e.exports=n("ls82")},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},oIFK:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return c}));n("o0o1"),n("HaE+");var r=n("wx4q"),o=(n("vcXL"),function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\u1ea3\xe3\u1ea1\u0103\u1eb1\u1eaf\u1eb3\u1eb5\u1eb7\xe2\u1ea7\u1ea5\u1ea9\u1eab\u1ead\xe8\xe9\u1ebb\u1ebd\u1eb9\xeb\xea\u1ec1\u1ebf\u1ec3\u1ec5\u1ec7\xec\xed\u1ec9\u0129\u1ecb\xef\xee\xf2\xf3\u1ecf\xf5\u1ecd\xf6\xf4\u1ed3\u1ed1\u1ed5\u1ed7\u1ed9\u01a1\u1edf\u1ee3\u1edb\u1edd\u1ee1\xf9\xfa\u1ee7\u0169\u1ee5\xfc\xfb\u01b0\u1eeb\u1ee9\u1eed\u1eef\u1ef1\u1ef3\xfd\u1ef7\u1ef9\u1ef5\u0111\xf1\xe7\xb7/_,:;",n=t.length,r=0;r<n;r++)e=e.replace(new RegExp(t.charAt(r),"g"),"aaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiiiioooooooooooooooooouuuuuuuuuuuuuyyyyydnc------".charAt(r));return(e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"))||"_"}),a=function(e,t){return e?"".concat(r.a.imageSite,"/").concat(t).concat(e):"https://i.imgur.com/wLJJctg.png"},i=function(e){var t=Math.floor(e/3600);e-=3600*t;var n=Math.floor(e/60);return"".concat(t," gi\u1edd ").concat(n," ph\xfat")},u=function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Number((e%60).toFixed(3)),o=r<10?"0"+r:r,a=t>0&&n<10?"0"+n:n;return t>0?t+":"+a+":"+o:a+":"+o},c=function(e,t){var n=e.indexOf("</p>",40);return n<0&&(n=e.indexOf("\n",40)),n<0&&(n=t),e.substring(0,n).replace(/<(?:.|\n)*?>/gm,"").trim()}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},wx4q:function(e,t,n){"use strict";t.a={rememberDuration:30,imageSite:"https://image.tmdb.org/t/p",graphqlServer:"/b/g",website:"https://xemphim.onl",infringingDomains:["xemphim.club","infringingxemphim.dothucong.com"],imageHostingUri:"/images",imageMaxFileSize:3,siteName:"XemPhim",googleClientId:"65878707302-ms7giag9ldgpehf69allsv8qcokh38mm.apps.googleusercontent.com",emailFrom:"noreply@xemphim.plus",watchLimit:40,vipLinkDuration:10,vipLinkMoviePrice:800,vipMonthlyPrice:3e4,vipMonthlyDuration:30,vpnFee:276,momoAddition:0,cardAddition:-.4,bankAccounts:{9990002222:{name:"PHAM DAC LOC",bank:"Ng\xe2n h\xe0ng TMCP Ngo\u1ea1i th\u01b0\u01a1ng Vi\u1ec7t Nam (Vietcombank)"},104875121634:{name:"LE THI NGOAN",bank:"Ng\xe2n h\xe0ng TMCP C\xf4ng Th\u01b0\u01a1ng Vi\u1ec7t Nam (VietinBank)"}},mailgun:{host:"api.eu.mailgun.net",domain:"mg.xemphim.plus"},vapidPublicKey:"BI-GZpMh-42wCDWJNx4IhtkL6HfCTfAX-6dKUAbszQ9bx9p9Ha4NOur6gen3b-mWcrrPOVJS1BgZY8gHPzlI7-Q",momoNumbers:{"0877820085":"m8I3i1FJFwiEtnIlImia","0878532170":"2pI9inFliBCOUet9TgFN","0853275525":"1MIVTntqCOUqtyFBCVCjtq"}}}}]);