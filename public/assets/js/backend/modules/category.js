/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sortablejs/modular/sortable.complete.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.complete.esm.js ***!
  \******************************************************************/
/*! exports provided: default, Sortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return It; });
function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function e(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var n=e(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),o=e(/Edge/i),i=e(/firefox/i),r=e(/safari/i)&&!e(/chrome/i)&&!e(/android/i),a=e(/iP(ad|od|hone)/i),l=e(/chrome/i)&&e(/android/i),s={capture:!1,passive:!1};function c(t,e,o){t.addEventListener(e,o,!n&&s)}function u(t,e,o){t.removeEventListener(e,o,!n&&s)}function d(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function h(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function f(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&d(t,e):d(t,e))||o&&t===n)return t;if(t===n)break}while(t=h(t))}return null}var p,g=/\s+/g;function v(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(g," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(g," ")}}function m(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function b(t,e){var n="";if("string"==typeof t)n=t;else do{var o=m(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function w(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function E(){return document.scrollingElement||document.documentElement}function y(t,e,o,i,r){if(t.getBoundingClientRect||t===window){var a,l,s,c,u,d,h;if(t!==window&&t!==E()?(l=(a=t.getBoundingClientRect()).top,s=a.left,c=a.bottom,u=a.right,d=a.height,h=a.width):(l=0,s=0,c=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||o)&&t!==window&&(r=r||t.parentNode,!n))do{if(r&&r.getBoundingClientRect&&("none"!==m(r,"transform")||o&&"static"!==m(r,"position"))){var f=r.getBoundingClientRect();l-=f.top+parseInt(m(r,"border-top-width")),s-=f.left+parseInt(m(r,"border-left-width")),c=l+a.height,u=s+a.width;break}}while(r=r.parentNode);if(i&&t!==window){var p=b(r||t),g=p&&p.a,v=p&&p.d;p&&(c=(l/=v)+(d/=v),u=(s/=g)+(h/=g))}return{top:l,left:s,bottom:c,right:u,width:h,height:d}}}function D(t,e,n){for(var o=x(t,!0),i=y(t)[e];o;){var r=y(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===E())break;o=x(o,!1)}return!1}function _(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==It.ghost&&r[i]!==It.dragged&&f(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function S(t,e){for(var n=t.lastElementChild;n&&(n===It.ghost||"none"===m(n,"display")||e&&!d(n,e));)n=n.previousElementSibling;return n||null}function C(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===It.clone||e&&!d(t,e)||n++;return n}function T(t){var e=0,n=0,o=E();if(t)do{var i=b(t);e+=t.scrollLeft*i.a,n+=t.scrollTop*i.d}while(t!==o&&(t=t.parentNode));return[e,n]}function x(t,e){if(!t||!t.getBoundingClientRect)return E();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=m(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return E();if(o||e)return n;o=!0}}}while(n=n.parentNode);return E()}function M(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function N(t,e){return function(){if(!p){var n=arguments,o=this;1===n.length?t.call(o,n[0]):t.apply(o,n),p=setTimeout(function(){p=void 0},e)}}}function O(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function A(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function I(t,e){m(t,"position","absolute"),m(t,"top",e.top),m(t,"left",e.left),m(t,"width",e.width),m(t,"height",e.height)}function P(t){m(t,"position",""),m(t,"top",""),m(t,"left",""),m(t,"width",""),m(t,"height","")}var k="Sortable"+(new Date).getTime(),R=[],X={initializeByDefault:!0},Y={mount:function(t){for(var e in X)X.hasOwnProperty(e)&&!(e in t)&&(t[e]=X[e]);R.push(t)},pluginEvent:function(e,n,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";R.forEach(function(i){n[i.pluginName]&&(n[i.pluginName][r]&&n[i.pluginName][r](t({sortable:n},o)),n.options[i.pluginName]&&n[i.pluginName][e]&&n[i.pluginName][e](t({sortable:n},o)))})},initializePlugins:function(t,e,n,o){for(var i in R.forEach(function(o){var i=o.pluginName;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[i]=r,Object.assign(n,r.defaults)}}),t.options)if(t.options.hasOwnProperty(i)){var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r)}},getEventProperties:function(t,e){var n={};return R.forEach(function(o){"function"==typeof o.eventProperties&&Object.assign(n,o.eventProperties.call(e[o.pluginName],t))}),n},modifyOption:function(t,e,n){var o;return R.forEach(function(i){t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))}),o}};function B(e){var i=e.sortable,r=e.rootEl,a=e.name,l=e.targetEl,s=e.cloneEl,c=e.toEl,u=e.fromEl,d=e.oldIndex,h=e.newIndex,f=e.oldDraggableIndex,p=e.newDraggableIndex,g=e.originalEvent,v=e.putSortable,m=e.extraEventProperties;if(i=i||r&&r[k]){var b,w=i.options,E="on"+a.charAt(0).toUpperCase()+a.substr(1);!window.CustomEvent||n||o?(b=document.createEvent("Event")).initEvent(a,!0,!0):b=new CustomEvent(a,{bubbles:!0,cancelable:!0}),b.to=c||r,b.from=u||r,b.item=l||r,b.clone=s,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var y=t({},m,Y.getEventProperties(a,i));for(var D in y)b[D]=y[D];r&&r.dispatchEvent(b),w[E]&&w[E].call(i,b)}}var H=function(e,n,o){var i=void 0===o?{}:o,r=i.evt,a=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)e.indexOf(n=r[o])>=0||(i[n]=t[n]);return i}(i,["evt"]);Y.pluginEvent.bind(It)(e,n,t({dragEl:L,parentEl:K,ghostEl:W,rootEl:j,nextEl:z,lastDownEl:G,cloneEl:U,cloneHidden:q,dragStarted:lt,putSortable:tt,activeSortable:It.active,originalEvent:r,oldIndex:V,oldDraggableIndex:Q,newIndex:Z,newDraggableIndex:$,hideGhostForTarget:xt,unhideGhostForTarget:Mt,cloneNowHidden:function(){q=!0},cloneNowShown:function(){q=!1},dispatchSortableEvent:function(t){F({sortable:n,name:t,originalEvent:r})}},a))};function F(e){B(t({putSortable:tt,cloneEl:U,targetEl:L,rootEl:j,oldIndex:V,oldDraggableIndex:Q,newIndex:Z,newDraggableIndex:$},e))}var L,K,W,j,z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht=!1,ft=!1,pt=[],gt=!1,vt=!1,mt=[],bt=!1,wt=[],Et="undefined"!=typeof document,yt=a,Dt=o||n?"cssFloat":"float",_t=Et&&!l&&!a&&"draggable"in document.createElement("div"),St=function(){if(Et){if(n)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ct=function(t,e){var n=m(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=_(t,0,e),r=_(t,1,e),a=i&&m(i),l=r&&m(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+y(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+y(r).width;return"flex"===n.display?"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal":"grid"===n.display?n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal":i&&a.float&&"none"!==a.float?!r||"both"!==l.clear&&l.clear!==("left"===a.float?"left":"right")?"horizontal":"vertical":i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Dt]||r&&"none"===n[Dt]&&s+c>o)?"vertical":"horizontal"},Tt=function(t){function e(t,n){return function(o,i,r,a){if(null==t&&(n||o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var l=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},xt=function(){!St&&W&&m(W,"display","none")},Mt=function(){!St&&W&&m(W,"display","")};Et&&document.addEventListener("click",function(t){if(ft)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ft=!1,!1},!0);var Nt,Ot=function(t){if(L){var e=(i=(t=t.touches?t.touches[0]:t).clientX,r=t.clientY,pt.some(function(t){if(!S(t)){var e=y(t),n=t[k].options.emptyInsertThreshold;return n&&i>=e.left-n&&i<=e.right+n&&r>=e.top-n&&r<=e.bottom+n?a=t:void 0}}),a);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[k]._onDragOver(n)}}var i,r,a},At=function(t){L&&L.parentNode[k]._isOutsideThisEl(t.target)};function It(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not "+{}.toString.call(e);this.el=e,this.options=n=Object.assign({},n),e[k]=this;var o,i,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ct(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==It.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var a in Y.initializePlugins(this,e,r),r)!(a in n)&&(n[a]=r[a]);for(var l in Tt(n),this)"_"===l.charAt(0)&&"function"==typeof this[l]&&(this[l]=this[l].bind(this));this.nativeDraggable=!n.forceFallback&&_t,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?c(e,"pointerdown",this._onTapStart):(c(e,"mousedown",this._onTapStart),c(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(c(e,"dragover",this),c(e,"dragenter",this)),pt.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),Object.assign(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==m(e,"display")&&void 0!==e){i.push({target:e,rect:y(e)});var n=t({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=b(e,!0);o&&(n.top-=o.f,n.left-=o.e)}e.fromRect=n}})},addAnimationState:function(t){i.push(t)},removeAnimationState:function(t){i.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(i,{target:t}),1)},animateAll:function(t){var e=this;if(!this.options.animation)return clearTimeout(o),void("function"==typeof t&&t());var n=!1,r=0;i.forEach(function(t){var o=0,i=t.target,a=i.fromRect,l=y(i),s=i.prevFromRect,c=i.prevToRect,u=t.rect,d=b(i,!0);d&&(l.top-=d.f,l.left-=d.e),i.toRect=l,i.thisAnimationDuration&&M(s,l)&&!M(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(o=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,e.options)),M(l,a)||(i.prevFromRect=a,i.prevToRect=l,o||(o=e.options.animation),e.animate(i,u,l,o)),o&&(n=!0,r=Math.max(r,o),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},o),i.thisAnimationDuration=o)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof t&&t()},r):"function"==typeof t&&t(),i=[]},animate:function(t,e,n,o){if(o){m(t,"transition",""),m(t,"transform","");var i=b(this.el),r=(e.left-n.left)/(i&&i.a||1),a=(e.top-n.top)/(i&&i.d||1);t.animatingX=!!r,t.animatingY=!!a,m(t,"transform","translate3d("+r+"px,"+a+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),m(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),m(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){m(t,"transition",""),m(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}))}function Pt(t,e,i,r,a,l,s,c){var u,d,h=t[k],f=h.options.onMove;return!window.CustomEvent||n||o?(u=document.createEvent("Event")).initEvent("move",!0,!0):u=new CustomEvent("move",{bubbles:!0,cancelable:!0}),u.to=e,u.from=t,u.dragged=i,u.draggedRect=r,u.related=a||e,u.relatedRect=l||y(e),u.willInsertAfter=c,u.originalEvent=s,t.dispatchEvent(u),f&&(d=f.call(h,u,s)),d}function kt(t){t.draggable=!1}function Rt(){bt=!1}function Xt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Yt(t){return setTimeout(t,0)}function Bt(t){return clearTimeout(t)}It.prototype={constructor:It,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(st=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,L):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,i=o.preventOnFilter,a=t.type,l=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(l||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,u=o.filter;if(function(t){wt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&wt.push(o)}}(n),!L&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!r||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=f(s,o.draggable,n,!1))&&s.animated||G===s)){if(V=C(s),Q=C(s,o.draggable),"function"==typeof u){if(u.call(this,t,s,this))return F({sortable:e,rootEl:c,name:"filter",targetEl:s,toEl:n,fromEl:n}),H("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(u&&(u=u.split(",").some(function(o){if(o=f(c,o.trim(),n,!1))return F({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:n,toEl:n}),H("filter",e,{evt:t}),!0})))return void(i&&t.cancelable&&t.preventDefault());o.handle&&!f(c,o.handle,n,!1)||this._prepareDragStart(t,l,s)}}},_prepareDragStart:function(t,e,r){var a,l=this,s=l.el,u=l.options,d=s.ownerDocument;if(r&&!L&&r.parentNode===s){var h=y(r);if(j=s,K=(L=r).parentNode,z=L.nextSibling,G=r,J=u.group,It.dragged=L,rt=(et={target:L,clientX:(e||t).clientX,clientY:(e||t).clientY}).clientX-h.left,at=et.clientY-h.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,L.style["will-change"]="all",a=function(){H("delayEnded",l,{evt:t}),It.eventCanceled?l._onDrop():(l._disableDelayedDragEvents(),!i&&l.nativeDraggable&&(L.draggable=!0),l._triggerDragStart(t,e),F({sortable:l,name:"choose",originalEvent:t}),v(L,u.chosenClass,!0))},u.ignore.split(",").forEach(function(t){w(L,t.trim(),kt)}),c(d,"dragover",Ot),c(d,"mousemove",Ot),c(d,"touchmove",Ot),c(d,"mouseup",l._onDrop),c(d,"touchend",l._onDrop),c(d,"touchcancel",l._onDrop),i&&this.nativeDraggable&&(this.options.touchStartThreshold=4,L.draggable=!0),H("delayStart",this,{evt:t}),!u.delay||u.delayOnTouchOnly&&!e||this.nativeDraggable&&(o||n))a();else{if(It.eventCanceled)return void this._onDrop();c(d,"mouseup",l._disableDelayedDrag),c(d,"touchend",l._disableDelayedDrag),c(d,"touchcancel",l._disableDelayedDrag),c(d,"mousemove",l._delayedDragTouchMoveHandler),c(d,"touchmove",l._delayedDragTouchMoveHandler),u.supportPointer&&c(d,"pointermove",l._delayedDragTouchMoveHandler),l._dragStartTimer=setTimeout(a,u.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){L&&kt(L),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;u(t,"mouseup",this._disableDelayedDrag),u(t,"touchend",this._disableDelayedDrag),u(t,"touchcancel",this._disableDelayedDrag),u(t,"mousemove",this._delayedDragTouchMoveHandler),u(t,"touchmove",this._delayedDragTouchMoveHandler),u(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?c(document,this.options.supportPointer?"pointermove":e?"touchmove":"mousemove",this._onTouchMove):(c(L,"dragend",this),c(j,"dragstart",this._onDragStart));try{document.selection?Yt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(ht=!1,j&&L){H("dragStarted",this,{evt:e}),this.nativeDraggable&&c(document,"dragover",At);var n=this.options;!t&&v(L,n.dragClass,!1),v(L,n.ghostClass,!0),It.active=this,t&&this._appendGhost(),F({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(nt){this._lastX=nt.clientX,this._lastY=nt.clientY,xt();for(var t=document.elementFromPoint(nt.clientX,nt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(nt.clientX,nt.clientY))!==e;)e=t;if(L.parentNode[k]._isOutsideThisEl(t),e)do{if(e[k]&&e[k]._onDragOver({clientX:nt.clientX,clientY:nt.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break;t=e}while(e=e.parentNode);Mt()}},_onTouchMove:function(t){if(et){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=W&&b(W,!0),a=W&&r&&r.a,l=W&&r&&r.d,s=yt&&dt&&T(dt),c=(i.clientX-et.clientX+o.x)/(a||1)+(s?s[0]-mt[0]:0)/(a||1),u=(i.clientY-et.clientY+o.y)/(l||1)+(s?s[1]-mt[1]:0)/(l||1);if(!It.active&&!ht){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(W){r?(r.e+=c-(ot||0),r.f+=u-(it||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix("+r.a+","+r.b+","+r.c+","+r.d+","+r.e+","+r.f+")";m(W,"webkitTransform",d),m(W,"mozTransform",d),m(W,"msTransform",d),m(W,"transform",d),ot=c,it=u,nt=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!W){var t=this.options.fallbackOnBody?document.body:j,e=y(L,!0,yt,!0,t),n=this.options;if(yt){for(dt=t;"static"===m(dt,"position")&&"none"===m(dt,"transform")&&dt!==document;)dt=dt.parentNode;dt!==document.body&&dt!==document.documentElement?(dt===document&&(dt=E()),e.top+=dt.scrollTop,e.left+=dt.scrollLeft):dt=E(),mt=T(dt)}v(W=L.cloneNode(!0),n.ghostClass,!1),v(W,n.fallbackClass,!0),v(W,n.dragClass,!0),m(W,"transition",""),m(W,"transform",""),m(W,"box-sizing","border-box"),m(W,"margin",0),m(W,"top",e.top),m(W,"left",e.left),m(W,"width",e.width),m(W,"height",e.height),m(W,"opacity","0.8"),m(W,"position",yt?"absolute":"fixed"),m(W,"zIndex","100000"),m(W,"pointerEvents","none"),It.ghost=W,t.appendChild(W),m(W,"transform-origin",rt/parseInt(W.style.width)*100+"% "+at/parseInt(W.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;H("dragStart",this,{evt:t}),It.eventCanceled?this._onDrop():(H("setupClone",this),It.eventCanceled||((U=A(L)).draggable=!1,U.style["will-change"]="",this._hideClone(),v(U,this.options.chosenClass,!1),It.clone=U),n.cloneId=Yt(function(){H("clone",n),It.eventCanceled||(n.options.removeCloneOnHide||j.insertBefore(U,L),n._hideClone(),F({sortable:n,name:"clone"}))}),!e&&v(L,i.dragClass,!0),e?(ft=!0,n._loopId=setInterval(n._emulateDragOver,50)):(u(document,"mouseup",n._onDrop),u(document,"touchend",n._onDrop),u(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,L)),c(document,"drop",n),m(L,"transform","translateZ(0)")),ht=!0,n._dragStartId=Yt(n._dragStarted.bind(n,e,t)),c(document,"selectstart",n),lt=!0,r&&m(document.body,"user-select","none"))},_onDragOver:function(e){var n,o,i,r,a=this.el,l=e.target,s=this.options,c=s.group,u=It.active,d=J===c,h=s.sort,p=tt||u,g=this,b=!1;if(!bt){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),l=f(l,s.draggable,a,!0),B("dragOver"),It.eventCanceled)return b;if(L.contains(e.target)||l.animated&&l.animatingX&&l.animatingY||g._ignoreWhileAnimating===l)return U(!1);if(ft=!1,u&&!s.disabled&&(d?h||(i=!j.contains(L)):tt===this||(this.lastPutMode=J.checkPull(this,u,L,e))&&c.checkPut(this,u,L,e))){if(r="vertical"===this._getDirection(e,l),n=y(L),B("dragOverValid"),It.eventCanceled)return b;if(i)return K=j,G(),this._hideClone(),B("revert"),It.eventCanceled||(z?j.insertBefore(L,z):j.appendChild(L)),U(!0);var w=S(a,s.draggable);if(!w||function(t,e,n){var o=y(S(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(e,r,this)&&!w.animated){if(w===L)return U(!1);if(w&&a===e.target&&(l=w),l&&(o=y(l)),!1!==Pt(j,a,L,n,l,o,e,!!l))return G(),a.appendChild(L),K=a,q(),U(!0)}else if(l.parentNode===a){o=y(l);var E,_,T,x=L.parentNode!==a,M=!function(t,e,n){var o=n?t.left:t.top,i=n?e.left:e.top;return o===i||(n?t.right:t.bottom)===(n?e.right:e.bottom)||o+(n?t.width:t.height)/2===i+(n?e.width:e.height)/2}(L.animated&&L.toRect||n,l.animated&&l.toRect||o,r),N=r?"top":"left",A=D(l,"top","top")||D(L,"top","top"),I=A?A.scrollTop:void 0;if(st!==l&&(_=o[N],gt=!1,vt=!M&&s.invertSwap||x),0!==(E=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&ut<c*i){if(!gt&&(1===ct?s>u+c*r/2:s<d-c*r/2)&&(gt=!0),gt)h=!0;else if(1===ct?s<u+ut:s>d-ut)return-ct}else if(s>u+c*(1-i)/2&&s<d-c*(1-i)/2)return function(t){return C(L)<C(t)?1:-1}(e);return(h=h||a)&&(s<u+c*r/2||s>d-c*r/2)?s>u+c/2?1:-1:0}(e,l,o,r,M?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,vt,st===l))){var P=C(L);do{T=K.children[P-=E]}while(T&&("none"===m(T,"display")||T===W))}if(0===E||T===l)return U(!1);st=l,ct=E;var R=l.nextElementSibling,X=!1,Y=Pt(j,a,L,n,l,o,e,X=1===E);if(!1!==Y)return 1!==Y&&-1!==Y||(X=1===Y),bt=!0,setTimeout(Rt,30),G(),X&&!R?a.appendChild(L):l.parentNode.insertBefore(L,X?R:l),A&&O(A,0,I-A.scrollTop),K=L.parentNode,void 0===_||vt||(ut=Math.abs(_-y(l)[N])),q(),U(!0)}if(a.contains(L))return U(!1)}return!1}function B(s,c){H(s,g,t({evt:e,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:n,targetRect:o,canSort:h,fromSortable:p,target:l,completed:U,onMove:function(t,o){return Pt(j,a,L,n,t,y(t),e,o)},changed:q},c))}function G(){B("dragOverAnimationCapture"),g.captureAnimationState(),g!==p&&p.captureAnimationState()}function U(t){return B("dragOverCompleted",{insertion:t}),t&&(d?u._hideClone():u._showClone(g),g!==p&&(v(L,tt?tt.options.ghostClass:u.options.ghostClass,!1),v(L,s.ghostClass,!0)),tt!==g&&g!==It.active?tt=g:g===It.active&&tt&&(tt=null),p===g&&(g._ignoreWhileAnimating=l),g.animateAll(function(){B("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(l===L&&!L.animated||l===a&&!l.animated)&&(st=null),s.dragoverBubble||e.rootEl||l===document||(L.parentNode[k]._isOutsideThisEl(e.target),!t&&Ot(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function q(){Z=C(L),$=C(L,s.draggable),F({sortable:g,name:"change",toEl:a,newIndex:Z,newDraggableIndex:$,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){u(document,"mousemove",this._onTouchMove),u(document,"touchmove",this._onTouchMove),u(document,"pointermove",this._onTouchMove),u(document,"dragover",Ot),u(document,"mousemove",Ot),u(document,"touchmove",Ot)},_offUpEvents:function(){var t=this.el.ownerDocument;u(t,"mouseup",this._onDrop),u(t,"touchend",this._onDrop),u(t,"pointerup",this._onDrop),u(t,"touchcancel",this._onDrop),u(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;Z=C(L),$=C(L,n.draggable),H("drop",this,{evt:t}),K=L&&L.parentNode,Z=C(L),$=C(L,n.draggable),It.eventCanceled||(ht=!1,vt=!1,gt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Bt(this.cloneId),Bt(this._dragStartId),this.nativeDraggable&&(u(document,"drop",this),u(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),r&&m(document.body,"user-select",""),m(L,"transform",""),t&&(lt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),W&&W.parentNode&&W.parentNode.removeChild(W),(j===K||tt&&"clone"!==tt.lastPutMode)&&U&&U.parentNode&&U.parentNode.removeChild(U),L&&(this.nativeDraggable&&u(L,"dragend",this),kt(L),L.style["will-change"]="",lt&&!ht&&v(L,tt?tt.options.ghostClass:this.options.ghostClass,!1),v(L,this.options.chosenClass,!1),F({sortable:this,name:"unchoose",toEl:K,newIndex:null,newDraggableIndex:null,originalEvent:t}),j!==K?(Z>=0&&(F({rootEl:K,name:"add",toEl:K,fromEl:j,originalEvent:t}),F({sortable:this,name:"remove",toEl:K,originalEvent:t}),F({rootEl:K,name:"sort",toEl:K,fromEl:j,originalEvent:t}),F({sortable:this,name:"sort",toEl:K,originalEvent:t})),tt&&tt.save()):Z!==V&&Z>=0&&(F({sortable:this,name:"update",toEl:K,originalEvent:t}),F({sortable:this,name:"sort",toEl:K,originalEvent:t})),It.active&&(null!=Z&&-1!==Z||(Z=V,$=Q),F({sortable:this,name:"end",toEl:K,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){H("nulling",this),j=L=K=W=z=U=G=q=et=nt=lt=Z=$=V=Q=st=ct=tt=J=It.dragged=It.ghost=It.clone=It.active=null,wt.forEach(function(t){t.checked=!0}),wt.length=ot=it=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":L&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)f(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Xt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,o){var i=n.children[o];f(i,this.options.draggable,n,!1)&&(e[t]=i)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return f(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=Y.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Tt(n)},destroy:function(){H("destroy",this);var t=this.el;t[k]=null,u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart),u(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),pt.splice(pt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!q){if(H("hideClone",this),It.eventCanceled)return;m(U,"display","none"),this.options.removeCloneOnHide&&U.parentNode&&U.parentNode.removeChild(U),q=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(q){if(H("showClone",this),It.eventCanceled)return;L.parentNode!=j||this.options.group.revertClone?z?j.insertBefore(U,z):j.appendChild(U):j.insertBefore(U,L),this.options.group.revertClone&&this.animate(L,U),m(U,"display",""),q=!1}}else this._hideClone()}},Et&&c(document,"touchmove",function(t){(It.active||ht)&&t.cancelable&&t.preventDefault()}),It.utils={on:c,off:u,css:m,find:w,is:function(t,e){return!!f(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:N,closest:f,toggleClass:v,clone:A,index:C,nextTick:Yt,cancelNextTick:Bt,detectDirection:Ct,getChild:_},It.get=function(t){return t[k]},It.mount=function(){var e=[].slice.call(arguments);e[0].constructor===Array&&(e=e[0]),e.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not "+{}.toString.call(e);e.utils&&(It.utils=t({},It.utils,e.utils)),Y.mount(e)})},It.create=function(t,e){return new It(t,e)},It.version="1.12.0";var Ht,Ft,Lt,Kt,Wt,jt=[],zt=[],Gt=!1,Ut=!1,qt=!1;function Vt(t,e){zt.forEach(function(n,o){var i=e.children[n.sortableIndex+(t?Number(o):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function Zt(){jt.forEach(function(t){t!==Lt&&t.parentNode&&t.parentNode.removeChild(t)})}var Qt=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.dispatchSortableEvent,r=t.unhideGhostForTarget;if(e){var a=n||t.activeSortable;(0,t.hideGhostForTarget)();var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,s=document.elementFromPoint(l.clientX,l.clientY);r(),a&&!a.el.contains(s)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function $t(){}function Jt(){}$t.prototype={startIndex:null,dragStart:function(t){this.startIndex=t.oldDraggableIndex},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=_(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:Qt},Object.assign($t,{pluginName:"revertOnSpill"}),Jt.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:Qt},Object.assign(Jt,{pluginName:"removeOnSpill"});var te,ee,ne,oe,ie,re,ae=[],le=!1;function se(){ae.forEach(function(t){clearInterval(t.pid)}),ae=[]}function ce(){clearInterval(re)}var ue=N(function(t,e,n,o){if(e.scroll){var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=E(),u=!1;ee!==n&&(ee=n,se(),i=e.scrollFn,!0===(te=e.scroll)&&(te=x(n,!0)));var d=0,h=te;do{var f=h,p=y(f),g=p.top,v=p.bottom,b=p.left,w=p.right,D=p.width,_=p.height,S=void 0,C=void 0,T=f.scrollWidth,M=f.scrollHeight,N=m(f),A=f.scrollLeft,I=f.scrollTop;f===c?(S=D<T&&("auto"===N.overflowX||"scroll"===N.overflowX||"visible"===N.overflowX),C=_<M&&("auto"===N.overflowY||"scroll"===N.overflowY||"visible"===N.overflowY)):(S=D<T&&("auto"===N.overflowX||"scroll"===N.overflowX),C=_<M&&("auto"===N.overflowY||"scroll"===N.overflowY));var P=S&&(Math.abs(w-r)<=l&&A+D<T)-(Math.abs(b-r)<=l&&!!A),R=C&&(Math.abs(v-a)<=l&&I+_<M)-(Math.abs(g-a)<=l&&!!I);if(!ae[d])for(var X=0;X<=d;X++)ae[X]||(ae[X]={});ae[d].vx==P&&ae[d].vy==R&&ae[d].el===f||(ae[d].el=f,ae[d].vx=P,ae[d].vy=R,clearInterval(ae[d].pid),0==P&&0==R||(u=!0,ae[d].pid=setInterval(function(){o&&0===this.layer&&It.active._onTouchMove(ie);var e=ae[this.layer].vy?ae[this.layer].vy*s:0,n=ae[this.layer].vx?ae[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(It.dragged.parentNode[k],n,e,t,ie,ae[this.layer].el)||O(ae[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=x(h,!1)));le=u}},30);It.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?c(document,"dragover",this._handleAutoScroll):c(document,this.options.supportPointer?"pointermove":e.touches?"touchmove":"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):(u(document,"pointermove",this._handleFallbackAutoScroll),u(document,"touchmove",this._handleFallbackAutoScroll),u(document,"mousemove",this._handleFallbackAutoScroll)),ce(),se(),clearTimeout(p),p=void 0},nulling:function(){ie=ee=te=le=re=ne=oe=null,ae.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,a=(t.touches?t.touches[0]:t).clientX,l=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(a,l);if(ie=t,e||o||n||r){ue(t,this.options,s,e);var c=x(s,!0);!le||re&&a===ne&&l===oe||(re&&ce(),re=setInterval(function(){var n=x(document.elementFromPoint(a,l),!0);n!==c&&(c=n,se()),ue(t,i.options,n,e)},10),ne=a,oe=l)}else{if(!this.options.bubbleScroll||x(s,!0)===E())return void se();ue(t,this.options,x(s,!1),!1)}}},Object.assign(t,{pluginName:"scroll",initializeByDefault:!0})}),It.mount(Jt,$t),It.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){Nt=t.dragEl},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.changed,i=t.cancel;if(t.activeSortable.options.swap){var r=this.options;if(n&&n!==this.sortable.el){var a=Nt;!1!==(0,t.onMove)(n)?(v(n,r.swapClass,!0),Nt=n):Nt=null,a&&a!==Nt&&v(a,r.swapClass,!1)}o(),e(!0),i()}},drop:function(t){var e,n,o,i,r,a,l=t.activeSortable,s=t.putSortable,c=t.dragEl,u=s||this.sortable,d=this.options;Nt&&v(Nt,d.swapClass,!1),Nt&&(d.swap||s&&s.options.swap)&&c!==Nt&&(u.captureAnimationState(),u!==l&&l.captureAnimationState(),a=(n=Nt).parentNode,(r=(e=c).parentNode)&&a&&!r.isEqualNode(n)&&!a.isEqualNode(e)&&(o=C(e),i=C(n),r.isEqualNode(a)&&o<i&&i++,r.insertBefore(n,r.children[o]),a.insertBefore(e,a.children[i])),u.animateAll(),u!==l&&l.animateAll())},nulling:function(){Nt=null}},Object.assign(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Nt}}})}),It.mount(new function(){function t(t){for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this));t.options.supportPointer?c(document,"pointerup",this._deselectMultiDrag):(c(document,"mouseup",this._deselectMultiDrag),c(document,"touchend",this._deselectMultiDrag)),c(document,"keydown",this._checkKeyDown),c(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(e,n){var o="";jt.length&&Ft===t?jt.forEach(function(t,e){o+=(e?", ":"")+t.textContent}):o=n.textContent,e.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){Lt=t.dragEl},delayEnded:function(){this.isMultiDrag=~jt.indexOf(Lt)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<jt.length;o++)zt.push(A(jt[o])),zt[o].sortableIndex=jt[o].sortableIndex,zt[o].draggable=!1,zt[o].style["will-change"]="",v(zt[o],this.options.selectedClass,!1),jt[o]===Lt&&v(zt[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.dispatchSortableEvent,n=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||jt.length&&Ft===t.sortable&&(Vt(!0,t.rootEl),e("clone"),n()))},showClone:function(t){var e=t.cloneNowShown,n=t.cancel;this.isMultiDrag&&(Vt(!1,t.rootEl),zt.forEach(function(t){m(t,"display","")}),e(),Wt=!1,n())},hideClone:function(t){var e=this,n=t.cloneNowHidden,o=t.cancel;this.isMultiDrag&&(zt.forEach(function(t){m(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),Wt=!0,o())},dragStartGlobal:function(t){!this.isMultiDrag&&Ft&&Ft.multiDrag._deselectMultiDrag(),jt.forEach(function(t){t.sortableIndex=C(t)}),jt=jt.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),qt=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){jt.forEach(function(t){t!==Lt&&m(t,"position","absolute")});var o=y(Lt,!1,!0,!0);jt.forEach(function(t){t!==Lt&&I(t,o)}),Ut=!0,Gt=!0}n.animateAll(function(){Ut=!1,Gt=!1,e.options.animation&&jt.forEach(function(t){P(t)}),e.options.sort&&Zt()})}},dragOver:function(t){var e=t.completed,n=t.cancel;Ut&&~jt.indexOf(t.target)&&(e(!1),n())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;jt.length>1&&(jt.forEach(function(t){o.addAnimationState({target:t,rect:Ut?y(t):i}),P(t),t.fromRect=i,e.removeAnimationState(t)}),Ut=!1,function(t,e){jt.forEach(function(n,o){var i=e.children[n.sortableIndex+(t?Number(o):0)];i?e.insertBefore(n,i):e.appendChild(n)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.activeSortable,i=t.parentEl,r=t.putSortable,a=this.options;if(t.insertion){if(n&&o._hideClone(),Gt=!1,a.animation&&jt.length>1&&(Ut||!n&&!o.options.sort&&!r)){var l=y(Lt,!1,!0,!0);jt.forEach(function(t){t!==Lt&&(I(t,l),i.appendChild(t))}),Ut=!0}if(!n)if(Ut||Zt(),jt.length>1){var s=Wt;o._showClone(e),o.options.animation&&!Wt&&s&&zt.forEach(function(t){o.addAnimationState({target:t,rect:Kt}),t.fromRect=Kt,t.thisAnimationDuration=null})}else o._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(jt.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){Kt=Object.assign({},e);var i=b(Lt,!0);Kt.top-=i.f,Kt.left-=i.e}},dragOverAnimationComplete:function(){Ut&&(Ut=!1,Zt())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!qt)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),v(Lt,c.selectedClass,!~jt.indexOf(Lt)),~jt.indexOf(Lt))jt.splice(jt.indexOf(Lt),1),Ht=null,B({sortable:i,rootEl:n,name:"deselect",targetEl:Lt,originalEvt:e});else{if(jt.push(Lt),B({sortable:i,rootEl:n,name:"select",targetEl:Lt,originalEvt:e}),e.shiftKey&&Ht&&i.el.contains(Ht)){var d,h,f=C(Ht),p=C(Lt);if(~f&&~p&&f!==p)for(p>f?(h=f,d=p):(h=p,d=f+1);h<d;h++)~jt.indexOf(u[h])||(v(u[h],c.selectedClass,!0),jt.push(u[h]),B({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else Ht=Lt;Ft=s}if(qt&&this.isMultiDrag){if((o[k].options.sort||o!==n)&&jt.length>1){var g=y(Lt),m=C(Lt,":not(."+this.options.selectedClass+")");if(!Gt&&c.animation&&(Lt.thisAnimationDuration=null),s.captureAnimationState(),!Gt&&(c.animation&&(Lt.fromRect=g,jt.forEach(function(t){if(t.thisAnimationDuration=null,t!==Lt){var e=Ut?y(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),Zt(),jt.forEach(function(t){u[m]?o.insertBefore(t,u[m]):o.appendChild(t),m++}),a===C(Lt))){var b=!1;jt.forEach(function(t){t.sortableIndex===C(t)||(b=!0)}),b&&r("update")}jt.forEach(function(t){P(t)}),s.animateAll()}Ft=s}(n===o||l&&"clone"!==l.lastPutMode)&&zt.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=qt=!1,zt.length=0},destroyGlobal:function(){this._deselectMultiDrag(),u(document,"pointerup",this._deselectMultiDrag),u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==qt&&qt||Ft!==this.sortable||t&&f(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;jt.length;){var e=jt[0];v(e,this.options.selectedClass,!1),jt.shift(),B({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Object.assign(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[k];e&&e.options.multiDrag&&!~jt.indexOf(t)&&(Ft&&Ft!==e&&(Ft.multiDrag._deselectMultiDrag(),Ft=e),v(t,e.options.selectedClass,!0),jt.push(t))},deselect:function(t){var e=t.parentNode[k],n=jt.indexOf(t);e&&e.options.multiDrag&&~n&&(v(t,e.options.selectedClass,!1),jt.splice(n,1))}},eventProperties:function(){var t=this,e=[],n=[];return jt.forEach(function(o){var i;e.push({multiDragElement:o,index:o.sortableIndex}),i=Ut&&o!==Lt?-1:Ut?C(o,":not(."+t.options.selectedClass+")"):C(o),n.push({multiDragElement:o,index:i})}),{items:[].concat(jt),clones:[].concat(zt),oldIndicies:e,newIndicies:n}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})});/* harmony default export */ __webpack_exports__["default"] = (It);
//# sourceMappingURL=sortable.complete.esm.js.map


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v6.11.5
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onBeforeOpen: null,
  onOpen: null,
  onClose: null,
  useRejections: true
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null

  /*
   * Add modal + overlay to DOM
   */
};var init = function init(params) {
  // Clean up the old modal if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
  }

  if (typeof document === 'undefined') {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var modal = getModal();
  var input = getChildByClass(modal, swalClasses.input);
  var file = getChildByClass(modal, swalClasses.file);
  var range = modal.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(modal, swalClasses.select);
  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(modal, swalClasses.textarea);

  input.oninput = function () {
    sweetAlert.resetValidationError();
  };

  file.onchange = function () {
    sweetAlert.resetValidationError();
  };

  range.oninput = function () {
    sweetAlert.resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    sweetAlert.resetValidationError();
    range.previousSibling.value = range.value;
  };

  select.onchange = function () {
    sweetAlert.resetValidationError();
  };

  checkbox.onchange = function () {
    sweetAlert.resetValidationError();
  };

  textarea.oninput = function () {
    sweetAlert.resetValidationError();
  };

  return modal;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getModal = function getModal() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
};

var getIcons = function getIcons() {
  var modal = getModal();
  return modal.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  window.onkeydown = states.previousWindowKeyDown;
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (x && y) {
      // IE has no scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

/**
 * Inject a string of CSS into the page header
 *
 * @param {String} css
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var modalParams = _extends({}, defaultParams);
var queue = [];

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/**
 * Set type, text and actions on modal
 *
 * @param params
 * @returns {boolean}
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var modal = void 0;
  var oldModal = getModal();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the modal
  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
    modal = init(params);
  } else {
    modal = oldModal || init(params);
  }

  for (var param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
  }

  // Set modal width
  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

  modal.style.padding = params.padding + 'px';
  modal.style.background = params.background;
  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Custom Class
  modal.className = swalClasses.modal;
  if (params.customClass) {
    addClass(modal, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(modal, swalClasses.noanimation);
  } else {
    addClass(modal, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/**
 * Animations
 *
 * @param animation
 * @param onBeforeOpen
 * @param onComplete
 */
var openModal = function openModal(animation, onBeforeOpen, onComplete) {
  var container = getContainer();
  var modal = getModal();

  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
    onBeforeOpen(modal);
  }

  if (animation) {
    addClass(modal, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(modal, swalClasses.hide);
  } else {
    removeClass(modal, swalClasses.fade);
  }
  show(modal);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  fixScrollbar();
  iOSfix();
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === undefined) {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, modalParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = function (email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = function (url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var modal = getModal();

  return new Promise(function (resolve, reject) {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(function () {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('timer');
        } else {
          resolve({ dismiss: 'timer' });
        }
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(modal, swalClasses[inputType]);
        case 'checkbox':
          return modal.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return modal.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(modal, swalClasses.input);
      }
    };

    // Get the value of the modal input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
          sweetAlert.closeModal(params.onClose);
          resolve(preConfirmValue || value);
        }, function (error$$1) {
          sweetAlert.hideLoading();
          if (error$$1) {
            sweetAlert.showValidationError(error$$1);
          }
        });
      } else {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                params.inputValidator(inputValue, params.extraParams).then(function () {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  confirm(inputValue);
                }, function (error$$1) {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  if (error$$1) {
                    sweetAlert.showValidationError(error$$1);
                  }
                });
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            sweetAlert.closeModal(params.onClose);
            if (params.useRejections) {
              reject('cancel');
            } else {
              resolve({ dismiss: 'cancel' });
            }
          }
          break;
        default:
      }
    };

    var buttons = modal.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing modal by close button
    getCloseButton().onclick = function () {
      sweetAlert.closeModal(params.onClose);
      if (params.useRejections) {
        reject('close');
      } else {
        resolve({ dismiss: 'close' });
      }
    };

    // Closing modal by overlay click
    container.onclick = function (e) {
      if (e.target !== container) {
        return;
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('overlay');
        } else {
          resolve({ dismiss: 'overlay' });
        }
      }
    };

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;

      if (e.key === 'Enter') {
        if (e.target === getInput()) {
          if (e.target.tagName.toLowerCase() === 'textarea') {
            return; // do not submit
          }
          sweetAlert.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
          if (targetElement === focusableElements[_i4]) {
            btnIndex = _i4;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Arrowdown'].indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('esc');
        } else {
          resolve({ dismiss: 'esc' });
        }
      }
    };

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(modal, swalClasses.loading);
      modal.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(modal, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(modal, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(modal, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(modal, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(modal, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue.toString() === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(modal, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue.toString() === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(modal, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(modal, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openModal(params.animation, params.onBeforeOpen, params.onOpen);

    if (!params.allowEnterKey) {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    } else if (params.focusCancel && isVisible(cancelButton)) {
      cancelButton.focus();
    } else if (params.focusConfirm && isVisible(confirmButton)) {
      confirmButton.focus();
    } else {
      setFocus(-1, 1);
    }

    // fix scroll
    getContainer().scrollTop = 0;
  });
};

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = function () {
  return !!getModal();
};

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          queueResult.push(result);
          step(i + 1, callback);
        }, function (dismiss) {
          resetQueue();
          reject(dismiss);
        });
      } else {
        resetQueue();
        resolve(queueResult);
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
  var container = getContainer();
  var modal = getModal();
  if (!modal) {
    return;
  }
  removeClass(modal, swalClasses.show);
  addClass(modal, swalClasses.hide);
  clearTimeout(modal.timeout);

  resetPrevState();

  var removeModalAndResetState = function removeModalAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    undoScrollbar();
    undoIOSfix();
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(modal, swalClasses.hide)) {
        removeModalAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var modal = getModal();
  if (!modal) {
    sweetAlert('');
  }
  modal = getModal();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(modal, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  modal.setAttribute('aria-busy', true);
  modal.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  for (var param in userParams) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
      delete userParams[param];
    }
  }

  _extends(modalParams, userParams);
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  modalParams = _extends({}, defaultParams);
};

sweetAlert.noop = function () {};

sweetAlert.version = '6.11.5';

sweetAlert.default = sweetAlert;

return sweetAlert;

})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ }),

/***/ "./resources/assets/bower/jqTree/build/tree.jquery.js":
/*!************************************************************!*\
  !*** ./resources/assets/bower/jqTree/build/tree.jquery.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * JqTree 1.4.3
 * 
 * Copyright 2017 Marco Braak
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 14);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;
  var Position;

  (function (Position) {
    Position[Position["Before"] = 1] = "Before";
    Position[Position["After"] = 2] = "After";
    Position[Position["Inside"] = 3] = "Inside";
    Position[Position["None"] = 4] = "None";
  })(Position = exports.Position || (exports.Position = {}));

  exports.position_names = {
    before: Position.Before,
    after: Position.After,
    inside: Position.Inside,
    none: Position.None
  };

  function getPositionName(position) {
    for (var name_1 in exports.position_names) {
      if (exports.position_names.hasOwnProperty(name_1)) {
        if (exports.position_names[name_1] === position) {
          return name_1;
        }
      }
    }

    return "";
  }

  exports.getPositionName = getPositionName;

  function getPosition(name) {
    return exports.position_names[name];
  }

  exports.getPosition = getPosition;

  var Node =
  /** @class */
  function () {
    function Node(o, is_root, node_class) {
      if (is_root === void 0) {
        is_root = false;
      }

      if (node_class === void 0) {
        node_class = Node;
      }

      this.name = "";
      this.setData(o);
      this.children = [];
      this.parent = null;

      if (is_root) {
        this.id_mapping = {};
        this.tree = this;
        this.node_class = node_class;
      }
    }
    /*
    Set the data of this node.
     setData(string): set the name of the node
    setdata(object): set attributes of the node
     Examples:
        setdata('node1')
         setData({ name: 'node1', id: 1});
         setData({ name: 'node2', id: 2, color: 'green'});
     * This is an internal function; it is not in the docs
    * Does not remove existing node values
    */


    Node.prototype.setData = function (o) {
      var _this = this;

      var setName = function setName(name) {
        if (name != null) {
          _this.name = name;
        }
      };

      if (!o) {
        return;
      } else if (_typeof(o) !== "object") {
        setName(o);
      } else {
        for (var key in o) {
          if (o.hasOwnProperty(key)) {
            var value = o[key];

            if (key === "label") {
              // You can use the 'label' key instead of 'name'; this is a legacy feature
              setName(value);
            } else if (key !== "children") {
              // You can't update the children using this function
              this[key] = value;
            }
          }
        }
      }
    };
    /*
    Create tree from data.
     Structure of data is:
    [
        {
            label: 'node1',
            children: [
                { label: 'child1' },
                { label: 'child2' }
            ]
        },
        {
            label: 'node2'
        }
    ]
    */


    Node.prototype.loadFromData = function (data) {
      this.removeChildren();

      for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var o = data_1[_i];
        var node = new this.tree.node_class(o);
        this.addChild(node);

        if (_typeof(o) === "object" && o["children"]) {
          node.loadFromData(o["children"]);
        }
      }
    };
    /*
    Add child.
     tree.addChild(
        new Node('child1')
    );
    */


    Node.prototype.addChild = function (node) {
      this.children.push(node);

      node._setParent(this);
    };
    /*
    Add child at position. Index starts at 0.
     tree.addChildAtPosition(
        new Node('abc'),
        1
    );
    */


    Node.prototype.addChildAtPosition = function (node, index) {
      this.children.splice(index, 0, node);

      node._setParent(this);
    };
    /*
    Remove child. This also removes the children of the node.
     tree.removeChild(tree.children[0]);
    */


    Node.prototype.removeChild = function (node) {
      // remove children from the index
      node.removeChildren();

      this._removeChild(node);
    };
    /*
    Get child index.
     var index = getChildIndex(node);
    */


    Node.prototype.getChildIndex = function (node) {
      return $.inArray(node, this.children);
    };
    /*
    Does the tree have children?
     if (tree.hasChildren()) {
        //
    }
    */


    Node.prototype.hasChildren = function () {
      return this.children.length !== 0;
    };

    Node.prototype.isFolder = function () {
      return this.hasChildren() || this.load_on_demand;
    };
    /*
    Iterate over all the nodes in the tree.
     Calls callback with (node, level).
     The callback must return true to continue the iteration on current node.
     tree.iterate(
        function(node, level) {
           console.log(node.name);
            // stop iteration after level 2
           return (level <= 2);
        }
    );
     */


    Node.prototype.iterate = function (callback) {
      var _iterate = function _iterate(node, level) {
        if (node.children) {
          for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var result = callback(child, level);

            if (result && child.hasChildren()) {
              _iterate(child, level + 1);
            }
          }
        }
      };

      _iterate(this, 0);
    };
    /*
    Move node relative to another node.
     Argument position: Position.BEFORE, Position.AFTER or Position.Inside
     // move node1 after node2
    tree.moveNode(node1, node2, Position.AFTER);
    */


    Node.prototype.moveNode = function (moved_node, target_node, position) {
      if (!moved_node.parent || moved_node.isParentOf(target_node)) {
        // - Node is parent of target node
        // - Or, parent is empty
        return;
      } else {
        moved_node.parent._removeChild(moved_node);

        if (position === Position.After) {
          if (target_node.parent) {
            target_node.parent.addChildAtPosition(moved_node, target_node.parent.getChildIndex(target_node) + 1);
          }
        } else if (position === Position.Before) {
          if (target_node.parent) {
            target_node.parent.addChildAtPosition(moved_node, target_node.parent.getChildIndex(target_node));
          }
        } else if (position === Position.Inside) {
          // move inside as first child
          target_node.addChildAtPosition(moved_node, 0);
        }
      }
    };
    /*
    Get the tree as data.
    */


    Node.prototype.getData = function (include_parent) {
      if (include_parent === void 0) {
        include_parent = false;
      }

      function getDataFromNodes(nodes) {
        return nodes.map(function (node) {
          var tmp_node = {};

          for (var k in node) {
            if (["parent", "children", "element", "tree"].indexOf(k) === -1 && Object.prototype.hasOwnProperty.call(node, k)) {
              var v = node[k];
              tmp_node[k] = v;
            }
          }

          if (node.hasChildren()) {
            tmp_node["children"] = getDataFromNodes(node.children);
          }

          return tmp_node;
        });
      }

      if (include_parent) {
        return getDataFromNodes([this]);
      } else {
        return getDataFromNodes(this.children);
      }
    };

    Node.prototype.getNodeByName = function (name) {
      return this.getNodeByCallback(function (node) {
        return node.name === name;
      });
    };

    Node.prototype.getNodeByCallback = function (callback) {
      var result = null;
      this.iterate(function (node) {
        if (callback(node)) {
          result = node;
          return false;
        } else {
          return true;
        }
      });
      return result;
    };

    Node.prototype.addAfter = function (node_info) {
      if (!this.parent) {
        return null;
      } else {
        var node = new this.tree.node_class(node_info);
        var child_index = this.parent.getChildIndex(this);
        this.parent.addChildAtPosition(node, child_index + 1);

        if (_typeof(node_info) === "object" && node_info["children"] && node_info["children"].length) {
          node.loadFromData(node_info["children"]);
        }

        return node;
      }
    };

    Node.prototype.addBefore = function (node_info) {
      if (!this.parent) {
        return null;
      } else {
        var node = new this.tree.node_class(node_info);
        var child_index = this.parent.getChildIndex(this);
        this.parent.addChildAtPosition(node, child_index);

        if (_typeof(node_info) === "object" && node_info["children"] && node_info["children"].length) {
          node.loadFromData(node_info["children"]);
        }

        return node;
      }
    };

    Node.prototype.addParent = function (node_info) {
      if (!this.parent) {
        return null;
      } else {
        var new_parent = new this.tree.node_class(node_info);

        new_parent._setParent(this.tree);

        var original_parent = this.parent;

        for (var _i = 0, _a = original_parent.children; _i < _a.length; _i++) {
          var child = _a[_i];
          new_parent.addChild(child);
        }

        original_parent.children = [];
        original_parent.addChild(new_parent);
        return new_parent;
      }
    };

    Node.prototype.remove = function () {
      if (this.parent) {
        this.parent.removeChild(this);
        this.parent = null;
      }
    };

    Node.prototype.append = function (node_info) {
      var node = new this.tree.node_class(node_info);
      this.addChild(node);

      if (_typeof(node_info) === "object" && node_info["children"] && node_info["children"].length) {
        node.loadFromData(node_info["children"]);
      }

      return node;
    };

    Node.prototype.prepend = function (node_info) {
      var node = new this.tree.node_class(node_info);
      this.addChildAtPosition(node, 0);

      if (_typeof(node_info) === "object" && node_info["children"] && node_info["children"].length) {
        node.loadFromData(node_info["children"]);
      }

      return node;
    };

    Node.prototype.isParentOf = function (node) {
      var parent = node.parent;

      while (parent) {
        if (parent === this) {
          return true;
        }

        parent = parent.parent;
      }

      return false;
    };

    Node.prototype.getLevel = function () {
      var level = 0;
      var node = this;

      while (node.parent) {
        level += 1;
        node = node.parent;
      }

      return level;
    };

    Node.prototype.getNodeById = function (node_id) {
      return this.id_mapping[node_id];
    };

    Node.prototype.addNodeToIndex = function (node) {
      if (node.id != null) {
        this.id_mapping[node.id] = node;
      }
    };

    Node.prototype.removeNodeFromIndex = function (node) {
      if (node.id != null) {
        delete this.id_mapping[node.id];
      }
    };

    Node.prototype.removeChildren = function () {
      var _this = this;

      this.iterate(function (child) {
        _this.tree.removeNodeFromIndex(child);

        return true;
      });
      this.children = [];
    };

    Node.prototype.getPreviousSibling = function () {
      if (!this.parent) {
        return null;
      } else {
        var previous_index = this.parent.getChildIndex(this) - 1;

        if (previous_index >= 0) {
          return this.parent.children[previous_index];
        } else {
          return null;
        }
      }
    };

    Node.prototype.getNextSibling = function () {
      if (!this.parent) {
        return null;
      } else {
        var next_index = this.parent.getChildIndex(this) + 1;

        if (next_index < this.parent.children.length) {
          return this.parent.children[next_index];
        } else {
          return null;
        }
      }
    };

    Node.prototype.getNodesByProperty = function (key, value) {
      return this.filter(function (node) {
        return node[key] === value;
      });
    };

    Node.prototype.filter = function (f) {
      var result = [];
      this.iterate(function (node) {
        if (f(node)) {
          result.push(node);
        }

        return true;
      });
      return result;
    };

    Node.prototype.getNextNode = function (include_children) {
      if (include_children === void 0) {
        include_children = true;
      }

      if (include_children && this.hasChildren() && this.is_open) {
        // First child
        return this.children[0];
      } else {
        if (!this.parent) {
          return null;
        } else {
          var next_sibling = this.getNextSibling();

          if (next_sibling) {
            // Next sibling
            return next_sibling;
          } else {
            // Next node of parent
            return this.parent.getNextNode(false);
          }
        }
      }
    };

    Node.prototype.getPreviousNode = function () {
      if (!this.parent) {
        return null;
      } else {
        var previous_sibling = this.getPreviousSibling();

        if (previous_sibling) {
          if (!previous_sibling.hasChildren() || !previous_sibling.is_open) {
            // Previous sibling
            return previous_sibling;
          } else {
            // Last child of previous sibling
            return previous_sibling.getLastChild();
          }
        } else {
          return this.getParent();
        }
      }
    };

    Node.prototype.getParent = function () {
      // Return parent except if it is the root node
      if (!this.parent) {
        return null;
      } else if (!this.parent.parent) {
        // Root node -> null
        return null;
      } else {
        return this.parent;
      }
    };

    Node.prototype.getLastChild = function () {
      if (!this.hasChildren()) {
        return null;
      } else {
        var last_child = this.children[this.children.length - 1];

        if (!last_child.hasChildren() || !last_child.is_open) {
          return last_child;
        } else {
          return last_child.getLastChild();
        }
      }
    }; // Init Node from data without making it the root of the tree


    Node.prototype.initFromData = function (data) {
      var _this = this;

      var addNode = function addNode(node_data) {
        _this.setData(node_data);

        if (node_data["children"]) {
          addChildren(node_data["children"]);
        }
      };

      var addChildren = function addChildren(children_data) {
        for (var _i = 0, children_data_1 = children_data; _i < children_data_1.length; _i++) {
          var child = children_data_1[_i];
          var node = new _this.tree.node_class("");
          node.initFromData(child);

          _this.addChild(node);
        }
      };

      addNode(data);
    };

    Node.prototype._setParent = function (parent) {
      this.parent = parent;
      this.tree = parent.tree;
      this.tree.addNodeToIndex(this);
    };

    Node.prototype._removeChild = function (node) {
      this.children.splice(this.getChildIndex(node), 1);
      this.tree.removeNodeFromIndex(node);
    };

    return Node;
  }();

  exports.Node = Node;
  /***/
},
/* 1 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  function isInt(n) {
    return typeof n === "number" && n % 1 === 0;
  }

  exports.isInt = isInt;

  function isFunction(v) {
    return typeof v === "function";
  }

  exports.isFunction = isFunction; // Escape a string for HTML interpolation; copied from underscore js

  function html_escape(text) {
    return ("" + text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
  }

  exports.html_escape = html_escape;

  function getBoolString(value) {
    if (value) {
      return "true";
    } else {
      return "false";
    }
  }

  exports.getBoolString = getBoolString;
  /***/
},
/* 2 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  var SimpleWidget =
  /** @class */
  function () {
    function SimpleWidget(el, options) {
      this.$el = $(el);
      var defaults = this.constructor.defaults;
      this.options = $.extend({}, defaults, options);
    }

    SimpleWidget.register = function (widget_class, widget_name) {
      var getDataKey = function getDataKey() {
        return "simple_widget_" + widget_name;
      };

      function getWidgetData(el, data_key) {
        var widget = $.data(el, data_key);

        if (widget && widget instanceof SimpleWidget) {
          return widget;
        } else {
          return null;
        }
      }

      function createWidget($el, options) {
        var data_key = getDataKey();

        for (var _i = 0, _a = $el.get(); _i < _a.length; _i++) {
          var el = _a[_i];
          var existing_widget = getWidgetData(el, data_key);

          if (!existing_widget) {
            var widget = new widget_class(el, options);

            if (!$.data(el, data_key)) {
              $.data(el, data_key, widget);
            } // Call init after setting data, so we can call methods


            widget._init();
          }
        }

        return $el;
      }

      function destroyWidget($el) {
        var data_key = getDataKey();

        for (var _i = 0, _a = $el.get(); _i < _a.length; _i++) {
          var el = _a[_i];
          var widget = getWidgetData(el, data_key);

          if (widget) {
            widget.destroy();
          }

          $.removeData(el, data_key);
        }
      }

      function callFunction($el, function_name, args) {
        var result = null;

        for (var _i = 0, _a = $el.get(); _i < _a.length; _i++) {
          var el = _a[_i];
          var widget = $.data(el, getDataKey());

          if (widget && widget instanceof SimpleWidget) {
            var widget_function = widget[function_name];

            if (widget_function && typeof widget_function === "function") {
              result = widget_function.apply(widget, args);
            }
          }
        }

        return result;
      } // tslint:disable-next-line: only-arrow-functions


      $.fn[widget_name] = function (argument1) {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var $el = this;

        if (argument1 === undefined || _typeof(argument1) === "object") {
          var options = argument1;
          return createWidget($el, options);
        } else if (typeof argument1 === "string" && argument1[0] !== "_") {
          var function_name = argument1;

          if (function_name === "destroy") {
            return destroyWidget($el);
          } else if (function_name === "get_widget_class") {
            return widget_class;
          } else {
            return callFunction($el, function_name, args);
          }
        }
      };
    };

    SimpleWidget.prototype.destroy = function () {
      this._deinit();
    };

    SimpleWidget.prototype._init = function () {//
    };

    SimpleWidget.prototype._deinit = function () {//
    };

    SimpleWidget.defaults = {};
    return SimpleWidget;
  }();

  exports["default"] = SimpleWidget;
  /***/
},
/* 3 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return function (d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  exports.__esModule = true;

  var version_1 = __webpack_require__(4);

  var drag_and_drop_handler_1 = __webpack_require__(5);

  var elements_renderer_1 = __webpack_require__(6);

  var key_handler_1 = __webpack_require__(7);

  var mouse_widget_1 = __webpack_require__(8);

  var save_state_handler_1 = __webpack_require__(9);

  var scroll_handler_1 = __webpack_require__(10);

  var select_node_handler_1 = __webpack_require__(11);

  var simple_widget_1 = __webpack_require__(2);

  var node_1 = __webpack_require__(0);

  var util_1 = __webpack_require__(1);

  var node_element_1 = __webpack_require__(12);

  var JqTreeWidget =
  /** @class */
  function (_super) {
    __extends(JqTreeWidget, _super);

    function JqTreeWidget() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    JqTreeWidget.prototype.toggle = function (node, slide_param) {
      var slide = slide_param == null ? this.options.slide : slide_param;

      if (node.is_open) {
        this.closeNode(node, slide);
      } else {
        this.openNode(node, slide);
      }

      return this.element;
    };

    JqTreeWidget.prototype.getTree = function () {
      return this.tree;
    };

    JqTreeWidget.prototype.selectNode = function (node) {
      this._selectNode(node, false);

      return this.element;
    };

    JqTreeWidget.prototype.getSelectedNode = function () {
      if (this.select_node_handler) {
        return this.select_node_handler.getSelectedNode();
      } else {
        return false;
      }
    };

    JqTreeWidget.prototype.toJson = function () {
      return JSON.stringify(this.tree.getData());
    };

    JqTreeWidget.prototype.loadData = function (data, parent_node) {
      this._loadData(data, parent_node);

      return this.element;
    };
    /*
    signatures:
    - loadDataFromUrl(url, parent_node=null, on_finished=null)
        loadDataFromUrl('/my_data');
        loadDataFromUrl('/my_data', node1);
        loadDataFromUrl('/my_data', node1, function() { console.log('finished'); });
        loadDataFromUrl('/my_data', null, function() { console.log('finished'); });
     - loadDataFromUrl(parent_node=null, on_finished=null)
        loadDataFromUrl();
        loadDataFromUrl(node1);
        loadDataFromUrl(null, function() { console.log('finished'); });
        loadDataFromUrl(node1, function() { console.log('finished'); });
    */


    JqTreeWidget.prototype.loadDataFromUrl = function (param1, param2, param3) {
      if ($.type(param1) === "string") {
        // first parameter is url
        this._loadDataFromUrl(param1, param2, param3);
      } else {
        // first parameter is not url
        this._loadDataFromUrl(null, param1, param2);
      }

      return this.element;
    };

    JqTreeWidget.prototype.reload = function (on_finished) {
      this._loadDataFromUrl(null, null, on_finished);

      return this.element;
    };

    JqTreeWidget.prototype.getNodeById = function (node_id) {
      return this.tree.getNodeById(node_id);
    };

    JqTreeWidget.prototype.getNodeByName = function (name) {
      return this.tree.getNodeByName(name);
    };

    JqTreeWidget.prototype.getNodesByProperty = function (key, value) {
      return this.tree.getNodesByProperty(key, value);
    };

    JqTreeWidget.prototype.getNodeByHtmlElement = function (element) {
      return this._getNode($(element));
    };

    JqTreeWidget.prototype.getNodeByCallback = function (callback) {
      return this.tree.getNodeByCallback(callback);
    };

    JqTreeWidget.prototype.openNode = function (node, param1, param2) {
      var _this = this;

      var parseParams = function parseParams() {
        var on_finished;
        var slide;

        if (util_1.isFunction(param1)) {
          on_finished = param1;
          slide = null;
        } else {
          slide = param1;
          on_finished = param2;
        }

        if (slide == null) {
          slide = _this.options.slide;
        }

        return [slide, on_finished];
      };

      var _a = parseParams(),
          slide = _a[0],
          on_finished = _a[1];

      if (node) {
        this._openNode(node, slide, on_finished);
      }

      return this.element;
    };

    JqTreeWidget.prototype.closeNode = function (node, slide_param) {
      var slide = slide_param == null ? this.options.slide : slide_param;

      if (node.isFolder()) {
        new node_element_1.FolderElement(node, this).close(slide, this.options.animationSpeed);

        this._saveState();
      }

      return this.element;
    };

    JqTreeWidget.prototype.isDragging = function () {
      if (this.dnd_handler) {
        return this.dnd_handler.is_dragging;
      } else {
        return false;
      }
    };

    JqTreeWidget.prototype.refreshHitAreas = function () {
      if (this.dnd_handler) {
        this.dnd_handler.refresh();
      }

      return this.element;
    };

    JqTreeWidget.prototype.addNodeAfter = function (new_node_info, existing_node) {
      var new_node = existing_node.addAfter(new_node_info);

      if (new_node) {
        this._refreshElements(existing_node.parent);
      }

      return new_node;
    };

    JqTreeWidget.prototype.addNodeBefore = function (new_node_info, existing_node) {
      var new_node = existing_node.addBefore(new_node_info);

      if (new_node) {
        this._refreshElements(existing_node.parent);
      }

      return new_node;
    };

    JqTreeWidget.prototype.addParentNode = function (new_node_info, existing_node) {
      var new_node = existing_node.addParent(new_node_info);

      if (new_node) {
        this._refreshElements(new_node.parent);
      }

      return new_node;
    };

    JqTreeWidget.prototype.removeNode = function (node) {
      if (node.parent && this.select_node_handler) {
        this.select_node_handler.removeFromSelection(node, true); // including children

        node.remove();

        this._refreshElements(node.parent);
      }

      return this.element;
    };

    JqTreeWidget.prototype.appendNode = function (new_node_info, parent_node_param) {
      var parent_node = parent_node_param || this.tree;
      var node = parent_node.append(new_node_info);

      this._refreshElements(parent_node);

      return node;
    };

    JqTreeWidget.prototype.prependNode = function (new_node_info, parent_node_param) {
      var parent_node = !parent_node_param ? this.tree : parent_node_param;
      var node = parent_node.prepend(new_node_info);

      this._refreshElements(parent_node);

      return node;
    };

    JqTreeWidget.prototype.updateNode = function (node, data) {
      var id_is_changed = data.id && data.id !== node.id;

      if (id_is_changed) {
        this.tree.removeNodeFromIndex(node);
      }

      node.setData(data);

      if (id_is_changed) {
        this.tree.addNodeToIndex(node);
      }

      if (_typeof(data) === "object" && data.children) {
        node.removeChildren();

        if (data.children.length) {
          node.loadFromData(data.children);
        }
      }

      this.renderer.renderFromNode(node);

      this._selectCurrentNode();

      return this.element;
    };

    JqTreeWidget.prototype.moveNode = function (node, target_node, position) {
      var position_index = node_1.getPosition(position);
      this.tree.moveNode(node, target_node, position_index);

      this._refreshElements(null);

      return this.element;
    };

    JqTreeWidget.prototype.getStateFromStorage = function () {
      if (this.save_state_handler) {
        return this.save_state_handler.getStateFromStorage();
      }
    };

    JqTreeWidget.prototype.addToSelection = function (node) {
      if (node && this.select_node_handler) {
        this.select_node_handler.addToSelection(node);

        this._getNodeElementForNode(node).select();

        this._saveState();
      }

      return this.element;
    };

    JqTreeWidget.prototype.getSelectedNodes = function () {
      if (!this.select_node_handler) {
        return [];
      } else {
        return this.select_node_handler.getSelectedNodes();
      }
    };

    JqTreeWidget.prototype.isNodeSelected = function (node) {
      if (!this.select_node_handler) {
        return false;
      } else {
        return this.select_node_handler.isNodeSelected(node);
      }
    };

    JqTreeWidget.prototype.removeFromSelection = function (node) {
      if (this.select_node_handler) {
        this.select_node_handler.removeFromSelection(node);

        this._getNodeElementForNode(node).deselect();

        this._saveState();
      }

      return this.element;
    };

    JqTreeWidget.prototype.scrollToNode = function (node) {
      if (this.scroll_handler) {
        var $element = $(node.element);
        var top_1 = $element.offset().top - this.$el.offset().top;
        this.scroll_handler.scrollTo(top_1);
      }

      return this.element;
    };

    JqTreeWidget.prototype.getState = function () {
      if (this.save_state_handler) {
        return this.save_state_handler.getState();
      }
    };

    JqTreeWidget.prototype.setState = function (state) {
      if (this.save_state_handler) {
        this.save_state_handler.setInitialState(state);

        this._refreshElements(null);
      }

      return this.element;
    };

    JqTreeWidget.prototype.setOption = function (option, value) {
      this.options[option] = value;
      return this.element;
    };

    JqTreeWidget.prototype.moveDown = function () {
      if (this.key_handler) {
        this.key_handler.moveDown();
      }

      return this.element;
    };

    JqTreeWidget.prototype.moveUp = function () {
      if (this.key_handler) {
        this.key_handler.moveUp();
      }

      return this.element;
    };

    JqTreeWidget.prototype.getVersion = function () {
      return version_1["default"];
    };

    JqTreeWidget.prototype.testGenerateHitAreas = function (moving_node) {
      if (!this.dnd_handler) {
        return [];
      } else {
        this.dnd_handler.current_item = this._getNodeElementForNode(moving_node);
        this.dnd_handler.generateHitAreas();
        return this.dnd_handler.hit_areas;
      }
    };

    JqTreeWidget.prototype._triggerEvent = function (event_name, values) {
      var event = $.Event(event_name);
      $.extend(event, values);
      this.element.trigger(event);
      return event;
    };

    JqTreeWidget.prototype._openNode = function (node, slide, on_finished) {
      var _this = this;

      if (slide === void 0) {
        slide = true;
      }

      var doOpenNode = function doOpenNode(_node, _slide, _on_finished) {
        var folder_element = new node_element_1.FolderElement(_node, _this);
        folder_element.open(_on_finished, _slide, _this.options.animationSpeed);
      };

      if (node.isFolder()) {
        if (node.load_on_demand) {
          this._loadFolderOnDemand(node, slide, on_finished);
        } else {
          var parent_1 = node.parent;

          while (parent_1) {
            // nb: do not open root element
            if (parent_1.parent) {
              doOpenNode(parent_1, false, null);
            }

            parent_1 = parent_1.parent;
          }

          doOpenNode(node, slide, on_finished);

          this._saveState();
        }
      }
    };
    /*
    Redraw the tree or part of the tree.
     from_node: redraw this subtree
    */


    JqTreeWidget.prototype._refreshElements = function (from_node) {
      this.renderer.render(from_node);

      this._triggerEvent("tree.refresh");
    };

    JqTreeWidget.prototype._getNodeElementForNode = function (node) {
      if (node.isFolder()) {
        return new node_element_1.FolderElement(node, this);
      } else {
        return new node_element_1.NodeElement(node, this);
      }
    };

    JqTreeWidget.prototype._getNodeElement = function ($element) {
      var node = this._getNode($element);

      if (node) {
        return this._getNodeElementForNode(node);
      } else {
        return null;
      }
    };

    JqTreeWidget.prototype._containsElement = function (element) {
      var node = this._getNode($(element));

      return node != null && node.tree === this.tree;
    };

    JqTreeWidget.prototype._init = function () {
      _super.prototype._init.call(this);

      this.element = this.$el;
      this.mouse_delay = 300;
      this.is_initialized = false;
      this.options.rtl = this._getRtlOption();

      if (this.options.closedIcon === null) {
        this.options.closedIcon = this._getDefaultClosedIcon();
      }

      this.renderer = new elements_renderer_1["default"](this);

      if (save_state_handler_1["default"] != null) {
        this.save_state_handler = new save_state_handler_1["default"](this);
      } else {
        this.options.saveState = false;
      }

      if (select_node_handler_1["default"] != null) {
        this.select_node_handler = new select_node_handler_1["default"](this);
      }

      if (drag_and_drop_handler_1.DragAndDropHandler != null) {
        this.dnd_handler = new drag_and_drop_handler_1.DragAndDropHandler(this);
      } else {
        this.options.dragAndDrop = false;
      }

      if (scroll_handler_1["default"] != null) {
        this.scroll_handler = new scroll_handler_1["default"](this);
      }

      if (key_handler_1["default"] != null && select_node_handler_1["default"] != null) {
        this.key_handler = new key_handler_1["default"](this);
      }

      this._initData();

      this.element.click($.proxy(this._click, this));
      this.element.dblclick($.proxy(this._dblclick, this));

      if (this.options.useContextMenu) {
        this.element.on("contextmenu", $.proxy(this._contextmenu, this));
      }
    };

    JqTreeWidget.prototype._deinit = function () {
      this.element.empty();
      this.element.off();

      if (this.key_handler) {
        this.key_handler.deinit();
      }

      this.tree = new node_1.Node({}, true);

      _super.prototype._deinit.call(this);
    };

    JqTreeWidget.prototype._mouseCapture = function (position_info) {
      if (this.options.dragAndDrop && this.dnd_handler) {
        return this.dnd_handler.mouseCapture(position_info);
      } else {
        return false;
      }
    };

    JqTreeWidget.prototype._mouseStart = function (position_info) {
      if (this.options.dragAndDrop && this.dnd_handler) {
        return this.dnd_handler.mouseStart(position_info);
      } else {
        return false;
      }
    };

    JqTreeWidget.prototype._mouseDrag = function (position_info) {
      if (this.options.dragAndDrop && this.dnd_handler) {
        var result = this.dnd_handler.mouseDrag(position_info);

        if (this.scroll_handler) {
          this.scroll_handler.checkScrolling();
        }

        return result;
      } else {
        return false;
      }
    };

    JqTreeWidget.prototype._mouseStop = function (position_info) {
      if (this.options.dragAndDrop && this.dnd_handler) {
        return this.dnd_handler.mouseStop(position_info);
      } else {
        return false;
      }
    };

    JqTreeWidget.prototype._initData = function () {
      if (this.options.data) {
        this._loadData(this.options.data, null);
      } else {
        var data_url = this._getDataUrlInfo(null);

        if (data_url) {
          this._loadDataFromUrl(null, null, null);
        } else {
          this._loadData([], null);
        }
      }
    };

    JqTreeWidget.prototype._getDataUrlInfo = function (node) {
      var _this = this;

      var data_url = this.options.dataUrl || this.element.data("url");

      var getUrlFromString = function getUrlFromString() {
        var url_info = {
          url: data_url
        };

        if (node && node.id) {
          // Load on demand of a subtree; add node parameter
          var data = {
            node: node.id
          }; // tslint:disable-next-line: no-string-literal

          url_info["data"] = data;
        } else {
          // Add selected_node parameter
          var selected_node_id = _this._getNodeIdToBeSelected();

          if (selected_node_id) {
            var data = {
              selected_node: selected_node_id
            }; // tslint:disable-next-line: no-string-literal

            url_info["data"] = data;
          }
        }

        return url_info;
      };

      if ($.isFunction(data_url)) {
        return data_url(node);
      } else if ($.type(data_url) === "string") {
        return getUrlFromString();
      } else {
        return data_url;
      }
    };

    JqTreeWidget.prototype._getNodeIdToBeSelected = function () {
      if (this.options.saveState && this.save_state_handler) {
        return this.save_state_handler.getNodeIdToBeSelected();
      } else {
        return null;
      }
    };

    JqTreeWidget.prototype._initTree = function (data) {
      var _this = this;

      var doInit = function doInit() {
        if (!_this.is_initialized) {
          _this.is_initialized = true;

          _this._triggerEvent("tree.init");
        }
      };

      this.tree = new this.options.nodeClass(null, true, this.options.nodeClass);

      if (this.select_node_handler) {
        this.select_node_handler.clear();
      }

      this.tree.loadFromData(data);

      var must_load_on_demand = this._setInitialState();

      this._refreshElements(null);

      if (!must_load_on_demand) {
        doInit();
      } else {
        // Load data on demand and then init the tree
        this._setInitialStateOnDemand(doInit);
      }
    }; // Set initial state, either by restoring the state or auto-opening nodes
    // result: must load nodes on demand?


    JqTreeWidget.prototype._setInitialState = function () {
      var _this = this;

      var restoreState = function restoreState() {
        // result: is state restored, must load on demand?
        if (!(_this.options.saveState && _this.save_state_handler)) {
          return [false, false];
        } else {
          var state = _this.save_state_handler.getStateFromStorage();

          if (!state) {
            return [false, false];
          } else {
            var must_load_on_demand_1 = _this.save_state_handler.setInitialState(state); // return true: the state is restored


            return [true, must_load_on_demand_1];
          }
        }
      };

      var autoOpenNodes = function autoOpenNodes() {
        // result: must load on demand?
        if (_this.options.autoOpen === false) {
          return false;
        }

        var max_level = _this._getAutoOpenMaxLevel();

        var must_load_on_demand = false;

        _this.tree.iterate(function (node, level) {
          if (node.load_on_demand) {
            must_load_on_demand = true;
            return false;
          } else if (!node.hasChildren()) {
            return false;
          } else {
            node.is_open = true;
            return level !== max_level;
          }
        });

        return must_load_on_demand;
      }; // tslint:disable-next-line: prefer-const


      var _a = restoreState(),
          is_restored = _a[0],
          must_load_on_demand = _a[1];

      if (!is_restored) {
        must_load_on_demand = autoOpenNodes();
      }

      return must_load_on_demand;
    }; // Set the initial state for nodes that are loaded on demand
    // Call cb_finished when done


    JqTreeWidget.prototype._setInitialStateOnDemand = function (cb_finished) {
      var _this = this;

      var restoreState = function restoreState() {
        if (!(_this.options.saveState && _this.save_state_handler)) {
          return false;
        } else {
          var state = _this.save_state_handler.getStateFromStorage();

          if (!state) {
            return false;
          } else {
            _this.save_state_handler.setInitialStateOnDemand(state, cb_finished);

            return true;
          }
        }
      };

      var autoOpenNodes = function autoOpenNodes() {
        var max_level = _this._getAutoOpenMaxLevel();

        var loading_count = 0;

        var loadAndOpenNode = function loadAndOpenNode(node) {
          loading_count += 1;

          _this._openNode(node, false, function () {
            loading_count -= 1;
            openNodes();
          });
        };

        var openNodes = function openNodes() {
          _this.tree.iterate(function (node, level) {
            if (node.load_on_demand) {
              if (!node.is_loading) {
                loadAndOpenNode(node);
              }

              return false;
            } else {
              _this._openNode(node, false, null);

              return level !== max_level;
            }
          });

          if (loading_count === 0) {
            cb_finished();
          }
        };

        openNodes();
      };

      if (!restoreState()) {
        autoOpenNodes();
      }
    };

    JqTreeWidget.prototype._getAutoOpenMaxLevel = function () {
      if (this.options.autoOpen === true) {
        return -1;
      } else {
        return parseInt(this.options.autoOpen, 10);
      }
    };

    JqTreeWidget.prototype._click = function (e) {
      var click_target = this._getClickTarget(e.target);

      if (click_target) {
        if (click_target.type === "button") {
          this.toggle(click_target.node, this.options.slide);
          e.preventDefault();
          e.stopPropagation();
        } else if (click_target.type === "label") {
          var node = click_target.node;

          var event_1 = this._triggerEvent("tree.click", {
            node: node,
            click_event: e
          });

          if (!event_1.isDefaultPrevented()) {
            this._selectNode(node, true);
          }
        }
      }
    };

    JqTreeWidget.prototype._dblclick = function (e) {
      var click_target = this._getClickTarget(e.target);

      if (click_target && click_target.type === "label") {
        this._triggerEvent("tree.dblclick", {
          node: click_target.node,
          click_event: e
        });
      }
    };

    JqTreeWidget.prototype._getClickTarget = function (element) {
      var $target = $(element);
      var $button = $target.closest(".jqtree-toggler");

      if ($button.length) {
        var node = this._getNode($button);

        if (node) {
          return {
            type: "button",
            node: node
          };
        }
      } else {
        var $el = $target.closest(".jqtree-element");

        if ($el.length) {
          var node = this._getNode($el);

          if (node) {
            return {
              type: "label",
              node: node
            };
          }
        }
      }

      return null;
    };

    JqTreeWidget.prototype._getNode = function ($element) {
      var $li = $element.closest("li.jqtree_common");

      if ($li.length === 0) {
        return null;
      } else {
        return $li.data("node");
      }
    };

    JqTreeWidget.prototype._contextmenu = function (e) {
      var $div = $(e.target).closest("ul.jqtree-tree .jqtree-element");

      if ($div.length) {
        var node = this._getNode($div);

        if (node) {
          e.preventDefault();
          e.stopPropagation();

          this._triggerEvent("tree.contextmenu", {
            node: node,
            click_event: e
          });

          return false;
        }
      }

      return null;
    };

    JqTreeWidget.prototype._saveState = function () {
      if (this.options.saveState && this.save_state_handler) {
        this.save_state_handler.saveState();
      }
    };

    JqTreeWidget.prototype._selectCurrentNode = function () {
      var node = this.getSelectedNode();

      if (node) {
        var node_element = this._getNodeElementForNode(node);

        if (node_element) {
          node_element.select();
        }
      }
    };

    JqTreeWidget.prototype._deselectCurrentNode = function () {
      var node = this.getSelectedNode();

      if (node) {
        this.removeFromSelection(node);
      }
    };

    JqTreeWidget.prototype._getDefaultClosedIcon = function () {
      if (this.options.rtl) {
        // triangle to the left
        return "&#x25c0;";
      } else {
        // triangle to the right
        return "&#x25ba;";
      }
    };

    JqTreeWidget.prototype._getRtlOption = function () {
      if (this.options.rtl != null) {
        return this.options.rtl;
      } else {
        var data_rtl = this.element.data("rtl");

        if (data_rtl != null && data_rtl !== false) {
          return true;
        } else {
          return false;
        }
      }
    };

    JqTreeWidget.prototype._notifyLoading = function (is_loading, node, $el) {
      if (this.options.onLoading) {
        this.options.onLoading(is_loading, node, $el);
      }
    };

    JqTreeWidget.prototype._selectNode = function (node, must_toggle) {
      var _this = this;

      if (must_toggle === void 0) {
        must_toggle = false;
      }

      if (!this.select_node_handler) {
        return;
      }

      var canSelect = function canSelect() {
        if (_this.options.onCanSelectNode) {
          return _this.options.selectable && _this.options.onCanSelectNode(node);
        } else {
          return _this.options.selectable;
        }
      };

      var openParents = function openParents() {
        var parent = node.parent;

        if (parent && parent.parent && !parent.is_open) {
          _this.openNode(parent, false);
        }
      };

      var saveState = function saveState() {
        if (_this.options.saveState && _this.save_state_handler) {
          _this.save_state_handler.saveState();
        }
      };

      if (!node) {
        // Called with empty node -> deselect current node
        this._deselectCurrentNode();

        saveState();
        return;
      }

      if (!canSelect()) {
        return;
      }

      if (this.select_node_handler.isNodeSelected(node)) {
        if (must_toggle) {
          this._deselectCurrentNode();

          this._triggerEvent("tree.select", {
            node: null,
            previous_node: node
          });
        }
      } else {
        var deselected_node = this.getSelectedNode();

        this._deselectCurrentNode();

        this.addToSelection(node);

        this._triggerEvent("tree.select", {
          node: node,
          deselected_node: deselected_node
        });

        openParents();
      }

      saveState();
    };

    JqTreeWidget.prototype._loadData = function (data, parent_node) {
      if (!data) {
        return;
      } else {
        this._triggerEvent("tree.load_data", {
          tree_data: data
        });

        if (parent_node) {
          this._deselectNodes(parent_node);

          this._loadSubtree(data, parent_node);
        } else {
          this._initTree(data);
        }

        if (this.isDragging() && this.dnd_handler) {
          this.dnd_handler.refresh();
        }
      }
    };

    JqTreeWidget.prototype._deselectNodes = function (parent_node) {
      if (this.select_node_handler) {
        var selected_nodes_under_parent = this.select_node_handler.getSelectedNodesUnder(parent_node);

        for (var _i = 0, selected_nodes_under_parent_1 = selected_nodes_under_parent; _i < selected_nodes_under_parent_1.length; _i++) {
          var n = selected_nodes_under_parent_1[_i];
          this.select_node_handler.removeFromSelection(n);
        }
      }
    };

    JqTreeWidget.prototype._loadSubtree = function (data, parent_node) {
      parent_node.loadFromData(data);
      parent_node.load_on_demand = false;
      parent_node.is_loading = false;

      this._refreshElements(parent_node);
    };

    JqTreeWidget.prototype._loadDataFromUrl = function (url_info_param, parent_node, on_finished) {
      var _this = this;

      var $el = null;
      var url_info = url_info_param;

      var addLoadingClass = function addLoadingClass() {
        $el = parent_node ? $(parent_node.element) : _this.element;
        $el.addClass("jqtree-loading");

        _this._notifyLoading(true, parent_node, $el);
      };

      var removeLoadingClass = function removeLoadingClass() {
        if ($el) {
          $el.removeClass("jqtree-loading");

          _this._notifyLoading(false, parent_node, $el);
        }
      };

      var parseUrlInfo = function parseUrlInfo() {
        if ($.type(url_info) === "string") {
          return {
            url: url_info
          };
        }

        if (!url_info.method) {
          url_info.method = "get";
        }

        return url_info;
      };

      var handeLoadData = function handeLoadData(data) {
        removeLoadingClass();

        _this._loadData(data, parent_node);

        if (on_finished && $.isFunction(on_finished)) {
          on_finished();
        }
      };

      var getDataFromResponse = function getDataFromResponse(response) {
        return $.isArray(response) || _typeof(response) === "object" ? response : response != null ? $.parseJSON(response) : [];
      };

      var filterData = function filterData(data) {
        return _this.options.dataFilter ? _this.options.dataFilter(data) : data;
      };

      var handleSuccess = function handleSuccess(response) {
        var data = filterData(getDataFromResponse(response));
        handeLoadData(data);
      };

      var handleError = function handleError(response) {
        removeLoadingClass();

        if (_this.options.onLoadFailed) {
          _this.options.onLoadFailed(response);
        }
      };

      var loadDataFromUrlInfo = function loadDataFromUrlInfo() {
        var _url_info = parseUrlInfo();

        $.ajax($.extend({}, _url_info, {
          method: url_info.method != null ? url_info.method.toUpperCase() : "GET",
          cache: false,
          dataType: "json",
          success: handleSuccess,
          error: handleError
        }));
      };

      if (!url_info_param) {
        // Generate url for node
        url_info = this._getDataUrlInfo(parent_node);
      }

      addLoadingClass();

      if (!url_info) {
        removeLoadingClass();
        return;
      } else if ($.isArray(url_info)) {
        handeLoadData(url_info);
        return;
      } else {
        loadDataFromUrlInfo();
        return;
      }
    };

    JqTreeWidget.prototype._loadFolderOnDemand = function (node, slide, on_finished) {
      var _this = this;

      if (slide === void 0) {
        slide = true;
      }

      node.is_loading = true;

      this._loadDataFromUrl(null, node, function () {
        _this._openNode(node, slide, on_finished);
      });
    };

    JqTreeWidget.defaults = {
      animationSpeed: "fast",
      autoOpen: false,
      saveState: false,
      dragAndDrop: false,
      selectable: true,
      useContextMenu: true,
      onCanSelectNode: null,
      onSetStateFromStorage: null,
      onGetStateFromStorage: null,
      onCreateLi: null,
      onIsMoveHandle: null,
      // Can this node be moved?
      onCanMove: null,
      // Can this node be moved to this position? function(moved_node, target_node, position)
      onCanMoveTo: null,
      onLoadFailed: null,
      autoEscape: true,
      dataUrl: null,
      // The symbol to use for a closed node - ► BLACK RIGHT-POINTING POINTER
      // http://www.fileformat.info/info/unicode/char/25ba/index.htm
      closedIcon: null,
      // The symbol to use for an open node - ▼ BLACK DOWN-POINTING TRIANGLE
      // http://www.fileformat.info/info/unicode/char/25bc/index.htm
      openedIcon: "&#x25bc;",
      slide: true,
      nodeClass: node_1.Node,
      dataFilter: null,
      keyboardSupport: true,
      openFolderDelay: 500,
      rtl: false,
      onDragMove: null,
      onDragStop: null,
      buttonLeft: true,
      onLoading: null,
      tabIndex: 0
    };
    return JqTreeWidget;
  }(mouse_widget_1["default"]);

  simple_widget_1["default"].register(JqTreeWidget, "tree");
  /***/
},
/* 4 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;
  var version = "1.4.3";
  exports["default"] = version;
  /***/
},
/* 5 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return function (d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  exports.__esModule = true;

  var node_1 = __webpack_require__(0);

  var util_1 = __webpack_require__(1);

  var DragAndDropHandler =
  /** @class */
  function () {
    function DragAndDropHandler(tree_widget) {
      this.tree_widget = tree_widget;
      this.hovered_area = null;
      this.$ghost = null;
      this.hit_areas = [];
      this.is_dragging = false;
      this.current_item = null;
    }

    DragAndDropHandler.prototype.mouseCapture = function (position_info) {
      var $element = $(position_info.target);

      if (!this.mustCaptureElement($element)) {
        return null;
      }

      if (this.tree_widget.options.onIsMoveHandle && !this.tree_widget.options.onIsMoveHandle($element)) {
        return null;
      }

      var node_element = this.tree_widget._getNodeElement($element);

      if (node_element && this.tree_widget.options.onCanMove) {
        if (!this.tree_widget.options.onCanMove(node_element.node)) {
          node_element = null;
        }
      }

      this.current_item = node_element;
      return this.current_item != null;
    };

    DragAndDropHandler.prototype.generateHitAreas = function () {
      if (!this.current_item) {
        this.hit_areas = [];
      } else {
        var hit_areas_generator = new HitAreasGenerator(this.tree_widget.tree, this.current_item.node, this.getTreeDimensions().bottom);
        this.hit_areas = hit_areas_generator.generate();
      }
    };

    DragAndDropHandler.prototype.mouseStart = function (position_info) {
      if (!this.current_item) {
        return false;
      } else {
        this.refresh();
        var offset = $(position_info.target).offset();
        var node = this.current_item.node;
        var node_name = this.tree_widget.options.autoEscape ? util_1.html_escape(node.name) : node.name;
        this.drag_element = new DragElement(node_name, position_info.page_x - offset.left, position_info.page_y - offset.top, this.tree_widget.element);
        this.is_dragging = true;
        this.current_item.$element.addClass("jqtree-moving");
        return true;
      }
    };

    DragAndDropHandler.prototype.mouseDrag = function (position_info) {
      if (!this.current_item || !this.drag_element) {
        return false;
      } else {
        this.drag_element.move(position_info.page_x, position_info.page_y);
        var area = this.findHoveredArea(position_info.page_x, position_info.page_y);
        var can_move_to = this.canMoveToArea(area);

        if (can_move_to && area) {
          if (!area.node.isFolder()) {
            this.stopOpenFolderTimer();
          }

          if (this.hovered_area !== area) {
            this.hovered_area = area; // If this is a closed folder, start timer to open it

            if (this.mustOpenFolderTimer(area)) {
              this.startOpenFolderTimer(area.node);
            } else {
              this.stopOpenFolderTimer();
            }

            this.updateDropHint();
          }
        } else {
          this.removeHover();
          this.removeDropHint();
          this.stopOpenFolderTimer();
        }

        if (!area) {
          if (this.tree_widget.options.onDragMove) {
            this.tree_widget.options.onDragMove(this.current_item.node, position_info.original_event);
          }
        }

        return true;
      }
    };

    DragAndDropHandler.prototype.mouseStop = function (position_info) {
      this.moveItem(position_info);
      this.clear();
      this.removeHover();
      this.removeDropHint();
      this.removeHitAreas();
      var current_item = this.current_item;

      if (this.current_item) {
        this.current_item.$element.removeClass("jqtree-moving");
        this.current_item = null;
      }

      this.is_dragging = false;

      if (!this.hovered_area && current_item) {
        if (this.tree_widget.options.onDragStop) {
          this.tree_widget.options.onDragStop(current_item.node, position_info.original_event);
        }
      }

      return false;
    };

    DragAndDropHandler.prototype.refresh = function () {
      this.removeHitAreas();

      if (this.current_item) {
        this.generateHitAreas();
        this.current_item = this.tree_widget._getNodeElementForNode(this.current_item.node);

        if (this.is_dragging) {
          this.current_item.$element.addClass("jqtree-moving");
        }
      }
    };

    DragAndDropHandler.prototype.mustCaptureElement = function ($element) {
      return !$element.is("input,select,textarea");
    };

    DragAndDropHandler.prototype.canMoveToArea = function (area) {
      if (!area || !this.current_item) {
        return false;
      } else if (this.tree_widget.options.onCanMoveTo) {
        var position_name = node_1.getPositionName(area.position);
        return this.tree_widget.options.onCanMoveTo(this.current_item.node, area.node, position_name);
      } else {
        return true;
      }
    };

    DragAndDropHandler.prototype.removeHitAreas = function () {
      this.hit_areas = [];
    };

    DragAndDropHandler.prototype.clear = function () {
      if (this.drag_element) {
        this.drag_element.remove();
        this.drag_element = null;
      }
    };

    DragAndDropHandler.prototype.removeDropHint = function () {
      if (this.previous_ghost) {
        this.previous_ghost.remove();
      }
    };

    DragAndDropHandler.prototype.removeHover = function () {
      this.hovered_area = null;
    };

    DragAndDropHandler.prototype.findHoveredArea = function (x, y) {
      var dimensions = this.getTreeDimensions();

      if (x < dimensions.left || y < dimensions.top || x > dimensions.right || y > dimensions.bottom) {
        return null;
      }

      var low = 0;
      var high = this.hit_areas.length;

      while (low < high) {
        // tslint:disable-next-line: no-bitwise
        var mid = low + high >> 1;
        var area = this.hit_areas[mid];

        if (y < area.top) {
          high = mid;
        } else if (y > area.bottom) {
          low = mid + 1;
        } else {
          return area;
        }
      }

      return null;
    };

    DragAndDropHandler.prototype.mustOpenFolderTimer = function (area) {
      var node = area.node;
      return node.isFolder() && !node.is_open && area.position === node_1.Position.Inside;
    };

    DragAndDropHandler.prototype.updateDropHint = function () {
      if (!this.hovered_area) {
        return;
      } // remove previous drop hint


      this.removeDropHint(); // add new drop hint

      var node_element = this.tree_widget._getNodeElementForNode(this.hovered_area.node);

      this.previous_ghost = node_element.addDropHint(this.hovered_area.position);
    };

    DragAndDropHandler.prototype.startOpenFolderTimer = function (folder) {
      var _this = this;

      var openFolder = function openFolder() {
        _this.tree_widget._openNode(folder, _this.tree_widget.options.slide, function () {
          _this.refresh();

          _this.updateDropHint();
        });
      };

      this.stopOpenFolderTimer();
      this.open_folder_timer = setTimeout(openFolder, this.tree_widget.options.openFolderDelay);
    };

    DragAndDropHandler.prototype.stopOpenFolderTimer = function () {
      if (this.open_folder_timer) {
        clearTimeout(this.open_folder_timer);
        this.open_folder_timer = null;
      }
    };

    DragAndDropHandler.prototype.moveItem = function (position_info) {
      var _this = this;

      if (this.current_item && this.hovered_area && this.hovered_area.position !== node_1.Position.None && this.canMoveToArea(this.hovered_area)) {
        var moved_node_1 = this.current_item.node;
        var target_node_1 = this.hovered_area.node;
        var position_1 = this.hovered_area.position;
        var previous_parent = moved_node_1.parent;

        if (position_1 === node_1.Position.Inside) {
          this.hovered_area.node.is_open = true;
        }

        var doMove = function doMove() {
          _this.tree_widget.tree.moveNode(moved_node_1, target_node_1, position_1);

          _this.tree_widget.element.empty();

          _this.tree_widget._refreshElements(null);
        };

        var event_1 = this.tree_widget._triggerEvent("tree.move", {
          move_info: {
            moved_node: moved_node_1,
            target_node: target_node_1,
            position: node_1.getPositionName(position_1),
            previous_parent: previous_parent,
            do_move: doMove,
            original_event: position_info.original_event
          }
        });

        if (!event_1.isDefaultPrevented()) {
          doMove();
        }
      }
    };

    DragAndDropHandler.prototype.getTreeDimensions = function () {
      // Return the dimensions of the tree. Add a margin to the bottom to allow
      // for some to drag-and-drop the last element.
      var offset = this.tree_widget.element.offset();
      return {
        left: offset.left,
        top: offset.top,
        right: offset.left + this.tree_widget.element.width(),
        bottom: offset.top + this.tree_widget.element.height() + 16
      };
    };

    return DragAndDropHandler;
  }();

  exports.DragAndDropHandler = DragAndDropHandler;

  var VisibleNodeIterator =
  /** @class */
  function () {
    function VisibleNodeIterator(tree) {
      this.tree = tree;
    }

    VisibleNodeIterator.prototype.iterate = function () {
      var _this = this;

      var is_first_node = true;

      var _iterateNode = function _iterateNode(node, next_node) {
        var must_iterate_inside = (node.is_open || !node.element) && node.hasChildren();
        var $element = null;

        if (node.element) {
          $element = $(node.element);

          if (!$element.is(":visible")) {
            return;
          }

          if (is_first_node) {
            _this.handleFirstNode(node);

            is_first_node = false;
          }

          if (!node.hasChildren()) {
            _this.handleNode(node, next_node, $element);
          } else if (node.is_open) {
            if (!_this.handleOpenFolder(node, $element)) {
              must_iterate_inside = false;
            }
          } else {
            _this.handleClosedFolder(node, next_node, $element);
          }
        }

        if (must_iterate_inside) {
          var children_length_1 = node.children.length;
          node.children.forEach(function (_, i) {
            if (i === children_length_1 - 1) {
              _iterateNode(node.children[i], null);
            } else {
              _iterateNode(node.children[i], node.children[i + 1]);
            }
          });

          if (node.is_open && $element) {
            _this.handleAfterOpenFolder(node, next_node);
          }
        }
      };

      _iterateNode(this.tree, null);
    };

    return VisibleNodeIterator;
  }();

  var HitAreasGenerator =
  /** @class */
  function (_super) {
    __extends(HitAreasGenerator, _super);

    function HitAreasGenerator(tree, current_node, tree_bottom) {
      var _this = _super.call(this, tree) || this;

      _this.current_node = current_node;
      _this.tree_bottom = tree_bottom;
      return _this;
    }

    HitAreasGenerator.prototype.generate = function () {
      this.positions = [];
      this.last_top = 0;
      this.iterate();
      return this.generateHitAreas(this.positions);
    };

    HitAreasGenerator.prototype.generateHitAreas = function (positions) {
      var previous_top = -1;
      var group = [];
      var hit_areas = [];

      for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];

        if (position.top !== previous_top && group.length) {
          if (group.length) {
            this.generateHitAreasForGroup(hit_areas, group, previous_top, position.top);
          }

          previous_top = position.top;
          group = [];
        }

        group.push(position);
      }

      this.generateHitAreasForGroup(hit_areas, group, previous_top, this.tree_bottom);
      return hit_areas;
    };

    HitAreasGenerator.prototype.handleOpenFolder = function (node, $element) {
      if (node === this.current_node) {
        // Cannot move inside current item
        // Stop iterating
        return false;
      } // Cannot move before current item


      if (node.children[0] !== this.current_node) {
        this.addPosition(node, node_1.Position.Inside, this.getTop($element));
      } // Continue iterating


      return true;
    };

    HitAreasGenerator.prototype.handleClosedFolder = function (node, next_node, $element) {
      var top = this.getTop($element);

      if (node === this.current_node) {
        // Cannot move after current item
        this.addPosition(node, node_1.Position.None, top);
      } else {
        this.addPosition(node, node_1.Position.Inside, top); // Cannot move before current item

        if (next_node !== this.current_node) {
          this.addPosition(node, node_1.Position.After, top);
        }
      }
    };

    HitAreasGenerator.prototype.handleFirstNode = function (node) {
      if (node !== this.current_node) {
        this.addPosition(node, node_1.Position.Before, this.getTop($(node.element)));
      }
    };

    HitAreasGenerator.prototype.handleAfterOpenFolder = function (node, next_node) {
      if (node === this.current_node || next_node === this.current_node) {
        // Cannot move before or after current item
        this.addPosition(node, node_1.Position.None, this.last_top);
      } else {
        this.addPosition(node, node_1.Position.After, this.last_top);
      }
    };

    HitAreasGenerator.prototype.handleNode = function (node, next_node, $element) {
      var top = this.getTop($element);

      if (node === this.current_node) {
        // Cannot move inside current item
        this.addPosition(node, node_1.Position.None, top);
      } else {
        this.addPosition(node, node_1.Position.Inside, top);
      }

      if (next_node === this.current_node || node === this.current_node) {
        // Cannot move before or after current item
        this.addPosition(node, node_1.Position.None, top);
      } else {
        this.addPosition(node, node_1.Position.After, top);
      }
    };

    HitAreasGenerator.prototype.getTop = function ($element) {
      return $element.offset().top;
    };

    HitAreasGenerator.prototype.addPosition = function (node, position, top) {
      var area = {
        top: top,
        bottom: 0,
        node: node,
        position: position
      };
      this.positions.push(area);
      this.last_top = top;
    };

    HitAreasGenerator.prototype.generateHitAreasForGroup = function (hit_areas, positions_in_group, top, bottom) {
      // limit positions in group
      var position_count = Math.min(positions_in_group.length, 4);
      var area_height = Math.round((bottom - top) / position_count);
      var area_top = top;
      var i = 0;

      while (i < position_count) {
        var position = positions_in_group[i];
        hit_areas.push({
          top: area_top,
          bottom: area_top + area_height,
          node: position.node,
          position: position.position
        });
        area_top += area_height;
        i += 1;
      }
    };

    return HitAreasGenerator;
  }(VisibleNodeIterator);

  exports.HitAreasGenerator = HitAreasGenerator;

  var DragElement =
  /** @class */
  function () {
    function DragElement(node_name, offset_x, offset_y, $tree) {
      this.offset_x = offset_x;
      this.offset_y = offset_y;
      this.$element = $("<span class=\"jqtree-title jqtree-dragging\">" + node_name + "</span>");
      this.$element.css("position", "absolute");
      $tree.append(this.$element);
    }

    DragElement.prototype.move = function (page_x, page_y) {
      this.$element.offset({
        left: page_x - this.offset_x,
        top: page_y - this.offset_y
      });
    };

    DragElement.prototype.remove = function () {
      this.$element.remove();
    };

    return DragElement;
  }();

  exports.DragElement = DragElement;
  /***/
},
/* 6 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  var util_1 = __webpack_require__(1);

  var ElementsRenderer =
  /** @class */
  function () {
    function ElementsRenderer(tree_widget) {
      this.tree_widget = tree_widget;
      this.opened_icon_element = this.createButtonElement(tree_widget.options.openedIcon);
      this.closed_icon_element = this.createButtonElement(tree_widget.options.closedIcon);
    }

    ElementsRenderer.prototype.render = function (from_node) {
      if (from_node && from_node.parent) {
        this.renderFromNode(from_node);
      } else {
        this.renderFromRoot();
      }
    };

    ElementsRenderer.prototype.renderFromRoot = function () {
      var $element = this.tree_widget.element;
      $element.empty();
      this.createDomElements($element[0], this.tree_widget.tree.children, true, 1);
    };

    ElementsRenderer.prototype.renderFromNode = function (node) {
      // remember current li
      var $previous_li = $(node.element); // create element

      var li = this.createLi(node, node.getLevel());
      this.attachNodeData(node, li); // add element to dom

      $previous_li.after(li); // remove previous li

      $previous_li.remove(); // create children

      if (node.children) {
        this.createDomElements(li, node.children, false, node.getLevel() + 1);
      }
    };

    ElementsRenderer.prototype.createDomElements = function (element, children, is_root_node, level) {
      var ul = this.createUl(is_root_node);
      element.appendChild(ul);

      for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        var li = this.createLi(child, level);
        ul.appendChild(li);
        this.attachNodeData(child, li);

        if (child.hasChildren()) {
          this.createDomElements(li, child.children, false, level + 1);
        }
      }
    };

    ElementsRenderer.prototype.attachNodeData = function (node, li) {
      node.element = li;
      $(li).data("node", node);
    };

    ElementsRenderer.prototype.createUl = function (is_root_node) {
      var class_string;
      var role;

      if (!is_root_node) {
        class_string = "";
        role = "group";
      } else {
        class_string = "jqtree-tree";
        role = "tree";

        if (this.tree_widget.options.rtl) {
          class_string += " jqtree-rtl";
        }
      }

      var ul = document.createElement("ul");
      ul.className = "jqtree_common " + class_string;
      ul.setAttribute("role", role);
      return ul;
    };

    ElementsRenderer.prototype.createLi = function (node, level) {
      var is_selected = Boolean(this.tree_widget.select_node_handler && this.tree_widget.select_node_handler.isNodeSelected(node));
      var li = node.isFolder() ? this.createFolderLi(node, level, is_selected) : this.createNodeLi(node, level, is_selected);

      if (this.tree_widget.options.onCreateLi) {
        this.tree_widget.options.onCreateLi(node, $(li), is_selected);
      }

      return li;
    };

    ElementsRenderer.prototype.createFolderLi = function (node, level, is_selected) {
      var button_classes = this.getButtonClasses(node);
      var folder_classes = this.getFolderClasses(node, is_selected);
      var icon_element = node.is_open ? this.opened_icon_element : this.closed_icon_element; // li

      var li = document.createElement("li");
      li.className = "jqtree_common " + folder_classes;
      li.setAttribute("role", "presentation"); // div

      var div = document.createElement("div");
      div.className = "jqtree-element jqtree_common";
      div.setAttribute("role", "presentation");
      li.appendChild(div); // button link

      var button_link = document.createElement("a");
      button_link.className = button_classes;
      button_link.appendChild(icon_element.cloneNode(true));
      button_link.setAttribute("role", "presentation");
      button_link.setAttribute("aria-hidden", "true");

      if (this.tree_widget.options.buttonLeft) {
        div.appendChild(button_link);
      } // title span


      div.appendChild(this.createTitleSpan(node.name, level, is_selected, node.is_open, true));

      if (!this.tree_widget.options.buttonLeft) {
        div.appendChild(button_link);
      }

      return li;
    };

    ElementsRenderer.prototype.createNodeLi = function (node, level, is_selected) {
      var li_classes = ["jqtree_common"];

      if (is_selected) {
        li_classes.push("jqtree-selected");
      }

      var class_string = li_classes.join(" "); // li

      var li = document.createElement("li");
      li.className = class_string;
      li.setAttribute("role", "presentation"); // div

      var div = document.createElement("div");
      div.className = "jqtree-element jqtree_common";
      div.setAttribute("role", "presentation");
      li.appendChild(div); // title span

      div.appendChild(this.createTitleSpan(node.name, level, is_selected, node.is_open, false));
      return li;
    };

    ElementsRenderer.prototype.createTitleSpan = function (node_name, level, is_selected, is_open, is_folder) {
      var title_span = document.createElement("span");
      var classes = "jqtree-title jqtree_common";

      if (is_folder) {
        classes += " jqtree-title-folder";
      }

      title_span.className = classes;
      title_span.setAttribute("role", "treeitem");
      title_span.setAttribute("aria-level", "" + level);
      title_span.setAttribute("aria-selected", util_1.getBoolString(is_selected));
      title_span.setAttribute("aria-expanded", util_1.getBoolString(is_open));

      if (is_selected) {
        title_span.setAttribute("tabindex", this.tree_widget.options.tabIndex);
      }

      title_span.innerHTML = this.escapeIfNecessary(node_name);
      return title_span;
    };

    ElementsRenderer.prototype.getButtonClasses = function (node) {
      var classes = ["jqtree-toggler", "jqtree_common"];

      if (!node.is_open) {
        classes.push("jqtree-closed");
      }

      if (this.tree_widget.options.buttonLeft) {
        classes.push("jqtree-toggler-left");
      } else {
        classes.push("jqtree-toggler-right");
      }

      return classes.join(" ");
    };

    ElementsRenderer.prototype.getFolderClasses = function (node, is_selected) {
      var classes = ["jqtree-folder"];

      if (!node.is_open) {
        classes.push("jqtree-closed");
      }

      if (is_selected) {
        classes.push("jqtree-selected");
      }

      if (node.is_loading) {
        classes.push("jqtree-loading");
      }

      return classes.join(" ");
    };

    ElementsRenderer.prototype.escapeIfNecessary = function (value) {
      if (this.tree_widget.options.autoEscape) {
        return util_1.html_escape(value);
      } else {
        return value;
      }
    };

    ElementsRenderer.prototype.createButtonElement = function (value) {
      if (typeof value === "string") {
        // convert value to html
        var div = document.createElement("div");
        div.innerHTML = value;
        return document.createTextNode(div.innerHTML);
      } else {
        return $(value)[0];
      }
    };

    return ElementsRenderer;
  }();

  exports["default"] = ElementsRenderer;
  /***/
},
/* 7 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  var KeyHandler =
  /** @class */
  function () {
    function KeyHandler(tree_widget) {
      this.tree_widget = tree_widget;

      if (tree_widget.options.keyboardSupport) {
        $(document).on("keydown.jqtree", $.proxy(this.handleKeyDown, this));
      }
    }

    KeyHandler.prototype.deinit = function () {
      $(document).off("keydown.jqtree");
    };

    KeyHandler.prototype.moveDown = function () {
      var node = this.tree_widget.getSelectedNode();

      if (node) {
        return this.selectNode(node.getNextNode());
      } else {
        return false;
      }
    };

    KeyHandler.prototype.moveUp = function () {
      var node = this.tree_widget.getSelectedNode();

      if (node) {
        return this.selectNode(node.getPreviousNode());
      } else {
        return false;
      }
    };

    KeyHandler.prototype.moveRight = function () {
      var node = this.tree_widget.getSelectedNode();

      if (!node) {
        return true;
      } else if (!node.isFolder()) {
        return true;
      } else {
        // folder node
        if (node.is_open) {
          // Right moves to the first child of an open node
          return this.selectNode(node.getNextNode());
        } else {
          // Right expands a closed node
          this.tree_widget.openNode(node);
          return false;
        }
      }
    };

    KeyHandler.prototype.moveLeft = function () {
      var node = this.tree_widget.getSelectedNode();

      if (!node) {
        return true;
      } else if (node.isFolder() && node.is_open) {
        // Left on an open node closes the node
        this.tree_widget.closeNode(node);
        return false;
      } else {
        // Left on a closed or end node moves focus to the node's parent
        return this.selectNode(node.getParent());
      }
    };

    KeyHandler.prototype.handleKeyDown = function (e) {
      if (!this.canHandleKeyboard()) {
        return true;
      } else {
        var key = e.which;

        switch (key) {
          case KeyHandler.DOWN:
            return this.moveDown();

          case KeyHandler.UP:
            return this.moveUp();

          case KeyHandler.RIGHT:
            return this.moveRight();

          case KeyHandler.LEFT:
            return this.moveLeft();

          default:
            return true;
        }
      }
    };

    KeyHandler.prototype.selectNode = function (node) {
      if (!node) {
        return true;
      } else {
        this.tree_widget.selectNode(node);

        if (this.tree_widget.scroll_handler && !this.tree_widget.scroll_handler.isScrolledIntoView($(node.element).find(".jqtree-element"))) {
          this.tree_widget.scrollToNode(node);
        }

        return false;
      }
    };

    KeyHandler.prototype.canHandleKeyboard = function () {
      return this.tree_widget.options.keyboardSupport && this.isFocusOnTree() && this.tree_widget.getSelectedNode() != null;
    };

    KeyHandler.prototype.isFocusOnTree = function () {
      var active_element = document.activeElement;
      return active_element && active_element.tagName === "SPAN" && this.tree_widget._containsElement(active_element);
    };

    KeyHandler.LEFT = 37;
    KeyHandler.UP = 38;
    KeyHandler.RIGHT = 39;
    KeyHandler.DOWN = 40;
    return KeyHandler;
  }();

  exports["default"] = KeyHandler;
  /***/
},
/* 8 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return function (d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  exports.__esModule = true;
  /*
  This widget does the same a the mouse widget in jqueryui.
  */

  var simple_widget_1 = __webpack_require__(2);

  var MouseWidget =
  /** @class */
  function (_super) {
    __extends(MouseWidget, _super);

    function MouseWidget() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MouseWidget.prototype.setMouseDelay = function (mouse_delay) {
      this.mouse_delay = mouse_delay;
    };

    MouseWidget.prototype._init = function () {
      this.$el.on("mousedown.mousewidget", $.proxy(this._mouseDown, this));
      this.$el.on("touchstart.mousewidget", $.proxy(this._touchStart, this));
      this.is_mouse_started = false;
      this.mouse_delay = 0;
      this._mouse_delay_timer = null;
      this._is_mouse_delay_met = true;
      this.mouse_down_info = null;
    };

    MouseWidget.prototype._deinit = function () {
      this.$el.off("mousedown.mousewidget");
      this.$el.off("touchstart.mousewidget");
      var $document = $(document);
      $document.off("mousemove.mousewidget");
      $document.off("mouseup.mousewidget");
    };

    MouseWidget.prototype._mouseDown = function (e) {
      // Is left mouse button?
      if (e.which !== 1) {
        return;
      }

      var result = this._handleMouseDown(this._getPositionInfo(e));

      if (result) {
        e.preventDefault();
      }

      return result;
    };

    MouseWidget.prototype._handleMouseDown = function (position_info) {
      // We may have missed mouseup (out of window)
      if (this.is_mouse_started) {
        this._handleMouseUp(position_info);
      }

      this.mouse_down_info = position_info;

      if (!this._mouseCapture(position_info)) {
        return;
      }

      this._handleStartMouse();

      return true;
    };

    MouseWidget.prototype._handleStartMouse = function () {
      var $document = $(document);
      $document.on("mousemove.mousewidget", $.proxy(this._mouseMove, this));
      $document.on("touchmove.mousewidget", $.proxy(this._touchMove, this));
      $document.on("mouseup.mousewidget", $.proxy(this._mouseUp, this));
      $document.on("touchend.mousewidget", $.proxy(this._touchEnd, this));

      if (this.mouse_delay) {
        this._startMouseDelayTimer();
      }
    };

    MouseWidget.prototype._startMouseDelayTimer = function () {
      var _this = this;

      if (this._mouse_delay_timer) {
        clearTimeout(this._mouse_delay_timer);
      }

      this._mouse_delay_timer = setTimeout(function () {
        _this._is_mouse_delay_met = true;
      }, this.mouse_delay);
      this._is_mouse_delay_met = false;
    };

    MouseWidget.prototype._mouseMove = function (e) {
      return this._handleMouseMove(e, this._getPositionInfo(e));
    };

    MouseWidget.prototype._handleMouseMove = function (e, position_info) {
      if (this.is_mouse_started) {
        this._mouseDrag(position_info);

        return e.preventDefault();
      }

      if (this.mouse_delay && !this._is_mouse_delay_met) {
        return true;
      }

      if (this.mouse_down_info) {
        this.is_mouse_started = this._mouseStart(this.mouse_down_info) !== false;
      }

      if (this.is_mouse_started) {
        this._mouseDrag(position_info);
      } else {
        this._handleMouseUp(position_info);
      }

      return !this.is_mouse_started;
    };

    MouseWidget.prototype._getPositionInfo = function (e) {
      return {
        page_x: e.pageX,
        page_y: e.pageY,
        target: e.target,
        original_event: e
      };
    };

    MouseWidget.prototype._mouseUp = function (e) {
      return this._handleMouseUp(this._getPositionInfo(e));
    };

    MouseWidget.prototype._handleMouseUp = function (position_info) {
      var $document = $(document);
      $document.off("mousemove.mousewidget");
      $document.off("touchmove.mousewidget");
      $document.off("mouseup.mousewidget");
      $document.off("touchend.mousewidget");

      if (this.is_mouse_started) {
        this.is_mouse_started = false;

        this._mouseStop(position_info);
      }
    };

    MouseWidget.prototype._touchStart = function (e) {
      var touch_event = e.originalEvent;

      if (touch_event.touches.length > 1) {
        return;
      }

      var touch = touch_event.changedTouches[0];
      return this._handleMouseDown(this._getPositionInfo(touch));
    };

    MouseWidget.prototype._touchMove = function (e) {
      var touch_event = e.originalEvent;

      if (touch_event.touches.length > 1) {
        return;
      }

      var touch = touch_event.changedTouches[0];
      return this._handleMouseMove(e, this._getPositionInfo(touch));
    };

    MouseWidget.prototype._touchEnd = function (e) {
      var touch_event = e.originalEvent;

      if (touch_event.touches.length > 1) {
        return;
      }

      var touch = touch_event.changedTouches[0];
      return this._handleMouseUp(this._getPositionInfo(touch));
    };

    return MouseWidget;
  }(simple_widget_1["default"]);

  exports["default"] = MouseWidget;
  /***/
},
/* 9 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  var util_1 = __webpack_require__(1);

  var SaveStateHandler =
  /** @class */
  function () {
    function SaveStateHandler(tree_widget) {
      this.tree_widget = tree_widget;
    }

    SaveStateHandler.prototype.saveState = function () {
      var state = JSON.stringify(this.getState());

      if (this.tree_widget.options.onSetStateFromStorage) {
        this.tree_widget.options.onSetStateFromStorage(state);
      } else if (this.supportsLocalStorage()) {
        localStorage.setItem(this.getKeyName(), state);
      }
    };

    SaveStateHandler.prototype.getStateFromStorage = function () {
      var json_data = this._loadFromStorage();

      if (json_data) {
        return this._parseState(json_data);
      } else {
        return null;
      }
    };

    SaveStateHandler.prototype.getState = function () {
      var _this = this;

      var getOpenNodeIds = function getOpenNodeIds() {
        var open_nodes = [];

        _this.tree_widget.tree.iterate(function (node) {
          if (node.is_open && node.id && node.hasChildren()) {
            open_nodes.push(node.id);
          }

          return true;
        });

        return open_nodes;
      };

      var getSelectedNodeIds = function getSelectedNodeIds() {
        return _this.tree_widget.getSelectedNodes().map(function (n) {
          return n.id;
        });
      };

      return {
        open_nodes: getOpenNodeIds(),
        selected_node: getSelectedNodeIds()
      };
    };
    /*
    Set initial state
    Don't handle nodes that are loaded on demand
     result: must load on demand
    */


    SaveStateHandler.prototype.setInitialState = function (state) {
      if (!state) {
        return false;
      } else {
        var must_load_on_demand = false;

        if (state.open_nodes) {
          must_load_on_demand = this._openInitialNodes(state.open_nodes);
        }

        if (state.selected_node) {
          this._resetSelection();

          this._selectInitialNodes(state.selected_node);
        }

        return must_load_on_demand;
      }
    };

    SaveStateHandler.prototype.setInitialStateOnDemand = function (state, cb_finished) {
      if (state) {
        this._setInitialStateOnDemand(state.open_nodes, state.selected_node, cb_finished);
      } else {
        cb_finished();
      }
    };

    SaveStateHandler.prototype.getNodeIdToBeSelected = function () {
      var state = this.getStateFromStorage();

      if (state && state.selected_node) {
        return state.selected_node[0];
      } else {
        return null;
      }
    };

    SaveStateHandler.prototype._parseState = function (json_data) {
      var state = $.parseJSON(json_data); // Check if selected_node is an int (instead of an array)

      if (state && state.selected_node && util_1.isInt(state.selected_node)) {
        // Convert to array
        state.selected_node = [state.selected_node];
      }

      return state;
    };

    SaveStateHandler.prototype._loadFromStorage = function () {
      if (this.tree_widget.options.onGetStateFromStorage) {
        return this.tree_widget.options.onGetStateFromStorage();
      } else if (this.supportsLocalStorage()) {
        return localStorage.getItem(this.getKeyName());
      }
    };

    SaveStateHandler.prototype._openInitialNodes = function (node_ids) {
      var must_load_on_demand = false;

      for (var _i = 0, node_ids_1 = node_ids; _i < node_ids_1.length; _i++) {
        var node_id = node_ids_1[_i];
        var node = this.tree_widget.getNodeById(node_id);

        if (node) {
          if (!node.load_on_demand) {
            node.is_open = true;
          } else {
            must_load_on_demand = true;
          }
        }
      }

      return must_load_on_demand;
    };

    SaveStateHandler.prototype._selectInitialNodes = function (node_ids) {
      var select_count = 0;

      for (var _i = 0, node_ids_2 = node_ids; _i < node_ids_2.length; _i++) {
        var node_id = node_ids_2[_i];
        var node = this.tree_widget.getNodeById(node_id);

        if (node) {
          select_count += 1;

          if (this.tree_widget.select_node_handler) {
            this.tree_widget.select_node_handler.addToSelection(node);
          }
        }
      }

      return select_count !== 0;
    };

    SaveStateHandler.prototype._resetSelection = function () {
      var select_node_handler = this.tree_widget.select_node_handler;

      if (select_node_handler) {
        var selected_nodes = select_node_handler.getSelectedNodes();
        selected_nodes.forEach(function (node) {
          select_node_handler.removeFromSelection(node);
        });
      }
    };

    SaveStateHandler.prototype._setInitialStateOnDemand = function (node_ids_param, selected_nodes, cb_finished) {
      var _this = this;

      var loading_count = 0;
      var node_ids = node_ids_param;

      var openNodes = function openNodes() {
        var new_nodes_ids = [];

        for (var _i = 0, node_ids_3 = node_ids; _i < node_ids_3.length; _i++) {
          var node_id = node_ids_3[_i];

          var node = _this.tree_widget.getNodeById(node_id);

          if (!node) {
            new_nodes_ids.push(node_id);
          } else {
            if (!node.is_loading) {
              if (node.load_on_demand) {
                loadAndOpenNode(node);
              } else {
                _this.tree_widget._openNode(node, false, null);
              }
            }
          }
        }

        node_ids = new_nodes_ids;

        if (_this._selectInitialNodes(selected_nodes)) {
          _this.tree_widget._refreshElements(null);
        }

        if (loading_count === 0) {
          cb_finished();
        }
      };

      var loadAndOpenNode = function loadAndOpenNode(node) {
        loading_count += 1;

        _this.tree_widget._openNode(node, false, function () {
          loading_count -= 1;
          openNodes();
        });
      };

      openNodes();
    };

    SaveStateHandler.prototype.getKeyName = function () {
      if (typeof this.tree_widget.options.saveState === "string") {
        return this.tree_widget.options.saveState;
      } else {
        return "tree";
      }
    };

    SaveStateHandler.prototype.supportsLocalStorage = function () {
      var testSupport = function testSupport() {
        // Is local storage supported?
        if (localStorage == null) {
          return false;
        } else {
          // Check if it's possible to store an item. Safari does not allow this in private browsing mode.
          try {
            var key = "_storage_test";
            sessionStorage.setItem(key, "value");
            sessionStorage.removeItem(key);
          } catch (error) {
            return false;
          }

          return true;
        }
      };

      if (this._supportsLocalStorage == null) {
        this._supportsLocalStorage = testSupport();
      }

      return this._supportsLocalStorage;
    };

    return SaveStateHandler;
  }();

  exports["default"] = SaveStateHandler;
  /***/
},
/* 10 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  var ScrollHandler =
  /** @class */
  function () {
    function ScrollHandler(tree_widget) {
      this.tree_widget = tree_widget;
      this.previous_top = -1;
      this.is_initialized = false;
    }

    ScrollHandler.prototype.checkScrolling = function () {
      this._ensureInit();

      if (this.tree_widget.dnd_handler) {
        var hovered_area = this.tree_widget.dnd_handler.hovered_area;

        if (hovered_area && hovered_area.top !== this.previous_top) {
          this.previous_top = hovered_area.top;

          if (this.$scroll_parent) {
            this._handleScrollingWithScrollParent(hovered_area);
          } else {
            this._handleScrollingWithDocument(hovered_area);
          }
        }
      }
    };

    ScrollHandler.prototype.scrollTo = function (top) {
      this._ensureInit();

      if (this.$scroll_parent) {
        this.$scroll_parent[0].scrollTop = top;
      } else {
        var tree_top = this.tree_widget.$el.offset().top;
        $(document).scrollTop(top + tree_top);
      }
    };

    ScrollHandler.prototype.isScrolledIntoView = function ($element) {
      this._ensureInit();

      var element_bottom;
      var view_bottom;
      var element_top;
      var view_top;

      if (this.$scroll_parent) {
        view_top = 0;
        view_bottom = this.$scroll_parent.height();
        element_top = $element.offset().top - this.scroll_parent_top;
        element_bottom = element_top + $element.height();
      } else {
        view_top = $(window).scrollTop();
        view_bottom = view_top + $(window).height();
        element_top = $element.offset().top;
        element_bottom = element_top + $element.height();
      }

      return element_bottom <= view_bottom && element_top >= view_top;
    };

    ScrollHandler.prototype._initScrollParent = function () {
      var _this = this;

      var getParentWithOverflow = function getParentWithOverflow() {
        var css_attributes = ["overflow", "overflow-y"];

        var hasOverFlow = function hasOverFlow($el) {
          for (var _i = 0, css_attributes_1 = css_attributes; _i < css_attributes_1.length; _i++) {
            var attr = css_attributes_1[_i];
            var overflow_value = $el.css(attr);

            if (overflow_value === "auto" || overflow_value === "scroll") {
              return true;
            }
          }

          return false;
        };

        if (hasOverFlow(_this.tree_widget.$el)) {
          return _this.tree_widget.$el;
        }

        for (var _i = 0, _a = _this.tree_widget.$el.parents().get(); _i < _a.length; _i++) {
          var el = _a[_i];
          var $el = $(el);

          if (hasOverFlow($el)) {
            return $el;
          }
        }

        return null;
      };

      var setDocumentAsScrollParent = function setDocumentAsScrollParent() {
        _this.scroll_parent_top = 0;
        _this.$scroll_parent = null;
      };

      if (this.tree_widget.$el.css("position") === "fixed") {
        setDocumentAsScrollParent();
      }

      var $scroll_parent = getParentWithOverflow();

      if ($scroll_parent && $scroll_parent.length && $scroll_parent[0].tagName !== "HTML") {
        this.$scroll_parent = $scroll_parent;
        this.scroll_parent_top = this.$scroll_parent.offset().top;
      } else {
        setDocumentAsScrollParent();
      }

      this.is_initialized = true;
    };

    ScrollHandler.prototype._ensureInit = function () {
      if (!this.is_initialized) {
        this._initScrollParent();
      }
    };

    ScrollHandler.prototype._handleScrollingWithScrollParent = function (area) {
      if (!this.$scroll_parent) {
        return;
      } else {
        var distance_bottom = this.scroll_parent_top + this.$scroll_parent[0].offsetHeight - area.bottom;

        if (distance_bottom < 20) {
          this.$scroll_parent[0].scrollTop += 20;
          this.tree_widget.refreshHitAreas();
          this.previous_top = -1;
        } else if (area.top - this.scroll_parent_top < 20) {
          this.$scroll_parent[0].scrollTop -= 20;
          this.tree_widget.refreshHitAreas();
          this.previous_top = -1;
        }
      }
    };

    ScrollHandler.prototype._handleScrollingWithDocument = function (area) {
      var distance_top = area.top - $(document).scrollTop();

      if (distance_top < 20) {
        $(document).scrollTop($(document).scrollTop() - 20);
      } else if ($(window).height() - (area.bottom - $(document).scrollTop()) < 20) {
        $(document).scrollTop($(document).scrollTop() + 20);
      }
    };

    return ScrollHandler;
  }();

  exports["default"] = ScrollHandler;
  /***/
},
/* 11 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  exports.__esModule = true;

  var SelectNodeHandler =
  /** @class */
  function () {
    function SelectNodeHandler(tree_widget) {
      this.tree_widget = tree_widget;
      this.clear();
    }

    SelectNodeHandler.prototype.getSelectedNode = function () {
      var selected_nodes = this.getSelectedNodes();

      if (selected_nodes.length) {
        return selected_nodes[0];
      } else {
        return false;
      }
    };

    SelectNodeHandler.prototype.getSelectedNodes = function () {
      if (this.selected_single_node) {
        return [this.selected_single_node];
      } else {
        var selected_nodes = [];

        for (var id in this.selected_nodes) {
          if (this.selected_nodes.hasOwnProperty(id)) {
            var node = this.tree_widget.getNodeById(id);

            if (node) {
              selected_nodes.push(node);
            }
          }
        }

        return selected_nodes;
      }
    };

    SelectNodeHandler.prototype.getSelectedNodesUnder = function (parent) {
      if (this.selected_single_node) {
        if (parent.isParentOf(this.selected_single_node)) {
          return [this.selected_single_node];
        } else {
          return [];
        }
      } else {
        var selected_nodes = [];

        for (var id in this.selected_nodes) {
          if (this.selected_nodes.hasOwnProperty(id)) {
            var node = this.tree_widget.getNodeById(id);

            if (node && parent.isParentOf(node)) {
              selected_nodes.push(node);
            }
          }
        }

        return selected_nodes;
      }
    };

    SelectNodeHandler.prototype.isNodeSelected = function (node) {
      if (!node) {
        return false;
      } else if (node.id != null) {
        if (this.selected_nodes[node.id]) {
          return true;
        } else {
          return false;
        }
      } else if (this.selected_single_node) {
        return this.selected_single_node.element === node.element;
      } else {
        return false;
      }
    };

    SelectNodeHandler.prototype.clear = function () {
      this.selected_nodes = {};
      this.selected_single_node = null;
    };

    SelectNodeHandler.prototype.removeFromSelection = function (node, include_children) {
      var _this = this;

      if (include_children === void 0) {
        include_children = false;
      }

      if (node.id == null) {
        if (this.selected_single_node && node.element === this.selected_single_node.element) {
          this.selected_single_node = null;
        }
      } else {
        delete this.selected_nodes[node.id];

        if (include_children) {
          node.iterate(function () {
            delete _this.selected_nodes[node.id];
            return true;
          });
        }
      }
    };

    SelectNodeHandler.prototype.addToSelection = function (node) {
      if (node.id != null) {
        this.selected_nodes[node.id] = true;
      } else {
        this.selected_single_node = node;
      }
    };

    return SelectNodeHandler;
  }();

  exports["default"] = SelectNodeHandler;
  /***/
},
/* 12 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return function (d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  exports.__esModule = true;

  var node_1 = __webpack_require__(0);

  var NodeElement =
  /** @class */
  function () {
    function NodeElement(node, tree_widget) {
      this.init(node, tree_widget);
    }

    NodeElement.prototype.init = function (node, tree_widget) {
      this.node = node;
      this.tree_widget = tree_widget;

      if (!node.element) {
        node.element = this.tree_widget.element.get(0);
      }

      this.$element = $(node.element);
    };

    NodeElement.prototype.addDropHint = function (position) {
      if (position === node_1.Position.Inside) {
        return new BorderDropHint(this.$element);
      } else {
        return new GhostDropHint(this.node, this.$element, position);
      }
    };

    NodeElement.prototype.select = function () {
      var $li = this.getLi();
      $li.addClass("jqtree-selected");
      $li.attr("aria-selected", "true");
      var $span = this.getSpan();
      $span.attr("tabindex", this.tree_widget.options.tabIndex);
      $span.focus();
    };

    NodeElement.prototype.deselect = function () {
      var $li = this.getLi();
      $li.removeClass("jqtree-selected");
      $li.attr("aria-selected", "false");
      var $span = this.getSpan();
      $span.removeAttr("tabindex");
      $span.blur();
    };

    NodeElement.prototype.getUl = function () {
      return this.$element.children("ul:first");
    };

    NodeElement.prototype.getSpan = function () {
      return this.$element.children(".jqtree-element").find("span.jqtree-title");
    };

    NodeElement.prototype.getLi = function () {
      return this.$element;
    };

    return NodeElement;
  }();

  exports.NodeElement = NodeElement;

  var FolderElement =
  /** @class */
  function (_super) {
    __extends(FolderElement, _super);

    function FolderElement() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    FolderElement.prototype.open = function (on_finished, slide, animationSpeed) {
      var _this = this;

      if (slide === void 0) {
        slide = true;
      }

      if (animationSpeed === void 0) {
        animationSpeed = "fast";
      }

      if (!this.node.is_open) {
        this.node.is_open = true;
        var $button = this.getButton();
        $button.removeClass("jqtree-closed");
        $button.html("");
        var button_el = $button.get(0);

        if (button_el) {
          var icon = this.tree_widget.renderer.opened_icon_element.cloneNode(false);
          button_el.appendChild(icon);
        }

        var doOpen = function doOpen() {
          var $li = _this.getLi();

          $li.removeClass("jqtree-closed");

          var $span = _this.getSpan();

          $span.attr("aria-expanded", "true");

          if (on_finished) {
            on_finished(_this.node);
          }

          _this.tree_widget._triggerEvent("tree.open", {
            node: _this.node
          });
        };

        if (slide) {
          this.getUl().slideDown(animationSpeed, doOpen);
        } else {
          this.getUl().show();
          doOpen();
        }
      }
    };

    FolderElement.prototype.close = function (slide, animationSpeed) {
      var _this = this;

      if (slide === void 0) {
        slide = true;
      }

      if (animationSpeed === void 0) {
        animationSpeed = "fast";
      }

      if (this.node.is_open) {
        this.node.is_open = false;
        var $button = this.getButton();
        $button.addClass("jqtree-closed");
        $button.html("");
        var button_el = $button.get(0);

        if (button_el) {
          var icon = this.tree_widget.renderer.closed_icon_element.cloneNode(false);
          button_el.appendChild(icon);
        }

        var doClose = function doClose() {
          var $li = _this.getLi();

          $li.addClass("jqtree-closed");

          var $span = _this.getSpan();

          $span.attr("aria-expanded", "false");

          _this.tree_widget._triggerEvent("tree.close", {
            node: _this.node
          });
        };

        if (slide) {
          this.getUl().slideUp(animationSpeed, doClose);
        } else {
          this.getUl().hide();
          doClose();
        }
      }
    };

    FolderElement.prototype.addDropHint = function (position) {
      if (!this.node.is_open && position === node_1.Position.Inside) {
        return new BorderDropHint(this.$element);
      } else {
        return new GhostDropHint(this.node, this.$element, position);
      }
    };

    FolderElement.prototype.getButton = function () {
      return this.$element.children(".jqtree-element").find("a.jqtree-toggler");
    };

    return FolderElement;
  }(NodeElement);

  exports.FolderElement = FolderElement;

  var BorderDropHint =
  /** @class */
  function () {
    function BorderDropHint($element) {
      var $div = $element.children(".jqtree-element");
      var width = $element.width() - 4;
      this.$hint = $('<span class="jqtree-border"></span>');
      $div.append(this.$hint);
      this.$hint.css({
        width: width,
        height: $div.outerHeight() - 4
      });
    }

    BorderDropHint.prototype.remove = function () {
      this.$hint.remove();
    };

    return BorderDropHint;
  }();

  exports.BorderDropHint = BorderDropHint;

  var GhostDropHint =
  /** @class */
  function () {
    function GhostDropHint(node, $element, position) {
      this.$element = $element;
      this.node = node;
      this.$ghost = $("<li class=\"jqtree_common jqtree-ghost\"><span class=\"jqtree_common jqtree-circle\"></span>\n            <span class=\"jqtree_common jqtree-line\"></span></li>");

      if (position === node_1.Position.After) {
        this.moveAfter();
      } else if (position === node_1.Position.Before) {
        this.moveBefore();
      } else if (position === node_1.Position.Inside) {
        if (node.isFolder() && node.is_open) {
          this.moveInsideOpenFolder();
        } else {
          this.moveInside();
        }
      }
    }

    GhostDropHint.prototype.remove = function () {
      this.$ghost.remove();
    };

    GhostDropHint.prototype.moveAfter = function () {
      this.$element.after(this.$ghost);
    };

    GhostDropHint.prototype.moveBefore = function () {
      this.$element.before(this.$ghost);
    };

    GhostDropHint.prototype.moveInsideOpenFolder = function () {
      $(this.node.children[0].element).before(this.$ghost);
    };

    GhostDropHint.prototype.moveInside = function () {
      this.$element.after(this.$ghost);
      this.$ghost.addClass("jqtree-inside");
    };

    return GhostDropHint;
  }();

  exports.GhostDropHint = GhostDropHint;
  /***/
},,
/* 13 */

/* 14 */

/***/
function (module, exports, __webpack_require__) {
  module.exports = __webpack_require__(3);
  /***/
}
/******/
]);

/***/ }),

/***/ "./resources/assets/js/backend/modules/category.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/backend/modules/category.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bower_jqTree_build_tree_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bower/jqTree/build/tree.jquery */ "./resources/assets/bower/jqTree/build/tree.jquery.js");
/* harmony import */ var _bower_jqTree_build_tree_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bower_jqTree_build_tree_jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../partials/notification */ "./resources/assets/js/backend/partials/notification.js");
/* harmony import */ var _partials_uploadfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../partials/uploadfile */ "./resources/assets/js/backend/partials/uploadfile.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.complete.esm.js");
// @flow


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Category = /*#__PURE__*/function () {
  function Category() {
    _classCallCheck(this, Category);
  }

  _createClass(Category, [{
    key: "index",
    value: function index(items, item) {
      var _$ = window.$;
      var notification = new _partials_notification__WEBPACK_IMPORTED_MODULE_1__["default"]();
      notification.setText(window.lang.get('repositories.sweetalert.question_category'));
      this.jqTree(items, item);

      _$('.grid-editor').gridEditor({
        new_row_layouts: [[4, 4, 4], [6, 6], [9, 3]],
        content_types: ['summernote']
      });

      this.summernote();
      notification.destroyRow(null, 'li');
      notification.flashMessage();
      var uploadfile = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_2__["default"]();
      uploadfile.init();
      this.addYoutube();
    }
  }, {
    key: "addYoutube",
    value: function addYoutube() {
      var _$ = window.$;

      _$('#link-youtube a').click(function () {
        _$('#link-youtube').append("\n            <br>\n            <input class=\"form-control\" placeholder=\"".concat(window.lang.get('repositories.label.link_youtube'), "\" name=\"link_youtube[]\" type=\"text\">\n        "));
      });
    }
  }, {
    key: "sortImages",
    value: function sortImages() {
      var _$ = window.$;
      sortablejs__WEBPACK_IMPORTED_MODULE_3__["default"].create(dropzone, {
        handle: ".dz-preview"
      });
    }
  }, {
    key: "summernote",
    value: function summernote() {
      var _$ = window.$;
      var uploadfile = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_2__["default"]();
      uploadfile.init();

      _$('.textarea-summernote').summernote({
        toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontname', ['fontname']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['table', ['table']], ['insert', ['link', 'picture', 'video', 'hr']], ['view', ['fullscreen', 'codeview']], ['mybutton', ['layout']], ['help', ['help']]],
        height: 250,
        buttons: {
          layout: this.insertLayout
        },
        callbacks: {
          onImageUpload: function onImageUpload(files) {
            uploadfile.sendImage(files[0], laroute.route('backend.summernote.image'), _$(this));
          }
        }
      });
    }
  }, {
    key: "insertLayout",
    value: function insertLayout(context) {
      var _$ = window.$;
      var ui = _$.summernote.ui; // create button

      var button = ui.button({
        contents: '<i class="ion-archive"/>',
        tooltip: 'insert layout',
        click: function click() {
          var node = _$(_$('.grid-editor').gridEditor('getHtml'))[0];

          if (!node) {
            return;
          }

          context.invoke('editor.insertNode', node);
        }
      });
      return button.render();
    }
  }, {
    key: "jqTree",
    value: function jqTree(items, item) {
      var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#list';
      var _$ = window.$;

      _$(selector).tree({
        closedIcon: _$('<i class="ion-plus"></i>'),
        openedIcon: _$('<i class="ion-minus"></i>'),
        data: items,
        dragAndDrop: false,
        autoOpen: false,
        selectable: false,
        onCreateLi: function onCreateLi(node, $li) {
          if (node.locked) {
            $li.find('.jqtree-title.jqtree_common').append("<label class=\"btn btn-warning btn-xs pull-right\">\n              <i class=\"ion-ios-locked\"></i>\n              </label>");
          }

          if (item != 0 && item.id == node.id) {
            return false;
          }

          $li.find('.jqtree-element').append('<div class="btn-group pull-right tools">\
            <a href="' + laroute.route('backend.category.edit', {
            category: node.id
          }) + '" class="btn btn-default btn-xs"><i class="ion-edit"></i></a> \
            <a href="' + laroute.route('backend.category.destroy', {
            category: node.id
          }) + '" class="btn btn-xs btn-danger delete-action"><i class="ion-close-circled"></i></a>\
            </div>');
        }
      });
    }
  }]);

  return Category;
}();

/* harmony default export */ __webpack_exports__["default"] = (window.category = new Category());

/***/ }),

/***/ "./resources/assets/js/backend/partials/notification.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/backend/partials/notification.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
// @flow


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Notification = /*#__PURE__*/function () {
  function Notification() {
    _classCallCheck(this, Notification);

    this._text = '';
  }

  _createClass(Notification, [{
    key: "setText",
    value: function setText(text) {
      this._text = text;
    }
  }, {
    key: "destroyRow",
    value: function destroyRow() {
      var datatable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var selector = arguments.length > 2 ? arguments[2] : undefined;
      var _$ = window.$;
      var self = this;
      var el = selector || 'a.delete-action';

      _$(document).on('click', el, function (e) {
        var $this = _$(this);

        e.preventDefault();

        var deleteUrl = _$(this).attr('href');

        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
          title: window.lang.get('repositories.sweetalert.question'),
          text: self._text,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: window.lang.get('repositories.sweetalert.ok'),
          cancelButtonText: window.lang.get('repositories.sweetalert.cancel')
        }).then(function () {
          _$.ajax({
            type: 'DELETE',
            url: deleteUrl,
            success: function success(response) {
              self.alertNotification(response.message, true);

              if (datatable) {
                datatable.refresh();
              }

              if (!datatable && remove) {
                $this.closest(remove).fadeOut(400, function () {
                  $this.remove();
                });
              }
            },
            error: function error(response) {
              self.alertNotification(response.responseJSON.message, false);
            }
          });
        }, function (dismiss) {
          return false;
        });
      });
    }
  }, {
    key: "alertNotification",
    value: function alertNotification(message) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      var _$ = window.$;
      var alertType = status ? 'alert-success' : 'alert-danger';

      _$('#notification .alert-content').html('');

      _$(message).each(function (index, element) {
        _$('#notification .alert-content').append('<strong>' + element + '</strong><br>');
      });

      _$('#notification').toggleClass('hidden').removeClass('alert-success alert-danger').addClass(alertType).delay(delay).show(function () {
        _$(this).toggleClass('hidden');
      });
    }
  }, {
    key: "flashMessage",
    value: function flashMessage() {
      var message = window.flash_message;

      if (typeof message.status !== 'undefined') {
        var e = message;
        this.alertNotification(e.message, e.status);
      }
    }
  }]);

  return Notification;
}();

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./resources/assets/js/backend/partials/uploadfile.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/backend/partials/uploadfile.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @flow


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Upload = /*#__PURE__*/function () {
  function Upload() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#image';
    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#img-upload';

    _classCallCheck(this, Upload);

    this._el = window.$(el);
    this._img = window.$(img);
  }

  _createClass(Upload, [{
    key: "init",
    value: function init() {
      var _$ = window.$;
      var self = this;

      this._el.change(function () {
        var label = _$(this).val().replace(/\\/g, '/').replace(/.*\//, '');

        var input = _$(this).parents('.input-group').find(':text');

        if (input.length) {
          input.val(label);
        }

        self.readURL(this);
      });
    }
  }, {
    key: "readURL",
    value: function readURL(input) {
      var _$ = window.$;
      var self = this;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          self._img.attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
      }
    }
  }, {
    key: "sendImage",
    value: function sendImage(file, url, element, callback) {
      var _$ = window.$;
      var data = new FormData();
      data.append("image", file);

      _$.ajax({
        data: data,
        type: "POST",
        url: url,
        cache: false,
        contentType: false,
        processData: false,
        success: function success(data) {
          element.summernote("insertImage", data.url);
        },
        error: function error(xhr, textStatus, _error) {
          alert(xhr.responseJSON.errors.image.toString() || xhr.responseJSON.message);
        }
      });

      if (callback) {
        callback.apply(this);
      }
    }
  }]);

  return Upload;
}();

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ 4:
/*!***************************************************************!*\
  !*** multi ./resources/assets/js/backend/modules/category.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/app/resources/assets/js/backend/modules/category.js */"./resources/assets/js/backend/modules/category.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5jb21wbGV0ZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9ib3dlci9qcVRyZWUvYnVpbGQvdHJlZS5qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrZW5kL21vZHVsZXMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrZW5kL3BhcnRpYWxzL25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2tlbmQvcGFydGlhbHMvdXBsb2FkZmlsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJQb3NpdGlvbiIsInBvc2l0aW9uX25hbWVzIiwiYmVmb3JlIiwiQmVmb3JlIiwiYWZ0ZXIiLCJBZnRlciIsImluc2lkZSIsIkluc2lkZSIsIm5vbmUiLCJOb25lIiwiZ2V0UG9zaXRpb25OYW1lIiwicG9zaXRpb24iLCJuYW1lXzEiLCJnZXRQb3NpdGlvbiIsIk5vZGUiLCJpc19yb290Iiwibm9kZV9jbGFzcyIsInNldERhdGEiLCJjaGlsZHJlbiIsInBhcmVudCIsImlkX21hcHBpbmciLCJ0cmVlIiwiX3RoaXMiLCJzZXROYW1lIiwia2V5IiwidmFsdWUiLCJsb2FkRnJvbURhdGEiLCJkYXRhIiwicmVtb3ZlQ2hpbGRyZW4iLCJfaSIsImRhdGFfMSIsImxlbmd0aCIsIm5vZGUiLCJhZGRDaGlsZCIsInB1c2giLCJfc2V0UGFyZW50IiwiYWRkQ2hpbGRBdFBvc2l0aW9uIiwiaW5kZXgiLCJzcGxpY2UiLCJyZW1vdmVDaGlsZCIsIl9yZW1vdmVDaGlsZCIsImdldENoaWxkSW5kZXgiLCIkIiwiaW5BcnJheSIsImhhc0NoaWxkcmVuIiwiaXNGb2xkZXIiLCJsb2FkX29uX2RlbWFuZCIsIml0ZXJhdGUiLCJjYWxsYmFjayIsIl9pdGVyYXRlIiwibGV2ZWwiLCJfYSIsImNoaWxkIiwicmVzdWx0IiwibW92ZU5vZGUiLCJtb3ZlZF9ub2RlIiwidGFyZ2V0X25vZGUiLCJpc1BhcmVudE9mIiwiZ2V0RGF0YSIsImluY2x1ZGVfcGFyZW50IiwiZ2V0RGF0YUZyb21Ob2RlcyIsIm5vZGVzIiwibWFwIiwidG1wX25vZGUiLCJrIiwiaW5kZXhPZiIsInYiLCJnZXROb2RlQnlOYW1lIiwiZ2V0Tm9kZUJ5Q2FsbGJhY2siLCJhZGRBZnRlciIsIm5vZGVfaW5mbyIsImNoaWxkX2luZGV4IiwiYWRkQmVmb3JlIiwiYWRkUGFyZW50IiwibmV3X3BhcmVudCIsIm9yaWdpbmFsX3BhcmVudCIsInJlbW92ZSIsImFwcGVuZCIsInByZXBlbmQiLCJnZXRMZXZlbCIsImdldE5vZGVCeUlkIiwibm9kZV9pZCIsImFkZE5vZGVUb0luZGV4IiwiaWQiLCJyZW1vdmVOb2RlRnJvbUluZGV4IiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwicHJldmlvdXNfaW5kZXgiLCJnZXROZXh0U2libGluZyIsIm5leHRfaW5kZXgiLCJnZXROb2Rlc0J5UHJvcGVydHkiLCJmaWx0ZXIiLCJmIiwiZ2V0TmV4dE5vZGUiLCJpbmNsdWRlX2NoaWxkcmVuIiwiaXNfb3BlbiIsIm5leHRfc2libGluZyIsImdldFByZXZpb3VzTm9kZSIsInByZXZpb3VzX3NpYmxpbmciLCJnZXRMYXN0Q2hpbGQiLCJnZXRQYXJlbnQiLCJsYXN0X2NoaWxkIiwiaW5pdEZyb21EYXRhIiwiYWRkTm9kZSIsIm5vZGVfZGF0YSIsImFkZENoaWxkcmVuIiwiY2hpbGRyZW5fZGF0YSIsImNoaWxkcmVuX2RhdGFfMSIsImlzSW50IiwiaXNGdW5jdGlvbiIsImh0bWxfZXNjYXBlIiwidGV4dCIsInJlcGxhY2UiLCJnZXRCb29sU3RyaW5nIiwiU2ltcGxlV2lkZ2V0IiwiZWwiLCJvcHRpb25zIiwiJGVsIiwiZGVmYXVsdHMiLCJjb25zdHJ1Y3RvciIsImV4dGVuZCIsInJlZ2lzdGVyIiwid2lkZ2V0X2NsYXNzIiwid2lkZ2V0X25hbWUiLCJnZXREYXRhS2V5IiwiZ2V0V2lkZ2V0RGF0YSIsImRhdGFfa2V5Iiwid2lkZ2V0IiwiY3JlYXRlV2lkZ2V0IiwiZXhpc3Rpbmdfd2lkZ2V0IiwiX2luaXQiLCJkZXN0cm95V2lkZ2V0IiwiZGVzdHJveSIsInJlbW92ZURhdGEiLCJjYWxsRnVuY3Rpb24iLCJmdW5jdGlvbl9uYW1lIiwiYXJncyIsIndpZGdldF9mdW5jdGlvbiIsImFwcGx5IiwiZm4iLCJhcmd1bWVudDEiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJfZGVpbml0IiwiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJiIiwiX18iLCJjcmVhdGUiLCJ2ZXJzaW9uXzEiLCJkcmFnX2FuZF9kcm9wX2hhbmRsZXJfMSIsImVsZW1lbnRzX3JlbmRlcmVyXzEiLCJrZXlfaGFuZGxlcl8xIiwibW91c2Vfd2lkZ2V0XzEiLCJzYXZlX3N0YXRlX2hhbmRsZXJfMSIsInNjcm9sbF9oYW5kbGVyXzEiLCJzZWxlY3Rfbm9kZV9oYW5kbGVyXzEiLCJzaW1wbGVfd2lkZ2V0XzEiLCJub2RlXzEiLCJ1dGlsXzEiLCJub2RlX2VsZW1lbnRfMSIsIkpxVHJlZVdpZGdldCIsIl9zdXBlciIsInRvZ2dsZSIsInNsaWRlX3BhcmFtIiwic2xpZGUiLCJjbG9zZU5vZGUiLCJvcGVuTm9kZSIsImVsZW1lbnQiLCJnZXRUcmVlIiwic2VsZWN0Tm9kZSIsIl9zZWxlY3ROb2RlIiwiZ2V0U2VsZWN0ZWROb2RlIiwic2VsZWN0X25vZGVfaGFuZGxlciIsInRvSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsInBhcmVudF9ub2RlIiwiX2xvYWREYXRhIiwibG9hZERhdGFGcm9tVXJsIiwicGFyYW0xIiwicGFyYW0yIiwicGFyYW0zIiwidHlwZSIsIl9sb2FkRGF0YUZyb21VcmwiLCJyZWxvYWQiLCJvbl9maW5pc2hlZCIsImdldE5vZGVCeUh0bWxFbGVtZW50IiwiX2dldE5vZGUiLCJwYXJzZVBhcmFtcyIsIl9vcGVuTm9kZSIsIkZvbGRlckVsZW1lbnQiLCJjbG9zZSIsImFuaW1hdGlvblNwZWVkIiwiX3NhdmVTdGF0ZSIsImlzRHJhZ2dpbmciLCJkbmRfaGFuZGxlciIsImlzX2RyYWdnaW5nIiwicmVmcmVzaEhpdEFyZWFzIiwicmVmcmVzaCIsImFkZE5vZGVBZnRlciIsIm5ld19ub2RlX2luZm8iLCJleGlzdGluZ19ub2RlIiwibmV3X25vZGUiLCJfcmVmcmVzaEVsZW1lbnRzIiwiYWRkTm9kZUJlZm9yZSIsImFkZFBhcmVudE5vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlRnJvbVNlbGVjdGlvbiIsImFwcGVuZE5vZGUiLCJwYXJlbnRfbm9kZV9wYXJhbSIsInByZXBlbmROb2RlIiwidXBkYXRlTm9kZSIsImlkX2lzX2NoYW5nZWQiLCJyZW5kZXJlciIsInJlbmRlckZyb21Ob2RlIiwiX3NlbGVjdEN1cnJlbnROb2RlIiwicG9zaXRpb25faW5kZXgiLCJnZXRTdGF0ZUZyb21TdG9yYWdlIiwic2F2ZV9zdGF0ZV9oYW5kbGVyIiwiYWRkVG9TZWxlY3Rpb24iLCJfZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlIiwic2VsZWN0IiwiZ2V0U2VsZWN0ZWROb2RlcyIsImlzTm9kZVNlbGVjdGVkIiwiZGVzZWxlY3QiLCJzY3JvbGxUb05vZGUiLCJzY3JvbGxfaGFuZGxlciIsIiRlbGVtZW50IiwidG9wXzEiLCJvZmZzZXQiLCJ0b3AiLCJzY3JvbGxUbyIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldE9wdGlvbiIsIm9wdGlvbiIsIm1vdmVEb3duIiwia2V5X2hhbmRsZXIiLCJtb3ZlVXAiLCJnZXRWZXJzaW9uIiwidGVzdEdlbmVyYXRlSGl0QXJlYXMiLCJtb3Zpbmdfbm9kZSIsImN1cnJlbnRfaXRlbSIsImdlbmVyYXRlSGl0QXJlYXMiLCJoaXRfYXJlYXMiLCJfdHJpZ2dlckV2ZW50IiwiZXZlbnRfbmFtZSIsInZhbHVlcyIsImV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwiZG9PcGVuTm9kZSIsIl9ub2RlIiwiX3NsaWRlIiwiX29uX2ZpbmlzaGVkIiwiZm9sZGVyX2VsZW1lbnQiLCJvcGVuIiwiX2xvYWRGb2xkZXJPbkRlbWFuZCIsInBhcmVudF8xIiwiZnJvbV9ub2RlIiwicmVuZGVyIiwiTm9kZUVsZW1lbnQiLCJfZ2V0Tm9kZUVsZW1lbnQiLCJfY29udGFpbnNFbGVtZW50IiwibW91c2VfZGVsYXkiLCJpc19pbml0aWFsaXplZCIsInJ0bCIsIl9nZXRSdGxPcHRpb24iLCJjbG9zZWRJY29uIiwiX2dldERlZmF1bHRDbG9zZWRJY29uIiwic2F2ZVN0YXRlIiwiRHJhZ0FuZERyb3BIYW5kbGVyIiwiZHJhZ0FuZERyb3AiLCJfaW5pdERhdGEiLCJjbGljayIsInByb3h5IiwiX2NsaWNrIiwiZGJsY2xpY2siLCJfZGJsY2xpY2siLCJ1c2VDb250ZXh0TWVudSIsIm9uIiwiX2NvbnRleHRtZW51IiwiZW1wdHkiLCJvZmYiLCJkZWluaXQiLCJfbW91c2VDYXB0dXJlIiwicG9zaXRpb25faW5mbyIsIm1vdXNlQ2FwdHVyZSIsIl9tb3VzZVN0YXJ0IiwibW91c2VTdGFydCIsIl9tb3VzZURyYWciLCJtb3VzZURyYWciLCJjaGVja1Njcm9sbGluZyIsIl9tb3VzZVN0b3AiLCJtb3VzZVN0b3AiLCJkYXRhX3VybCIsIl9nZXREYXRhVXJsSW5mbyIsImRhdGFVcmwiLCJnZXRVcmxGcm9tU3RyaW5nIiwidXJsX2luZm8iLCJ1cmwiLCJzZWxlY3RlZF9ub2RlX2lkIiwiX2dldE5vZGVJZFRvQmVTZWxlY3RlZCIsInNlbGVjdGVkX25vZGUiLCJnZXROb2RlSWRUb0JlU2VsZWN0ZWQiLCJfaW5pdFRyZWUiLCJkb0luaXQiLCJub2RlQ2xhc3MiLCJjbGVhciIsIm11c3RfbG9hZF9vbl9kZW1hbmQiLCJfc2V0SW5pdGlhbFN0YXRlIiwiX3NldEluaXRpYWxTdGF0ZU9uRGVtYW5kIiwicmVzdG9yZVN0YXRlIiwibXVzdF9sb2FkX29uX2RlbWFuZF8xIiwiYXV0b09wZW5Ob2RlcyIsImF1dG9PcGVuIiwibWF4X2xldmVsIiwiX2dldEF1dG9PcGVuTWF4TGV2ZWwiLCJpc19yZXN0b3JlZCIsImNiX2ZpbmlzaGVkIiwic2V0SW5pdGlhbFN0YXRlT25EZW1hbmQiLCJsb2FkaW5nX2NvdW50IiwibG9hZEFuZE9wZW5Ob2RlIiwib3Blbk5vZGVzIiwiaXNfbG9hZGluZyIsInBhcnNlSW50IiwiZSIsImNsaWNrX3RhcmdldCIsIl9nZXRDbGlja1RhcmdldCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXZlbnRfMSIsImNsaWNrX2V2ZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiJHRhcmdldCIsIiRidXR0b24iLCJjbG9zZXN0IiwiJGxpIiwiJGRpdiIsIm5vZGVfZWxlbWVudCIsIl9kZXNlbGVjdEN1cnJlbnROb2RlIiwiZGF0YV9ydGwiLCJfbm90aWZ5TG9hZGluZyIsIm9uTG9hZGluZyIsIm11c3RfdG9nZ2xlIiwiY2FuU2VsZWN0Iiwib25DYW5TZWxlY3ROb2RlIiwic2VsZWN0YWJsZSIsIm9wZW5QYXJlbnRzIiwicHJldmlvdXNfbm9kZSIsImRlc2VsZWN0ZWRfbm9kZSIsInRyZWVfZGF0YSIsIl9kZXNlbGVjdE5vZGVzIiwiX2xvYWRTdWJ0cmVlIiwic2VsZWN0ZWRfbm9kZXNfdW5kZXJfcGFyZW50IiwiZ2V0U2VsZWN0ZWROb2Rlc1VuZGVyIiwic2VsZWN0ZWRfbm9kZXNfdW5kZXJfcGFyZW50XzEiLCJ1cmxfaW5mb19wYXJhbSIsImFkZExvYWRpbmdDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlTG9hZGluZ0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwYXJzZVVybEluZm8iLCJtZXRob2QiLCJoYW5kZUxvYWREYXRhIiwiZ2V0RGF0YUZyb21SZXNwb25zZSIsInJlc3BvbnNlIiwiaXNBcnJheSIsInBhcnNlSlNPTiIsImZpbHRlckRhdGEiLCJkYXRhRmlsdGVyIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwib25Mb2FkRmFpbGVkIiwibG9hZERhdGFGcm9tVXJsSW5mbyIsIl91cmxfaW5mbyIsImFqYXgiLCJ0b1VwcGVyQ2FzZSIsImNhY2hlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJvblNldFN0YXRlRnJvbVN0b3JhZ2UiLCJvbkdldFN0YXRlRnJvbVN0b3JhZ2UiLCJvbkNyZWF0ZUxpIiwib25Jc01vdmVIYW5kbGUiLCJvbkNhbk1vdmUiLCJvbkNhbk1vdmVUbyIsImF1dG9Fc2NhcGUiLCJvcGVuZWRJY29uIiwia2V5Ym9hcmRTdXBwb3J0Iiwib3BlbkZvbGRlckRlbGF5Iiwib25EcmFnTW92ZSIsIm9uRHJhZ1N0b3AiLCJidXR0b25MZWZ0IiwidGFiSW5kZXgiLCJ2ZXJzaW9uIiwidHJlZV93aWRnZXQiLCJob3ZlcmVkX2FyZWEiLCIkZ2hvc3QiLCJtdXN0Q2FwdHVyZUVsZW1lbnQiLCJoaXRfYXJlYXNfZ2VuZXJhdG9yIiwiSGl0QXJlYXNHZW5lcmF0b3IiLCJnZXRUcmVlRGltZW5zaW9ucyIsImJvdHRvbSIsImdlbmVyYXRlIiwibm9kZV9uYW1lIiwiZHJhZ19lbGVtZW50IiwiRHJhZ0VsZW1lbnQiLCJwYWdlX3giLCJsZWZ0IiwicGFnZV95IiwibW92ZSIsImFyZWEiLCJmaW5kSG92ZXJlZEFyZWEiLCJjYW5fbW92ZV90byIsImNhbk1vdmVUb0FyZWEiLCJzdG9wT3BlbkZvbGRlclRpbWVyIiwibXVzdE9wZW5Gb2xkZXJUaW1lciIsInN0YXJ0T3BlbkZvbGRlclRpbWVyIiwidXBkYXRlRHJvcEhpbnQiLCJyZW1vdmVIb3ZlciIsInJlbW92ZURyb3BIaW50Iiwib3JpZ2luYWxfZXZlbnQiLCJtb3ZlSXRlbSIsInJlbW92ZUhpdEFyZWFzIiwiaXMiLCJwb3NpdGlvbl9uYW1lIiwicHJldmlvdXNfZ2hvc3QiLCJ4IiwieSIsImRpbWVuc2lvbnMiLCJyaWdodCIsImxvdyIsImhpZ2giLCJtaWQiLCJhZGREcm9wSGludCIsImZvbGRlciIsIm9wZW5Gb2xkZXIiLCJvcGVuX2ZvbGRlcl90aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3ZlZF9ub2RlXzEiLCJ0YXJnZXRfbm9kZV8xIiwicG9zaXRpb25fMSIsInByZXZpb3VzX3BhcmVudCIsImRvTW92ZSIsIm1vdmVfaW5mbyIsImRvX21vdmUiLCJ3aWR0aCIsImhlaWdodCIsIlZpc2libGVOb2RlSXRlcmF0b3IiLCJpc19maXJzdF9ub2RlIiwiX2l0ZXJhdGVOb2RlIiwibmV4dF9ub2RlIiwibXVzdF9pdGVyYXRlX2luc2lkZSIsImhhbmRsZUZpcnN0Tm9kZSIsImhhbmRsZU5vZGUiLCJoYW5kbGVPcGVuRm9sZGVyIiwiaGFuZGxlQ2xvc2VkRm9sZGVyIiwiY2hpbGRyZW5fbGVuZ3RoXzEiLCJmb3JFYWNoIiwiXyIsImhhbmRsZUFmdGVyT3BlbkZvbGRlciIsImN1cnJlbnRfbm9kZSIsInRyZWVfYm90dG9tIiwicG9zaXRpb25zIiwibGFzdF90b3AiLCJwcmV2aW91c190b3AiLCJncm91cCIsInBvc2l0aW9uc18xIiwiZ2VuZXJhdGVIaXRBcmVhc0Zvckdyb3VwIiwiYWRkUG9zaXRpb24iLCJnZXRUb3AiLCJwb3NpdGlvbnNfaW5fZ3JvdXAiLCJwb3NpdGlvbl9jb3VudCIsIk1hdGgiLCJtaW4iLCJhcmVhX2hlaWdodCIsInJvdW5kIiwiYXJlYV90b3AiLCJvZmZzZXRfeCIsIm9mZnNldF95IiwiJHRyZWUiLCJjc3MiLCJFbGVtZW50c1JlbmRlcmVyIiwib3BlbmVkX2ljb25fZWxlbWVudCIsImNyZWF0ZUJ1dHRvbkVsZW1lbnQiLCJjbG9zZWRfaWNvbl9lbGVtZW50IiwicmVuZGVyRnJvbVJvb3QiLCJjcmVhdGVEb21FbGVtZW50cyIsIiRwcmV2aW91c19saSIsImxpIiwiY3JlYXRlTGkiLCJhdHRhY2hOb2RlRGF0YSIsImlzX3Jvb3Rfbm9kZSIsInVsIiwiY3JlYXRlVWwiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuXzEiLCJjbGFzc19zdHJpbmciLCJyb2xlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiaXNfc2VsZWN0ZWQiLCJCb29sZWFuIiwiY3JlYXRlRm9sZGVyTGkiLCJjcmVhdGVOb2RlTGkiLCJidXR0b25fY2xhc3NlcyIsImdldEJ1dHRvbkNsYXNzZXMiLCJmb2xkZXJfY2xhc3NlcyIsImdldEZvbGRlckNsYXNzZXMiLCJpY29uX2VsZW1lbnQiLCJkaXYiLCJidXR0b25fbGluayIsImNsb25lTm9kZSIsImNyZWF0ZVRpdGxlU3BhbiIsImxpX2NsYXNzZXMiLCJqb2luIiwiaXNfZm9sZGVyIiwidGl0bGVfc3BhbiIsImNsYXNzZXMiLCJpbm5lckhUTUwiLCJlc2NhcGVJZk5lY2Vzc2FyeSIsImNyZWF0ZVRleHROb2RlIiwiS2V5SGFuZGxlciIsImhhbmRsZUtleURvd24iLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsImNhbkhhbmRsZUtleWJvYXJkIiwid2hpY2giLCJET1dOIiwiVVAiLCJSSUdIVCIsIkxFRlQiLCJpc1Njcm9sbGVkSW50b1ZpZXciLCJmaW5kIiwiaXNGb2N1c09uVHJlZSIsImFjdGl2ZV9lbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInRhZ05hbWUiLCJNb3VzZVdpZGdldCIsInNldE1vdXNlRGVsYXkiLCJfbW91c2VEb3duIiwiX3RvdWNoU3RhcnQiLCJpc19tb3VzZV9zdGFydGVkIiwiX21vdXNlX2RlbGF5X3RpbWVyIiwiX2lzX21vdXNlX2RlbGF5X21ldCIsIm1vdXNlX2Rvd25faW5mbyIsIiRkb2N1bWVudCIsIl9oYW5kbGVNb3VzZURvd24iLCJfZ2V0UG9zaXRpb25JbmZvIiwiX2hhbmRsZU1vdXNlVXAiLCJfaGFuZGxlU3RhcnRNb3VzZSIsIl9tb3VzZU1vdmUiLCJfdG91Y2hNb3ZlIiwiX21vdXNlVXAiLCJfdG91Y2hFbmQiLCJfc3RhcnRNb3VzZURlbGF5VGltZXIiLCJfaGFuZGxlTW91c2VNb3ZlIiwicGFnZVgiLCJwYWdlWSIsInRvdWNoX2V2ZW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwiU2F2ZVN0YXRlSGFuZGxlciIsInN1cHBvcnRzTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEtleU5hbWUiLCJqc29uX2RhdGEiLCJfbG9hZEZyb21TdG9yYWdlIiwiX3BhcnNlU3RhdGUiLCJnZXRPcGVuTm9kZUlkcyIsIm9wZW5fbm9kZXMiLCJnZXRTZWxlY3RlZE5vZGVJZHMiLCJfb3BlbkluaXRpYWxOb2RlcyIsIl9yZXNldFNlbGVjdGlvbiIsIl9zZWxlY3RJbml0aWFsTm9kZXMiLCJnZXRJdGVtIiwibm9kZV9pZHMiLCJub2RlX2lkc18xIiwic2VsZWN0X2NvdW50Iiwibm9kZV9pZHNfMiIsInNlbGVjdGVkX25vZGVzIiwibm9kZV9pZHNfcGFyYW0iLCJuZXdfbm9kZXNfaWRzIiwibm9kZV9pZHNfMyIsInRlc3RTdXBwb3J0Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiX3N1cHBvcnRzTG9jYWxTdG9yYWdlIiwiU2Nyb2xsSGFuZGxlciIsIl9lbnN1cmVJbml0IiwiJHNjcm9sbF9wYXJlbnQiLCJfaGFuZGxlU2Nyb2xsaW5nV2l0aFNjcm9sbFBhcmVudCIsIl9oYW5kbGVTY3JvbGxpbmdXaXRoRG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJ0cmVlX3RvcCIsImVsZW1lbnRfYm90dG9tIiwidmlld19ib3R0b20iLCJlbGVtZW50X3RvcCIsInZpZXdfdG9wIiwic2Nyb2xsX3BhcmVudF90b3AiLCJ3aW5kb3ciLCJfaW5pdFNjcm9sbFBhcmVudCIsImdldFBhcmVudFdpdGhPdmVyZmxvdyIsImNzc19hdHRyaWJ1dGVzIiwiaGFzT3ZlckZsb3ciLCJjc3NfYXR0cmlidXRlc18xIiwiYXR0ciIsIm92ZXJmbG93X3ZhbHVlIiwicGFyZW50cyIsInNldERvY3VtZW50QXNTY3JvbGxQYXJlbnQiLCJkaXN0YW5jZV9ib3R0b20iLCJvZmZzZXRIZWlnaHQiLCJkaXN0YW5jZV90b3AiLCJTZWxlY3ROb2RlSGFuZGxlciIsInNlbGVjdGVkX3NpbmdsZV9ub2RlIiwiaW5pdCIsIkJvcmRlckRyb3BIaW50IiwiR2hvc3REcm9wSGludCIsImdldExpIiwiJHNwYW4iLCJnZXRTcGFuIiwiZm9jdXMiLCJyZW1vdmVBdHRyIiwiYmx1ciIsImdldFVsIiwiZ2V0QnV0dG9uIiwiaHRtbCIsImJ1dHRvbl9lbCIsImljb24iLCJkb09wZW4iLCJzbGlkZURvd24iLCJzaG93IiwiZG9DbG9zZSIsInNsaWRlVXAiLCJoaWRlIiwiJGhpbnQiLCJvdXRlckhlaWdodCIsIm1vdmVBZnRlciIsIm1vdmVCZWZvcmUiLCJtb3ZlSW5zaWRlT3BlbkZvbGRlciIsIm1vdmVJbnNpZGUiLCJDYXRlZ29yeSIsIml0ZW1zIiwiaXRlbSIsIl8kIiwibm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uIiwic2V0VGV4dCIsImxhbmciLCJqcVRyZWUiLCJncmlkRWRpdG9yIiwibmV3X3Jvd19sYXlvdXRzIiwiY29udGVudF90eXBlcyIsInN1bW1lcm5vdGUiLCJkZXN0cm95Um93IiwiZmxhc2hNZXNzYWdlIiwidXBsb2FkZmlsZSIsIlVwbG9hZGZpbGUiLCJhZGRZb3V0dWJlIiwiU29ydGFibGUiLCJkcm9wem9uZSIsImhhbmRsZSIsInRvb2xiYXIiLCJidXR0b25zIiwibGF5b3V0IiwiaW5zZXJ0TGF5b3V0IiwiY2FsbGJhY2tzIiwib25JbWFnZVVwbG9hZCIsImZpbGVzIiwic2VuZEltYWdlIiwibGFyb3V0ZSIsInJvdXRlIiwiY29udGV4dCIsInVpIiwiYnV0dG9uIiwiY29udGVudHMiLCJ0b29sdGlwIiwiaW52b2tlIiwic2VsZWN0b3IiLCJsb2NrZWQiLCJjYXRlZ29yeSIsIl90ZXh0IiwiZGF0YXRhYmxlIiwic2VsZiIsIiR0aGlzIiwiZGVsZXRlVXJsIiwic3dhbCIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJhbGVydE5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJmYWRlT3V0IiwicmVzcG9uc2VKU09OIiwiZGlzbWlzcyIsInN0YXR1cyIsImRlbGF5IiwiYWxlcnRUeXBlIiwiZWFjaCIsInRvZ2dsZUNsYXNzIiwiZmxhc2hfbWVzc2FnZSIsIlVwbG9hZCIsImltZyIsIl9lbCIsIl9pbWciLCJjaGFuZ2UiLCJsYWJlbCIsInZhbCIsImlucHV0IiwicmVhZFVSTCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZWFkQXNEYXRhVVJMIiwiZmlsZSIsIkZvcm1EYXRhIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInhociIsInRleHRTdGF0dXMiLCJhbGVydCIsImVycm9ycyIsImltYWdlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtR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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsSUFBSTtBQUM3RTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxNQUFNLFFBQVEsSUFBSTtBQUN4RjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQix5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0FBQ2tmLFVBQVIsQ0FBbUIsYUFBbkIsRUFBa0Nqb0IsSUFBSSxDQUFDdVIsR0FBdkM7QUFDRCxTQVRLO0FBVU5rRixhQUFLLEVBQUUsZUFBUzRWLEdBQVQsRUFBY0MsVUFBZCxFQUEwQjdWLE1BQTFCLEVBQWlDO0FBQ3RDOFYsZUFBSyxDQUFDRixHQUFHLENBQUN6QixZQUFKLENBQWlCNEIsTUFBakIsQ0FBd0JDLEtBQXhCLENBQThCQyxRQUE5QixNQUE0Q0wsR0FBRyxDQUFDekIsWUFBSixDQUFpQkYsT0FBOUQsQ0FBTDtBQUNEO0FBWkssT0FBUjs7QUFjQSxVQUFJcnBCLFFBQUosRUFBYztBQUNaQSxnQkFBUSxDQUFDeUYsS0FBVCxDQUFlLElBQWY7QUFDRDtBQUNGOzs7Ozs7QUFHWXNrQixxRUFBZixFIiwiZmlsZSI6Ii9hc3NldHMvanMvYmFja2VuZC9tb2R1bGVzL2NhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImZ1bmN0aW9uIHQoKXtyZXR1cm4odD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJih0W29dPW5bb10pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGUodCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvcilyZXR1cm4hIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2godCl9dmFyIG49ZSgvKD86VHJpZGVudC4qcnZbIDpdPzExXFwufG1zaWV8aWVtb2JpbGV8V2luZG93cyBQaG9uZSkvaSksbz1lKC9FZGdlL2kpLGk9ZSgvZmlyZWZveC9pKSxyPWUoL3NhZmFyaS9pKSYmIWUoL2Nocm9tZS9pKSYmIWUoL2FuZHJvaWQvaSksYT1lKC9pUChhZHxvZHxob25lKS9pKSxsPWUoL2Nocm9tZS9pKSYmZSgvYW5kcm9pZC9pKSxzPXtjYXB0dXJlOiExLHBhc3NpdmU6ITF9O2Z1bmN0aW9uIGModCxlLG8pe3QuYWRkRXZlbnRMaXN0ZW5lcihlLG8sIW4mJnMpfWZ1bmN0aW9uIHUodCxlLG8pe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG8sIW4mJnMpfWZ1bmN0aW9uIGQodCxlKXtpZihlKXtpZihcIj5cIj09PWVbMF0mJihlPWUuc3Vic3RyaW5nKDEpKSx0KXRyeXtpZih0Lm1hdGNoZXMpcmV0dXJuIHQubWF0Y2hlcyhlKTtpZih0Lm1zTWF0Y2hlc1NlbGVjdG9yKXJldHVybiB0Lm1zTWF0Y2hlc1NlbGVjdG9yKGUpO2lmKHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKXJldHVybiB0LndlYmtpdE1hdGNoZXNTZWxlY3RvcihlKX1jYXRjaCh0KXtyZXR1cm4hMX1yZXR1cm4hMX19ZnVuY3Rpb24gaCh0KXtyZXR1cm4gdC5ob3N0JiZ0IT09ZG9jdW1lbnQmJnQuaG9zdC5ub2RlVHlwZT90Lmhvc3Q6dC5wYXJlbnROb2RlfWZ1bmN0aW9uIGYodCxlLG4sbyl7aWYodCl7bj1ufHxkb2N1bWVudDtkb3tpZihudWxsIT1lJiYoXCI+XCI9PT1lWzBdP3QucGFyZW50Tm9kZT09PW4mJmQodCxlKTpkKHQsZSkpfHxvJiZ0PT09bilyZXR1cm4gdDtpZih0PT09bilicmVha313aGlsZSh0PWgodCkpfXJldHVybiBudWxsfXZhciBwLGc9L1xccysvZztmdW5jdGlvbiB2KHQsZSxuKXtpZih0JiZlKWlmKHQuY2xhc3NMaXN0KXQuY2xhc3NMaXN0W24/XCJhZGRcIjpcInJlbW92ZVwiXShlKTtlbHNle3ZhciBvPShcIiBcIit0LmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShnLFwiIFwiKS5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO3QuY2xhc3NOYW1lPShvKyhuP1wiIFwiK2U6XCJcIikpLnJlcGxhY2UoZyxcIiBcIil9fWZ1bmN0aW9uIG0odCxlLG4pe3ZhciBvPXQmJnQuc3R5bGU7aWYobyl7aWYodm9pZCAwPT09bilyZXR1cm4gZG9jdW1lbnQuZGVmYXVsdFZpZXcmJmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGU/bj1kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQsXCJcIik6dC5jdXJyZW50U3R5bGUmJihuPXQuY3VycmVudFN0eWxlKSx2b2lkIDA9PT1lP246bltlXTtlIGluIG98fC0xIT09ZS5pbmRleE9mKFwid2Via2l0XCIpfHwoZT1cIi13ZWJraXQtXCIrZSksb1tlXT1uKyhcInN0cmluZ1wiPT10eXBlb2Ygbj9cIlwiOlwicHhcIil9fWZ1bmN0aW9uIGIodCxlKXt2YXIgbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KW49dDtlbHNlIGRve3ZhciBvPW0odCxcInRyYW5zZm9ybVwiKTtvJiZcIm5vbmVcIiE9PW8mJihuPW8rXCIgXCIrbil9d2hpbGUoIWUmJih0PXQucGFyZW50Tm9kZSkpO3ZhciBpPXdpbmRvdy5ET01NYXRyaXh8fHdpbmRvdy5XZWJLaXRDU1NNYXRyaXh8fHdpbmRvdy5DU1NNYXRyaXh8fHdpbmRvdy5NU0NTU01hdHJpeDtyZXR1cm4gaSYmbmV3IGkobil9ZnVuY3Rpb24gdyh0LGUsbil7aWYodCl7dmFyIG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSxpPTAscj1vLmxlbmd0aDtpZihuKWZvcig7aTxyO2krKyluKG9baV0saSk7cmV0dXJuIG99cmV0dXJuW119ZnVuY3Rpb24gRSgpe3JldHVybiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24geSh0LGUsbyxpLHIpe2lmKHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0fHx0PT09d2luZG93KXt2YXIgYSxsLHMsYyx1LGQsaDtpZih0IT09d2luZG93JiZ0IT09RSgpPyhsPShhPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLnRvcCxzPWEubGVmdCxjPWEuYm90dG9tLHU9YS5yaWdodCxkPWEuaGVpZ2h0LGg9YS53aWR0aCk6KGw9MCxzPTAsYz13aW5kb3cuaW5uZXJIZWlnaHQsdT13aW5kb3cuaW5uZXJXaWR0aCxkPXdpbmRvdy5pbm5lckhlaWdodCxoPXdpbmRvdy5pbm5lcldpZHRoKSwoZXx8bykmJnQhPT13aW5kb3cmJihyPXJ8fHQucGFyZW50Tm9kZSwhbikpZG97aWYociYmci5nZXRCb3VuZGluZ0NsaWVudFJlY3QmJihcIm5vbmVcIiE9PW0ocixcInRyYW5zZm9ybVwiKXx8byYmXCJzdGF0aWNcIiE9PW0ocixcInBvc2l0aW9uXCIpKSl7dmFyIGY9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsLT1mLnRvcCtwYXJzZUludChtKHIsXCJib3JkZXItdG9wLXdpZHRoXCIpKSxzLT1mLmxlZnQrcGFyc2VJbnQobShyLFwiYm9yZGVyLWxlZnQtd2lkdGhcIikpLGM9bCthLmhlaWdodCx1PXMrYS53aWR0aDticmVha319d2hpbGUocj1yLnBhcmVudE5vZGUpO2lmKGkmJnQhPT13aW5kb3cpe3ZhciBwPWIocnx8dCksZz1wJiZwLmEsdj1wJiZwLmQ7cCYmKGM9KGwvPXYpKyhkLz12KSx1PShzLz1nKSsoaC89ZykpfXJldHVybnt0b3A6bCxsZWZ0OnMsYm90dG9tOmMscmlnaHQ6dSx3aWR0aDpoLGhlaWdodDpkfX19ZnVuY3Rpb24gRCh0LGUsbil7Zm9yKHZhciBvPXgodCwhMCksaT15KHQpW2VdO287KXt2YXIgcj15KG8pW25dO2lmKCEoXCJ0b3BcIj09PW58fFwibGVmdFwiPT09bj9pPj1yOmk8PXIpKXJldHVybiBvO2lmKG89PT1FKCkpYnJlYWs7bz14KG8sITEpfXJldHVybiExfWZ1bmN0aW9uIF8odCxlLG4pe2Zvcih2YXIgbz0wLGk9MCxyPXQuY2hpbGRyZW47aTxyLmxlbmd0aDspe2lmKFwibm9uZVwiIT09cltpXS5zdHlsZS5kaXNwbGF5JiZyW2ldIT09SXQuZ2hvc3QmJnJbaV0hPT1JdC5kcmFnZ2VkJiZmKHJbaV0sbi5kcmFnZ2FibGUsdCwhMSkpe2lmKG89PT1lKXJldHVybiByW2ldO28rK31pKyt9cmV0dXJuIG51bGx9ZnVuY3Rpb24gUyh0LGUpe2Zvcih2YXIgbj10Lmxhc3RFbGVtZW50Q2hpbGQ7biYmKG49PT1JdC5naG9zdHx8XCJub25lXCI9PT1tKG4sXCJkaXNwbGF5XCIpfHxlJiYhZChuLGUpKTspbj1uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7cmV0dXJuIG58fG51bGx9ZnVuY3Rpb24gQyh0LGUpe3ZhciBuPTA7aWYoIXR8fCF0LnBhcmVudE5vZGUpcmV0dXJuLTE7Zm9yKDt0PXQucHJldmlvdXNFbGVtZW50U2libGluZzspXCJURU1QTEFURVwiPT09dC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpfHx0PT09SXQuY2xvbmV8fGUmJiFkKHQsZSl8fG4rKztyZXR1cm4gbn1mdW5jdGlvbiBUKHQpe3ZhciBlPTAsbj0wLG89RSgpO2lmKHQpZG97dmFyIGk9Yih0KTtlKz10LnNjcm9sbExlZnQqaS5hLG4rPXQuc2Nyb2xsVG9wKmkuZH13aGlsZSh0IT09byYmKHQ9dC5wYXJlbnROb2RlKSk7cmV0dXJuW2Usbl19ZnVuY3Rpb24geCh0LGUpe2lmKCF0fHwhdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpcmV0dXJuIEUoKTt2YXIgbj10LG89ITE7ZG97aWYobi5jbGllbnRXaWR0aDxuLnNjcm9sbFdpZHRofHxuLmNsaWVudEhlaWdodDxuLnNjcm9sbEhlaWdodCl7dmFyIGk9bShuKTtpZihuLmNsaWVudFdpZHRoPG4uc2Nyb2xsV2lkdGgmJihcImF1dG9cIj09aS5vdmVyZmxvd1h8fFwic2Nyb2xsXCI9PWkub3ZlcmZsb3dYKXx8bi5jbGllbnRIZWlnaHQ8bi5zY3JvbGxIZWlnaHQmJihcImF1dG9cIj09aS5vdmVyZmxvd1l8fFwic2Nyb2xsXCI9PWkub3ZlcmZsb3dZKSl7aWYoIW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0fHxuPT09ZG9jdW1lbnQuYm9keSlyZXR1cm4gRSgpO2lmKG98fGUpcmV0dXJuIG47bz0hMH19fXdoaWxlKG49bi5wYXJlbnROb2RlKTtyZXR1cm4gRSgpfWZ1bmN0aW9uIE0odCxlKXtyZXR1cm4gTWF0aC5yb3VuZCh0LnRvcCk9PT1NYXRoLnJvdW5kKGUudG9wKSYmTWF0aC5yb3VuZCh0LmxlZnQpPT09TWF0aC5yb3VuZChlLmxlZnQpJiZNYXRoLnJvdW5kKHQuaGVpZ2h0KT09PU1hdGgucm91bmQoZS5oZWlnaHQpJiZNYXRoLnJvdW5kKHQud2lkdGgpPT09TWF0aC5yb3VuZChlLndpZHRoKX1mdW5jdGlvbiBOKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoIXApe3ZhciBuPWFyZ3VtZW50cyxvPXRoaXM7MT09PW4ubGVuZ3RoP3QuY2FsbChvLG5bMF0pOnQuYXBwbHkobyxuKSxwPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtwPXZvaWQgMH0sZSl9fX1mdW5jdGlvbiBPKHQsZSxuKXt0LnNjcm9sbExlZnQrPWUsdC5zY3JvbGxUb3ArPW59ZnVuY3Rpb24gQSh0KXt2YXIgZT13aW5kb3cuUG9seW1lcixuPXdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0bztyZXR1cm4gZSYmZS5kb20/ZS5kb20odCkuY2xvbmVOb2RlKCEwKTpuP24odCkuY2xvbmUoITApWzBdOnQuY2xvbmVOb2RlKCEwKX1mdW5jdGlvbiBJKHQsZSl7bSh0LFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLG0odCxcInRvcFwiLGUudG9wKSxtKHQsXCJsZWZ0XCIsZS5sZWZ0KSxtKHQsXCJ3aWR0aFwiLGUud2lkdGgpLG0odCxcImhlaWdodFwiLGUuaGVpZ2h0KX1mdW5jdGlvbiBQKHQpe20odCxcInBvc2l0aW9uXCIsXCJcIiksbSh0LFwidG9wXCIsXCJcIiksbSh0LFwibGVmdFwiLFwiXCIpLG0odCxcIndpZHRoXCIsXCJcIiksbSh0LFwiaGVpZ2h0XCIsXCJcIil9dmFyIGs9XCJTb3J0YWJsZVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLFI9W10sWD17aW5pdGlhbGl6ZUJ5RGVmYXVsdDohMH0sWT17bW91bnQ6ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIFgpWC5oYXNPd25Qcm9wZXJ0eShlKSYmIShlIGluIHQpJiYodFtlXT1YW2VdKTtSLnB1c2godCl9LHBsdWdpbkV2ZW50OmZ1bmN0aW9uKGUsbixvKXt2YXIgaT10aGlzO3RoaXMuZXZlbnRDYW5jZWxlZD0hMSxvLmNhbmNlbD1mdW5jdGlvbigpe2kuZXZlbnRDYW5jZWxlZD0hMH07dmFyIHI9ZStcIkdsb2JhbFwiO1IuZm9yRWFjaChmdW5jdGlvbihpKXtuW2kucGx1Z2luTmFtZV0mJihuW2kucGx1Z2luTmFtZV1bcl0mJm5baS5wbHVnaW5OYW1lXVtyXSh0KHtzb3J0YWJsZTpufSxvKSksbi5vcHRpb25zW2kucGx1Z2luTmFtZV0mJm5baS5wbHVnaW5OYW1lXVtlXSYmbltpLnBsdWdpbk5hbWVdW2VdKHQoe3NvcnRhYmxlOm59LG8pKSl9KX0saW5pdGlhbGl6ZVBsdWdpbnM6ZnVuY3Rpb24odCxlLG4sbyl7Zm9yKHZhciBpIGluIFIuZm9yRWFjaChmdW5jdGlvbihvKXt2YXIgaT1vLnBsdWdpbk5hbWU7aWYodC5vcHRpb25zW2ldfHxvLmluaXRpYWxpemVCeURlZmF1bHQpe3ZhciByPW5ldyBvKHQsZSx0Lm9wdGlvbnMpO3Iuc29ydGFibGU9dCxyLm9wdGlvbnM9dC5vcHRpb25zLHRbaV09cixPYmplY3QuYXNzaWduKG4sci5kZWZhdWx0cyl9fSksdC5vcHRpb25zKWlmKHQub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSl7dmFyIHI9dGhpcy5tb2RpZnlPcHRpb24odCxpLHQub3B0aW9uc1tpXSk7dm9pZCAwIT09ciYmKHQub3B0aW9uc1tpXT1yKX19LGdldEV2ZW50UHJvcGVydGllczpmdW5jdGlvbih0LGUpe3ZhciBuPXt9O3JldHVybiBSLmZvckVhY2goZnVuY3Rpb24obyl7XCJmdW5jdGlvblwiPT10eXBlb2Ygby5ldmVudFByb3BlcnRpZXMmJk9iamVjdC5hc3NpZ24obixvLmV2ZW50UHJvcGVydGllcy5jYWxsKGVbby5wbHVnaW5OYW1lXSx0KSl9KSxufSxtb2RpZnlPcHRpb246ZnVuY3Rpb24odCxlLG4pe3ZhciBvO3JldHVybiBSLmZvckVhY2goZnVuY3Rpb24oaSl7dFtpLnBsdWdpbk5hbWVdJiZpLm9wdGlvbkxpc3RlbmVycyYmXCJmdW5jdGlvblwiPT10eXBlb2YgaS5vcHRpb25MaXN0ZW5lcnNbZV0mJihvPWkub3B0aW9uTGlzdGVuZXJzW2VdLmNhbGwodFtpLnBsdWdpbk5hbWVdLG4pKX0pLG99fTtmdW5jdGlvbiBCKGUpe3ZhciBpPWUuc29ydGFibGUscj1lLnJvb3RFbCxhPWUubmFtZSxsPWUudGFyZ2V0RWwscz1lLmNsb25lRWwsYz1lLnRvRWwsdT1lLmZyb21FbCxkPWUub2xkSW5kZXgsaD1lLm5ld0luZGV4LGY9ZS5vbGREcmFnZ2FibGVJbmRleCxwPWUubmV3RHJhZ2dhYmxlSW5kZXgsZz1lLm9yaWdpbmFsRXZlbnQsdj1lLnB1dFNvcnRhYmxlLG09ZS5leHRyYUV2ZW50UHJvcGVydGllcztpZihpPWl8fHImJnJba10pe3ZhciBiLHc9aS5vcHRpb25zLEU9XCJvblwiK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHIoMSk7IXdpbmRvdy5DdXN0b21FdmVudHx8bnx8bz8oYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5pbml0RXZlbnQoYSwhMCwhMCk6Yj1uZXcgQ3VzdG9tRXZlbnQoYSx7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSksYi50bz1jfHxyLGIuZnJvbT11fHxyLGIuaXRlbT1sfHxyLGIuY2xvbmU9cyxiLm9sZEluZGV4PWQsYi5uZXdJbmRleD1oLGIub2xkRHJhZ2dhYmxlSW5kZXg9ZixiLm5ld0RyYWdnYWJsZUluZGV4PXAsYi5vcmlnaW5hbEV2ZW50PWcsYi5wdWxsTW9kZT12P3YubGFzdFB1dE1vZGU6dm9pZCAwO3ZhciB5PXQoe30sbSxZLmdldEV2ZW50UHJvcGVydGllcyhhLGkpKTtmb3IodmFyIEQgaW4geSliW0RdPXlbRF07ciYmci5kaXNwYXRjaEV2ZW50KGIpLHdbRV0mJndbRV0uY2FsbChpLGIpfX12YXIgSD1mdW5jdGlvbihlLG4sbyl7dmFyIGk9dm9pZCAwPT09bz97fTpvLHI9aS5ldnQsYT1mdW5jdGlvbih0LGUpe2lmKG51bGw9PXQpcmV0dXJue307dmFyIG4sbyxpPXt9LHI9T2JqZWN0LmtleXModCk7Zm9yKG89MDtvPHIubGVuZ3RoO28rKyllLmluZGV4T2Yobj1yW29dKT49MHx8KGlbbl09dFtuXSk7cmV0dXJuIGl9KGksW1wiZXZ0XCJdKTtZLnBsdWdpbkV2ZW50LmJpbmQoSXQpKGUsbix0KHtkcmFnRWw6TCxwYXJlbnRFbDpLLGdob3N0RWw6Vyxyb290RWw6aixuZXh0RWw6eixsYXN0RG93bkVsOkcsY2xvbmVFbDpVLGNsb25lSGlkZGVuOnEsZHJhZ1N0YXJ0ZWQ6bHQscHV0U29ydGFibGU6dHQsYWN0aXZlU29ydGFibGU6SXQuYWN0aXZlLG9yaWdpbmFsRXZlbnQ6cixvbGRJbmRleDpWLG9sZERyYWdnYWJsZUluZGV4OlEsbmV3SW5kZXg6WixuZXdEcmFnZ2FibGVJbmRleDokLGhpZGVHaG9zdEZvclRhcmdldDp4dCx1bmhpZGVHaG9zdEZvclRhcmdldDpNdCxjbG9uZU5vd0hpZGRlbjpmdW5jdGlvbigpe3E9ITB9LGNsb25lTm93U2hvd246ZnVuY3Rpb24oKXtxPSExfSxkaXNwYXRjaFNvcnRhYmxlRXZlbnQ6ZnVuY3Rpb24odCl7Rih7c29ydGFibGU6bixuYW1lOnQsb3JpZ2luYWxFdmVudDpyfSl9fSxhKSl9O2Z1bmN0aW9uIEYoZSl7Qih0KHtwdXRTb3J0YWJsZTp0dCxjbG9uZUVsOlUsdGFyZ2V0RWw6TCxyb290RWw6aixvbGRJbmRleDpWLG9sZERyYWdnYWJsZUluZGV4OlEsbmV3SW5kZXg6WixuZXdEcmFnZ2FibGVJbmRleDokfSxlKSl9dmFyIEwsSyxXLGoseixHLFUscSxWLFosUSwkLEosdHQsZXQsbnQsb3QsaXQscnQsYXQsbHQsc3QsY3QsdXQsZHQsaHQ9ITEsZnQ9ITEscHQ9W10sZ3Q9ITEsdnQ9ITEsbXQ9W10sYnQ9ITEsd3Q9W10sRXQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHl0PWEsRHQ9b3x8bj9cImNzc0Zsb2F0XCI6XCJmbG9hdFwiLF90PUV0JiYhbCYmIWEmJlwiZHJhZ2dhYmxlXCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFN0PWZ1bmN0aW9uKCl7aWYoRXQpe2lmKG4pcmV0dXJuITE7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInhcIik7cmV0dXJuIHQuc3R5bGUuY3NzVGV4dD1cInBvaW50ZXItZXZlbnRzOmF1dG9cIixcImF1dG9cIj09PXQuc3R5bGUucG9pbnRlckV2ZW50c319KCksQ3Q9ZnVuY3Rpb24odCxlKXt2YXIgbj1tKHQpLG89cGFyc2VJbnQobi53aWR0aCktcGFyc2VJbnQobi5wYWRkaW5nTGVmdCktcGFyc2VJbnQobi5wYWRkaW5nUmlnaHQpLXBhcnNlSW50KG4uYm9yZGVyTGVmdFdpZHRoKS1wYXJzZUludChuLmJvcmRlclJpZ2h0V2lkdGgpLGk9Xyh0LDAsZSkscj1fKHQsMSxlKSxhPWkmJm0oaSksbD1yJiZtKHIpLHM9YSYmcGFyc2VJbnQoYS5tYXJnaW5MZWZ0KStwYXJzZUludChhLm1hcmdpblJpZ2h0KSt5KGkpLndpZHRoLGM9bCYmcGFyc2VJbnQobC5tYXJnaW5MZWZ0KStwYXJzZUludChsLm1hcmdpblJpZ2h0KSt5KHIpLndpZHRoO3JldHVyblwiZmxleFwiPT09bi5kaXNwbGF5P1wiY29sdW1uXCI9PT1uLmZsZXhEaXJlY3Rpb258fFwiY29sdW1uLXJldmVyc2VcIj09PW4uZmxleERpcmVjdGlvbj9cInZlcnRpY2FsXCI6XCJob3Jpem9udGFsXCI6XCJncmlkXCI9PT1uLmRpc3BsYXk/bi5ncmlkVGVtcGxhdGVDb2x1bW5zLnNwbGl0KFwiIFwiKS5sZW5ndGg8PTE/XCJ2ZXJ0aWNhbFwiOlwiaG9yaXpvbnRhbFwiOmkmJmEuZmxvYXQmJlwibm9uZVwiIT09YS5mbG9hdD8hcnx8XCJib3RoXCIhPT1sLmNsZWFyJiZsLmNsZWFyIT09KFwibGVmdFwiPT09YS5mbG9hdD9cImxlZnRcIjpcInJpZ2h0XCIpP1wiaG9yaXpvbnRhbFwiOlwidmVydGljYWxcIjppJiYoXCJibG9ja1wiPT09YS5kaXNwbGF5fHxcImZsZXhcIj09PWEuZGlzcGxheXx8XCJ0YWJsZVwiPT09YS5kaXNwbGF5fHxcImdyaWRcIj09PWEuZGlzcGxheXx8cz49byYmXCJub25lXCI9PT1uW0R0XXx8ciYmXCJub25lXCI9PT1uW0R0XSYmcytjPm8pP1widmVydGljYWxcIjpcImhvcml6b250YWxcIn0sVHQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LG4pe3JldHVybiBmdW5jdGlvbihvLGkscixhKXtpZihudWxsPT10JiYobnx8by5vcHRpb25zLmdyb3VwLm5hbWUmJmkub3B0aW9ucy5ncm91cC5uYW1lJiZvLm9wdGlvbnMuZ3JvdXAubmFtZT09PWkub3B0aW9ucy5ncm91cC5uYW1lKSlyZXR1cm4hMDtpZihudWxsPT10fHwhMT09PXQpcmV0dXJuITE7aWYobiYmXCJjbG9uZVwiPT09dClyZXR1cm4gdDtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBlKHQobyxpLHIsYSksbikobyxpLHIsYSk7dmFyIGw9KG4/bzppKS5vcHRpb25zLmdyb3VwLm5hbWU7cmV0dXJuITA9PT10fHxcInN0cmluZ1wiPT10eXBlb2YgdCYmdD09PWx8fHQuam9pbiYmdC5pbmRleE9mKGwpPi0xfX12YXIgbj17fSxvPXQuZ3JvdXA7byYmXCJvYmplY3RcIj09dHlwZW9mIG98fChvPXtuYW1lOm99KSxuLm5hbWU9by5uYW1lLG4uY2hlY2tQdWxsPWUoby5wdWxsLCEwKSxuLmNoZWNrUHV0PWUoby5wdXQpLG4ucmV2ZXJ0Q2xvbmU9by5yZXZlcnRDbG9uZSx0Lmdyb3VwPW59LHh0PWZ1bmN0aW9uKCl7IVN0JiZXJiZtKFcsXCJkaXNwbGF5XCIsXCJub25lXCIpfSxNdD1mdW5jdGlvbigpeyFTdCYmVyYmbShXLFwiZGlzcGxheVwiLFwiXCIpfTtFdCYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24odCl7aWYoZnQpcmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbiYmdC5zdG9wUHJvcGFnYXRpb24oKSx0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmdC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxmdD0hMSwhMX0sITApO3ZhciBOdCxPdD1mdW5jdGlvbih0KXtpZihMKXt2YXIgZT0oaT0odD10LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQpLmNsaWVudFgscj10LmNsaWVudFkscHQuc29tZShmdW5jdGlvbih0KXtpZighUyh0KSl7dmFyIGU9eSh0KSxuPXRba10ub3B0aW9ucy5lbXB0eUluc2VydFRocmVzaG9sZDtyZXR1cm4gbiYmaT49ZS5sZWZ0LW4mJmk8PWUucmlnaHQrbiYmcj49ZS50b3AtbiYmcjw9ZS5ib3R0b20rbj9hPXQ6dm9pZCAwfX0pLGEpO2lmKGUpe3ZhciBuPXt9O2Zvcih2YXIgbyBpbiB0KXQuaGFzT3duUHJvcGVydHkobykmJihuW29dPXRbb10pO24udGFyZ2V0PW4ucm9vdEVsPWUsbi5wcmV2ZW50RGVmYXVsdD12b2lkIDAsbi5zdG9wUHJvcGFnYXRpb249dm9pZCAwLGVba10uX29uRHJhZ092ZXIobil9fXZhciBpLHIsYX0sQXQ9ZnVuY3Rpb24odCl7TCYmTC5wYXJlbnROb2RlW2tdLl9pc091dHNpZGVUaGlzRWwodC50YXJnZXQpfTtmdW5jdGlvbiBJdChlLG4pe2lmKCFlfHwhZS5ub2RlVHlwZXx8MSE9PWUubm9kZVR5cGUpdGhyb3dcIlNvcnRhYmxlOiBgZWxgIG11c3QgYmUgYW4gSFRNTEVsZW1lbnQsIG5vdCBcIit7fS50b1N0cmluZy5jYWxsKGUpO3RoaXMuZWw9ZSx0aGlzLm9wdGlvbnM9bj1PYmplY3QuYXNzaWduKHt9LG4pLGVba109dGhpczt2YXIgbyxpLHI9e2dyb3VwOm51bGwsc29ydDohMCxkaXNhYmxlZDohMSxzdG9yZTpudWxsLGhhbmRsZTpudWxsLGRyYWdnYWJsZTovXlt1b11sJC9pLnRlc3QoZS5ub2RlTmFtZSk/XCI+bGlcIjpcIj4qXCIsc3dhcFRocmVzaG9sZDoxLGludmVydFN3YXA6ITEsaW52ZXJ0ZWRTd2FwVGhyZXNob2xkOm51bGwscmVtb3ZlQ2xvbmVPbkhpZGU6ITAsZGlyZWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIEN0KGUsdGhpcy5vcHRpb25zKX0sZ2hvc3RDbGFzczpcInNvcnRhYmxlLWdob3N0XCIsY2hvc2VuQ2xhc3M6XCJzb3J0YWJsZS1jaG9zZW5cIixkcmFnQ2xhc3M6XCJzb3J0YWJsZS1kcmFnXCIsaWdub3JlOlwiYSwgaW1nXCIsZmlsdGVyOm51bGwscHJldmVudE9uRmlsdGVyOiEwLGFuaW1hdGlvbjowLGVhc2luZzpudWxsLHNldERhdGE6ZnVuY3Rpb24odCxlKXt0LnNldERhdGEoXCJUZXh0XCIsZS50ZXh0Q29udGVudCl9LGRyb3BCdWJibGU6ITEsZHJhZ292ZXJCdWJibGU6ITEsZGF0YUlkQXR0cjpcImRhdGEtaWRcIixkZWxheTowLGRlbGF5T25Ub3VjaE9ubHk6ITEsdG91Y2hTdGFydFRocmVzaG9sZDooTnVtYmVyLnBhcnNlSW50P051bWJlcjp3aW5kb3cpLnBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLDEwKXx8MSxmb3JjZUZhbGxiYWNrOiExLGZhbGxiYWNrQ2xhc3M6XCJzb3J0YWJsZS1mYWxsYmFja1wiLGZhbGxiYWNrT25Cb2R5OiExLGZhbGxiYWNrVG9sZXJhbmNlOjAsZmFsbGJhY2tPZmZzZXQ6e3g6MCx5OjB9LHN1cHBvcnRQb2ludGVyOiExIT09SXQuc3VwcG9ydFBvaW50ZXImJlwiUG9pbnRlckV2ZW50XCJpbiB3aW5kb3csZW1wdHlJbnNlcnRUaHJlc2hvbGQ6NX07Zm9yKHZhciBhIGluIFkuaW5pdGlhbGl6ZVBsdWdpbnModGhpcyxlLHIpLHIpIShhIGluIG4pJiYoblthXT1yW2FdKTtmb3IodmFyIGwgaW4gVHQobiksdGhpcylcIl9cIj09PWwuY2hhckF0KDApJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW2xdJiYodGhpc1tsXT10aGlzW2xdLmJpbmQodGhpcykpO3RoaXMubmF0aXZlRHJhZ2dhYmxlPSFuLmZvcmNlRmFsbGJhY2smJl90LHRoaXMubmF0aXZlRHJhZ2dhYmxlJiYodGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQ9MSksbi5zdXBwb3J0UG9pbnRlcj9jKGUsXCJwb2ludGVyZG93blwiLHRoaXMuX29uVGFwU3RhcnQpOihjKGUsXCJtb3VzZWRvd25cIix0aGlzLl9vblRhcFN0YXJ0KSxjKGUsXCJ0b3VjaHN0YXJ0XCIsdGhpcy5fb25UYXBTdGFydCkpLHRoaXMubmF0aXZlRHJhZ2dhYmxlJiYoYyhlLFwiZHJhZ292ZXJcIix0aGlzKSxjKGUsXCJkcmFnZW50ZXJcIix0aGlzKSkscHQucHVzaCh0aGlzLmVsKSxuLnN0b3JlJiZuLnN0b3JlLmdldCYmdGhpcy5zb3J0KG4uc3RvcmUuZ2V0KHRoaXMpfHxbXSksT2JqZWN0LmFzc2lnbih0aGlzLChpPVtdLHtjYXB0dXJlQW5pbWF0aW9uU3RhdGU6ZnVuY3Rpb24oKXtpPVtdLHRoaXMub3B0aW9ucy5hbmltYXRpb24mJltdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihlKXtpZihcIm5vbmVcIiE9PW0oZSxcImRpc3BsYXlcIikmJnZvaWQgMCE9PWUpe2kucHVzaCh7dGFyZ2V0OmUscmVjdDp5KGUpfSk7dmFyIG49dCh7fSxpW2kubGVuZ3RoLTFdLnJlY3QpO2lmKGUudGhpc0FuaW1hdGlvbkR1cmF0aW9uKXt2YXIgbz1iKGUsITApO28mJihuLnRvcC09by5mLG4ubGVmdC09by5lKX1lLmZyb21SZWN0PW59fSl9LGFkZEFuaW1hdGlvblN0YXRlOmZ1bmN0aW9uKHQpe2kucHVzaCh0KX0scmVtb3ZlQW5pbWF0aW9uU3RhdGU6ZnVuY3Rpb24odCl7aS5zcGxpY2UoZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gdClpZih0Lmhhc093blByb3BlcnR5KG4pKWZvcih2YXIgbyBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkobykmJmVbb109PT10W25dW29dKXJldHVybiBOdW1iZXIobik7cmV0dXJuLTF9KGkse3RhcmdldDp0fSksMSl9LGFuaW1hdGVBbGw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZighdGhpcy5vcHRpb25zLmFuaW1hdGlvbilyZXR1cm4gY2xlYXJUaW1lb3V0KG8pLHZvaWQoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdCgpKTt2YXIgbj0hMSxyPTA7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBvPTAsaT10LnRhcmdldCxhPWkuZnJvbVJlY3QsbD15KGkpLHM9aS5wcmV2RnJvbVJlY3QsYz1pLnByZXZUb1JlY3QsdT10LnJlY3QsZD1iKGksITApO2QmJihsLnRvcC09ZC5mLGwubGVmdC09ZC5lKSxpLnRvUmVjdD1sLGkudGhpc0FuaW1hdGlvbkR1cmF0aW9uJiZNKHMsbCkmJiFNKGEsbCkmJih1LnRvcC1sLnRvcCkvKHUubGVmdC1sLmxlZnQpPT0oYS50b3AtbC50b3ApLyhhLmxlZnQtbC5sZWZ0KSYmKG89ZnVuY3Rpb24odCxlLG4sbyl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhlLnRvcC10LnRvcCwyKStNYXRoLnBvdyhlLmxlZnQtdC5sZWZ0LDIpKS9NYXRoLnNxcnQoTWF0aC5wb3coZS50b3Atbi50b3AsMikrTWF0aC5wb3coZS5sZWZ0LW4ubGVmdCwyKSkqby5hbmltYXRpb259KHUscyxjLGUub3B0aW9ucykpLE0obCxhKXx8KGkucHJldkZyb21SZWN0PWEsaS5wcmV2VG9SZWN0PWwsb3x8KG89ZS5vcHRpb25zLmFuaW1hdGlvbiksZS5hbmltYXRlKGksdSxsLG8pKSxvJiYobj0hMCxyPU1hdGgubWF4KHIsbyksY2xlYXJUaW1lb3V0KGkuYW5pbWF0aW9uUmVzZXRUaW1lciksaS5hbmltYXRpb25SZXNldFRpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLmFuaW1hdGlvblRpbWU9MCxpLnByZXZGcm9tUmVjdD1udWxsLGkuZnJvbVJlY3Q9bnVsbCxpLnByZXZUb1JlY3Q9bnVsbCxpLnRoaXNBbmltYXRpb25EdXJhdGlvbj1udWxsfSxvKSxpLnRoaXNBbmltYXRpb25EdXJhdGlvbj1vKX0pLGNsZWFyVGltZW91dChvKSxuP289c2V0VGltZW91dChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQoKX0scik6XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdCgpLGk9W119LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4sbyl7aWYobyl7bSh0LFwidHJhbnNpdGlvblwiLFwiXCIpLG0odCxcInRyYW5zZm9ybVwiLFwiXCIpO3ZhciBpPWIodGhpcy5lbCkscj0oZS5sZWZ0LW4ubGVmdCkvKGkmJmkuYXx8MSksYT0oZS50b3Atbi50b3ApLyhpJiZpLmR8fDEpO3QuYW5pbWF0aW5nWD0hIXIsdC5hbmltYXRpbmdZPSEhYSxtKHQsXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZTNkKFwiK3IrXCJweCxcIithK1wicHgsMClcIiksdGhpcy5mb3JSZXBhaW50RHVtbXk9ZnVuY3Rpb24odCl7cmV0dXJuIHQub2Zmc2V0V2lkdGh9KHQpLG0odCxcInRyYW5zaXRpb25cIixcInRyYW5zZm9ybSBcIitvK1wibXNcIisodGhpcy5vcHRpb25zLmVhc2luZz9cIiBcIit0aGlzLm9wdGlvbnMuZWFzaW5nOlwiXCIpKSxtKHQsXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxcIm51bWJlclwiPT10eXBlb2YgdC5hbmltYXRlZCYmY2xlYXJUaW1lb3V0KHQuYW5pbWF0ZWQpLHQuYW5pbWF0ZWQ9c2V0VGltZW91dChmdW5jdGlvbigpe20odCxcInRyYW5zaXRpb25cIixcIlwiKSxtKHQsXCJ0cmFuc2Zvcm1cIixcIlwiKSx0LmFuaW1hdGVkPSExLHQuYW5pbWF0aW5nWD0hMSx0LmFuaW1hdGluZ1k9ITF9LG8pfX19KSl9ZnVuY3Rpb24gUHQodCxlLGkscixhLGwscyxjKXt2YXIgdSxkLGg9dFtrXSxmPWgub3B0aW9ucy5vbk1vdmU7cmV0dXJuIXdpbmRvdy5DdXN0b21FdmVudHx8bnx8bz8odT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5pbml0RXZlbnQoXCJtb3ZlXCIsITAsITApOnU9bmV3IEN1c3RvbUV2ZW50KFwibW92ZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSx1LnRvPWUsdS5mcm9tPXQsdS5kcmFnZ2VkPWksdS5kcmFnZ2VkUmVjdD1yLHUucmVsYXRlZD1hfHxlLHUucmVsYXRlZFJlY3Q9bHx8eShlKSx1LndpbGxJbnNlcnRBZnRlcj1jLHUub3JpZ2luYWxFdmVudD1zLHQuZGlzcGF0Y2hFdmVudCh1KSxmJiYoZD1mLmNhbGwoaCx1LHMpKSxkfWZ1bmN0aW9uIGt0KHQpe3QuZHJhZ2dhYmxlPSExfWZ1bmN0aW9uIFJ0KCl7YnQ9ITF9ZnVuY3Rpb24gWHQodCl7Zm9yKHZhciBlPXQudGFnTmFtZSt0LmNsYXNzTmFtZSt0LnNyYyt0LmhyZWYrdC50ZXh0Q29udGVudCxuPWUubGVuZ3RoLG89MDtuLS07KW8rPWUuY2hhckNvZGVBdChuKTtyZXR1cm4gby50b1N0cmluZygzNil9ZnVuY3Rpb24gWXQodCl7cmV0dXJuIHNldFRpbWVvdXQodCwwKX1mdW5jdGlvbiBCdCh0KXtyZXR1cm4gY2xlYXJUaW1lb3V0KHQpfUl0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6SXQsX2lzT3V0c2lkZVRoaXNFbDpmdW5jdGlvbih0KXt0aGlzLmVsLmNvbnRhaW5zKHQpfHx0PT09dGhpcy5lbHx8KHN0PW51bGwpfSxfZ2V0RGlyZWN0aW9uOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLmRpcmVjdGlvbj90aGlzLm9wdGlvbnMuZGlyZWN0aW9uLmNhbGwodGhpcyx0LGUsTCk6dGhpcy5vcHRpb25zLmRpcmVjdGlvbn0sX29uVGFwU3RhcnQ6ZnVuY3Rpb24odCl7aWYodC5jYW5jZWxhYmxlKXt2YXIgZT10aGlzLG49dGhpcy5lbCxvPXRoaXMub3B0aW9ucyxpPW8ucHJldmVudE9uRmlsdGVyLGE9dC50eXBlLGw9dC50b3VjaGVzJiZ0LnRvdWNoZXNbMF18fHQucG9pbnRlclR5cGUmJlwidG91Y2hcIj09PXQucG9pbnRlclR5cGUmJnQscz0obHx8dCkudGFyZ2V0LGM9dC50YXJnZXQuc2hhZG93Um9vdCYmKHQucGF0aCYmdC5wYXRoWzBdfHx0LmNvbXBvc2VkUGF0aCYmdC5jb21wb3NlZFBhdGgoKVswXSl8fHMsdT1vLmZpbHRlcjtpZihmdW5jdGlvbih0KXt3dC5sZW5ndGg9MDtmb3IodmFyIGU9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLG49ZS5sZW5ndGg7bi0tOyl7dmFyIG89ZVtuXTtvLmNoZWNrZWQmJnd0LnB1c2gobyl9fShuKSwhTCYmISgvbW91c2Vkb3dufHBvaW50ZXJkb3duLy50ZXN0KGEpJiYwIT09dC5idXR0b258fG8uZGlzYWJsZWQpJiYhYy5pc0NvbnRlbnRFZGl0YWJsZSYmKHRoaXMubmF0aXZlRHJhZ2dhYmxlfHwhcnx8IXN8fFwiU0VMRUNUXCIhPT1zLnRhZ05hbWUudG9VcHBlckNhc2UoKSkmJiEoKHM9ZihzLG8uZHJhZ2dhYmxlLG4sITEpKSYmcy5hbmltYXRlZHx8Rz09PXMpKXtpZihWPUMocyksUT1DKHMsby5kcmFnZ2FibGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUpe2lmKHUuY2FsbCh0aGlzLHQscyx0aGlzKSlyZXR1cm4gRih7c29ydGFibGU6ZSxyb290RWw6YyxuYW1lOlwiZmlsdGVyXCIsdGFyZ2V0RWw6cyx0b0VsOm4sZnJvbUVsOm59KSxIKFwiZmlsdGVyXCIsZSx7ZXZ0OnR9KSx2b2lkKGkmJnQuY2FuY2VsYWJsZSYmdC5wcmV2ZW50RGVmYXVsdCgpKX1lbHNlIGlmKHUmJih1PXUuc3BsaXQoXCIsXCIpLnNvbWUoZnVuY3Rpb24obyl7aWYobz1mKGMsby50cmltKCksbiwhMSkpcmV0dXJuIEYoe3NvcnRhYmxlOmUscm9vdEVsOm8sbmFtZTpcImZpbHRlclwiLHRhcmdldEVsOnMsZnJvbUVsOm4sdG9FbDpufSksSChcImZpbHRlclwiLGUse2V2dDp0fSksITB9KSkpcmV0dXJuIHZvaWQoaSYmdC5jYW5jZWxhYmxlJiZ0LnByZXZlbnREZWZhdWx0KCkpO28uaGFuZGxlJiYhZihjLG8uaGFuZGxlLG4sITEpfHx0aGlzLl9wcmVwYXJlRHJhZ1N0YXJ0KHQsbCxzKX19fSxfcHJlcGFyZURyYWdTdGFydDpmdW5jdGlvbih0LGUscil7dmFyIGEsbD10aGlzLHM9bC5lbCx1PWwub3B0aW9ucyxkPXMub3duZXJEb2N1bWVudDtpZihyJiYhTCYmci5wYXJlbnROb2RlPT09cyl7dmFyIGg9eShyKTtpZihqPXMsSz0oTD1yKS5wYXJlbnROb2RlLHo9TC5uZXh0U2libGluZyxHPXIsSj11Lmdyb3VwLEl0LmRyYWdnZWQ9TCxydD0oZXQ9e3RhcmdldDpMLGNsaWVudFg6KGV8fHQpLmNsaWVudFgsY2xpZW50WTooZXx8dCkuY2xpZW50WX0pLmNsaWVudFgtaC5sZWZ0LGF0PWV0LmNsaWVudFktaC50b3AsdGhpcy5fbGFzdFg9KGV8fHQpLmNsaWVudFgsdGhpcy5fbGFzdFk9KGV8fHQpLmNsaWVudFksTC5zdHlsZVtcIndpbGwtY2hhbmdlXCJdPVwiYWxsXCIsYT1mdW5jdGlvbigpe0goXCJkZWxheUVuZGVkXCIsbCx7ZXZ0OnR9KSxJdC5ldmVudENhbmNlbGVkP2wuX29uRHJvcCgpOihsLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKSwhaSYmbC5uYXRpdmVEcmFnZ2FibGUmJihMLmRyYWdnYWJsZT0hMCksbC5fdHJpZ2dlckRyYWdTdGFydCh0LGUpLEYoe3NvcnRhYmxlOmwsbmFtZTpcImNob29zZVwiLG9yaWdpbmFsRXZlbnQ6dH0pLHYoTCx1LmNob3NlbkNsYXNzLCEwKSl9LHUuaWdub3JlLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3coTCx0LnRyaW0oKSxrdCl9KSxjKGQsXCJkcmFnb3ZlclwiLE90KSxjKGQsXCJtb3VzZW1vdmVcIixPdCksYyhkLFwidG91Y2htb3ZlXCIsT3QpLGMoZCxcIm1vdXNldXBcIixsLl9vbkRyb3ApLGMoZCxcInRvdWNoZW5kXCIsbC5fb25Ecm9wKSxjKGQsXCJ0b3VjaGNhbmNlbFwiLGwuX29uRHJvcCksaSYmdGhpcy5uYXRpdmVEcmFnZ2FibGUmJih0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZD00LEwuZHJhZ2dhYmxlPSEwKSxIKFwiZGVsYXlTdGFydFwiLHRoaXMse2V2dDp0fSksIXUuZGVsYXl8fHUuZGVsYXlPblRvdWNoT25seSYmIWV8fHRoaXMubmF0aXZlRHJhZ2dhYmxlJiYob3x8bikpYSgpO2Vsc2V7aWYoSXQuZXZlbnRDYW5jZWxlZClyZXR1cm4gdm9pZCB0aGlzLl9vbkRyb3AoKTtjKGQsXCJtb3VzZXVwXCIsbC5fZGlzYWJsZURlbGF5ZWREcmFnKSxjKGQsXCJ0b3VjaGVuZFwiLGwuX2Rpc2FibGVEZWxheWVkRHJhZyksYyhkLFwidG91Y2hjYW5jZWxcIixsLl9kaXNhYmxlRGVsYXllZERyYWcpLGMoZCxcIm1vdXNlbW92ZVwiLGwuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciksYyhkLFwidG91Y2htb3ZlXCIsbC5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKSx1LnN1cHBvcnRQb2ludGVyJiZjKGQsXCJwb2ludGVybW92ZVwiLGwuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciksbC5fZHJhZ1N0YXJ0VGltZXI9c2V0VGltZW91dChhLHUuZGVsYXkpfX19LF9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXI6ZnVuY3Rpb24odCl7dmFyIGU9dC50b3VjaGVzP3QudG91Y2hlc1swXTp0O01hdGgubWF4KE1hdGguYWJzKGUuY2xpZW50WC10aGlzLl9sYXN0WCksTWF0aC5hYnMoZS5jbGllbnRZLXRoaXMuX2xhc3RZKSk+PU1hdGguZmxvb3IodGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQvKHRoaXMubmF0aXZlRHJhZ2dhYmxlJiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkpJiZ0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcoKX0sX2Rpc2FibGVEZWxheWVkRHJhZzpmdW5jdGlvbigpe0wmJmt0KEwpLGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lciksdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCl9LF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsLm93bmVyRG9jdW1lbnQ7dSh0LFwibW91c2V1cFwiLHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyksdSh0LFwidG91Y2hlbmRcIix0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpLHUodCxcInRvdWNoY2FuY2VsXCIsdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKSx1KHQsXCJtb3VzZW1vdmVcIix0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpLHUodCxcInRvdWNobW92ZVwiLHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciksdSh0LFwicG9pbnRlcm1vdmVcIix0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpfSxfdHJpZ2dlckRyYWdTdGFydDpmdW5jdGlvbih0LGUpe2U9ZXx8XCJ0b3VjaFwiPT10LnBvaW50ZXJUeXBlJiZ0LCF0aGlzLm5hdGl2ZURyYWdnYWJsZXx8ZT9jKGRvY3VtZW50LHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcj9cInBvaW50ZXJtb3ZlXCI6ZT9cInRvdWNobW92ZVwiOlwibW91c2Vtb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUpOihjKEwsXCJkcmFnZW5kXCIsdGhpcyksYyhqLFwiZHJhZ3N0YXJ0XCIsdGhpcy5fb25EcmFnU3RhcnQpKTt0cnl7ZG9jdW1lbnQuc2VsZWN0aW9uP1l0KGZ1bmN0aW9uKCl7ZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCl9KTp3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCl9Y2F0Y2godCl7fX0sX2RyYWdTdGFydGVkOmZ1bmN0aW9uKHQsZSl7aWYoaHQ9ITEsaiYmTCl7SChcImRyYWdTdGFydGVkXCIsdGhpcyx7ZXZ0OmV9KSx0aGlzLm5hdGl2ZURyYWdnYWJsZSYmYyhkb2N1bWVudCxcImRyYWdvdmVyXCIsQXQpO3ZhciBuPXRoaXMub3B0aW9uczshdCYmdihMLG4uZHJhZ0NsYXNzLCExKSx2KEwsbi5naG9zdENsYXNzLCEwKSxJdC5hY3RpdmU9dGhpcyx0JiZ0aGlzLl9hcHBlbmRHaG9zdCgpLEYoe3NvcnRhYmxlOnRoaXMsbmFtZTpcInN0YXJ0XCIsb3JpZ2luYWxFdmVudDplfSl9ZWxzZSB0aGlzLl9udWxsaW5nKCl9LF9lbXVsYXRlRHJhZ092ZXI6ZnVuY3Rpb24oKXtpZihudCl7dGhpcy5fbGFzdFg9bnQuY2xpZW50WCx0aGlzLl9sYXN0WT1udC5jbGllbnRZLHh0KCk7Zm9yKHZhciB0PWRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQobnQuY2xpZW50WCxudC5jbGllbnRZKSxlPXQ7dCYmdC5zaGFkb3dSb290JiYodD10LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludChudC5jbGllbnRYLG50LmNsaWVudFkpKSE9PWU7KWU9dDtpZihMLnBhcmVudE5vZGVba10uX2lzT3V0c2lkZVRoaXNFbCh0KSxlKWRve2lmKGVba10mJmVba10uX29uRHJhZ092ZXIoe2NsaWVudFg6bnQuY2xpZW50WCxjbGllbnRZOm50LmNsaWVudFksdGFyZ2V0OnQscm9vdEVsOmV9KSYmIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSlicmVhazt0PWV9d2hpbGUoZT1lLnBhcmVudE5vZGUpO010KCl9fSxfb25Ub3VjaE1vdmU6ZnVuY3Rpb24odCl7aWYoZXQpe3ZhciBlPXRoaXMub3B0aW9ucyxuPWUuZmFsbGJhY2tUb2xlcmFuY2Usbz1lLmZhbGxiYWNrT2Zmc2V0LGk9dC50b3VjaGVzP3QudG91Y2hlc1swXTp0LHI9VyYmYihXLCEwKSxhPVcmJnImJnIuYSxsPVcmJnImJnIuZCxzPXl0JiZkdCYmVChkdCksYz0oaS5jbGllbnRYLWV0LmNsaWVudFgrby54KS8oYXx8MSkrKHM/c1swXS1tdFswXTowKS8oYXx8MSksdT0oaS5jbGllbnRZLWV0LmNsaWVudFkrby55KS8obHx8MSkrKHM/c1sxXS1tdFsxXTowKS8obHx8MSk7aWYoIUl0LmFjdGl2ZSYmIWh0KXtpZihuJiZNYXRoLm1heChNYXRoLmFicyhpLmNsaWVudFgtdGhpcy5fbGFzdFgpLE1hdGguYWJzKGkuY2xpZW50WS10aGlzLl9sYXN0WSkpPG4pcmV0dXJuO3RoaXMuX29uRHJhZ1N0YXJ0KHQsITApfWlmKFcpe3I/KHIuZSs9Yy0ob3R8fDApLHIuZis9dS0oaXR8fDApKTpyPXthOjEsYjowLGM6MCxkOjEsZTpjLGY6dX07dmFyIGQ9XCJtYXRyaXgoXCIrci5hK1wiLFwiK3IuYitcIixcIityLmMrXCIsXCIrci5kK1wiLFwiK3IuZStcIixcIityLmYrXCIpXCI7bShXLFwid2Via2l0VHJhbnNmb3JtXCIsZCksbShXLFwibW96VHJhbnNmb3JtXCIsZCksbShXLFwibXNUcmFuc2Zvcm1cIixkKSxtKFcsXCJ0cmFuc2Zvcm1cIixkKSxvdD1jLGl0PXUsbnQ9aX10LmNhbmNlbGFibGUmJnQucHJldmVudERlZmF1bHQoKX19LF9hcHBlbmRHaG9zdDpmdW5jdGlvbigpe2lmKCFXKXt2YXIgdD10aGlzLm9wdGlvbnMuZmFsbGJhY2tPbkJvZHk/ZG9jdW1lbnQuYm9keTpqLGU9eShMLCEwLHl0LCEwLHQpLG49dGhpcy5vcHRpb25zO2lmKHl0KXtmb3IoZHQ9dDtcInN0YXRpY1wiPT09bShkdCxcInBvc2l0aW9uXCIpJiZcIm5vbmVcIj09PW0oZHQsXCJ0cmFuc2Zvcm1cIikmJmR0IT09ZG9jdW1lbnQ7KWR0PWR0LnBhcmVudE5vZGU7ZHQhPT1kb2N1bWVudC5ib2R5JiZkdCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8oZHQ9PT1kb2N1bWVudCYmKGR0PUUoKSksZS50b3ArPWR0LnNjcm9sbFRvcCxlLmxlZnQrPWR0LnNjcm9sbExlZnQpOmR0PUUoKSxtdD1UKGR0KX12KFc9TC5jbG9uZU5vZGUoITApLG4uZ2hvc3RDbGFzcywhMSksdihXLG4uZmFsbGJhY2tDbGFzcywhMCksdihXLG4uZHJhZ0NsYXNzLCEwKSxtKFcsXCJ0cmFuc2l0aW9uXCIsXCJcIiksbShXLFwidHJhbnNmb3JtXCIsXCJcIiksbShXLFwiYm94LXNpemluZ1wiLFwiYm9yZGVyLWJveFwiKSxtKFcsXCJtYXJnaW5cIiwwKSxtKFcsXCJ0b3BcIixlLnRvcCksbShXLFwibGVmdFwiLGUubGVmdCksbShXLFwid2lkdGhcIixlLndpZHRoKSxtKFcsXCJoZWlnaHRcIixlLmhlaWdodCksbShXLFwib3BhY2l0eVwiLFwiMC44XCIpLG0oVyxcInBvc2l0aW9uXCIseXQ/XCJhYnNvbHV0ZVwiOlwiZml4ZWRcIiksbShXLFwiekluZGV4XCIsXCIxMDAwMDBcIiksbShXLFwicG9pbnRlckV2ZW50c1wiLFwibm9uZVwiKSxJdC5naG9zdD1XLHQuYXBwZW5kQ2hpbGQoVyksbShXLFwidHJhbnNmb3JtLW9yaWdpblwiLHJ0L3BhcnNlSW50KFcuc3R5bGUud2lkdGgpKjEwMCtcIiUgXCIrYXQvcGFyc2VJbnQoVy5zdHlsZS5oZWlnaHQpKjEwMCtcIiVcIil9fSxfb25EcmFnU3RhcnQ6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLG89dC5kYXRhVHJhbnNmZXIsaT1uLm9wdGlvbnM7SChcImRyYWdTdGFydFwiLHRoaXMse2V2dDp0fSksSXQuZXZlbnRDYW5jZWxlZD90aGlzLl9vbkRyb3AoKTooSChcInNldHVwQ2xvbmVcIix0aGlzKSxJdC5ldmVudENhbmNlbGVkfHwoKFU9QShMKSkuZHJhZ2dhYmxlPSExLFUuc3R5bGVbXCJ3aWxsLWNoYW5nZVwiXT1cIlwiLHRoaXMuX2hpZGVDbG9uZSgpLHYoVSx0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsITEpLEl0LmNsb25lPVUpLG4uY2xvbmVJZD1ZdChmdW5jdGlvbigpe0goXCJjbG9uZVwiLG4pLEl0LmV2ZW50Q2FuY2VsZWR8fChuLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGV8fGouaW5zZXJ0QmVmb3JlKFUsTCksbi5faGlkZUNsb25lKCksRih7c29ydGFibGU6bixuYW1lOlwiY2xvbmVcIn0pKX0pLCFlJiZ2KEwsaS5kcmFnQ2xhc3MsITApLGU/KGZ0PSEwLG4uX2xvb3BJZD1zZXRJbnRlcnZhbChuLl9lbXVsYXRlRHJhZ092ZXIsNTApKToodShkb2N1bWVudCxcIm1vdXNldXBcIixuLl9vbkRyb3ApLHUoZG9jdW1lbnQsXCJ0b3VjaGVuZFwiLG4uX29uRHJvcCksdShkb2N1bWVudCxcInRvdWNoY2FuY2VsXCIsbi5fb25Ecm9wKSxvJiYoby5lZmZlY3RBbGxvd2VkPVwibW92ZVwiLGkuc2V0RGF0YSYmaS5zZXREYXRhLmNhbGwobixvLEwpKSxjKGRvY3VtZW50LFwiZHJvcFwiLG4pLG0oTCxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWigwKVwiKSksaHQ9ITAsbi5fZHJhZ1N0YXJ0SWQ9WXQobi5fZHJhZ1N0YXJ0ZWQuYmluZChuLGUsdCkpLGMoZG9jdW1lbnQsXCJzZWxlY3RzdGFydFwiLG4pLGx0PSEwLHImJm0oZG9jdW1lbnQuYm9keSxcInVzZXItc2VsZWN0XCIsXCJub25lXCIpKX0sX29uRHJhZ092ZXI6ZnVuY3Rpb24oZSl7dmFyIG4sbyxpLHIsYT10aGlzLmVsLGw9ZS50YXJnZXQscz10aGlzLm9wdGlvbnMsYz1zLmdyb3VwLHU9SXQuYWN0aXZlLGQ9Sj09PWMsaD1zLnNvcnQscD10dHx8dSxnPXRoaXMsYj0hMTtpZighYnQpe2lmKHZvaWQgMCE9PWUucHJldmVudERlZmF1bHQmJmUuY2FuY2VsYWJsZSYmZS5wcmV2ZW50RGVmYXVsdCgpLGw9ZihsLHMuZHJhZ2dhYmxlLGEsITApLEIoXCJkcmFnT3ZlclwiKSxJdC5ldmVudENhbmNlbGVkKXJldHVybiBiO2lmKEwuY29udGFpbnMoZS50YXJnZXQpfHxsLmFuaW1hdGVkJiZsLmFuaW1hdGluZ1gmJmwuYW5pbWF0aW5nWXx8Zy5faWdub3JlV2hpbGVBbmltYXRpbmc9PT1sKXJldHVybiBVKCExKTtpZihmdD0hMSx1JiYhcy5kaXNhYmxlZCYmKGQ/aHx8KGk9IWouY29udGFpbnMoTCkpOnR0PT09dGhpc3x8KHRoaXMubGFzdFB1dE1vZGU9Si5jaGVja1B1bGwodGhpcyx1LEwsZSkpJiZjLmNoZWNrUHV0KHRoaXMsdSxMLGUpKSl7aWYocj1cInZlcnRpY2FsXCI9PT10aGlzLl9nZXREaXJlY3Rpb24oZSxsKSxuPXkoTCksQihcImRyYWdPdmVyVmFsaWRcIiksSXQuZXZlbnRDYW5jZWxlZClyZXR1cm4gYjtpZihpKXJldHVybiBLPWosRygpLHRoaXMuX2hpZGVDbG9uZSgpLEIoXCJyZXZlcnRcIiksSXQuZXZlbnRDYW5jZWxlZHx8KHo/ai5pbnNlcnRCZWZvcmUoTCx6KTpqLmFwcGVuZENoaWxkKEwpKSxVKCEwKTt2YXIgdz1TKGEscy5kcmFnZ2FibGUpO2lmKCF3fHxmdW5jdGlvbih0LGUsbil7dmFyIG89eShTKG4uZWwsbi5vcHRpb25zLmRyYWdnYWJsZSkpO3JldHVybiBlP3QuY2xpZW50WD5vLnJpZ2h0KzEwfHx0LmNsaWVudFg8PW8ucmlnaHQmJnQuY2xpZW50WT5vLmJvdHRvbSYmdC5jbGllbnRYPj1vLmxlZnQ6dC5jbGllbnRYPm8ucmlnaHQmJnQuY2xpZW50WT5vLnRvcHx8dC5jbGllbnRYPD1vLnJpZ2h0JiZ0LmNsaWVudFk+by5ib3R0b20rMTB9KGUscix0aGlzKSYmIXcuYW5pbWF0ZWQpe2lmKHc9PT1MKXJldHVybiBVKCExKTtpZih3JiZhPT09ZS50YXJnZXQmJihsPXcpLGwmJihvPXkobCkpLCExIT09UHQoaixhLEwsbixsLG8sZSwhIWwpKXJldHVybiBHKCksYS5hcHBlbmRDaGlsZChMKSxLPWEscSgpLFUoITApfWVsc2UgaWYobC5wYXJlbnROb2RlPT09YSl7bz15KGwpO3ZhciBFLF8sVCx4PUwucGFyZW50Tm9kZSE9PWEsTT0hZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4/dC5sZWZ0OnQudG9wLGk9bj9lLmxlZnQ6ZS50b3A7cmV0dXJuIG89PT1pfHwobj90LnJpZ2h0OnQuYm90dG9tKT09PShuP2UucmlnaHQ6ZS5ib3R0b20pfHxvKyhuP3Qud2lkdGg6dC5oZWlnaHQpLzI9PT1pKyhuP2Uud2lkdGg6ZS5oZWlnaHQpLzJ9KEwuYW5pbWF0ZWQmJkwudG9SZWN0fHxuLGwuYW5pbWF0ZWQmJmwudG9SZWN0fHxvLHIpLE49cj9cInRvcFwiOlwibGVmdFwiLEE9RChsLFwidG9wXCIsXCJ0b3BcIil8fEQoTCxcInRvcFwiLFwidG9wXCIpLEk9QT9BLnNjcm9sbFRvcDp2b2lkIDA7aWYoc3QhPT1sJiYoXz1vW05dLGd0PSExLHZ0PSFNJiZzLmludmVydFN3YXB8fHgpLDAhPT0oRT1mdW5jdGlvbih0LGUsbixvLGkscixhLGwpe3ZhciBzPW8/dC5jbGllbnRZOnQuY2xpZW50WCxjPW8/bi5oZWlnaHQ6bi53aWR0aCx1PW8/bi50b3A6bi5sZWZ0LGQ9bz9uLmJvdHRvbTpuLnJpZ2h0LGg9ITE7aWYoIWEpaWYobCYmdXQ8YyppKXtpZighZ3QmJigxPT09Y3Q/cz51K2Mqci8yOnM8ZC1jKnIvMikmJihndD0hMCksZ3QpaD0hMDtlbHNlIGlmKDE9PT1jdD9zPHUrdXQ6cz5kLXV0KXJldHVybi1jdH1lbHNlIGlmKHM+dStjKigxLWkpLzImJnM8ZC1jKigxLWkpLzIpcmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBDKEwpPEModCk/MTotMX0oZSk7cmV0dXJuKGg9aHx8YSkmJihzPHUrYypyLzJ8fHM+ZC1jKnIvMik/cz51K2MvMj8xOi0xOjB9KGUsbCxvLHIsTT8xOnMuc3dhcFRocmVzaG9sZCxudWxsPT1zLmludmVydGVkU3dhcFRocmVzaG9sZD9zLnN3YXBUaHJlc2hvbGQ6cy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQsdnQsc3Q9PT1sKSkpe3ZhciBQPUMoTCk7ZG97VD1LLmNoaWxkcmVuW1AtPUVdfXdoaWxlKFQmJihcIm5vbmVcIj09PW0oVCxcImRpc3BsYXlcIil8fFQ9PT1XKSl9aWYoMD09PUV8fFQ9PT1sKXJldHVybiBVKCExKTtzdD1sLGN0PUU7dmFyIFI9bC5uZXh0RWxlbWVudFNpYmxpbmcsWD0hMSxZPVB0KGosYSxMLG4sbCxvLGUsWD0xPT09RSk7aWYoITEhPT1ZKXJldHVybiAxIT09WSYmLTEhPT1ZfHwoWD0xPT09WSksYnQ9ITAsc2V0VGltZW91dChSdCwzMCksRygpLFgmJiFSP2EuYXBwZW5kQ2hpbGQoTCk6bC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShMLFg/UjpsKSxBJiZPKEEsMCxJLUEuc2Nyb2xsVG9wKSxLPUwucGFyZW50Tm9kZSx2b2lkIDA9PT1ffHx2dHx8KHV0PU1hdGguYWJzKF8teShsKVtOXSkpLHEoKSxVKCEwKX1pZihhLmNvbnRhaW5zKEwpKXJldHVybiBVKCExKX1yZXR1cm4hMX1mdW5jdGlvbiBCKHMsYyl7SChzLGcsdCh7ZXZ0OmUsaXNPd25lcjpkLGF4aXM6cj9cInZlcnRpY2FsXCI6XCJob3Jpem9udGFsXCIscmV2ZXJ0OmksZHJhZ1JlY3Q6bix0YXJnZXRSZWN0Om8sY2FuU29ydDpoLGZyb21Tb3J0YWJsZTpwLHRhcmdldDpsLGNvbXBsZXRlZDpVLG9uTW92ZTpmdW5jdGlvbih0LG8pe3JldHVybiBQdChqLGEsTCxuLHQseSh0KSxlLG8pfSxjaGFuZ2VkOnF9LGMpKX1mdW5jdGlvbiBHKCl7QihcImRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZVwiKSxnLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpLGchPT1wJiZwLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpfWZ1bmN0aW9uIFUodCl7cmV0dXJuIEIoXCJkcmFnT3ZlckNvbXBsZXRlZFwiLHtpbnNlcnRpb246dH0pLHQmJihkP3UuX2hpZGVDbG9uZSgpOnUuX3Nob3dDbG9uZShnKSxnIT09cCYmKHYoTCx0dD90dC5vcHRpb25zLmdob3N0Q2xhc3M6dS5vcHRpb25zLmdob3N0Q2xhc3MsITEpLHYoTCxzLmdob3N0Q2xhc3MsITApKSx0dCE9PWcmJmchPT1JdC5hY3RpdmU/dHQ9ZzpnPT09SXQuYWN0aXZlJiZ0dCYmKHR0PW51bGwpLHA9PT1nJiYoZy5faWdub3JlV2hpbGVBbmltYXRpbmc9bCksZy5hbmltYXRlQWxsKGZ1bmN0aW9uKCl7QihcImRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGVcIiksZy5faWdub3JlV2hpbGVBbmltYXRpbmc9bnVsbH0pLGchPT1wJiYocC5hbmltYXRlQWxsKCkscC5faWdub3JlV2hpbGVBbmltYXRpbmc9bnVsbCkpLChsPT09TCYmIUwuYW5pbWF0ZWR8fGw9PT1hJiYhbC5hbmltYXRlZCkmJihzdD1udWxsKSxzLmRyYWdvdmVyQnViYmxlfHxlLnJvb3RFbHx8bD09PWRvY3VtZW50fHwoTC5wYXJlbnROb2RlW2tdLl9pc091dHNpZGVUaGlzRWwoZS50YXJnZXQpLCF0JiZPdChlKSksIXMuZHJhZ292ZXJCdWJibGUmJmUuc3RvcFByb3BhZ2F0aW9uJiZlLnN0b3BQcm9wYWdhdGlvbigpLGI9ITB9ZnVuY3Rpb24gcSgpe1o9QyhMKSwkPUMoTCxzLmRyYWdnYWJsZSksRih7c29ydGFibGU6ZyxuYW1lOlwiY2hhbmdlXCIsdG9FbDphLG5ld0luZGV4OlosbmV3RHJhZ2dhYmxlSW5kZXg6JCxvcmlnaW5hbEV2ZW50OmV9KX19LF9pZ25vcmVXaGlsZUFuaW1hdGluZzpudWxsLF9vZmZNb3ZlRXZlbnRzOmZ1bmN0aW9uKCl7dShkb2N1bWVudCxcIm1vdXNlbW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlKSx1KGRvY3VtZW50LFwidG91Y2htb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUpLHUoZG9jdW1lbnQsXCJwb2ludGVybW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlKSx1KGRvY3VtZW50LFwiZHJhZ292ZXJcIixPdCksdShkb2N1bWVudCxcIm1vdXNlbW92ZVwiLE90KSx1KGRvY3VtZW50LFwidG91Y2htb3ZlXCIsT3QpfSxfb2ZmVXBFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmVsLm93bmVyRG9jdW1lbnQ7dSh0LFwibW91c2V1cFwiLHRoaXMuX29uRHJvcCksdSh0LFwidG91Y2hlbmRcIix0aGlzLl9vbkRyb3ApLHUodCxcInBvaW50ZXJ1cFwiLHRoaXMuX29uRHJvcCksdSh0LFwidG91Y2hjYW5jZWxcIix0aGlzLl9vbkRyb3ApLHUoZG9jdW1lbnQsXCJzZWxlY3RzdGFydFwiLHRoaXMpfSxfb25Ecm9wOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZWwsbj10aGlzLm9wdGlvbnM7Wj1DKEwpLCQ9QyhMLG4uZHJhZ2dhYmxlKSxIKFwiZHJvcFwiLHRoaXMse2V2dDp0fSksSz1MJiZMLnBhcmVudE5vZGUsWj1DKEwpLCQ9QyhMLG4uZHJhZ2dhYmxlKSxJdC5ldmVudENhbmNlbGVkfHwoaHQ9ITEsdnQ9ITEsZ3Q9ITEsY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpLGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lciksQnQodGhpcy5jbG9uZUlkKSxCdCh0aGlzLl9kcmFnU3RhcnRJZCksdGhpcy5uYXRpdmVEcmFnZ2FibGUmJih1KGRvY3VtZW50LFwiZHJvcFwiLHRoaXMpLHUoZSxcImRyYWdzdGFydFwiLHRoaXMuX29uRHJhZ1N0YXJ0KSksdGhpcy5fb2ZmTW92ZUV2ZW50cygpLHRoaXMuX29mZlVwRXZlbnRzKCksciYmbShkb2N1bWVudC5ib2R5LFwidXNlci1zZWxlY3RcIixcIlwiKSxtKEwsXCJ0cmFuc2Zvcm1cIixcIlwiKSx0JiYobHQmJih0LmNhbmNlbGFibGUmJnQucHJldmVudERlZmF1bHQoKSwhbi5kcm9wQnViYmxlJiZ0LnN0b3BQcm9wYWdhdGlvbigpKSxXJiZXLnBhcmVudE5vZGUmJlcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChXKSwoaj09PUt8fHR0JiZcImNsb25lXCIhPT10dC5sYXN0UHV0TW9kZSkmJlUmJlUucGFyZW50Tm9kZSYmVS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFUpLEwmJih0aGlzLm5hdGl2ZURyYWdnYWJsZSYmdShMLFwiZHJhZ2VuZFwiLHRoaXMpLGt0KEwpLEwuc3R5bGVbXCJ3aWxsLWNoYW5nZVwiXT1cIlwiLGx0JiYhaHQmJnYoTCx0dD90dC5vcHRpb25zLmdob3N0Q2xhc3M6dGhpcy5vcHRpb25zLmdob3N0Q2xhc3MsITEpLHYoTCx0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsITEpLEYoe3NvcnRhYmxlOnRoaXMsbmFtZTpcInVuY2hvb3NlXCIsdG9FbDpLLG5ld0luZGV4Om51bGwsbmV3RHJhZ2dhYmxlSW5kZXg6bnVsbCxvcmlnaW5hbEV2ZW50OnR9KSxqIT09Sz8oWj49MCYmKEYoe3Jvb3RFbDpLLG5hbWU6XCJhZGRcIix0b0VsOkssZnJvbUVsOmosb3JpZ2luYWxFdmVudDp0fSksRih7c29ydGFibGU6dGhpcyxuYW1lOlwicmVtb3ZlXCIsdG9FbDpLLG9yaWdpbmFsRXZlbnQ6dH0pLEYoe3Jvb3RFbDpLLG5hbWU6XCJzb3J0XCIsdG9FbDpLLGZyb21FbDpqLG9yaWdpbmFsRXZlbnQ6dH0pLEYoe3NvcnRhYmxlOnRoaXMsbmFtZTpcInNvcnRcIix0b0VsOkssb3JpZ2luYWxFdmVudDp0fSkpLHR0JiZ0dC5zYXZlKCkpOlohPT1WJiZaPj0wJiYoRih7c29ydGFibGU6dGhpcyxuYW1lOlwidXBkYXRlXCIsdG9FbDpLLG9yaWdpbmFsRXZlbnQ6dH0pLEYoe3NvcnRhYmxlOnRoaXMsbmFtZTpcInNvcnRcIix0b0VsOkssb3JpZ2luYWxFdmVudDp0fSkpLEl0LmFjdGl2ZSYmKG51bGwhPVomJi0xIT09Wnx8KFo9ViwkPVEpLEYoe3NvcnRhYmxlOnRoaXMsbmFtZTpcImVuZFwiLHRvRWw6SyxvcmlnaW5hbEV2ZW50OnR9KSx0aGlzLnNhdmUoKSkpKSksdGhpcy5fbnVsbGluZygpfSxfbnVsbGluZzpmdW5jdGlvbigpe0goXCJudWxsaW5nXCIsdGhpcyksaj1MPUs9Vz16PVU9Rz1xPWV0PW50PWx0PVo9JD1WPVE9c3Q9Y3Q9dHQ9Sj1JdC5kcmFnZ2VkPUl0Lmdob3N0PUl0LmNsb25lPUl0LmFjdGl2ZT1udWxsLHd0LmZvckVhY2goZnVuY3Rpb24odCl7dC5jaGVja2VkPSEwfSksd3QubGVuZ3RoPW90PWl0PTB9LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcImRyb3BcIjpjYXNlXCJkcmFnZW5kXCI6dGhpcy5fb25Ecm9wKHQpO2JyZWFrO2Nhc2VcImRyYWdlbnRlclwiOmNhc2VcImRyYWdvdmVyXCI6TCYmKHRoaXMuX29uRHJhZ092ZXIodCksZnVuY3Rpb24odCl7dC5kYXRhVHJhbnNmZXImJih0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0PVwibW92ZVwiKSx0LmNhbmNlbGFibGUmJnQucHJldmVudERlZmF1bHQoKX0odCkpO2JyZWFrO2Nhc2VcInNlbGVjdHN0YXJ0XCI6dC5wcmV2ZW50RGVmYXVsdCgpfX0sdG9BcnJheTpmdW5jdGlvbigpe2Zvcih2YXIgdCxlPVtdLG49dGhpcy5lbC5jaGlsZHJlbixvPTAsaT1uLmxlbmd0aCxyPXRoaXMub3B0aW9ucztvPGk7bysrKWYodD1uW29dLHIuZHJhZ2dhYmxlLHRoaXMuZWwsITEpJiZlLnB1c2godC5nZXRBdHRyaWJ1dGUoci5kYXRhSWRBdHRyKXx8WHQodCkpO3JldHVybiBlfSxzb3J0OmZ1bmN0aW9uKHQpe3ZhciBlPXt9LG49dGhpcy5lbDt0aGlzLnRvQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uKHQsbyl7dmFyIGk9bi5jaGlsZHJlbltvXTtmKGksdGhpcy5vcHRpb25zLmRyYWdnYWJsZSxuLCExKSYmKGVbdF09aSl9LHRoaXMpLHQuZm9yRWFjaChmdW5jdGlvbih0KXtlW3RdJiYobi5yZW1vdmVDaGlsZChlW3RdKSxuLmFwcGVuZENoaWxkKGVbdF0pKX0pfSxzYXZlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnN0b3JlO3QmJnQuc2V0JiZ0LnNldCh0aGlzKX0sY2xvc2VzdDpmdW5jdGlvbih0LGUpe3JldHVybiBmKHQsZXx8dGhpcy5vcHRpb25zLmRyYWdnYWJsZSx0aGlzLmVsLCExKX0sb3B0aW9uOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5vcHRpb25zO2lmKHZvaWQgMD09PWUpcmV0dXJuIG5bdF07dmFyIG89WS5tb2RpZnlPcHRpb24odGhpcyx0LGUpO25bdF09dm9pZCAwIT09bz9vOmUsXCJncm91cFwiPT09dCYmVHQobil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtIKFwiZGVzdHJveVwiLHRoaXMpO3ZhciB0PXRoaXMuZWw7dFtrXT1udWxsLHUodCxcIm1vdXNlZG93blwiLHRoaXMuX29uVGFwU3RhcnQpLHUodCxcInRvdWNoc3RhcnRcIix0aGlzLl9vblRhcFN0YXJ0KSx1KHQsXCJwb2ludGVyZG93blwiLHRoaXMuX29uVGFwU3RhcnQpLHRoaXMubmF0aXZlRHJhZ2dhYmxlJiYodSh0LFwiZHJhZ292ZXJcIix0aGlzKSx1KHQsXCJkcmFnZW50ZXJcIix0aGlzKSksQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZHJhZ2dhYmxlXVwiKSxmdW5jdGlvbih0KXt0LnJlbW92ZUF0dHJpYnV0ZShcImRyYWdnYWJsZVwiKX0pLHRoaXMuX29uRHJvcCgpLHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpLHB0LnNwbGljZShwdC5pbmRleE9mKHRoaXMuZWwpLDEpLHRoaXMuZWw9dD1udWxsfSxfaGlkZUNsb25lOmZ1bmN0aW9uKCl7aWYoIXEpe2lmKEgoXCJoaWRlQ2xvbmVcIix0aGlzKSxJdC5ldmVudENhbmNlbGVkKXJldHVybjttKFUsXCJkaXNwbGF5XCIsXCJub25lXCIpLHRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSYmVS5wYXJlbnROb2RlJiZVLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoVSkscT0hMH19LF9zaG93Q2xvbmU6ZnVuY3Rpb24odCl7aWYoXCJjbG9uZVwiPT09dC5sYXN0UHV0TW9kZSl7aWYocSl7aWYoSChcInNob3dDbG9uZVwiLHRoaXMpLEl0LmV2ZW50Q2FuY2VsZWQpcmV0dXJuO0wucGFyZW50Tm9kZSE9anx8dGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lP3o/ai5pbnNlcnRCZWZvcmUoVSx6KTpqLmFwcGVuZENoaWxkKFUpOmouaW5zZXJ0QmVmb3JlKFUsTCksdGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lJiZ0aGlzLmFuaW1hdGUoTCxVKSxtKFUsXCJkaXNwbGF5XCIsXCJcIikscT0hMX19ZWxzZSB0aGlzLl9oaWRlQ2xvbmUoKX19LEV0JiZjKGRvY3VtZW50LFwidG91Y2htb3ZlXCIsZnVuY3Rpb24odCl7KEl0LmFjdGl2ZXx8aHQpJiZ0LmNhbmNlbGFibGUmJnQucHJldmVudERlZmF1bHQoKX0pLEl0LnV0aWxzPXtvbjpjLG9mZjp1LGNzczptLGZpbmQ6dyxpczpmdW5jdGlvbih0LGUpe3JldHVybiEhZih0LGUsdCwhMSl9LGV4dGVuZDpmdW5jdGlvbih0LGUpe2lmKHQmJmUpZm9yKHZhciBuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmKHRbbl09ZVtuXSk7cmV0dXJuIHR9LHRocm90dGxlOk4sY2xvc2VzdDpmLHRvZ2dsZUNsYXNzOnYsY2xvbmU6QSxpbmRleDpDLG5leHRUaWNrOll0LGNhbmNlbE5leHRUaWNrOkJ0LGRldGVjdERpcmVjdGlvbjpDdCxnZXRDaGlsZDpffSxJdC5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRba119LEl0Lm1vdW50PWZ1bmN0aW9uKCl7dmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2VbMF0uY29uc3RydWN0b3I9PT1BcnJheSYmKGU9ZVswXSksZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKCFlLnByb3RvdHlwZXx8IWUucHJvdG90eXBlLmNvbnN0cnVjdG9yKXRocm93XCJTb3J0YWJsZTogTW91bnRlZCBwbHVnaW4gbXVzdCBiZSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBub3QgXCIre30udG9TdHJpbmcuY2FsbChlKTtlLnV0aWxzJiYoSXQudXRpbHM9dCh7fSxJdC51dGlscyxlLnV0aWxzKSksWS5tb3VudChlKX0pfSxJdC5jcmVhdGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbmV3IEl0KHQsZSl9LEl0LnZlcnNpb249XCIxLjEyLjBcIjt2YXIgSHQsRnQsTHQsS3QsV3QsanQ9W10senQ9W10sR3Q9ITEsVXQ9ITEscXQ9ITE7ZnVuY3Rpb24gVnQodCxlKXt6dC5mb3JFYWNoKGZ1bmN0aW9uKG4sbyl7dmFyIGk9ZS5jaGlsZHJlbltuLnNvcnRhYmxlSW5kZXgrKHQ/TnVtYmVyKG8pOjApXTtpP2UuaW5zZXJ0QmVmb3JlKG4saSk6ZS5hcHBlbmRDaGlsZChuKX0pfWZ1bmN0aW9uIFp0KCl7anQuZm9yRWFjaChmdW5jdGlvbih0KXt0IT09THQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSl9dmFyIFF0PWZ1bmN0aW9uKHQpe3ZhciBlPXQub3JpZ2luYWxFdmVudCxuPXQucHV0U29ydGFibGUsbz10LmRyYWdFbCxpPXQuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LHI9dC51bmhpZGVHaG9zdEZvclRhcmdldDtpZihlKXt2YXIgYT1ufHx0LmFjdGl2ZVNvcnRhYmxlOygwLHQuaGlkZUdob3N0Rm9yVGFyZ2V0KSgpO3ZhciBsPWUuY2hhbmdlZFRvdWNoZXMmJmUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoP2UuY2hhbmdlZFRvdWNoZXNbMF06ZSxzPWRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQobC5jbGllbnRYLGwuY2xpZW50WSk7cigpLGEmJiFhLmVsLmNvbnRhaW5zKHMpJiYoaShcInNwaWxsXCIpLHRoaXMub25TcGlsbCh7ZHJhZ0VsOm8scHV0U29ydGFibGU6bn0pKX19O2Z1bmN0aW9uICR0KCl7fWZ1bmN0aW9uIEp0KCl7fSR0LnByb3RvdHlwZT17c3RhcnRJbmRleDpudWxsLGRyYWdTdGFydDpmdW5jdGlvbih0KXt0aGlzLnN0YXJ0SW5kZXg9dC5vbGREcmFnZ2FibGVJbmRleH0sb25TcGlsbDpmdW5jdGlvbih0KXt2YXIgZT10LmRyYWdFbCxuPXQucHV0U29ydGFibGU7dGhpcy5zb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSxuJiZuLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO3ZhciBvPV8odGhpcy5zb3J0YWJsZS5lbCx0aGlzLnN0YXJ0SW5kZXgsdGhpcy5vcHRpb25zKTtvP3RoaXMuc29ydGFibGUuZWwuaW5zZXJ0QmVmb3JlKGUsbyk6dGhpcy5zb3J0YWJsZS5lbC5hcHBlbmRDaGlsZChlKSx0aGlzLnNvcnRhYmxlLmFuaW1hdGVBbGwoKSxuJiZuLmFuaW1hdGVBbGwoKX0sZHJvcDpRdH0sT2JqZWN0LmFzc2lnbigkdCx7cGx1Z2luTmFtZTpcInJldmVydE9uU3BpbGxcIn0pLEp0LnByb3RvdHlwZT17b25TcGlsbDpmdW5jdGlvbih0KXt2YXIgZT10LmRyYWdFbCxuPXQucHV0U29ydGFibGV8fHRoaXMuc29ydGFibGU7bi5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSxlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSxuLmFuaW1hdGVBbGwoKX0sZHJvcDpRdH0sT2JqZWN0LmFzc2lnbihKdCx7cGx1Z2luTmFtZTpcInJlbW92ZU9uU3BpbGxcIn0pO3ZhciB0ZSxlZSxuZSxvZSxpZSxyZSxhZT1bXSxsZT0hMTtmdW5jdGlvbiBzZSgpe2FlLmZvckVhY2goZnVuY3Rpb24odCl7Y2xlYXJJbnRlcnZhbCh0LnBpZCl9KSxhZT1bXX1mdW5jdGlvbiBjZSgpe2NsZWFySW50ZXJ2YWwocmUpfXZhciB1ZT1OKGZ1bmN0aW9uKHQsZSxuLG8pe2lmKGUuc2Nyb2xsKXt2YXIgaSxyPSh0LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQpLmNsaWVudFgsYT0odC50b3VjaGVzP3QudG91Y2hlc1swXTp0KS5jbGllbnRZLGw9ZS5zY3JvbGxTZW5zaXRpdml0eSxzPWUuc2Nyb2xsU3BlZWQsYz1FKCksdT0hMTtlZSE9PW4mJihlZT1uLHNlKCksaT1lLnNjcm9sbEZuLCEwPT09KHRlPWUuc2Nyb2xsKSYmKHRlPXgobiwhMCkpKTt2YXIgZD0wLGg9dGU7ZG97dmFyIGY9aCxwPXkoZiksZz1wLnRvcCx2PXAuYm90dG9tLGI9cC5sZWZ0LHc9cC5yaWdodCxEPXAud2lkdGgsXz1wLmhlaWdodCxTPXZvaWQgMCxDPXZvaWQgMCxUPWYuc2Nyb2xsV2lkdGgsTT1mLnNjcm9sbEhlaWdodCxOPW0oZiksQT1mLnNjcm9sbExlZnQsST1mLnNjcm9sbFRvcDtmPT09Yz8oUz1EPFQmJihcImF1dG9cIj09PU4ub3ZlcmZsb3dYfHxcInNjcm9sbFwiPT09Ti5vdmVyZmxvd1h8fFwidmlzaWJsZVwiPT09Ti5vdmVyZmxvd1gpLEM9XzxNJiYoXCJhdXRvXCI9PT1OLm92ZXJmbG93WXx8XCJzY3JvbGxcIj09PU4ub3ZlcmZsb3dZfHxcInZpc2libGVcIj09PU4ub3ZlcmZsb3dZKSk6KFM9RDxUJiYoXCJhdXRvXCI9PT1OLm92ZXJmbG93WHx8XCJzY3JvbGxcIj09PU4ub3ZlcmZsb3dYKSxDPV88TSYmKFwiYXV0b1wiPT09Ti5vdmVyZmxvd1l8fFwic2Nyb2xsXCI9PT1OLm92ZXJmbG93WSkpO3ZhciBQPVMmJihNYXRoLmFicyh3LXIpPD1sJiZBK0Q8VCktKE1hdGguYWJzKGItcik8PWwmJiEhQSksUj1DJiYoTWF0aC5hYnModi1hKTw9bCYmSStfPE0pLShNYXRoLmFicyhnLWEpPD1sJiYhIUkpO2lmKCFhZVtkXSlmb3IodmFyIFg9MDtYPD1kO1grKylhZVtYXXx8KGFlW1hdPXt9KTthZVtkXS52eD09UCYmYWVbZF0udnk9PVImJmFlW2RdLmVsPT09Znx8KGFlW2RdLmVsPWYsYWVbZF0udng9UCxhZVtkXS52eT1SLGNsZWFySW50ZXJ2YWwoYWVbZF0ucGlkKSwwPT1QJiYwPT1SfHwodT0hMCxhZVtkXS5waWQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtvJiYwPT09dGhpcy5sYXllciYmSXQuYWN0aXZlLl9vblRvdWNoTW92ZShpZSk7dmFyIGU9YWVbdGhpcy5sYXllcl0udnk/YWVbdGhpcy5sYXllcl0udnkqczowLG49YWVbdGhpcy5sYXllcl0udng/YWVbdGhpcy5sYXllcl0udngqczowO1wiZnVuY3Rpb25cIj09dHlwZW9mIGkmJlwiY29udGludWVcIiE9PWkuY2FsbChJdC5kcmFnZ2VkLnBhcmVudE5vZGVba10sbixlLHQsaWUsYWVbdGhpcy5sYXllcl0uZWwpfHxPKGFlW3RoaXMubGF5ZXJdLmVsLG4sZSl9LmJpbmQoe2xheWVyOmR9KSwyNCkpKSxkKyt9d2hpbGUoZS5idWJibGVTY3JvbGwmJmghPT1jJiYoaD14KGgsITEpKSk7bGU9dX19LDMwKTtJdC5tb3VudChuZXcgZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7Zm9yKHZhciB0IGluIHRoaXMuZGVmYXVsdHM9e3Njcm9sbDohMCxzY3JvbGxTZW5zaXRpdml0eTozMCxzY3JvbGxTcGVlZDoxMCxidWJibGVTY3JvbGw6ITB9LHRoaXMpXCJfXCI9PT10LmNoYXJBdCgwKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpc1t0XSYmKHRoaXNbdF09dGhpc1t0XS5iaW5kKHRoaXMpKX1yZXR1cm4gdC5wcm90b3R5cGU9e2RyYWdTdGFydGVkOmZ1bmN0aW9uKHQpe3ZhciBlPXQub3JpZ2luYWxFdmVudDt0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZT9jKGRvY3VtZW50LFwiZHJhZ292ZXJcIix0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTpjKGRvY3VtZW50LHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcj9cInBvaW50ZXJtb3ZlXCI6ZS50b3VjaGVzP1widG91Y2htb3ZlXCI6XCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpfSxkcmFnT3ZlckNvbXBsZXRlZDpmdW5jdGlvbih0KXt2YXIgZT10Lm9yaWdpbmFsRXZlbnQ7dGhpcy5vcHRpb25zLmRyYWdPdmVyQnViYmxlfHxlLnJvb3RFbHx8dGhpcy5faGFuZGxlQXV0b1Njcm9sbChlKX0sZHJvcDpmdW5jdGlvbigpe3RoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlP3UoZG9jdW1lbnQsXCJkcmFnb3ZlclwiLHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpOih1KGRvY3VtZW50LFwicG9pbnRlcm1vdmVcIix0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpLHUoZG9jdW1lbnQsXCJ0b3VjaG1vdmVcIix0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpLHUoZG9jdW1lbnQsXCJtb3VzZW1vdmVcIix0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpKSxjZSgpLHNlKCksY2xlYXJUaW1lb3V0KHApLHA9dm9pZCAwfSxudWxsaW5nOmZ1bmN0aW9uKCl7aWU9ZWU9dGU9bGU9cmU9bmU9b2U9bnVsbCxhZS5sZW5ndGg9MH0sX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbDpmdW5jdGlvbih0KXt0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKHQsITApfSxfaGFuZGxlQXV0b1Njcm9sbDpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMsYT0odC50b3VjaGVzP3QudG91Y2hlc1swXTp0KS5jbGllbnRYLGw9KHQudG91Y2hlcz90LnRvdWNoZXNbMF06dCkuY2xpZW50WSxzPWRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoYSxsKTtpZihpZT10LGV8fG98fG58fHIpe3VlKHQsdGhpcy5vcHRpb25zLHMsZSk7dmFyIGM9eChzLCEwKTshbGV8fHJlJiZhPT09bmUmJmw9PT1vZXx8KHJlJiZjZSgpLHJlPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIG49eChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGEsbCksITApO24hPT1jJiYoYz1uLHNlKCkpLHVlKHQsaS5vcHRpb25zLG4sZSl9LDEwKSxuZT1hLG9lPWwpfWVsc2V7aWYoIXRoaXMub3B0aW9ucy5idWJibGVTY3JvbGx8fHgocywhMCk9PT1FKCkpcmV0dXJuIHZvaWQgc2UoKTt1ZSh0LHRoaXMub3B0aW9ucyx4KHMsITEpLCExKX19fSxPYmplY3QuYXNzaWduKHQse3BsdWdpbk5hbWU6XCJzY3JvbGxcIixpbml0aWFsaXplQnlEZWZhdWx0OiEwfSl9KSxJdC5tb3VudChKdCwkdCksSXQubW91bnQobmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuZGVmYXVsdHM9e3N3YXBDbGFzczpcInNvcnRhYmxlLXN3YXAtaGlnaGxpZ2h0XCJ9fXJldHVybiB0LnByb3RvdHlwZT17ZHJhZ1N0YXJ0OmZ1bmN0aW9uKHQpe050PXQuZHJhZ0VsfSxkcmFnT3ZlclZhbGlkOmZ1bmN0aW9uKHQpe3ZhciBlPXQuY29tcGxldGVkLG49dC50YXJnZXQsbz10LmNoYW5nZWQsaT10LmNhbmNlbDtpZih0LmFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc3dhcCl7dmFyIHI9dGhpcy5vcHRpb25zO2lmKG4mJm4hPT10aGlzLnNvcnRhYmxlLmVsKXt2YXIgYT1OdDshMSE9PSgwLHQub25Nb3ZlKShuKT8odihuLHIuc3dhcENsYXNzLCEwKSxOdD1uKTpOdD1udWxsLGEmJmEhPT1OdCYmdihhLHIuc3dhcENsYXNzLCExKX1vKCksZSghMCksaSgpfX0sZHJvcDpmdW5jdGlvbih0KXt2YXIgZSxuLG8saSxyLGEsbD10LmFjdGl2ZVNvcnRhYmxlLHM9dC5wdXRTb3J0YWJsZSxjPXQuZHJhZ0VsLHU9c3x8dGhpcy5zb3J0YWJsZSxkPXRoaXMub3B0aW9ucztOdCYmdihOdCxkLnN3YXBDbGFzcywhMSksTnQmJihkLnN3YXB8fHMmJnMub3B0aW9ucy5zd2FwKSYmYyE9PU50JiYodS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSx1IT09bCYmbC5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSxhPShuPU50KS5wYXJlbnROb2RlLChyPShlPWMpLnBhcmVudE5vZGUpJiZhJiYhci5pc0VxdWFsTm9kZShuKSYmIWEuaXNFcXVhbE5vZGUoZSkmJihvPUMoZSksaT1DKG4pLHIuaXNFcXVhbE5vZGUoYSkmJm88aSYmaSsrLHIuaW5zZXJ0QmVmb3JlKG4sci5jaGlsZHJlbltvXSksYS5pbnNlcnRCZWZvcmUoZSxhLmNoaWxkcmVuW2ldKSksdS5hbmltYXRlQWxsKCksdSE9PWwmJmwuYW5pbWF0ZUFsbCgpKX0sbnVsbGluZzpmdW5jdGlvbigpe050PW51bGx9fSxPYmplY3QuYXNzaWduKHQse3BsdWdpbk5hbWU6XCJzd2FwXCIsZXZlbnRQcm9wZXJ0aWVzOmZ1bmN0aW9uKCl7cmV0dXJue3N3YXBJdGVtOk50fX19KX0pLEl0Lm1vdW50KG5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7Zm9yKHZhciBlIGluIHRoaXMpXCJfXCI9PT1lLmNoYXJBdCgwKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpc1tlXSYmKHRoaXNbZV09dGhpc1tlXS5iaW5kKHRoaXMpKTt0Lm9wdGlvbnMuc3VwcG9ydFBvaW50ZXI/Yyhkb2N1bWVudCxcInBvaW50ZXJ1cFwiLHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTooYyhkb2N1bWVudCxcIm1vdXNldXBcIix0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyksYyhkb2N1bWVudCxcInRvdWNoZW5kXCIsdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpKSxjKGRvY3VtZW50LFwia2V5ZG93blwiLHRoaXMuX2NoZWNrS2V5RG93biksYyhkb2N1bWVudCxcImtleXVwXCIsdGhpcy5fY2hlY2tLZXlVcCksdGhpcy5kZWZhdWx0cz17c2VsZWN0ZWRDbGFzczpcInNvcnRhYmxlLXNlbGVjdGVkXCIsbXVsdGlEcmFnS2V5Om51bGwsc2V0RGF0YTpmdW5jdGlvbihlLG4pe3ZhciBvPVwiXCI7anQubGVuZ3RoJiZGdD09PXQ/anQuZm9yRWFjaChmdW5jdGlvbih0LGUpe28rPShlP1wiLCBcIjpcIlwiKSt0LnRleHRDb250ZW50fSk6bz1uLnRleHRDb250ZW50LGUuc2V0RGF0YShcIlRleHRcIixvKX19fXJldHVybiB0LnByb3RvdHlwZT17bXVsdGlEcmFnS2V5RG93bjohMSxpc011bHRpRHJhZzohMSxkZWxheVN0YXJ0R2xvYmFsOmZ1bmN0aW9uKHQpe0x0PXQuZHJhZ0VsfSxkZWxheUVuZGVkOmZ1bmN0aW9uKCl7dGhpcy5pc011bHRpRHJhZz1+anQuaW5kZXhPZihMdCl9LHNldHVwQ2xvbmU6ZnVuY3Rpb24odCl7dmFyIGU9dC5zb3J0YWJsZSxuPXQuY2FuY2VsO2lmKHRoaXMuaXNNdWx0aURyYWcpe2Zvcih2YXIgbz0wO288anQubGVuZ3RoO28rKyl6dC5wdXNoKEEoanRbb10pKSx6dFtvXS5zb3J0YWJsZUluZGV4PWp0W29dLnNvcnRhYmxlSW5kZXgsenRbb10uZHJhZ2dhYmxlPSExLHp0W29dLnN0eWxlW1wid2lsbC1jaGFuZ2VcIl09XCJcIix2KHp0W29dLHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCExKSxqdFtvXT09PUx0JiZ2KHp0W29dLHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywhMSk7ZS5faGlkZUNsb25lKCksbigpfX0sY2xvbmU6ZnVuY3Rpb24odCl7dmFyIGU9dC5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsbj10LmNhbmNlbDt0aGlzLmlzTXVsdGlEcmFnJiYodGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlfHxqdC5sZW5ndGgmJkZ0PT09dC5zb3J0YWJsZSYmKFZ0KCEwLHQucm9vdEVsKSxlKFwiY2xvbmVcIiksbigpKSl9LHNob3dDbG9uZTpmdW5jdGlvbih0KXt2YXIgZT10LmNsb25lTm93U2hvd24sbj10LmNhbmNlbDt0aGlzLmlzTXVsdGlEcmFnJiYoVnQoITEsdC5yb290RWwpLHp0LmZvckVhY2goZnVuY3Rpb24odCl7bSh0LFwiZGlzcGxheVwiLFwiXCIpfSksZSgpLFd0PSExLG4oKSl9LGhpZGVDbG9uZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dC5jbG9uZU5vd0hpZGRlbixvPXQuY2FuY2VsO3RoaXMuaXNNdWx0aURyYWcmJih6dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe20odCxcImRpc3BsYXlcIixcIm5vbmVcIiksZS5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlJiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KX0pLG4oKSxXdD0hMCxvKCkpfSxkcmFnU3RhcnRHbG9iYWw6ZnVuY3Rpb24odCl7IXRoaXMuaXNNdWx0aURyYWcmJkZ0JiZGdC5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCksanQuZm9yRWFjaChmdW5jdGlvbih0KXt0LnNvcnRhYmxlSW5kZXg9Qyh0KX0pLGp0PWp0LnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5zb3J0YWJsZUluZGV4LWUuc29ydGFibGVJbmRleH0pLHF0PSEwfSxkcmFnU3RhcnRlZDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dC5zb3J0YWJsZTtpZih0aGlzLmlzTXVsdGlEcmFnKXtpZih0aGlzLm9wdGlvbnMuc29ydCYmKG4uY2FwdHVyZUFuaW1hdGlvblN0YXRlKCksdGhpcy5vcHRpb25zLmFuaW1hdGlvbikpe2p0LmZvckVhY2goZnVuY3Rpb24odCl7dCE9PUx0JiZtKHQsXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIil9KTt2YXIgbz15KEx0LCExLCEwLCEwKTtqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QhPT1MdCYmSSh0LG8pfSksVXQ9ITAsR3Q9ITB9bi5hbmltYXRlQWxsKGZ1bmN0aW9uKCl7VXQ9ITEsR3Q9ITEsZS5vcHRpb25zLmFuaW1hdGlvbiYmanQuZm9yRWFjaChmdW5jdGlvbih0KXtQKHQpfSksZS5vcHRpb25zLnNvcnQmJlp0KCl9KX19LGRyYWdPdmVyOmZ1bmN0aW9uKHQpe3ZhciBlPXQuY29tcGxldGVkLG49dC5jYW5jZWw7VXQmJn5qdC5pbmRleE9mKHQudGFyZ2V0KSYmKGUoITEpLG4oKSl9LHJldmVydDpmdW5jdGlvbih0KXt2YXIgZT10LmZyb21Tb3J0YWJsZSxuPXQucm9vdEVsLG89dC5zb3J0YWJsZSxpPXQuZHJhZ1JlY3Q7anQubGVuZ3RoPjEmJihqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe28uYWRkQW5pbWF0aW9uU3RhdGUoe3RhcmdldDp0LHJlY3Q6VXQ/eSh0KTppfSksUCh0KSx0LmZyb21SZWN0PWksZS5yZW1vdmVBbmltYXRpb25TdGF0ZSh0KX0pLFV0PSExLGZ1bmN0aW9uKHQsZSl7anQuZm9yRWFjaChmdW5jdGlvbihuLG8pe3ZhciBpPWUuY2hpbGRyZW5bbi5zb3J0YWJsZUluZGV4Kyh0P051bWJlcihvKTowKV07aT9lLmluc2VydEJlZm9yZShuLGkpOmUuYXBwZW5kQ2hpbGQobil9KX0oIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSxuKSl9LGRyYWdPdmVyQ29tcGxldGVkOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc29ydGFibGUsbj10LmlzT3duZXIsbz10LmFjdGl2ZVNvcnRhYmxlLGk9dC5wYXJlbnRFbCxyPXQucHV0U29ydGFibGUsYT10aGlzLm9wdGlvbnM7aWYodC5pbnNlcnRpb24pe2lmKG4mJm8uX2hpZGVDbG9uZSgpLEd0PSExLGEuYW5pbWF0aW9uJiZqdC5sZW5ndGg+MSYmKFV0fHwhbiYmIW8ub3B0aW9ucy5zb3J0JiYhcikpe3ZhciBsPXkoTHQsITEsITAsITApO2p0LmZvckVhY2goZnVuY3Rpb24odCl7dCE9PUx0JiYoSSh0LGwpLGkuYXBwZW5kQ2hpbGQodCkpfSksVXQ9ITB9aWYoIW4paWYoVXR8fFp0KCksanQubGVuZ3RoPjEpe3ZhciBzPVd0O28uX3Nob3dDbG9uZShlKSxvLm9wdGlvbnMuYW5pbWF0aW9uJiYhV3QmJnMmJnp0LmZvckVhY2goZnVuY3Rpb24odCl7by5hZGRBbmltYXRpb25TdGF0ZSh7dGFyZ2V0OnQscmVjdDpLdH0pLHQuZnJvbVJlY3Q9S3QsdC50aGlzQW5pbWF0aW9uRHVyYXRpb249bnVsbH0pfWVsc2Ugby5fc2hvd0Nsb25lKGUpfX0sZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZHJhZ1JlY3Qsbj10LmlzT3duZXIsbz10LmFjdGl2ZVNvcnRhYmxlO2lmKGp0LmZvckVhY2goZnVuY3Rpb24odCl7dC50aGlzQW5pbWF0aW9uRHVyYXRpb249bnVsbH0pLG8ub3B0aW9ucy5hbmltYXRpb24mJiFuJiZvLm11bHRpRHJhZy5pc011bHRpRHJhZyl7S3Q9T2JqZWN0LmFzc2lnbih7fSxlKTt2YXIgaT1iKEx0LCEwKTtLdC50b3AtPWkuZixLdC5sZWZ0LT1pLmV9fSxkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7VXQmJihVdD0hMSxadCgpKX0sZHJvcDpmdW5jdGlvbih0KXt2YXIgZT10Lm9yaWdpbmFsRXZlbnQsbj10LnJvb3RFbCxvPXQucGFyZW50RWwsaT10LnNvcnRhYmxlLHI9dC5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsYT10Lm9sZEluZGV4LGw9dC5wdXRTb3J0YWJsZSxzPWx8fHRoaXMuc29ydGFibGU7aWYoZSl7dmFyIGM9dGhpcy5vcHRpb25zLHU9by5jaGlsZHJlbjtpZighcXQpaWYoYy5tdWx0aURyYWdLZXkmJiF0aGlzLm11bHRpRHJhZ0tleURvd24mJnRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCksdihMdCxjLnNlbGVjdGVkQ2xhc3MsIX5qdC5pbmRleE9mKEx0KSksfmp0LmluZGV4T2YoTHQpKWp0LnNwbGljZShqdC5pbmRleE9mKEx0KSwxKSxIdD1udWxsLEIoe3NvcnRhYmxlOmkscm9vdEVsOm4sbmFtZTpcImRlc2VsZWN0XCIsdGFyZ2V0RWw6THQsb3JpZ2luYWxFdnQ6ZX0pO2Vsc2V7aWYoanQucHVzaChMdCksQih7c29ydGFibGU6aSxyb290RWw6bixuYW1lOlwic2VsZWN0XCIsdGFyZ2V0RWw6THQsb3JpZ2luYWxFdnQ6ZX0pLGUuc2hpZnRLZXkmJkh0JiZpLmVsLmNvbnRhaW5zKEh0KSl7dmFyIGQsaCxmPUMoSHQpLHA9QyhMdCk7aWYofmYmJn5wJiZmIT09cClmb3IocD5mPyhoPWYsZD1wKTooaD1wLGQ9ZisxKTtoPGQ7aCsrKX5qdC5pbmRleE9mKHVbaF0pfHwodih1W2hdLGMuc2VsZWN0ZWRDbGFzcywhMCksanQucHVzaCh1W2hdKSxCKHtzb3J0YWJsZTppLHJvb3RFbDpuLG5hbWU6XCJzZWxlY3RcIix0YXJnZXRFbDp1W2hdLG9yaWdpbmFsRXZ0OmV9KSl9ZWxzZSBIdD1MdDtGdD1zfWlmKHF0JiZ0aGlzLmlzTXVsdGlEcmFnKXtpZigob1trXS5vcHRpb25zLnNvcnR8fG8hPT1uKSYmanQubGVuZ3RoPjEpe3ZhciBnPXkoTHQpLG09QyhMdCxcIjpub3QoLlwiK3RoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzK1wiKVwiKTtpZighR3QmJmMuYW5pbWF0aW9uJiYoTHQudGhpc0FuaW1hdGlvbkR1cmF0aW9uPW51bGwpLHMuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCksIUd0JiYoYy5hbmltYXRpb24mJihMdC5mcm9tUmVjdD1nLGp0LmZvckVhY2goZnVuY3Rpb24odCl7aWYodC50aGlzQW5pbWF0aW9uRHVyYXRpb249bnVsbCx0IT09THQpe3ZhciBlPVV0P3kodCk6Zzt0LmZyb21SZWN0PWUscy5hZGRBbmltYXRpb25TdGF0ZSh7dGFyZ2V0OnQscmVjdDplfSl9fSkpLFp0KCksanQuZm9yRWFjaChmdW5jdGlvbih0KXt1W21dP28uaW5zZXJ0QmVmb3JlKHQsdVttXSk6by5hcHBlbmRDaGlsZCh0KSxtKyt9KSxhPT09QyhMdCkpKXt2YXIgYj0hMTtqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3Quc29ydGFibGVJbmRleD09PUModCl8fChiPSEwKX0pLGImJnIoXCJ1cGRhdGVcIil9anQuZm9yRWFjaChmdW5jdGlvbih0KXtQKHQpfSkscy5hbmltYXRlQWxsKCl9RnQ9c30obj09PW98fGwmJlwiY2xvbmVcIiE9PWwubGFzdFB1dE1vZGUpJiZ6dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSl9fSxudWxsaW5nR2xvYmFsOmZ1bmN0aW9uKCl7dGhpcy5pc011bHRpRHJhZz1xdD0hMSx6dC5sZW5ndGg9MH0sZGVzdHJveUdsb2JhbDpmdW5jdGlvbigpe3RoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCksdShkb2N1bWVudCxcInBvaW50ZXJ1cFwiLHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKSx1KGRvY3VtZW50LFwibW91c2V1cFwiLHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKSx1KGRvY3VtZW50LFwidG91Y2hlbmRcIix0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyksdShkb2N1bWVudCxcImtleWRvd25cIix0aGlzLl9jaGVja0tleURvd24pLHUoZG9jdW1lbnQsXCJrZXl1cFwiLHRoaXMuX2NoZWNrS2V5VXApfSxfZGVzZWxlY3RNdWx0aURyYWc6ZnVuY3Rpb24odCl7aWYoISh2b2lkIDAhPT1xdCYmcXR8fEZ0IT09dGhpcy5zb3J0YWJsZXx8dCYmZih0LnRhcmdldCx0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLHRoaXMuc29ydGFibGUuZWwsITEpfHx0JiYwIT09dC5idXR0b24pKWZvcig7anQubGVuZ3RoOyl7dmFyIGU9anRbMF07dihlLHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCExKSxqdC5zaGlmdCgpLEIoe3NvcnRhYmxlOnRoaXMuc29ydGFibGUscm9vdEVsOnRoaXMuc29ydGFibGUuZWwsbmFtZTpcImRlc2VsZWN0XCIsdGFyZ2V0RWw6ZSxvcmlnaW5hbEV2dDp0fSl9fSxfY2hlY2tLZXlEb3duOmZ1bmN0aW9uKHQpe3Qua2V5PT09dGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSYmKHRoaXMubXVsdGlEcmFnS2V5RG93bj0hMCl9LF9jaGVja0tleVVwOmZ1bmN0aW9uKHQpe3Qua2V5PT09dGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSYmKHRoaXMubXVsdGlEcmFnS2V5RG93bj0hMSl9fSxPYmplY3QuYXNzaWduKHQse3BsdWdpbk5hbWU6XCJtdWx0aURyYWdcIix1dGlsczp7c2VsZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQucGFyZW50Tm9kZVtrXTtlJiZlLm9wdGlvbnMubXVsdGlEcmFnJiYhfmp0LmluZGV4T2YodCkmJihGdCYmRnQhPT1lJiYoRnQubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpLEZ0PWUpLHYodCxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywhMCksanQucHVzaCh0KSl9LGRlc2VsZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQucGFyZW50Tm9kZVtrXSxuPWp0LmluZGV4T2YodCk7ZSYmZS5vcHRpb25zLm11bHRpRHJhZyYmfm4mJih2KHQsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsITEpLGp0LnNwbGljZShuLDEpKX19LGV2ZW50UHJvcGVydGllczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1bXSxuPVtdO3JldHVybiBqdC5mb3JFYWNoKGZ1bmN0aW9uKG8pe3ZhciBpO2UucHVzaCh7bXVsdGlEcmFnRWxlbWVudDpvLGluZGV4Om8uc29ydGFibGVJbmRleH0pLGk9VXQmJm8hPT1MdD8tMTpVdD9DKG8sXCI6bm90KC5cIit0Lm9wdGlvbnMuc2VsZWN0ZWRDbGFzcytcIilcIik6QyhvKSxuLnB1c2goe211bHRpRHJhZ0VsZW1lbnQ6byxpbmRleDppfSl9KSx7aXRlbXM6W10uY29uY2F0KGp0KSxjbG9uZXM6W10uY29uY2F0KHp0KSxvbGRJbmRpY2llczplLG5ld0luZGljaWVzOm59fSxvcHRpb25MaXN0ZW5lcnM6e211bHRpRHJhZ0tleTpmdW5jdGlvbih0KXtyZXR1cm5cImN0cmxcIj09PSh0PXQudG9Mb3dlckNhc2UoKSk/dD1cIkNvbnRyb2xcIjp0Lmxlbmd0aD4xJiYodD10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc3Vic3RyKDEpKSx0fX19KX0pO2V4cG9ydCBkZWZhdWx0IEl0O2V4cG9ydHtJdCBhcyBTb3J0YWJsZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb3J0YWJsZS5jb21wbGV0ZS5lc20uanMubWFwXG4iLCIvKiFcbiAqIHN3ZWV0YWxlcnQyIHY2LjExLjVcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIHR5cGU6IG51bGwsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICBhbGxvd0VudGVyS2V5OiB0cnVlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IG51bGwsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogbnVsbCxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2FhYScsXG4gIGNhbmNlbEJ1dHRvbkNsYXNzOiBudWxsLFxuICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICBmb2N1c0NvbmZpcm06IHRydWUsXG4gIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VXaWR0aDogbnVsbCxcbiAgaW1hZ2VIZWlnaHQ6IG51bGwsXG4gIGltYWdlQWx0OiAnJyxcbiAgaW1hZ2VDbGFzczogbnVsbCxcbiAgdGltZXI6IG51bGwsXG4gIHdpZHRoOiA1MDAsXG4gIHBhZGRpbmc6IDIwLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGlucHV0OiBudWxsLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0Q2xhc3M6IG51bGwsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiAnNDBweCcsXG4gIG9uQmVmb3JlT3BlbjogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICB1c2VSZWplY3Rpb25zOiB0cnVlXG59O1xuXG52YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xuXG52YXIgcHJlZml4ID0gZnVuY3Rpb24gcHJlZml4KGl0ZW1zKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBpdGVtcykge1xuICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdpb3NmaXgnLCAnbW9kYWwnLCAnb3ZlcmxheScsICdmYWRlJywgJ3Nob3cnLCAnaGlkZScsICdub2FuaW1hdGlvbicsICdjbG9zZScsICd0aXRsZScsICdjb250ZW50JywgJ2J1dHRvbnN3cmFwcGVyJywgJ2NvbmZpcm0nLCAnY2FuY2VsJywgJ2ljb24nLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uZXJyb3InLCAncHJvZ3Jlc3NzdGVwcycsICdhY3RpdmVwcm9ncmVzc3N0ZXAnLCAncHJvZ3Jlc3NjaXJjbGUnLCAncHJvZ3Jlc3NsaW5lJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbiddKTtcblxudmFyIGljb25UeXBlcyA9IHByZWZpeChbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ10pO1xuXG52YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuXG4vKlxuICogU2V0IGhvdmVyLCBhY3RpdmUgYW5kIGZvY3VzLXN0YXRlcyBmb3IgYnV0dG9ucyAoc291cmNlOiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vamF2YXNjcmlwdC1nZW5lcmF0ZS1saWdodGVyLWRhcmtlci1jb2xvcilcbiAqL1xudmFyIGNvbG9yTHVtaW5hbmNlID0gZnVuY3Rpb24gY29sb3JMdW1pbmFuY2UoaGV4LCBsdW0pIHtcbiAgLy8gVmFsaWRhdGUgaGV4IHN0cmluZ1xuICBoZXggPSBTdHJpbmcoaGV4KS5yZXBsYWNlKC9bXjAtOWEtZl0vZ2ksICcnKTtcbiAgaWYgKGhleC5sZW5ndGggPCA2KSB7XG4gICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xuICB9XG4gIGx1bSA9IGx1bSB8fCAwO1xuXG4gIC8vIENvbnZlcnQgdG8gZGVjaW1hbCBhbmQgY2hhbmdlIGx1bWlub3NpdHlcbiAgdmFyIHJnYiA9ICcjJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICB2YXIgYyA9IHBhcnNlSW50KGhleC5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgYyA9IE1hdGgucm91bmQoTWF0aC5taW4oTWF0aC5tYXgoMCwgYyArIGMgKiBsdW0pLCAyNTUpKS50b1N0cmluZygxNik7XG4gICAgcmdiICs9ICgnMDAnICsgYykuc3Vic3RyKGMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiByZ2I7XG59O1xuXG52YXIgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheShhcnIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSB3YXJuaW5nc1xuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKGNvbnNvbGVQcmVmaXggKyAnICcgKyBtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbnZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihjb25zb2xlUHJlZml4ICsgJyAnICsgbWVzc2FnZSk7XG59O1xuXG4vLyBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG52YXIgc3RhdGVzID0ge1xuICBwcmV2aW91c1dpbmRvd0tleURvd246IG51bGwsXG4gIHByZXZpb3VzQWN0aXZlRWxlbWVudDogbnVsbCxcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuXG4gIC8qXG4gICAqIEFkZCBtb2RhbCArIG92ZXJsYXkgdG8gRE9NXG4gICAqL1xufTt2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgbW9kYWwgaWYgaXQgZXhpc3RzXG4gIHZhciBjID0gZ2V0Q29udGFpbmVyKCk7XG4gIGlmIChjKSB7XG4gICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHN3ZWV0SFRNTDtcblxuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgdmFyIHJhbmdlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgaW5wdXQnKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgb3V0cHV0Jyk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gIHZhciBjaGVja2JveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnIGlucHV0Jyk7XG4gIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuXG4gIGlucHV0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIGZpbGUub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIHJhbmdlLnByZXZpb3VzU2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHNlbGVjdC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gIH07XG5cbiAgY2hlY2tib3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIHRleHRhcmVhLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIHJldHVybiBtb2RhbDtcbn07XG5cbi8qXG4gKiBNYW5pcHVsYXRlIERPTVxuICovXG5cbnZhciBzd2VldEhUTUwgPSAoJ1xcbiA8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIicgKyBzd2FsQ2xhc3Nlcy50aXRsZSArICdcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMubW9kYWwgKyAnXCIgdGFiaW5kZXg9XCItMVwiPlxcbiAgIDx1bCBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzICsgJ1wiPjwvdWw+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLmVycm9yICsgJ1wiPlxcbiAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmtcIj48c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLnF1ZXN0aW9uICsgJ1wiPj88L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmljb24gKyAnICcgKyBpY29uVHlwZXMud2FybmluZyArICdcIj4hPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLmluZm8gKyAnXCI+aTwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5zdWNjZXNzICsgJ1wiPlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XFxuICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIj48L3NwYW4+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxpbWcgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaW1hZ2UgKyAnXCIgLz5cXG4gICA8aDIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCIgaWQ9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCI+PC9oMj5cXG4gICA8ZGl2IGlkPVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY29udGVudCArICdcIj48L2Rpdj5cXG4gICA8aW5wdXQgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaW5wdXQgKyAnXCIgLz5cXG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5maWxlICsgJ1wiIC8+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICdcIj5cXG4gICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgLz5cXG4gICA8L2Rpdj5cXG4gICA8c2VsZWN0IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnNlbGVjdCArICdcIj48L3NlbGVjdD5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJ1wiPjwvZGl2PlxcbiAgIDxsYWJlbCBmb3I9XCInICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnXCI+XFxuICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cXG4gICA8L2xhYmVsPlxcbiAgIDx0ZXh0YXJlYSBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSArICdcIj48L3RleHRhcmVhPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yICsgJ1wiIGlkPVwiJyArIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvciArICdcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmJ1dHRvbnN3cmFwcGVyICsgJ1wiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY29uZmlybSArICdcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2FuY2VsICsgJ1wiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNsb3NlICsgJ1wiPlxceEQ3PC9idXR0b24+XFxuIDwvZGl2PlxcbicpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxudmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jb250YWluZXIpO1xufTtcblxudmFyIGdldE1vZGFsID0gZnVuY3Rpb24gZ2V0TW9kYWwoKSB7XG4gIHJldHVybiBnZXRDb250YWluZXIoKSA/IGdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMubW9kYWwpIDogbnVsbDtcbn07XG5cbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICByZXR1cm4gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzd2FsQ2xhc3Nlcy5pY29uKTtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgPyBnZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuJyArIGNsYXNzTmFtZSkgOiBudWxsO1xufTtcblxudmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG59O1xuXG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbn07XG5cbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xufTtcblxudmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyk7XG59O1xuXG52YXIgZ2V0VmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yKTtcbn07XG5cbnZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbmZpcm0pO1xufTtcblxudmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNhbmNlbCk7XG59O1xuXG52YXIgZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRCdXR0b25zV3JhcHBlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmJ1dHRvbnN3cmFwcGVyKTtcbn07XG5cbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTtcblxudmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IEFycmF5LmZyb20oZ2V0TW9kYWwoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpXG4gIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChnZXRNb2RhbCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pLCB0ZXh0YXJlYSwgc2VsZWN0LCBhLCBbdGFiaW5kZXg9XCIwXCJdJykpO1xuXG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpO1xufTtcblxudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpO1xuXG4gIC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1LzEzMzE0MjVcbiAgICB2YXIgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgfVxufTtcblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmICghZWxlbSB8fCAhY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWVsZW0gfHwgIWNsYXNzTmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoYXNDbGFzcyhlbGVtLmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSwgZGlzcGxheSkge1xuICBpZiAoIWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn07XG5cbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG52YXIgZW1wdHkgPSBmdW5jdGlvbiBlbXB0eShlbGVtKSB7XG4gIHdoaWxlIChlbGVtLmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbi8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoO1xufTtcblxudmFyIHJlbW92ZVN0eWxlUHJvcGVydHkgPSBmdW5jdGlvbiByZW1vdmVTdHlsZVByb3BlcnR5KGVsZW0sIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICB9XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcbiAgZm9yICh2YXIgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICBpZiAodHJhbnNFbmRFdmVudE5hbWVzLmhhc093blByb3BlcnR5KGkpICYmIHRlc3RFbC5zdHlsZVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0oKTtcblxuLy8gUmVzZXQgcHJldmlvdXMgd2luZG93IGtleWRvd24gaGFuZGxlciBhbmQgZm9jdWVkIGVsZW1lbnRcbnZhciByZXNldFByZXZTdGF0ZSA9IGZ1bmN0aW9uIHJlc2V0UHJldlN0YXRlKCkge1xuICB3aW5kb3cub25rZXlkb3duID0gc3RhdGVzLnByZXZpb3VzV2luZG93S2V5RG93bjtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgaWYgKHggJiYgeSkge1xuICAgICAgLy8gSUUgaGFzIG5vIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBNZWFzdXJlIHdpZHRoIG9mIHNjcm9sbGJhclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzI0wyNzktTDI4NlxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cztcbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn07XG5cbi8qKlxuICogSW5qZWN0IGEgc3RyaW5nIG9mIENTUyBpbnRvIHRoZSBwYWdlIGhlYWRlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NcbiAqL1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgbW9kYWxQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcyk7XG52YXIgcXVldWUgPSBbXTtcblxuLypcbiAqIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcbiAqIEhvcGVmdWxseSB0byBhdm9pZCBtYW55IGdpdGh1YiBpc3N1ZXNcbiAqL1xuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbGltb250ZS9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xufVxuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIG1vZGFsXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBzZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gSWYgYSBjdXN0b20gZWxlbWVudCBpcyBzZXQsIGRldGVybWluZSBpZiBpdCBpcyB2YWxpZFxuICBpZiAodHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZCkge1xuICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgcGFyYW1zLnRhcmdldCA9ICdib2R5JztcbiAgfVxuXG4gIHZhciBtb2RhbCA9IHZvaWQgMDtcbiAgdmFyIG9sZE1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyIHRhcmdldEVsZW1lbnQgPSB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIDogcGFyYW1zLnRhcmdldDtcbiAgLy8gSWYgdGhlIG1vZGVsIHRhcmdldCBoYXMgY2hhbmdlZCwgcmVmcmVzaCB0aGUgbW9kYWxcbiAgaWYgKG9sZE1vZGFsICYmIHRhcmdldEVsZW1lbnQgJiYgb2xkTW9kYWwucGFyZW50Tm9kZSAhPT0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgbW9kYWwgPSBpbml0KHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgbW9kYWwgPSBvbGRNb2RhbCB8fCBpbml0KHBhcmFtcyk7XG4gIH1cblxuICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICBpZiAoIXN3ZWV0QWxlcnQuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oJ1Vua25vd24gcGFyYW1ldGVyIFwiJyArIHBhcmFtICsgJ1wiJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IG1vZGFsIHdpZHRoXG4gIG1vZGFsLnN0eWxlLndpZHRoID0gdHlwZW9mIHBhcmFtcy53aWR0aCA9PT0gJ251bWJlcicgPyBwYXJhbXMud2lkdGggKyAncHgnIDogcGFyYW1zLndpZHRoO1xuXG4gIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSBwYXJhbXMucGFkZGluZyArICdweCc7XG4gIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBidXR0b25zV3JhcHBlciA9IGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHZhciBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG5cbiAgLy8gVGl0bGVcbiAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGlmIChwYXJhbXMudGV4dCB8fCBwYXJhbXMuaHRtbCkge1xuICAgIGlmIChfdHlwZW9mKHBhcmFtcy5odG1sKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoMCBpbiBwYXJhbXMuaHRtbCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIGluIHBhcmFtcy5odG1sOyBfaSsrKSB7XG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbFtfaV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gcGFyYW1zLmh0bWw7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgIH1cbiAgICBzaG93KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cblxuICAvLyBQb3NpdGlvblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfVxuXG4gIC8vIEdyb3dcbiAgaWYgKHBhcmFtcy5ncm93ICYmIHR5cGVvZiBwYXJhbXMuZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZ3Jvd0NsYXNzID0gJ2dyb3ctJyArIHBhcmFtcy5ncm93O1xuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xvc2UgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfVxuXG4gIC8vIEN1c3RvbSBDbGFzc1xuICBtb2RhbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5tb2RhbDtcbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgIGFkZENsYXNzKG1vZGFsLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICB9XG5cbiAgLy8gUHJvZ3Jlc3Mgc3RlcHNcbiAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG4gIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IG51bGwgPyBzd2VldEFsZXJ0LmdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAsIDEwKTtcbiAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgZW1wdHkocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG4gICAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2NpcmNsZSk7XG4gICAgICBjaXJjbGUuaW5uZXJIVE1MID0gc3RlcDtcbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLmFjdGl2ZXByb2dyZXNzc3RlcCk7XG4gICAgICB9XG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICBpZiAoaW5kZXggIT09IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBhZGRDbGFzcyhsaW5lLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2xpbmUpO1xuICAgICAgICBsaW5lLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG5cbiAgLy8gSWNvblxuICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBpY29ucy5sZW5ndGg7IF9pMisrKSB7XG4gICAgaGlkZShpY29uc1tfaTJdKTtcbiAgfVxuICBpZiAocGFyYW1zLnR5cGUpIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaWNvblR5cGUgaW4gaWNvblR5cGVzKSB7XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09IGljb25UeXBlKSB7XG4gICAgICAgIHZhbGlkVHlwZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgZXJyb3IoJ1Vua25vd24gYWxlcnQgdHlwZTogJyArIHBhcmFtcy50eXBlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmljb24gKyAnLicgKyBpY29uVHlwZXNbcGFyYW1zLnR5cGVdKTtcbiAgICBzaG93KGljb24pO1xuXG4gICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICAgIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbiwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcpLCAnc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnKSwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIGFkZENsYXNzKGljb24sICdzd2FsMi1hbmltYXRlLWVycm9yLWljb24nKTtcbiAgICAgICAgICBhZGRDbGFzcyhpY29uLnF1ZXJ5U2VsZWN0b3IoJy5zd2FsMi14LW1hcmsnKSwgJ3N3YWwyLWFuaW1hdGUteC1tYXJrJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VzdG9tIGltYWdlXG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG4gIGlmIChwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpO1xuICAgIHNob3coaW1hZ2UpO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVdpZHRoKSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUhlaWdodCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgIH1cblxuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuICAgIGlmIChwYXJhbXMuaW1hZ2VDbGFzcykge1xuICAgICAgYWRkQ2xhc3MoaW1hZ2UsIHBhcmFtcy5pbWFnZUNsYXNzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGlkZShpbWFnZSk7XG4gIH1cblxuICAvLyBDYW5jZWwgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjYW5jZWxCdXR0b24pO1xuICB9XG5cbiAgLy8gQ29uZmlybSBidXR0b25cbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoY29uZmlybUJ1dHRvbiwgJ2Rpc3BsYXknKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbmZpcm1CdXR0b24pO1xuICB9XG5cbiAgLy8gQnV0dG9ucyB3cmFwcGVyXG4gIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGhpZGUoYnV0dG9uc1dyYXBwZXIpO1xuICB9IGVsc2Uge1xuICAgIHNob3coYnV0dG9uc1dyYXBwZXIpO1xuICB9XG5cbiAgLy8gRWRpdCB0ZXh0IG9uIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gIGNvbmZpcm1CdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0O1xuICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNhbmNlbEJ1dHRvblRleHQ7XG5cbiAgLy8gQVJJQSBsYWJlbHMgZm9yIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNvbmZpcm1CdXR0b25BcmlhTGFiZWwpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNhbmNlbEJ1dHRvbkFyaWFMYWJlbCk7XG5cbiAgLy8gU2V0IGJ1dHRvbnMgdG8gc2VsZWN0ZWQgYmFja2dyb3VuZCBjb2xvcnNcbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICB9XG5cbiAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcbiAgY29uZmlybUJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb25maXJtO1xuICBhZGRDbGFzcyhjb25maXJtQnV0dG9uLCBwYXJhbXMuY29uZmlybUJ1dHRvbkNsYXNzKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNhbmNlbDtcbiAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBwYXJhbXMuY2FuY2VsQnV0dG9uQ2xhc3MpO1xuXG4gIC8vIEJ1dHRvbnMgc3R5bGluZ1xuICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICByZW1vdmVDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG5cbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG5cbiAgLy8gQ1NTIGFuaW1hdGlvblxuICBpZiAocGFyYW1zLmFuaW1hdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfVxuXG4gIC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL2xpbW9udGUuZ2l0aHViLmlvL3N3ZWV0YWxlcnQyLyNhamF4LXJlcXVlc3QnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbmltYXRpb25zXG4gKlxuICogQHBhcmFtIGFuaW1hdGlvblxuICogQHBhcmFtIG9uQmVmb3JlT3BlblxuICogQHBhcmFtIG9uQ29tcGxldGVcbiAqL1xudmFyIG9wZW5Nb2RhbCA9IGZ1bmN0aW9uIG9wZW5Nb2RhbChhbmltYXRpb24sIG9uQmVmb3JlT3Blbiwgb25Db21wbGV0ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgaWYgKG9uQmVmb3JlT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb25CZWZvcmVPcGVuKG1vZGFsKTtcbiAgfVxuXG4gIGlmIChhbmltYXRpb24pIHtcbiAgICBhZGRDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmZhZGUpO1xuICB9XG4gIHNob3cobW9kYWwpO1xuXG4gIC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgIWhhc0NsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbikpIHtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKCkge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbENsb3NlRXZlbnRGaW5pc2hlZCk7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gIH1cblxuICBhZGRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgZml4U2Nyb2xsYmFyKCk7XG4gIGlPU2ZpeCgpO1xuICBzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgaWYgKG9uQ29tcGxldGUgIT09IG51bGwgJiYgdHlwZW9mIG9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uQ29tcGxldGUobW9kYWwpO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gbWVhc3VyZVNjcm9sbGJhcigpICsgJ3B4JztcbiAgfVxufTtcblxudmFyIHVuZG9TY3JvbGxiYXIgPSBmdW5jdGlvbiB1bmRvU2Nyb2xsYmFyKCkge1xuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nO1xuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgfVxufTtcblxuLy8gRml4IGlPUyBzY3JvbGxpbmcgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk2MjYzMDIvMTMzMTQyNVxudmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG4gIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArICdweCc7XG4gICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgfVxufTtcblxudmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICB9XG59O1xuXG4vLyBTd2VldEFsZXJ0IGVudHJ5IHBvaW50XG52YXIgc3dlZXRBbGVydCA9IGZ1bmN0aW9uIHN3ZWV0QWxlcnQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgZXhwZWN0cyBhdCBsZWFzdCAxIGF0dHJpYnV0ZSEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gX2V4dGVuZHMoe30sIG1vZGFsUGFyYW1zKTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcGFyYW1zLnRpdGxlID0gYXJnc1swXTtcbiAgICAgIHBhcmFtcy5odG1sID0gYXJnc1sxXTtcbiAgICAgIHBhcmFtcy50eXBlID0gYXJnc1syXTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcbiAgICAgIHBhcmFtcy5leHRyYVBhcmFtcyA9IGFyZ3NbMF0uZXh0cmFQYXJhbXM7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdlbWFpbCcgJiYgcGFyYW1zLmlucHV0VmFsaWRhdG9yID09PSBudWxsKSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNn0kLztcbiAgICAgICAgICAgIGlmIChlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICd1cmwnICYmIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9PT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUvMTMzMTQyNVxuICAgICAgICAgICAgdmFyIHVybFJlZ2V4ID0gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopJC87XG4gICAgICAgICAgICBpZiAodXJsUmVnZXgudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCgnSW52YWxpZCBVUkwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgYXJndW1lbnQhIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJvYmplY3RcIiwgZ290ICcgKyBfdHlwZW9mKGFyZ3NbMF0pKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFBhcmFtZXRlcnMocGFyYW1zKTtcblxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBDbG9zZSBvbiB0aW1lclxuICAgIGlmIChwYXJhbXMudGltZXIpIHtcbiAgICAgIG1vZGFsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVqZWN0KCd0aW1lcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAndGltZXInIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBwYXJhbXMudGltZXIpO1xuICAgIH1cblxuICAgIC8vIEdldCBpbnB1dCBlbGVtZW50IGJ5IHNwZWNpZmllZCB0eXBlIG9yLCBpZiB0eXBlIGlzbid0IHNwZWNpZmllZCwgYnkgcGFyYW1zLmlucHV0XG4gICAgdmFyIGdldElucHV0ID0gZnVuY3Rpb24gZ2V0SW5wdXQoaW5wdXRUeXBlKSB7XG4gICAgICBpbnB1dFR5cGUgPSBpbnB1dFR5cGUgfHwgcGFyYW1zLmlucHV0O1xuICAgICAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnIGlucHV0Jyk7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYWRpbyArICcgaW5wdXQ6Y2hlY2tlZCcpIHx8IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFkaW8gKyAnIGlucHV0OmZpcnN0LWNoaWxkJyk7XG4gICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICByZXR1cm4gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgaW5wdXQnKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIG1vZGFsIGlucHV0XG4gICAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHBhcmFtcy5pbnB1dCkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpbnB1dCBhdXRvZm9jdXNcbiAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybSh2YWx1ZSkge1xuICAgICAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuc2hvd0xvYWRpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICAgIHBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBwYXJhbXMuZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgICAgcmVzb2x2ZShwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgaWYgKGVycm9yJCQxKSB7XG4gICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IoZXJyb3IkJDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIE1vdXNlIGludGVyYWN0aW9uc1xuICAgIHZhciBvbkJ1dHRvbkV2ZW50ID0gZnVuY3Rpb24gb25CdXR0b25FdmVudChldmVudCkge1xuICAgICAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gY29uZmlybUJ1dHRvbiAmJiAoY29uZmlybUJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNvbmZpcm1CdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDYW5jZWwgPSBjYW5jZWxCdXR0b24gJiYgKGNhbmNlbEJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNhbmNlbEJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcblxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IsIC0wLjEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCkge1xuICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JMdW1pbmFuY2UocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yLCAtMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IsIC0wLjIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCkge1xuICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JMdW1pbmFuY2UocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yLCAtMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAvLyBDbGlja2VkICdjb25maXJtJ1xuICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgc3dlZXRBbGVydC5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoKTtcblxuICAgICAgICAgICAgICBpZiAocGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgcGFyYW1zLmV4dHJhUGFyYW1zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuc2hvd1ZhbGlkYXRpb25FcnJvcihlcnJvciQkMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZmlybSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xpY2tlZCAnY2FuY2VsJ1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwgJiYgc3dlZXRBbGVydC5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICAgICAgICByZWplY3QoJ2NhbmNlbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6ICdjYW5jZWwnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0ub25jbGljayA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdmVyID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW91dCA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2Vkb3duID0gb25CdXR0b25FdmVudDtcbiAgICB9XG5cbiAgICAvLyBDbG9zaW5nIG1vZGFsIGJ5IGNsb3NlIGJ1dHRvblxuICAgIGdldENsb3NlQnV0dG9uKCkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgcmVqZWN0KCdjbG9zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6ICdjbG9zZScgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIENsb3NpbmcgbW9kYWwgYnkgb3ZlcmxheSBjbGlja1xuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVqZWN0KCdvdmVybGF5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6ICdvdmVybGF5JyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcblxuICAgIC8vIFJldmVyc2UgYnV0dG9ucyAoQ29uZmlybSBvbiB0aGUgcmlnaHQgc2lkZSlcbiAgICBpZiAocGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyBoYW5kbGluZ1xuICAgIHZhciBzZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKHBhcmFtcy5mb2N1c0NhbmNlbCk7XG4gICAgICAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50O1xuXG4gICAgICAgIC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICAgICAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgZWxlbWVudCBpcyB2aXNpYmxlXG4gICAgICAgIHZhciBlbCA9IGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGlzVmlzaWJsZShlbCkpIHtcbiAgICAgICAgICByZXR1cm4gZWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBnZXRJbnB1dCgpKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3ZWV0QWxlcnQuY2xpY2tDb25maXJtKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVEFCXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhwYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTsgLy8gRmluZCB0aGUgYnV0dG9uIC0gbm90ZSwgdGhpcyBpcyBhIG5vZGVsaXN0LCBub3QgYW4gYXJyYXkuXG4gICAgICAgIGZvciAodmFyIF9pNCA9IDA7IF9pNCA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbX2k0XSkge1xuICAgICAgICAgICAgYnRuSW5kZXggPSBfaTQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgICAgfSBlbHNlIGlmIChbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dkb3duJ10uaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIC8vIGZvY3VzIENhbmNlbCBidXR0b24gaWYgQ29uZmlybSBidXR0b24gaXMgY3VycmVudGx5IGZvY3VzZWRcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNvbmZpcm1CdXR0b24gJiYgaXNWaXNpYmxlKGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgICBjYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgICAvLyBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNhbmNlbEJ1dHRvbiAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFU0NcbiAgICAgIH0gZWxzZSBpZiAoKGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycpICYmIHBhcmFtcy5hbGxvd0VzY2FwZUtleSA9PT0gdHJ1ZSkge1xuICAgICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgICByZWplY3QoJ2VzYycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnZXNjJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIXdpbmRvdy5vbmtleWRvd24gfHwgd2luZG93Lm9ua2V5ZG93bi50b1N0cmluZygpICE9PSBoYW5kbGVLZXlEb3duLnRvU3RyaW5nKCkpIHtcbiAgICAgIHN0YXRlcy5wcmV2aW91c1dpbmRvd0tleURvd24gPSB3aW5kb3cub25rZXlkb3duO1xuICAgICAgd2luZG93Lm9ua2V5ZG93biA9IGhhbmRsZUtleURvd247XG4gICAgfVxuXG4gICAgLy8gTG9hZGluZyBzdGF0ZVxuICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICAgICAqL1xuICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcgPSBzd2VldEFsZXJ0LmRpc2FibGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICAgICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgICAgICAgaWYgKCFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgIGhpZGUoZ2V0QnV0dG9uc1dyYXBwZXIoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbW92ZUNsYXNzKGJ1dHRvbnNXcmFwcGVyLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICAgIG1vZGFsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRUaXRsZSgpO1xuICAgIH07XG4gICAgc3dlZXRBbGVydC5nZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldENvbnRlbnQoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW5wdXQoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW1hZ2UoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQ29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5kaXNhYmxlQ29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3IgKHZhciBfaTUgPSAwOyBfaTUgPCByYWRpb3MubGVuZ3RoOyBfaTUrKykge1xuICAgICAgICAgIHJhZGlvc1tfaTVdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3IgKHZhciBfaTYgPSAwOyBfaTYgPCByYWRpb3MubGVuZ3RoOyBfaTYrKykge1xuICAgICAgICAgIHJhZGlvc1tfaTZdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTaG93IGJsb2NrIHdpdGggdmFsaWRhdGlvbiBlcnJvclxuICAgIHN3ZWV0QWxlcnQuc2hvd1ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgdmFyIHZhbGlkYXRpb25FcnJvciA9IGdldFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgdmFsaWRhdGlvbkVycm9yLmlubmVySFRNTCA9IGVycm9yJCQxO1xuICAgICAgc2hvdyh2YWxpZGF0aW9uRXJyb3IpO1xuXG4gICAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dCgpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG4gICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIGVycm9yXG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSBnZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgIGhpZGUodmFsaWRhdGlvbkVycm9yKTtcblxuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLnByb2dyZXNzU3RlcHM7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuc2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIChwcm9ncmVzc1N0ZXBzKSB7XG4gICAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcyA9IHByb2dyZXNzU3RlcHM7XG4gICAgICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuc2hvd1Byb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzaG93KGdldFByb2dyZXNzU3RlcHMoKSk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuaGlkZVByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoaWRlKGdldFByb2dyZXNzU3RlcHMoKSk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICAvLyBpbnB1dHNcbiAgICB2YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcbiAgICB2YXIgaW5wdXQgPSB2b2lkIDA7XG4gICAgZm9yICh2YXIgX2k3ID0gMDsgX2k3IDwgaW5wdXRUeXBlcy5sZW5ndGg7IF9pNysrKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZXNbX2k3XV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIGlucHV0Q2xhc3MpO1xuICAgICAgaW5wdXQgPSBnZXRJbnB1dChpbnB1dFR5cGVzW19pN10pO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGZvciAodmFyIGogaW4gaW5wdXQuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChpbnB1dC5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2pdLm5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgIT09ICd0eXBlJyAmJiBhdHRyTmFtZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgcGFyYW1zLmlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGNsYXNzXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dENsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuaW5wdXRDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAndGVsJzpcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgdmFyIHJhbmdlID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gICAgICAgIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICBzaG93KHJhbmdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uVmFsdWUgaW4gaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBpbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvdyhzZWxlY3QpO1xuICAgICAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgICAgIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIGZvciAodmFyIHJhZGlvVmFsdWUgaW4gaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9MYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlKSB7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYWRpb0xhYmVsU3Bhbi5pbm5lckhUTUwgPSBpbnB1dE9wdGlvbnNbcmFkaW9WYWx1ZV07XG4gICAgICAgICAgICByYWRpb0xhYmVsLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsU3Bhbik7XG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IHJhZGlvSW5wdXQuaWQ7XG4gICAgICAgICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvdyhyYWRpbyk7XG4gICAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHZhciBjaGVja2JveCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuY2hlY2tib3gpO1xuICAgICAgICB2YXIgY2hlY2tib3hJbnB1dCA9IGdldElucHV0KCdjaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveElucHV0LnZhbHVlID0gMTtcbiAgICAgICAgY2hlY2tib3hJbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgdmFyIGxhYmVsID0gY2hlY2tib3guZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAgIGNoZWNrYm94LnJlbW92ZUNoaWxkKGxhYmVsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgc2hvdyhjaGVja2JveCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgc2hvdyh0ZXh0YXJlYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFwidGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJudW1iZXJcIiwgXCJ0ZWxcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwidGV4dGFyZWFcIiwgXCJmaWxlXCIgb3IgXCJ1cmxcIiwgZ290IFwiJyArIHBhcmFtcy5pbnB1dCArICdcIicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzd2VldEFsZXJ0LnNob3dMb2FkaW5nKCk7XG4gICAgICAgIHBhcmFtcy5pbnB1dE9wdGlvbnMudGhlbihmdW5jdGlvbiAoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgc3dlZXRBbGVydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyhwYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3Qgb3IgUHJvbWlzZSwgZ290ICcgKyBfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTW9kYWwocGFyYW1zLmFuaW1hdGlvbiwgcGFyYW1zLm9uQmVmb3JlT3BlbiwgcGFyYW1zLm9uT3Blbik7XG5cbiAgICBpZiAoIXBhcmFtcy5hbGxvd0VudGVyS2V5KSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoY2FuY2VsQnV0dG9uKSkge1xuICAgICAgY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShjb25maXJtQnV0dG9uKSkge1xuICAgICAgY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgfVxuXG4gICAgLy8gZml4IHNjcm9sbFxuICAgIGdldENvbnRhaW5lcigpLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3dhbDIgbW9kYWwgaXMgc2hvd25cbiAqL1xuc3dlZXRBbGVydC5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIWdldE1vZGFsKCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IG1vZGFsc1xuICovXG5zd2VldEFsZXJ0LnF1ZXVlID0gZnVuY3Rpb24gKHN0ZXBzKSB7XG4gIHF1ZXVlID0gc3RlcHM7XG4gIHZhciByZXNldFF1ZXVlID0gZnVuY3Rpb24gcmVzZXRRdWV1ZSgpIHtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcbiAgdmFyIHF1ZXVlUmVzdWx0ID0gW107XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpIDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnLCBpKTtcblxuICAgICAgICBzd2VldEFsZXJ0KHF1ZXVlW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBxdWV1ZVJlc3VsdC5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZGlzbWlzcykge1xuICAgICAgICAgIHJlc2V0UXVldWUoKTtcbiAgICAgICAgICByZWplY3QoZGlzbWlzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHF1ZXVlUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KSgwKTtcbiAgfSk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHRoZSBpbmRleCBvZiBjdXJyZW50IG1vZGFsIGluIHF1ZXVlXG4gKi9cbnN3ZWV0QWxlcnQuZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgbW9kYWwgdG8gdGhlIHF1ZXVlXG4gKi9cbnN3ZWV0QWxlcnQuaW5zZXJ0UXVldWVTdGVwID0gZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gIGlmIChpbmRleCAmJiBpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgIHJldHVybiBxdWV1ZS5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICB9XG4gIHJldHVybiBxdWV1ZS5wdXNoKHN0ZXApO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBtb2RhbCBmcm9tIHRoZSBxdWV1ZVxuICovXG5zd2VldEFsZXJ0LmRlbGV0ZVF1ZXVlU3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICBpZiAodHlwZW9mIHF1ZXVlW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBxdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuc3dlZXRBbGVydC5jbG9zZSA9IHN3ZWV0QWxlcnQuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uIChvbkNvbXBsZXRlKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgaWYgKCFtb2RhbCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gIGFkZENsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5oaWRlKTtcbiAgY2xlYXJUaW1lb3V0KG1vZGFsLnRpbWVvdXQpO1xuXG4gIHJlc2V0UHJldlN0YXRlKCk7XG5cbiAgdmFyIHJlbW92ZU1vZGFsQW5kUmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZU1vZGFsQW5kUmVzZXRTdGF0ZSgpIHtcbiAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc3dhbENsYXNzZXMuc2hvd24pO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgICB1bmRvU2Nyb2xsYmFyKCk7XG4gICAgdW5kb0lPU2ZpeCgpO1xuICB9O1xuXG4gIC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgaWYgKGhhc0NsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZU1vZGFsQW5kUmVzZXRTdGF0ZSgpO1xuICB9XG4gIGlmIChvbkNvbXBsZXRlICE9PSBudWxsICYmIHR5cGVvZiBvbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbXBsZXRlKG1vZGFsKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cbnN3ZWV0QWxlcnQuY2xpY2tDb25maXJtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0LmNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0LnNob3dMb2FkaW5nID0gc3dlZXRBbGVydC5lbmFibGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICBpZiAoIW1vZGFsKSB7XG4gICAgc3dlZXRBbGVydCgnJyk7XG4gIH1cbiAgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuXG4gIHNob3coYnV0dG9uc1dyYXBwZXIpO1xuICBzaG93KGNvbmZpcm1CdXR0b24sICdpbmxpbmUtYmxvY2snKTtcbiAgYWRkQ2xhc3MoYnV0dG9uc1dyYXBwZXIsIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBhZGRDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gIG1vZGFsLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5zd2VldEFsZXJ0LmlzVmFsaWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZWZhdWx0UGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtTmFtZSkgfHwgcGFyYW1OYW1lID09PSAnZXh0cmFQYXJhbXMnO1xufTtcblxuLyoqXG4gKiBTZXQgZGVmYXVsdCBwYXJhbXMgZm9yIGVhY2ggcG9wdXBcbiAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyUGFyYW1zXG4gKi9cbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAodXNlclBhcmFtcykge1xuICBpZiAoIXVzZXJQYXJhbXMgfHwgKHR5cGVvZiB1c2VyUGFyYW1zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih1c2VyUGFyYW1zKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVycm9yKCd0aGUgYXJndW1lbnQgZm9yIHNldERlZmF1bHRzKCkgaXMgcmVxdWlyZWQgYW5kIGhhcyB0byBiZSBhIG9iamVjdCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcGFyYW0gaW4gdXNlclBhcmFtcykge1xuICAgIGlmICghc3dlZXRBbGVydC5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybignVW5rbm93biBwYXJhbWV0ZXIgXCInICsgcGFyYW0gKyAnXCInKTtcbiAgICAgIGRlbGV0ZSB1c2VyUGFyYW1zW3BhcmFtXTtcbiAgICB9XG4gIH1cblxuICBfZXh0ZW5kcyhtb2RhbFBhcmFtcywgdXNlclBhcmFtcyk7XG59O1xuXG4vKipcbiAqIFJlc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKi9cbnN3ZWV0QWxlcnQucmVzZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcyk7XG59O1xuXG5zd2VldEFsZXJ0Lm5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuc3dlZXRBbGVydC52ZXJzaW9uID0gJzYuMTEuNSc7XG5cbnN3ZWV0QWxlcnQuZGVmYXVsdCA9IHN3ZWV0QWxlcnQ7XG5cbnJldHVybiBzd2VldEFsZXJ0O1xuXG59KSkpO1xuaWYgKHdpbmRvdy5Td2VldGFsZXJ0Mikgd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuc3dhbCA9IHdpbmRvdy5Td2VldGFsZXJ0MjtcbiIsIi8qIVxuICogSnFUcmVlIDEuNC4zXG4gKiBcbiAqIENvcHlyaWdodCAyMDE3IE1hcmNvIEJyYWFrXG4gKiBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqIFxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogXG4gKi9cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFBvc2l0aW9uO1xuKGZ1bmN0aW9uIChQb3NpdGlvbikge1xuICAgIFBvc2l0aW9uW1Bvc2l0aW9uW1wiQmVmb3JlXCJdID0gMV0gPSBcIkJlZm9yZVwiO1xuICAgIFBvc2l0aW9uW1Bvc2l0aW9uW1wiQWZ0ZXJcIl0gPSAyXSA9IFwiQWZ0ZXJcIjtcbiAgICBQb3NpdGlvbltQb3NpdGlvbltcIkluc2lkZVwiXSA9IDNdID0gXCJJbnNpZGVcIjtcbiAgICBQb3NpdGlvbltQb3NpdGlvbltcIk5vbmVcIl0gPSA0XSA9IFwiTm9uZVwiO1xufSkoUG9zaXRpb24gPSBleHBvcnRzLlBvc2l0aW9uIHx8IChleHBvcnRzLlBvc2l0aW9uID0ge30pKTtcbmV4cG9ydHMucG9zaXRpb25fbmFtZXMgPSB7XG4gICAgYmVmb3JlOiBQb3NpdGlvbi5CZWZvcmUsXG4gICAgYWZ0ZXI6IFBvc2l0aW9uLkFmdGVyLFxuICAgIGluc2lkZTogUG9zaXRpb24uSW5zaWRlLFxuICAgIG5vbmU6IFBvc2l0aW9uLk5vbmVcbn07XG5mdW5jdGlvbiBnZXRQb3NpdGlvbk5hbWUocG9zaXRpb24pIHtcbiAgICBmb3IgKHZhciBuYW1lXzEgaW4gZXhwb3J0cy5wb3NpdGlvbl9uYW1lcykge1xuICAgICAgICBpZiAoZXhwb3J0cy5wb3NpdGlvbl9uYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lXzEpKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0cy5wb3NpdGlvbl9uYW1lc1tuYW1lXzFdID09PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5leHBvcnRzLmdldFBvc2l0aW9uTmFtZSA9IGdldFBvc2l0aW9uTmFtZTtcbmZ1bmN0aW9uIGdldFBvc2l0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5wb3NpdGlvbl9uYW1lc1tuYW1lXTtcbn1cbmV4cG9ydHMuZ2V0UG9zaXRpb24gPSBnZXRQb3NpdGlvbjtcbnZhciBOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGUobywgaXNfcm9vdCwgbm9kZV9jbGFzcykge1xuICAgICAgICBpZiAoaXNfcm9vdCA9PT0gdm9pZCAwKSB7IGlzX3Jvb3QgPSBmYWxzZTsgfVxuICAgICAgICBpZiAobm9kZV9jbGFzcyA9PT0gdm9pZCAwKSB7IG5vZGVfY2xhc3MgPSBOb2RlOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2V0RGF0YShvKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIGlmIChpc19yb290KSB7XG4gICAgICAgICAgICB0aGlzLmlkX21hcHBpbmcgPSB7fTtcbiAgICAgICAgICAgIHRoaXMudHJlZSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm5vZGVfY2xhc3MgPSBub2RlX2NsYXNzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgU2V0IHRoZSBkYXRhIG9mIHRoaXMgbm9kZS5cblxuICAgIHNldERhdGEoc3RyaW5nKTogc2V0IHRoZSBuYW1lIG9mIHRoZSBub2RlXG4gICAgc2V0ZGF0YShvYmplY3QpOiBzZXQgYXR0cmlidXRlcyBvZiB0aGUgbm9kZVxuXG4gICAgRXhhbXBsZXM6XG4gICAgICAgIHNldGRhdGEoJ25vZGUxJylcblxuICAgICAgICBzZXREYXRhKHsgbmFtZTogJ25vZGUxJywgaWQ6IDF9KTtcblxuICAgICAgICBzZXREYXRhKHsgbmFtZTogJ25vZGUyJywgaWQ6IDIsIGNvbG9yOiAnZ3JlZW4nfSk7XG5cbiAgICAqIFRoaXMgaXMgYW4gaW50ZXJuYWwgZnVuY3Rpb247IGl0IGlzIG5vdCBpbiB0aGUgZG9jc1xuICAgICogRG9lcyBub3QgcmVtb3ZlIGV4aXN0aW5nIG5vZGUgdmFsdWVzXG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNldE5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgbyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgc2V0TmFtZShvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBvW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwibGFiZWxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1c2UgdGhlICdsYWJlbCcga2V5IGluc3RlYWQgb2YgJ25hbWUnOyB0aGlzIGlzIGEgbGVnYWN5IGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSAhPT0gXCJjaGlsZHJlblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuJ3QgdXBkYXRlIHRoZSBjaGlsZHJlbiB1c2luZyB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLypcbiAgICBDcmVhdGUgdHJlZSBmcm9tIGRhdGEuXG5cbiAgICBTdHJ1Y3R1cmUgb2YgZGF0YSBpczpcbiAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnbm9kZTEnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2hpbGQxJyB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdjaGlsZDInIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdub2RlMidcbiAgICAgICAgfVxuICAgIF1cbiAgICAqL1xuICAgIE5vZGUucHJvdG90eXBlLmxvYWRGcm9tRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gZGF0YV8xW19pXTtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IHRoaXMudHJlZS5ub2RlX2NsYXNzKG8pO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvW1wiY2hpbGRyZW5cIl0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmxvYWRGcm9tRGF0YShvW1wiY2hpbGRyZW5cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKlxuICAgIEFkZCBjaGlsZC5cblxuICAgIHRyZWUuYWRkQ2hpbGQoXG4gICAgICAgIG5ldyBOb2RlKCdjaGlsZDEnKVxuICAgICk7XG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgbm9kZS5fc2V0UGFyZW50KHRoaXMpO1xuICAgIH07XG4gICAgLypcbiAgICBBZGQgY2hpbGQgYXQgcG9zaXRpb24uIEluZGV4IHN0YXJ0cyBhdCAwLlxuXG4gICAgdHJlZS5hZGRDaGlsZEF0UG9zaXRpb24oXG4gICAgICAgIG5ldyBOb2RlKCdhYmMnKSxcbiAgICAgICAgMVxuICAgICk7XG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5hZGRDaGlsZEF0UG9zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIG5vZGUpO1xuICAgICAgICBub2RlLl9zZXRQYXJlbnQodGhpcyk7XG4gICAgfTtcbiAgICAvKlxuICAgIFJlbW92ZSBjaGlsZC4gVGhpcyBhbHNvIHJlbW92ZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLlxuXG4gICAgdHJlZS5yZW1vdmVDaGlsZCh0cmVlLmNoaWxkcmVuWzBdKTtcbiAgICAqL1xuICAgIE5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGNoaWxkcmVuIGZyb20gdGhlIGluZGV4XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfTtcbiAgICAvKlxuICAgIEdldCBjaGlsZCBpbmRleC5cblxuICAgIHZhciBpbmRleCA9IGdldENoaWxkSW5kZXgobm9kZSk7XG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5nZXRDaGlsZEluZGV4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuICQuaW5BcnJheShub2RlLCB0aGlzLmNoaWxkcmVuKTtcbiAgICB9O1xuICAgIC8qXG4gICAgRG9lcyB0aGUgdHJlZSBoYXZlIGNoaWxkcmVuP1xuXG4gICAgaWYgKHRyZWUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICAvL1xuICAgIH1cbiAgICAqL1xuICAgIE5vZGUucHJvdG90eXBlLmhhc0NoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGggIT09IDA7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5pc0ZvbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQ2hpbGRyZW4oKSB8fCB0aGlzLmxvYWRfb25fZGVtYW5kO1xuICAgIH07XG4gICAgLypcbiAgICBJdGVyYXRlIG92ZXIgYWxsIHRoZSBub2RlcyBpbiB0aGUgdHJlZS5cblxuICAgIENhbGxzIGNhbGxiYWNrIHdpdGggKG5vZGUsIGxldmVsKS5cblxuICAgIFRoZSBjYWxsYmFjayBtdXN0IHJldHVybiB0cnVlIHRvIGNvbnRpbnVlIHRoZSBpdGVyYXRpb24gb24gY3VycmVudCBub2RlLlxuXG4gICAgdHJlZS5pdGVyYXRlKFxuICAgICAgICBmdW5jdGlvbihub2RlLCBsZXZlbCkge1xuICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLm5hbWUpO1xuXG4gICAgICAgICAgIC8vIHN0b3AgaXRlcmF0aW9uIGFmdGVyIGxldmVsIDJcbiAgICAgICAgICAgcmV0dXJuIChsZXZlbCA8PSAyKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAqL1xuICAgIE5vZGUucHJvdG90eXBlLml0ZXJhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9pdGVyYXRlID0gZnVuY3Rpb24gKG5vZGUsIGxldmVsKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBub2RlLmNoaWxkcmVuOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhjaGlsZCwgbGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIGNoaWxkLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRlKGNoaWxkLCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfaXRlcmF0ZSh0aGlzLCAwKTtcbiAgICB9O1xuICAgIC8qXG4gICAgTW92ZSBub2RlIHJlbGF0aXZlIHRvIGFub3RoZXIgbm9kZS5cblxuICAgIEFyZ3VtZW50IHBvc2l0aW9uOiBQb3NpdGlvbi5CRUZPUkUsIFBvc2l0aW9uLkFGVEVSIG9yIFBvc2l0aW9uLkluc2lkZVxuXG4gICAgLy8gbW92ZSBub2RlMSBhZnRlciBub2RlMlxuICAgIHRyZWUubW92ZU5vZGUobm9kZTEsIG5vZGUyLCBQb3NpdGlvbi5BRlRFUik7XG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5tb3ZlTm9kZSA9IGZ1bmN0aW9uIChtb3ZlZF9ub2RlLCB0YXJnZXRfbm9kZSwgcG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFtb3ZlZF9ub2RlLnBhcmVudCB8fCBtb3ZlZF9ub2RlLmlzUGFyZW50T2YodGFyZ2V0X25vZGUpKSB7XG4gICAgICAgICAgICAvLyAtIE5vZGUgaXMgcGFyZW50IG9mIHRhcmdldCBub2RlXG4gICAgICAgICAgICAvLyAtIE9yLCBwYXJlbnQgaXMgZW1wdHlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vdmVkX25vZGUucGFyZW50Ll9yZW1vdmVDaGlsZChtb3ZlZF9ub2RlKTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X25vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF9ub2RlLnBhcmVudC5hZGRDaGlsZEF0UG9zaXRpb24obW92ZWRfbm9kZSwgdGFyZ2V0X25vZGUucGFyZW50LmdldENoaWxkSW5kZXgodGFyZ2V0X25vZGUpICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLkJlZm9yZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRfbm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X25vZGUucGFyZW50LmFkZENoaWxkQXRQb3NpdGlvbihtb3ZlZF9ub2RlLCB0YXJnZXRfbm9kZS5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0YXJnZXRfbm9kZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID09PSBQb3NpdGlvbi5JbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIGluc2lkZSBhcyBmaXJzdCBjaGlsZFxuICAgICAgICAgICAgICAgIHRhcmdldF9ub2RlLmFkZENoaWxkQXRQb3NpdGlvbihtb3ZlZF9ub2RlLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLypcbiAgICBHZXQgdGhlIHRyZWUgYXMgZGF0YS5cbiAgICAqL1xuICAgIE5vZGUucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoaW5jbHVkZV9wYXJlbnQpIHtcbiAgICAgICAgaWYgKGluY2x1ZGVfcGFyZW50ID09PSB2b2lkIDApIHsgaW5jbHVkZV9wYXJlbnQgPSBmYWxzZTsgfVxuICAgICAgICBmdW5jdGlvbiBnZXREYXRhRnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRtcF9ub2RlID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbXCJwYXJlbnRcIiwgXCJjaGlsZHJlblwiLCBcImVsZW1lbnRcIiwgXCJ0cmVlXCJdLmluZGV4T2YoaykgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IG5vZGVba107XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBfbm9kZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICB0bXBfbm9kZVtcImNoaWxkcmVuXCJdID0gZ2V0RGF0YUZyb21Ob2Rlcyhub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRtcF9ub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY2x1ZGVfcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF0YUZyb21Ob2RlcyhbdGhpc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldERhdGFGcm9tTm9kZXModGhpcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldE5vZGVCeU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXROb2RlQnlDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5uYW1lID09PSBuYW1lOyB9KTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldE5vZGVCeUNhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZXJhdGUoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhub2RlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuYWRkQWZ0ZXIgPSBmdW5jdGlvbiAobm9kZV9pbmZvKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgdGhpcy50cmVlLm5vZGVfY2xhc3Mobm9kZV9pbmZvKTtcbiAgICAgICAgICAgIHZhciBjaGlsZF9pbmRleCA9IHRoaXMucGFyZW50LmdldENoaWxkSW5kZXgodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hZGRDaGlsZEF0UG9zaXRpb24obm9kZSwgY2hpbGRfaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZV9pbmZvID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0gJiZcbiAgICAgICAgICAgICAgICBub2RlX2luZm9bXCJjaGlsZHJlblwiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub2RlLmxvYWRGcm9tRGF0YShub2RlX2luZm9bXCJjaGlsZHJlblwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuYWRkQmVmb3JlID0gZnVuY3Rpb24gKG5vZGVfaW5mbykge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IHRoaXMudHJlZS5ub2RlX2NsYXNzKG5vZGVfaW5mbyk7XG4gICAgICAgICAgICB2YXIgY2hpbGRfaW5kZXggPSB0aGlzLnBhcmVudC5nZXRDaGlsZEluZGV4KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGRBdFBvc2l0aW9uKG5vZGUsIGNoaWxkX2luZGV4KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZV9pbmZvID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0gJiZcbiAgICAgICAgICAgICAgICBub2RlX2luZm9bXCJjaGlsZHJlblwiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub2RlLmxvYWRGcm9tRGF0YShub2RlX2luZm9bXCJjaGlsZHJlblwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuYWRkUGFyZW50ID0gZnVuY3Rpb24gKG5vZGVfaW5mbykge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdfcGFyZW50ID0gbmV3IHRoaXMudHJlZS5ub2RlX2NsYXNzKG5vZGVfaW5mbyk7XG4gICAgICAgICAgICBuZXdfcGFyZW50Ll9zZXRQYXJlbnQodGhpcy50cmVlKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbF9wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBvcmlnaW5hbF9wYXJlbnQuY2hpbGRyZW47IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIG5ld19wYXJlbnQuYWRkQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JpZ2luYWxfcGFyZW50LmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBvcmlnaW5hbF9wYXJlbnQuYWRkQ2hpbGQobmV3X3BhcmVudCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3X3BhcmVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAobm9kZV9pbmZvKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IHRoaXMudHJlZS5ub2RlX2NsYXNzKG5vZGVfaW5mbyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZV9pbmZvID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBub2RlX2luZm9bXCJjaGlsZHJlblwiXSAmJlxuICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBub2RlLmxvYWRGcm9tRGF0YShub2RlX2luZm9bXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKG5vZGVfaW5mbykge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyB0aGlzLnRyZWUubm9kZV9jbGFzcyhub2RlX2luZm8pO1xuICAgICAgICB0aGlzLmFkZENoaWxkQXRQb3NpdGlvbihub2RlLCAwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlX2luZm8gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIG5vZGVfaW5mb1tcImNoaWxkcmVuXCJdICYmXG4gICAgICAgICAgICBub2RlX2luZm9bXCJjaGlsZHJlblwiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5vZGUubG9hZEZyb21EYXRhKG5vZGVfaW5mb1tcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmlzUGFyZW50T2YgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZXZlbCA9IDA7XG4gICAgICAgIHZhciBub2RlID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICBsZXZlbCArPSAxO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldE5vZGVCeUlkID0gZnVuY3Rpb24gKG5vZGVfaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRfbWFwcGluZ1tub2RlX2lkXTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmFkZE5vZGVUb0luZGV4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZF9tYXBwaW5nW25vZGUuaWRdID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUucmVtb3ZlTm9kZUZyb21JbmRleCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkX21hcHBpbmdbbm9kZS5pZF07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLml0ZXJhdGUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBfdGhpcy50cmVlLnJlbW92ZU5vZGVGcm9tSW5kZXgoY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRQcmV2aW91c1NpYmxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzX2luZGV4ID0gdGhpcy5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0aGlzKSAtIDE7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNfaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlbltwcmV2aW91c19pbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0TmV4dFNpYmxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5leHRfaW5kZXggPSB0aGlzLnBhcmVudC5nZXRDaGlsZEluZGV4KHRoaXMpICsgMTtcbiAgICAgICAgICAgIGlmIChuZXh0X2luZGV4IDwgdGhpcy5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuW25leHRfaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldE5vZGVzQnlQcm9wZXJ0eSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZVtrZXldID09PSB2YWx1ZTsgfSk7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHRoaXMuaXRlcmF0ZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKGYobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldE5leHROb2RlID0gZnVuY3Rpb24gKGluY2x1ZGVfY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGluY2x1ZGVfY2hpbGRyZW4gPT09IHZvaWQgMCkgeyBpbmNsdWRlX2NoaWxkcmVuID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoaW5jbHVkZV9jaGlsZHJlbiAmJiB0aGlzLmhhc0NoaWxkcmVuKCkgJiYgdGhpcy5pc19vcGVuKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBjaGlsZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dF9zaWJsaW5nID0gdGhpcy5nZXROZXh0U2libGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0X3NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBzaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0X3NpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IG5vZGUgb2YgcGFyZW50XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXROZXh0Tm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRQcmV2aW91c05vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzX3NpYmxpbmcgPSB0aGlzLmdldFByZXZpb3VzU2libGluZygpO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzX3NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpb3VzX3NpYmxpbmcuaGFzQ2hpbGRyZW4oKSB8fFxuICAgICAgICAgICAgICAgICAgICAhcHJldmlvdXNfc2libGluZy5pc19vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZpb3VzIHNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzX3NpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBMYXN0IGNoaWxkIG9mIHByZXZpb3VzIHNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzX3NpYmxpbmcuZ2V0TGFzdENoaWxkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHBhcmVudCBleGNlcHQgaWYgaXQgaXMgdGhlIHJvb3Qgbm9kZVxuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5wYXJlbnQucGFyZW50KSB7XG4gICAgICAgICAgICAvLyBSb290IG5vZGUgLT4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldExhc3RDaGlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxhc3RfY2hpbGQgPSB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoIWxhc3RfY2hpbGQuaGFzQ2hpbGRyZW4oKSB8fCAhbGFzdF9jaGlsZC5pc19vcGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RfY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFzdF9jaGlsZC5nZXRMYXN0Q2hpbGQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gSW5pdCBOb2RlIGZyb20gZGF0YSB3aXRob3V0IG1ha2luZyBpdCB0aGUgcm9vdCBvZiB0aGUgdHJlZVxuICAgIE5vZGUucHJvdG90eXBlLmluaXRGcm9tRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhZGROb2RlID0gZnVuY3Rpb24gKG5vZGVfZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuc2V0RGF0YShub2RlX2RhdGEpO1xuICAgICAgICAgICAgaWYgKG5vZGVfZGF0YVtcImNoaWxkcmVuXCJdKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2hpbGRyZW4obm9kZV9kYXRhW1wiY2hpbGRyZW5cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW5fZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZHJlbl9kYXRhXzEgPSBjaGlsZHJlbl9kYXRhOyBfaSA8IGNoaWxkcmVuX2RhdGFfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbl9kYXRhXzFbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF90aGlzLnRyZWUubm9kZV9jbGFzcyhcIlwiKTtcbiAgICAgICAgICAgICAgICBub2RlLmluaXRGcm9tRGF0YShjaGlsZCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZE5vZGUoZGF0YSk7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5fc2V0UGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50cmVlID0gcGFyZW50LnRyZWU7XG4gICAgICAgIHRoaXMudHJlZS5hZGROb2RlVG9JbmRleCh0aGlzKTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLl9yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuZ2V0Q2hpbGRJbmRleChub2RlKSwgMSk7XG4gICAgICAgIHRoaXMudHJlZS5yZW1vdmVOb2RlRnJvbUluZGV4KG5vZGUpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGU7XG59KCkpO1xuZXhwb3J0cy5Ob2RlID0gTm9kZTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBpc0ludChuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSBcIm51bWJlclwiICYmIG4gJSAxID09PSAwO1xufVxuZXhwb3J0cy5pc0ludCA9IGlzSW50O1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcImZ1bmN0aW9uXCI7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLy8gRXNjYXBlIGEgc3RyaW5nIGZvciBIVE1MIGludGVycG9sYXRpb247IGNvcGllZCBmcm9tIHVuZGVyc2NvcmUganNcbmZ1bmN0aW9uIGh0bWxfZXNjYXBlKHRleHQpIHtcbiAgICByZXR1cm4gKFwiXCIgKyB0ZXh0KVxuICAgICAgICAucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJiN4Mjc7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCImI3gyRjtcIik7XG59XG5leHBvcnRzLmh0bWxfZXNjYXBlID0gaHRtbF9lc2NhcGU7XG5mdW5jdGlvbiBnZXRCb29sU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcInRydWVcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRCb29sU3RyaW5nID0gZ2V0Qm9vbFN0cmluZztcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgU2ltcGxlV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpbXBsZVdpZGdldChlbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRlbCA9ICQoZWwpO1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBTaW1wbGVXaWRnZXQucmVnaXN0ZXIgPSBmdW5jdGlvbiAod2lkZ2V0X2NsYXNzLCB3aWRnZXRfbmFtZSkge1xuICAgICAgICB2YXIgZ2V0RGF0YUtleSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwic2ltcGxlX3dpZGdldF9cIiArIHdpZGdldF9uYW1lOyB9O1xuICAgICAgICBmdW5jdGlvbiBnZXRXaWRnZXREYXRhKGVsLCBkYXRhX2tleSkge1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9ICQuZGF0YShlbCwgZGF0YV9rZXkpO1xuICAgICAgICAgICAgaWYgKHdpZGdldCAmJiB3aWRnZXQgaW5zdGFuY2VvZiBTaW1wbGVXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlV2lkZ2V0KCRlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIGRhdGFfa2V5ID0gZ2V0RGF0YUtleSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICRlbC5nZXQoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nX3dpZGdldCA9IGdldFdpZGdldERhdGEoZWwsIGRhdGFfa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nX3dpZGdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gbmV3IHdpZGdldF9jbGFzcyhlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJC5kYXRhKGVsLCBkYXRhX2tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZGF0YShlbCwgZGF0YV9rZXksIHdpZGdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBpbml0IGFmdGVyIHNldHRpbmcgZGF0YSwgc28gd2UgY2FuIGNhbGwgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuX2luaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lXaWRnZXQoJGVsKSB7XG4gICAgICAgICAgICB2YXIgZGF0YV9rZXkgPSBnZXREYXRhS2V5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gJGVsLmdldCgpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZ2V0V2lkZ2V0RGF0YShlbCwgZGF0YV9rZXkpO1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJC5yZW1vdmVEYXRhKGVsLCBkYXRhX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FsbEZ1bmN0aW9uKCRlbCwgZnVuY3Rpb25fbmFtZSwgYXJncykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gJGVsLmdldCgpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gJC5kYXRhKGVsLCBnZXREYXRhS2V5KCkpO1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQgJiYgd2lkZ2V0IGluc3RhbmNlb2YgU2ltcGxlV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWRnZXRfZnVuY3Rpb24gPSB3aWRnZXRbZnVuY3Rpb25fbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXRfZnVuY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB3aWRnZXRfZnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gd2lkZ2V0X2Z1bmN0aW9uLmFwcGx5KHdpZGdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb25seS1hcnJvdy1mdW5jdGlvbnNcbiAgICAgICAgJC5mblt3aWRnZXRfbmFtZV0gPSBmdW5jdGlvbiAoYXJndW1lbnQxKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyICRlbCA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnQxID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFyZ3VtZW50MSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnQxO1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVXaWRnZXQoJGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudDEgPT09IFwic3RyaW5nXCIgJiYgYXJndW1lbnQxWzBdICE9PSBcIl9cIikge1xuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbl9uYW1lID0gYXJndW1lbnQxO1xuICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbl9uYW1lID09PSBcImRlc3Ryb3lcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzdHJveVdpZGdldCgkZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmdW5jdGlvbl9uYW1lID09PSBcImdldF93aWRnZXRfY2xhc3NcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2lkZ2V0X2NsYXNzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxGdW5jdGlvbigkZWwsIGZ1bmN0aW9uX25hbWUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNpbXBsZVdpZGdldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZGVpbml0KCk7XG4gICAgfTtcbiAgICBTaW1wbGVXaWRnZXQucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL1xuICAgIH07XG4gICAgU2ltcGxlV2lkZ2V0LnByb3RvdHlwZS5fZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL1xuICAgIH07XG4gICAgU2ltcGxlV2lkZ2V0LmRlZmF1bHRzID0ge307XG4gICAgcmV0dXJuIFNpbXBsZVdpZGdldDtcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNpbXBsZVdpZGdldDtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB2ZXJzaW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIGRyYWdfYW5kX2Ryb3BfaGFuZGxlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBlbGVtZW50c19yZW5kZXJlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBrZXlfaGFuZGxlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBtb3VzZV93aWRnZXRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgc2F2ZV9zdGF0ZV9oYW5kbGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIHNjcm9sbF9oYW5kbGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBzZWxlY3Rfbm9kZV9oYW5kbGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBzaW1wbGVfd2lkZ2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIG5vZGVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBub2RlX2VsZW1lbnRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIEpxVHJlZVdpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSnFUcmVlV2lkZ2V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpxVHJlZVdpZGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChub2RlLCBzbGlkZV9wYXJhbSkge1xuICAgICAgICB2YXIgc2xpZGUgPSBzbGlkZV9wYXJhbSA9PSBudWxsID8gdGhpcy5vcHRpb25zLnNsaWRlIDogc2xpZGVfcGFyYW07XG4gICAgICAgIGlmIChub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIHNsaWRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgc2xpZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldFRyZWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWU7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3ROb2RlKG5vZGUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnRvSnNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudHJlZS5nZXREYXRhKCkpO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5sb2FkRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBwYXJlbnRfbm9kZSkge1xuICAgICAgICB0aGlzLl9sb2FkRGF0YShkYXRhLCBwYXJlbnRfbm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKlxuICAgIHNpZ25hdHVyZXM6XG4gICAgLSBsb2FkRGF0YUZyb21VcmwodXJsLCBwYXJlbnRfbm9kZT1udWxsLCBvbl9maW5pc2hlZD1udWxsKVxuICAgICAgICBsb2FkRGF0YUZyb21VcmwoJy9teV9kYXRhJyk7XG4gICAgICAgIGxvYWREYXRhRnJvbVVybCgnL215X2RhdGEnLCBub2RlMSk7XG4gICAgICAgIGxvYWREYXRhRnJvbVVybCgnL215X2RhdGEnLCBub2RlMSwgZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKCdmaW5pc2hlZCcpOyB9KTtcbiAgICAgICAgbG9hZERhdGFGcm9tVXJsKCcvbXlfZGF0YScsIG51bGwsIGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZygnZmluaXNoZWQnKTsgfSk7XG5cbiAgICAtIGxvYWREYXRhRnJvbVVybChwYXJlbnRfbm9kZT1udWxsLCBvbl9maW5pc2hlZD1udWxsKVxuICAgICAgICBsb2FkRGF0YUZyb21VcmwoKTtcbiAgICAgICAgbG9hZERhdGFGcm9tVXJsKG5vZGUxKTtcbiAgICAgICAgbG9hZERhdGFGcm9tVXJsKG51bGwsIGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZygnZmluaXNoZWQnKTsgfSk7XG4gICAgICAgIGxvYWREYXRhRnJvbVVybChub2RlMSwgZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKCdmaW5pc2hlZCcpOyB9KTtcbiAgICAqL1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUubG9hZERhdGFGcm9tVXJsID0gZnVuY3Rpb24gKHBhcmFtMSwgcGFyYW0yLCBwYXJhbTMpIHtcbiAgICAgICAgaWYgKCQudHlwZShwYXJhbTEpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBwYXJhbWV0ZXIgaXMgdXJsXG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YUZyb21VcmwocGFyYW0xLCBwYXJhbTIsIHBhcmFtMyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBwYXJhbWV0ZXIgaXMgbm90IHVybFxuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFGcm9tVXJsKG51bGwsIHBhcmFtMSwgcGFyYW0yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5yZWxvYWQgPSBmdW5jdGlvbiAob25fZmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5fbG9hZERhdGFGcm9tVXJsKG51bGwsIG51bGwsIG9uX2ZpbmlzaGVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0Tm9kZUJ5SWQgPSBmdW5jdGlvbiAobm9kZV9pZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmdldE5vZGVCeUlkKG5vZGVfaWQpO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5nZXROb2RlQnlOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXROb2RlQnlOYW1lKG5hbWUpO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5nZXROb2Rlc0J5UHJvcGVydHkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmdldE5vZGVzQnlQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0Tm9kZUJ5SHRtbEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Tm9kZSgkKGVsZW1lbnQpKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0Tm9kZUJ5Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXROb2RlQnlDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLm9wZW5Ob2RlID0gZnVuY3Rpb24gKG5vZGUsIHBhcmFtMSwgcGFyYW0yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJzZVBhcmFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvbl9maW5pc2hlZDtcbiAgICAgICAgICAgIHZhciBzbGlkZTtcbiAgICAgICAgICAgIGlmICh1dGlsXzEuaXNGdW5jdGlvbihwYXJhbTEpKSB7XG4gICAgICAgICAgICAgICAgb25fZmluaXNoZWQgPSBwYXJhbTE7XG4gICAgICAgICAgICAgICAgc2xpZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2xpZGUgPSBwYXJhbTE7XG4gICAgICAgICAgICAgICAgb25fZmluaXNoZWQgPSBwYXJhbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2xpZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNsaWRlID0gX3RoaXMub3B0aW9ucy5zbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbc2xpZGUsIG9uX2ZpbmlzaGVkXTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9hID0gcGFyc2VQYXJhbXMoKSwgc2xpZGUgPSBfYVswXSwgb25fZmluaXNoZWQgPSBfYVsxXTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29wZW5Ob2RlKG5vZGUsIHNsaWRlLCBvbl9maW5pc2hlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuY2xvc2VOb2RlID0gZnVuY3Rpb24gKG5vZGUsIHNsaWRlX3BhcmFtKSB7XG4gICAgICAgIHZhciBzbGlkZSA9IHNsaWRlX3BhcmFtID09IG51bGwgPyB0aGlzLm9wdGlvbnMuc2xpZGUgOiBzbGlkZV9wYXJhbTtcbiAgICAgICAgaWYgKG5vZGUuaXNGb2xkZXIoKSkge1xuICAgICAgICAgICAgbmV3IG5vZGVfZWxlbWVudF8xLkZvbGRlckVsZW1lbnQobm9kZSwgdGhpcykuY2xvc2Uoc2xpZGUsIHRoaXMub3B0aW9ucy5hbmltYXRpb25TcGVlZCk7XG4gICAgICAgICAgICB0aGlzLl9zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kbmRfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG5kX2hhbmRsZXIuaXNfZHJhZ2dpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUucmVmcmVzaEhpdEFyZWFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kbmRfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5kbmRfaGFuZGxlci5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuYWRkTm9kZUFmdGVyID0gZnVuY3Rpb24gKG5ld19ub2RlX2luZm8sIGV4aXN0aW5nX25vZGUpIHtcbiAgICAgICAgdmFyIG5ld19ub2RlID0gZXhpc3Rpbmdfbm9kZS5hZGRBZnRlcihuZXdfbm9kZV9pbmZvKTtcbiAgICAgICAgaWYgKG5ld19ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMoZXhpc3Rpbmdfbm9kZS5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdfbm9kZTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuYWRkTm9kZUJlZm9yZSA9IGZ1bmN0aW9uIChuZXdfbm9kZV9pbmZvLCBleGlzdGluZ19ub2RlKSB7XG4gICAgICAgIHZhciBuZXdfbm9kZSA9IGV4aXN0aW5nX25vZGUuYWRkQmVmb3JlKG5ld19ub2RlX2luZm8pO1xuICAgICAgICBpZiAobmV3X25vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhleGlzdGluZ19ub2RlLnBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld19ub2RlO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5hZGRQYXJlbnROb2RlID0gZnVuY3Rpb24gKG5ld19ub2RlX2luZm8sIGV4aXN0aW5nX25vZGUpIHtcbiAgICAgICAgdmFyIG5ld19ub2RlID0gZXhpc3Rpbmdfbm9kZS5hZGRQYXJlbnQobmV3X25vZGVfaW5mbyk7XG4gICAgICAgIGlmIChuZXdfbm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKG5ld19ub2RlLnBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld19ub2RlO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ICYmIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLnJlbW92ZUZyb21TZWxlY3Rpb24obm9kZSwgdHJ1ZSk7IC8vIGluY2x1ZGluZyBjaGlsZHJlblxuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhub2RlLnBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuYXBwZW5kTm9kZSA9IGZ1bmN0aW9uIChuZXdfbm9kZV9pbmZvLCBwYXJlbnRfbm9kZV9wYXJhbSkge1xuICAgICAgICB2YXIgcGFyZW50X25vZGUgPSBwYXJlbnRfbm9kZV9wYXJhbSB8fCB0aGlzLnRyZWU7XG4gICAgICAgIHZhciBub2RlID0gcGFyZW50X25vZGUuYXBwZW5kKG5ld19ub2RlX2luZm8pO1xuICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMocGFyZW50X25vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUucHJlcGVuZE5vZGUgPSBmdW5jdGlvbiAobmV3X25vZGVfaW5mbywgcGFyZW50X25vZGVfcGFyYW0pIHtcbiAgICAgICAgdmFyIHBhcmVudF9ub2RlID0gIXBhcmVudF9ub2RlX3BhcmFtID8gdGhpcy50cmVlIDogcGFyZW50X25vZGVfcGFyYW07XG4gICAgICAgIHZhciBub2RlID0gcGFyZW50X25vZGUucHJlcGVuZChuZXdfbm9kZV9pbmZvKTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKHBhcmVudF9ub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnVwZGF0ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSwgZGF0YSkge1xuICAgICAgICB2YXIgaWRfaXNfY2hhbmdlZCA9IGRhdGEuaWQgJiYgZGF0YS5pZCAhPT0gbm9kZS5pZDtcbiAgICAgICAgaWYgKGlkX2lzX2NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZS5yZW1vdmVOb2RlRnJvbUluZGV4KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgaWYgKGlkX2lzX2NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZS5hZGROb2RlVG9JbmRleChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgZGF0YS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgaWYgKGRhdGEuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5sb2FkRnJvbURhdGEoZGF0YS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJGcm9tTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0Q3VycmVudE5vZGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUubW92ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSwgdGFyZ2V0X25vZGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbl9pbmRleCA9IG5vZGVfMS5nZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMudHJlZS5tb3ZlTm9kZShub2RlLCB0YXJnZXRfbm9kZSwgcG9zaXRpb25faW5kZXgpO1xuICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMobnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldFN0YXRlRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNhdmVfc3RhdGVfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLmdldFN0YXRlRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5hZGRUb1NlbGVjdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICYmIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmFkZFRvU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKG5vZGUpLnNlbGVjdCgpO1xuICAgICAgICAgICAgdGhpcy5fc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIuZ2V0U2VsZWN0ZWROb2RlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmlzTm9kZVNlbGVjdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIuaXNOb2RlU2VsZWN0ZWQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUucmVtb3ZlRnJvbVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5yZW1vdmVGcm9tU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKG5vZGUpLmRlc2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLl9zYXZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5zY3JvbGxUb05vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxfaGFuZGxlcikge1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChub2RlLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHRvcF8xID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wIC0gdGhpcy4kZWwub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxfaGFuZGxlci5zY3JvbGxUbyh0b3BfMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNhdmVfc3RhdGVfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLmdldFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVfc3RhdGVfaGFuZGxlci5zZXRJbml0aWFsU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnNldE9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5rZXlfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5rZXlfaGFuZGxlci5tb3ZlRG93bigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5X2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMua2V5X2hhbmRsZXIubW92ZVVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25fMVtcImRlZmF1bHRcIl07XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnRlc3RHZW5lcmF0ZUhpdEFyZWFzID0gZnVuY3Rpb24gKG1vdmluZ19ub2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5kbmRfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kbmRfaGFuZGxlci5jdXJyZW50X2l0ZW0gPSB0aGlzLl9nZXROb2RlRWxlbWVudEZvck5vZGUobW92aW5nX25vZGUpO1xuICAgICAgICAgICAgdGhpcy5kbmRfaGFuZGxlci5nZW5lcmF0ZUhpdEFyZWFzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kbmRfaGFuZGxlci5oaXRfYXJlYXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3RyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gJC5FdmVudChldmVudF9uYW1lKTtcbiAgICAgICAgJC5leHRlbmQoZXZlbnQsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fb3Blbk5vZGUgPSBmdW5jdGlvbiAobm9kZSwgc2xpZGUsIG9uX2ZpbmlzaGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzbGlkZSA9PT0gdm9pZCAwKSB7IHNsaWRlID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgZG9PcGVuTm9kZSA9IGZ1bmN0aW9uIChfbm9kZSwgX3NsaWRlLCBfb25fZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJfZWxlbWVudCA9IG5ldyBub2RlX2VsZW1lbnRfMS5Gb2xkZXJFbGVtZW50KF9ub2RlLCBfdGhpcyk7XG4gICAgICAgICAgICBmb2xkZXJfZWxlbWVudC5vcGVuKF9vbl9maW5pc2hlZCwgX3NsaWRlLCBfdGhpcy5vcHRpb25zLmFuaW1hdGlvblNwZWVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5vZGUuaXNGb2xkZXIoKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubG9hZF9vbl9kZW1hbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkRm9sZGVyT25EZW1hbmQobm9kZSwgc2xpZGUsIG9uX2ZpbmlzaGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRfMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuYjogZG8gbm90IG9wZW4gcm9vdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRfMS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvT3Blbk5vZGUocGFyZW50XzEsIGZhbHNlLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfMSA9IHBhcmVudF8xLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9PcGVuTm9kZShub2RlLCBzbGlkZSwgb25fZmluaXNoZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKlxuICAgIFJlZHJhdyB0aGUgdHJlZSBvciBwYXJ0IG9mIHRoZSB0cmVlLlxuICAgICBmcm9tX25vZGU6IHJlZHJhdyB0aGlzIHN1YnRyZWVcbiAgICAqL1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3JlZnJlc2hFbGVtZW50cyA9IGZ1bmN0aW9uIChmcm9tX25vZGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoZnJvbV9ub2RlKTtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5yZWZyZXNoXCIpO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuaXNGb2xkZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBub2RlX2VsZW1lbnRfMS5Gb2xkZXJFbGVtZW50KG5vZGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBub2RlX2VsZW1lbnRfMS5Ob2RlRWxlbWVudChub2RlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0Tm9kZUVsZW1lbnQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9nZXROb2RlKCRlbGVtZW50KTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXROb2RlRWxlbWVudEZvck5vZGUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fY29udGFpbnNFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9nZXROb2RlKCQoZWxlbWVudCkpO1xuICAgICAgICByZXR1cm4gbm9kZSAhPSBudWxsICYmIG5vZGUudHJlZSA9PT0gdGhpcy50cmVlO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiRlbDtcbiAgICAgICAgdGhpcy5tb3VzZV9kZWxheSA9IDMwMDtcbiAgICAgICAgdGhpcy5pc19pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbnMucnRsID0gdGhpcy5fZ2V0UnRsT3B0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VkSWNvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNsb3NlZEljb24gPSB0aGlzLl9nZXREZWZhdWx0Q2xvc2VkSWNvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgZWxlbWVudHNfcmVuZGVyZXJfMVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgICAgIGlmIChzYXZlX3N0YXRlX2hhbmRsZXJfMVtcImRlZmF1bHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIgPSBuZXcgc2F2ZV9zdGF0ZV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNhdmVTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rfbm9kZV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlciA9IG5ldyBzZWxlY3Rfbm9kZV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnX2FuZF9kcm9wX2hhbmRsZXJfMS5EcmFnQW5kRHJvcEhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kbmRfaGFuZGxlciA9IG5ldyBkcmFnX2FuZF9kcm9wX2hhbmRsZXJfMS5EcmFnQW5kRHJvcEhhbmRsZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZHJhZ0FuZERyb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Nyb2xsX2hhbmRsZXJfMVtcImRlZmF1bHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxfaGFuZGxlciA9IG5ldyBzY3JvbGxfaGFuZGxlcl8xW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5X2hhbmRsZXJfMVtcImRlZmF1bHRcIl0gIT0gbnVsbCAmJiBzZWxlY3Rfbm9kZV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMua2V5X2hhbmRsZXIgPSBuZXcga2V5X2hhbmRsZXJfMVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdERhdGEoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsaWNrKCQucHJveHkodGhpcy5fY2xpY2ssIHRoaXMpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRibGNsaWNrKCQucHJveHkodGhpcy5fZGJsY2xpY2ssIHRoaXMpKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VDb250ZXh0TWVudSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwiY29udGV4dG1lbnVcIiwgJC5wcm94eSh0aGlzLl9jb250ZXh0bWVudSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQub2ZmKCk7XG4gICAgICAgIGlmICh0aGlzLmtleV9oYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmtleV9oYW5kbGVyLmRlaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJlZSA9IG5ldyBub2RlXzEuTm9kZSh7fSwgdHJ1ZSk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2RlaW5pdC5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fbW91c2VDYXB0dXJlID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcmFnQW5kRHJvcCAmJiB0aGlzLmRuZF9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kbmRfaGFuZGxlci5tb3VzZUNhcHR1cmUocG9zaXRpb25faW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX21vdXNlU3RhcnQgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdBbmREcm9wICYmIHRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRuZF9oYW5kbGVyLm1vdXNlU3RhcnQocG9zaXRpb25faW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX21vdXNlRHJhZyA9IGZ1bmN0aW9uIChwb3NpdGlvbl9pbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJhZ0FuZERyb3AgJiYgdGhpcy5kbmRfaGFuZGxlcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZG5kX2hhbmRsZXIubW91c2VEcmFnKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX2hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbF9oYW5kbGVyLmNoZWNrU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9tb3VzZVN0b3AgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdBbmREcm9wICYmIHRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRuZF9oYW5kbGVyLm1vdXNlU3RvcChwb3NpdGlvbl9pbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5faW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGEodGhpcy5vcHRpb25zLmRhdGEsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gdGhpcy5fZ2V0RGF0YVVybEluZm8obnVsbCk7XG4gICAgICAgICAgICBpZiAoZGF0YV91cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkRGF0YUZyb21VcmwobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkRGF0YShbXSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2dldERhdGFVcmxJbmZvID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGFfdXJsID0gdGhpcy5vcHRpb25zLmRhdGFVcmwgfHwgdGhpcy5lbGVtZW50LmRhdGEoXCJ1cmxcIik7XG4gICAgICAgIHZhciBnZXRVcmxGcm9tU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVybF9pbmZvID0geyB1cmw6IGRhdGFfdXJsIH07XG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9hZCBvbiBkZW1hbmQgb2YgYSBzdWJ0cmVlOyBhZGQgbm9kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHsgbm9kZTogbm9kZS5pZCB9O1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgICAgICAgICAgICB1cmxfaW5mb1tcImRhdGFcIl0gPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHNlbGVjdGVkX25vZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkX25vZGVfaWQgPSBfdGhpcy5fZ2V0Tm9kZUlkVG9CZVNlbGVjdGVkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX25vZGVfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IHNlbGVjdGVkX25vZGU6IHNlbGVjdGVkX25vZGVfaWQgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgICAgICAgICAgICAgICB1cmxfaW5mb1tcImRhdGFcIl0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmxfaW5mbztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihkYXRhX3VybCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX3VybChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkLnR5cGUoZGF0YV91cmwpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VXJsRnJvbVN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFfdXJsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9nZXROb2RlSWRUb0JlU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZVN0YXRlICYmIHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIuZ2V0Tm9kZUlkVG9CZVNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5faW5pdFRyZWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZG9Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5pc19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5pbml0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyZWUgPSBuZXcgdGhpcy5vcHRpb25zLm5vZGVDbGFzcyhudWxsLCB0cnVlLCB0aGlzLm9wdGlvbnMubm9kZUNsYXNzKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlLmxvYWRGcm9tRGF0YShkYXRhKTtcbiAgICAgICAgdmFyIG11c3RfbG9hZF9vbl9kZW1hbmQgPSB0aGlzLl9zZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKG51bGwpO1xuICAgICAgICBpZiAoIW11c3RfbG9hZF9vbl9kZW1hbmQpIHtcbiAgICAgICAgICAgIGRvSW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9hZCBkYXRhIG9uIGRlbWFuZCBhbmQgdGhlbiBpbml0IHRoZSB0cmVlXG4gICAgICAgICAgICB0aGlzLl9zZXRJbml0aWFsU3RhdGVPbkRlbWFuZChkb0luaXQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSwgZWl0aGVyIGJ5IHJlc3RvcmluZyB0aGUgc3RhdGUgb3IgYXV0by1vcGVuaW5nIG5vZGVzXG4gICAgLy8gcmVzdWx0OiBtdXN0IGxvYWQgbm9kZXMgb24gZGVtYW5kP1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3NldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc3RvcmVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJlc3VsdDogaXMgc3RhdGUgcmVzdG9yZWQsIG11c3QgbG9hZCBvbiBkZW1hbmQ/XG4gICAgICAgICAgICBpZiAoIShfdGhpcy5vcHRpb25zLnNhdmVTdGF0ZSAmJiBfdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtmYWxzZSwgZmFsc2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLmdldFN0YXRlRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZmFsc2UsIGZhbHNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtdXN0X2xvYWRfb25fZGVtYW5kXzEgPSBfdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIuc2V0SW5pdGlhbFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRydWU6IHRoZSBzdGF0ZSBpcyByZXN0b3JlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsIG11c3RfbG9hZF9vbl9kZW1hbmRfMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYXV0b09wZW5Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJlc3VsdDogbXVzdCBsb2FkIG9uIGRlbWFuZD9cbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmF1dG9PcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXhfbGV2ZWwgPSBfdGhpcy5fZ2V0QXV0b09wZW5NYXhMZXZlbCgpO1xuICAgICAgICAgICAgdmFyIG11c3RfbG9hZF9vbl9kZW1hbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnRyZWUuaXRlcmF0ZShmdW5jdGlvbiAobm9kZSwgbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sb2FkX29uX2RlbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICBtdXN0X2xvYWRfb25fZGVtYW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbm9kZS5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXNfb3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXZlbCAhPT0gbWF4X2xldmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG11c3RfbG9hZF9vbl9kZW1hbmQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgICAgIHZhciBfYSA9IHJlc3RvcmVTdGF0ZSgpLCBpc19yZXN0b3JlZCA9IF9hWzBdLCBtdXN0X2xvYWRfb25fZGVtYW5kID0gX2FbMV07XG4gICAgICAgIGlmICghaXNfcmVzdG9yZWQpIHtcbiAgICAgICAgICAgIG11c3RfbG9hZF9vbl9kZW1hbmQgPSBhdXRvT3Blbk5vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG11c3RfbG9hZF9vbl9kZW1hbmQ7XG4gICAgfTtcbiAgICAvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGUgZm9yIG5vZGVzIHRoYXQgYXJlIGxvYWRlZCBvbiBkZW1hbmRcbiAgICAvLyBDYWxsIGNiX2ZpbmlzaGVkIHdoZW4gZG9uZVxuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3NldEluaXRpYWxTdGF0ZU9uRGVtYW5kID0gZnVuY3Rpb24gKGNiX2ZpbmlzaGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXN0b3JlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIShfdGhpcy5vcHRpb25zLnNhdmVTdGF0ZSAmJiBfdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLmdldFN0YXRlRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVfc3RhdGVfaGFuZGxlci5zZXRJbml0aWFsU3RhdGVPbkRlbWFuZChzdGF0ZSwgY2JfZmluaXNoZWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhdXRvT3Blbk5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1heF9sZXZlbCA9IF90aGlzLl9nZXRBdXRvT3Blbk1heExldmVsKCk7XG4gICAgICAgICAgICB2YXIgbG9hZGluZ19jb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgbG9hZEFuZE9wZW5Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nX2NvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgX3RoaXMuX29wZW5Ob2RlKG5vZGUsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdfY291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk5vZGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9wZW5Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmVlLml0ZXJhdGUoZnVuY3Rpb24gKG5vZGUsIGxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxvYWRfb25fZGVtYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUuaXNfbG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRBbmRPcGVuTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vcGVuTm9kZShub2RlLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV2ZWwgIT09IG1heF9sZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiX2ZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9wZW5Ob2RlcygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXJlc3RvcmVTdGF0ZSgpKSB7XG4gICAgICAgICAgICBhdXRvT3Blbk5vZGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2dldEF1dG9PcGVuTWF4TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLm9wdGlvbnMuYXV0b09wZW4sIDEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY2xpY2tfdGFyZ2V0ID0gdGhpcy5fZ2V0Q2xpY2tUYXJnZXQoZS50YXJnZXQpO1xuICAgICAgICBpZiAoY2xpY2tfdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoY2xpY2tfdGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZShjbGlja190YXJnZXQubm9kZSwgdGhpcy5vcHRpb25zLnNsaWRlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNsaWNrX3RhcmdldC50eXBlID09PSBcImxhYmVsXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNsaWNrX3RhcmdldC5ub2RlO1xuICAgICAgICAgICAgICAgIHZhciBldmVudF8xID0gdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5jbGlja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrX2V2ZW50OiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudF8xLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdE5vZGUobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9kYmxjbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBjbGlja190YXJnZXQgPSB0aGlzLl9nZXRDbGlja1RhcmdldChlLnRhcmdldCk7XG4gICAgICAgIGlmIChjbGlja190YXJnZXQgJiYgY2xpY2tfdGFyZ2V0LnR5cGUgPT09IFwibGFiZWxcIikge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5kYmxjbGlja1wiLCB7XG4gICAgICAgICAgICAgICAgbm9kZTogY2xpY2tfdGFyZ2V0Lm5vZGUsXG4gICAgICAgICAgICAgICAgY2xpY2tfZXZlbnQ6IGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9nZXRDbGlja1RhcmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChlbGVtZW50KTtcbiAgICAgICAgdmFyICRidXR0b24gPSAkdGFyZ2V0LmNsb3Nlc3QoXCIuanF0cmVlLXRvZ2dsZXJcIik7XG4gICAgICAgIGlmICgkYnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9nZXROb2RlKCRidXR0b24pO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkdGFyZ2V0LmNsb3Nlc3QoXCIuanF0cmVlLWVsZW1lbnRcIik7XG4gICAgICAgICAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5fZ2V0Tm9kZSgkZWwpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0Tm9kZSA9IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICAgICB2YXIgJGxpID0gJGVsZW1lbnQuY2xvc2VzdChcImxpLmpxdHJlZV9jb21tb25cIik7XG4gICAgICAgIGlmICgkbGkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAkbGkuZGF0YShcIm5vZGVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2NvbnRleHRtZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRkaXYgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwidWwuanF0cmVlLXRyZWUgLmpxdHJlZS1lbGVtZW50XCIpO1xuICAgICAgICBpZiAoJGRpdi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5fZ2V0Tm9kZSgkZGl2KTtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5jb250ZXh0bWVudVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrX2V2ZW50OiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fc2F2ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVTdGF0ZSAmJiB0aGlzLnNhdmVfc3RhdGVfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3NlbGVjdEN1cnJlbnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZV9lbGVtZW50ID0gdGhpcy5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGVfZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5vZGVfZWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZGVzZWxlY3RDdXJyZW50Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9nZXREZWZhdWx0Q2xvc2VkSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcbiAgICAgICAgICAgIC8vIHRyaWFuZ2xlIHRvIHRoZSBsZWZ0XG4gICAgICAgICAgICByZXR1cm4gXCImI3gyNWMwO1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJpYW5nbGUgdG8gdGhlIHJpZ2h0XG4gICAgICAgICAgICByZXR1cm4gXCImI3gyNWJhO1wiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9nZXRSdGxPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucnRsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucnRsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGFfcnRsID0gdGhpcy5lbGVtZW50LmRhdGEoXCJydGxcIik7XG4gICAgICAgICAgICBpZiAoZGF0YV9ydGwgIT0gbnVsbCAmJiBkYXRhX3J0bCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fbm90aWZ5TG9hZGluZyA9IGZ1bmN0aW9uIChpc19sb2FkaW5nLCBub2RlLCAkZWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbkxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkxvYWRpbmcoaXNfbG9hZGluZywgbm9kZSwgJGVsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fc2VsZWN0Tm9kZSA9IGZ1bmN0aW9uIChub2RlLCBtdXN0X3RvZ2dsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobXVzdF90b2dnbGUgPT09IHZvaWQgMCkgeyBtdXN0X3RvZ2dsZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhblNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLm9uQ2FuU2VsZWN0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX3RoaXMub3B0aW9ucy5zZWxlY3RhYmxlICYmXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbnMub25DYW5TZWxlY3ROb2RlKG5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLnNlbGVjdGFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcGVuUGFyZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCAmJiAhcGFyZW50LmlzX29wZW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuTm9kZShwYXJlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNhdmVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNhdmVTdGF0ZSAmJiBfdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2FsbGVkIHdpdGggZW1wdHkgbm9kZSAtPiBkZXNlbGVjdCBjdXJyZW50IG5vZGVcbiAgICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0Q3VycmVudE5vZGUoKTtcbiAgICAgICAgICAgIHNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FuU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmlzTm9kZVNlbGVjdGVkKG5vZGUpKSB7XG4gICAgICAgICAgICBpZiAobXVzdF90b2dnbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXNlbGVjdEN1cnJlbnROb2RlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c19ub2RlOiBub2RlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGVzZWxlY3RlZF9ub2RlID0gdGhpcy5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0Q3VycmVudE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TZWxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyRXZlbnQoXCJ0cmVlLnNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgICAgICBkZXNlbGVjdGVkX25vZGU6IGRlc2VsZWN0ZWRfbm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvcGVuUGFyZW50cygpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVTdGF0ZSgpO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fbG9hZERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcGFyZW50X25vZGUpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyRXZlbnQoXCJ0cmVlLmxvYWRfZGF0YVwiLCB7IHRyZWVfZGF0YTogZGF0YSB9KTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0Tm9kZXMocGFyZW50X25vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRTdWJ0cmVlKGRhdGEsIHBhcmVudF9ub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRUcmVlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpICYmIHRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRuZF9oYW5kbGVyLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZGVzZWxlY3ROb2RlcyA9IGZ1bmN0aW9uIChwYXJlbnRfbm9kZSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfbm9kZXNfdW5kZXJfcGFyZW50ID0gdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmdldFNlbGVjdGVkTm9kZXNVbmRlcihwYXJlbnRfbm9kZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlbGVjdGVkX25vZGVzX3VuZGVyX3BhcmVudF8xID0gc2VsZWN0ZWRfbm9kZXNfdW5kZXJfcGFyZW50OyBfaSA8IHNlbGVjdGVkX25vZGVzX3VuZGVyX3BhcmVudF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gc2VsZWN0ZWRfbm9kZXNfdW5kZXJfcGFyZW50XzFbX2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5yZW1vdmVGcm9tU2VsZWN0aW9uKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9sb2FkU3VidHJlZSA9IGZ1bmN0aW9uIChkYXRhLCBwYXJlbnRfbm9kZSkge1xuICAgICAgICBwYXJlbnRfbm9kZS5sb2FkRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIHBhcmVudF9ub2RlLmxvYWRfb25fZGVtYW5kID0gZmFsc2U7XG4gICAgICAgIHBhcmVudF9ub2RlLmlzX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKHBhcmVudF9ub2RlKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2xvYWREYXRhRnJvbVVybCA9IGZ1bmN0aW9uICh1cmxfaW5mb19wYXJhbSwgcGFyZW50X25vZGUsIG9uX2ZpbmlzaGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAkZWwgPSBudWxsO1xuICAgICAgICB2YXIgdXJsX2luZm8gPSB1cmxfaW5mb19wYXJhbTtcbiAgICAgICAgdmFyIGFkZExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRlbCA9IHBhcmVudF9ub2RlID8gJChwYXJlbnRfbm9kZS5lbGVtZW50KSA6IF90aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoXCJqcXRyZWUtbG9hZGluZ1wiKTtcbiAgICAgICAgICAgIF90aGlzLl9ub3RpZnlMb2FkaW5nKHRydWUsIHBhcmVudF9ub2RlLCAkZWwpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVtb3ZlTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCRlbCkge1xuICAgICAgICAgICAgICAgICRlbC5yZW1vdmVDbGFzcyhcImpxdHJlZS1sb2FkaW5nXCIpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9ub3RpZnlMb2FkaW5nKGZhbHNlLCBwYXJlbnRfbm9kZSwgJGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhcnNlVXJsSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkLnR5cGUodXJsX2luZm8pID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdXJsOiB1cmxfaW5mbyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF1cmxfaW5mby5tZXRob2QpIHtcbiAgICAgICAgICAgICAgICB1cmxfaW5mby5tZXRob2QgPSBcImdldFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVybF9pbmZvO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFuZGVMb2FkRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICByZW1vdmVMb2FkaW5nQ2xhc3MoKTtcbiAgICAgICAgICAgIF90aGlzLl9sb2FkRGF0YShkYXRhLCBwYXJlbnRfbm9kZSk7XG4gICAgICAgICAgICBpZiAob25fZmluaXNoZWQgJiYgJC5pc0Z1bmN0aW9uKG9uX2ZpbmlzaGVkKSkge1xuICAgICAgICAgICAgICAgIG9uX2ZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXREYXRhRnJvbVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJC5pc0FycmF5KHJlc3BvbnNlKSB8fCB0eXBlb2YgcmVzcG9uc2UgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICA/IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgOiByZXNwb25zZSAhPSBudWxsID8gJC5wYXJzZUpTT04ocmVzcG9uc2UpIDogW107XG4gICAgICAgIH07XG4gICAgICAgIHZhciBmaWx0ZXJEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLmRhdGFGaWx0ZXIgPyBfdGhpcy5vcHRpb25zLmRhdGFGaWx0ZXIoZGF0YSkgOiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFuZGxlU3VjY2VzcyA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBmaWx0ZXJEYXRhKGdldERhdGFGcm9tUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIGhhbmRlTG9hZERhdGEoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVtb3ZlTG9hZGluZ0NsYXNzKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5vbkxvYWRGYWlsZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zLm9uTG9hZEZhaWxlZChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBsb2FkRGF0YUZyb21VcmxJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF91cmxfaW5mbyA9IHBhcnNlVXJsSW5mbygpO1xuICAgICAgICAgICAgJC5hamF4KCQuZXh0ZW5kKHt9LCBfdXJsX2luZm8sIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHVybF9pbmZvLm1ldGhvZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gdXJsX2luZm8ubWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogaGFuZGxlU3VjY2VzcyxcbiAgICAgICAgICAgICAgICBlcnJvcjogaGFuZGxlRXJyb3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF1cmxfaW5mb19wYXJhbSkge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgdXJsIGZvciBub2RlXG4gICAgICAgICAgICB1cmxfaW5mbyA9IHRoaXMuX2dldERhdGFVcmxJbmZvKHBhcmVudF9ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRMb2FkaW5nQ2xhc3MoKTtcbiAgICAgICAgaWYgKCF1cmxfaW5mbykge1xuICAgICAgICAgICAgcmVtb3ZlTG9hZGluZ0NsYXNzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJC5pc0FycmF5KHVybF9pbmZvKSkge1xuICAgICAgICAgICAgaGFuZGVMb2FkRGF0YSh1cmxfaW5mbyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2FkRGF0YUZyb21VcmxJbmZvKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2xvYWRGb2xkZXJPbkRlbWFuZCA9IGZ1bmN0aW9uIChub2RlLCBzbGlkZSwgb25fZmluaXNoZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHNsaWRlID09PSB2b2lkIDApIHsgc2xpZGUgPSB0cnVlOyB9XG4gICAgICAgIG5vZGUuaXNfbG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xvYWREYXRhRnJvbVVybChudWxsLCBub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fb3Blbk5vZGUobm9kZSwgc2xpZGUsIG9uX2ZpbmlzaGVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQuZGVmYXVsdHMgPSB7XG4gICAgICAgIGFuaW1hdGlvblNwZWVkOiBcImZhc3RcIixcbiAgICAgICAgYXV0b09wZW46IGZhbHNlLFxuICAgICAgICBzYXZlU3RhdGU6IGZhbHNlLFxuICAgICAgICBkcmFnQW5kRHJvcDogZmFsc2UsXG4gICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgIHVzZUNvbnRleHRNZW51OiB0cnVlLFxuICAgICAgICBvbkNhblNlbGVjdE5vZGU6IG51bGwsXG4gICAgICAgIG9uU2V0U3RhdGVGcm9tU3RvcmFnZTogbnVsbCxcbiAgICAgICAgb25HZXRTdGF0ZUZyb21TdG9yYWdlOiBudWxsLFxuICAgICAgICBvbkNyZWF0ZUxpOiBudWxsLFxuICAgICAgICBvbklzTW92ZUhhbmRsZTogbnVsbCxcbiAgICAgICAgLy8gQ2FuIHRoaXMgbm9kZSBiZSBtb3ZlZD9cbiAgICAgICAgb25DYW5Nb3ZlOiBudWxsLFxuICAgICAgICAvLyBDYW4gdGhpcyBub2RlIGJlIG1vdmVkIHRvIHRoaXMgcG9zaXRpb24/IGZ1bmN0aW9uKG1vdmVkX25vZGUsIHRhcmdldF9ub2RlLCBwb3NpdGlvbilcbiAgICAgICAgb25DYW5Nb3ZlVG86IG51bGwsXG4gICAgICAgIG9uTG9hZEZhaWxlZDogbnVsbCxcbiAgICAgICAgYXV0b0VzY2FwZTogdHJ1ZSxcbiAgICAgICAgZGF0YVVybDogbnVsbCxcbiAgICAgICAgLy8gVGhlIHN5bWJvbCB0byB1c2UgZm9yIGEgY2xvc2VkIG5vZGUgLSDilrogQkxBQ0sgUklHSFQtUE9JTlRJTkcgUE9JTlRFUlxuICAgICAgICAvLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2hhci8yNWJhL2luZGV4Lmh0bVxuICAgICAgICBjbG9zZWRJY29uOiBudWxsLFxuICAgICAgICAvLyBUaGUgc3ltYm9sIHRvIHVzZSBmb3IgYW4gb3BlbiBub2RlIC0g4pa8IEJMQUNLIERPV04tUE9JTlRJTkcgVFJJQU5HTEVcbiAgICAgICAgLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NoYXIvMjViYy9pbmRleC5odG1cbiAgICAgICAgb3BlbmVkSWNvbjogXCImI3gyNWJjO1wiLFxuICAgICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgICAgbm9kZUNsYXNzOiBub2RlXzEuTm9kZSxcbiAgICAgICAgZGF0YUZpbHRlcjogbnVsbCxcbiAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICBvcGVuRm9sZGVyRGVsYXk6IDUwMCxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgb25EcmFnTW92ZTogbnVsbCxcbiAgICAgICAgb25EcmFnU3RvcDogbnVsbCxcbiAgICAgICAgYnV0dG9uTGVmdDogdHJ1ZSxcbiAgICAgICAgb25Mb2FkaW5nOiBudWxsLFxuICAgICAgICB0YWJJbmRleDogMFxuICAgIH07XG4gICAgcmV0dXJuIEpxVHJlZVdpZGdldDtcbn0obW91c2Vfd2lkZ2V0XzFbXCJkZWZhdWx0XCJdKSk7XG5zaW1wbGVfd2lkZ2V0XzFbXCJkZWZhdWx0XCJdLnJlZ2lzdGVyKEpxVHJlZVdpZGdldCwgXCJ0cmVlXCIpO1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB2ZXJzaW9uID0gXCIxLjQuM1wiO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2ZXJzaW9uO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG5vZGVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBEcmFnQW5kRHJvcEhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRHJhZ0FuZERyb3BIYW5kbGVyKHRyZWVfd2lkZ2V0KSB7XG4gICAgICAgIHRoaXMudHJlZV93aWRnZXQgPSB0cmVlX3dpZGdldDtcbiAgICAgICAgdGhpcy5ob3ZlcmVkX2FyZWEgPSBudWxsO1xuICAgICAgICB0aGlzLiRnaG9zdCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGl0X2FyZWFzID0gW107XG4gICAgICAgIHRoaXMuaXNfZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50X2l0ZW0gPSBudWxsO1xuICAgIH1cbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLm1vdXNlQ2FwdHVyZSA9IGZ1bmN0aW9uIChwb3NpdGlvbl9pbmZvKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQocG9zaXRpb25faW5mby50YXJnZXQpO1xuICAgICAgICBpZiAoIXRoaXMubXVzdENhcHR1cmVFbGVtZW50KCRlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbklzTW92ZUhhbmRsZSAmJlxuICAgICAgICAgICAgIXRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbklzTW92ZUhhbmRsZSgkZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlX2VsZW1lbnQgPSB0aGlzLnRyZWVfd2lkZ2V0Ll9nZXROb2RlRWxlbWVudCgkZWxlbWVudCk7XG4gICAgICAgIGlmIChub2RlX2VsZW1lbnQgJiYgdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uQ2FuTW92ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25DYW5Nb3ZlKG5vZGVfZWxlbWVudC5ub2RlKSkge1xuICAgICAgICAgICAgICAgIG5vZGVfZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50X2l0ZW0gPSBub2RlX2VsZW1lbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRfaXRlbSAhPSBudWxsO1xuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5nZW5lcmF0ZUhpdEFyZWFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudF9pdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmhpdF9hcmVhcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhpdF9hcmVhc19nZW5lcmF0b3IgPSBuZXcgSGl0QXJlYXNHZW5lcmF0b3IodGhpcy50cmVlX3dpZGdldC50cmVlLCB0aGlzLmN1cnJlbnRfaXRlbS5ub2RlLCB0aGlzLmdldFRyZWVEaW1lbnNpb25zKCkuYm90dG9tKTtcbiAgICAgICAgICAgIHRoaXMuaGl0X2FyZWFzID0gaGl0X2FyZWFzX2dlbmVyYXRvci5nZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLm1vdXNlU3RhcnQgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudF9pdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHBvc2l0aW9uX2luZm8udGFyZ2V0KS5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5jdXJyZW50X2l0ZW0ubm9kZTtcbiAgICAgICAgICAgIHZhciBub2RlX25hbWUgPSB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuYXV0b0VzY2FwZVxuICAgICAgICAgICAgICAgID8gdXRpbF8xLmh0bWxfZXNjYXBlKG5vZGUubmFtZSlcbiAgICAgICAgICAgICAgICA6IG5vZGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ19lbGVtZW50ID0gbmV3IERyYWdFbGVtZW50KG5vZGVfbmFtZSwgcG9zaXRpb25faW5mby5wYWdlX3ggLSBvZmZzZXQubGVmdCwgcG9zaXRpb25faW5mby5wYWdlX3kgLSBvZmZzZXQudG9wLCB0aGlzLnRyZWVfd2lkZ2V0LmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5pc19kcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaXRlbS4kZWxlbWVudC5hZGRDbGFzcyhcImpxdHJlZS1tb3ZpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tb3VzZURyYWcgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudF9pdGVtIHx8ICF0aGlzLmRyYWdfZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kcmFnX2VsZW1lbnQubW92ZShwb3NpdGlvbl9pbmZvLnBhZ2VfeCwgcG9zaXRpb25faW5mby5wYWdlX3kpO1xuICAgICAgICAgICAgdmFyIGFyZWEgPSB0aGlzLmZpbmRIb3ZlcmVkQXJlYShwb3NpdGlvbl9pbmZvLnBhZ2VfeCwgcG9zaXRpb25faW5mby5wYWdlX3kpO1xuICAgICAgICAgICAgdmFyIGNhbl9tb3ZlX3RvID0gdGhpcy5jYW5Nb3ZlVG9BcmVhKGFyZWEpO1xuICAgICAgICAgICAgaWYgKGNhbl9tb3ZlX3RvICYmIGFyZWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFyZWEubm9kZS5pc0ZvbGRlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcE9wZW5Gb2xkZXJUaW1lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ob3ZlcmVkX2FyZWEgIT09IGFyZWEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkX2FyZWEgPSBhcmVhO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgY2xvc2VkIGZvbGRlciwgc3RhcnQgdGltZXIgdG8gb3BlbiBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdXN0T3BlbkZvbGRlclRpbWVyKGFyZWEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T3BlbkZvbGRlclRpbWVyKGFyZWEubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BPcGVuRm9sZGVyVGltZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3BIaW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVIb3ZlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRHJvcEhpbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BPcGVuRm9sZGVyVGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYXJlYSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25EcmFnTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25EcmFnTW92ZSh0aGlzLmN1cnJlbnRfaXRlbS5ub2RlLCBwb3NpdGlvbl9pbmZvLm9yaWdpbmFsX2V2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tb3VzZVN0b3AgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICB0aGlzLm1vdmVJdGVtKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlSG92ZXIoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVEcm9wSGludCgpO1xuICAgICAgICB0aGlzLnJlbW92ZUhpdEFyZWFzKCk7XG4gICAgICAgIHZhciBjdXJyZW50X2l0ZW0gPSB0aGlzLmN1cnJlbnRfaXRlbTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF9pdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaXRlbS4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImpxdHJlZS1tb3ZpbmdcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaXRlbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc19kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuaG92ZXJlZF9hcmVhICYmIGN1cnJlbnRfaXRlbSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbkRyYWdTdG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uRHJhZ1N0b3AoY3VycmVudF9pdGVtLm5vZGUsIHBvc2l0aW9uX2luZm8ub3JpZ2luYWxfZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVIaXRBcmVhcygpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50X2l0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVIaXRBcmVhcygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2l0ZW0gPSB0aGlzLnRyZWVfd2lkZ2V0Ll9nZXROb2RlRWxlbWVudEZvck5vZGUodGhpcy5jdXJyZW50X2l0ZW0ubm9kZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc19kcmFnZ2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9pdGVtLiRlbGVtZW50LmFkZENsYXNzKFwianF0cmVlLW1vdmluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tdXN0Q2FwdHVyZUVsZW1lbnQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICEkZWxlbWVudC5pcyhcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKTtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuY2FuTW92ZVRvQXJlYSA9IGZ1bmN0aW9uIChhcmVhKSB7XG4gICAgICAgIGlmICghYXJlYSB8fCAhdGhpcy5jdXJyZW50X2l0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25DYW5Nb3ZlVG8pIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbl9uYW1lID0gbm9kZV8xLmdldFBvc2l0aW9uTmFtZShhcmVhLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25DYW5Nb3ZlVG8odGhpcy5jdXJyZW50X2l0ZW0ubm9kZSwgYXJlYS5ub2RlLCBwb3NpdGlvbl9uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLnJlbW92ZUhpdEFyZWFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpdF9hcmVhcyA9IFtdO1xuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ19lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdfZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ19lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5yZW1vdmVEcm9wSGludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNfZ2hvc3QpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNfZ2hvc3QucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaG92ZXJlZF9hcmVhID0gbnVsbDtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuZmluZEhvdmVyZWRBcmVhID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSB0aGlzLmdldFRyZWVEaW1lbnNpb25zKCk7XG4gICAgICAgIGlmICh4IDwgZGltZW5zaW9ucy5sZWZ0IHx8XG4gICAgICAgICAgICB5IDwgZGltZW5zaW9ucy50b3AgfHxcbiAgICAgICAgICAgIHggPiBkaW1lbnNpb25zLnJpZ2h0IHx8XG4gICAgICAgICAgICB5ID4gZGltZW5zaW9ucy5ib3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsb3cgPSAwO1xuICAgICAgICB2YXIgaGlnaCA9IHRoaXMuaGl0X2FyZWFzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxuICAgICAgICAgICAgdmFyIG1pZCA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICAgICAgdmFyIGFyZWEgPSB0aGlzLmhpdF9hcmVhc1ttaWRdO1xuICAgICAgICAgICAgaWYgKHkgPCBhcmVhLnRvcCkge1xuICAgICAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5ID4gYXJlYS5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLm11c3RPcGVuRm9sZGVyVGltZXIgPSBmdW5jdGlvbiAoYXJlYSkge1xuICAgICAgICB2YXIgbm9kZSA9IGFyZWEubm9kZTtcbiAgICAgICAgcmV0dXJuIChub2RlLmlzRm9sZGVyKCkgJiZcbiAgICAgICAgICAgICFub2RlLmlzX29wZW4gJiZcbiAgICAgICAgICAgIGFyZWEucG9zaXRpb24gPT09IG5vZGVfMS5Qb3NpdGlvbi5JbnNpZGUpO1xuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS51cGRhdGVEcm9wSGludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvdmVyZWRfYXJlYSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyBkcm9wIGhpbnRcbiAgICAgICAgdGhpcy5yZW1vdmVEcm9wSGludCgpO1xuICAgICAgICAvLyBhZGQgbmV3IGRyb3AgaGludFxuICAgICAgICB2YXIgbm9kZV9lbGVtZW50ID0gdGhpcy50cmVlX3dpZGdldC5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKHRoaXMuaG92ZXJlZF9hcmVhLm5vZGUpO1xuICAgICAgICB0aGlzLnByZXZpb3VzX2dob3N0ID0gbm9kZV9lbGVtZW50LmFkZERyb3BIaW50KHRoaXMuaG92ZXJlZF9hcmVhLnBvc2l0aW9uKTtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuc3RhcnRPcGVuRm9sZGVyVGltZXIgPSBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvcGVuRm9sZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX29wZW5Ob2RlKGZvbGRlciwgX3RoaXMudHJlZV93aWRnZXQub3B0aW9ucy5zbGlkZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVEcm9wSGludCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RvcE9wZW5Gb2xkZXJUaW1lcigpO1xuICAgICAgICB0aGlzLm9wZW5fZm9sZGVyX3RpbWVyID0gc2V0VGltZW91dChvcGVuRm9sZGVyLCB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub3BlbkZvbGRlckRlbGF5KTtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuc3RvcE9wZW5Gb2xkZXJUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3Blbl9mb2xkZXJfdGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5fZm9sZGVyX3RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMub3Blbl9mb2xkZXJfdGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLm1vdmVJdGVtID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF9pdGVtICYmXG4gICAgICAgICAgICB0aGlzLmhvdmVyZWRfYXJlYSAmJlxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkX2FyZWEucG9zaXRpb24gIT09IG5vZGVfMS5Qb3NpdGlvbi5Ob25lICYmXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVUb0FyZWEodGhpcy5ob3ZlcmVkX2FyZWEpKSB7XG4gICAgICAgICAgICB2YXIgbW92ZWRfbm9kZV8xID0gdGhpcy5jdXJyZW50X2l0ZW0ubm9kZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRfbm9kZV8xID0gdGhpcy5ob3ZlcmVkX2FyZWEubm9kZTtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbl8xID0gdGhpcy5ob3ZlcmVkX2FyZWEucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNfcGFyZW50ID0gbW92ZWRfbm9kZV8xLnBhcmVudDtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbl8xID09PSBub2RlXzEuUG9zaXRpb24uSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkX2FyZWEubm9kZS5pc19vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb01vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQudHJlZS5tb3ZlTm9kZShtb3ZlZF9ub2RlXzEsIHRhcmdldF9ub2RlXzEsIHBvc2l0aW9uXzEpO1xuICAgICAgICAgICAgICAgIF90aGlzLnRyZWVfd2lkZ2V0LmVsZW1lbnQuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmVlX3dpZGdldC5fcmVmcmVzaEVsZW1lbnRzKG51bGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBldmVudF8xID0gdGhpcy50cmVlX3dpZGdldC5fdHJpZ2dlckV2ZW50KFwidHJlZS5tb3ZlXCIsIHtcbiAgICAgICAgICAgICAgICBtb3ZlX2luZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRfbm9kZTogbW92ZWRfbm9kZV8xLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRfbm9kZTogdGFyZ2V0X25vZGVfMSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5vZGVfMS5nZXRQb3NpdGlvbk5hbWUocG9zaXRpb25fMSksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3BhcmVudDogcHJldmlvdXNfcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBkb19tb3ZlOiBkb01vdmUsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsX2V2ZW50OiBwb3NpdGlvbl9pbmZvLm9yaWdpbmFsX2V2ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWV2ZW50XzEuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICAgICAgICBkb01vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5nZXRUcmVlRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBkaW1lbnNpb25zIG9mIHRoZSB0cmVlLiBBZGQgYSBtYXJnaW4gdG8gdGhlIGJvdHRvbSB0byBhbGxvd1xuICAgICAgICAvLyBmb3Igc29tZSB0byBkcmFnLWFuZC1kcm9wIHRoZSBsYXN0IGVsZW1lbnQuXG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnRyZWVfd2lkZ2V0LmVsZW1lbnQub2Zmc2V0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCxcbiAgICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCxcbiAgICAgICAgICAgIHJpZ2h0OiBvZmZzZXQubGVmdCArIHRoaXMudHJlZV93aWRnZXQuZWxlbWVudC53aWR0aCgpLFxuICAgICAgICAgICAgYm90dG9tOiBvZmZzZXQudG9wICsgdGhpcy50cmVlX3dpZGdldC5lbGVtZW50LmhlaWdodCgpICsgMTZcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBEcmFnQW5kRHJvcEhhbmRsZXI7XG59KCkpO1xuZXhwb3J0cy5EcmFnQW5kRHJvcEhhbmRsZXIgPSBEcmFnQW5kRHJvcEhhbmRsZXI7XG52YXIgVmlzaWJsZU5vZGVJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWaXNpYmxlTm9kZUl0ZXJhdG9yKHRyZWUpIHtcbiAgICAgICAgdGhpcy50cmVlID0gdHJlZTtcbiAgICB9XG4gICAgVmlzaWJsZU5vZGVJdGVyYXRvci5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlzX2ZpcnN0X25vZGUgPSB0cnVlO1xuICAgICAgICB2YXIgX2l0ZXJhdGVOb2RlID0gZnVuY3Rpb24gKG5vZGUsIG5leHRfbm9kZSkge1xuICAgICAgICAgICAgdmFyIG11c3RfaXRlcmF0ZV9pbnNpZGUgPSAobm9kZS5pc19vcGVuIHx8ICFub2RlLmVsZW1lbnQpICYmIG5vZGUuaGFzQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBpZiAobm9kZS5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQgPSAkKG5vZGUuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKCEkZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzX2ZpcnN0X25vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlRmlyc3ROb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpc19maXJzdF9ub2RlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZU5vZGUobm9kZSwgbmV4dF9ub2RlLCAkZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuaXNfb3Blbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmhhbmRsZU9wZW5Gb2xkZXIobm9kZSwgJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXN0X2l0ZXJhdGVfaW5zaWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUNsb3NlZEZvbGRlcihub2RlLCBuZXh0X25vZGUsICRlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXVzdF9pdGVyYXRlX2luc2lkZSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbl9sZW5ndGhfMSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoXywgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY2hpbGRyZW5fbGVuZ3RoXzEgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0ZU5vZGUobm9kZS5jaGlsZHJlbltpXSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0ZU5vZGUobm9kZS5jaGlsZHJlbltpXSwgbm9kZS5jaGlsZHJlbltpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNfb3BlbiAmJiAkZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVBZnRlck9wZW5Gb2xkZXIobm9kZSwgbmV4dF9ub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF9pdGVyYXRlTm9kZSh0aGlzLnRyZWUsIG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIFZpc2libGVOb2RlSXRlcmF0b3I7XG59KCkpO1xudmFyIEhpdEFyZWFzR2VuZXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIaXRBcmVhc0dlbmVyYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIaXRBcmVhc0dlbmVyYXRvcih0cmVlLCBjdXJyZW50X25vZGUsIHRyZWVfYm90dG9tKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRyZWUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmN1cnJlbnRfbm9kZSA9IGN1cnJlbnRfbm9kZTtcbiAgICAgICAgX3RoaXMudHJlZV9ib3R0b20gPSB0cmVlX2JvdHRvbTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW107XG4gICAgICAgIHRoaXMubGFzdF90b3AgPSAwO1xuICAgICAgICB0aGlzLml0ZXJhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVIaXRBcmVhcyh0aGlzLnBvc2l0aW9ucyk7XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVIaXRBcmVhcyA9IGZ1bmN0aW9uIChwb3NpdGlvbnMpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzX3RvcCA9IC0xO1xuICAgICAgICB2YXIgZ3JvdXAgPSBbXTtcbiAgICAgICAgdmFyIGhpdF9hcmVhcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHBvc2l0aW9uc18xID0gcG9zaXRpb25zOyBfaSA8IHBvc2l0aW9uc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnRvcCAhPT0gcHJldmlvdXNfdG9wICYmIGdyb3VwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChncm91cC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhpdEFyZWFzRm9yR3JvdXAoaGl0X2FyZWFzLCBncm91cCwgcHJldmlvdXNfdG9wLCBwb3NpdGlvbi50b3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2aW91c190b3AgPSBwb3NpdGlvbi50b3A7XG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwLnB1c2gocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVIaXRBcmVhc0Zvckdyb3VwKGhpdF9hcmVhcywgZ3JvdXAsIHByZXZpb3VzX3RvcCwgdGhpcy50cmVlX2JvdHRvbSk7XG4gICAgICAgIHJldHVybiBoaXRfYXJlYXM7XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuaGFuZGxlT3BlbkZvbGRlciA9IGZ1bmN0aW9uIChub2RlLCAkZWxlbWVudCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5jdXJyZW50X25vZGUpIHtcbiAgICAgICAgICAgIC8vIENhbm5vdCBtb3ZlIGluc2lkZSBjdXJyZW50IGl0ZW1cbiAgICAgICAgICAgIC8vIFN0b3AgaXRlcmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2Fubm90IG1vdmUgYmVmb3JlIGN1cnJlbnQgaXRlbVxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlblswXSAhPT0gdGhpcy5jdXJyZW50X25vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9zaXRpb24obm9kZSwgbm9kZV8xLlBvc2l0aW9uLkluc2lkZSwgdGhpcy5nZXRUb3AoJGVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb250aW51ZSBpdGVyYXRpbmdcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuaGFuZGxlQ2xvc2VkRm9sZGVyID0gZnVuY3Rpb24gKG5vZGUsIG5leHRfbm9kZSwgJGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHRvcCA9IHRoaXMuZ2V0VG9wKCRlbGVtZW50KTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuY3VycmVudF9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDYW5ub3QgbW92ZSBhZnRlciBjdXJyZW50IGl0ZW1cbiAgICAgICAgICAgIHRoaXMuYWRkUG9zaXRpb24obm9kZSwgbm9kZV8xLlBvc2l0aW9uLk5vbmUsIHRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5JbnNpZGUsIHRvcCk7XG4gICAgICAgICAgICAvLyBDYW5ub3QgbW92ZSBiZWZvcmUgY3VycmVudCBpdGVtXG4gICAgICAgICAgICBpZiAobmV4dF9ub2RlICE9PSB0aGlzLmN1cnJlbnRfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9zaXRpb24obm9kZSwgbm9kZV8xLlBvc2l0aW9uLkFmdGVyLCB0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuaGFuZGxlRmlyc3ROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IHRoaXMuY3VycmVudF9ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5CZWZvcmUsIHRoaXMuZ2V0VG9wKCQobm9kZS5lbGVtZW50KSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuaGFuZGxlQWZ0ZXJPcGVuRm9sZGVyID0gZnVuY3Rpb24gKG5vZGUsIG5leHRfbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5jdXJyZW50X25vZGUgfHwgbmV4dF9ub2RlID09PSB0aGlzLmN1cnJlbnRfbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2Fubm90IG1vdmUgYmVmb3JlIG9yIGFmdGVyIGN1cnJlbnQgaXRlbVxuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uTm9uZSwgdGhpcy5sYXN0X3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5BZnRlciwgdGhpcy5sYXN0X3RvcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhpdEFyZWFzR2VuZXJhdG9yLnByb3RvdHlwZS5oYW5kbGVOb2RlID0gZnVuY3Rpb24gKG5vZGUsIG5leHRfbm9kZSwgJGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHRvcCA9IHRoaXMuZ2V0VG9wKCRlbGVtZW50KTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuY3VycmVudF9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDYW5ub3QgbW92ZSBpbnNpZGUgY3VycmVudCBpdGVtXG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5Ob25lLCB0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uSW5zaWRlLCB0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0X25vZGUgPT09IHRoaXMuY3VycmVudF9ub2RlIHx8IG5vZGUgPT09IHRoaXMuY3VycmVudF9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDYW5ub3QgbW92ZSBiZWZvcmUgb3IgYWZ0ZXIgY3VycmVudCBpdGVtXG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5Ob25lLCB0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uQWZ0ZXIsIHRvcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhpdEFyZWFzR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcbiAgICB9O1xuICAgIEhpdEFyZWFzR2VuZXJhdG9yLnByb3RvdHlwZS5hZGRQb3NpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwb3NpdGlvbiwgdG9wKSB7XG4gICAgICAgIHZhciBhcmVhID0ge1xuICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucG9zaXRpb25zLnB1c2goYXJlYSk7XG4gICAgICAgIHRoaXMubGFzdF90b3AgPSB0b3A7XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVIaXRBcmVhc0Zvckdyb3VwID0gZnVuY3Rpb24gKGhpdF9hcmVhcywgcG9zaXRpb25zX2luX2dyb3VwLCB0b3AsIGJvdHRvbSkge1xuICAgICAgICAvLyBsaW1pdCBwb3NpdGlvbnMgaW4gZ3JvdXBcbiAgICAgICAgdmFyIHBvc2l0aW9uX2NvdW50ID0gTWF0aC5taW4ocG9zaXRpb25zX2luX2dyb3VwLmxlbmd0aCwgNCk7XG4gICAgICAgIHZhciBhcmVhX2hlaWdodCA9IE1hdGgucm91bmQoKGJvdHRvbSAtIHRvcCkgLyBwb3NpdGlvbl9jb3VudCk7XG4gICAgICAgIHZhciBhcmVhX3RvcCA9IHRvcDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHBvc2l0aW9uX2NvdW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNfaW5fZ3JvdXBbaV07XG4gICAgICAgICAgICBoaXRfYXJlYXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdG9wOiBhcmVhX3RvcCxcbiAgICAgICAgICAgICAgICBib3R0b206IGFyZWFfdG9wICsgYXJlYV9oZWlnaHQsXG4gICAgICAgICAgICAgICAgbm9kZTogcG9zaXRpb24ubm9kZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24ucG9zaXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXJlYV90b3AgKz0gYXJlYV9oZWlnaHQ7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIaXRBcmVhc0dlbmVyYXRvcjtcbn0oVmlzaWJsZU5vZGVJdGVyYXRvcikpO1xuZXhwb3J0cy5IaXRBcmVhc0dlbmVyYXRvciA9IEhpdEFyZWFzR2VuZXJhdG9yO1xudmFyIERyYWdFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERyYWdFbGVtZW50KG5vZGVfbmFtZSwgb2Zmc2V0X3gsIG9mZnNldF95LCAkdHJlZSkge1xuICAgICAgICB0aGlzLm9mZnNldF94ID0gb2Zmc2V0X3g7XG4gICAgICAgIHRoaXMub2Zmc2V0X3kgPSBvZmZzZXRfeTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoXCI8c3BhbiBjbGFzcz1cXFwianF0cmVlLXRpdGxlIGpxdHJlZS1kcmFnZ2luZ1xcXCI+XCIgKyBub2RlX25hbWUgKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgJHRyZWUuYXBwZW5kKHRoaXMuJGVsZW1lbnQpO1xuICAgIH1cbiAgICBEcmFnRWxlbWVudC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChwYWdlX3gsIHBhZ2VfeSkge1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZnNldCh7XG4gICAgICAgICAgICBsZWZ0OiBwYWdlX3ggLSB0aGlzLm9mZnNldF94LFxuICAgICAgICAgICAgdG9wOiBwYWdlX3kgLSB0aGlzLm9mZnNldF95XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRHJhZ0VsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBEcmFnRWxlbWVudDtcbn0oKSk7XG5leHBvcnRzLkRyYWdFbGVtZW50ID0gRHJhZ0VsZW1lbnQ7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgRWxlbWVudHNSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbGVtZW50c1JlbmRlcmVyKHRyZWVfd2lkZ2V0KSB7XG4gICAgICAgIHRoaXMudHJlZV93aWRnZXQgPSB0cmVlX3dpZGdldDtcbiAgICAgICAgdGhpcy5vcGVuZWRfaWNvbl9lbGVtZW50ID0gdGhpcy5jcmVhdGVCdXR0b25FbGVtZW50KHRyZWVfd2lkZ2V0Lm9wdGlvbnMub3BlbmVkSWNvbik7XG4gICAgICAgIHRoaXMuY2xvc2VkX2ljb25fZWxlbWVudCA9IHRoaXMuY3JlYXRlQnV0dG9uRWxlbWVudCh0cmVlX3dpZGdldC5vcHRpb25zLmNsb3NlZEljb24pO1xuICAgIH1cbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZnJvbV9ub2RlKSB7XG4gICAgICAgIGlmIChmcm9tX25vZGUgJiYgZnJvbV9ub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGcm9tTm9kZShmcm9tX25vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGcm9tUm9vdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJGcm9tUm9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gdGhpcy50cmVlX3dpZGdldC5lbGVtZW50O1xuICAgICAgICAkZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnRzKCRlbGVtZW50WzBdLCB0aGlzLnRyZWVfd2lkZ2V0LnRyZWUuY2hpbGRyZW4sIHRydWUsIDEpO1xuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyRnJvbU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAvLyByZW1lbWJlciBjdXJyZW50IGxpXG4gICAgICAgIHZhciAkcHJldmlvdXNfbGkgPSAkKG5vZGUuZWxlbWVudCk7XG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgICAgIHZhciBsaSA9IHRoaXMuY3JlYXRlTGkobm9kZSwgbm9kZS5nZXRMZXZlbCgpKTtcbiAgICAgICAgdGhpcy5hdHRhY2hOb2RlRGF0YShub2RlLCBsaSk7XG4gICAgICAgIC8vIGFkZCBlbGVtZW50IHRvIGRvbVxuICAgICAgICAkcHJldmlvdXNfbGkuYWZ0ZXIobGkpO1xuICAgICAgICAvLyByZW1vdmUgcHJldmlvdXMgbGlcbiAgICAgICAgJHByZXZpb3VzX2xpLnJlbW92ZSgpO1xuICAgICAgICAvLyBjcmVhdGUgY2hpbGRyZW5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRG9tRWxlbWVudHMobGksIG5vZGUuY2hpbGRyZW4sIGZhbHNlLCBub2RlLmdldExldmVsKCkgKyAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlRG9tRWxlbWVudHMgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2hpbGRyZW4sIGlzX3Jvb3Rfbm9kZSwgbGV2ZWwpIHtcbiAgICAgICAgdmFyIHVsID0gdGhpcy5jcmVhdGVVbChpc19yb290X25vZGUpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZHJlbl8xID0gY2hpbGRyZW47IF9pIDwgY2hpbGRyZW5fMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzFbX2ldO1xuICAgICAgICAgICAgdmFyIGxpID0gdGhpcy5jcmVhdGVMaShjaGlsZCwgbGV2ZWwpO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hOb2RlRGF0YShjaGlsZCwgbGkpO1xuICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnRzKGxpLCBjaGlsZC5jaGlsZHJlbiwgZmFsc2UsIGxldmVsICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLmF0dGFjaE5vZGVEYXRhID0gZnVuY3Rpb24gKG5vZGUsIGxpKSB7XG4gICAgICAgIG5vZGUuZWxlbWVudCA9IGxpO1xuICAgICAgICAkKGxpKS5kYXRhKFwibm9kZVwiLCBub2RlKTtcbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLmNyZWF0ZVVsID0gZnVuY3Rpb24gKGlzX3Jvb3Rfbm9kZSkge1xuICAgICAgICB2YXIgY2xhc3Nfc3RyaW5nO1xuICAgICAgICB2YXIgcm9sZTtcbiAgICAgICAgaWYgKCFpc19yb290X25vZGUpIHtcbiAgICAgICAgICAgIGNsYXNzX3N0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICByb2xlID0gXCJncm91cFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3Nfc3RyaW5nID0gXCJqcXRyZWUtdHJlZVwiO1xuICAgICAgICAgICAgcm9sZSA9IFwidHJlZVwiO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5ydGwpIHtcbiAgICAgICAgICAgICAgICBjbGFzc19zdHJpbmcgKz0gXCIganF0cmVlLXJ0bFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgdWwuY2xhc3NOYW1lID0gXCJqcXRyZWVfY29tbW9uIFwiICsgY2xhc3Nfc3RyaW5nO1xuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIHJvbGUpO1xuICAgICAgICByZXR1cm4gdWw7XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVMaSA9IGZ1bmN0aW9uIChub2RlLCBsZXZlbCkge1xuICAgICAgICB2YXIgaXNfc2VsZWN0ZWQgPSBCb29sZWFuKHRoaXMudHJlZV93aWRnZXQuc2VsZWN0X25vZGVfaGFuZGxlciAmJlxuICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5zZWxlY3Rfbm9kZV9oYW5kbGVyLmlzTm9kZVNlbGVjdGVkKG5vZGUpKTtcbiAgICAgICAgdmFyIGxpID0gbm9kZS5pc0ZvbGRlcigpXG4gICAgICAgICAgICA/IHRoaXMuY3JlYXRlRm9sZGVyTGkobm9kZSwgbGV2ZWwsIGlzX3NlbGVjdGVkKVxuICAgICAgICAgICAgOiB0aGlzLmNyZWF0ZU5vZGVMaShub2RlLCBsZXZlbCwgaXNfc2VsZWN0ZWQpO1xuICAgICAgICBpZiAodGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uQ3JlYXRlTGkpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbkNyZWF0ZUxpKG5vZGUsICQobGkpLCBpc19zZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpO1xuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlRm9sZGVyTGkgPSBmdW5jdGlvbiAobm9kZSwgbGV2ZWwsIGlzX3NlbGVjdGVkKSB7XG4gICAgICAgIHZhciBidXR0b25fY2xhc3NlcyA9IHRoaXMuZ2V0QnV0dG9uQ2xhc3Nlcyhub2RlKTtcbiAgICAgICAgdmFyIGZvbGRlcl9jbGFzc2VzID0gdGhpcy5nZXRGb2xkZXJDbGFzc2VzKG5vZGUsIGlzX3NlbGVjdGVkKTtcbiAgICAgICAgdmFyIGljb25fZWxlbWVudCA9IG5vZGUuaXNfb3BlblxuICAgICAgICAgICAgPyB0aGlzLm9wZW5lZF9pY29uX2VsZW1lbnRcbiAgICAgICAgICAgIDogdGhpcy5jbG9zZWRfaWNvbl9lbGVtZW50O1xuICAgICAgICAvLyBsaVxuICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmNsYXNzTmFtZSA9IFwianF0cmVlX2NvbW1vbiBcIiArIGZvbGRlcl9jbGFzc2VzO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICAvLyBkaXZcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcImpxdHJlZS1lbGVtZW50IGpxdHJlZV9jb21tb25cIjtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIC8vIGJ1dHRvbiBsaW5rXG4gICAgICAgIHZhciBidXR0b25fbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBidXR0b25fbGluay5jbGFzc05hbWUgPSBidXR0b25fY2xhc3NlcztcbiAgICAgICAgYnV0dG9uX2xpbmsuYXBwZW5kQ2hpbGQoaWNvbl9lbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGJ1dHRvbl9saW5rLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgIGJ1dHRvbl9saW5rLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5idXR0b25MZWZ0KSB7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uX2xpbmspO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRpdGxlIHNwYW5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGl0bGVTcGFuKG5vZGUubmFtZSwgbGV2ZWwsIGlzX3NlbGVjdGVkLCBub2RlLmlzX29wZW4sIHRydWUpKTtcbiAgICAgICAgaWYgKCF0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuYnV0dG9uTGVmdCkge1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbl9saW5rKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGk7XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVOb2RlTGkgPSBmdW5jdGlvbiAobm9kZSwgbGV2ZWwsIGlzX3NlbGVjdGVkKSB7XG4gICAgICAgIHZhciBsaV9jbGFzc2VzID0gW1wianF0cmVlX2NvbW1vblwiXTtcbiAgICAgICAgaWYgKGlzX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICBsaV9jbGFzc2VzLnB1c2goXCJqcXRyZWUtc2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsYXNzX3N0cmluZyA9IGxpX2NsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICAgIC8vIGxpXG4gICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gY2xhc3Nfc3RyaW5nO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICAvLyBkaXZcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcImpxdHJlZS1lbGVtZW50IGpxdHJlZV9jb21tb25cIjtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIC8vIHRpdGxlIHNwYW5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGl0bGVTcGFuKG5vZGUubmFtZSwgbGV2ZWwsIGlzX3NlbGVjdGVkLCBub2RlLmlzX29wZW4sIGZhbHNlKSk7XG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLmNyZWF0ZVRpdGxlU3BhbiA9IGZ1bmN0aW9uIChub2RlX25hbWUsIGxldmVsLCBpc19zZWxlY3RlZCwgaXNfb3BlbiwgaXNfZm9sZGVyKSB7XG4gICAgICAgIHZhciB0aXRsZV9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHZhciBjbGFzc2VzID0gXCJqcXRyZWUtdGl0bGUganF0cmVlX2NvbW1vblwiO1xuICAgICAgICBpZiAoaXNfZm9sZGVyKSB7XG4gICAgICAgICAgICBjbGFzc2VzICs9IFwiIGpxdHJlZS10aXRsZS1mb2xkZXJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZV9zcGFuLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gICAgICAgIHRpdGxlX3NwYW4uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRyZWVpdGVtXCIpO1xuICAgICAgICB0aXRsZV9zcGFuLnNldEF0dHJpYnV0ZShcImFyaWEtbGV2ZWxcIiwgXCJcIiArIGxldmVsKTtcbiAgICAgICAgdGl0bGVfc3Bhbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHV0aWxfMS5nZXRCb29sU3RyaW5nKGlzX3NlbGVjdGVkKSk7XG4gICAgICAgIHRpdGxlX3NwYW4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB1dGlsXzEuZ2V0Qm9vbFN0cmluZyhpc19vcGVuKSk7XG4gICAgICAgIGlmIChpc19zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGl0bGVfc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMudGFiSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlX3NwYW4uaW5uZXJIVE1MID0gdGhpcy5lc2NhcGVJZk5lY2Vzc2FyeShub2RlX25hbWUpO1xuICAgICAgICByZXR1cm4gdGl0bGVfc3BhbjtcbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLmdldEJ1dHRvbkNsYXNzZXMgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFtcImpxdHJlZS10b2dnbGVyXCIsIFwianF0cmVlX2NvbW1vblwiXTtcbiAgICAgICAgaWYgKCFub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChcImpxdHJlZS1jbG9zZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5idXR0b25MZWZ0KSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goXCJqcXRyZWUtdG9nZ2xlci1sZWZ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKFwianF0cmVlLXRvZ2dsZXItcmlnaHRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5nZXRGb2xkZXJDbGFzc2VzID0gZnVuY3Rpb24gKG5vZGUsIGlzX3NlbGVjdGVkKSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gW1wianF0cmVlLWZvbGRlclwiXTtcbiAgICAgICAgaWYgKCFub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChcImpxdHJlZS1jbG9zZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goXCJqcXRyZWUtc2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuaXNfbG9hZGluZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKFwianF0cmVlLWxvYWRpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5lc2NhcGVJZk5lY2Vzc2FyeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy50cmVlX3dpZGdldC5vcHRpb25zLmF1dG9Fc2NhcGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlsXzEuaHRtbF9lc2NhcGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVCdXR0b25FbGVtZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdmFsdWUgdG8gaHRtbFxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGl2LmlubmVySFRNTCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJCh2YWx1ZSlbMF07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFbGVtZW50c1JlbmRlcmVyO1xufSgpKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRWxlbWVudHNSZW5kZXJlcjtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgS2V5SGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZXlIYW5kbGVyKHRyZWVfd2lkZ2V0KSB7XG4gICAgICAgIHRoaXMudHJlZV93aWRnZXQgPSB0cmVlX3dpZGdldDtcbiAgICAgICAgaWYgKHRyZWVfd2lkZ2V0Lm9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbihcImtleWRvd24uanF0cmVlXCIsICQucHJveHkodGhpcy5oYW5kbGVLZXlEb3duLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgS2V5SGFuZGxlci5wcm90b3R5cGUuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCJrZXlkb3duLmpxdHJlZVwiKTtcbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3ROb2RlKG5vZGUuZ2V0TmV4dE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVfd2lkZ2V0LmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Tm9kZShub2RlLmdldFByZXZpb3VzTm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgS2V5SGFuZGxlci5wcm90b3R5cGUubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5vZGUuaXNGb2xkZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBmb2xkZXIgbm9kZVxuICAgICAgICAgICAgaWYgKG5vZGUuaXNfb3Blbikge1xuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IG1vdmVzIHRvIHRoZSBmaXJzdCBjaGlsZCBvZiBhbiBvcGVuIG5vZGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3ROb2RlKG5vZGUuZ2V0TmV4dE5vZGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSaWdodCBleHBhbmRzIGEgY2xvc2VkIG5vZGVcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0Lm9wZW5Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgS2V5SGFuZGxlci5wcm90b3R5cGUubW92ZUxlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy50cmVlX3dpZGdldC5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLmlzRm9sZGVyKCkgJiYgbm9kZS5pc19vcGVuKSB7XG4gICAgICAgICAgICAvLyBMZWZ0IG9uIGFuIG9wZW4gbm9kZSBjbG9zZXMgdGhlIG5vZGVcbiAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQuY2xvc2VOb2RlKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTGVmdCBvbiBhIGNsb3NlZCBvciBlbmQgbm9kZSBtb3ZlcyBmb2N1cyB0byB0aGUgbm9kZSdzIHBhcmVudFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Tm9kZShub2RlLmdldFBhcmVudCgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgS2V5SGFuZGxlci5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5IYW5kbGVLZXlib2FyZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBlLndoaWNoO1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEtleUhhbmRsZXIuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICBjYXNlIEtleUhhbmRsZXIuVVA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5SGFuZGxlci5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlIYW5kbGVyLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLnNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5zZWxlY3ROb2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQuc2Nyb2xsX2hhbmRsZXIgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy50cmVlX3dpZGdldC5zY3JvbGxfaGFuZGxlci5pc1Njcm9sbGVkSW50b1ZpZXcoJChub2RlLmVsZW1lbnQpLmZpbmQoXCIuanF0cmVlLWVsZW1lbnRcIikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5zY3JvbGxUb05vZGUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLmNhbkhhbmRsZUtleWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5rZXlib2FyZFN1cHBvcnQgJiZcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1c09uVHJlZSgpICYmXG4gICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0LmdldFNlbGVjdGVkTm9kZSgpICE9IG51bGwpO1xuICAgIH07XG4gICAgS2V5SGFuZGxlci5wcm90b3R5cGUuaXNGb2N1c09uVHJlZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZV9lbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIChhY3RpdmVfZWxlbWVudCAmJlxuICAgICAgICAgICAgYWN0aXZlX2VsZW1lbnQudGFnTmFtZSA9PT0gXCJTUEFOXCIgJiZcbiAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQuX2NvbnRhaW5zRWxlbWVudChhY3RpdmVfZWxlbWVudCkpO1xuICAgIH07XG4gICAgS2V5SGFuZGxlci5MRUZUID0gMzc7XG4gICAgS2V5SGFuZGxlci5VUCA9IDM4O1xuICAgIEtleUhhbmRsZXIuUklHSFQgPSAzOTtcbiAgICBLZXlIYW5kbGVyLkRPV04gPSA0MDtcbiAgICByZXR1cm4gS2V5SGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEtleUhhbmRsZXI7XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuVGhpcyB3aWRnZXQgZG9lcyB0aGUgc2FtZSBhIHRoZSBtb3VzZSB3aWRnZXQgaW4ganF1ZXJ5dWkuXG4qL1xudmFyIHNpbXBsZV93aWRnZXRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgTW91c2VXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vdXNlV2lkZ2V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1vdXNlV2lkZ2V0KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5zZXRNb3VzZURlbGF5ID0gZnVuY3Rpb24gKG1vdXNlX2RlbGF5KSB7XG4gICAgICAgIHRoaXMubW91c2VfZGVsYXkgPSBtb3VzZV9kZWxheTtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwub24oXCJtb3VzZWRvd24ubW91c2V3aWRnZXRcIiwgJC5wcm94eSh0aGlzLl9tb3VzZURvd24sIHRoaXMpKTtcbiAgICAgICAgdGhpcy4kZWwub24oXCJ0b3VjaHN0YXJ0Lm1vdXNld2lkZ2V0XCIsICQucHJveHkodGhpcy5fdG91Y2hTdGFydCwgdGhpcykpO1xuICAgICAgICB0aGlzLmlzX21vdXNlX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3VzZV9kZWxheSA9IDA7XG4gICAgICAgIHRoaXMuX21vdXNlX2RlbGF5X3RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXNfbW91c2VfZGVsYXlfbWV0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb3VzZV9kb3duX2luZm8gPSBudWxsO1xuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl9kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLm9mZihcIm1vdXNlZG93bi5tb3VzZXdpZGdldFwiKTtcbiAgICAgICAgdGhpcy4kZWwub2ZmKFwidG91Y2hzdGFydC5tb3VzZXdpZGdldFwiKTtcbiAgICAgICAgdmFyICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgICAgICAkZG9jdW1lbnQub2ZmKFwibW91c2Vtb3ZlLm1vdXNld2lkZ2V0XCIpO1xuICAgICAgICAkZG9jdW1lbnQub2ZmKFwibW91c2V1cC5tb3VzZXdpZGdldFwiKTtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5fbW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gSXMgbGVmdCBtb3VzZSBidXR0b24/XG4gICAgICAgIGlmIChlLndoaWNoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2hhbmRsZU1vdXNlRG93bih0aGlzLl9nZXRQb3NpdGlvbkluZm8oZSkpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5faGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgLy8gV2UgbWF5IGhhdmUgbWlzc2VkIG1vdXNldXAgKG91dCBvZiB3aW5kb3cpXG4gICAgICAgIGlmICh0aGlzLmlzX21vdXNlX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlVXAocG9zaXRpb25faW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VzZV9kb3duX2luZm8gPSBwb3NpdGlvbl9pbmZvO1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlQ2FwdHVyZShwb3NpdGlvbl9pbmZvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZVN0YXJ0TW91c2UoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX2hhbmRsZVN0YXJ0TW91c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgICAgICAgJGRvY3VtZW50Lm9uKFwibW91c2Vtb3ZlLm1vdXNld2lkZ2V0XCIsICQucHJveHkodGhpcy5fbW91c2VNb3ZlLCB0aGlzKSk7XG4gICAgICAgICRkb2N1bWVudC5vbihcInRvdWNobW92ZS5tb3VzZXdpZGdldFwiLCAkLnByb3h5KHRoaXMuX3RvdWNoTW92ZSwgdGhpcykpO1xuICAgICAgICAkZG9jdW1lbnQub24oXCJtb3VzZXVwLm1vdXNld2lkZ2V0XCIsICQucHJveHkodGhpcy5fbW91c2VVcCwgdGhpcykpO1xuICAgICAgICAkZG9jdW1lbnQub24oXCJ0b3VjaGVuZC5tb3VzZXdpZGdldFwiLCAkLnByb3h5KHRoaXMuX3RvdWNoRW5kLCB0aGlzKSk7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlX2RlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydE1vdXNlRGVsYXlUaW1lcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX3N0YXJ0TW91c2VEZWxheVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5fbW91c2VfZGVsYXlfdGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9tb3VzZV9kZWxheV90aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW91c2VfZGVsYXlfdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9pc19tb3VzZV9kZWxheV9tZXQgPSB0cnVlO1xuICAgICAgICB9LCB0aGlzLm1vdXNlX2RlbGF5KTtcbiAgICAgICAgdGhpcy5faXNfbW91c2VfZGVsYXlfbWV0ID0gZmFsc2U7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX21vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVNb3VzZU1vdmUoZSwgdGhpcy5fZ2V0UG9zaXRpb25JbmZvKGUpKTtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5faGFuZGxlTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUsIHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNfbW91c2Vfc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2VEcmFnKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3VzZV9kZWxheSAmJiAhdGhpcy5faXNfbW91c2VfZGVsYXlfbWV0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3VzZV9kb3duX2luZm8pIHtcbiAgICAgICAgICAgIHRoaXMuaXNfbW91c2Vfc3RhcnRlZCA9XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VTdGFydCh0aGlzLm1vdXNlX2Rvd25faW5mbykgIT09IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzX21vdXNlX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlRHJhZyhwb3NpdGlvbl9pbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlVXAocG9zaXRpb25faW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzX21vdXNlX3N0YXJ0ZWQ7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX2dldFBvc2l0aW9uSW5mbyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlX3g6IGUucGFnZVgsXG4gICAgICAgICAgICBwYWdlX3k6IGUucGFnZVksXG4gICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgICAgICAgb3JpZ2luYWxfZXZlbnQ6IGVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5fbW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVNb3VzZVVwKHRoaXMuX2dldFBvc2l0aW9uSW5mbyhlKSk7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX2hhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICB2YXIgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gICAgICAgICRkb2N1bWVudC5vZmYoXCJtb3VzZW1vdmUubW91c2V3aWRnZXRcIik7XG4gICAgICAgICRkb2N1bWVudC5vZmYoXCJ0b3VjaG1vdmUubW91c2V3aWRnZXRcIik7XG4gICAgICAgICRkb2N1bWVudC5vZmYoXCJtb3VzZXVwLm1vdXNld2lkZ2V0XCIpO1xuICAgICAgICAkZG9jdW1lbnQub2ZmKFwidG91Y2hlbmQubW91c2V3aWRnZXRcIik7XG4gICAgICAgIGlmICh0aGlzLmlzX21vdXNlX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNfbW91c2Vfc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbW91c2VTdG9wKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX3RvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdG91Y2hfZXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgIGlmICh0b3VjaF9ldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaF9ldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZU1vdXNlRG93bih0aGlzLl9nZXRQb3NpdGlvbkluZm8odG91Y2gpKTtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5fdG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRvdWNoX2V2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICBpZiAodG91Y2hfZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hfZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVNb3VzZU1vdmUoZSwgdGhpcy5fZ2V0UG9zaXRpb25JbmZvKHRvdWNoKSk7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX3RvdWNoRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRvdWNoX2V2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICBpZiAodG91Y2hfZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hfZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVNb3VzZVVwKHRoaXMuX2dldFBvc2l0aW9uSW5mbyh0b3VjaCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1vdXNlV2lkZ2V0O1xufShzaW1wbGVfd2lkZ2V0XzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1vdXNlV2lkZ2V0O1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIFNhdmVTdGF0ZUhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2F2ZVN0YXRlSGFuZGxlcih0cmVlX3dpZGdldCkge1xuICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0ID0gdHJlZV93aWRnZXQ7XG4gICAgfVxuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRTdGF0ZSgpKTtcbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vblNldFN0YXRlRnJvbVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vblNldFN0YXRlRnJvbVN0b3JhZ2Uoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3VwcG9ydHNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5nZXRLZXlOYW1lKCksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuZ2V0U3RhdGVGcm9tU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGpzb25fZGF0YSA9IHRoaXMuX2xvYWRGcm9tU3RvcmFnZSgpO1xuICAgICAgICBpZiAoanNvbl9kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VTdGF0ZShqc29uX2RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZ2V0T3Blbk5vZGVJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3Blbl9ub2RlcyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQudHJlZS5pdGVyYXRlKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNfb3BlbiAmJiBub2RlLmlkICYmIG5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuX25vZGVzLnB1c2gobm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb3Blbl9ub2RlcztcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFNlbGVjdGVkTm9kZUlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy50cmVlX3dpZGdldC5nZXRTZWxlY3RlZE5vZGVzKCkubWFwKGZ1bmN0aW9uIChuKSB7IHJldHVybiBuLmlkOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW5fbm9kZXM6IGdldE9wZW5Ob2RlSWRzKCksXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlOiBnZXRTZWxlY3RlZE5vZGVJZHMoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLypcbiAgICBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgIERvbid0IGhhbmRsZSBub2RlcyB0aGF0IGFyZSBsb2FkZWQgb24gZGVtYW5kXG5cbiAgICByZXN1bHQ6IG11c3QgbG9hZCBvbiBkZW1hbmRcbiAgICAqL1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLnNldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbXVzdF9sb2FkX29uX2RlbWFuZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN0YXRlLm9wZW5fbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBtdXN0X2xvYWRfb25fZGVtYW5kID0gdGhpcy5fb3BlbkluaXRpYWxOb2RlcyhzdGF0ZS5vcGVuX25vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5zZWxlY3RlZF9ub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RJbml0aWFsTm9kZXMoc3RhdGUuc2VsZWN0ZWRfbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXVzdF9sb2FkX29uX2RlbWFuZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuc2V0SW5pdGlhbFN0YXRlT25EZW1hbmQgPSBmdW5jdGlvbiAoc3RhdGUsIGNiX2ZpbmlzaGVkKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5pdGlhbFN0YXRlT25EZW1hbmQoc3RhdGUub3Blbl9ub2Rlcywgc3RhdGUuc2VsZWN0ZWRfbm9kZSwgY2JfZmluaXNoZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2JfZmluaXNoZWQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuZ2V0Tm9kZUlkVG9CZVNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnNlbGVjdGVkX25vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zZWxlY3RlZF9ub2RlWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLl9wYXJzZVN0YXRlID0gZnVuY3Rpb24gKGpzb25fZGF0YSkge1xuICAgICAgICB2YXIgc3RhdGUgPSAkLnBhcnNlSlNPTihqc29uX2RhdGEpO1xuICAgICAgICAvLyBDaGVjayBpZiBzZWxlY3RlZF9ub2RlIGlzIGFuIGludCAoaW5zdGVhZCBvZiBhbiBhcnJheSlcbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnNlbGVjdGVkX25vZGUgJiYgdXRpbF8xLmlzSW50KHN0YXRlLnNlbGVjdGVkX25vZGUpKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvIGFycmF5XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZF9ub2RlID0gW3N0YXRlLnNlbGVjdGVkX25vZGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLl9sb2FkRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25HZXRTdGF0ZUZyb21TdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uR2V0U3RhdGVGcm9tU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3VwcG9ydHNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZ2V0S2V5TmFtZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuX29wZW5Jbml0aWFsTm9kZXMgPSBmdW5jdGlvbiAobm9kZV9pZHMpIHtcbiAgICAgICAgdmFyIG11c3RfbG9hZF9vbl9kZW1hbmQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBub2RlX2lkc18xID0gbm9kZV9pZHM7IF9pIDwgbm9kZV9pZHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlX2lkID0gbm9kZV9pZHNfMVtfaV07XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0Tm9kZUJ5SWQobm9kZV9pZCk7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5sb2FkX29uX2RlbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlzX29wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbXVzdF9sb2FkX29uX2RlbWFuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdXN0X2xvYWRfb25fZGVtYW5kO1xuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuX3NlbGVjdEluaXRpYWxOb2RlcyA9IGZ1bmN0aW9uIChub2RlX2lkcykge1xuICAgICAgICB2YXIgc2VsZWN0X2NvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBub2RlX2lkc18yID0gbm9kZV9pZHM7IF9pIDwgbm9kZV9pZHNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlX2lkID0gbm9kZV9pZHNfMltfaV07XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0Tm9kZUJ5SWQobm9kZV9pZCk7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdF9jb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0LnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5zZWxlY3Rfbm9kZV9oYW5kbGVyLmFkZFRvU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0X2NvdW50ICE9PSAwO1xuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuX3Jlc2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0X25vZGVfaGFuZGxlciA9IHRoaXMudHJlZV93aWRnZXQuc2VsZWN0X25vZGVfaGFuZGxlcjtcbiAgICAgICAgaWYgKHNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZF9ub2RlcyA9IHNlbGVjdF9ub2RlX2hhbmRsZXIuZ2V0U2VsZWN0ZWROb2RlcygpO1xuICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdF9ub2RlX2hhbmRsZXIucmVtb3ZlRnJvbVNlbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXRlT25EZW1hbmQgPSBmdW5jdGlvbiAobm9kZV9pZHNfcGFyYW0sIHNlbGVjdGVkX25vZGVzLCBjYl9maW5pc2hlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbG9hZGluZ19jb3VudCA9IDA7XG4gICAgICAgIHZhciBub2RlX2lkcyA9IG5vZGVfaWRzX3BhcmFtO1xuICAgICAgICB2YXIgb3Blbk5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld19ub2Rlc19pZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbm9kZV9pZHNfMyA9IG5vZGVfaWRzOyBfaSA8IG5vZGVfaWRzXzMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVfaWQgPSBub2RlX2lkc18zW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IF90aGlzLnRyZWVfd2lkZ2V0LmdldE5vZGVCeUlkKG5vZGVfaWQpO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdfbm9kZXNfaWRzLnB1c2gobm9kZV9pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUuaXNfbG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubG9hZF9vbl9kZW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQW5kT3Blbk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmVlX3dpZGdldC5fb3Blbk5vZGUobm9kZSwgZmFsc2UsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZV9pZHMgPSBuZXdfbm9kZXNfaWRzO1xuICAgICAgICAgICAgaWYgKF90aGlzLl9zZWxlY3RJbml0aWFsTm9kZXMoc2VsZWN0ZWRfbm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX3JlZnJlc2hFbGVtZW50cyhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2FkaW5nX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2JfZmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGxvYWRBbmRPcGVuTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBsb2FkaW5nX2NvdW50ICs9IDE7XG4gICAgICAgICAgICBfdGhpcy50cmVlX3dpZGdldC5fb3Blbk5vZGUobm9kZSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nX2NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgb3Blbk5vZGVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgb3Blbk5vZGVzKCk7XG4gICAgfTtcbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5nZXRLZXlOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5zYXZlU3RhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuc2F2ZVN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJlZVwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5zdXBwb3J0c0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRlc3RTdXBwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSXMgbG9jYWwgc3RvcmFnZSBzdXBwb3J0ZWQ/XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIHBvc3NpYmxlIHRvIHN0b3JlIGFuIGl0ZW0uIFNhZmFyaSBkb2VzIG5vdCBhbGxvdyB0aGlzIGluIHByaXZhdGUgYnJvd3NpbmcgbW9kZS5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gXCJfc3RvcmFnZV90ZXN0XCI7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNMb2NhbFN0b3JhZ2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNMb2NhbFN0b3JhZ2UgPSB0ZXN0U3VwcG9ydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0xvY2FsU3RvcmFnZTtcbiAgICB9O1xuICAgIHJldHVybiBTYXZlU3RhdGVIYW5kbGVyO1xufSgpKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2F2ZVN0YXRlSGFuZGxlcjtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFNjcm9sbEhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Nyb2xsSGFuZGxlcih0cmVlX3dpZGdldCkge1xuICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0ID0gdHJlZV93aWRnZXQ7XG4gICAgICAgIHRoaXMucHJldmlvdXNfdG9wID0gLTE7XG4gICAgICAgIHRoaXMuaXNfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuY2hlY2tTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUluaXQoKTtcbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciBob3ZlcmVkX2FyZWEgPSB0aGlzLnRyZWVfd2lkZ2V0LmRuZF9oYW5kbGVyLmhvdmVyZWRfYXJlYTtcbiAgICAgICAgICAgIGlmIChob3ZlcmVkX2FyZWEgJiYgaG92ZXJlZF9hcmVhLnRvcCAhPT0gdGhpcy5wcmV2aW91c190b3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzX3RvcCA9IGhvdmVyZWRfYXJlYS50b3A7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHNjcm9sbF9wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU2Nyb2xsaW5nV2l0aFNjcm9sbFBhcmVudChob3ZlcmVkX2FyZWEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU2Nyb2xsaW5nV2l0aERvY3VtZW50KGhvdmVyZWRfYXJlYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTY3JvbGxIYW5kbGVyLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uICh0b3ApIHtcbiAgICAgICAgdGhpcy5fZW5zdXJlSW5pdCgpO1xuICAgICAgICBpZiAodGhpcy4kc2Nyb2xsX3BhcmVudCkge1xuICAgICAgICAgICAgdGhpcy4kc2Nyb2xsX3BhcmVudFswXS5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHJlZV90b3AgPSB0aGlzLnRyZWVfd2lkZ2V0LiRlbC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AodG9wICsgdHJlZV90b3ApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY3JvbGxIYW5kbGVyLnByb3RvdHlwZS5pc1Njcm9sbGVkSW50b1ZpZXcgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZW5zdXJlSW5pdCgpO1xuICAgICAgICB2YXIgZWxlbWVudF9ib3R0b207XG4gICAgICAgIHZhciB2aWV3X2JvdHRvbTtcbiAgICAgICAgdmFyIGVsZW1lbnRfdG9wO1xuICAgICAgICB2YXIgdmlld190b3A7XG4gICAgICAgIGlmICh0aGlzLiRzY3JvbGxfcGFyZW50KSB7XG4gICAgICAgICAgICB2aWV3X3RvcCA9IDA7XG4gICAgICAgICAgICB2aWV3X2JvdHRvbSA9IHRoaXMuJHNjcm9sbF9wYXJlbnQuaGVpZ2h0KCk7XG4gICAgICAgICAgICBlbGVtZW50X3RvcCA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIHRoaXMuc2Nyb2xsX3BhcmVudF90b3A7XG4gICAgICAgICAgICBlbGVtZW50X2JvdHRvbSA9IGVsZW1lbnRfdG9wICsgJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2aWV3X3RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHZpZXdfYm90dG9tID0gdmlld190b3AgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBlbGVtZW50X3RvcCA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGVsZW1lbnRfYm90dG9tID0gZWxlbWVudF90b3AgKyAkZWxlbWVudC5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudF9ib3R0b20gPD0gdmlld19ib3R0b20gJiYgZWxlbWVudF90b3AgPj0gdmlld190b3A7XG4gICAgfTtcbiAgICBTY3JvbGxIYW5kbGVyLnByb3RvdHlwZS5faW5pdFNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGdldFBhcmVudFdpdGhPdmVyZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjc3NfYXR0cmlidXRlcyA9IFtcIm92ZXJmbG93XCIsIFwib3ZlcmZsb3cteVwiXTtcbiAgICAgICAgICAgIHZhciBoYXNPdmVyRmxvdyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNzc19hdHRyaWJ1dGVzXzEgPSBjc3NfYXR0cmlidXRlczsgX2kgPCBjc3NfYXR0cmlidXRlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IGNzc19hdHRyaWJ1dGVzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmZsb3dfdmFsdWUgPSAkZWwuY3NzKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dfdmFsdWUgPT09IFwiYXV0b1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd192YWx1ZSA9PT0gXCJzY3JvbGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChoYXNPdmVyRmxvdyhfdGhpcy50cmVlX3dpZGdldC4kZWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRyZWVfd2lkZ2V0LiRlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBfdGhpcy50cmVlX3dpZGdldC4kZWwucGFyZW50cygpLmdldCgpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGhhc092ZXJGbG93KCRlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldERvY3VtZW50QXNTY3JvbGxQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zY3JvbGxfcGFyZW50X3RvcCA9IDA7XG4gICAgICAgICAgICBfdGhpcy4kc2Nyb2xsX3BhcmVudCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0LiRlbC5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICBzZXREb2N1bWVudEFzU2Nyb2xsUGFyZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyICRzY3JvbGxfcGFyZW50ID0gZ2V0UGFyZW50V2l0aE92ZXJmbG93KCk7XG4gICAgICAgIGlmICgkc2Nyb2xsX3BhcmVudCAmJlxuICAgICAgICAgICAgJHNjcm9sbF9wYXJlbnQubGVuZ3RoICYmXG4gICAgICAgICAgICAkc2Nyb2xsX3BhcmVudFswXS50YWdOYW1lICE9PSBcIkhUTUxcIikge1xuICAgICAgICAgICAgdGhpcy4kc2Nyb2xsX3BhcmVudCA9ICRzY3JvbGxfcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxfcGFyZW50X3RvcCA9IHRoaXMuJHNjcm9sbF9wYXJlbnQub2Zmc2V0KCkudG9wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0RG9jdW1lbnRBc1Njcm9sbFBhcmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuX2Vuc3VyZUluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNjcm9sbFBhcmVudCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY3JvbGxIYW5kbGVyLnByb3RvdHlwZS5faGFuZGxlU2Nyb2xsaW5nV2l0aFNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uIChhcmVhKSB7XG4gICAgICAgIGlmICghdGhpcy4kc2Nyb2xsX3BhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlX2JvdHRvbSA9IHRoaXMuc2Nyb2xsX3BhcmVudF90b3AgK1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbF9wYXJlbnRbMF0ub2Zmc2V0SGVpZ2h0IC1cbiAgICAgICAgICAgICAgICBhcmVhLmJvdHRvbTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZV9ib3R0b20gPCAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbF9wYXJlbnRbMF0uc2Nyb2xsVG9wICs9IDIwO1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQucmVmcmVzaEhpdEFyZWFzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c190b3AgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZWEudG9wIC0gdGhpcy5zY3JvbGxfcGFyZW50X3RvcCA8IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2Nyb2xsX3BhcmVudFswXS5zY3JvbGxUb3AgLT0gMjA7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5yZWZyZXNoSGl0QXJlYXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzX3RvcCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTY3JvbGxIYW5kbGVyLnByb3RvdHlwZS5faGFuZGxlU2Nyb2xsaW5nV2l0aERvY3VtZW50ID0gZnVuY3Rpb24gKGFyZWEpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlX3RvcCA9IGFyZWEudG9wIC0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChkaXN0YW5jZV90b3AgPCAyMCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC0gMjApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCQod2luZG93KS5oZWlnaHQoKSAtIChhcmVhLmJvdHRvbSAtICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKSA8XG4gICAgICAgICAgICAyMCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgMjApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2Nyb2xsSGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNjcm9sbEhhbmRsZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBTZWxlY3ROb2RlSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWxlY3ROb2RlSGFuZGxlcih0cmVlX3dpZGdldCkge1xuICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0ID0gdHJlZV93aWRnZXQ7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLmdldFNlbGVjdGVkTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkX25vZGVzID0gdGhpcy5nZXRTZWxlY3RlZE5vZGVzKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZF9ub2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLmdldFNlbGVjdGVkTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX25vZGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLnNlbGVjdGVkX25vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9kZXMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy50cmVlX3dpZGdldC5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkX25vZGVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWxlY3ROb2RlSGFuZGxlci5wcm90b3R5cGUuZ2V0U2VsZWN0ZWROb2Rlc1VuZGVyID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZSkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC5pc1BhcmVudE9mKHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZF9ub2RlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5zZWxlY3RlZF9ub2Rlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX25vZGVzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBwYXJlbnQuaXNQYXJlbnRPZihub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZF9ub2RlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLmlzTm9kZVNlbGVjdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub2Rlc1tub2RlLmlkXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlLmVsZW1lbnQgPT09IG5vZGUuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0ge307XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUgPSBudWxsO1xuICAgIH07XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLnJlbW92ZUZyb21TZWxlY3Rpb24gPSBmdW5jdGlvbiAobm9kZSwgaW5jbHVkZV9jaGlsZHJlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZV9jaGlsZHJlbiA9PT0gdm9pZCAwKSB7IGluY2x1ZGVfY2hpbGRyZW4gPSBmYWxzZTsgfVxuICAgICAgICBpZiAobm9kZS5pZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZSAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZWxlbWVudCA9PT0gdGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZS5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZF9ub2Rlc1tub2RlLmlkXTtcbiAgICAgICAgICAgIGlmIChpbmNsdWRlX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pdGVyYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLnNlbGVjdGVkX25vZGVzW25vZGUuaWRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLmFkZFRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2Rlc1tub2RlLmlkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdE5vZGVIYW5kbGVyO1xufSgpKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2VsZWN0Tm9kZUhhbmRsZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG5vZGVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgTm9kZUVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZUVsZW1lbnQobm9kZSwgdHJlZV93aWRnZXQpIHtcbiAgICAgICAgdGhpcy5pbml0KG5vZGUsIHRyZWVfd2lkZ2V0KTtcbiAgICB9XG4gICAgTm9kZUVsZW1lbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAobm9kZSwgdHJlZV93aWRnZXQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy50cmVlX3dpZGdldCA9IHRyZWVfd2lkZ2V0O1xuICAgICAgICBpZiAoIW5vZGUuZWxlbWVudCkge1xuICAgICAgICAgICAgbm9kZS5lbGVtZW50ID0gdGhpcy50cmVlX3dpZGdldC5lbGVtZW50LmdldCgwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJChub2RlLmVsZW1lbnQpO1xuICAgIH07XG4gICAgTm9kZUVsZW1lbnQucHJvdG90eXBlLmFkZERyb3BIaW50ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbm9kZV8xLlBvc2l0aW9uLkluc2lkZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3JkZXJEcm9wSGludCh0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR2hvc3REcm9wSGludCh0aGlzLm5vZGUsIHRoaXMuJGVsZW1lbnQsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZUVsZW1lbnQucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRsaSA9IHRoaXMuZ2V0TGkoKTtcbiAgICAgICAgJGxpLmFkZENsYXNzKFwianF0cmVlLXNlbGVjdGVkXCIpO1xuICAgICAgICAkbGkuYXR0cihcImFyaWEtc2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB2YXIgJHNwYW4gPSB0aGlzLmdldFNwYW4oKTtcbiAgICAgICAgJHNwYW4uYXR0cihcInRhYmluZGV4XCIsIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy50YWJJbmRleCk7XG4gICAgICAgICRzcGFuLmZvY3VzKCk7XG4gICAgfTtcbiAgICBOb2RlRWxlbWVudC5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkbGkgPSB0aGlzLmdldExpKCk7XG4gICAgICAgICRsaS5yZW1vdmVDbGFzcyhcImpxdHJlZS1zZWxlY3RlZFwiKTtcbiAgICAgICAgJGxpLmF0dHIoXCJhcmlhLXNlbGVjdGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIHZhciAkc3BhbiA9IHRoaXMuZ2V0U3BhbigpO1xuICAgICAgICAkc3Bhbi5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik7XG4gICAgICAgICRzcGFuLmJsdXIoKTtcbiAgICB9O1xuICAgIE5vZGVFbGVtZW50LnByb3RvdHlwZS5nZXRVbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oXCJ1bDpmaXJzdFwiKTtcbiAgICB9O1xuICAgIE5vZGVFbGVtZW50LnByb3RvdHlwZS5nZXRTcGFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudFxuICAgICAgICAgICAgLmNoaWxkcmVuKFwiLmpxdHJlZS1lbGVtZW50XCIpXG4gICAgICAgICAgICAuZmluZChcInNwYW4uanF0cmVlLXRpdGxlXCIpO1xuICAgIH07XG4gICAgTm9kZUVsZW1lbnQucHJvdG90eXBlLmdldExpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlRWxlbWVudDtcbn0oKSk7XG5leHBvcnRzLk5vZGVFbGVtZW50ID0gTm9kZUVsZW1lbnQ7XG52YXIgRm9sZGVyRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9sZGVyRWxlbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb2xkZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZvbGRlckVsZW1lbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAob25fZmluaXNoZWQsIHNsaWRlLCBhbmltYXRpb25TcGVlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2xpZGUgPT09IHZvaWQgMCkgeyBzbGlkZSA9IHRydWU7IH1cbiAgICAgICAgaWYgKGFuaW1hdGlvblNwZWVkID09PSB2b2lkIDApIHsgYW5pbWF0aW9uU3BlZWQgPSBcImZhc3RcIjsgfVxuICAgICAgICBpZiAoIXRoaXMubm9kZS5pc19vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXNfb3BlbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgJGJ1dHRvbiA9IHRoaXMuZ2V0QnV0dG9uKCk7XG4gICAgICAgICAgICAkYnV0dG9uLnJlbW92ZUNsYXNzKFwianF0cmVlLWNsb3NlZFwiKTtcbiAgICAgICAgICAgICRidXR0b24uaHRtbChcIlwiKTtcbiAgICAgICAgICAgIHZhciBidXR0b25fZWwgPSAkYnV0dG9uLmdldCgwKTtcbiAgICAgICAgICAgIGlmIChidXR0b25fZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IHRoaXMudHJlZV93aWRnZXQucmVuZGVyZXIub3BlbmVkX2ljb25fZWxlbWVudC5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbl9lbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRsaSA9IF90aGlzLmdldExpKCk7XG4gICAgICAgICAgICAgICAgJGxpLnJlbW92ZUNsYXNzKFwianF0cmVlLWNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgJHNwYW4gPSBfdGhpcy5nZXRTcGFuKCk7XG4gICAgICAgICAgICAgICAgJHNwYW4uYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChvbl9maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBvbl9maW5pc2hlZChfdGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX3RyaWdnZXJFdmVudChcInRyZWUub3BlblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IF90aGlzLm5vZGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc2xpZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVsKCkuc2xpZGVEb3duKGFuaW1hdGlvblNwZWVkLCBkb09wZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVbCgpLnNob3coKTtcbiAgICAgICAgICAgICAgICBkb09wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRm9sZGVyRWxlbWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoc2xpZGUsIGFuaW1hdGlvblNwZWVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzbGlkZSA9PT0gdm9pZCAwKSB7IHNsaWRlID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoYW5pbWF0aW9uU3BlZWQgPT09IHZvaWQgMCkgeyBhbmltYXRpb25TcGVlZCA9IFwiZmFzdFwiOyB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuaXNfb3Blbikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlzX29wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciAkYnV0dG9uID0gdGhpcy5nZXRCdXR0b24oKTtcbiAgICAgICAgICAgICRidXR0b24uYWRkQ2xhc3MoXCJqcXRyZWUtY2xvc2VkXCIpO1xuICAgICAgICAgICAgJGJ1dHRvbi5odG1sKFwiXCIpO1xuICAgICAgICAgICAgdmFyIGJ1dHRvbl9lbCA9ICRidXR0b24uZ2V0KDApO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbl9lbCkge1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gdGhpcy50cmVlX3dpZGdldC5yZW5kZXJlci5jbG9zZWRfaWNvbl9lbGVtZW50LmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uX2VsLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRsaSA9IF90aGlzLmdldExpKCk7XG4gICAgICAgICAgICAgICAgJGxpLmFkZENsYXNzKFwianF0cmVlLWNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgJHNwYW4gPSBfdGhpcy5nZXRTcGFuKCk7XG4gICAgICAgICAgICAgICAgJHNwYW4uYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmVlX3dpZGdldC5fdHJpZ2dlckV2ZW50KFwidHJlZS5jbG9zZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IF90aGlzLm5vZGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc2xpZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVsKCkuc2xpZGVVcChhbmltYXRpb25TcGVlZCwgZG9DbG9zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVsKCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGRvQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRm9sZGVyRWxlbWVudC5wcm90b3R5cGUuYWRkRHJvcEhpbnQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuaXNfb3BlbiAmJiBwb3NpdGlvbiA9PT0gbm9kZV8xLlBvc2l0aW9uLkluc2lkZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3JkZXJEcm9wSGludCh0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR2hvc3REcm9wSGludCh0aGlzLm5vZGUsIHRoaXMuJGVsZW1lbnQsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRm9sZGVyRWxlbWVudC5wcm90b3R5cGUuZ2V0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudFxuICAgICAgICAgICAgLmNoaWxkcmVuKFwiLmpxdHJlZS1lbGVtZW50XCIpXG4gICAgICAgICAgICAuZmluZChcImEuanF0cmVlLXRvZ2dsZXJcIik7XG4gICAgfTtcbiAgICByZXR1cm4gRm9sZGVyRWxlbWVudDtcbn0oTm9kZUVsZW1lbnQpKTtcbmV4cG9ydHMuRm9sZGVyRWxlbWVudCA9IEZvbGRlckVsZW1lbnQ7XG52YXIgQm9yZGVyRHJvcEhpbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9yZGVyRHJvcEhpbnQoJGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICRkaXYgPSAkZWxlbWVudC5jaGlsZHJlbihcIi5qcXRyZWUtZWxlbWVudFwiKTtcbiAgICAgICAgdmFyIHdpZHRoID0gJGVsZW1lbnQud2lkdGgoKSAtIDQ7XG4gICAgICAgIHRoaXMuJGhpbnQgPSAkKCc8c3BhbiBjbGFzcz1cImpxdHJlZS1ib3JkZXJcIj48L3NwYW4+Jyk7XG4gICAgICAgICRkaXYuYXBwZW5kKHRoaXMuJGhpbnQpO1xuICAgICAgICB0aGlzLiRoaW50LmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6ICRkaXYub3V0ZXJIZWlnaHQoKSAtIDRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEJvcmRlckRyb3BIaW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGhpbnQucmVtb3ZlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQm9yZGVyRHJvcEhpbnQ7XG59KCkpO1xuZXhwb3J0cy5Cb3JkZXJEcm9wSGludCA9IEJvcmRlckRyb3BIaW50O1xudmFyIEdob3N0RHJvcEhpbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2hvc3REcm9wSGludChub2RlLCAkZWxlbWVudCwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLiRnaG9zdCA9ICQoXCI8bGkgY2xhc3M9XFxcImpxdHJlZV9jb21tb24ganF0cmVlLWdob3N0XFxcIj48c3BhbiBjbGFzcz1cXFwianF0cmVlX2NvbW1vbiBqcXRyZWUtY2lyY2xlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImpxdHJlZV9jb21tb24ganF0cmVlLWxpbmVcXFwiPjwvc3Bhbj48L2xpPlwiKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBub2RlXzEuUG9zaXRpb24uQWZ0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUFmdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9zaXRpb24gPT09IG5vZGVfMS5Qb3NpdGlvbi5CZWZvcmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUJlZm9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID09PSBub2RlXzEuUG9zaXRpb24uSW5zaWRlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5pc0ZvbGRlcigpICYmIG5vZGUuaXNfb3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUluc2lkZU9wZW5Gb2xkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUluc2lkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEdob3N0RHJvcEhpbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZ2hvc3QucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBHaG9zdERyb3BIaW50LnByb3RvdHlwZS5tb3ZlQWZ0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWZ0ZXIodGhpcy4kZ2hvc3QpO1xuICAgIH07XG4gICAgR2hvc3REcm9wSGludC5wcm90b3R5cGUubW92ZUJlZm9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5iZWZvcmUodGhpcy4kZ2hvc3QpO1xuICAgIH07XG4gICAgR2hvc3REcm9wSGludC5wcm90b3R5cGUubW92ZUluc2lkZU9wZW5Gb2xkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcy5ub2RlLmNoaWxkcmVuWzBdLmVsZW1lbnQpLmJlZm9yZSh0aGlzLiRnaG9zdCk7XG4gICAgfTtcbiAgICBHaG9zdERyb3BIaW50LnByb3RvdHlwZS5tb3ZlSW5zaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFmdGVyKHRoaXMuJGdob3N0KTtcbiAgICAgICAgdGhpcy4kZ2hvc3QuYWRkQ2xhc3MoXCJqcXRyZWUtaW5zaWRlXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIEdob3N0RHJvcEhpbnQ7XG59KCkpO1xuZXhwb3J0cy5HaG9zdERyb3BIaW50ID0gR2hvc3REcm9wSGludDtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTsiLCIvLyBAZmxvd1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4uLy4uLy4uL2Jvd2VyL2pxVHJlZS9idWlsZC90cmVlLmpxdWVyeSc7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi8uLi9wYXJ0aWFscy9ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgVXBsb2FkZmlsZSBmcm9tICcuLy4uL3BhcnRpYWxzL3VwbG9hZGZpbGUnO1xyXG5pbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XHJcblxyXG5jbGFzcyBDYXRlZ29yeSB7XHJcbiAgaW5kZXggKGl0ZW1zLCBpdGVtKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIHZhciBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCk7XHJcbiAgICBub3RpZmljYXRpb24uc2V0VGV4dCh3aW5kb3cubGFuZy5nZXQoJ3JlcG9zaXRvcmllcy5zd2VldGFsZXJ0LnF1ZXN0aW9uX2NhdGVnb3J5JykpO1xyXG4gICAgdGhpcy5qcVRyZWUoaXRlbXMsIGl0ZW0pO1xyXG4gICAgXyQoJy5ncmlkLWVkaXRvcicpLmdyaWRFZGl0b3Ioe1xyXG4gICAgICBuZXdfcm93X2xheW91dHM6IFtbNCw0LDRdLCBbNiw2XSwgWzksM11dLFxyXG4gICAgICBjb250ZW50X3R5cGVzOiBbJ3N1bW1lcm5vdGUnXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdW1tZXJub3RlKCk7XHJcblxyXG4gICAgbm90aWZpY2F0aW9uLmRlc3Ryb3lSb3cobnVsbCwgJ2xpJyk7XHJcbiAgICBub3RpZmljYXRpb24uZmxhc2hNZXNzYWdlKCk7XHJcbiAgICB2YXIgdXBsb2FkZmlsZSA9IG5ldyBVcGxvYWRmaWxlKCk7XHJcbiAgICB1cGxvYWRmaWxlLmluaXQoKTtcclxuICAgIHRoaXMuYWRkWW91dHViZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkWW91dHViZSAoKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIF8kKCcjbGluay15b3V0dWJlIGEnKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgXyQoJyNsaW5rLXlvdXR1YmUnKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiJHt3aW5kb3cubGFuZy5nZXQoJ3JlcG9zaXRvcmllcy5sYWJlbC5saW5rX3lvdXR1YmUnKX1cIiBuYW1lPVwibGlua195b3V0dWJlW11cIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgIGApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzb3J0SW1hZ2VzICgpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgU29ydGFibGUuY3JlYXRlKGRyb3B6b25lLCB7XHJcbiAgICAgIGhhbmRsZTogXCIuZHotcHJldmlld1wiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1bW1lcm5vdGUoKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIHZhciB1cGxvYWRmaWxlID0gbmV3IFVwbG9hZGZpbGUoKTtcclxuICAgIHVwbG9hZGZpbGUuaW5pdCgpO1xyXG4gICAgXyQoJy50ZXh0YXJlYS1zdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XHJcbiAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICBbJ3N0eWxlJywgWydzdHlsZSddXSxcclxuICAgICAgICBbJ2ZvbnQnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuICAgICAgICBbJ2ZvbnRuYW1lJywgWydmb250bmFtZSddXSxcclxuICAgICAgICBbJ2ZvbnRzaXplJywgWydmb250c2l6ZSddXSxcclxuICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcclxuICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuICAgICAgICBbJ2hlaWdodCcsIFsnaGVpZ2h0J11dLFxyXG4gICAgICAgIFsndGFibGUnLCBbJ3RhYmxlJ11dLFxyXG4gICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnLCd2aWRlbycsICdociddXSxcclxuICAgICAgICBbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnXV0sXHJcbiAgICAgICAgWydteWJ1dHRvbicsIFsnbGF5b3V0J11dLFxyXG4gICAgICAgIFsnaGVscCcsIFsnaGVscCddXVxyXG4gICAgICBdLFxyXG4gICAgICBoZWlnaHQ6MjUwLFxyXG4gICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgbGF5b3V0OiB0aGlzLmluc2VydExheW91dFxyXG4gICAgICB9LFxyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBvbkltYWdlVXBsb2FkOiBmdW5jdGlvbihmaWxlcykge1xyXG4gICAgICAgICAgdXBsb2FkZmlsZS5zZW5kSW1hZ2UoZmlsZXNbMF0sIGxhcm91dGUucm91dGUoJ2JhY2tlbmQuc3VtbWVybm90ZS5pbWFnZScpLCBfJCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluc2VydExheW91dCAoY29udGV4dCkge1xyXG4gICAgdmFyIF8kID0gd2luZG93LiQ7XHJcbiAgICB2YXIgdWkgPSBfJC5zdW1tZXJub3RlLnVpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBidXR0b25cclxuICAgIHZhciBidXR0b24gPSB1aS5idXR0b24oe1xyXG4gICAgICBjb250ZW50czogJzxpIGNsYXNzPVwiaW9uLWFyY2hpdmVcIi8+JyxcclxuICAgICAgdG9vbHRpcDogJ2luc2VydCBsYXlvdXQnLFxyXG4gICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gXyQoXyQoJy5ncmlkLWVkaXRvcicpLmdyaWRFZGl0b3IoJ2dldEh0bWwnKSlbMF07XHJcbiAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQuaW52b2tlKCdlZGl0b3IuaW5zZXJ0Tm9kZScsIG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAganFUcmVlIChpdGVtcywgaXRlbSwgc2VsZWN0b3IgPSAnI2xpc3QnKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIF8kKHNlbGVjdG9yKS50cmVlKHtcclxuICAgICAgY2xvc2VkSWNvbjogXyQoJzxpIGNsYXNzPVwiaW9uLXBsdXNcIj48L2k+JyksXHJcbiAgICAgIG9wZW5lZEljb246IF8kKCc8aSBjbGFzcz1cImlvbi1taW51c1wiPjwvaT4nKSxcclxuICAgICAgZGF0YTogaXRlbXMsXHJcbiAgICAgIGRyYWdBbmREcm9wOmZhbHNlLFxyXG4gICAgICBhdXRvT3BlbjogZmFsc2UsXHJcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICBvbkNyZWF0ZUxpOiBmdW5jdGlvbihub2RlLCAkbGkpIHtcclxuICAgICAgICBpZiAobm9kZS5sb2NrZWQpIHtcclxuICAgICAgICAgICRsaS5maW5kKCcuanF0cmVlLXRpdGxlLmpxdHJlZV9jb21tb24nKS5hcHBlbmQoYDxsYWJlbCBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4teHMgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaW9uLWlvcy1sb2NrZWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0gIT0gMCAmJiBpdGVtLmlkID09IG5vZGUuaWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpLmZpbmQoJy5qcXRyZWUtZWxlbWVudCcpXHJcbiAgICAgICAgICAuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHB1bGwtcmlnaHQgdG9vbHNcIj5cXFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJytsYXJvdXRlLnJvdXRlKCdiYWNrZW5kLmNhdGVnb3J5LmVkaXQnLCB7Y2F0ZWdvcnk6IG5vZGUuaWR9KSsnXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXhzXCI+PGkgY2xhc3M9XCJpb24tZWRpdFwiPjwvaT48L2E+IFxcXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCInK2xhcm91dGUucm91dGUoJ2JhY2tlbmQuY2F0ZWdvcnkuZGVzdHJveScsIHtjYXRlZ29yeTogbm9kZS5pZH0pKydcIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRhbmdlciBkZWxldGUtYWN0aW9uXCI+PGkgY2xhc3M9XCJpb24tY2xvc2UtY2lyY2xlZFwiPjwvaT48L2E+XFxcclxuICAgICAgICAgICAgPC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoKTtcclxuIiwiLy8gQGZsb3dcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5jbGFzcyBOb3RpZmljYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuX3RleHQgPSAnJztcclxuICB9XHJcblxyXG4gIHNldFRleHQgKHRleHQpIHtcclxuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveVJvdyAoZGF0YXRhYmxlID0gbnVsbCwgcmVtb3ZlID0gbnVsbCwgc2VsZWN0b3IpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGVsID0gc2VsZWN0b3IgfHwgJ2EuZGVsZXRlLWFjdGlvbic7XHJcbiAgICBfJChkb2N1bWVudCkub24oJ2NsaWNrJywgZWwsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9IF8kKHRoaXMpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBkZWxldGVVcmwgPSBfJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgIHRpdGxlOiB3aW5kb3cubGFuZy5nZXQoJ3JlcG9zaXRvcmllcy5zd2VldGFsZXJ0LnF1ZXN0aW9uJyksXHJcbiAgICAgICAgdGV4dDogc2VsZi5fdGV4dCxcclxuICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjREQ2QjU1JyxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogd2luZG93LmxhbmcuZ2V0KCdyZXBvc2l0b3JpZXMuc3dlZXRhbGVydC5vaycpLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHdpbmRvdy5sYW5nLmdldCgncmVwb3NpdG9yaWVzLnN3ZWV0YWxlcnQuY2FuY2VsJylcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXyQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgIHVybDogZGVsZXRlVXJsLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWxlcnROb3RpZmljYXRpb24ocmVzcG9uc2UubWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhdGFibGUpIHtcclxuICAgICAgICAgICAgICBkYXRhdGFibGUucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZGF0YXRhYmxlICYmIHJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICR0aGlzLmNsb3Nlc3QocmVtb3ZlKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgc2VsZi5hbGVydE5vdGlmaWNhdGlvbihyZXNwb25zZS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoZGlzbWlzcykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFsZXJ0Tm90aWZpY2F0aW9uIChtZXNzYWdlLCBzdGF0dXMgPSB0cnVlLCBkZWxheSA9IDMwMDApIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgbGV0IGFsZXJ0VHlwZSA9IHN0YXR1cyA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInO1xyXG4gICAgXyQoJyNub3RpZmljYXRpb24gLmFsZXJ0LWNvbnRlbnQnKS5odG1sKCcnKTtcclxuICAgIF8kKG1lc3NhZ2UpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgIF8kKCcjbm90aWZpY2F0aW9uIC5hbGVydC1jb250ZW50JykuYXBwZW5kKCc8c3Ryb25nPicgKyBlbGVtZW50ICsgJzwvc3Ryb25nPjxicj4nKTtcclxuICAgIH0pO1xyXG4gICAgXyQoJyNub3RpZmljYXRpb24nKS50b2dnbGVDbGFzcygnaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGFuZ2VyJykuYWRkQ2xhc3MoYWxlcnRUeXBlKS5kZWxheShkZWxheSkuc2hvdyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF8kKHRoaXMpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmxhc2hNZXNzYWdlICgpIHtcclxuICAgIHZhciBtZXNzYWdlID0gd2luZG93LmZsYXNoX21lc3NhZ2U7XHJcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2Uuc3RhdHVzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB2YXIgZSA9IG1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuYWxlcnROb3RpZmljYXRpb24oZS5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XHJcbiIsIi8vIEBmbG93XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFVwbG9hZCB7XHJcbiAgY29uc3RydWN0b3IgKGVsID0gJyNpbWFnZScsIGltZyA9ICcjaW1nLXVwbG9hZCcpIHtcclxuICAgIHRoaXMuX2VsID0gd2luZG93LiQoZWwpO1xyXG4gICAgdGhpcy5faW1nID0gd2luZG93LiQoaW1nKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdmFyIF8kID0gd2luZG93LiQ7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLl9lbC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgbGFiZWwgPSBfJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvLipcXC8vLCAnJyk7XHJcbiAgICAgIGxldCBpbnB1dCA9IF8kKHRoaXMpLnBhcmVudHMoJy5pbnB1dC1ncm91cCcpLmZpbmQoJzp0ZXh0Jyk7XHJcbiAgICAgIGlmIChpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICBpbnB1dC52YWwobGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGYucmVhZFVSTCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZFVSTCAoaW5wdXQpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzZWxmLl9pbWcuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZEltYWdlKGZpbGUsIHVybCwgZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgdmFyICBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xyXG4gICAgXyQuYWpheCh7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGVsZW1lbnQuc3VtbWVybm90ZShcImluc2VydEltYWdlXCIsIGRhdGEudXJsKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICBhbGVydCh4aHIucmVzcG9uc2VKU09OLmVycm9ycy5pbWFnZS50b1N0cmluZygpIHx8IHhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9