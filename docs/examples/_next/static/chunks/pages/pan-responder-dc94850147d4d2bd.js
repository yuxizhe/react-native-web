(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{4983:function(e){"use strict";var n=function(e){};e.exports=function(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(n(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=0;(u=new Error(t.replace(/%s/g,(function(){return String(o[a++])})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},5558:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(6412),o=t(3089),i=t(1701),u=t(304),a=t(9017),c=t(8200),s=t(5235),l=t(2784),d=t(4921),f=t.n(d),p=t(6171),h=t.n(p),v=t(5797),y=t.n(v),_=t(9113),S=t(2322);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,c.Z)(e);if(n){var o=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}var g=function(e){(0,u.Z)(t,e);var n=b(t);function t(){var e;return(0,r.Z)(this,t),e=n.call(this),(0,s.Z)((0,i.Z)(e),"_panResponder",{}),(0,s.Z)((0,i.Z)(e),"_previousLeft",0),(0,s.Z)((0,i.Z)(e),"_previousTop",0),(0,s.Z)((0,i.Z)(e),"_circleStyles",{}),(0,s.Z)((0,i.Z)(e),"circle",null),(0,s.Z)((0,i.Z)(e),"_setCircleRef",(function(n){e.circle=n})),(0,s.Z)((0,i.Z)(e),"_handleStartShouldSetPanResponder",(function(e,n){return!0})),(0,s.Z)((0,i.Z)(e),"_handleMoveShouldSetPanResponder",(function(e,n){return!0})),(0,s.Z)((0,i.Z)(e),"_handlePanResponderGrant",(function(n,t){e._highlight()})),(0,s.Z)((0,i.Z)(e),"_handlePanResponderMove",(function(n,t){e._circleStyles.style.left=e._previousLeft+t.dx,e._circleStyles.style.top=e._previousTop+t.dy,e._updateNativeStyles()})),(0,s.Z)((0,i.Z)(e),"_handlePanResponderEnd",(function(n,t){e._unHighlight(),e._previousLeft+=t.dx,e._previousTop+=t.dy})),e._panResponder=f().create({onStartShouldSetPanResponder:e._handleStartShouldSetPanResponder,onMoveShouldSetPanResponder:e._handleMoveShouldSetPanResponder,onPanResponderGrant:e._handlePanResponderGrant,onPanResponderMove:e._handlePanResponderMove,onPanResponderRelease:e._handlePanResponderEnd,onPanResponderTerminate:e._handlePanResponderEnd}),e._previousLeft=20,e._previousTop=84,e._circleStyles={style:{left:e._previousLeft,top:e._previousTop,backgroundColor:"green"}},e}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this._updateNativeStyles()}},{key:"render",value:function(){return(0,S.jsx)(y(),{style:C.container,children:(0,S.jsx)(y(),R({ref:this._setCircleRef,style:C.circle},this._panResponder.panHandlers))})}},{key:"_highlight",value:function(){this._circleStyles.style.backgroundColor="blue",this._updateNativeStyles()}},{key:"_unHighlight",value:function(){this._circleStyles.style.backgroundColor="green",this._updateNativeStyles()}},{key:"_updateNativeStyles",value:function(){this.circle&&this.circle.setNativeProps(this._circleStyles)}}]),t}(l.PureComponent),P=function(e){(0,u.Z)(t,e);var n=b(t);function t(){var e;return(0,r.Z)(this,t),e=n.call(this),(0,s.Z)((0,i.Z)(e),"_handlePanResponderMove",(function(n,t){console.log(n.nativeEvent.locationX,n.nativeEvent.locationY),e.setState((function(e){return R(R({},e),{},{translateX:t.dx})}))})),e.state={translateX:0},e.panResponder=f().create({onStartShouldSetPanResponder:function(){return!0},onStartShouldSetPanResponderCapture:function(){return!0},onPanResponderMove:e._handlePanResponderMove,onPanResponderTerminationRequest:function(){return!0}}),e}return(0,o.Z)(t,[{key:"render",value:function(){var e={transform:[{translateX:this.state.translateX}]};return(0,S.jsx)(y(),{style:C.box,children:(0,S.jsx)(y(),R(R({style:C.outer},this.panResponder.panHandlers),{},{children:(0,S.jsx)(y(),{style:[C.inner,e]})}))})}}]),t}(l.Component),C=h().create({circle:{width:80,height:80,borderRadius:40,position:"absolute",left:0,top:0,touchAction:"none"},container:{alignSelf:"stretch",minHeight:300,paddingTop:64},box:{justifyContent:"center",alignItems:"center"},outer:{width:250,height:50,backgroundColor:"skyblue"},inner:{width:30,height:30,backgroundColor:"lightblue"}});function T(){return(0,S.jsxs)(_.Z,{title:"PanResponder",children:[(0,S.jsx)(g,{}),(0,S.jsx)(P,{})]})}},9113:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(6171),o=t.n(r),i=t(7271),u=t.n(i),a=t(5797),c=t.n(a),s=t(2322);function l(e){return(0,s.jsxs)(c(),{style:d.root,children:[(0,s.jsxs)(c(),{style:d.header,children:[(0,s.jsx)(u(),{accessibilityLabel:"Back",href:"/",style:d.back,children:(0,s.jsx)("svg",{style:{fill:"#555",height:"100%"},viewBox:"0 0 140 140",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M105.614 118.681c3.398 3.396 3.4 8.912 0 12.311-3.396 3.399-8.91 3.398-12.311 0-.02-.02-.035-.04-.053-.061l-.025.022-57.66-57.66.024-.022a8.664 8.664 0 01-2.608-6.208 8.672 8.672 0 013.229-6.762l-.06-.058 57.66-57.66.025.024c.018-.021.033-.039.053-.058A8.706 8.706 0 01106.2 14.86c-.021.02-.041.034-.061.054l.023.024-52.119 52.125 51.54 51.54-.025.021c.015.022.036.036.056.057"})})}),(0,s.jsx)(u(),{accessibilityRole:"heading",style:d.title,children:e.title})]}),(0,s.jsx)(c(),{style:d.container,children:e.children})]})}var d=o().create({root:{height:"100vh"},header:{paddingVertical:"1em",borderBottomColor:"#ccc",borderBottomWidth:1},title:{fontSize:18,fontWeight:"bold",textAlign:"center"},back:{position:"absolute",height:"100%",display:"flex",padding:10,left:0,top:0,width:40,alignItems:"center"},container:{alignItems:"center",flex:1,overflowY:"scroll"}})},1066:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pan-responder",function(){return t(5558)}])},8155:function(e,n,t){"use strict";n.__esModule=!0,n.default=void 0;var r,o=(r=t(4983))&&r.__esModule?r:{default:r},i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=u();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}t.default=e,n&&n.set(e,t);return t}(t(9585));function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var a={Events:{interactionStart:"interactionStart",interactionComplete:"interactionComplete"},runAfterInteractions:function(e){var n,t=new Promise((function(t){n=(0,i.default)((function(){e?t(e()):t()}))}));return{then:t.then.bind(t),done:t.then.bind(t),cancel:function(){(0,i.cancelIdleCallback)(n)}}},createInteractionHandle:function(){return 1},clearInteractionHandle:function(e){(0,o.default)(!!e,"Must provide a handle to clear.")},addListener:function(){}};n.default=a,e.exports=n.default},4921:function(e,n,t){"use strict";var r;n.__esModule=!0,n.default=void 0;var o=((r=t(566))&&r.__esModule?r:{default:r}).default;n.default=o,e.exports=n.default},9585:function(e,n,t){"use strict";var r;n.__esModule=!0,n.cancelIdleCallback=n.default=void 0;var o=((r=t(7502))&&r.__esModule?r:{default:r}).default.canUseDOM&&"undefined"!==typeof window.requestIdleCallback,i=o?window.requestIdleCallback:function(e,n){return setTimeout((function(){var n=Date.now();e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)},u=o?window.cancelIdleCallback:function(e){clearTimeout(e)};n.cancelIdleCallback=u;var a=i;n.default=a},566:function(e,n,t){"use strict";n.__esModule=!0,n.default=void 0;var r=i(t(8155)),o=i(t(6086));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.currentCentroidXOfTouchesChangedAfter,a=o.default.currentCentroidYOfTouchesChangedAfter,c=o.default.previousCentroidXOfTouchesChangedAfter,s=o.default.previousCentroidYOfTouchesChangedAfter,l=o.default.currentCentroidX,d=o.default.currentCentroidY,f={_initializeGestureState:function(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove:function(e,n){e.numberActiveTouches=n.numberActiveTouches,e.moveX=u(n,e._accountsForMovesUpTo),e.moveY=a(n,e._accountsForMovesUpTo);var t=e._accountsForMovesUpTo,r=c(n,t),o=u(n,t),i=s(n,t),l=a(n,t),d=e.dx+(o-r),f=e.dy+(l-i),p=n.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(d-e.dx)/p,e.vy=(f-e.dy)/p,e.dx=d,e.dy=f,e._accountsForMovesUpTo=n.mostRecentTimeStamp},create:function(e){var n={handle:null,shouldCancelClick:!1,timeout:null},t={stateID:Math.random(),moveX:0,moveY:0,x0:0,y0:0,dx:0,dy:0,vx:0,vy:0,numberActiveTouches:0,_accountsForMovesUpTo:0};return{panHandlers:{onStartShouldSetResponder:function(n){return null!=e.onStartShouldSetPanResponder&&e.onStartShouldSetPanResponder(n,t)},onMoveShouldSetResponder:function(n){return null!=e.onMoveShouldSetPanResponder&&e.onMoveShouldSetPanResponder(n,t)},onStartShouldSetResponderCapture:function(n){return 1===n.nativeEvent.touches.length&&f._initializeGestureState(t),t.numberActiveTouches=n.touchHistory.numberActiveTouches,null!=e.onStartShouldSetPanResponderCapture&&e.onStartShouldSetPanResponderCapture(n,t)},onMoveShouldSetResponderCapture:function(n){var r=n.touchHistory;return t._accountsForMovesUpTo!==r.mostRecentTimeStamp&&(f._updateGestureStateOnMove(t,r),!!e.onMoveShouldSetPanResponderCapture&&e.onMoveShouldSetPanResponderCapture(n,t))},onResponderGrant:function(o){return n.handle||(n.handle=r.default.createInteractionHandle()),n.timeout&&function(e){clearTimeout(e.timeout)}(n),n.shouldCancelClick=!0,t.x0=l(o.touchHistory),t.y0=d(o.touchHistory),t.dx=0,t.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(o,t),null==e.onShouldBlockNativeResponder||e.onShouldBlockNativeResponder(o,t)},onResponderReject:function(r){p(n,e.onPanResponderReject,r,t)},onResponderRelease:function(r){p(n,e.onPanResponderRelease,r,t),h(n),f._initializeGestureState(t)},onResponderStart:function(n){var r=n.touchHistory;t.numberActiveTouches=r.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(n,t)},onResponderMove:function(n){var r=n.touchHistory;t._accountsForMovesUpTo!==r.mostRecentTimeStamp&&(f._updateGestureStateOnMove(t,r),e.onPanResponderMove&&e.onPanResponderMove(n,t))},onResponderEnd:function(r){var o=r.touchHistory;t.numberActiveTouches=o.numberActiveTouches,p(n,e.onPanResponderEnd,r,t)},onResponderTerminate:function(r){p(n,e.onPanResponderTerminate,r,t),h(n),f._initializeGestureState(t)},onResponderTerminationRequest:function(n){return null==e.onPanResponderTerminationRequest||e.onPanResponderTerminationRequest(n,t)},onClickCapture:function(e){!0===n.shouldCancelClick&&(e.stopPropagation(),e.preventDefault())}},getInteractionHandle:function(){return n.handle}}}};function p(e,n,t,o){e.handle&&(r.default.clearInteractionHandle(e.handle),e.handle=null),n&&n(t,o)}function h(e){e.timeout=setTimeout((function(){e.shouldCancelClick=!1}),250)}var v=f;n.default=v,e.exports=n.default},6086:function(e,n){"use strict";n.__esModule=!0,n.default=void 0;var t={centroidDimension:function(e,n,r,o){var i=e.touchBank,u=0,a=0,c=1===e.numberActiveTouches?e.touchBank[e.indexOfSingleActiveTouch]:null;if(null!==c)c.touchActive&&c.currentTimeStamp>n&&(u+=o&&r?c.currentPageX:o&&!r?c.currentPageY:!o&&r?c.previousPageX:c.previousPageY,a=1);else for(var s=0;s<i.length;s++){var l=i[s];if(null!==l&&void 0!==l&&l.touchActive&&l.currentTimeStamp>=n){u+=o&&r?l.currentPageX:o&&!r?l.currentPageY:!o&&r?l.previousPageX:l.previousPageY,a++}}return a>0?u/a:t.noCentroid},currentCentroidXOfTouchesChangedAfter:function(e,n){return t.centroidDimension(e,n,!0,!0)},currentCentroidYOfTouchesChangedAfter:function(e,n){return t.centroidDimension(e,n,!1,!0)},previousCentroidXOfTouchesChangedAfter:function(e,n){return t.centroidDimension(e,n,!0,!1)},previousCentroidYOfTouchesChangedAfter:function(e,n){return t.centroidDimension(e,n,!1,!1)},currentCentroidX:function(e){return t.centroidDimension(e,0,!0,!0)},currentCentroidY:function(e){return t.centroidDimension(e,0,!1,!0)},noCentroid:-1},r=t;n.default=r,e.exports=n.default},1701:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},6412:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},3089:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,{Z:function(){return o}})},5235:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},8200:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},304:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return o}})},9017:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(4280),o=t(1701);function i(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[774,832,294,888,179],(function(){return n=1066,e(e.s=n);var n}));var n=e.O();_N_E=n}]);