(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{4983:function(t){"use strict";var e=function(t){};t.exports=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(e(n),!t){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=0;(c=new Error(n.replace(/%s/g,(function(){return String(i[u++])})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},9084:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var r=n(6412),i=n(3089),o=n(304),c=n(9017),u=n(8200),a=n(4897),l=n.n(a),s=n(6171),f=n.n(s),d=n(7271),h=n.n(d),p=n(2784),v=n(9113),b=n(2322);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var i=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var g="https://mathiasbynens.github.io/rel-noopener/malicious.html",w=function(t){(0,o.Z)(n,t);var e=y(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"handlePress",value:function(){l().canOpenURL(g).then((function(t){return l().openURL(g)}))}},{key:"render",value:function(){return(0,b.jsxs)(v.Z,{title:"Linking",children:[(0,b.jsx)(h(),{onPress:this.handlePress,style:_.text,children:"Linking.openURL"}),(0,b.jsx)(h(),{accessibilityRole:"link",href:"https://mathiasbynens.github.io/rel-noopener/malicious.html",hrefAttrs:{target:"_blank"},style:_.text,children:'target="_blank"'})]})}}]),n}(p.PureComponent),_=f().create({text:{borderRadius:5,borderStyle:"solid",borderWidth:1,marginVertical:10,padding:10}})},9113:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(6171),i=n.n(r),o=n(7271),c=n.n(o),u=n(5797),a=n.n(u),l=n(2322);function s(t){return(0,l.jsxs)(a(),{style:f.root,children:[(0,l.jsxs)(a(),{style:f.header,children:[(0,l.jsx)(c(),{accessibilityLabel:"Back",href:"/react-native-web/examples/",style:f.back,children:(0,l.jsx)("svg",{style:{fill:"#555",height:"100%"},viewBox:"0 0 140 140",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M105.614 118.681c3.398 3.396 3.4 8.912 0 12.311-3.396 3.399-8.91 3.398-12.311 0-.02-.02-.035-.04-.053-.061l-.025.022-57.66-57.66.024-.022a8.664 8.664 0 01-2.608-6.208 8.672 8.672 0 013.229-6.762l-.06-.058 57.66-57.66.025.024c.018-.021.033-.039.053-.058A8.706 8.706 0 01106.2 14.86c-.021.02-.041.034-.061.054l.023.024-52.119 52.125 51.54 51.54-.025.021c.015.022.036.036.056.057"})})}),(0,l.jsx)(c(),{accessibilityRole:"heading",style:f.title,children:t.title})]}),(0,l.jsx)(a(),{style:f.container,children:t.children})]})}var f=i().create({root:{height:"100vh"},header:{paddingVertical:"1em",borderBottomColor:"#ccc",borderBottomWidth:1},title:{fontSize:18,fontWeight:"bold",textAlign:"center"},back:{position:"absolute",height:"100%",display:"flex",padding:10,left:0,top:0,width:40,alignItems:"center"},container:{alignItems:"center",flex:1,overflowY:"scroll"}})},9697:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linking",function(){return n(9084)}])},4897:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var r=i(n(4983));function i(t){return t&&t.__esModule?t:{default:t}}var o=i(n(7502)).default.canUseDOM,c=o?window.location.href:"",u=function(){function t(){var t=this;this._eventCallbacks={},this.addEventListener=function(e,n){t._eventCallbacks[e]?t._eventCallbacks[e].push(n):t._eventCallbacks[e]=[n]},this.removeEventListener=function(e,n){var r=t._eventCallbacks[e].filter((function(t){return t.toString()!==n.toString()}));t._eventCallbacks[e]=r}}var e=t.prototype;return e._dispatchEvent=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=this._eventCallbacks[t];null!=i&&Array.isArray(i)&&i.map((function(t){t.apply(void 0,n)}))},e.canOpenURL=function(){return Promise.resolve(!0)},e.getInitialURL=function(){return Promise.resolve(c)},e.openURL=function(t,e){1===arguments.length&&(e="_blank");try{return a(t,e),this._dispatchEvent("onOpen",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e._validateURL=function(t){(0,r.default)("string"===typeof t,"Invalid URL: should be a string. Was: "+t),(0,r.default)(t,"Invalid URL: cannot be empty")},t}(),a=function(t,e){if(o){var n=new URL(t,window.location).toString();0===n.indexOf("tel:")?window.location=n:window.open(n,e,"noopener")}},l=new u;e.default=l,t.exports=e.default},1701:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},6412:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3089:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{Z:function(){return i}})},8200:function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},304:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return i}})},9017:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(4280),i=n(1701);function o(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}}},function(t){t.O(0,[774,832,294,888,179],(function(){return e=9697,t(t.s=e);var e}));var e=t.O();_N_E=e}]);