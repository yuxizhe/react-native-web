(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[760],{4983:function(e){"use strict";var t=function(e){};e.exports=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(t(n),!e){var a;if(void 0===n)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=0;(a=new Error(n.replace(/%s/g,(function(){return String(o[u++])})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},9141:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(2784),o=n(1998),i=n.n(o),a=n(7271),u=n.n(a),l=n(6171),c=n.n(l),f=n(9113),p=n(2322);function s(){return(0,p.jsx)(u(),{style:d.text,children:"Should be red and bold"})}var d=c().create({text:{color:"red",fontWeight:"bold"}});function g(){var e=r.useRef(null),t=r.useRef(null);return r.useEffect((function(){var n=e.current.contentWindow.document.body,r=document.createElement("div");r.id="iframe-root",n.appendChild(r),i().runApplication("App",{rootTag:r});var o=t.current.attachShadow({mode:"open"}),a=document.createElement("div");return a.id="shadow-root",o.appendChild(a),i().runApplication("App",{rootTag:a}),function(){i().unmountApplicationComponentAtRootTag(r),i().unmountApplicationComponentAtRootTag(a)}}),[]),(0,p.jsxs)(f.Z,{title:"AppRegistry",children:[(0,p.jsx)(u(),{children:"Styles in iframe"}),(0,p.jsx)("iframe",{ref:e}),(0,p.jsx)(u(),{children:"Styles in ShadowRoot"}),(0,p.jsx)("div",{ref:t})]})}i().registerComponent("App",(function(){return s}))},9113:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6171),o=n.n(r),i=n(7271),a=n.n(i),u=n(5797),l=n.n(u),c=n(2322);function f(e){return(0,c.jsxs)(l(),{style:p.root,children:[(0,c.jsxs)(l(),{style:p.header,children:[(0,c.jsx)(a(),{accessibilityLabel:"Back",href:"/",style:p.back,children:(0,c.jsx)("svg",{style:{fill:"#555",height:"100%"},viewBox:"0 0 140 140",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M105.614 118.681c3.398 3.396 3.4 8.912 0 12.311-3.396 3.399-8.91 3.398-12.311 0-.02-.02-.035-.04-.053-.061l-.025.022-57.66-57.66.024-.022a8.664 8.664 0 01-2.608-6.208 8.672 8.672 0 013.229-6.762l-.06-.058 57.66-57.66.025.024c.018-.021.033-.039.053-.058A8.706 8.706 0 01106.2 14.86c-.021.02-.041.034-.061.054l.023.024-52.119 52.125 51.54 51.54-.025.021c.015.022.036.036.056.057"})})}),(0,c.jsx)(a(),{accessibilityRole:"heading",style:p.title,children:e.title})]}),(0,c.jsx)(l(),{style:p.container,children:e.children})]})}var p=o().create({root:{height:"100vh"},header:{paddingVertical:"1em",borderBottomColor:"#ccc",borderBottomWidth:1},title:{fontSize:18,fontWeight:"bold",textAlign:"center"},back:{position:"absolute",height:"100%",display:"flex",padding:10,left:0,top:0,width:40,alignItems:"center"},container:{alignItems:"center",flex:1,overflowY:"scroll"}})},1474:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app-registry",function(){return n(9141)}])},5937:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.children,n=e.WrapperComponent,o=r.createElement(i.default,{children:t,key:1,pointerEvents:"box-none",style:c.appContainer});n&&(o=r.createElement(n,null,o));return r.createElement(l.Provider,{value:e.rootTag},r.createElement(i.default,{pointerEvents:"box-none",style:c.appContainer},o))};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(2784)),o=a(n(6171)),i=a(n(5797));function a(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var l=r.createContext(null);var c=o.default.create({appContainer:{flex:1}});e.exports=t.default},1998:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=u(n(4983)),o=u(n(3295)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(1022));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}var l,c={},f={},p=function(e){return e()},s=function(){function e(){}return e.getAppKeys=function(){return Object.keys(f)},e.getApplication=function(e,t){return(0,r.default)(f[e]&&f[e].getApplication,"Application "+e+" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent."),f[e].getApplication(t)},e.registerComponent=function(e,t){return f[e]={getApplication:function(e){return(0,i.getApplication)(p(t),e?e.initialProps:c,l&&l(e))},run:function(e){return(0,i.default)(p(t),l&&l(e),e.callback,{hydrate:e.hydrate||!1,initialProps:e.initialProps||c,rootTag:e.rootTag})}},e},e.registerConfig=function(t){t.forEach((function(t){var n=t.appKey,o=t.component,i=t.run;i?e.registerRunnable(n,i):((0,r.default)(o,"No component provider passed in"),e.registerComponent(n,o))}))},e.registerRunnable=function(e,t){return f[e]={run:t},e},e.runApplication=function(e,t){(0,r.default)(f[e]&&f[e].run,'Application "'+e+'" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.'),f[e].run(t)},e.setComponentProviderInstrumentationHook=function(e){p=e},e.setWrapperComponentProvider=function(e){l=e},e.unmountApplicationComponentAtRootTag=function(e){(0,o.default)(e)},e}();t.default=s,e.exports=t.default},1022:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a){var l=a.hydrate,c=a.initialProps,f=a.rootTag,p=l?i.hydrate:i.default;(0,o.default)(f,"Expect to have a valid rootTag, instead got ",f),p(u.default.createElement(r.default,{WrapperComponent:t,rootTag:f},u.default.createElement(e,c)),f,n)},t.getApplication=function(e,t,n){return{element:u.default.createElement(r.default,{WrapperComponent:n,rootTag:{}},u.default.createElement(e,t)),getStyleElement:function(e){var t=a.default.getSheet();return u.default.createElement("style",f({},e,{dangerouslySetInnerHTML:{__html:t.textContent},id:t.id}))}}};var r=c(n(5937)),o=c(n(4983)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(3988)),a=c(n(6171)),u=c(n(2784));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}},3988:function(e,t,n){"use strict";t.__esModule=!0,t.hydrate=function(e,t,n){return(0,o.createSheet)(t),(0,r.hydrate)(e,t,n)},t.default=function(e,t,n){return(0,o.createSheet)(t),(0,r.render)(e,t,n)};var r=n(8316),o=n(8014)},3295:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n(8316).unmountComponentAtNode;t.default=r,e.exports=t.default}},function(e){e.O(0,[774,832,294,888,179],(function(){return t=1474,e(e.s=t);var t}));var t=e.O();_N_E=t}]);