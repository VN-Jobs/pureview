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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./resources/assets/js/backend/modules/menu.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/backend/modules/menu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bower_jqTree_build_tree_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bower/jqTree/build/tree.jquery */ "./resources/assets/bower/jqTree/build/tree.jquery.js");
/* harmony import */ var _bower_jqTree_build_tree_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bower_jqTree_build_tree_jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../partials/notification */ "./resources/assets/js/backend/partials/notification.js");
// @flow


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);
  }

  _createClass(Menu, [{
    key: "index",
    value: function index(items, item) {
      var notification = new _partials_notification__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.jqTree(items, item);
      this.getUrlFromSelect();
      this.serializeMenu(notification);
      notification.destroyRow(null, 'li');
      notification.flashMessage();
    }
  }, {
    key: "serializeMenu",
    value: function serializeMenu(notification) {
      var _$ = window.$;

      _$('#save-serialize').on('click', function (e) {
        e.preventDefault();

        var serialize = _$('#list').tree('toJson');

        _$.post(window.laroute.route('backend.menu.serialize'), {
          serialize: serialize
        }).done(function (response) {
          notification.alertNotification(response.message, true);
        }).fail(function (response) {
          notification.alertNotification(response.responseJSON.message, false);
        });
      });
    }
  }, {
    key: "getUrlFromSelect",
    value: function getUrlFromSelect() {
      var _$ = window.$;

      _$('select[name=category_id]').on('change', function () {
        var url = this.value;
        var name = $(this).find("option:selected").text();

        _$('input[name=name]').val(name);

        _$('input[name=url]').val(url);
      });
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
        dragAndDrop: true,
        autoOpen: false,
        selectable: false,
        onCanMoveTo: function onCanMoveTo(moved_node, target_node, position) {
          if (position == 'inside' && !moved_node.children.length && !target_node.parent.id) {
            return true;
          }

          if (position == 'after') {
            return true;
          }
        },
        onCreateLi: function onCreateLi(node, $li) {
          if (item != 0 && item.id == node.id) {
            return false;
          }

          if (node.locked) {
            return false;
          }

          $li.find('.jqtree-element').append('<div class="btn-group pull-right tools">\
            <a href="' + laroute.route('backend.menu.edit', {
            menu: node.id
          }) + '" class="btn btn-default btn-xs"><i class="ion-edit"></i></a> \
            <a href="' + laroute.route('backend.menu.destroy', {
            menu: node.id
          }) + '" class="btn btn-xs btn-danger delete-action"><i class="ion-close-circled"></i></a>\
            </div>');
        }
      });
    }
  }]);

  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (window.menu = new Menu());

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

/***/ 7:
/*!***********************************************************!*\
  !*** multi ./resources/assets/js/backend/modules/menu.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/app/resources/assets/js/backend/modules/menu.js */"./resources/assets/js/backend/modules/menu.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9ib3dlci9qcVRyZWUvYnVpbGQvdHJlZS5qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrZW5kL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2tlbmQvcGFydGlhbHMvbm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlBvc2l0aW9uIiwicG9zaXRpb25fbmFtZXMiLCJiZWZvcmUiLCJCZWZvcmUiLCJhZnRlciIsIkFmdGVyIiwiaW5zaWRlIiwiSW5zaWRlIiwibm9uZSIsIk5vbmUiLCJnZXRQb3NpdGlvbk5hbWUiLCJwb3NpdGlvbiIsIm5hbWVfMSIsImdldFBvc2l0aW9uIiwiTm9kZSIsImlzX3Jvb3QiLCJub2RlX2NsYXNzIiwic2V0RGF0YSIsImNoaWxkcmVuIiwicGFyZW50IiwiaWRfbWFwcGluZyIsInRyZWUiLCJfdGhpcyIsInNldE5hbWUiLCJrZXkiLCJ2YWx1ZSIsImxvYWRGcm9tRGF0YSIsImRhdGEiLCJyZW1vdmVDaGlsZHJlbiIsIl9pIiwiZGF0YV8xIiwibGVuZ3RoIiwibm9kZSIsImFkZENoaWxkIiwicHVzaCIsIl9zZXRQYXJlbnQiLCJhZGRDaGlsZEF0UG9zaXRpb24iLCJpbmRleCIsInNwbGljZSIsInJlbW92ZUNoaWxkIiwiX3JlbW92ZUNoaWxkIiwiZ2V0Q2hpbGRJbmRleCIsIiQiLCJpbkFycmF5IiwiaGFzQ2hpbGRyZW4iLCJpc0ZvbGRlciIsImxvYWRfb25fZGVtYW5kIiwiaXRlcmF0ZSIsImNhbGxiYWNrIiwiX2l0ZXJhdGUiLCJsZXZlbCIsIl9hIiwiY2hpbGQiLCJyZXN1bHQiLCJtb3ZlTm9kZSIsIm1vdmVkX25vZGUiLCJ0YXJnZXRfbm9kZSIsImlzUGFyZW50T2YiLCJnZXREYXRhIiwiaW5jbHVkZV9wYXJlbnQiLCJnZXREYXRhRnJvbU5vZGVzIiwibm9kZXMiLCJtYXAiLCJ0bXBfbm9kZSIsImsiLCJpbmRleE9mIiwidiIsImdldE5vZGVCeU5hbWUiLCJnZXROb2RlQnlDYWxsYmFjayIsImFkZEFmdGVyIiwibm9kZV9pbmZvIiwiY2hpbGRfaW5kZXgiLCJhZGRCZWZvcmUiLCJhZGRQYXJlbnQiLCJuZXdfcGFyZW50Iiwib3JpZ2luYWxfcGFyZW50IiwicmVtb3ZlIiwiYXBwZW5kIiwicHJlcGVuZCIsImdldExldmVsIiwiZ2V0Tm9kZUJ5SWQiLCJub2RlX2lkIiwiYWRkTm9kZVRvSW5kZXgiLCJpZCIsInJlbW92ZU5vZGVGcm9tSW5kZXgiLCJnZXRQcmV2aW91c1NpYmxpbmciLCJwcmV2aW91c19pbmRleCIsImdldE5leHRTaWJsaW5nIiwibmV4dF9pbmRleCIsImdldE5vZGVzQnlQcm9wZXJ0eSIsImZpbHRlciIsImYiLCJnZXROZXh0Tm9kZSIsImluY2x1ZGVfY2hpbGRyZW4iLCJpc19vcGVuIiwibmV4dF9zaWJsaW5nIiwiZ2V0UHJldmlvdXNOb2RlIiwicHJldmlvdXNfc2libGluZyIsImdldExhc3RDaGlsZCIsImdldFBhcmVudCIsImxhc3RfY2hpbGQiLCJpbml0RnJvbURhdGEiLCJhZGROb2RlIiwibm9kZV9kYXRhIiwiYWRkQ2hpbGRyZW4iLCJjaGlsZHJlbl9kYXRhIiwiY2hpbGRyZW5fZGF0YV8xIiwiaXNJbnQiLCJpc0Z1bmN0aW9uIiwiaHRtbF9lc2NhcGUiLCJ0ZXh0IiwicmVwbGFjZSIsImdldEJvb2xTdHJpbmciLCJTaW1wbGVXaWRnZXQiLCJlbCIsIm9wdGlvbnMiLCIkZWwiLCJkZWZhdWx0cyIsImNvbnN0cnVjdG9yIiwiZXh0ZW5kIiwicmVnaXN0ZXIiLCJ3aWRnZXRfY2xhc3MiLCJ3aWRnZXRfbmFtZSIsImdldERhdGFLZXkiLCJnZXRXaWRnZXREYXRhIiwiZGF0YV9rZXkiLCJ3aWRnZXQiLCJjcmVhdGVXaWRnZXQiLCJleGlzdGluZ193aWRnZXQiLCJfaW5pdCIsImRlc3Ryb3lXaWRnZXQiLCJkZXN0cm95IiwicmVtb3ZlRGF0YSIsImNhbGxGdW5jdGlvbiIsImZ1bmN0aW9uX25hbWUiLCJhcmdzIiwid2lkZ2V0X2Z1bmN0aW9uIiwiYXBwbHkiLCJmbiIsImFyZ3VtZW50MSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIl9kZWluaXQiLCJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsImIiLCJfXyIsImNyZWF0ZSIsInZlcnNpb25fMSIsImRyYWdfYW5kX2Ryb3BfaGFuZGxlcl8xIiwiZWxlbWVudHNfcmVuZGVyZXJfMSIsImtleV9oYW5kbGVyXzEiLCJtb3VzZV93aWRnZXRfMSIsInNhdmVfc3RhdGVfaGFuZGxlcl8xIiwic2Nyb2xsX2hhbmRsZXJfMSIsInNlbGVjdF9ub2RlX2hhbmRsZXJfMSIsInNpbXBsZV93aWRnZXRfMSIsIm5vZGVfMSIsInV0aWxfMSIsIm5vZGVfZWxlbWVudF8xIiwiSnFUcmVlV2lkZ2V0IiwiX3N1cGVyIiwidG9nZ2xlIiwic2xpZGVfcGFyYW0iLCJzbGlkZSIsImNsb3NlTm9kZSIsIm9wZW5Ob2RlIiwiZWxlbWVudCIsImdldFRyZWUiLCJzZWxlY3ROb2RlIiwiX3NlbGVjdE5vZGUiLCJnZXRTZWxlY3RlZE5vZGUiLCJzZWxlY3Rfbm9kZV9oYW5kbGVyIiwidG9Kc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWREYXRhIiwicGFyZW50X25vZGUiLCJfbG9hZERhdGEiLCJsb2FkRGF0YUZyb21VcmwiLCJwYXJhbTEiLCJwYXJhbTIiLCJwYXJhbTMiLCJ0eXBlIiwiX2xvYWREYXRhRnJvbVVybCIsInJlbG9hZCIsIm9uX2ZpbmlzaGVkIiwiZ2V0Tm9kZUJ5SHRtbEVsZW1lbnQiLCJfZ2V0Tm9kZSIsInBhcnNlUGFyYW1zIiwiX29wZW5Ob2RlIiwiRm9sZGVyRWxlbWVudCIsImNsb3NlIiwiYW5pbWF0aW9uU3BlZWQiLCJfc2F2ZVN0YXRlIiwiaXNEcmFnZ2luZyIsImRuZF9oYW5kbGVyIiwiaXNfZHJhZ2dpbmciLCJyZWZyZXNoSGl0QXJlYXMiLCJyZWZyZXNoIiwiYWRkTm9kZUFmdGVyIiwibmV3X25vZGVfaW5mbyIsImV4aXN0aW5nX25vZGUiLCJuZXdfbm9kZSIsIl9yZWZyZXNoRWxlbWVudHMiLCJhZGROb2RlQmVmb3JlIiwiYWRkUGFyZW50Tm9kZSIsInJlbW92ZU5vZGUiLCJyZW1vdmVGcm9tU2VsZWN0aW9uIiwiYXBwZW5kTm9kZSIsInBhcmVudF9ub2RlX3BhcmFtIiwicHJlcGVuZE5vZGUiLCJ1cGRhdGVOb2RlIiwiaWRfaXNfY2hhbmdlZCIsInJlbmRlcmVyIiwicmVuZGVyRnJvbU5vZGUiLCJfc2VsZWN0Q3VycmVudE5vZGUiLCJwb3NpdGlvbl9pbmRleCIsImdldFN0YXRlRnJvbVN0b3JhZ2UiLCJzYXZlX3N0YXRlX2hhbmRsZXIiLCJhZGRUb1NlbGVjdGlvbiIsIl9nZXROb2RlRWxlbWVudEZvck5vZGUiLCJzZWxlY3QiLCJnZXRTZWxlY3RlZE5vZGVzIiwiaXNOb2RlU2VsZWN0ZWQiLCJkZXNlbGVjdCIsInNjcm9sbFRvTm9kZSIsInNjcm9sbF9oYW5kbGVyIiwiJGVsZW1lbnQiLCJ0b3BfMSIsIm9mZnNldCIsInRvcCIsInNjcm9sbFRvIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0T3B0aW9uIiwib3B0aW9uIiwibW92ZURvd24iLCJrZXlfaGFuZGxlciIsIm1vdmVVcCIsImdldFZlcnNpb24iLCJ0ZXN0R2VuZXJhdGVIaXRBcmVhcyIsIm1vdmluZ19ub2RlIiwiY3VycmVudF9pdGVtIiwiZ2VuZXJhdGVIaXRBcmVhcyIsImhpdF9hcmVhcyIsIl90cmlnZ2VyRXZlbnQiLCJldmVudF9uYW1lIiwidmFsdWVzIiwiZXZlbnQiLCJFdmVudCIsInRyaWdnZXIiLCJkb09wZW5Ob2RlIiwiX25vZGUiLCJfc2xpZGUiLCJfb25fZmluaXNoZWQiLCJmb2xkZXJfZWxlbWVudCIsIm9wZW4iLCJfbG9hZEZvbGRlck9uRGVtYW5kIiwicGFyZW50XzEiLCJmcm9tX25vZGUiLCJyZW5kZXIiLCJOb2RlRWxlbWVudCIsIl9nZXROb2RlRWxlbWVudCIsIl9jb250YWluc0VsZW1lbnQiLCJtb3VzZV9kZWxheSIsImlzX2luaXRpYWxpemVkIiwicnRsIiwiX2dldFJ0bE9wdGlvbiIsImNsb3NlZEljb24iLCJfZ2V0RGVmYXVsdENsb3NlZEljb24iLCJzYXZlU3RhdGUiLCJEcmFnQW5kRHJvcEhhbmRsZXIiLCJkcmFnQW5kRHJvcCIsIl9pbml0RGF0YSIsImNsaWNrIiwicHJveHkiLCJfY2xpY2siLCJkYmxjbGljayIsIl9kYmxjbGljayIsInVzZUNvbnRleHRNZW51Iiwib24iLCJfY29udGV4dG1lbnUiLCJlbXB0eSIsIm9mZiIsImRlaW5pdCIsIl9tb3VzZUNhcHR1cmUiLCJwb3NpdGlvbl9pbmZvIiwibW91c2VDYXB0dXJlIiwiX21vdXNlU3RhcnQiLCJtb3VzZVN0YXJ0IiwiX21vdXNlRHJhZyIsIm1vdXNlRHJhZyIsImNoZWNrU2Nyb2xsaW5nIiwiX21vdXNlU3RvcCIsIm1vdXNlU3RvcCIsImRhdGFfdXJsIiwiX2dldERhdGFVcmxJbmZvIiwiZGF0YVVybCIsImdldFVybEZyb21TdHJpbmciLCJ1cmxfaW5mbyIsInVybCIsInNlbGVjdGVkX25vZGVfaWQiLCJfZ2V0Tm9kZUlkVG9CZVNlbGVjdGVkIiwic2VsZWN0ZWRfbm9kZSIsImdldE5vZGVJZFRvQmVTZWxlY3RlZCIsIl9pbml0VHJlZSIsImRvSW5pdCIsIm5vZGVDbGFzcyIsImNsZWFyIiwibXVzdF9sb2FkX29uX2RlbWFuZCIsIl9zZXRJbml0aWFsU3RhdGUiLCJfc2V0SW5pdGlhbFN0YXRlT25EZW1hbmQiLCJyZXN0b3JlU3RhdGUiLCJtdXN0X2xvYWRfb25fZGVtYW5kXzEiLCJhdXRvT3Blbk5vZGVzIiwiYXV0b09wZW4iLCJtYXhfbGV2ZWwiLCJfZ2V0QXV0b09wZW5NYXhMZXZlbCIsImlzX3Jlc3RvcmVkIiwiY2JfZmluaXNoZWQiLCJzZXRJbml0aWFsU3RhdGVPbkRlbWFuZCIsImxvYWRpbmdfY291bnQiLCJsb2FkQW5kT3Blbk5vZGUiLCJvcGVuTm9kZXMiLCJpc19sb2FkaW5nIiwicGFyc2VJbnQiLCJlIiwiY2xpY2tfdGFyZ2V0IiwiX2dldENsaWNrVGFyZ2V0IiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudF8xIiwiY2xpY2tfZXZlbnQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCIkdGFyZ2V0IiwiJGJ1dHRvbiIsImNsb3Nlc3QiLCIkbGkiLCIkZGl2Iiwibm9kZV9lbGVtZW50IiwiX2Rlc2VsZWN0Q3VycmVudE5vZGUiLCJkYXRhX3J0bCIsIl9ub3RpZnlMb2FkaW5nIiwib25Mb2FkaW5nIiwibXVzdF90b2dnbGUiLCJjYW5TZWxlY3QiLCJvbkNhblNlbGVjdE5vZGUiLCJzZWxlY3RhYmxlIiwib3BlblBhcmVudHMiLCJwcmV2aW91c19ub2RlIiwiZGVzZWxlY3RlZF9ub2RlIiwidHJlZV9kYXRhIiwiX2Rlc2VsZWN0Tm9kZXMiLCJfbG9hZFN1YnRyZWUiLCJzZWxlY3RlZF9ub2Rlc191bmRlcl9wYXJlbnQiLCJnZXRTZWxlY3RlZE5vZGVzVW5kZXIiLCJzZWxlY3RlZF9ub2Rlc191bmRlcl9wYXJlbnRfMSIsInVybF9pbmZvX3BhcmFtIiwiYWRkTG9hZGluZ0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVMb2FkaW5nQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcnNlVXJsSW5mbyIsIm1ldGhvZCIsImhhbmRlTG9hZERhdGEiLCJnZXREYXRhRnJvbVJlc3BvbnNlIiwicmVzcG9uc2UiLCJpc0FycmF5IiwicGFyc2VKU09OIiwiZmlsdGVyRGF0YSIsImRhdGFGaWx0ZXIiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJvbkxvYWRGYWlsZWQiLCJsb2FkRGF0YUZyb21VcmxJbmZvIiwiX3VybF9pbmZvIiwiYWpheCIsInRvVXBwZXJDYXNlIiwiY2FjaGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsIm9uU2V0U3RhdGVGcm9tU3RvcmFnZSIsIm9uR2V0U3RhdGVGcm9tU3RvcmFnZSIsIm9uQ3JlYXRlTGkiLCJvbklzTW92ZUhhbmRsZSIsIm9uQ2FuTW92ZSIsIm9uQ2FuTW92ZVRvIiwiYXV0b0VzY2FwZSIsIm9wZW5lZEljb24iLCJrZXlib2FyZFN1cHBvcnQiLCJvcGVuRm9sZGVyRGVsYXkiLCJvbkRyYWdNb3ZlIiwib25EcmFnU3RvcCIsImJ1dHRvbkxlZnQiLCJ0YWJJbmRleCIsInZlcnNpb24iLCJ0cmVlX3dpZGdldCIsImhvdmVyZWRfYXJlYSIsIiRnaG9zdCIsIm11c3RDYXB0dXJlRWxlbWVudCIsImhpdF9hcmVhc19nZW5lcmF0b3IiLCJIaXRBcmVhc0dlbmVyYXRvciIsImdldFRyZWVEaW1lbnNpb25zIiwiYm90dG9tIiwiZ2VuZXJhdGUiLCJub2RlX25hbWUiLCJkcmFnX2VsZW1lbnQiLCJEcmFnRWxlbWVudCIsInBhZ2VfeCIsImxlZnQiLCJwYWdlX3kiLCJtb3ZlIiwiYXJlYSIsImZpbmRIb3ZlcmVkQXJlYSIsImNhbl9tb3ZlX3RvIiwiY2FuTW92ZVRvQXJlYSIsInN0b3BPcGVuRm9sZGVyVGltZXIiLCJtdXN0T3BlbkZvbGRlclRpbWVyIiwic3RhcnRPcGVuRm9sZGVyVGltZXIiLCJ1cGRhdGVEcm9wSGludCIsInJlbW92ZUhvdmVyIiwicmVtb3ZlRHJvcEhpbnQiLCJvcmlnaW5hbF9ldmVudCIsIm1vdmVJdGVtIiwicmVtb3ZlSGl0QXJlYXMiLCJpcyIsInBvc2l0aW9uX25hbWUiLCJwcmV2aW91c19naG9zdCIsIngiLCJ5IiwiZGltZW5zaW9ucyIsInJpZ2h0IiwibG93IiwiaGlnaCIsIm1pZCIsImFkZERyb3BIaW50IiwiZm9sZGVyIiwib3BlbkZvbGRlciIsIm9wZW5fZm9sZGVyX3RpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdmVkX25vZGVfMSIsInRhcmdldF9ub2RlXzEiLCJwb3NpdGlvbl8xIiwicHJldmlvdXNfcGFyZW50IiwiZG9Nb3ZlIiwibW92ZV9pbmZvIiwiZG9fbW92ZSIsIndpZHRoIiwiaGVpZ2h0IiwiVmlzaWJsZU5vZGVJdGVyYXRvciIsImlzX2ZpcnN0X25vZGUiLCJfaXRlcmF0ZU5vZGUiLCJuZXh0X25vZGUiLCJtdXN0X2l0ZXJhdGVfaW5zaWRlIiwiaGFuZGxlRmlyc3ROb2RlIiwiaGFuZGxlTm9kZSIsImhhbmRsZU9wZW5Gb2xkZXIiLCJoYW5kbGVDbG9zZWRGb2xkZXIiLCJjaGlsZHJlbl9sZW5ndGhfMSIsImZvckVhY2giLCJfIiwiaGFuZGxlQWZ0ZXJPcGVuRm9sZGVyIiwiY3VycmVudF9ub2RlIiwidHJlZV9ib3R0b20iLCJwb3NpdGlvbnMiLCJsYXN0X3RvcCIsInByZXZpb3VzX3RvcCIsImdyb3VwIiwicG9zaXRpb25zXzEiLCJnZW5lcmF0ZUhpdEFyZWFzRm9yR3JvdXAiLCJhZGRQb3NpdGlvbiIsImdldFRvcCIsInBvc2l0aW9uc19pbl9ncm91cCIsInBvc2l0aW9uX2NvdW50IiwiTWF0aCIsIm1pbiIsImFyZWFfaGVpZ2h0Iiwicm91bmQiLCJhcmVhX3RvcCIsIm9mZnNldF94Iiwib2Zmc2V0X3kiLCIkdHJlZSIsImNzcyIsIkVsZW1lbnRzUmVuZGVyZXIiLCJvcGVuZWRfaWNvbl9lbGVtZW50IiwiY3JlYXRlQnV0dG9uRWxlbWVudCIsImNsb3NlZF9pY29uX2VsZW1lbnQiLCJyZW5kZXJGcm9tUm9vdCIsImNyZWF0ZURvbUVsZW1lbnRzIiwiJHByZXZpb3VzX2xpIiwibGkiLCJjcmVhdGVMaSIsImF0dGFjaE5vZGVEYXRhIiwiaXNfcm9vdF9ub2RlIiwidWwiLCJjcmVhdGVVbCIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW5fMSIsImNsYXNzX3N0cmluZyIsInJvbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJpc19zZWxlY3RlZCIsIkJvb2xlYW4iLCJjcmVhdGVGb2xkZXJMaSIsImNyZWF0ZU5vZGVMaSIsImJ1dHRvbl9jbGFzc2VzIiwiZ2V0QnV0dG9uQ2xhc3NlcyIsImZvbGRlcl9jbGFzc2VzIiwiZ2V0Rm9sZGVyQ2xhc3NlcyIsImljb25fZWxlbWVudCIsImRpdiIsImJ1dHRvbl9saW5rIiwiY2xvbmVOb2RlIiwiY3JlYXRlVGl0bGVTcGFuIiwibGlfY2xhc3NlcyIsImpvaW4iLCJpc19mb2xkZXIiLCJ0aXRsZV9zcGFuIiwiY2xhc3NlcyIsImlubmVySFRNTCIsImVzY2FwZUlmTmVjZXNzYXJ5IiwiY3JlYXRlVGV4dE5vZGUiLCJLZXlIYW5kbGVyIiwiaGFuZGxlS2V5RG93biIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiY2FuSGFuZGxlS2V5Ym9hcmQiLCJ3aGljaCIsIkRPV04iLCJVUCIsIlJJR0hUIiwiTEVGVCIsImlzU2Nyb2xsZWRJbnRvVmlldyIsImZpbmQiLCJpc0ZvY3VzT25UcmVlIiwiYWN0aXZlX2VsZW1lbnQiLCJhY3RpdmVFbGVtZW50IiwidGFnTmFtZSIsIk1vdXNlV2lkZ2V0Iiwic2V0TW91c2VEZWxheSIsIl9tb3VzZURvd24iLCJfdG91Y2hTdGFydCIsImlzX21vdXNlX3N0YXJ0ZWQiLCJfbW91c2VfZGVsYXlfdGltZXIiLCJfaXNfbW91c2VfZGVsYXlfbWV0IiwibW91c2VfZG93bl9pbmZvIiwiJGRvY3VtZW50IiwiX2hhbmRsZU1vdXNlRG93biIsIl9nZXRQb3NpdGlvbkluZm8iLCJfaGFuZGxlTW91c2VVcCIsIl9oYW5kbGVTdGFydE1vdXNlIiwiX21vdXNlTW92ZSIsIl90b3VjaE1vdmUiLCJfbW91c2VVcCIsIl90b3VjaEVuZCIsIl9zdGFydE1vdXNlRGVsYXlUaW1lciIsIl9oYW5kbGVNb3VzZU1vdmUiLCJwYWdlWCIsInBhZ2VZIiwidG91Y2hfZXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJTYXZlU3RhdGVIYW5kbGVyIiwic3VwcG9ydHNMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0S2V5TmFtZSIsImpzb25fZGF0YSIsIl9sb2FkRnJvbVN0b3JhZ2UiLCJfcGFyc2VTdGF0ZSIsImdldE9wZW5Ob2RlSWRzIiwib3Blbl9ub2RlcyIsImdldFNlbGVjdGVkTm9kZUlkcyIsIl9vcGVuSW5pdGlhbE5vZGVzIiwiX3Jlc2V0U2VsZWN0aW9uIiwiX3NlbGVjdEluaXRpYWxOb2RlcyIsImdldEl0ZW0iLCJub2RlX2lkcyIsIm5vZGVfaWRzXzEiLCJzZWxlY3RfY291bnQiLCJub2RlX2lkc18yIiwic2VsZWN0ZWRfbm9kZXMiLCJub2RlX2lkc19wYXJhbSIsIm5ld19ub2Rlc19pZHMiLCJub2RlX2lkc18zIiwidGVzdFN1cHBvcnQiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJfc3VwcG9ydHNMb2NhbFN0b3JhZ2UiLCJTY3JvbGxIYW5kbGVyIiwiX2Vuc3VyZUluaXQiLCIkc2Nyb2xsX3BhcmVudCIsIl9oYW5kbGVTY3JvbGxpbmdXaXRoU2Nyb2xsUGFyZW50IiwiX2hhbmRsZVNjcm9sbGluZ1dpdGhEb2N1bWVudCIsInNjcm9sbFRvcCIsInRyZWVfdG9wIiwiZWxlbWVudF9ib3R0b20iLCJ2aWV3X2JvdHRvbSIsImVsZW1lbnRfdG9wIiwidmlld190b3AiLCJzY3JvbGxfcGFyZW50X3RvcCIsIndpbmRvdyIsIl9pbml0U2Nyb2xsUGFyZW50IiwiZ2V0UGFyZW50V2l0aE92ZXJmbG93IiwiY3NzX2F0dHJpYnV0ZXMiLCJoYXNPdmVyRmxvdyIsImNzc19hdHRyaWJ1dGVzXzEiLCJhdHRyIiwib3ZlcmZsb3dfdmFsdWUiLCJwYXJlbnRzIiwic2V0RG9jdW1lbnRBc1Njcm9sbFBhcmVudCIsImRpc3RhbmNlX2JvdHRvbSIsIm9mZnNldEhlaWdodCIsImRpc3RhbmNlX3RvcCIsIlNlbGVjdE5vZGVIYW5kbGVyIiwic2VsZWN0ZWRfc2luZ2xlX25vZGUiLCJpbml0IiwiQm9yZGVyRHJvcEhpbnQiLCJHaG9zdERyb3BIaW50IiwiZ2V0TGkiLCIkc3BhbiIsImdldFNwYW4iLCJmb2N1cyIsInJlbW92ZUF0dHIiLCJibHVyIiwiZ2V0VWwiLCJnZXRCdXR0b24iLCJodG1sIiwiYnV0dG9uX2VsIiwiaWNvbiIsImRvT3BlbiIsInNsaWRlRG93biIsInNob3ciLCJkb0Nsb3NlIiwic2xpZGVVcCIsImhpZGUiLCIkaGludCIsIm91dGVySGVpZ2h0IiwibW92ZUFmdGVyIiwibW92ZUJlZm9yZSIsIm1vdmVJbnNpZGVPcGVuRm9sZGVyIiwibW92ZUluc2lkZSIsIk1lbnUiLCJpdGVtcyIsIml0ZW0iLCJub3RpZmljYXRpb24iLCJOb3RpZmljYXRpb24iLCJqcVRyZWUiLCJnZXRVcmxGcm9tU2VsZWN0Iiwic2VyaWFsaXplTWVudSIsImRlc3Ryb3lSb3ciLCJmbGFzaE1lc3NhZ2UiLCJfJCIsInNlcmlhbGl6ZSIsInBvc3QiLCJsYXJvdXRlIiwicm91dGUiLCJkb25lIiwiYWxlcnROb3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsInZhbCIsInNlbGVjdG9yIiwibG9ja2VkIiwibWVudSIsIl90ZXh0IiwiZGF0YXRhYmxlIiwic2VsZiIsIiR0aGlzIiwiZGVsZXRlVXJsIiwic3dhbCIsInRpdGxlIiwibGFuZyIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwiZmFkZU91dCIsImRpc21pc3MiLCJzdGF0dXMiLCJkZWxheSIsImFsZXJ0VHlwZSIsImVhY2giLCJ0b2dnbGVDbGFzcyIsImZsYXNoX21lc3NhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUE0RDtBQUM3RCxDQUFDLFNBQ2dDO0FBQ2pDLENBQUMscUJBQXFCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFB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QTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7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LENBQW1DekIsSUFBbkMsQ0FBd0MsRUFBeEM7O0FBQ0F5QixRQUFFLENBQUNPLE9BQUQsQ0FBRixDQUFZeUIsSUFBWixDQUFpQixVQUFVcnBCLEtBQVYsRUFBaUJxSSxPQUFqQixFQUEwQjtBQUN6Q2dmLFVBQUUsQ0FBQyw4QkFBRCxDQUFGLENBQW1DN2tCLE1BQW5DLENBQTBDLGFBQWE2RixPQUFiLEdBQXVCLGVBQWpFO0FBQ0QsT0FGRDs7QUFHQWdmLFFBQUUsQ0FBQyxlQUFELENBQUYsQ0FBb0JpQyxXQUFwQixDQUFnQyxRQUFoQyxFQUEwQzNVLFdBQTFDLENBQXNELDRCQUF0RCxFQUFvRkYsUUFBcEYsQ0FBNkYyVSxTQUE3RixFQUF3R0QsS0FBeEcsQ0FBOEdBLEtBQTlHLEVBQXFIbEQsSUFBckgsQ0FBMEgsWUFBWTtBQUNwSW9CLFVBQUUsQ0FBQyxJQUFELENBQUYsQ0FBU2lDLFdBQVQsQ0FBcUIsUUFBckI7QUFDRCxPQUZEO0FBR0Q7OzttQ0FFZTtBQUNkLFVBQUkxQixPQUFPLEdBQUcxRCxNQUFNLENBQUNxRixhQUFyQjs7QUFDQSxVQUFJLE9BQU8zQixPQUFPLENBQUNzQixNQUFmLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLFlBQUkzVyxDQUFDLEdBQUdxVixPQUFSO0FBQ0EsYUFBS0QsaUJBQUwsQ0FBdUJwVixDQUFDLENBQUNxVixPQUF6QixFQUFrQ3JWLENBQUMsQ0FBQzJXLE1BQXBDO0FBQ0Q7QUFDRjs7Ozs7O0FBR1luQywyRUFBZixFIiwiZmlsZSI6Ii9hc3NldHMvanMvYmFja2VuZC9tb2R1bGVzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwiLyohXG4gKiBzd2VldGFsZXJ0MiB2Ni4xMS41XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICB0eXBlOiBudWxsLFxuICBjdXN0b21DbGFzczogJycsXG4gIHRhcmdldDogJ2JvZHknLFxuICBhbmltYXRpb246IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBwcmVDb25maXJtOiBudWxsLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICBjb25maXJtQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogJyNhYWEnLFxuICBjYW5jZWxCdXR0b25DbGFzczogbnVsbCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlV2lkdGg6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiBudWxsLFxuICBpbWFnZUFsdDogJycsXG4gIGltYWdlQ2xhc3M6IG51bGwsXG4gIHRpbWVyOiBudWxsLFxuICB3aWR0aDogNTAwLFxuICBwYWRkaW5nOiAyMCxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICBpbnB1dDogbnVsbCxcbiAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gIGlucHV0VmFsdWU6ICcnLFxuICBpbnB1dE9wdGlvbnM6IHt9LFxuICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICBpbnB1dENsYXNzOiBudWxsLFxuICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICBpbnB1dFZhbGlkYXRvcjogbnVsbCxcbiAgZ3JvdzogZmFsc2UsXG4gIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgcHJvZ3Jlc3NTdGVwczogW10sXG4gIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IG51bGwsXG4gIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogJzQwcHgnLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uT3BlbjogbnVsbCxcbiAgb25DbG9zZTogbnVsbCxcbiAgdXNlUmVqZWN0aW9uczogdHJ1ZVxufTtcblxudmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcblxudmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaW9zZml4JywgJ21vZGFsJywgJ292ZXJsYXknLCAnZmFkZScsICdzaG93JywgJ2hpZGUnLCAnbm9hbmltYXRpb24nLCAnY2xvc2UnLCAndGl0bGUnLCAnY29udGVudCcsICdidXR0b25zd3JhcHBlcicsICdjb25maXJtJywgJ2NhbmNlbCcsICdpY29uJywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAndmFsaWRhdGlvbmVycm9yJywgJ3Byb2dyZXNzc3RlcHMnLCAnYWN0aXZlcHJvZ3Jlc3NzdGVwJywgJ3Byb2dyZXNzY2lyY2xlJywgJ3Byb2dyZXNzbGluZScsICdsb2FkaW5nJywgJ3N0eWxlZCcsICd0b3AnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2NlbnRlcicsICdjZW50ZXItbGVmdCcsICdjZW50ZXItcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICdncm93LXJvdycsICdncm93LWNvbHVtbicsICdncm93LWZ1bGxzY3JlZW4nXSk7XG5cbnZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxudmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6JztcblxuLypcbiAqIFNldCBob3ZlciwgYWN0aXZlIGFuZCBmb2N1cy1zdGF0ZXMgZm9yIGJ1dHRvbnMgKHNvdXJjZTogaHR0cDovL3d3dy5zaXRlcG9pbnQuY29tL2phdmFzY3JpcHQtZ2VuZXJhdGUtbGlnaHRlci1kYXJrZXItY29sb3IpXG4gKi9cbnZhciBjb2xvckx1bWluYW5jZSA9IGZ1bmN0aW9uIGNvbG9yTHVtaW5hbmNlKGhleCwgbHVtKSB7XG4gIC8vIFZhbGlkYXRlIGhleCBzdHJpbmdcbiAgaGV4ID0gU3RyaW5nKGhleCkucmVwbGFjZSgvW14wLTlhLWZdL2dpLCAnJyk7XG4gIGlmIChoZXgubGVuZ3RoIDwgNikge1xuICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgfVxuICBsdW0gPSBsdW0gfHwgMDtcblxuICAvLyBDb252ZXJ0IHRvIGRlY2ltYWwgYW5kIGNoYW5nZSBsdW1pbm9zaXR5XG4gIHZhciByZ2IgPSAnIyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgdmFyIGMgPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgIGMgPSBNYXRoLnJvdW5kKE1hdGgubWluKE1hdGgubWF4KDAsIGMgKyBjICogbHVtKSwgMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSAoJzAwJyArIGMpLnN1YnN0cihjLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmdiO1xufTtcblxudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2Fybihjb25zb2xlUHJlZml4ICsgJyAnICsgbWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG52YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoY29uc29sZVByZWZpeCArICcgJyArIG1lc3NhZ2UpO1xufTtcblxuLy8gUmVtZW1iZXIgc3RhdGUgaW4gY2FzZXMgd2hlcmUgb3BlbmluZyBhbmQgaGFuZGxpbmcgYSBtb2RhbCB3aWxsIGZpZGRsZSB3aXRoIGl0LlxudmFyIHN0YXRlcyA9IHtcbiAgcHJldmlvdXNXaW5kb3dLZXlEb3duOiBudWxsLFxuICBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ6IG51bGwsXG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcblxuICAvKlxuICAgKiBBZGQgbW9kYWwgKyBvdmVybGF5IHRvIERPTVxuICAgKi9cbn07dmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAvLyBDbGVhbiB1cCB0aGUgb2xkIG1vZGFsIGlmIGl0IGV4aXN0c1xuICB2YXIgYyA9IGdldENvbnRhaW5lcigpO1xuICBpZiAoYykge1xuICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzd2VldEhUTUw7XG5cbiAgdmFyIHRhcmdldEVsZW1lbnQgPSB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIDogcGFyYW1zLnRhcmdldDtcbiAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB2YXIgZmlsZSA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gIHZhciByYW5nZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIGlucHV0Jyk7XG4gIHZhciByYW5nZU91dHB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIG91dHB1dCcpO1xuICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICB2YXIgY2hlY2tib3ggPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJyBpbnB1dCcpO1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcblxuICBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHJhbmdlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICByYW5nZS5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICBzZWxlY3Qub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICB0ZXh0YXJlYS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICByZXR1cm4gbW9kYWw7XG59O1xuXG4vKlxuICogTWFuaXB1bGF0ZSBET01cbiAqL1xuXG52YXIgc3dlZXRIVE1MID0gKCdcXG4gPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCIgYXJpYS1kZXNjcmliZWRieT1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLm1vZGFsICsgJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8dWwgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyArICdcIj48L3VsPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5lcnJvciArICdcIj5cXG4gICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+PHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5xdWVzdGlvbiArICdcIj4/PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLndhcm5pbmcgKyAnXCI+ITwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5pbmZvICsgJ1wiPmk8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmljb24gKyAnICcgKyBpY29uVHlwZXMuc3VjY2VzcyArICdcIj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxcbiAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8aW1nIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmltYWdlICsgJ1wiIC8+XFxuICAgPGgyIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnRpdGxlICsgJ1wiIGlkPVwiJyArIHN3YWxDbGFzc2VzLnRpdGxlICsgJ1wiPjwvaDI+XFxuICAgPGRpdiBpZD1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCI+PC9kaXY+XFxuICAgPGlucHV0IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmlucHV0ICsgJ1wiIC8+XFxuICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuZmlsZSArICdcIiAvPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnXCI+XFxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XFxuICAgPC9kaXY+XFxuICAgPHNlbGVjdCBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5zZWxlY3QgKyAnXCI+PC9zZWxlY3Q+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5yYWRpbyArICdcIj48L2Rpdj5cXG4gICA8bGFiZWwgZm9yPVwiJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJ1wiPlxcbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XFxuICAgPC9sYWJlbD5cXG4gICA8dGV4dGFyZWEgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudGV4dGFyZWEgKyAnXCI+PC90ZXh0YXJlYT5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvciArICdcIiBpZD1cIicgKyBzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IgKyAnXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5idXR0b25zd3JhcHBlciArICdcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNvbmZpcm0gKyAnXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNhbmNlbCArICdcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jbG9zZSArICdcIj5cXHhENzwvYnV0dG9uPlxcbiA8L2Rpdj5cXG4nKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLCAnJyk7XG5cbnZhciBnZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY29udGFpbmVyKTtcbn07XG5cbnZhciBnZXRNb2RhbCA9IGZ1bmN0aW9uIGdldE1vZGFsKCkge1xuICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgPyBnZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLm1vZGFsKSA6IG51bGw7XG59O1xuXG52YXIgZ2V0SWNvbnMgPSBmdW5jdGlvbiBnZXRJY29ucygpIHtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgc3dhbENsYXNzZXMuaWNvbik7XG59O1xuXG52YXIgZWxlbWVudEJ5Q2xhc3MgPSBmdW5jdGlvbiBlbGVtZW50QnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGdldENvbnRhaW5lcigpID8gZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLicgKyBjbGFzc05hbWUpIDogbnVsbDtcbn07XG5cbnZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xufTtcblxudmFyIGdldENvbnRlbnQgPSBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29udGVudCk7XG59O1xuXG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbn07XG5cbnZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnByb2dyZXNzc3RlcHMpO1xufTtcblxudmFyIGdldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG59O1xuXG52YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb25maXJtKTtcbn07XG5cbnZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jYW5jZWwpO1xufTtcblxudmFyIGdldEJ1dHRvbnNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0QnV0dG9uc1dyYXBwZXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5idXR0b25zd3JhcHBlcik7XG59O1xuXG52YXIgZ2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiBnZXRDbG9zZUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNsb3NlKTtcbn07XG5cbnZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSBBcnJheS5mcm9tKGdldE1vZGFsKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKVxuICAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuXG4gIHZhciBvdGhlckZvY3VzYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZ2V0TW9kYWwoKS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwgdGV4dGFyZWEsIHNlbGVjdCwgYSwgW3RhYmluZGV4PVwiMFwiXScpKTtcblxuICByZXR1cm4gdW5pcXVlQXJyYXkoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXguY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHMpKTtcbn07XG5cbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQuZm9jdXMoKTtcblxuICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNS8xMzMxNDI1XG4gICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQudmFsdWUgPSB2YWw7XG4gIH1cbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWVsZW0gfHwgIWNsYXNzTmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFlbGVtIHx8ICFjbGFzc05hbWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxudmFyIGdldENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0sIGRpc3BsYXkpIHtcbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59O1xuXG52YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxudmFyIGVtcHR5ID0gZnVuY3Rpb24gZW1wdHkoZWxlbSkge1xuICB3aGlsZSAoZWxlbS5maXJzdENoaWxkKSB7XG4gICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG4vLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbn07XG5cbnZhciByZW1vdmVTdHlsZVByb3BlcnR5ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtLCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnXG4gIH07XG4gIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKHRyYW5zRW5kRXZlbnROYW1lcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0ZXN0RWwuc3R5bGVbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIFJlc2V0IHByZXZpb3VzIHdpbmRvdyBrZXlkb3duIGhhbmRsZXIgYW5kIGZvY3VlZCBlbGVtZW50XG52YXIgcmVzZXRQcmV2U3RhdGUgPSBmdW5jdGlvbiByZXNldFByZXZTdGF0ZSgpIHtcbiAgd2luZG93Lm9ua2V5ZG93biA9IHN0YXRlcy5wcmV2aW91c1dpbmRvd0tleURvd247XG4gIGlmIChzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIC8vIElFIGhhcyBubyBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gTWVhc3VyZSB3aWR0aCBvZiBzY3JvbGxiYXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9tb2RhbC5qcyNMMjc5LUwyODZcbnZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgdmFyIHN1cHBvcnRzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7XG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuXG4vKipcbiAqIEluamVjdCBhIHN0cmluZyBvZiBDU1MgaW50byB0aGUgcGFnZSBoZWFkZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzXG4gKi9cblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIG1vZGFsUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMpO1xudmFyIHF1ZXVlID0gW107XG5cbi8qXG4gKiBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG4gKiBIb3BlZnVsbHkgdG8gYXZvaWQgbWFueSBnaXRodWIgaXNzdWVzXG4gKi9cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgZXJyb3IoJ1RoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2xpbW9udGUvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbn1cblxuLyoqXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBtb2RhbFxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgc2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaXMgc2V0LCBkZXRlcm1pbmUgaWYgaXQgaXMgdmFsaWRcbiAgaWYgKHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH1cblxuICB2YXIgbW9kYWwgPSB2b2lkIDA7XG4gIHZhciBvbGRNb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIC8vIElmIHRoZSBtb2RlbCB0YXJnZXQgaGFzIGNoYW5nZWQsIHJlZnJlc2ggdGhlIG1vZGFsXG4gIGlmIChvbGRNb2RhbCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZE1vZGFsLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIG1vZGFsID0gaW5pdChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIG1vZGFsID0gb2xkTW9kYWwgfHwgaW5pdChwYXJhbXMpO1xuICB9XG5cbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgaWYgKCFzd2VldEFsZXJ0LmlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuKCdVbmtub3duIHBhcmFtZXRlciBcIicgKyBwYXJhbSArICdcIicpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBtb2RhbCB3aWR0aFxuICBtb2RhbC5zdHlsZS53aWR0aCA9IHR5cGVvZiBwYXJhbXMud2lkdGggPT09ICdudW1iZXInID8gcGFyYW1zLndpZHRoICsgJ3B4JyA6IHBhcmFtcy53aWR0aDtcblxuICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gcGFyYW1zLnBhZGRpbmcgKyAncHgnO1xuICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuXG4gIC8vIFRpdGxlXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICB9XG5cbiAgLy8gQ29udGVudFxuICBpZiAocGFyYW1zLnRleHQgfHwgcGFyYW1zLmh0bWwpIHtcbiAgICBpZiAoX3R5cGVvZihwYXJhbXMuaHRtbCkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgaWYgKDAgaW4gcGFyYW1zLmh0bWwpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSBpbiBwYXJhbXMuaHRtbDsgX2krKykge1xuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYW1zLmh0bWxbX2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYW1zLmh0bWwuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IHBhcmFtcy5odG1sO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dDtcbiAgICB9XG4gICAgc2hvdyhjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbnRlbnQpO1xuICB9XG5cbiAgLy8gUG9zaXRpb25cbiAgaWYgKHBhcmFtcy5wb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbcGFyYW1zLnBvc2l0aW9uXSk7XG4gIH1cblxuICAvLyBHcm93XG4gIGlmIChwYXJhbXMuZ3JvdyAmJiB0eXBlb2YgcGFyYW1zLmdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9ICdncm93LScgKyBwYXJhbXMuZ3JvdztcbiAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgIH1cbiAgfVxuXG4gIC8vIENsb3NlIGJ1dHRvblxuICBpZiAocGFyYW1zLnNob3dDbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCk7XG4gICAgc2hvdyhjbG9zZUJ1dHRvbik7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjbG9zZUJ1dHRvbik7XG4gIH1cblxuICAvLyBDdXN0b20gQ2xhc3NcbiAgbW9kYWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubW9kYWw7XG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhtb2RhbCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfVxuXG4gIC8vIFByb2dyZXNzIHN0ZXBzXG4gIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICB2YXIgY3VycmVudFByb2dyZXNzU3RlcCA9IHBhcnNlSW50KHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwID09PSBudWxsID8gc3dlZXRBbGVydC5nZXRRdWV1ZVN0ZXAoKSA6IHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwLCAxMCk7XG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIGVtcHR5KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gICAgfVxuICAgIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGFkZENsYXNzKGNpcmNsZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NjaXJjbGUpO1xuICAgICAgY2lyY2xlLmlubmVySFRNTCA9IHN0ZXA7XG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5hY3RpdmVwcm9ncmVzc3N0ZXApO1xuICAgICAgfVxuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgYWRkQ2xhc3MobGluZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NsaW5lKTtcbiAgICAgICAgbGluZS5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIEljb25cbiAgdmFyIGljb25zID0gZ2V0SWNvbnMoKTtcbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgaWNvbnMubGVuZ3RoOyBfaTIrKykge1xuICAgIGhpZGUoaWNvbnNbX2kyXSk7XG4gIH1cbiAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSBpY29uVHlwZSkge1xuICAgICAgICB2YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIGVycm9yKCdVbmtub3duIGFsZXJ0IHR5cGU6ICcgKyBwYXJhbXMudHlwZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJy4nICsgaWNvblR5cGVzW3BhcmFtcy50eXBlXSk7XG4gICAgc2hvdyhpY29uKTtcblxuICAgIC8vIEFuaW1hdGUgaWNvblxuICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIGFkZENsYXNzKGljb24sICdzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbicpO1xuICAgICAgICAgIGFkZENsYXNzKGljb24ucXVlcnlTZWxlY3RvcignLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnKSwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCcpO1xuICAgICAgICAgIGFkZENsYXNzKGljb24ucXVlcnlTZWxlY3RvcignLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJyksICdzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICBhZGRDbGFzcyhpY29uLCAnc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDIteC1tYXJrJyksICdzd2FsMi1hbmltYXRlLXgtbWFyaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEN1c3RvbSBpbWFnZVxuICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuICBpZiAocGFyYW1zLmltYWdlVXJsKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTtcbiAgICBzaG93KGltYWdlKTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VXaWR0aCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaW1hZ2VIZWlnaHQpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICB9XG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBpZiAocGFyYW1zLmltYWdlQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGltYWdlLCBwYXJhbXMuaW1hZ2VDbGFzcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhpZGUoaW1hZ2UpO1xuICB9XG5cbiAgLy8gQ2FuY2VsIGJ1dHRvblxuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2FuY2VsQnV0dG9uKTtcbiAgfVxuXG4gIC8vIENvbmZpcm0gYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICByZW1vdmVTdHlsZVByb3BlcnR5KGNvbmZpcm1CdXR0b24sICdkaXNwbGF5Jyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgfVxuXG4gIC8vIEJ1dHRvbnMgd3JhcHBlclxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGJ1dHRvbnNXcmFwcGVyKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93KGJ1dHRvbnNXcmFwcGVyKTtcbiAgfVxuXG4gIC8vIEVkaXQgdGV4dCBvbiBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25maXJtQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dDtcbiAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0O1xuXG4gIC8vIEFSSUEgbGFiZWxzIGZvciBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jb25maXJtQnV0dG9uQXJpYUxhYmVsKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jYW5jZWxCdXR0b25BcmlhTGFiZWwpO1xuXG4gIC8vIFNldCBidXR0b25zIHRvIHNlbGVjdGVkIGJhY2tncm91bmQgY29sb3JzXG4gIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgfVxuXG4gIC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG4gIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29uZmlybTtcbiAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgcGFyYW1zLmNvbmZpcm1CdXR0b25DbGFzcyk7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jYW5jZWw7XG4gIGFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgcGFyYW1zLmNhbmNlbEJ1dHRvbkNsYXNzKTtcblxuICAvLyBCdXR0b25zIHN0eWxpbmdcbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGFkZENsYXNzKGNvbmZpcm1CdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGNvbmZpcm1CdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgcmVtb3ZlQ2xhc3MoY2FuY2VsQnV0dG9uLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuXG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgfVxuXG4gIC8vIENTUyBhbmltYXRpb25cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24gPT09IHRydWUpIHtcbiAgICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH1cblxuICAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9saW1vbnRlLmdpdGh1Yi5pby9zd2VldGFsZXJ0Mi8jYWpheC1yZXF1ZXN0Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogQW5pbWF0aW9uc1xuICpcbiAqIEBwYXJhbSBhbmltYXRpb25cbiAqIEBwYXJhbSBvbkJlZm9yZU9wZW5cbiAqIEBwYXJhbSBvbkNvbXBsZXRlXG4gKi9cbnZhciBvcGVuTW9kYWwgPSBmdW5jdGlvbiBvcGVuTW9kYWwoYW5pbWF0aW9uLCBvbkJlZm9yZU9wZW4sIG9uQ29tcGxldGUpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIGlmIChvbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIG9uQmVmb3JlT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQmVmb3JlT3Blbihtb2RhbCk7XG4gIH1cblxuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuICBzaG93KG1vZGFsKTtcblxuICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9XG5cbiAgYWRkQ2xhc3MoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gIGZpeFNjcm9sbGJhcigpO1xuICBpT1NmaXgoKTtcbiAgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChvbkNvbXBsZXRlICE9PSBudWxsICYmIHR5cGVvZiBvbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbXBsZXRlKG1vZGFsKTtcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IG1lYXN1cmVTY3JvbGxiYXIoKSArICdweCc7XG4gIH1cbn07XG5cbnZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZztcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8vIEZpeCBpT1Mgc2Nyb2xsaW5nIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5NjI2MzAyLzEzMzE0MjVcbnZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyAncHgnO1xuICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gIH1cbn07XG5cbnZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgfVxufTtcblxuLy8gU3dlZXRBbGVydCBlbnRyeSBwb2ludFxudmFyIHN3ZWV0QWxlcnQgPSBmdW5jdGlvbiBzd2VldEFsZXJ0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJnc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IF9leHRlbmRzKHt9LCBtb2RhbFBhcmFtcyk7XG5cbiAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbMF0pKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHBhcmFtcy50aXRsZSA9IGFyZ3NbMF07XG4gICAgICBwYXJhbXMuaHRtbCA9IGFyZ3NbMV07XG4gICAgICBwYXJhbXMudHlwZSA9IGFyZ3NbMl07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIF9leHRlbmRzKHBhcmFtcywgYXJnc1swXSk7XG4gICAgICBwYXJhbXMuZXh0cmFQYXJhbXMgPSBhcmdzWzBdLmV4dHJhUGFyYW1zO1xuXG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnZW1haWwnICYmIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9PT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDZ9JC87XG4gICAgICAgICAgICBpZiAoZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAndXJsJyAmJiBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1LzEzMzE0MjVcbiAgICAgICAgICAgIHZhciB1cmxSZWdleCA9IC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKSQvO1xuICAgICAgICAgICAgaWYgKHVybFJlZ2V4LnRlc3QodXJsKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgVVJMJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGFyZ3VtZW50ISBFeHBlY3RlZCBcInN0cmluZ1wiIG9yIFwib2JqZWN0XCIsIGdvdCAnICsgX3R5cGVvZihhcmdzWzBdKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gQ2xvc2Ugb24gdGltZXJcbiAgICBpZiAocGFyYW1zLnRpbWVyKSB7XG4gICAgICBtb2RhbC50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICAgIHJlamVjdCgndGltZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgZGlzbWlzczogJ3RpbWVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgcGFyYW1zLnRpbWVyKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgaW5wdXQgZWxlbWVudCBieSBzcGVjaWZpZWQgdHlwZSBvciwgaWYgdHlwZSBpc24ndCBzcGVjaWZpZWQsIGJ5IHBhcmFtcy5pbnB1dFxuICAgIHZhciBnZXRJbnB1dCA9IGZ1bmN0aW9uIGdldElucHV0KGlucHV0VHlwZSkge1xuICAgICAgaW5wdXRUeXBlID0gaW5wdXRUeXBlIHx8IHBhcmFtcy5pbnB1dDtcbiAgICAgIGlmICghaW5wdXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKTtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJyBpbnB1dCcpO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFkaW8gKyAnIGlucHV0OmNoZWNrZWQnKSB8fCBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJyBpbnB1dDpmaXJzdC1jaGlsZCcpO1xuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIGlucHV0Jyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBtb2RhbCBpbnB1dFxuICAgIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaW5wdXQgYXV0b2ZvY3VzXG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0odmFsdWUpIHtcbiAgICAgIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgICBzd2VldEFsZXJ0LnNob3dMb2FkaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBwYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgcGFyYW1zLmV4dHJhUGFyYW1zKS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgICAgIHJlc29sdmUocHJlQ29uZmlybVZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgc3dlZXRBbGVydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIGlmIChlcnJvciQkMSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5zaG93VmFsaWRhdGlvbkVycm9yKGVycm9yJCQxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcbiAgICB2YXIgb25CdXR0b25FdmVudCA9IGZ1bmN0aW9uIG9uQnV0dG9uRXZlbnQoZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgICAgdmFyIHRhcmdldGVkQ29uZmlybSA9IGNvbmZpcm1CdXR0b24gJiYgKGNvbmZpcm1CdXR0b24gPT09IHRhcmdldCB8fCBjb25maXJtQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuICAgICAgdmFyIHRhcmdldGVkQ2FuY2VsID0gY2FuY2VsQnV0dG9uICYmIChjYW5jZWxCdXR0b24gPT09IHRhcmdldCB8fCBjYW5jZWxCdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG5cbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yLCAtMC4xKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvciwgLTAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yLCAtMC4yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvciwgLTAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgLy8gQ2xpY2tlZCAnY29uZmlybSdcbiAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIHBhcmFtcy5leHRyYVBhcmFtcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvciQkMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IoZXJyb3IkJDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsaWNrZWQgJ2NhbmNlbCdcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsICYmIHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KCdjYW5jZWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnY2FuY2VsJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBidXR0b25zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2luZyBtb2RhbCBieSBjbG9zZSBidXR0b25cbiAgICBnZXRDbG9zZUJ1dHRvbigpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlamVjdCgnY2xvc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnY2xvc2UnIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDbG9zaW5nIG1vZGFsIGJ5IG92ZXJsYXkgY2xpY2tcbiAgICBjb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICAgIHJlamVjdCgnb3ZlcmxheScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnb3ZlcmxheScgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnNXcmFwcGVyID0gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG5cbiAgICAvLyBSZXZlcnNlIGJ1dHRvbnMgKENvbmZpcm0gb24gdGhlIHJpZ2h0IHNpZGUpXG4gICAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGNvbmZpcm1CdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbik7XG4gICAgfVxuXG4gICAgLy8gRm9jdXMgaGFuZGxpbmdcbiAgICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhwYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcbiAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDtcblxuICAgICAgICAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgICAgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGVsZW1lbnQgaXMgdmlzaWJsZVxuICAgICAgICB2YXIgZWwgPSBmb2N1c2FibGVFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChpc1Zpc2libGUoZWwpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZ2V0SW5wdXQoKSkge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2VldEFsZXJ0LmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRBQlxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMocGFyYW1zLmZvY3VzQ2FuY2VsKTtcbiAgICAgICAgdmFyIGJ0bkluZGV4ID0gLTE7IC8vIEZpbmQgdGhlIGJ1dHRvbiAtIG5vdGUsIHRoaXMgaXMgYSBub2RlbGlzdCwgbm90IGFuIGFycmF5LlxuICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pNF0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2k0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0Fycm93ZG93biddLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShjYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgLy8gYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjYW5jZWxCdXR0b24gJiYgaXNWaXNpYmxlKGNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRVNDXG4gICAgICB9IGVsc2UgaWYgKChlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnKSAmJiBwYXJhbXMuYWxsb3dFc2NhcGVLZXkgPT09IHRydWUpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVqZWN0KCdlc2MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgZGlzbWlzczogJ2VzYycgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCF3aW5kb3cub25rZXlkb3duIHx8IHdpbmRvdy5vbmtleWRvd24udG9TdHJpbmcoKSAhPT0gaGFuZGxlS2V5RG93bi50b1N0cmluZygpKSB7XG4gICAgICBzdGF0ZXMucHJldmlvdXNXaW5kb3dLZXlEb3duID0gd2luZG93Lm9ua2V5ZG93bjtcbiAgICAgIHdpbmRvdy5vbmtleWRvd24gPSBoYW5kbGVLZXlEb3duO1xuICAgIH1cblxuICAgIC8vIExvYWRpbmcgc3RhdGVcbiAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uIGFuZCBkaXNhYmxlIENhbmNlbCBidXR0b25cbiAgICAgKi9cbiAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nID0gc3dlZXRBbGVydC5kaXNhYmxlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgICAgIGhpZGUoY29uZmlybUJ1dHRvbik7XG4gICAgICAgIGlmICghcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICBoaWRlKGdldEJ1dHRvbnNXcmFwcGVyKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZW1vdmVDbGFzcyhidXR0b25zV3JhcHBlciwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0VGl0bGUoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDb250ZW50KCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldElucHV0KCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEltYWdlKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldEJ1dHRvbnNXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH07XG4gICAgc3dlZXRBbGVydC5nZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUNvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUNvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9yICh2YXIgX2k1ID0gMDsgX2k1IDwgcmFkaW9zLmxlbmd0aDsgX2k1KyspIHtcbiAgICAgICAgICByYWRpb3NbX2k1XS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmRpc2FibGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9yICh2YXIgX2k2ID0gMDsgX2k2IDwgcmFkaW9zLmxlbmd0aDsgX2k2KyspIHtcbiAgICAgICAgICByYWRpb3NbX2k2XS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2hvdyBibG9jayB3aXRoIHZhbGlkYXRpb24gZXJyb3JcbiAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSBnZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgIHZhbGlkYXRpb25FcnJvci5pbm5lckhUTUwgPSBlcnJvciQkMTtcbiAgICAgIHNob3codmFsaWRhdGlvbkVycm9yKTtcblxuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IpO1xuICAgICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBlcnJvclxuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbkVycm9yID0gZ2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gICAgICBoaWRlKHZhbGlkYXRpb25FcnJvcik7XG5cbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5nZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhcmFtcy5wcm9ncmVzc1N0ZXBzO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LnNldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAocHJvZ3Jlc3NTdGVwcykge1xuICAgICAgcGFyYW1zLnByb2dyZXNzU3RlcHMgPSBwcm9ncmVzc1N0ZXBzO1xuICAgICAgc2V0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LnNob3dQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2hvdyhnZXRQcm9ncmVzc1N0ZXBzKCkpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmhpZGVQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGlkZShnZXRQcm9ncmVzc1N0ZXBzKCkpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuXG4gICAgLy8gaW5wdXRzXG4gICAgdmFyIGlucHV0VHlwZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG4gICAgdmFyIGlucHV0ID0gdm9pZCAwO1xuICAgIGZvciAodmFyIF9pNyA9IDA7IF9pNyA8IGlucHV0VHlwZXMubGVuZ3RoOyBfaTcrKykge1xuICAgICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVzW19pN11dO1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBpbnB1dENsYXNzKTtcbiAgICAgIGlucHV0ID0gZ2V0SW5wdXQoaW5wdXRUeXBlc1tfaTddKTtcblxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBmb3IgKHZhciBqIGluIGlucHV0LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgdmFyIGF0dHJOYW1lID0gaW5wdXQuYXR0cmlidXRlc1tqXS5uYW1lO1xuICAgICAgICAgICAgaWYgKGF0dHJOYW1lICE9PSAndHlwZScgJiYgYXR0ck5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBjbGFzc1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzcztcbiAgICAgIGlmIChwYXJhbXMuaW5wdXRDbGFzcykge1xuICAgICAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLmlucHV0Q2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSB2b2lkIDA7XG4gICAgc3dpdGNoIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3RlbCc6XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHZhciByYW5nZSA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMucmFuZ2UpO1xuICAgICAgICB2YXIgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgICAgICByYW5nZUlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIHJhbmdlSW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgc2hvdyhyYW5nZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIGZvciAodmFyIG9wdGlvblZhbHVlIGluIGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSBvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNob3coc2VsZWN0KTtcbiAgICAgICAgICBzZWxlY3QuZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHZhciByYWRpbyA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgICByYWRpby5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBmb3IgKHZhciByYWRpb1ZhbHVlIGluIGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWU7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gcmFkaW9WYWx1ZSkge1xuICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmFkaW9MYWJlbFNwYW4uaW5uZXJIVE1MID0gaW5wdXRPcHRpb25zW3JhZGlvVmFsdWVdO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbFNwYW4pO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5mb3IgPSByYWRpb0lucHV0LmlkO1xuICAgICAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNob3cocmFkaW8pO1xuICAgICAgICAgIHZhciByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByYWRpb3NbMF0uZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB2YXIgY2hlY2tib3ggPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmNoZWNrYm94KTtcbiAgICAgICAgdmFyIGNoZWNrYm94SW5wdXQgPSBnZXRJbnB1dCgnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3hJbnB1dC52YWx1ZSA9IDE7XG4gICAgICAgIGNoZWNrYm94SW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgICAgICAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gQm9vbGVhbihwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIHZhciBsYWJlbCA9IGNoZWNrYm94LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJyk7XG4gICAgICAgIGlmIChsYWJlbC5sZW5ndGgpIHtcbiAgICAgICAgICBjaGVja2JveC5yZW1vdmVDaGlsZChsYWJlbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHNob3coY2hlY2tib3gpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIHNob3codGV4dGFyZWEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIicgKyBwYXJhbXMuaW5wdXQgKyAnXCInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBpZiAocGFyYW1zLmlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc3dlZXRBbGVydC5zaG93TG9hZGluZygpO1xuICAgICAgICBwYXJhbXMuaW5wdXRPcHRpb25zLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0IG9yIFByb21pc2UsIGdvdCAnICsgX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHBhcmFtcy5hbmltYXRpb24sIHBhcmFtcy5vbkJlZm9yZU9wZW4sIHBhcmFtcy5vbk9wZW4pO1xuXG4gICAgaWYgKCFwYXJhbXMuYWxsb3dFbnRlcktleSkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZm9jdXNDYW5jZWwgJiYgaXNWaXNpYmxlKGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgIGNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXMoLTEsIDEpO1xuICAgIH1cblxuICAgIC8vIGZpeCBzY3JvbGxcbiAgICBnZXRDb250YWluZXIoKS5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHN3YWwyIG1vZGFsIGlzIHNob3duXG4gKi9cbnN3ZWV0QWxlcnQuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFnZXRNb2RhbCgpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgY2hhaW5pbmcgc3dlZXRBbGVydCBtb2RhbHNcbiAqL1xuc3dlZXRBbGVydC5xdWV1ZSA9IGZ1bmN0aW9uIChzdGVwcykge1xuICBxdWV1ZSA9IHN0ZXBzO1xuICB2YXIgcmVzZXRRdWV1ZSA9IGZ1bmN0aW9uIHJlc2V0UXVldWUoKSB7XG4gICAgcXVldWUgPSBbXTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gIH07XG4gIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIChmdW5jdGlvbiBzdGVwKGksIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaSA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG5cbiAgICAgICAgc3dlZXRBbGVydChxdWV1ZVtpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQpO1xuICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRpc21pc3MpIHtcbiAgICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgICAgcmVqZWN0KGRpc21pc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0UXVldWUoKTtcbiAgICAgICAgcmVzb2x2ZShxdWV1ZVJlc3VsdCk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBtb2RhbCBpbiBxdWV1ZVxuICovXG5zd2VldEFsZXJ0LmdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIG1vZGFsIHRvIHRoZSBxdWV1ZVxuICovXG5zd2VldEFsZXJ0Lmluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcXVldWUuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgfVxuICByZXR1cm4gcXVldWUucHVzaChzdGVwKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGRlbGV0aW5nIGEgbW9kYWwgZnJvbSB0aGUgcXVldWVcbiAqL1xuc3dlZXRBbGVydC5kZWxldGVRdWV1ZVN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBxdWV1ZVtpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbG9zZSBzd2VldEFsZXJ0XG4gKi9cbnN3ZWV0QWxlcnQuY2xvc2UgPSBzd2VldEFsZXJ0LmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAob25Db21wbGV0ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG4gIGlmICghbW9kYWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVtb3ZlQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnNob3cpO1xuICBhZGRDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIGNsZWFyVGltZW91dChtb2RhbC50aW1lb3V0KTtcblxuICByZXNldFByZXZTdGF0ZSgpO1xuXG4gIHZhciByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUgPSBmdW5jdGlvbiByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUoKSB7XG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gICAgdW5kb1Njcm9sbGJhcigpO1xuICAgIHVuZG9JT1NmaXgoKTtcbiAgfTtcblxuICAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGlmIChoYXNDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgcmVtb3ZlTW9kYWxBbmRSZXNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUoKTtcbiAgfVxuICBpZiAob25Db21wbGV0ZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db21wbGV0ZShtb2RhbCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0LmNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuc3dlZXRBbGVydC5jbGlja0NhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG4vKipcbiAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uIGFuZCBkaXNhYmxlIENhbmNlbCBidXR0b25cbiAqL1xuc3dlZXRBbGVydC5zaG93TG9hZGluZyA9IHN3ZWV0QWxlcnQuZW5hYmxlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgaWYgKCFtb2RhbCkge1xuICAgIHN3ZWV0QWxlcnQoJycpO1xuICB9XG4gIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyIGJ1dHRvbnNXcmFwcGVyID0gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcblxuICBzaG93KGJ1dHRvbnNXcmFwcGVyKTtcbiAgc2hvdyhjb25maXJtQnV0dG9uLCAnaW5saW5lLWJsb2NrJyk7XG4gIGFkZENsYXNzKGJ1dHRvbnNXcmFwcGVyLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgYWRkQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICBtb2RhbC5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuc3dlZXRBbGVydC5pc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVmYXVsdFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbU5hbWUpIHx8IHBhcmFtTmFtZSA9PT0gJ2V4dHJhUGFyYW1zJztcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKiBAcGFyYW0ge09iamVjdH0gdXNlclBhcmFtc1xuICovXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzID0gZnVuY3Rpb24gKHVzZXJQYXJhbXMpIHtcbiAgaWYgKCF1c2VyUGFyYW1zIHx8ICh0eXBlb2YgdXNlclBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXNlclBhcmFtcykpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcnJvcigndGhlIGFyZ3VtZW50IGZvciBzZXREZWZhdWx0cygpIGlzIHJlcXVpcmVkIGFuZCBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgfVxuXG4gIGZvciAodmFyIHBhcmFtIGluIHVzZXJQYXJhbXMpIHtcbiAgICBpZiAoIXN3ZWV0QWxlcnQuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oJ1Vua25vd24gcGFyYW1ldGVyIFwiJyArIHBhcmFtICsgJ1wiJyk7XG4gICAgICBkZWxldGUgdXNlclBhcmFtc1twYXJhbV07XG4gICAgfVxuICB9XG5cbiAgX2V4dGVuZHMobW9kYWxQYXJhbXMsIHVzZXJQYXJhbXMpO1xufTtcblxuLyoqXG4gKiBSZXNldCBkZWZhdWx0IHBhcmFtcyBmb3IgZWFjaCBwb3B1cFxuICovXG5zd2VldEFsZXJ0LnJlc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMpO1xufTtcblxuc3dlZXRBbGVydC5ub29wID0gZnVuY3Rpb24gKCkge307XG5cbnN3ZWV0QWxlcnQudmVyc2lvbiA9ICc2LjExLjUnO1xuXG5zd2VldEFsZXJ0LmRlZmF1bHQgPSBzd2VldEFsZXJ0O1xuXG5yZXR1cm4gc3dlZXRBbGVydDtcblxufSkpKTtcbmlmICh3aW5kb3cuU3dlZXRhbGVydDIpIHdpbmRvdy5zd2VldEFsZXJ0ID0gd2luZG93LnN3YWwgPSB3aW5kb3cuU3dlZXRhbGVydDI7XG4iLCIvKiFcbiAqIEpxVHJlZSAxLjQuM1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNyBNYXJjbyBCcmFha1xuICogXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqIFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqIFxuICovXG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQb3NpdGlvbjtcbihmdW5jdGlvbiAoUG9zaXRpb24pIHtcbiAgICBQb3NpdGlvbltQb3NpdGlvbltcIkJlZm9yZVwiXSA9IDFdID0gXCJCZWZvcmVcIjtcbiAgICBQb3NpdGlvbltQb3NpdGlvbltcIkFmdGVyXCJdID0gMl0gPSBcIkFmdGVyXCI7XG4gICAgUG9zaXRpb25bUG9zaXRpb25bXCJJbnNpZGVcIl0gPSAzXSA9IFwiSW5zaWRlXCI7XG4gICAgUG9zaXRpb25bUG9zaXRpb25bXCJOb25lXCJdID0gNF0gPSBcIk5vbmVcIjtcbn0pKFBvc2l0aW9uID0gZXhwb3J0cy5Qb3NpdGlvbiB8fCAoZXhwb3J0cy5Qb3NpdGlvbiA9IHt9KSk7XG5leHBvcnRzLnBvc2l0aW9uX25hbWVzID0ge1xuICAgIGJlZm9yZTogUG9zaXRpb24uQmVmb3JlLFxuICAgIGFmdGVyOiBQb3NpdGlvbi5BZnRlcixcbiAgICBpbnNpZGU6IFBvc2l0aW9uLkluc2lkZSxcbiAgICBub25lOiBQb3NpdGlvbi5Ob25lXG59O1xuZnVuY3Rpb24gZ2V0UG9zaXRpb25OYW1lKHBvc2l0aW9uKSB7XG4gICAgZm9yICh2YXIgbmFtZV8xIGluIGV4cG9ydHMucG9zaXRpb25fbmFtZXMpIHtcbiAgICAgICAgaWYgKGV4cG9ydHMucG9zaXRpb25fbmFtZXMuaGFzT3duUHJvcGVydHkobmFtZV8xKSkge1xuICAgICAgICAgICAgaWYgKGV4cG9ydHMucG9zaXRpb25fbmFtZXNbbmFtZV8xXSA9PT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZV8xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuZXhwb3J0cy5nZXRQb3NpdGlvbk5hbWUgPSBnZXRQb3NpdGlvbk5hbWU7XG5mdW5jdGlvbiBnZXRQb3NpdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucG9zaXRpb25fbmFtZXNbbmFtZV07XG59XG5leHBvcnRzLmdldFBvc2l0aW9uID0gZ2V0UG9zaXRpb247XG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlKG8sIGlzX3Jvb3QsIG5vZGVfY2xhc3MpIHtcbiAgICAgICAgaWYgKGlzX3Jvb3QgPT09IHZvaWQgMCkgeyBpc19yb290ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKG5vZGVfY2xhc3MgPT09IHZvaWQgMCkgeyBub2RlX2NsYXNzID0gTm9kZTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnNldERhdGEobyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICBpZiAoaXNfcm9vdCkge1xuICAgICAgICAgICAgdGhpcy5pZF9tYXBwaW5nID0ge307XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5ub2RlX2NsYXNzID0gbm9kZV9jbGFzcztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgIFNldCB0aGUgZGF0YSBvZiB0aGlzIG5vZGUuXG5cbiAgICBzZXREYXRhKHN0cmluZyk6IHNldCB0aGUgbmFtZSBvZiB0aGUgbm9kZVxuICAgIHNldGRhdGEob2JqZWN0KTogc2V0IGF0dHJpYnV0ZXMgb2YgdGhlIG5vZGVcblxuICAgIEV4YW1wbGVzOlxuICAgICAgICBzZXRkYXRhKCdub2RlMScpXG5cbiAgICAgICAgc2V0RGF0YSh7IG5hbWU6ICdub2RlMScsIGlkOiAxfSk7XG5cbiAgICAgICAgc2V0RGF0YSh7IG5hbWU6ICdub2RlMicsIGlkOiAyLCBjb2xvcjogJ2dyZWVuJ30pO1xuXG4gICAgKiBUaGlzIGlzIGFuIGludGVybmFsIGZ1bmN0aW9uOyBpdCBpcyBub3QgaW4gdGhlIGRvY3NcbiAgICAqIERvZXMgbm90IHJlbW92ZSBleGlzdGluZyBub2RlIHZhbHVlc1xuICAgICovXG4gICAgTm9kZS5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZXROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIG8gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHNldE5hbWUobyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gb1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImxhYmVsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdXNlIHRoZSAnbGFiZWwnIGtleSBpbnN0ZWFkIG9mICduYW1lJzsgdGhpcyBpcyBhIGxlZ2FjeSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkgIT09IFwiY2hpbGRyZW5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbid0IHVwZGF0ZSB0aGUgY2hpbGRyZW4gdXNpbmcgdGhpcyBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qXG4gICAgQ3JlYXRlIHRyZWUgZnJvbSBkYXRhLlxuXG4gICAgU3RydWN0dXJlIG9mIGRhdGEgaXM6XG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ25vZGUxJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ2NoaWxkMScgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnY2hpbGQyJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnbm9kZTInXG4gICAgICAgIH1cbiAgICBdXG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5sb2FkRnJvbURhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZGF0YV8xID0gZGF0YTsgX2kgPCBkYXRhXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGRhdGFfMVtfaV07XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyB0aGlzLnRyZWUubm9kZV9jbGFzcyhvKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgb1tcImNoaWxkcmVuXCJdKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5sb2FkRnJvbURhdGEob1tcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLypcbiAgICBBZGQgY2hpbGQuXG5cbiAgICB0cmVlLmFkZENoaWxkKFxuICAgICAgICBuZXcgTm9kZSgnY2hpbGQxJylcbiAgICApO1xuICAgICovXG4gICAgTm9kZS5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgIG5vZGUuX3NldFBhcmVudCh0aGlzKTtcbiAgICB9O1xuICAgIC8qXG4gICAgQWRkIGNoaWxkIGF0IHBvc2l0aW9uLiBJbmRleCBzdGFydHMgYXQgMC5cblxuICAgIHRyZWUuYWRkQ2hpbGRBdFBvc2l0aW9uKFxuICAgICAgICBuZXcgTm9kZSgnYWJjJyksXG4gICAgICAgIDFcbiAgICApO1xuICAgICovXG4gICAgTm9kZS5wcm90b3R5cGUuYWRkQ2hpbGRBdFBvc2l0aW9uID0gZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBub2RlKTtcbiAgICAgICAgbm9kZS5fc2V0UGFyZW50KHRoaXMpO1xuICAgIH07XG4gICAgLypcbiAgICBSZW1vdmUgY2hpbGQuIFRoaXMgYWxzbyByZW1vdmVzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS5cblxuICAgIHRyZWUucmVtb3ZlQ2hpbGQodHJlZS5jaGlsZHJlblswXSk7XG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBmcm9tIHRoZSBpbmRleFxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH07XG4gICAgLypcbiAgICBHZXQgY2hpbGQgaW5kZXguXG5cbiAgICB2YXIgaW5kZXggPSBnZXRDaGlsZEluZGV4KG5vZGUpO1xuICAgICovXG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGRJbmRleCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiAkLmluQXJyYXkobm9kZSwgdGhpcy5jaGlsZHJlbik7XG4gICAgfTtcbiAgICAvKlxuICAgIERvZXMgdGhlIHRyZWUgaGF2ZSBjaGlsZHJlbj9cblxuICAgIGlmICh0cmVlLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgLy9cbiAgICB9XG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5oYXNDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoICE9PSAwO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuaXNGb2xkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0NoaWxkcmVuKCkgfHwgdGhpcy5sb2FkX29uX2RlbWFuZDtcbiAgICB9O1xuICAgIC8qXG4gICAgSXRlcmF0ZSBvdmVyIGFsbCB0aGUgbm9kZXMgaW4gdGhlIHRyZWUuXG5cbiAgICBDYWxscyBjYWxsYmFjayB3aXRoIChub2RlLCBsZXZlbCkuXG5cbiAgICBUaGUgY2FsbGJhY2sgbXVzdCByZXR1cm4gdHJ1ZSB0byBjb250aW51ZSB0aGUgaXRlcmF0aW9uIG9uIGN1cnJlbnQgbm9kZS5cblxuICAgIHRyZWUuaXRlcmF0ZShcbiAgICAgICAgZnVuY3Rpb24obm9kZSwgbGV2ZWwpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5uYW1lKTtcblxuICAgICAgICAgICAvLyBzdG9wIGl0ZXJhdGlvbiBhZnRlciBsZXZlbCAyXG4gICAgICAgICAgIHJldHVybiAobGV2ZWwgPD0gMik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfaXRlcmF0ZSA9IGZ1bmN0aW9uIChub2RlLCBsZXZlbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbm9kZS5jaGlsZHJlbjsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soY2hpbGQsIGxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiBjaGlsZC5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0ZShjaGlsZCwgbGV2ZWwgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX2l0ZXJhdGUodGhpcywgMCk7XG4gICAgfTtcbiAgICAvKlxuICAgIE1vdmUgbm9kZSByZWxhdGl2ZSB0byBhbm90aGVyIG5vZGUuXG5cbiAgICBBcmd1bWVudCBwb3NpdGlvbjogUG9zaXRpb24uQkVGT1JFLCBQb3NpdGlvbi5BRlRFUiBvciBQb3NpdGlvbi5JbnNpZGVcblxuICAgIC8vIG1vdmUgbm9kZTEgYWZ0ZXIgbm9kZTJcbiAgICB0cmVlLm1vdmVOb2RlKG5vZGUxLCBub2RlMiwgUG9zaXRpb24uQUZURVIpO1xuICAgICovXG4gICAgTm9kZS5wcm90b3R5cGUubW92ZU5vZGUgPSBmdW5jdGlvbiAobW92ZWRfbm9kZSwgdGFyZ2V0X25vZGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICghbW92ZWRfbm9kZS5wYXJlbnQgfHwgbW92ZWRfbm9kZS5pc1BhcmVudE9mKHRhcmdldF9ub2RlKSkge1xuICAgICAgICAgICAgLy8gLSBOb2RlIGlzIHBhcmVudCBvZiB0YXJnZXQgbm9kZVxuICAgICAgICAgICAgLy8gLSBPciwgcGFyZW50IGlzIGVtcHR5XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb3ZlZF9ub2RlLnBhcmVudC5fcmVtb3ZlQ2hpbGQobW92ZWRfbm9kZSk7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLkFmdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9ub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRfbm9kZS5wYXJlbnQuYWRkQ2hpbGRBdFBvc2l0aW9uKG1vdmVkX25vZGUsIHRhcmdldF9ub2RlLnBhcmVudC5nZXRDaGlsZEluZGV4KHRhcmdldF9ub2RlKSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID09PSBQb3NpdGlvbi5CZWZvcmUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X25vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF9ub2RlLnBhcmVudC5hZGRDaGlsZEF0UG9zaXRpb24obW92ZWRfbm9kZSwgdGFyZ2V0X25vZGUucGFyZW50LmdldENoaWxkSW5kZXgodGFyZ2V0X25vZGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBpbnNpZGUgYXMgZmlyc3QgY2hpbGRcbiAgICAgICAgICAgICAgICB0YXJnZXRfbm9kZS5hZGRDaGlsZEF0UG9zaXRpb24obW92ZWRfbm9kZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qXG4gICAgR2V0IHRoZSB0cmVlIGFzIGRhdGEuXG4gICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKGluY2x1ZGVfcGFyZW50KSB7XG4gICAgICAgIGlmIChpbmNsdWRlX3BhcmVudCA9PT0gdm9pZCAwKSB7IGluY2x1ZGVfcGFyZW50ID0gZmFsc2U7IH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YUZyb21Ob2Rlcyhub2Rlcykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciB0bXBfbm9kZSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoW1wicGFyZW50XCIsIFwiY2hpbGRyZW5cIiwgXCJlbGVtZW50XCIsIFwidHJlZVwiXS5pbmRleE9mKGspID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBub2RlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wX25vZGVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wX25vZGVbXCJjaGlsZHJlblwiXSA9IGdldERhdGFGcm9tTm9kZXMobm9kZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0bXBfbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlX3BhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldERhdGFGcm9tTm9kZXMoW3RoaXNdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXREYXRhRnJvbU5vZGVzKHRoaXMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXROb2RlQnlOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUJ5Q2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGUubmFtZSA9PT0gbmFtZTsgfSk7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXROb2RlQnlDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVyYXRlKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmFkZEFmdGVyID0gZnVuY3Rpb24gKG5vZGVfaW5mbykge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IHRoaXMudHJlZS5ub2RlX2NsYXNzKG5vZGVfaW5mbyk7XG4gICAgICAgICAgICB2YXIgY2hpbGRfaW5kZXggPSB0aGlzLnBhcmVudC5nZXRDaGlsZEluZGV4KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGRBdFBvc2l0aW9uKG5vZGUsIGNoaWxkX2luZGV4ICsgMSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGVfaW5mbyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGVfaW5mb1tcImNoaWxkcmVuXCJdICYmXG4gICAgICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5sb2FkRnJvbURhdGEobm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmFkZEJlZm9yZSA9IGZ1bmN0aW9uIChub2RlX2luZm8pIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyB0aGlzLnRyZWUubm9kZV9jbGFzcyhub2RlX2luZm8pO1xuICAgICAgICAgICAgdmFyIGNoaWxkX2luZGV4ID0gdGhpcy5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmFkZENoaWxkQXRQb3NpdGlvbihub2RlLCBjaGlsZF9pbmRleCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGVfaW5mbyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGVfaW5mb1tcImNoaWxkcmVuXCJdICYmXG4gICAgICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5sb2FkRnJvbURhdGEobm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmFkZFBhcmVudCA9IGZ1bmN0aW9uIChub2RlX2luZm8pIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3X3BhcmVudCA9IG5ldyB0aGlzLnRyZWUubm9kZV9jbGFzcyhub2RlX2luZm8pO1xuICAgICAgICAgICAgbmV3X3BhcmVudC5fc2V0UGFyZW50KHRoaXMudHJlZSk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxfcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gb3JpZ2luYWxfcGFyZW50LmNoaWxkcmVuOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBuZXdfcGFyZW50LmFkZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yaWdpbmFsX3BhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgb3JpZ2luYWxfcGFyZW50LmFkZENoaWxkKG5ld19wYXJlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld19wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKG5vZGVfaW5mbykge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyB0aGlzLnRyZWUubm9kZV9jbGFzcyhub2RlX2luZm8pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICBpZiAodHlwZW9mIG5vZGVfaW5mbyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0gJiZcbiAgICAgICAgICAgIG5vZGVfaW5mb1tcImNoaWxkcmVuXCJdLmxlbmd0aCkge1xuICAgICAgICAgICAgbm9kZS5sb2FkRnJvbURhdGEobm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uIChub2RlX2luZm8pIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgdGhpcy50cmVlLm5vZGVfY2xhc3Mobm9kZV9pbmZvKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZEF0UG9zaXRpb24obm9kZSwgMCk7XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZV9pbmZvID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBub2RlX2luZm9bXCJjaGlsZHJlblwiXSAmJlxuICAgICAgICAgICAgbm9kZV9pbmZvW1wiY2hpbGRyZW5cIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBub2RlLmxvYWRGcm9tRGF0YShub2RlX2luZm9bXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5pc1BhcmVudE9mID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGV2ZWwgPSAwO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgbGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWw7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXROb2RlQnlJZCA9IGZ1bmN0aW9uIChub2RlX2lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkX21hcHBpbmdbbm9kZV9pZF07XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5hZGROb2RlVG9JbmRleCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWRfbWFwcGluZ1tub2RlLmlkXSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLnJlbW92ZU5vZGVGcm9tSW5kZXggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5pZF9tYXBwaW5nW25vZGUuaWRdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pdGVyYXRlKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgX3RoaXMudHJlZS5yZW1vdmVOb2RlRnJvbUluZGV4KGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0UHJldmlvdXNTaWJsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c19pbmRleCA9IHRoaXMucGFyZW50LmdldENoaWxkSW5kZXgodGhpcykgLSAxO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuY2hpbGRyZW5bcHJldmlvdXNfaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmdldE5leHRTaWJsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXh0X2luZGV4ID0gdGhpcy5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0aGlzKSArIDE7XG4gICAgICAgICAgICBpZiAobmV4dF9pbmRleCA8IHRoaXMucGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlbltuZXh0X2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXROb2Rlc0J5UHJvcGVydHkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIG5vZGVba2V5XSA9PT0gdmFsdWU7IH0pO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLml0ZXJhdGUoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChmKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXROZXh0Tm9kZSA9IGZ1bmN0aW9uIChpbmNsdWRlX2NoaWxkcmVuKSB7XG4gICAgICAgIGlmIChpbmNsdWRlX2NoaWxkcmVuID09PSB2b2lkIDApIHsgaW5jbHVkZV9jaGlsZHJlbiA9IHRydWU7IH1cbiAgICAgICAgaWYgKGluY2x1ZGVfY2hpbGRyZW4gJiYgdGhpcy5oYXNDaGlsZHJlbigpICYmIHRoaXMuaXNfb3Blbikge1xuICAgICAgICAgICAgLy8gRmlyc3QgY2hpbGRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRfc2libGluZyA9IHRoaXMuZ2V0TmV4dFNpYmxpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dF9zaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5leHQgc2libGluZ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dF9zaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBub2RlIG9mIHBhcmVudFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0TmV4dE5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0UHJldmlvdXNOb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c19zaWJsaW5nID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmcoKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c19zaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2aW91c19zaWJsaW5nLmhhc0NoaWxkcmVuKCkgfHxcbiAgICAgICAgICAgICAgICAgICAgIXByZXZpb3VzX3NpYmxpbmcuaXNfb3Blbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2aW91cyBzaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c19zaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGFzdCBjaGlsZCBvZiBwcmV2aW91cyBzaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c19zaWJsaW5nLmdldExhc3RDaGlsZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhcmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldHVybiBwYXJlbnQgZXhjZXB0IGlmIGl0IGlzIHRoZSByb290IG5vZGVcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucGFyZW50LnBhcmVudCkge1xuICAgICAgICAgICAgLy8gUm9vdCBub2RlIC0+IG51bGxcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRMYXN0Q2hpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsYXN0X2NoaWxkID0gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKCFsYXN0X2NoaWxkLmhhc0NoaWxkcmVuKCkgfHwgIWxhc3RfY2hpbGQuaXNfb3Blbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0X2NoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RfY2hpbGQuZ2V0TGFzdENoaWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEluaXQgTm9kZSBmcm9tIGRhdGEgd2l0aG91dCBtYWtpbmcgaXQgdGhlIHJvb3Qgb2YgdGhlIHRyZWVcbiAgICBOb2RlLnByb3RvdHlwZS5pbml0RnJvbURhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWRkTm9kZSA9IGZ1bmN0aW9uIChub2RlX2RhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEobm9kZV9kYXRhKTtcbiAgICAgICAgICAgIGlmIChub2RlX2RhdGFbXCJjaGlsZHJlblwiXSkge1xuICAgICAgICAgICAgICAgIGFkZENoaWxkcmVuKG5vZGVfZGF0YVtcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFkZENoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkcmVuX2RhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fZGF0YV8xID0gY2hpbGRyZW5fZGF0YTsgX2kgPCBjaGlsZHJlbl9kYXRhXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fZGF0YV8xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBfdGhpcy50cmVlLm5vZGVfY2xhc3MoXCJcIik7XG4gICAgICAgICAgICAgICAgbm9kZS5pbml0RnJvbURhdGEoY2hpbGQpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhZGROb2RlKGRhdGEpO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuX3NldFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudHJlZSA9IHBhcmVudC50cmVlO1xuICAgICAgICB0aGlzLnRyZWUuYWRkTm9kZVRvSW5kZXgodGhpcyk7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5fcmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZSh0aGlzLmdldENoaWxkSW5kZXgobm9kZSksIDEpO1xuICAgICAgICB0aGlzLnRyZWUucmVtb3ZlTm9kZUZyb21JbmRleChub2RlKTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gaXNJbnQobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gXCJudW1iZXJcIiAmJiBuICUgMSA9PT0gMDtcbn1cbmV4cG9ydHMuaXNJbnQgPSBpc0ludDtcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJmdW5jdGlvblwiO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8vIEVzY2FwZSBhIHN0cmluZyBmb3IgSFRNTCBpbnRlcnBvbGF0aW9uOyBjb3BpZWQgZnJvbSB1bmRlcnNjb3JlIGpzXG5mdW5jdGlvbiBodG1sX2VzY2FwZSh0ZXh0KSB7XG4gICAgcmV0dXJuIChcIlwiICsgdGV4dClcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIiYjeDI3O1wiKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csIFwiJiN4MkY7XCIpO1xufVxuZXhwb3J0cy5odG1sX2VzY2FwZSA9IGh0bWxfZXNjYXBlO1xuZnVuY3Rpb24gZ2V0Qm9vbFN0cmluZyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJ0cnVlXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJmYWxzZVwiO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0Qm9vbFN0cmluZyA9IGdldEJvb2xTdHJpbmc7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFNpbXBsZVdpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVXaWRnZXQoZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZWwgPSAkKGVsKTtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgU2ltcGxlV2lkZ2V0LnJlZ2lzdGVyID0gZnVuY3Rpb24gKHdpZGdldF9jbGFzcywgd2lkZ2V0X25hbWUpIHtcbiAgICAgICAgdmFyIGdldERhdGFLZXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBcInNpbXBsZV93aWRnZXRfXCIgKyB3aWRnZXRfbmFtZTsgfTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0V2lkZ2V0RGF0YShlbCwgZGF0YV9rZXkpIHtcbiAgICAgICAgICAgIHZhciB3aWRnZXQgPSAkLmRhdGEoZWwsIGRhdGFfa2V5KTtcbiAgICAgICAgICAgIGlmICh3aWRnZXQgJiYgd2lkZ2V0IGluc3RhbmNlb2YgU2ltcGxlV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdpZGdldCgkZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBkYXRhX2tleSA9IGdldERhdGFLZXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSAkZWwuZ2V0KCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ193aWRnZXQgPSBnZXRXaWRnZXREYXRhKGVsLCBkYXRhX2tleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZ193aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IG5ldyB3aWRnZXRfY2xhc3MoZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISQuZGF0YShlbCwgZGF0YV9rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmRhdGEoZWwsIGRhdGFfa2V5LCB3aWRnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGwgaW5pdCBhZnRlciBzZXR0aW5nIGRhdGEsIHNvIHdlIGNhbiBjYWxsIG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0Ll9pbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95V2lkZ2V0KCRlbCkge1xuICAgICAgICAgICAgdmFyIGRhdGFfa2V5ID0gZ2V0RGF0YUtleSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICRlbC5nZXQoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IGdldFdpZGdldERhdGEoZWwsIGRhdGFfa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQucmVtb3ZlRGF0YShlbCwgZGF0YV9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxGdW5jdGlvbigkZWwsIGZ1bmN0aW9uX25hbWUsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICRlbC5nZXQoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9ICQuZGF0YShlbCwgZ2V0RGF0YUtleSgpKTtcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0ICYmIHdpZGdldCBpbnN0YW5jZW9mIFNpbXBsZVdpZGdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0X2Z1bmN0aW9uID0gd2lkZ2V0W2Z1bmN0aW9uX25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0X2Z1bmN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygd2lkZ2V0X2Z1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHdpZGdldF9mdW5jdGlvbi5hcHBseSh3aWRnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9ubHktYXJyb3ctZnVuY3Rpb25zXG4gICAgICAgICQuZm5bd2lkZ2V0X25hbWVdID0gZnVuY3Rpb24gKGFyZ3VtZW50MSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAkZWwgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50MSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhcmd1bWVudDEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50MTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlV2lkZ2V0KCRlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQxID09PSBcInN0cmluZ1wiICYmIGFyZ3VtZW50MVswXSAhPT0gXCJfXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnVuY3Rpb25fbmFtZSA9IGFyZ3VtZW50MTtcbiAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb25fbmFtZSA9PT0gXCJkZXN0cm95XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc3Ryb3lXaWRnZXQoJGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZnVuY3Rpb25fbmFtZSA9PT0gXCJnZXRfd2lkZ2V0X2NsYXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldF9jbGFzcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsRnVuY3Rpb24oJGVsLCBmdW5jdGlvbl9uYW1lLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBTaW1wbGVXaWRnZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2RlaW5pdCgpO1xuICAgIH07XG4gICAgU2ltcGxlV2lkZ2V0LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICB9O1xuICAgIFNpbXBsZVdpZGdldC5wcm90b3R5cGUuX2RlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICB9O1xuICAgIFNpbXBsZVdpZGdldC5kZWZhdWx0cyA9IHt9O1xuICAgIHJldHVybiBTaW1wbGVXaWRnZXQ7XG59KCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTaW1wbGVXaWRnZXQ7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdmVyc2lvbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBkcmFnX2FuZF9kcm9wX2hhbmRsZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgZWxlbWVudHNfcmVuZGVyZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIga2V5X2hhbmRsZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgbW91c2Vfd2lkZ2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIHNhdmVfc3RhdGVfaGFuZGxlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBzY3JvbGxfaGFuZGxlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgc2VsZWN0X25vZGVfaGFuZGxlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgc2ltcGxlX3dpZGdldF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBub2RlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgbm9kZV9lbGVtZW50XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBKcVRyZWVXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpxVHJlZVdpZGdldCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKcVRyZWVXaWRnZXQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAobm9kZSwgc2xpZGVfcGFyYW0pIHtcbiAgICAgICAgdmFyIHNsaWRlID0gc2xpZGVfcGFyYW0gPT0gbnVsbCA/IHRoaXMub3B0aW9ucy5zbGlkZSA6IHNsaWRlX3BhcmFtO1xuICAgICAgICBpZiAobm9kZS5pc19vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBzbGlkZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIHNsaWRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5nZXRUcmVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5zZWxlY3ROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0Tm9kZShub2RlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldFNlbGVjdGVkTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS50b0pzb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRyZWUuZ2V0RGF0YSgpKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUubG9hZERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcGFyZW50X25vZGUpIHtcbiAgICAgICAgdGhpcy5fbG9hZERhdGEoZGF0YSwgcGFyZW50X25vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgLypcbiAgICBzaWduYXR1cmVzOlxuICAgIC0gbG9hZERhdGFGcm9tVXJsKHVybCwgcGFyZW50X25vZGU9bnVsbCwgb25fZmluaXNoZWQ9bnVsbClcbiAgICAgICAgbG9hZERhdGFGcm9tVXJsKCcvbXlfZGF0YScpO1xuICAgICAgICBsb2FkRGF0YUZyb21VcmwoJy9teV9kYXRhJywgbm9kZTEpO1xuICAgICAgICBsb2FkRGF0YUZyb21VcmwoJy9teV9kYXRhJywgbm9kZTEsIGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZygnZmluaXNoZWQnKTsgfSk7XG4gICAgICAgIGxvYWREYXRhRnJvbVVybCgnL215X2RhdGEnLCBudWxsLCBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coJ2ZpbmlzaGVkJyk7IH0pO1xuXG4gICAgLSBsb2FkRGF0YUZyb21VcmwocGFyZW50X25vZGU9bnVsbCwgb25fZmluaXNoZWQ9bnVsbClcbiAgICAgICAgbG9hZERhdGFGcm9tVXJsKCk7XG4gICAgICAgIGxvYWREYXRhRnJvbVVybChub2RlMSk7XG4gICAgICAgIGxvYWREYXRhRnJvbVVybChudWxsLCBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coJ2ZpbmlzaGVkJyk7IH0pO1xuICAgICAgICBsb2FkRGF0YUZyb21Vcmwobm9kZTEsIGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZygnZmluaXNoZWQnKTsgfSk7XG4gICAgKi9cbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmxvYWREYXRhRnJvbVVybCA9IGZ1bmN0aW9uIChwYXJhbTEsIHBhcmFtMiwgcGFyYW0zKSB7XG4gICAgICAgIGlmICgkLnR5cGUocGFyYW0xKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgLy8gZmlyc3QgcGFyYW1ldGVyIGlzIHVybFxuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFGcm9tVXJsKHBhcmFtMSwgcGFyYW0yLCBwYXJhbTMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZmlyc3QgcGFyYW1ldGVyIGlzIG5vdCB1cmxcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhRnJvbVVybChudWxsLCBwYXJhbTEsIHBhcmFtMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUucmVsb2FkID0gZnVuY3Rpb24gKG9uX2ZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMuX2xvYWREYXRhRnJvbVVybChudWxsLCBudWxsLCBvbl9maW5pc2hlZCk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldE5vZGVCeUlkID0gZnVuY3Rpb24gKG5vZGVfaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXROb2RlQnlJZChub2RlX2lkKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0Tm9kZUJ5TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZ2V0Tm9kZUJ5TmFtZShuYW1lKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuZ2V0Tm9kZXNCeVByb3BlcnR5ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXROb2Rlc0J5UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldE5vZGVCeUh0bWxFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE5vZGUoJChlbGVtZW50KSk7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldE5vZGVCeUNhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZ2V0Tm9kZUJ5Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5vcGVuTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBwYXJhbTEsIHBhcmFtMikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyc2VQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb25fZmluaXNoZWQ7XG4gICAgICAgICAgICB2YXIgc2xpZGU7XG4gICAgICAgICAgICBpZiAodXRpbF8xLmlzRnVuY3Rpb24ocGFyYW0xKSkge1xuICAgICAgICAgICAgICAgIG9uX2ZpbmlzaGVkID0gcGFyYW0xO1xuICAgICAgICAgICAgICAgIHNsaWRlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNsaWRlID0gcGFyYW0xO1xuICAgICAgICAgICAgICAgIG9uX2ZpbmlzaGVkID0gcGFyYW0yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNsaWRlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzbGlkZSA9IF90aGlzLm9wdGlvbnMuc2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW3NsaWRlLCBvbl9maW5pc2hlZF07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBfYSA9IHBhcnNlUGFyYW1zKCksIHNsaWRlID0gX2FbMF0sIG9uX2ZpbmlzaGVkID0gX2FbMV07XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vcGVuTm9kZShub2RlLCBzbGlkZSwgb25fZmluaXNoZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmNsb3NlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBzbGlkZV9wYXJhbSkge1xuICAgICAgICB2YXIgc2xpZGUgPSBzbGlkZV9wYXJhbSA9PSBudWxsID8gdGhpcy5vcHRpb25zLnNsaWRlIDogc2xpZGVfcGFyYW07XG4gICAgICAgIGlmIChub2RlLmlzRm9sZGVyKCkpIHtcbiAgICAgICAgICAgIG5ldyBub2RlX2VsZW1lbnRfMS5Gb2xkZXJFbGVtZW50KG5vZGUsIHRoaXMpLmNsb3NlKHNsaWRlLCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5fc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRuZF9oYW5kbGVyLmlzX2RyYWdnaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnJlZnJlc2hIaXRBcmVhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG5kX2hhbmRsZXIucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmFkZE5vZGVBZnRlciA9IGZ1bmN0aW9uIChuZXdfbm9kZV9pbmZvLCBleGlzdGluZ19ub2RlKSB7XG4gICAgICAgIHZhciBuZXdfbm9kZSA9IGV4aXN0aW5nX25vZGUuYWRkQWZ0ZXIobmV3X25vZGVfaW5mbyk7XG4gICAgICAgIGlmIChuZXdfbm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKGV4aXN0aW5nX25vZGUucGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3X25vZGU7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmFkZE5vZGVCZWZvcmUgPSBmdW5jdGlvbiAobmV3X25vZGVfaW5mbywgZXhpc3Rpbmdfbm9kZSkge1xuICAgICAgICB2YXIgbmV3X25vZGUgPSBleGlzdGluZ19ub2RlLmFkZEJlZm9yZShuZXdfbm9kZV9pbmZvKTtcbiAgICAgICAgaWYgKG5ld19ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMoZXhpc3Rpbmdfbm9kZS5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdfbm9kZTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuYWRkUGFyZW50Tm9kZSA9IGZ1bmN0aW9uIChuZXdfbm9kZV9pbmZvLCBleGlzdGluZ19ub2RlKSB7XG4gICAgICAgIHZhciBuZXdfbm9kZSA9IGV4aXN0aW5nX25vZGUuYWRkUGFyZW50KG5ld19ub2RlX2luZm8pO1xuICAgICAgICBpZiAobmV3X25vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhuZXdfbm9kZS5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdfbm9kZTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUucmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudCAmJiB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5yZW1vdmVGcm9tU2VsZWN0aW9uKG5vZGUsIHRydWUpOyAvLyBpbmNsdWRpbmcgY2hpbGRyZW5cbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMobm9kZS5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmFwcGVuZE5vZGUgPSBmdW5jdGlvbiAobmV3X25vZGVfaW5mbywgcGFyZW50X25vZGVfcGFyYW0pIHtcbiAgICAgICAgdmFyIHBhcmVudF9ub2RlID0gcGFyZW50X25vZGVfcGFyYW0gfHwgdGhpcy50cmVlO1xuICAgICAgICB2YXIgbm9kZSA9IHBhcmVudF9ub2RlLmFwcGVuZChuZXdfbm9kZV9pbmZvKTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKHBhcmVudF9ub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnByZXBlbmROb2RlID0gZnVuY3Rpb24gKG5ld19ub2RlX2luZm8sIHBhcmVudF9ub2RlX3BhcmFtKSB7XG4gICAgICAgIHZhciBwYXJlbnRfbm9kZSA9ICFwYXJlbnRfbm9kZV9wYXJhbSA/IHRoaXMudHJlZSA6IHBhcmVudF9ub2RlX3BhcmFtO1xuICAgICAgICB2YXIgbm9kZSA9IHBhcmVudF9ub2RlLnByZXBlbmQobmV3X25vZGVfaW5mbyk7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhwYXJlbnRfbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS51cGRhdGVOb2RlID0gZnVuY3Rpb24gKG5vZGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIGlkX2lzX2NoYW5nZWQgPSBkYXRhLmlkICYmIGRhdGEuaWQgIT09IG5vZGUuaWQ7XG4gICAgICAgIGlmIChpZF9pc19jaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWUucmVtb3ZlTm9kZUZyb21JbmRleChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldERhdGEoZGF0YSk7XG4gICAgICAgIGlmIChpZF9pc19jaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWUuYWRkTm9kZVRvSW5kZXgobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUubG9hZEZyb21EYXRhKGRhdGEuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRnJvbU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdEN1cnJlbnROb2RlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLm1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUsIHRhcmdldF9ub2RlLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgcG9zaXRpb25faW5kZXggPSBub2RlXzEuZ2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB0aGlzLnRyZWUubW92ZU5vZGUobm9kZSwgdGFyZ2V0X25vZGUsIHBvc2l0aW9uX2luZGV4KTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5nZXRTdGF0ZUZyb21TdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVfc3RhdGVfaGFuZGxlci5nZXRTdGF0ZUZyb21TdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuYWRkVG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSAmJiB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5hZGRUb1NlbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2dldE5vZGVFbGVtZW50Rm9yTm9kZShub2RlKS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldFNlbGVjdGVkTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmdldFNlbGVjdGVkTm9kZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5pc05vZGVTZWxlY3RlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyLmlzTm9kZVNlbGVjdGVkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnJlbW92ZUZyb21TZWxlY3Rpb24gPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIucmVtb3ZlRnJvbVNlbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2dldE5vZGVFbGVtZW50Rm9yTm9kZShub2RlKS5kZXNlbGVjdCgpO1xuICAgICAgICAgICAgdGhpcy5fc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuc2Nyb2xsVG9Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQobm9kZS5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciB0b3BfMSA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIHRoaXMuJGVsLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2hhbmRsZXIuc2Nyb2xsVG8odG9wXzEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVfc3RhdGVfaGFuZGxlci5nZXRTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnNhdmVfc3RhdGVfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIuc2V0SW5pdGlhbFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5zZXRPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5X2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMua2V5X2hhbmRsZXIubW92ZURvd24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleV9oYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmtleV9oYW5kbGVyLm1vdmVVcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLmdldFZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uXzFbXCJkZWZhdWx0XCJdO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS50ZXN0R2VuZXJhdGVIaXRBcmVhcyA9IGZ1bmN0aW9uIChtb3Zpbmdfbm9kZSkge1xuICAgICAgICBpZiAoIXRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG5kX2hhbmRsZXIuY3VycmVudF9pdGVtID0gdGhpcy5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKG1vdmluZ19ub2RlKTtcbiAgICAgICAgICAgIHRoaXMuZG5kX2hhbmRsZXIuZ2VuZXJhdGVIaXRBcmVhcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG5kX2hhbmRsZXIuaGl0X2FyZWFzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl90cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfbmFtZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciBldmVudCA9ICQuRXZlbnQoZXZlbnRfbmFtZSk7XG4gICAgICAgICQuZXh0ZW5kKGV2ZW50LCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQudHJpZ2dlcihldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX29wZW5Ob2RlID0gZnVuY3Rpb24gKG5vZGUsIHNsaWRlLCBvbl9maW5pc2hlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2xpZGUgPT09IHZvaWQgMCkgeyBzbGlkZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIGRvT3Blbk5vZGUgPSBmdW5jdGlvbiAoX25vZGUsIF9zbGlkZSwgX29uX2ZpbmlzaGVkKSB7XG4gICAgICAgICAgICB2YXIgZm9sZGVyX2VsZW1lbnQgPSBuZXcgbm9kZV9lbGVtZW50XzEuRm9sZGVyRWxlbWVudChfbm9kZSwgX3RoaXMpO1xuICAgICAgICAgICAgZm9sZGVyX2VsZW1lbnQub3Blbihfb25fZmluaXNoZWQsIF9zbGlkZSwgX3RoaXMub3B0aW9ucy5hbmltYXRpb25TcGVlZCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChub2RlLmlzRm9sZGVyKCkpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxvYWRfb25fZGVtYW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEZvbGRlck9uRGVtYW5kKG5vZGUsIHNsaWRlLCBvbl9maW5pc2hlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50XzEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmI6IGRvIG5vdCBvcGVuIHJvb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50XzEucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb09wZW5Ob2RlKHBhcmVudF8xLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50XzEgPSBwYXJlbnRfMS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvT3Blbk5vZGUobm9kZSwgc2xpZGUsIG9uX2ZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLypcbiAgICBSZWRyYXcgdGhlIHRyZWUgb3IgcGFydCBvZiB0aGUgdHJlZS5cbiAgICAgZnJvbV9ub2RlOiByZWRyYXcgdGhpcyBzdWJ0cmVlXG4gICAgKi9cbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9yZWZyZXNoRWxlbWVudHMgPSBmdW5jdGlvbiAoZnJvbV9ub2RlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGZyb21fbm9kZSk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudChcInRyZWUucmVmcmVzaFwiKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2dldE5vZGVFbGVtZW50Rm9yTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlzRm9sZGVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgbm9kZV9lbGVtZW50XzEuRm9sZGVyRWxlbWVudChub2RlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgbm9kZV9lbGVtZW50XzEuTm9kZUVsZW1lbnQobm9kZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2dldE5vZGVFbGVtZW50ID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fZ2V0Tm9kZSgkZWxlbWVudCk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2NvbnRhaW5zRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fZ2V0Tm9kZSgkKGVsZW1lbnQpKTtcbiAgICAgICAgcmV0dXJuIG5vZGUgIT0gbnVsbCAmJiBub2RlLnRyZWUgPT09IHRoaXMudHJlZTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy4kZWw7XG4gICAgICAgIHRoaXMubW91c2VfZGVsYXkgPSAzMDA7XG4gICAgICAgIHRoaXMuaXNfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnJ0bCA9IHRoaXMuX2dldFJ0bE9wdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlZEljb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jbG9zZWRJY29uID0gdGhpcy5fZ2V0RGVmYXVsdENsb3NlZEljb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IGVsZW1lbnRzX3JlbmRlcmVyXzFbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgICAgICBpZiAoc2F2ZV9zdGF0ZV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyID0gbmV3IHNhdmVfc3RhdGVfaGFuZGxlcl8xW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zYXZlU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0X25vZGVfaGFuZGxlcl8xW1wiZGVmYXVsdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIgPSBuZXcgc2VsZWN0X25vZGVfaGFuZGxlcl8xW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ19hbmRfZHJvcF9oYW5kbGVyXzEuRHJhZ0FuZERyb3BIYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZG5kX2hhbmRsZXIgPSBuZXcgZHJhZ19hbmRfZHJvcF9oYW5kbGVyXzEuRHJhZ0FuZERyb3BIYW5kbGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRyYWdBbmREcm9wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjcm9sbF9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2hhbmRsZXIgPSBuZXcgc2Nyb2xsX2hhbmRsZXJfMVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdICE9IG51bGwgJiYgc2VsZWN0X25vZGVfaGFuZGxlcl8xW1wiZGVmYXVsdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmtleV9oYW5kbGVyID0gbmV3IGtleV9oYW5kbGVyXzFbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luaXREYXRhKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGljaygkLnByb3h5KHRoaXMuX2NsaWNrLCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kYmxjbGljaygkLnByb3h5KHRoaXMuX2RibGNsaWNrLCB0aGlzKSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlQ29udGV4dE1lbnUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbihcImNvbnRleHRtZW51XCIsICQucHJveHkodGhpcy5fY29udGV4dG1lbnUsIHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9mZigpO1xuICAgICAgICBpZiAodGhpcy5rZXlfaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5rZXlfaGFuZGxlci5kZWluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZWUgPSBuZXcgbm9kZV8xLk5vZGUoe30sIHRydWUpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9kZWluaXQuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX21vdXNlQ2FwdHVyZSA9IGZ1bmN0aW9uIChwb3NpdGlvbl9pbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJhZ0FuZERyb3AgJiYgdGhpcy5kbmRfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG5kX2hhbmRsZXIubW91c2VDYXB0dXJlKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9tb3VzZVN0YXJ0ID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcmFnQW5kRHJvcCAmJiB0aGlzLmRuZF9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kbmRfaGFuZGxlci5tb3VzZVN0YXJ0KHBvc2l0aW9uX2luZm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9tb3VzZURyYWcgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdBbmREcm9wICYmIHRoaXMuZG5kX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmRuZF9oYW5kbGVyLm1vdXNlRHJhZyhwb3NpdGlvbl9pbmZvKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbF9oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxfaGFuZGxlci5jaGVja1Njcm9sbGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fbW91c2VTdG9wID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcmFnQW5kRHJvcCAmJiB0aGlzLmRuZF9oYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kbmRfaGFuZGxlci5tb3VzZVN0b3AocG9zaXRpb25faW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2luaXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhKHRoaXMub3B0aW9ucy5kYXRhLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IHRoaXMuX2dldERhdGFVcmxJbmZvKG51bGwpO1xuICAgICAgICAgICAgaWYgKGRhdGFfdXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFGcm9tVXJsKG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZERhdGEoW10sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9nZXREYXRhVXJsSW5mbyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhX3VybCA9IHRoaXMub3B0aW9ucy5kYXRhVXJsIHx8IHRoaXMuZWxlbWVudC5kYXRhKFwidXJsXCIpO1xuICAgICAgICB2YXIgZ2V0VXJsRnJvbVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cmxfaW5mbyA9IHsgdXJsOiBkYXRhX3VybCB9O1xuICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgb24gZGVtYW5kIG9mIGEgc3VidHJlZTsgYWRkIG5vZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IG5vZGU6IG5vZGUuaWQgfTtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgICAgICAgICAgICAgdXJsX2luZm9bXCJkYXRhXCJdID0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBzZWxlY3RlZF9ub2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZF9ub2RlX2lkID0gX3RoaXMuX2dldE5vZGVJZFRvQmVTZWxlY3RlZCgpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9ub2RlX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0geyBzZWxlY3RlZF9ub2RlOiBzZWxlY3RlZF9ub2RlX2lkIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgICAgICAgICAgICAgICAgdXJsX2luZm9bXCJkYXRhXCJdID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXJsX2luZm87XG4gICAgICAgIH07XG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oZGF0YV91cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV91cmwobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJC50eXBlKGRhdGFfdXJsKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGdldFVybEZyb21TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX3VybDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0Tm9kZUlkVG9CZVNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVTdGF0ZSAmJiB0aGlzLnNhdmVfc3RhdGVfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLmdldE5vZGVJZFRvQmVTZWxlY3RlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2luaXRUcmVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRvSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3RyaWdnZXJFdmVudChcInRyZWUuaW5pdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmVlID0gbmV3IHRoaXMub3B0aW9ucy5ub2RlQ2xhc3MobnVsbCwgdHJ1ZSwgdGhpcy5vcHRpb25zLm5vZGVDbGFzcyk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJlZS5sb2FkRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIHZhciBtdXN0X2xvYWRfb25fZGVtYW5kID0gdGhpcy5fc2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhudWxsKTtcbiAgICAgICAgaWYgKCFtdXN0X2xvYWRfb25fZGVtYW5kKSB7XG4gICAgICAgICAgICBkb0luaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvYWQgZGF0YSBvbiBkZW1hbmQgYW5kIHRoZW4gaW5pdCB0aGUgdHJlZVxuICAgICAgICAgICAgdGhpcy5fc2V0SW5pdGlhbFN0YXRlT25EZW1hbmQoZG9Jbml0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU2V0IGluaXRpYWwgc3RhdGUsIGVpdGhlciBieSByZXN0b3JpbmcgdGhlIHN0YXRlIG9yIGF1dG8tb3BlbmluZyBub2Rlc1xuICAgIC8vIHJlc3VsdDogbXVzdCBsb2FkIG5vZGVzIG9uIGRlbWFuZD9cbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9zZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXN0b3JlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZXN1bHQ6IGlzIHN0YXRlIHJlc3RvcmVkLCBtdXN0IGxvYWQgb24gZGVtYW5kP1xuICAgICAgICAgICAgaWYgKCEoX3RoaXMub3B0aW9ucy5zYXZlU3RhdGUgJiYgX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbZmFsc2UsIGZhbHNlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnNhdmVfc3RhdGVfaGFuZGxlci5nZXRTdGF0ZUZyb21TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ZhbHNlLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXVzdF9sb2FkX29uX2RlbWFuZF8xID0gX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLnNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0cnVlOiB0aGUgc3RhdGUgaXMgcmVzdG9yZWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCBtdXN0X2xvYWRfb25fZGVtYW5kXzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGF1dG9PcGVuTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZXN1bHQ6IG11c3QgbG9hZCBvbiBkZW1hbmQ/XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5hdXRvT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWF4X2xldmVsID0gX3RoaXMuX2dldEF1dG9PcGVuTWF4TGV2ZWwoKTtcbiAgICAgICAgICAgIHZhciBtdXN0X2xvYWRfb25fZGVtYW5kID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy50cmVlLml0ZXJhdGUoZnVuY3Rpb24gKG5vZGUsIGxldmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubG9hZF9vbl9kZW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXVzdF9sb2FkX29uX2RlbWFuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlzX29wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV2ZWwgIT09IG1heF9sZXZlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtdXN0X2xvYWRfb25fZGVtYW5kO1xuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxuICAgICAgICB2YXIgX2EgPSByZXN0b3JlU3RhdGUoKSwgaXNfcmVzdG9yZWQgPSBfYVswXSwgbXVzdF9sb2FkX29uX2RlbWFuZCA9IF9hWzFdO1xuICAgICAgICBpZiAoIWlzX3Jlc3RvcmVkKSB7XG4gICAgICAgICAgICBtdXN0X2xvYWRfb25fZGVtYW5kID0gYXV0b09wZW5Ob2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdXN0X2xvYWRfb25fZGVtYW5kO1xuICAgIH07XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHN0YXRlIGZvciBub2RlcyB0aGF0IGFyZSBsb2FkZWQgb24gZGVtYW5kXG4gICAgLy8gQ2FsbCBjYl9maW5pc2hlZCB3aGVuIGRvbmVcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9zZXRJbml0aWFsU3RhdGVPbkRlbWFuZCA9IGZ1bmN0aW9uIChjYl9maW5pc2hlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzdG9yZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEoX3RoaXMub3B0aW9ucy5zYXZlU3RhdGUgJiYgX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnNhdmVfc3RhdGVfaGFuZGxlci5nZXRTdGF0ZUZyb21TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIuc2V0SW5pdGlhbFN0YXRlT25EZW1hbmQoc3RhdGUsIGNiX2ZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYXV0b09wZW5Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXhfbGV2ZWwgPSBfdGhpcy5fZ2V0QXV0b09wZW5NYXhMZXZlbCgpO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmdfY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGxvYWRBbmRPcGVuTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ19jb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIF90aGlzLl9vcGVuTm9kZShub2RlLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nX2NvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Ob2RlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvcGVuTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJlZS5pdGVyYXRlKGZ1bmN0aW9uIChub2RlLCBsZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sb2FkX29uX2RlbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLmlzX2xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQW5kT3Blbk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3Blbk5vZGUobm9kZSwgZmFsc2UsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldmVsICE9PSBtYXhfbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAobG9hZGluZ19jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjYl9maW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvcGVuTm9kZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFyZXN0b3JlU3RhdGUoKSkge1xuICAgICAgICAgICAgYXV0b09wZW5Ob2RlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9nZXRBdXRvT3Blbk1heExldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5vcHRpb25zLmF1dG9PcGVuLCAxMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2NsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGNsaWNrX3RhcmdldCA9IHRoaXMuX2dldENsaWNrVGFyZ2V0KGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKGNsaWNrX3RhcmdldCkge1xuICAgICAgICAgICAgaWYgKGNsaWNrX3RhcmdldC50eXBlID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoY2xpY2tfdGFyZ2V0Lm5vZGUsIHRoaXMub3B0aW9ucy5zbGlkZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjbGlja190YXJnZXQudHlwZSA9PT0gXCJsYWJlbFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBjbGlja190YXJnZXQubm9kZTtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRfMSA9IHRoaXMuX3RyaWdnZXJFdmVudChcInRyZWUuY2xpY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja19ldmVudDogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRfMS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3ROb2RlKG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZGJsY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY2xpY2tfdGFyZ2V0ID0gdGhpcy5fZ2V0Q2xpY2tUYXJnZXQoZS50YXJnZXQpO1xuICAgICAgICBpZiAoY2xpY2tfdGFyZ2V0ICYmIGNsaWNrX3RhcmdldC50eXBlID09PSBcImxhYmVsXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudChcInRyZWUuZGJsY2xpY2tcIiwge1xuICAgICAgICAgICAgICAgIG5vZGU6IGNsaWNrX3RhcmdldC5ub2RlLFxuICAgICAgICAgICAgICAgIGNsaWNrX2V2ZW50OiBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0Q2xpY2tUYXJnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZWxlbWVudCk7XG4gICAgICAgIHZhciAkYnV0dG9uID0gJHRhcmdldC5jbG9zZXN0KFwiLmpxdHJlZS10b2dnbGVyXCIpO1xuICAgICAgICBpZiAoJGJ1dHRvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5fZ2V0Tm9kZSgkYnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgJGVsID0gJHRhcmdldC5jbG9zZXN0KFwiLmpxdHJlZS1lbGVtZW50XCIpO1xuICAgICAgICAgICAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX2dldE5vZGUoJGVsKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2dldE5vZGUgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICRsaSA9ICRlbGVtZW50LmNsb3Nlc3QoXCJsaS5qcXRyZWVfY29tbW9uXCIpO1xuICAgICAgICBpZiAoJGxpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJGxpLmRhdGEoXCJub2RlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9jb250ZXh0bWVudSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciAkZGl2ID0gJChlLnRhcmdldCkuY2xvc2VzdChcInVsLmpxdHJlZS10cmVlIC5qcXRyZWUtZWxlbWVudFwiKTtcbiAgICAgICAgaWYgKCRkaXYubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX2dldE5vZGUoJGRpdik7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudChcInRyZWUuY29udGV4dG1lbnVcIiwge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja19ldmVudDogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3NhdmVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYXZlU3RhdGUgJiYgdGhpcy5zYXZlX3N0YXRlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLnNhdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9zZWxlY3RDdXJyZW50Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIG5vZGVfZWxlbWVudCA9IHRoaXMuX2dldE5vZGVFbGVtZW50Rm9yTm9kZShub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlX2VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBub2RlX2VsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2Rlc2VsZWN0Q3VycmVudE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVNlbGVjdGlvbihub2RlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0RGVmYXVsdENsb3NlZEljb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG4gICAgICAgICAgICAvLyB0cmlhbmdsZSB0byB0aGUgbGVmdFxuICAgICAgICAgICAgcmV0dXJuIFwiJiN4MjVjMDtcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRyaWFuZ2xlIHRvIHRoZSByaWdodFxuICAgICAgICAgICAgcmV0dXJuIFwiJiN4MjViYTtcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fZ2V0UnRsT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJ0bCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJ0bDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRhX3J0bCA9IHRoaXMuZWxlbWVudC5kYXRhKFwicnRsXCIpO1xuICAgICAgICAgICAgaWYgKGRhdGFfcnRsICE9IG51bGwgJiYgZGF0YV9ydGwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX25vdGlmeUxvYWRpbmcgPSBmdW5jdGlvbiAoaXNfbG9hZGluZywgbm9kZSwgJGVsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25Mb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25Mb2FkaW5nKGlzX2xvYWRpbmcsIG5vZGUsICRlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX3NlbGVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSwgbXVzdF90b2dnbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG11c3RfdG9nZ2xlID09PSB2b2lkIDApIHsgbXVzdF90b2dnbGUgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0X25vZGVfaGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW5TZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5vbkNhblNlbGVjdE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF90aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSAmJlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zLm9uQ2FuU2VsZWN0Tm9kZShub2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5zZWxlY3RhYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlblBhcmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQgJiYgIXBhcmVudC5pc19vcGVuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3Blbk5vZGUocGFyZW50LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzYXZlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zYXZlU3RhdGUgJiYgX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2F2ZV9zdGF0ZV9oYW5kbGVyLnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIC8vIENhbGxlZCB3aXRoIGVtcHR5IG5vZGUgLT4gZGVzZWxlY3QgY3VycmVudCBub2RlXG4gICAgICAgICAgICB0aGlzLl9kZXNlbGVjdEN1cnJlbnROb2RlKCk7XG4gICAgICAgICAgICBzYXZlU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhblNlbGVjdCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5pc05vZGVTZWxlY3RlZChub2RlKSkge1xuICAgICAgICAgICAgaWYgKG11c3RfdG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzZWxlY3RDdXJyZW50Tm9kZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudChcInRyZWUuc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfbm9kZTogbm9kZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRlc2VsZWN0ZWRfbm9kZSA9IHRoaXMuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICAgICAgICB0aGlzLl9kZXNlbGVjdEN1cnJlbnROb2RlKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFRvU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgZGVzZWxlY3RlZF9ub2RlOiBkZXNlbGVjdGVkX25vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3BlblBhcmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlU3RhdGUoKTtcbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2xvYWREYXRhID0gZnVuY3Rpb24gKGRhdGEsIHBhcmVudF9ub2RlKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckV2ZW50KFwidHJlZS5sb2FkX2RhdGFcIiwgeyB0cmVlX2RhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICBpZiAocGFyZW50X25vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXNlbGVjdE5vZGVzKHBhcmVudF9ub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU3VidHJlZShkYXRhLCBwYXJlbnRfbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0VHJlZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSAmJiB0aGlzLmRuZF9oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kbmRfaGFuZGxlci5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpxVHJlZVdpZGdldC5wcm90b3R5cGUuX2Rlc2VsZWN0Tm9kZXMgPSBmdW5jdGlvbiAocGFyZW50X25vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlcikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX25vZGVzX3VuZGVyX3BhcmVudCA9IHRoaXMuc2VsZWN0X25vZGVfaGFuZGxlci5nZXRTZWxlY3RlZE5vZGVzVW5kZXIocGFyZW50X25vZGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBzZWxlY3RlZF9ub2Rlc191bmRlcl9wYXJlbnRfMSA9IHNlbGVjdGVkX25vZGVzX3VuZGVyX3BhcmVudDsgX2kgPCBzZWxlY3RlZF9ub2Rlc191bmRlcl9wYXJlbnRfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHNlbGVjdGVkX25vZGVzX3VuZGVyX3BhcmVudF8xW19pXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdF9ub2RlX2hhbmRsZXIucmVtb3ZlRnJvbVNlbGVjdGlvbihuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LnByb3RvdHlwZS5fbG9hZFN1YnRyZWUgPSBmdW5jdGlvbiAoZGF0YSwgcGFyZW50X25vZGUpIHtcbiAgICAgICAgcGFyZW50X25vZGUubG9hZEZyb21EYXRhKGRhdGEpO1xuICAgICAgICBwYXJlbnRfbm9kZS5sb2FkX29uX2RlbWFuZCA9IGZhbHNlO1xuICAgICAgICBwYXJlbnRfbm9kZS5pc19sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hFbGVtZW50cyhwYXJlbnRfbm9kZSk7XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9sb2FkRGF0YUZyb21VcmwgPSBmdW5jdGlvbiAodXJsX2luZm9fcGFyYW0sIHBhcmVudF9ub2RlLCBvbl9maW5pc2hlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgJGVsID0gbnVsbDtcbiAgICAgICAgdmFyIHVybF9pbmZvID0gdXJsX2luZm9fcGFyYW07XG4gICAgICAgIHZhciBhZGRMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkZWwgPSBwYXJlbnRfbm9kZSA/ICQocGFyZW50X25vZGUuZWxlbWVudCkgOiBfdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgJGVsLmFkZENsYXNzKFwianF0cmVlLWxvYWRpbmdcIik7XG4gICAgICAgICAgICBfdGhpcy5fbm90aWZ5TG9hZGluZyh0cnVlLCBwYXJlbnRfbm9kZSwgJGVsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlbW92ZUxvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkZWwpIHtcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoXCJqcXRyZWUtbG9hZGluZ1wiKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbm90aWZ5TG9hZGluZyhmYWxzZSwgcGFyZW50X25vZGUsICRlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJzZVVybEluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJC50eXBlKHVybF9pbmZvKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHVybDogdXJsX2luZm8gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdXJsX2luZm8ubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgdXJsX2luZm8ubWV0aG9kID0gXCJnZXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmxfaW5mbztcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbmRlTG9hZERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgcmVtb3ZlTG9hZGluZ0NsYXNzKCk7XG4gICAgICAgICAgICBfdGhpcy5fbG9hZERhdGEoZGF0YSwgcGFyZW50X25vZGUpO1xuICAgICAgICAgICAgaWYgKG9uX2ZpbmlzaGVkICYmICQuaXNGdW5jdGlvbihvbl9maW5pc2hlZCkpIHtcbiAgICAgICAgICAgICAgICBvbl9maW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0RGF0YUZyb21SZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuICQuaXNBcnJheShyZXNwb25zZSkgfHwgdHlwZW9mIHJlc3BvbnNlID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgPyByZXNwb25zZVxuICAgICAgICAgICAgICAgIDogcmVzcG9uc2UgIT0gbnVsbCA/ICQucGFyc2VKU09OKHJlc3BvbnNlKSA6IFtdO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZmlsdGVyRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5kYXRhRmlsdGVyID8gX3RoaXMub3B0aW9ucy5kYXRhRmlsdGVyKGRhdGEpIDogZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbmRsZVN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZmlsdGVyRGF0YShnZXREYXRhRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICBoYW5kZUxvYWREYXRhKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlbW92ZUxvYWRpbmdDbGFzcygpO1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMub25Mb2FkRmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5vbkxvYWRGYWlsZWQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbG9hZERhdGFGcm9tVXJsSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdXJsX2luZm8gPSBwYXJzZVVybEluZm8oKTtcbiAgICAgICAgICAgICQuYWpheCgkLmV4dGVuZCh7fSwgX3VybF9pbmZvLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiB1cmxfaW5mby5tZXRob2QgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IHVybF9pbmZvLm1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGhhbmRsZVN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGhhbmRsZUVycm9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghdXJsX2luZm9fcGFyYW0pIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHVybCBmb3Igbm9kZVxuICAgICAgICAgICAgdXJsX2luZm8gPSB0aGlzLl9nZXREYXRhVXJsSW5mbyhwYXJlbnRfbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkTG9hZGluZ0NsYXNzKCk7XG4gICAgICAgIGlmICghdXJsX2luZm8pIHtcbiAgICAgICAgICAgIHJlbW92ZUxvYWRpbmdDbGFzcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCQuaXNBcnJheSh1cmxfaW5mbykpIHtcbiAgICAgICAgICAgIGhhbmRlTG9hZERhdGEodXJsX2luZm8pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9hZERhdGFGcm9tVXJsSW5mbygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKcVRyZWVXaWRnZXQucHJvdG90eXBlLl9sb2FkRm9sZGVyT25EZW1hbmQgPSBmdW5jdGlvbiAobm9kZSwgc2xpZGUsIG9uX2ZpbmlzaGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzbGlkZSA9PT0gdm9pZCAwKSB7IHNsaWRlID0gdHJ1ZTsgfVxuICAgICAgICBub2RlLmlzX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sb2FkRGF0YUZyb21VcmwobnVsbCwgbm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX29wZW5Ob2RlKG5vZGUsIHNsaWRlLCBvbl9maW5pc2hlZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSnFUcmVlV2lkZ2V0LmRlZmF1bHRzID0ge1xuICAgICAgICBhbmltYXRpb25TcGVlZDogXCJmYXN0XCIsXG4gICAgICAgIGF1dG9PcGVuOiBmYWxzZSxcbiAgICAgICAgc2F2ZVN0YXRlOiBmYWxzZSxcbiAgICAgICAgZHJhZ0FuZERyb3A6IGZhbHNlLFxuICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICB1c2VDb250ZXh0TWVudTogdHJ1ZSxcbiAgICAgICAgb25DYW5TZWxlY3ROb2RlOiBudWxsLFxuICAgICAgICBvblNldFN0YXRlRnJvbVN0b3JhZ2U6IG51bGwsXG4gICAgICAgIG9uR2V0U3RhdGVGcm9tU3RvcmFnZTogbnVsbCxcbiAgICAgICAgb25DcmVhdGVMaTogbnVsbCxcbiAgICAgICAgb25Jc01vdmVIYW5kbGU6IG51bGwsXG4gICAgICAgIC8vIENhbiB0aGlzIG5vZGUgYmUgbW92ZWQ/XG4gICAgICAgIG9uQ2FuTW92ZTogbnVsbCxcbiAgICAgICAgLy8gQ2FuIHRoaXMgbm9kZSBiZSBtb3ZlZCB0byB0aGlzIHBvc2l0aW9uPyBmdW5jdGlvbihtb3ZlZF9ub2RlLCB0YXJnZXRfbm9kZSwgcG9zaXRpb24pXG4gICAgICAgIG9uQ2FuTW92ZVRvOiBudWxsLFxuICAgICAgICBvbkxvYWRGYWlsZWQ6IG51bGwsXG4gICAgICAgIGF1dG9Fc2NhcGU6IHRydWUsXG4gICAgICAgIGRhdGFVcmw6IG51bGwsXG4gICAgICAgIC8vIFRoZSBzeW1ib2wgdG8gdXNlIGZvciBhIGNsb3NlZCBub2RlIC0g4pa6IEJMQUNLIFJJR0hULVBPSU5USU5HIFBPSU5URVJcbiAgICAgICAgLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NoYXIvMjViYS9pbmRleC5odG1cbiAgICAgICAgY2xvc2VkSWNvbjogbnVsbCxcbiAgICAgICAgLy8gVGhlIHN5bWJvbCB0byB1c2UgZm9yIGFuIG9wZW4gbm9kZSAtIOKWvCBCTEFDSyBET1dOLVBPSU5USU5HIFRSSUFOR0xFXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jaGFyLzI1YmMvaW5kZXguaHRtXG4gICAgICAgIG9wZW5lZEljb246IFwiJiN4MjViYztcIixcbiAgICAgICAgc2xpZGU6IHRydWUsXG4gICAgICAgIG5vZGVDbGFzczogbm9kZV8xLk5vZGUsXG4gICAgICAgIGRhdGFGaWx0ZXI6IG51bGwsXG4gICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgb3BlbkZvbGRlckRlbGF5OiA1MDAsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgIG9uRHJhZ01vdmU6IG51bGwsXG4gICAgICAgIG9uRHJhZ1N0b3A6IG51bGwsXG4gICAgICAgIGJ1dHRvbkxlZnQ6IHRydWUsXG4gICAgICAgIG9uTG9hZGluZzogbnVsbCxcbiAgICAgICAgdGFiSW5kZXg6IDBcbiAgICB9O1xuICAgIHJldHVybiBKcVRyZWVXaWRnZXQ7XG59KG1vdXNlX3dpZGdldF8xW1wiZGVmYXVsdFwiXSkpO1xuc2ltcGxlX3dpZGdldF8xW1wiZGVmYXVsdFwiXS5yZWdpc3RlcihKcVRyZWVXaWRnZXQsIFwidHJlZVwiKTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdmVyc2lvbiA9IFwiMS40LjNcIjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdmVyc2lvbjtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBub2RlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIHV0aWxfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgRHJhZ0FuZERyb3BIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERyYWdBbmREcm9wSGFuZGxlcih0cmVlX3dpZGdldCkge1xuICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0ID0gdHJlZV93aWRnZXQ7XG4gICAgICAgIHRoaXMuaG92ZXJlZF9hcmVhID0gbnVsbDtcbiAgICAgICAgdGhpcy4kZ2hvc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmhpdF9hcmVhcyA9IFtdO1xuICAgICAgICB0aGlzLmlzX2RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudF9pdGVtID0gbnVsbDtcbiAgICB9XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tb3VzZUNhcHR1cmUgPSBmdW5jdGlvbiAocG9zaXRpb25faW5mbykge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHBvc2l0aW9uX2luZm8udGFyZ2V0KTtcbiAgICAgICAgaWYgKCF0aGlzLm11c3RDYXB0dXJlRWxlbWVudCgkZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25Jc01vdmVIYW5kbGUgJiZcbiAgICAgICAgICAgICF0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25Jc01vdmVIYW5kbGUoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZV9lbGVtZW50ID0gdGhpcy50cmVlX3dpZGdldC5fZ2V0Tm9kZUVsZW1lbnQoJGVsZW1lbnQpO1xuICAgICAgICBpZiAobm9kZV9lbGVtZW50ICYmIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbkNhbk1vdmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uQ2FuTW92ZShub2RlX2VsZW1lbnQubm9kZSkpIHtcbiAgICAgICAgICAgICAgICBub2RlX2VsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudF9pdGVtID0gbm9kZV9lbGVtZW50O1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50X2l0ZW0gIT0gbnVsbDtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuZ2VuZXJhdGVIaXRBcmVhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRfaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5oaXRfYXJlYXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoaXRfYXJlYXNfZ2VuZXJhdG9yID0gbmV3IEhpdEFyZWFzR2VuZXJhdG9yKHRoaXMudHJlZV93aWRnZXQudHJlZSwgdGhpcy5jdXJyZW50X2l0ZW0ubm9kZSwgdGhpcy5nZXRUcmVlRGltZW5zaW9ucygpLmJvdHRvbSk7XG4gICAgICAgICAgICB0aGlzLmhpdF9hcmVhcyA9IGhpdF9hcmVhc19nZW5lcmF0b3IuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tb3VzZVN0YXJ0ID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRfaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJChwb3NpdGlvbl9pbmZvLnRhcmdldCkub2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3VycmVudF9pdGVtLm5vZGU7XG4gICAgICAgICAgICB2YXIgbm9kZV9uYW1lID0gdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLmF1dG9Fc2NhcGVcbiAgICAgICAgICAgICAgICA/IHV0aWxfMS5odG1sX2VzY2FwZShub2RlLm5hbWUpXG4gICAgICAgICAgICAgICAgOiBub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmRyYWdfZWxlbWVudCA9IG5ldyBEcmFnRWxlbWVudChub2RlX25hbWUsIHBvc2l0aW9uX2luZm8ucGFnZV94IC0gb2Zmc2V0LmxlZnQsIHBvc2l0aW9uX2luZm8ucGFnZV95IC0gb2Zmc2V0LnRvcCwgdGhpcy50cmVlX3dpZGdldC5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNfZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2l0ZW0uJGVsZW1lbnQuYWRkQ2xhc3MoXCJqcXRyZWUtbW92aW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUubW91c2VEcmFnID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRfaXRlbSB8fCAhdGhpcy5kcmFnX2VsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ19lbGVtZW50Lm1vdmUocG9zaXRpb25faW5mby5wYWdlX3gsIHBvc2l0aW9uX2luZm8ucGFnZV95KTtcbiAgICAgICAgICAgIHZhciBhcmVhID0gdGhpcy5maW5kSG92ZXJlZEFyZWEocG9zaXRpb25faW5mby5wYWdlX3gsIHBvc2l0aW9uX2luZm8ucGFnZV95KTtcbiAgICAgICAgICAgIHZhciBjYW5fbW92ZV90byA9IHRoaXMuY2FuTW92ZVRvQXJlYShhcmVhKTtcbiAgICAgICAgICAgIGlmIChjYW5fbW92ZV90byAmJiBhcmVhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcmVhLm5vZGUuaXNGb2xkZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BPcGVuRm9sZGVyVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJlZF9hcmVhICE9PSBhcmVhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZF9hcmVhID0gYXJlYTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGNsb3NlZCBmb2xkZXIsIHN0YXJ0IHRpbWVyIHRvIG9wZW4gaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVzdE9wZW5Gb2xkZXJUaW1lcihhcmVhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydE9wZW5Gb2xkZXJUaW1lcihhcmVhLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wT3BlbkZvbGRlclRpbWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wSGludCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSG92ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURyb3BIaW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wT3BlbkZvbGRlclRpbWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFyZWEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uRHJhZ01vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uRHJhZ01vdmUodGhpcy5jdXJyZW50X2l0ZW0ubm9kZSwgcG9zaXRpb25faW5mby5vcmlnaW5hbF9ldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUubW91c2VTdG9wID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgdGhpcy5tb3ZlSXRlbShwb3NpdGlvbl9pbmZvKTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlbW92ZUhvdmVyKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJvcEhpbnQoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVIaXRBcmVhcygpO1xuICAgICAgICB2YXIgY3VycmVudF9pdGVtID0gdGhpcy5jdXJyZW50X2l0ZW07XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRfaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2l0ZW0uJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJqcXRyZWUtbW92aW5nXCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2l0ZW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNfZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmhvdmVyZWRfYXJlYSAmJiBjdXJyZW50X2l0ZW0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25EcmFnU3RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbkRyYWdTdG9wKGN1cnJlbnRfaXRlbS5ub2RlLCBwb3NpdGlvbl9pbmZvLm9yaWdpbmFsX2V2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlSGl0QXJlYXMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF9pdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSGl0QXJlYXMoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9pdGVtID0gdGhpcy50cmVlX3dpZGdldC5fZ2V0Tm9kZUVsZW1lbnRGb3JOb2RlKHRoaXMuY3VycmVudF9pdGVtLm5vZGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNfZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfaXRlbS4kZWxlbWVudC5hZGRDbGFzcyhcImpxdHJlZS1tb3ZpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUubXVzdENhcHR1cmVFbGVtZW50ID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhJGVsZW1lbnQuaXMoXCJpbnB1dCxzZWxlY3QsdGV4dGFyZWFcIik7XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLmNhbk1vdmVUb0FyZWEgPSBmdW5jdGlvbiAoYXJlYSkge1xuICAgICAgICBpZiAoIWFyZWEgfHwgIXRoaXMuY3VycmVudF9pdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uQ2FuTW92ZVRvKSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb25fbmFtZSA9IG5vZGVfMS5nZXRQb3NpdGlvbk5hbWUoYXJlYS5wb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uQ2FuTW92ZVRvKHRoaXMuY3VycmVudF9pdGVtLm5vZGUsIGFyZWEubm9kZSwgcG9zaXRpb25fbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5yZW1vdmVIaXRBcmVhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oaXRfYXJlYXMgPSBbXTtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdfZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYWdfZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUucmVtb3ZlRHJvcEhpbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzX2dob3N0KSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzX2dob3N0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhvdmVyZWRfYXJlYSA9IG51bGw7XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLmZpbmRIb3ZlcmVkQXJlYSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBkaW1lbnNpb25zID0gdGhpcy5nZXRUcmVlRGltZW5zaW9ucygpO1xuICAgICAgICBpZiAoeCA8IGRpbWVuc2lvbnMubGVmdCB8fFxuICAgICAgICAgICAgeSA8IGRpbWVuc2lvbnMudG9wIHx8XG4gICAgICAgICAgICB4ID4gZGltZW5zaW9ucy5yaWdodCB8fFxuICAgICAgICAgICAgeSA+IGRpbWVuc2lvbnMuYm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG93ID0gMDtcbiAgICAgICAgdmFyIGhpZ2ggPSB0aGlzLmhpdF9hcmVhcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2VcbiAgICAgICAgICAgIHZhciBtaWQgPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgICAgIHZhciBhcmVhID0gdGhpcy5oaXRfYXJlYXNbbWlkXTtcbiAgICAgICAgICAgIGlmICh5IDwgYXJlYS50b3ApIHtcbiAgICAgICAgICAgICAgICBoaWdoID0gbWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeSA+IGFyZWEuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmVhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tdXN0T3BlbkZvbGRlclRpbWVyID0gZnVuY3Rpb24gKGFyZWEpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcmVhLm5vZGU7XG4gICAgICAgIHJldHVybiAobm9kZS5pc0ZvbGRlcigpICYmXG4gICAgICAgICAgICAhbm9kZS5pc19vcGVuICYmXG4gICAgICAgICAgICBhcmVhLnBvc2l0aW9uID09PSBub2RlXzEuUG9zaXRpb24uSW5zaWRlKTtcbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUudXBkYXRlRHJvcEhpbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5ob3ZlcmVkX2FyZWEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgcHJldmlvdXMgZHJvcCBoaW50XG4gICAgICAgIHRoaXMucmVtb3ZlRHJvcEhpbnQoKTtcbiAgICAgICAgLy8gYWRkIG5ldyBkcm9wIGhpbnRcbiAgICAgICAgdmFyIG5vZGVfZWxlbWVudCA9IHRoaXMudHJlZV93aWRnZXQuX2dldE5vZGVFbGVtZW50Rm9yTm9kZSh0aGlzLmhvdmVyZWRfYXJlYS5ub2RlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c19naG9zdCA9IG5vZGVfZWxlbWVudC5hZGREcm9wSGludCh0aGlzLmhvdmVyZWRfYXJlYS5wb3NpdGlvbik7XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLnN0YXJ0T3BlbkZvbGRlclRpbWVyID0gZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb3BlbkZvbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnRyZWVfd2lkZ2V0Ll9vcGVuTm9kZShmb2xkZXIsIF90aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuc2xpZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlRHJvcEhpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0b3BPcGVuRm9sZGVyVGltZXIoKTtcbiAgICAgICAgdGhpcy5vcGVuX2ZvbGRlcl90aW1lciA9IHNldFRpbWVvdXQob3BlbkZvbGRlciwgdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9wZW5Gb2xkZXJEZWxheSk7XG4gICAgfTtcbiAgICBEcmFnQW5kRHJvcEhhbmRsZXIucHJvdG90eXBlLnN0b3BPcGVuRm9sZGVyVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wZW5fZm9sZGVyX3RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuX2ZvbGRlcl90aW1lcik7XG4gICAgICAgICAgICB0aGlzLm9wZW5fZm9sZGVyX3RpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRHJhZ0FuZERyb3BIYW5kbGVyLnByb3RvdHlwZS5tb3ZlSXRlbSA9IGZ1bmN0aW9uIChwb3NpdGlvbl9pbmZvKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRfaXRlbSAmJlxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkX2FyZWEgJiZcbiAgICAgICAgICAgIHRoaXMuaG92ZXJlZF9hcmVhLnBvc2l0aW9uICE9PSBub2RlXzEuUG9zaXRpb24uTm9uZSAmJlxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlVG9BcmVhKHRoaXMuaG92ZXJlZF9hcmVhKSkge1xuICAgICAgICAgICAgdmFyIG1vdmVkX25vZGVfMSA9IHRoaXMuY3VycmVudF9pdGVtLm5vZGU7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0X25vZGVfMSA9IHRoaXMuaG92ZXJlZF9hcmVhLm5vZGU7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb25fMSA9IHRoaXMuaG92ZXJlZF9hcmVhLnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzX3BhcmVudCA9IG1vdmVkX25vZGVfMS5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAocG9zaXRpb25fMSA9PT0gbm9kZV8xLlBvc2l0aW9uLkluc2lkZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZF9hcmVhLm5vZGUuaXNfb3BlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZG9Nb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyZWVfd2lkZ2V0LnRyZWUubW92ZU5vZGUobW92ZWRfbm9kZV8xLCB0YXJnZXRfbm9kZV8xLCBwb3NpdGlvbl8xKTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmVlX3dpZGdldC5lbGVtZW50LmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX3JlZnJlc2hFbGVtZW50cyhudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZXZlbnRfMSA9IHRoaXMudHJlZV93aWRnZXQuX3RyaWdnZXJFdmVudChcInRyZWUubW92ZVwiLCB7XG4gICAgICAgICAgICAgICAgbW92ZV9pbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVkX25vZGU6IG1vdmVkX25vZGVfMSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X25vZGU6IHRhcmdldF9ub2RlXzEsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBub2RlXzEuZ2V0UG9zaXRpb25OYW1lKHBvc2l0aW9uXzEpLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c19wYXJlbnQ6IHByZXZpb3VzX3BhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgZG9fbW92ZTogZG9Nb3ZlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9ldmVudDogcG9zaXRpb25faW5mby5vcmlnaW5hbF9ldmVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFldmVudF8xLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgZG9Nb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyYWdBbmREcm9wSGFuZGxlci5wcm90b3R5cGUuZ2V0VHJlZURpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdHJlZS4gQWRkIGEgbWFyZ2luIHRvIHRoZSBib3R0b20gdG8gYWxsb3dcbiAgICAgICAgLy8gZm9yIHNvbWUgdG8gZHJhZy1hbmQtZHJvcCB0aGUgbGFzdCBlbGVtZW50LlxuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy50cmVlX3dpZGdldC5lbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQsXG4gICAgICAgICAgICB0b3A6IG9mZnNldC50b3AsXG4gICAgICAgICAgICByaWdodDogb2Zmc2V0LmxlZnQgKyB0aGlzLnRyZWVfd2lkZ2V0LmVsZW1lbnQud2lkdGgoKSxcbiAgICAgICAgICAgIGJvdHRvbTogb2Zmc2V0LnRvcCArIHRoaXMudHJlZV93aWRnZXQuZWxlbWVudC5oZWlnaHQoKSArIDE2XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gRHJhZ0FuZERyb3BIYW5kbGVyO1xufSgpKTtcbmV4cG9ydHMuRHJhZ0FuZERyb3BIYW5kbGVyID0gRHJhZ0FuZERyb3BIYW5kbGVyO1xudmFyIFZpc2libGVOb2RlSXRlcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmlzaWJsZU5vZGVJdGVyYXRvcih0cmVlKSB7XG4gICAgICAgIHRoaXMudHJlZSA9IHRyZWU7XG4gICAgfVxuICAgIFZpc2libGVOb2RlSXRlcmF0b3IucHJvdG90eXBlLml0ZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpc19maXJzdF9ub2RlID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9pdGVyYXRlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBuZXh0X25vZGUpIHtcbiAgICAgICAgICAgIHZhciBtdXN0X2l0ZXJhdGVfaW5zaWRlID0gKG5vZGUuaXNfb3BlbiB8fCAhbm9kZS5lbGVtZW50KSAmJiBub2RlLmhhc0NoaWxkcmVuKCk7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKG5vZGUuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICRlbGVtZW50ID0gJChub2RlLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICghJGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc19maXJzdF9ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUZpcnN0Tm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaXNfZmlyc3Rfbm9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVOb2RlKG5vZGUsIG5leHRfbm9kZSwgJGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5oYW5kbGVPcGVuRm9sZGVyKG5vZGUsICRlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXVzdF9pdGVyYXRlX2luc2lkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDbG9zZWRGb2xkZXIobm9kZSwgbmV4dF9ub2RlLCAkZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG11c3RfaXRlcmF0ZV9pbnNpZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5fbGVuZ3RoXzEgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGNoaWxkcmVuX2xlbmd0aF8xIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdGVOb2RlKG5vZGUuY2hpbGRyZW5baV0sIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdGVOb2RlKG5vZGUuY2hpbGRyZW5baV0sIG5vZGUuY2hpbGRyZW5baSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmlzX29wZW4gJiYgJGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQWZ0ZXJPcGVuRm9sZGVyKG5vZGUsIG5leHRfbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfaXRlcmF0ZU5vZGUodGhpcy50cmVlLCBudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBWaXNpYmxlTm9kZUl0ZXJhdG9yO1xufSgpKTtcbnZhciBIaXRBcmVhc0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSGl0QXJlYXNHZW5lcmF0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSGl0QXJlYXNHZW5lcmF0b3IodHJlZSwgY3VycmVudF9ub2RlLCB0cmVlX2JvdHRvbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0cmVlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jdXJyZW50X25vZGUgPSBjdXJyZW50X25vZGU7XG4gICAgICAgIF90aGlzLnRyZWVfYm90dG9tID0gdHJlZV9ib3R0b207XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmxhc3RfdG9wID0gMDtcbiAgICAgICAgdGhpcy5pdGVyYXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlSGl0QXJlYXModGhpcy5wb3NpdGlvbnMpO1xuICAgIH07XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlSGl0QXJlYXMgPSBmdW5jdGlvbiAocG9zaXRpb25zKSB7XG4gICAgICAgIHZhciBwcmV2aW91c190b3AgPSAtMTtcbiAgICAgICAgdmFyIGdyb3VwID0gW107XG4gICAgICAgIHZhciBoaXRfYXJlYXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwb3NpdGlvbnNfMSA9IHBvc2l0aW9uczsgX2kgPCBwb3NpdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc18xW19pXTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi50b3AgIT09IHByZXZpb3VzX3RvcCAmJiBncm91cC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVIaXRBcmVhc0Zvckdyb3VwKGhpdF9hcmVhcywgZ3JvdXAsIHByZXZpb3VzX3RvcCwgcG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfdG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICAgICAgICAgIGdyb3VwID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlbmVyYXRlSGl0QXJlYXNGb3JHcm91cChoaXRfYXJlYXMsIGdyb3VwLCBwcmV2aW91c190b3AsIHRoaXMudHJlZV9ib3R0b20pO1xuICAgICAgICByZXR1cm4gaGl0X2FyZWFzO1xuICAgIH07XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmhhbmRsZU9wZW5Gb2xkZXIgPSBmdW5jdGlvbiAobm9kZSwgJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuY3VycmVudF9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDYW5ub3QgbW92ZSBpbnNpZGUgY3VycmVudCBpdGVtXG4gICAgICAgICAgICAvLyBTdG9wIGl0ZXJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbm5vdCBtb3ZlIGJlZm9yZSBjdXJyZW50IGl0ZW1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0gIT09IHRoaXMuY3VycmVudF9ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5JbnNpZGUsIHRoaXMuZ2V0VG9wKCRlbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29udGludWUgaXRlcmF0aW5nXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmhhbmRsZUNsb3NlZEZvbGRlciA9IGZ1bmN0aW9uIChub2RlLCBuZXh0X25vZGUsICRlbGVtZW50KSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFRvcCgkZWxlbWVudCk7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmN1cnJlbnRfbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2Fubm90IG1vdmUgYWZ0ZXIgY3VycmVudCBpdGVtXG4gICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5Ob25lLCB0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uSW5zaWRlLCB0b3ApO1xuICAgICAgICAgICAgLy8gQ2Fubm90IG1vdmUgYmVmb3JlIGN1cnJlbnQgaXRlbVxuICAgICAgICAgICAgaWYgKG5leHRfbm9kZSAhPT0gdGhpcy5jdXJyZW50X25vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKG5vZGUsIG5vZGVfMS5Qb3NpdGlvbi5BZnRlciwgdG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmhhbmRsZUZpcnN0Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICE9PSB0aGlzLmN1cnJlbnRfbm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uQmVmb3JlLCB0aGlzLmdldFRvcCgkKG5vZGUuZWxlbWVudCkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmhhbmRsZUFmdGVyT3BlbkZvbGRlciA9IGZ1bmN0aW9uIChub2RlLCBuZXh0X25vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuY3VycmVudF9ub2RlIHx8IG5leHRfbm9kZSA9PT0gdGhpcy5jdXJyZW50X25vZGUpIHtcbiAgICAgICAgICAgIC8vIENhbm5vdCBtb3ZlIGJlZm9yZSBvciBhZnRlciBjdXJyZW50IGl0ZW1cbiAgICAgICAgICAgIHRoaXMuYWRkUG9zaXRpb24obm9kZSwgbm9kZV8xLlBvc2l0aW9uLk5vbmUsIHRoaXMubGFzdF90b3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uQWZ0ZXIsIHRoaXMubGFzdF90b3ApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuaGFuZGxlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBuZXh0X25vZGUsICRlbGVtZW50KSB7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmdldFRvcCgkZWxlbWVudCk7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmN1cnJlbnRfbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2Fubm90IG1vdmUgaW5zaWRlIGN1cnJlbnQgaXRlbVxuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uTm9uZSwgdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9zaXRpb24obm9kZSwgbm9kZV8xLlBvc2l0aW9uLkluc2lkZSwgdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dF9ub2RlID09PSB0aGlzLmN1cnJlbnRfbm9kZSB8fCBub2RlID09PSB0aGlzLmN1cnJlbnRfbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2Fubm90IG1vdmUgYmVmb3JlIG9yIGFmdGVyIGN1cnJlbnQgaXRlbVxuICAgICAgICAgICAgdGhpcy5hZGRQb3NpdGlvbihub2RlLCBub2RlXzEuUG9zaXRpb24uTm9uZSwgdG9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9zaXRpb24obm9kZSwgbm9kZV8xLlBvc2l0aW9uLkFmdGVyLCB0b3ApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG4gICAgfTtcbiAgICBIaXRBcmVhc0dlbmVyYXRvci5wcm90b3R5cGUuYWRkUG9zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgcG9zaXRpb24sIHRvcCkge1xuICAgICAgICB2YXIgYXJlYSA9IHtcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBvc2l0aW9ucy5wdXNoKGFyZWEpO1xuICAgICAgICB0aGlzLmxhc3RfdG9wID0gdG9wO1xuICAgIH07XG4gICAgSGl0QXJlYXNHZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlSGl0QXJlYXNGb3JHcm91cCA9IGZ1bmN0aW9uIChoaXRfYXJlYXMsIHBvc2l0aW9uc19pbl9ncm91cCwgdG9wLCBib3R0b20pIHtcbiAgICAgICAgLy8gbGltaXQgcG9zaXRpb25zIGluIGdyb3VwXG4gICAgICAgIHZhciBwb3NpdGlvbl9jb3VudCA9IE1hdGgubWluKHBvc2l0aW9uc19pbl9ncm91cC5sZW5ndGgsIDQpO1xuICAgICAgICB2YXIgYXJlYV9oZWlnaHQgPSBNYXRoLnJvdW5kKChib3R0b20gLSB0b3ApIC8gcG9zaXRpb25fY291bnQpO1xuICAgICAgICB2YXIgYXJlYV90b3AgPSB0b3A7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBwb3NpdGlvbl9jb3VudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zX2luX2dyb3VwW2ldO1xuICAgICAgICAgICAgaGl0X2FyZWFzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRvcDogYXJlYV90b3AsXG4gICAgICAgICAgICAgICAgYm90dG9tOiBhcmVhX3RvcCArIGFyZWFfaGVpZ2h0LFxuICAgICAgICAgICAgICAgIG5vZGU6IHBvc2l0aW9uLm5vZGUsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLnBvc2l0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFyZWFfdG9wICs9IGFyZWFfaGVpZ2h0O1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSGl0QXJlYXNHZW5lcmF0b3I7XG59KFZpc2libGVOb2RlSXRlcmF0b3IpKTtcbmV4cG9ydHMuSGl0QXJlYXNHZW5lcmF0b3IgPSBIaXRBcmVhc0dlbmVyYXRvcjtcbnZhciBEcmFnRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcmFnRWxlbWVudChub2RlX25hbWUsIG9mZnNldF94LCBvZmZzZXRfeSwgJHRyZWUpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRfeCA9IG9mZnNldF94O1xuICAgICAgICB0aGlzLm9mZnNldF95ID0gb2Zmc2V0X3k7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKFwiPHNwYW4gY2xhc3M9XFxcImpxdHJlZS10aXRsZSBqcXRyZWUtZHJhZ2dpbmdcXFwiPlwiICsgbm9kZV9uYW1lICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gICAgICAgICR0cmVlLmFwcGVuZCh0aGlzLiRlbGVtZW50KTtcbiAgICB9XG4gICAgRHJhZ0VsZW1lbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAocGFnZV94LCBwYWdlX3kpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmZzZXQoe1xuICAgICAgICAgICAgbGVmdDogcGFnZV94IC0gdGhpcy5vZmZzZXRfeCxcbiAgICAgICAgICAgIHRvcDogcGFnZV95IC0gdGhpcy5vZmZzZXRfeVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERyYWdFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRHJhZ0VsZW1lbnQ7XG59KCkpO1xuZXhwb3J0cy5EcmFnRWxlbWVudCA9IERyYWdFbGVtZW50O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1dGlsXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEVsZW1lbnRzUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRWxlbWVudHNSZW5kZXJlcih0cmVlX3dpZGdldCkge1xuICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0ID0gdHJlZV93aWRnZXQ7XG4gICAgICAgIHRoaXMub3BlbmVkX2ljb25fZWxlbWVudCA9IHRoaXMuY3JlYXRlQnV0dG9uRWxlbWVudCh0cmVlX3dpZGdldC5vcHRpb25zLm9wZW5lZEljb24pO1xuICAgICAgICB0aGlzLmNsb3NlZF9pY29uX2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUJ1dHRvbkVsZW1lbnQodHJlZV93aWRnZXQub3B0aW9ucy5jbG9zZWRJY29uKTtcbiAgICB9XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGZyb21fbm9kZSkge1xuICAgICAgICBpZiAoZnJvbV9ub2RlICYmIGZyb21fbm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRnJvbU5vZGUoZnJvbV9ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRnJvbVJvb3QoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyRnJvbVJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9IHRoaXMudHJlZV93aWRnZXQuZWxlbWVudDtcbiAgICAgICAgJGVsZW1lbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEb21FbGVtZW50cygkZWxlbWVudFswXSwgdGhpcy50cmVlX3dpZGdldC50cmVlLmNoaWxkcmVuLCB0cnVlLCAxKTtcbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckZyb21Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgLy8gcmVtZW1iZXIgY3VycmVudCBsaVxuICAgICAgICB2YXIgJHByZXZpb3VzX2xpID0gJChub2RlLmVsZW1lbnQpO1xuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgICAgICB2YXIgbGkgPSB0aGlzLmNyZWF0ZUxpKG5vZGUsIG5vZGUuZ2V0TGV2ZWwoKSk7XG4gICAgICAgIHRoaXMuYXR0YWNoTm9kZURhdGEobm9kZSwgbGkpO1xuICAgICAgICAvLyBhZGQgZWxlbWVudCB0byBkb21cbiAgICAgICAgJHByZXZpb3VzX2xpLmFmdGVyKGxpKTtcbiAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIGxpXG4gICAgICAgICRwcmV2aW91c19saS5yZW1vdmUoKTtcbiAgICAgICAgLy8gY3JlYXRlIGNoaWxkcmVuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnRzKGxpLCBub2RlLmNoaWxkcmVuLCBmYWxzZSwgbm9kZS5nZXRMZXZlbCgpICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLmNyZWF0ZURvbUVsZW1lbnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNoaWxkcmVuLCBpc19yb290X25vZGUsIGxldmVsKSB7XG4gICAgICAgIHZhciB1bCA9IHRoaXMuY3JlYXRlVWwoaXNfcm9vdF9ub2RlKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fMSA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbl8xW19pXTtcbiAgICAgICAgICAgIHZhciBsaSA9IHRoaXMuY3JlYXRlTGkoY2hpbGQsIGxldmVsKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoTm9kZURhdGEoY2hpbGQsIGxpKTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEb21FbGVtZW50cyhsaSwgY2hpbGQuY2hpbGRyZW4sIGZhbHNlLCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5hdHRhY2hOb2RlRGF0YSA9IGZ1bmN0aW9uIChub2RlLCBsaSkge1xuICAgICAgICBub2RlLmVsZW1lbnQgPSBsaTtcbiAgICAgICAgJChsaSkuZGF0YShcIm5vZGVcIiwgbm9kZSk7XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVVbCA9IGZ1bmN0aW9uIChpc19yb290X25vZGUpIHtcbiAgICAgICAgdmFyIGNsYXNzX3N0cmluZztcbiAgICAgICAgdmFyIHJvbGU7XG4gICAgICAgIGlmICghaXNfcm9vdF9ub2RlKSB7XG4gICAgICAgICAgICBjbGFzc19zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgcm9sZSA9IFwiZ3JvdXBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzX3N0cmluZyA9IFwianF0cmVlLXRyZWVcIjtcbiAgICAgICAgICAgIHJvbGUgPSBcInRyZWVcIjtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMucnRsKSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nfc3RyaW5nICs9IFwiIGpxdHJlZS1ydGxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHVsLmNsYXNzTmFtZSA9IFwianF0cmVlX2NvbW1vbiBcIiArIGNsYXNzX3N0cmluZztcbiAgICAgICAgdWwuc2V0QXR0cmlidXRlKFwicm9sZVwiLCByb2xlKTtcbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlTGkgPSBmdW5jdGlvbiAobm9kZSwgbGV2ZWwpIHtcbiAgICAgICAgdmFyIGlzX3NlbGVjdGVkID0gQm9vbGVhbih0aGlzLnRyZWVfd2lkZ2V0LnNlbGVjdF9ub2RlX2hhbmRsZXIgJiZcbiAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQuc2VsZWN0X25vZGVfaGFuZGxlci5pc05vZGVTZWxlY3RlZChub2RlKSk7XG4gICAgICAgIHZhciBsaSA9IG5vZGUuaXNGb2xkZXIoKVxuICAgICAgICAgICAgPyB0aGlzLmNyZWF0ZUZvbGRlckxpKG5vZGUsIGxldmVsLCBpc19zZWxlY3RlZClcbiAgICAgICAgICAgIDogdGhpcy5jcmVhdGVOb2RlTGkobm9kZSwgbGV2ZWwsIGlzX3NlbGVjdGVkKTtcbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbkNyZWF0ZUxpKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25DcmVhdGVMaShub2RlLCAkKGxpKSwgaXNfc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9O1xuICAgIEVsZW1lbnRzUmVuZGVyZXIucHJvdG90eXBlLmNyZWF0ZUZvbGRlckxpID0gZnVuY3Rpb24gKG5vZGUsIGxldmVsLCBpc19zZWxlY3RlZCkge1xuICAgICAgICB2YXIgYnV0dG9uX2NsYXNzZXMgPSB0aGlzLmdldEJ1dHRvbkNsYXNzZXMobm9kZSk7XG4gICAgICAgIHZhciBmb2xkZXJfY2xhc3NlcyA9IHRoaXMuZ2V0Rm9sZGVyQ2xhc3Nlcyhub2RlLCBpc19zZWxlY3RlZCk7XG4gICAgICAgIHZhciBpY29uX2VsZW1lbnQgPSBub2RlLmlzX29wZW5cbiAgICAgICAgICAgID8gdGhpcy5vcGVuZWRfaWNvbl9lbGVtZW50XG4gICAgICAgICAgICA6IHRoaXMuY2xvc2VkX2ljb25fZWxlbWVudDtcbiAgICAgICAgLy8gbGlcbiAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5jbGFzc05hbWUgPSBcImpxdHJlZV9jb21tb24gXCIgKyBmb2xkZXJfY2xhc3NlcztcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInByZXNlbnRhdGlvblwiKTtcbiAgICAgICAgLy8gZGl2XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJqcXRyZWUtZWxlbWVudCBqcXRyZWVfY29tbW9uXCI7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAvLyBidXR0b24gbGlua1xuICAgICAgICB2YXIgYnV0dG9uX2xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYnV0dG9uX2xpbmsuY2xhc3NOYW1lID0gYnV0dG9uX2NsYXNzZXM7XG4gICAgICAgIGJ1dHRvbl9saW5rLmFwcGVuZENoaWxkKGljb25fZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBidXR0b25fbGluay5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICBidXR0b25fbGluay5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuYnV0dG9uTGVmdCkge1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbl9saW5rKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aXRsZSBzcGFuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRpdGxlU3Bhbihub2RlLm5hbWUsIGxldmVsLCBpc19zZWxlY3RlZCwgbm9kZS5pc19vcGVuLCB0cnVlKSk7XG4gICAgICAgIGlmICghdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLmJ1dHRvbkxlZnQpIHtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25fbGluayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpO1xuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlTm9kZUxpID0gZnVuY3Rpb24gKG5vZGUsIGxldmVsLCBpc19zZWxlY3RlZCkge1xuICAgICAgICB2YXIgbGlfY2xhc3NlcyA9IFtcImpxdHJlZV9jb21tb25cIl07XG4gICAgICAgIGlmIChpc19zZWxlY3RlZCkge1xuICAgICAgICAgICAgbGlfY2xhc3Nlcy5wdXNoKFwianF0cmVlLXNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbGFzc19zdHJpbmcgPSBsaV9jbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgICAgICAvLyBsaVxuICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmNsYXNzTmFtZSA9IGNsYXNzX3N0cmluZztcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInByZXNlbnRhdGlvblwiKTtcbiAgICAgICAgLy8gZGl2XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJqcXRyZWUtZWxlbWVudCBqcXRyZWVfY29tbW9uXCI7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAvLyB0aXRsZSBzcGFuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRpdGxlU3Bhbihub2RlLm5hbWUsIGxldmVsLCBpc19zZWxlY3RlZCwgbm9kZS5pc19vcGVuLCBmYWxzZSkpO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5jcmVhdGVUaXRsZVNwYW4gPSBmdW5jdGlvbiAobm9kZV9uYW1lLCBsZXZlbCwgaXNfc2VsZWN0ZWQsIGlzX29wZW4sIGlzX2ZvbGRlcikge1xuICAgICAgICB2YXIgdGl0bGVfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFwianF0cmVlLXRpdGxlIGpxdHJlZV9jb21tb25cIjtcbiAgICAgICAgaWYgKGlzX2ZvbGRlcikge1xuICAgICAgICAgICAgY2xhc3NlcyArPSBcIiBqcXRyZWUtdGl0bGUtZm9sZGVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVfc3Bhbi5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICAgICAgICB0aXRsZV9zcGFuLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0cmVlaXRlbVwiKTtcbiAgICAgICAgdGl0bGVfc3Bhbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxldmVsXCIsIFwiXCIgKyBsZXZlbCk7XG4gICAgICAgIHRpdGxlX3NwYW4uc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB1dGlsXzEuZ2V0Qm9vbFN0cmluZyhpc19zZWxlY3RlZCkpO1xuICAgICAgICB0aXRsZV9zcGFuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdXRpbF8xLmdldEJvb2xTdHJpbmcoaXNfb3BlbikpO1xuICAgICAgICBpZiAoaXNfc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRpdGxlX3NwYW4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLnRhYkluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZV9zcGFuLmlubmVySFRNTCA9IHRoaXMuZXNjYXBlSWZOZWNlc3Nhcnkobm9kZV9uYW1lKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlX3NwYW47XG4gICAgfTtcbiAgICBFbGVtZW50c1JlbmRlcmVyLnByb3RvdHlwZS5nZXRCdXR0b25DbGFzc2VzID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBbXCJqcXRyZWUtdG9nZ2xlclwiLCBcImpxdHJlZV9jb21tb25cIl07XG4gICAgICAgIGlmICghbm9kZS5pc19vcGVuKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goXCJqcXRyZWUtY2xvc2VkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuYnV0dG9uTGVmdCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKFwianF0cmVlLXRvZ2dsZXItbGVmdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChcImpxdHJlZS10b2dnbGVyLXJpZ2h0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuZ2V0Rm9sZGVyQ2xhc3NlcyA9IGZ1bmN0aW9uIChub2RlLCBpc19zZWxlY3RlZCkge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFtcImpxdHJlZS1mb2xkZXJcIl07XG4gICAgICAgIGlmICghbm9kZS5pc19vcGVuKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goXCJqcXRyZWUtY2xvc2VkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc19zZWxlY3RlZCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKFwianF0cmVlLXNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmlzX2xvYWRpbmcpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChcImpxdHJlZS1sb2FkaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuZXNjYXBlSWZOZWNlc3NhcnkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5hdXRvRXNjYXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbF8xLmh0bWxfZXNjYXBlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudHNSZW5kZXJlci5wcm90b3R5cGUuY3JlYXRlQnV0dG9uRWxlbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHZhbHVlIHRvIGh0bWxcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRpdi5pbm5lckhUTUwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICQodmFsdWUpWzBdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRWxlbWVudHNSZW5kZXJlcjtcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEVsZW1lbnRzUmVuZGVyZXI7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEtleUhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5SGFuZGxlcih0cmVlX3dpZGdldCkge1xuICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0ID0gdHJlZV93aWRnZXQ7XG4gICAgICAgIGlmICh0cmVlX3dpZGdldC5vcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oXCJrZXlkb3duLmpxdHJlZVwiLCAkLnByb3h5KHRoaXMuaGFuZGxlS2V5RG93biwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKFwia2V5ZG93bi5qcXRyZWVcIik7XG4gICAgfTtcbiAgICBLZXlIYW5kbGVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVfd2lkZ2V0LmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Tm9kZShub2RlLmdldE5leHROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBLZXlIYW5kbGVyLnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy50cmVlX3dpZGdldC5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5vZGUobm9kZS5nZXRQcmV2aW91c05vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLm1vdmVSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVfd2lkZ2V0LmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFub2RlLmlzRm9sZGVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9sZGVyIG5vZGVcbiAgICAgICAgICAgIGlmIChub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBSaWdodCBtb3ZlcyB0byB0aGUgZmlyc3QgY2hpbGQgb2YgYW4gb3BlbiBub2RlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Tm9kZShub2RlLmdldE5leHROb2RlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgZXhwYW5kcyBhIGNsb3NlZCBub2RlXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5vcGVuTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5pc0ZvbGRlcigpICYmIG5vZGUuaXNfb3Blbikge1xuICAgICAgICAgICAgLy8gTGVmdCBvbiBhbiBvcGVuIG5vZGUgY2xvc2VzIHRoZSBub2RlXG4gICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0LmNsb3NlTm9kZShub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExlZnQgb24gYSBjbG9zZWQgb3IgZW5kIG5vZGUgbW92ZXMgZm9jdXMgdG8gdGhlIG5vZGUncyBwYXJlbnRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5vZGUobm9kZS5nZXRQYXJlbnQoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSGFuZGxlS2V5Ym9hcmQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZS53aGljaDtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlIYW5kbGVyLkRPV046XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVEb3duKCk7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlIYW5kbGVyLlVQOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICBjYXNlIEtleUhhbmRsZXIuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5SGFuZGxlci5MRUZUOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBLZXlIYW5kbGVyLnByb3RvdHlwZS5zZWxlY3ROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQuc2VsZWN0Tm9kZShub2RlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0LnNjcm9sbF9oYW5kbGVyICYmXG4gICAgICAgICAgICAgICAgIXRoaXMudHJlZV93aWRnZXQuc2Nyb2xsX2hhbmRsZXIuaXNTY3JvbGxlZEludG9WaWV3KCQobm9kZS5lbGVtZW50KS5maW5kKFwiLmpxdHJlZS1lbGVtZW50XCIpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQuc2Nyb2xsVG9Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBLZXlIYW5kbGVyLnByb3RvdHlwZS5jYW5IYW5kbGVLZXlib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0ICYmXG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNPblRyZWUoKSAmJlxuICAgICAgICAgICAgdGhpcy50cmVlX3dpZGdldC5nZXRTZWxlY3RlZE5vZGUoKSAhPSBudWxsKTtcbiAgICB9O1xuICAgIEtleUhhbmRsZXIucHJvdG90eXBlLmlzRm9jdXNPblRyZWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3RpdmVfZWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHJldHVybiAoYWN0aXZlX2VsZW1lbnQgJiZcbiAgICAgICAgICAgIGFjdGl2ZV9lbGVtZW50LnRhZ05hbWUgPT09IFwiU1BBTlwiICYmXG4gICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0Ll9jb250YWluc0VsZW1lbnQoYWN0aXZlX2VsZW1lbnQpKTtcbiAgICB9O1xuICAgIEtleUhhbmRsZXIuTEVGVCA9IDM3O1xuICAgIEtleUhhbmRsZXIuVVAgPSAzODtcbiAgICBLZXlIYW5kbGVyLlJJR0hUID0gMzk7XG4gICAgS2V5SGFuZGxlci5ET1dOID0gNDA7XG4gICAgcmV0dXJuIEtleUhhbmRsZXI7XG59KCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBLZXlIYW5kbGVyO1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcblRoaXMgd2lkZ2V0IGRvZXMgdGhlIHNhbWUgYSB0aGUgbW91c2Ugd2lkZ2V0IGluIGpxdWVyeXVpLlxuKi9cbnZhciBzaW1wbGVfd2lkZ2V0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIE1vdXNlV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNb3VzZVdpZGdldCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNb3VzZVdpZGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuc2V0TW91c2VEZWxheSA9IGZ1bmN0aW9uIChtb3VzZV9kZWxheSkge1xuICAgICAgICB0aGlzLm1vdXNlX2RlbGF5ID0gbW91c2VfZGVsYXk7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLm9uKFwibW91c2Vkb3duLm1vdXNld2lkZ2V0XCIsICQucHJveHkodGhpcy5fbW91c2VEb3duLCB0aGlzKSk7XG4gICAgICAgIHRoaXMuJGVsLm9uKFwidG91Y2hzdGFydC5tb3VzZXdpZGdldFwiLCAkLnByb3h5KHRoaXMuX3RvdWNoU3RhcnQsIHRoaXMpKTtcbiAgICAgICAgdGhpcy5pc19tb3VzZV9zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VfZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLl9tb3VzZV9kZWxheV90aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lzX21vdXNlX2RlbGF5X21ldCA9IHRydWU7XG4gICAgICAgIHRoaXMubW91c2VfZG93bl9pbmZvID0gbnVsbDtcbiAgICB9O1xuICAgIE1vdXNlV2lkZ2V0LnByb3RvdHlwZS5fZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5vZmYoXCJtb3VzZWRvd24ubW91c2V3aWRnZXRcIik7XG4gICAgICAgIHRoaXMuJGVsLm9mZihcInRvdWNoc3RhcnQubW91c2V3aWRnZXRcIik7XG4gICAgICAgIHZhciAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgICAgICAgJGRvY3VtZW50Lm9mZihcIm1vdXNlbW92ZS5tb3VzZXdpZGdldFwiKTtcbiAgICAgICAgJGRvY3VtZW50Lm9mZihcIm1vdXNldXAubW91c2V3aWRnZXRcIik7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX21vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIElzIGxlZnQgbW91c2UgYnV0dG9uP1xuICAgICAgICBpZiAoZS53aGljaCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9oYW5kbGVNb3VzZURvd24odGhpcy5fZ2V0UG9zaXRpb25JbmZvKGUpKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX2hhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChwb3NpdGlvbl9pbmZvKSB7XG4gICAgICAgIC8vIFdlIG1heSBoYXZlIG1pc3NlZCBtb3VzZXVwIChvdXQgb2Ygd2luZG93KVxuICAgICAgICBpZiAodGhpcy5pc19tb3VzZV9zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZVVwKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2VfZG93bl9pbmZvID0gcG9zaXRpb25faW5mbztcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZUNhcHR1cmUocG9zaXRpb25faW5mbykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW5kbGVTdGFydE1vdXNlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl9oYW5kbGVTdGFydE1vdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gICAgICAgICRkb2N1bWVudC5vbihcIm1vdXNlbW92ZS5tb3VzZXdpZGdldFwiLCAkLnByb3h5KHRoaXMuX21vdXNlTW92ZSwgdGhpcykpO1xuICAgICAgICAkZG9jdW1lbnQub24oXCJ0b3VjaG1vdmUubW91c2V3aWRnZXRcIiwgJC5wcm94eSh0aGlzLl90b3VjaE1vdmUsIHRoaXMpKTtcbiAgICAgICAgJGRvY3VtZW50Lm9uKFwibW91c2V1cC5tb3VzZXdpZGdldFwiLCAkLnByb3h5KHRoaXMuX21vdXNlVXAsIHRoaXMpKTtcbiAgICAgICAgJGRvY3VtZW50Lm9uKFwidG91Y2hlbmQubW91c2V3aWRnZXRcIiwgJC5wcm94eSh0aGlzLl90b3VjaEVuZCwgdGhpcykpO1xuICAgICAgICBpZiAodGhpcy5tb3VzZV9kZWxheSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRNb3VzZURlbGF5VGltZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl9zdGFydE1vdXNlRGVsYXlUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX21vdXNlX2RlbGF5X3RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fbW91c2VfZGVsYXlfdGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vdXNlX2RlbGF5X3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5faXNfbW91c2VfZGVsYXlfbWV0ID0gdHJ1ZTtcbiAgICAgICAgfSwgdGhpcy5tb3VzZV9kZWxheSk7XG4gICAgICAgIHRoaXMuX2lzX21vdXNlX2RlbGF5X21ldCA9IGZhbHNlO1xuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl9tb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlTW91c2VNb3ZlKGUsIHRoaXMuX2dldFBvc2l0aW9uSW5mbyhlKSk7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX2hhbmRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlLCBwb3NpdGlvbl9pbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLmlzX21vdXNlX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlRHJhZyhwb3NpdGlvbl9pbmZvKTtcbiAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW91c2VfZGVsYXkgJiYgIXRoaXMuX2lzX21vdXNlX2RlbGF5X21ldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW91c2VfZG93bl9pbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmlzX21vdXNlX3N0YXJ0ZWQgPVxuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlU3RhcnQodGhpcy5tb3VzZV9kb3duX2luZm8pICE9PSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc19tb3VzZV9zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZURyYWcocG9zaXRpb25faW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZVVwKHBvc2l0aW9uX2luZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdGhpcy5pc19tb3VzZV9zdGFydGVkO1xuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl9nZXRQb3NpdGlvbkluZm8gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZV94OiBlLnBhZ2VYLFxuICAgICAgICAgICAgcGFnZV95OiBlLnBhZ2VZLFxuICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAgICAgICAgIG9yaWdpbmFsX2V2ZW50OiBlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX21vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlTW91c2VVcCh0aGlzLl9nZXRQb3NpdGlvbkluZm8oZSkpO1xuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl9oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKHBvc2l0aW9uX2luZm8pIHtcbiAgICAgICAgdmFyICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgICAgICAkZG9jdW1lbnQub2ZmKFwibW91c2Vtb3ZlLm1vdXNld2lkZ2V0XCIpO1xuICAgICAgICAkZG9jdW1lbnQub2ZmKFwidG91Y2htb3ZlLm1vdXNld2lkZ2V0XCIpO1xuICAgICAgICAkZG9jdW1lbnQub2ZmKFwibW91c2V1cC5tb3VzZXdpZGdldFwiKTtcbiAgICAgICAgJGRvY3VtZW50Lm9mZihcInRvdWNoZW5kLm1vdXNld2lkZ2V0XCIpO1xuICAgICAgICBpZiAodGhpcy5pc19tb3VzZV9zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzX21vdXNlX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlU3RvcChwb3NpdGlvbl9pbmZvKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl90b3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRvdWNoX2V2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICBpZiAodG91Y2hfZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hfZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVNb3VzZURvd24odGhpcy5fZ2V0UG9zaXRpb25JbmZvKHRvdWNoKSk7XG4gICAgfTtcbiAgICBNb3VzZVdpZGdldC5wcm90b3R5cGUuX3RvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0b3VjaF9ldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgaWYgKHRvdWNoX2V2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b3VjaCA9IHRvdWNoX2V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlTW91c2VNb3ZlKGUsIHRoaXMuX2dldFBvc2l0aW9uSW5mbyh0b3VjaCkpO1xuICAgIH07XG4gICAgTW91c2VXaWRnZXQucHJvdG90eXBlLl90b3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0b3VjaF9ldmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgaWYgKHRvdWNoX2V2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b3VjaCA9IHRvdWNoX2V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlTW91c2VVcCh0aGlzLl9nZXRQb3NpdGlvbkluZm8odG91Y2gpKTtcbiAgICB9O1xuICAgIHJldHVybiBNb3VzZVdpZGdldDtcbn0oc2ltcGxlX3dpZGdldF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNb3VzZVdpZGdldDtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdXRpbF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBTYXZlU3RhdGVIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNhdmVTdGF0ZUhhbmRsZXIodHJlZV93aWRnZXQpIHtcbiAgICAgICAgdGhpcy50cmVlX3dpZGdldCA9IHRyZWVfd2lkZ2V0O1xuICAgIH1cbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25TZXRTdGF0ZUZyb21TdG9yYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMub25TZXRTdGF0ZUZyb21TdG9yYWdlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN1cHBvcnRzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZ2V0S2V5TmFtZSgpLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLmdldFN0YXRlRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBqc29uX2RhdGEgPSB0aGlzLl9sb2FkRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKGpzb25fZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlU3RhdGUoanNvbl9kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGdldE9wZW5Ob2RlSWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wZW5fbm9kZXMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLnRyZWVfd2lkZ2V0LnRyZWUuaXRlcmF0ZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmlzX29wZW4gJiYgbm9kZS5pZCAmJiBub2RlLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3Blbl9ub2Rlcy5wdXNoKG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5fbm9kZXM7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRTZWxlY3RlZE5vZGVJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudHJlZV93aWRnZXQuZ2V0U2VsZWN0ZWROb2RlcygpLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gbi5pZDsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVuX25vZGVzOiBnZXRPcGVuTm9kZUlkcygpLFxuICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZTogZ2V0U2VsZWN0ZWROb2RlSWRzKClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qXG4gICAgU2V0IGluaXRpYWwgc3RhdGVcbiAgICBEb24ndCBoYW5kbGUgbm9kZXMgdGhhdCBhcmUgbG9hZGVkIG9uIGRlbWFuZFxuXG4gICAgcmVzdWx0OiBtdXN0IGxvYWQgb24gZGVtYW5kXG4gICAgKi9cbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5zZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG11c3RfbG9hZF9vbl9kZW1hbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5vcGVuX25vZGVzKSB7XG4gICAgICAgICAgICAgICAgbXVzdF9sb2FkX29uX2RlbWFuZCA9IHRoaXMuX29wZW5Jbml0aWFsTm9kZXMoc3RhdGUub3Blbl9ub2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWRfbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0SW5pdGlhbE5vZGVzKHN0YXRlLnNlbGVjdGVkX25vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG11c3RfbG9hZF9vbl9kZW1hbmQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLnNldEluaXRpYWxTdGF0ZU9uRGVtYW5kID0gZnVuY3Rpb24gKHN0YXRlLCBjYl9maW5pc2hlZCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEluaXRpYWxTdGF0ZU9uRGVtYW5kKHN0YXRlLm9wZW5fbm9kZXMsIHN0YXRlLnNlbGVjdGVkX25vZGUsIGNiX2ZpbmlzaGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiX2ZpbmlzaGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLmdldE5vZGVJZFRvQmVTZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTdGF0ZUZyb21TdG9yYWdlKCk7XG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5zZWxlY3RlZF9ub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuc2VsZWN0ZWRfbm9kZVswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5fcGFyc2VTdGF0ZSA9IGZ1bmN0aW9uIChqc29uX2RhdGEpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gJC5wYXJzZUpTT04oanNvbl9kYXRhKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0ZWRfbm9kZSBpcyBhbiBpbnQgKGluc3RlYWQgb2YgYW4gYXJyYXkpXG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5zZWxlY3RlZF9ub2RlICYmIHV0aWxfMS5pc0ludChzdGF0ZS5zZWxlY3RlZF9ub2RlKSkge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0byBhcnJheVxuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRfbm9kZSA9IFtzdGF0ZS5zZWxlY3RlZF9ub2RlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbiAgICBTYXZlU3RhdGVIYW5kbGVyLnByb3RvdHlwZS5fbG9hZEZyb21TdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50cmVlX3dpZGdldC5vcHRpb25zLm9uR2V0U3RhdGVGcm9tU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJlZV93aWRnZXQub3B0aW9ucy5vbkdldFN0YXRlRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN1cHBvcnRzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmdldEtleU5hbWUoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLl9vcGVuSW5pdGlhbE5vZGVzID0gZnVuY3Rpb24gKG5vZGVfaWRzKSB7XG4gICAgICAgIHZhciBtdXN0X2xvYWRfb25fZGVtYW5kID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbm9kZV9pZHNfMSA9IG5vZGVfaWRzOyBfaSA8IG5vZGVfaWRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZV9pZCA9IG5vZGVfaWRzXzFbX2ldO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVfd2lkZ2V0LmdldE5vZGVCeUlkKG5vZGVfaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUubG9hZF9vbl9kZW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pc19vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG11c3RfbG9hZF9vbl9kZW1hbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXVzdF9sb2FkX29uX2RlbWFuZDtcbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLl9zZWxlY3RJbml0aWFsTm9kZXMgPSBmdW5jdGlvbiAobm9kZV9pZHMpIHtcbiAgICAgICAgdmFyIHNlbGVjdF9jb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbm9kZV9pZHNfMiA9IG5vZGVfaWRzOyBfaSA8IG5vZGVfaWRzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZV9pZCA9IG5vZGVfaWRzXzJbX2ldO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVfd2lkZ2V0LmdldE5vZGVCeUlkKG5vZGVfaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RfY291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmVlX3dpZGdldC5zZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQuc2VsZWN0X25vZGVfaGFuZGxlci5hZGRUb1NlbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdF9jb3VudCAhPT0gMDtcbiAgICB9O1xuICAgIFNhdmVTdGF0ZUhhbmRsZXIucHJvdG90eXBlLl9yZXNldFNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdF9ub2RlX2hhbmRsZXIgPSB0aGlzLnRyZWVfd2lkZ2V0LnNlbGVjdF9ub2RlX2hhbmRsZXI7XG4gICAgICAgIGlmIChzZWxlY3Rfbm9kZV9oYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfbm9kZXMgPSBzZWxlY3Rfbm9kZV9oYW5kbGVyLmdldFNlbGVjdGVkTm9kZXMoKTtcbiAgICAgICAgICAgIHNlbGVjdGVkX25vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rfbm9kZV9oYW5kbGVyLnJlbW92ZUZyb21TZWxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuX3NldEluaXRpYWxTdGF0ZU9uRGVtYW5kID0gZnVuY3Rpb24gKG5vZGVfaWRzX3BhcmFtLCBzZWxlY3RlZF9ub2RlcywgY2JfZmluaXNoZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGxvYWRpbmdfY291bnQgPSAwO1xuICAgICAgICB2YXIgbm9kZV9pZHMgPSBub2RlX2lkc19wYXJhbTtcbiAgICAgICAgdmFyIG9wZW5Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdfbm9kZXNfaWRzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG5vZGVfaWRzXzMgPSBub2RlX2lkczsgX2kgPCBub2RlX2lkc18zLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlX2lkID0gbm9kZV9pZHNfM1tfaV07XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBfdGhpcy50cmVlX3dpZGdldC5nZXROb2RlQnlJZChub2RlX2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3X25vZGVzX2lkcy5wdXNoKG5vZGVfaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLmlzX2xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxvYWRfb25fZGVtYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEFuZE9wZW5Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX29wZW5Ob2RlKG5vZGUsIGZhbHNlLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVfaWRzID0gbmV3X25vZGVzX2lkcztcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc2VsZWN0SW5pdGlhbE5vZGVzKHNlbGVjdGVkX25vZGVzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyZWVfd2lkZ2V0Ll9yZWZyZXNoRWxlbWVudHMobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9hZGluZ19jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNiX2ZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBsb2FkQW5kT3Blbk5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbG9hZGluZ19jb3VudCArPSAxO1xuICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX29wZW5Ob2RlKG5vZGUsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ19jb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIG9wZW5Ob2RlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9wZW5Ob2RlcygpO1xuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuZ2V0S2V5TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMuc2F2ZVN0YXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmVlX3dpZGdldC5vcHRpb25zLnNhdmVTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyZWVcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2F2ZVN0YXRlSGFuZGxlci5wcm90b3R5cGUuc3VwcG9ydHNMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ZXN0U3VwcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIElzIGxvY2FsIHN0b3JhZ2Ugc3VwcG9ydGVkP1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBwb3NzaWJsZSB0byBzdG9yZSBhbiBpdGVtLiBTYWZhcmkgZG9lcyBub3QgYWxsb3cgdGhpcyBpbiBwcml2YXRlIGJyb3dzaW5nIG1vZGUuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IFwiX3N0b3JhZ2VfdGVzdFwiO1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzTG9jYWxTdG9yYWdlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzTG9jYWxTdG9yYWdlID0gdGVzdFN1cHBvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNMb2NhbFN0b3JhZ2U7XG4gICAgfTtcbiAgICByZXR1cm4gU2F2ZVN0YXRlSGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNhdmVTdGF0ZUhhbmRsZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBTY3JvbGxIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcm9sbEhhbmRsZXIodHJlZV93aWRnZXQpIHtcbiAgICAgICAgdGhpcy50cmVlX3dpZGdldCA9IHRyZWVfd2lkZ2V0O1xuICAgICAgICB0aGlzLnByZXZpb3VzX3RvcCA9IC0xO1xuICAgICAgICB0aGlzLmlzX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuICAgIFNjcm9sbEhhbmRsZXIucHJvdG90eXBlLmNoZWNrU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9lbnN1cmVJbml0KCk7XG4gICAgICAgIGlmICh0aGlzLnRyZWVfd2lkZ2V0LmRuZF9oYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgaG92ZXJlZF9hcmVhID0gdGhpcy50cmVlX3dpZGdldC5kbmRfaGFuZGxlci5ob3ZlcmVkX2FyZWE7XG4gICAgICAgICAgICBpZiAoaG92ZXJlZF9hcmVhICYmIGhvdmVyZWRfYXJlYS50b3AgIT09IHRoaXMucHJldmlvdXNfdG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c190b3AgPSBob3ZlcmVkX2FyZWEudG9wO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzY3JvbGxfcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVNjcm9sbGluZ1dpdGhTY3JvbGxQYXJlbnQoaG92ZXJlZF9hcmVhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVNjcm9sbGluZ1dpdGhEb2N1bWVudChob3ZlcmVkX2FyZWEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAodG9wKSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUluaXQoKTtcbiAgICAgICAgaWYgKHRoaXMuJHNjcm9sbF9wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjcm9sbF9wYXJlbnRbMF0uc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRyZWVfdG9wID0gdGhpcy50cmVlX3dpZGdldC4kZWwub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKHRvcCArIHRyZWVfdG9wKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUluaXQoKTtcbiAgICAgICAgdmFyIGVsZW1lbnRfYm90dG9tO1xuICAgICAgICB2YXIgdmlld19ib3R0b207XG4gICAgICAgIHZhciBlbGVtZW50X3RvcDtcbiAgICAgICAgdmFyIHZpZXdfdG9wO1xuICAgICAgICBpZiAodGhpcy4kc2Nyb2xsX3BhcmVudCkge1xuICAgICAgICAgICAgdmlld190b3AgPSAwO1xuICAgICAgICAgICAgdmlld19ib3R0b20gPSB0aGlzLiRzY3JvbGxfcGFyZW50LmhlaWdodCgpO1xuICAgICAgICAgICAgZWxlbWVudF90b3AgPSAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSB0aGlzLnNjcm9sbF9wYXJlbnRfdG9wO1xuICAgICAgICAgICAgZWxlbWVudF9ib3R0b20gPSBlbGVtZW50X3RvcCArICRlbGVtZW50LmhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmlld190b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB2aWV3X2JvdHRvbSA9IHZpZXdfdG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgZWxlbWVudF90b3AgPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBlbGVtZW50X2JvdHRvbSA9IGVsZW1lbnRfdG9wICsgJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRfYm90dG9tIDw9IHZpZXdfYm90dG9tICYmIGVsZW1lbnRfdG9wID49IHZpZXdfdG9wO1xuICAgIH07XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuX2luaXRTY3JvbGxQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBnZXRQYXJlbnRXaXRoT3ZlcmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3NzX2F0dHJpYnV0ZXMgPSBbXCJvdmVyZmxvd1wiLCBcIm92ZXJmbG93LXlcIl07XG4gICAgICAgICAgICB2YXIgaGFzT3ZlckZsb3cgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjc3NfYXR0cmlidXRlc18xID0gY3NzX2F0dHJpYnV0ZXM7IF9pIDwgY3NzX2F0dHJpYnV0ZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSBjc3NfYXR0cmlidXRlc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93X3ZhbHVlID0gJGVsLmNzcyhhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93X3ZhbHVlID09PSBcImF1dG9cIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dfdmFsdWUgPT09IFwic2Nyb2xsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaGFzT3ZlckZsb3coX3RoaXMudHJlZV93aWRnZXQuJGVsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy50cmVlX3dpZGdldC4kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gX3RoaXMudHJlZV93aWRnZXQuJGVsLnBhcmVudHMoKS5nZXQoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNPdmVyRmxvdygkZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzZXREb2N1bWVudEFzU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2Nyb2xsX3BhcmVudF90b3AgPSAwO1xuICAgICAgICAgICAgX3RoaXMuJHNjcm9sbF9wYXJlbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy50cmVlX3dpZGdldC4kZWwuY3NzKFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIikge1xuICAgICAgICAgICAgc2V0RG9jdW1lbnRBc1Njcm9sbFBhcmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkc2Nyb2xsX3BhcmVudCA9IGdldFBhcmVudFdpdGhPdmVyZmxvdygpO1xuICAgICAgICBpZiAoJHNjcm9sbF9wYXJlbnQgJiZcbiAgICAgICAgICAgICRzY3JvbGxfcGFyZW50Lmxlbmd0aCAmJlxuICAgICAgICAgICAgJHNjcm9sbF9wYXJlbnRbMF0udGFnTmFtZSAhPT0gXCJIVE1MXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjcm9sbF9wYXJlbnQgPSAkc2Nyb2xsX3BhcmVudDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3BhcmVudF90b3AgPSB0aGlzLiRzY3JvbGxfcGFyZW50Lm9mZnNldCgpLnRvcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldERvY3VtZW50QXNTY3JvbGxQYXJlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIFNjcm9sbEhhbmRsZXIucHJvdG90eXBlLl9lbnN1cmVJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTY3JvbGxQYXJlbnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuX2hhbmRsZVNjcm9sbGluZ1dpdGhTY3JvbGxQYXJlbnQgPSBmdW5jdGlvbiAoYXJlYSkge1xuICAgICAgICBpZiAoIXRoaXMuJHNjcm9sbF9wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZV9ib3R0b20gPSB0aGlzLnNjcm9sbF9wYXJlbnRfdG9wICtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxfcGFyZW50WzBdLm9mZnNldEhlaWdodCAtXG4gICAgICAgICAgICAgICAgYXJlYS5ib3R0b207XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VfYm90dG9tIDwgMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxfcGFyZW50WzBdLnNjcm9sbFRvcCArPSAyMDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVfd2lkZ2V0LnJlZnJlc2hIaXRBcmVhcygpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNfdG9wID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmVhLnRvcCAtIHRoaXMuc2Nyb2xsX3BhcmVudF90b3AgPCAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbF9wYXJlbnRbMF0uc2Nyb2xsVG9wIC09IDIwO1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZV93aWRnZXQucmVmcmVzaEhpdEFyZWFzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c190b3AgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2Nyb2xsSGFuZGxlci5wcm90b3R5cGUuX2hhbmRsZVNjcm9sbGluZ1dpdGhEb2N1bWVudCA9IGZ1bmN0aW9uIChhcmVhKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZV90b3AgPSBhcmVhLnRvcCAtICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoZGlzdGFuY2VfdG9wIDwgMjApIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtIDIwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkKHdpbmRvdykuaGVpZ2h0KCkgLSAoYXJlYS5ib3R0b20gLSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSkgPFxuICAgICAgICAgICAgMjApIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIDIwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjcm9sbEhhbmRsZXI7XG59KCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTY3JvbGxIYW5kbGVyO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgU2VsZWN0Tm9kZUhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VsZWN0Tm9kZUhhbmRsZXIodHJlZV93aWRnZXQpIHtcbiAgICAgICAgdGhpcy50cmVlX3dpZGdldCA9IHRyZWVfd2lkZ2V0O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIFNlbGVjdE5vZGVIYW5kbGVyLnByb3RvdHlwZS5nZXRTZWxlY3RlZE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZF9ub2RlcyA9IHRoaXMuZ2V0U2VsZWN0ZWROb2RlcygpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRfbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRfbm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdE5vZGVIYW5kbGVyLnByb3RvdHlwZS5nZXRTZWxlY3RlZE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZF9ub2RlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5zZWxlY3RlZF9ub2Rlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX25vZGVzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMudHJlZV93aWRnZXQuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZF9ub2RlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Tm9kZUhhbmRsZXIucHJvdG90eXBlLmdldFNlbGVjdGVkTm9kZXNVbmRlciA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaXNQYXJlbnRPZih0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfbm9kZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuc2VsZWN0ZWRfbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub2Rlcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVfd2lkZ2V0LmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgcGFyZW50LmlzUGFyZW50T2Yobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX25vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRfbm9kZXM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdE5vZGVIYW5kbGVyLnByb3RvdHlwZS5pc05vZGVTZWxlY3RlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUuaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9kZXNbbm9kZS5pZF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZS5lbGVtZW50ID09PSBub2RlLmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdE5vZGVIYW5kbGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnNlbGVjdGVkX3NpbmdsZV9ub2RlID0gbnVsbDtcbiAgICB9O1xuICAgIFNlbGVjdE5vZGVIYW5kbGVyLnByb3RvdHlwZS5yZW1vdmVGcm9tU2VsZWN0aW9uID0gZnVuY3Rpb24gKG5vZGUsIGluY2x1ZGVfY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluY2x1ZGVfY2hpbGRyZW4gPT09IHZvaWQgMCkgeyBpbmNsdWRlX2NoaWxkcmVuID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKG5vZGUuaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUgJiZcbiAgICAgICAgICAgICAgICBub2RlLmVsZW1lbnQgPT09IHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfc2luZ2xlX25vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRfbm9kZXNbbm9kZS5pZF07XG4gICAgICAgICAgICBpZiAoaW5jbHVkZV9jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIG5vZGUuaXRlcmF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5zZWxlY3RlZF9ub2Rlc1tub2RlLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdE5vZGVIYW5kbGVyLnByb3RvdHlwZS5hZGRUb1NlbGVjdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXNbbm9kZS5pZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9zaW5nbGVfbm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3ROb2RlSGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNlbGVjdE5vZGVIYW5kbGVyO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBub2RlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIE5vZGVFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGVFbGVtZW50KG5vZGUsIHRyZWVfd2lkZ2V0KSB7XG4gICAgICAgIHRoaXMuaW5pdChub2RlLCB0cmVlX3dpZGdldCk7XG4gICAgfVxuICAgIE5vZGVFbGVtZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKG5vZGUsIHRyZWVfd2lkZ2V0KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMudHJlZV93aWRnZXQgPSB0cmVlX3dpZGdldDtcbiAgICAgICAgaWYgKCFub2RlLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIG5vZGUuZWxlbWVudCA9IHRoaXMudHJlZV93aWRnZXQuZWxlbWVudC5nZXQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQobm9kZS5lbGVtZW50KTtcbiAgICB9O1xuICAgIE5vZGVFbGVtZW50LnByb3RvdHlwZS5hZGREcm9wSGludCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IG5vZGVfMS5Qb3NpdGlvbi5JbnNpZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm9yZGVyRHJvcEhpbnQodGhpcy4kZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdob3N0RHJvcEhpbnQodGhpcy5ub2RlLCB0aGlzLiRlbGVtZW50LCBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGVFbGVtZW50LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkbGkgPSB0aGlzLmdldExpKCk7XG4gICAgICAgICRsaS5hZGRDbGFzcyhcImpxdHJlZS1zZWxlY3RlZFwiKTtcbiAgICAgICAgJGxpLmF0dHIoXCJhcmlhLXNlbGVjdGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgdmFyICRzcGFuID0gdGhpcy5nZXRTcGFuKCk7XG4gICAgICAgICRzcGFuLmF0dHIoXCJ0YWJpbmRleFwiLCB0aGlzLnRyZWVfd2lkZ2V0Lm9wdGlvbnMudGFiSW5kZXgpO1xuICAgICAgICAkc3Bhbi5mb2N1cygpO1xuICAgIH07XG4gICAgTm9kZUVsZW1lbnQucHJvdG90eXBlLmRlc2VsZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGxpID0gdGhpcy5nZXRMaSgpO1xuICAgICAgICAkbGkucmVtb3ZlQ2xhc3MoXCJqcXRyZWUtc2VsZWN0ZWRcIik7XG4gICAgICAgICRsaS5hdHRyKFwiYXJpYS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB2YXIgJHNwYW4gPSB0aGlzLmdldFNwYW4oKTtcbiAgICAgICAgJHNwYW4ucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO1xuICAgICAgICAkc3Bhbi5ibHVyKCk7XG4gICAgfTtcbiAgICBOb2RlRWxlbWVudC5wcm90b3R5cGUuZ2V0VWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKFwidWw6Zmlyc3RcIik7XG4gICAgfTtcbiAgICBOb2RlRWxlbWVudC5wcm90b3R5cGUuZ2V0U3BhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgICAgIC5jaGlsZHJlbihcIi5qcXRyZWUtZWxlbWVudFwiKVxuICAgICAgICAgICAgLmZpbmQoXCJzcGFuLmpxdHJlZS10aXRsZVwiKTtcbiAgICB9O1xuICAgIE5vZGVFbGVtZW50LnByb3RvdHlwZS5nZXRMaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZUVsZW1lbnQ7XG59KCkpO1xuZXhwb3J0cy5Ob2RlRWxlbWVudCA9IE5vZGVFbGVtZW50O1xudmFyIEZvbGRlckVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvbGRlckVsZW1lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9sZGVyRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGb2xkZXJFbGVtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG9uX2ZpbmlzaGVkLCBzbGlkZSwgYW5pbWF0aW9uU3BlZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHNsaWRlID09PSB2b2lkIDApIHsgc2xpZGUgPSB0cnVlOyB9XG4gICAgICAgIGlmIChhbmltYXRpb25TcGVlZCA9PT0gdm9pZCAwKSB7IGFuaW1hdGlvblNwZWVkID0gXCJmYXN0XCI7IH1cbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuaXNfb3Blbikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlzX29wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdmFyICRidXR0b24gPSB0aGlzLmdldEJ1dHRvbigpO1xuICAgICAgICAgICAgJGJ1dHRvbi5yZW1vdmVDbGFzcyhcImpxdHJlZS1jbG9zZWRcIik7XG4gICAgICAgICAgICAkYnV0dG9uLmh0bWwoXCJcIik7XG4gICAgICAgICAgICB2YXIgYnV0dG9uX2VsID0gJGJ1dHRvbi5nZXQoMCk7XG4gICAgICAgICAgICBpZiAoYnV0dG9uX2VsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSB0aGlzLnRyZWVfd2lkZ2V0LnJlbmRlcmVyLm9wZW5lZF9pY29uX2VsZW1lbnQuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBidXR0b25fZWwuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZG9PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAkbGkgPSBfdGhpcy5nZXRMaSgpO1xuICAgICAgICAgICAgICAgICRsaS5yZW1vdmVDbGFzcyhcImpxdHJlZS1jbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgdmFyICRzcGFuID0gX3RoaXMuZ2V0U3BhbigpO1xuICAgICAgICAgICAgICAgICRzcGFuLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAob25fZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25fZmluaXNoZWQoX3RoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnRyZWVfd2lkZ2V0Ll90cmlnZ2VyRXZlbnQoXCJ0cmVlLm9wZW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBfdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVbCgpLnNsaWRlRG93bihhbmltYXRpb25TcGVlZCwgZG9PcGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWwoKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgZG9PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZvbGRlckVsZW1lbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHNsaWRlLCBhbmltYXRpb25TcGVlZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2xpZGUgPT09IHZvaWQgMCkgeyBzbGlkZSA9IHRydWU7IH1cbiAgICAgICAgaWYgKGFuaW1hdGlvblNwZWVkID09PSB2b2lkIDApIHsgYW5pbWF0aW9uU3BlZWQgPSBcImZhc3RcIjsgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pc19vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgJGJ1dHRvbiA9IHRoaXMuZ2V0QnV0dG9uKCk7XG4gICAgICAgICAgICAkYnV0dG9uLmFkZENsYXNzKFwianF0cmVlLWNsb3NlZFwiKTtcbiAgICAgICAgICAgICRidXR0b24uaHRtbChcIlwiKTtcbiAgICAgICAgICAgIHZhciBidXR0b25fZWwgPSAkYnV0dG9uLmdldCgwKTtcbiAgICAgICAgICAgIGlmIChidXR0b25fZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IHRoaXMudHJlZV93aWRnZXQucmVuZGVyZXIuY2xvc2VkX2ljb25fZWxlbWVudC5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbl9lbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAkbGkgPSBfdGhpcy5nZXRMaSgpO1xuICAgICAgICAgICAgICAgICRsaS5hZGRDbGFzcyhcImpxdHJlZS1jbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgdmFyICRzcGFuID0gX3RoaXMuZ2V0U3BhbigpO1xuICAgICAgICAgICAgICAgICRzcGFuLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJlZV93aWRnZXQuX3RyaWdnZXJFdmVudChcInRyZWUuY2xvc2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBfdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVbCgpLnNsaWRlVXAoYW5pbWF0aW9uU3BlZWQsIGRvQ2xvc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVbCgpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBkb0Nsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZvbGRlckVsZW1lbnQucHJvdG90eXBlLmFkZERyb3BIaW50ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlLmlzX29wZW4gJiYgcG9zaXRpb24gPT09IG5vZGVfMS5Qb3NpdGlvbi5JbnNpZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm9yZGVyRHJvcEhpbnQodGhpcy4kZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdob3N0RHJvcEhpbnQodGhpcy5ub2RlLCB0aGlzLiRlbGVtZW50LCBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZvbGRlckVsZW1lbnQucHJvdG90eXBlLmdldEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgICAgIC5jaGlsZHJlbihcIi5qcXRyZWUtZWxlbWVudFwiKVxuICAgICAgICAgICAgLmZpbmQoXCJhLmpxdHJlZS10b2dnbGVyXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvbGRlckVsZW1lbnQ7XG59KE5vZGVFbGVtZW50KSk7XG5leHBvcnRzLkZvbGRlckVsZW1lbnQgPSBGb2xkZXJFbGVtZW50O1xudmFyIEJvcmRlckRyb3BIaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvcmRlckRyb3BIaW50KCRlbGVtZW50KSB7XG4gICAgICAgIHZhciAkZGl2ID0gJGVsZW1lbnQuY2hpbGRyZW4oXCIuanF0cmVlLWVsZW1lbnRcIik7XG4gICAgICAgIHZhciB3aWR0aCA9ICRlbGVtZW50LndpZHRoKCkgLSA0O1xuICAgICAgICB0aGlzLiRoaW50ID0gJCgnPHNwYW4gY2xhc3M9XCJqcXRyZWUtYm9yZGVyXCI+PC9zcGFuPicpO1xuICAgICAgICAkZGl2LmFwcGVuZCh0aGlzLiRoaW50KTtcbiAgICAgICAgdGhpcy4kaGludC5jc3Moe1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiAkZGl2Lm91dGVySGVpZ2h0KCkgLSA0XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBCb3JkZXJEcm9wSGludC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRoaW50LnJlbW92ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIEJvcmRlckRyb3BIaW50O1xufSgpKTtcbmV4cG9ydHMuQm9yZGVyRHJvcEhpbnQgPSBCb3JkZXJEcm9wSGludDtcbnZhciBHaG9zdERyb3BIaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdob3N0RHJvcEhpbnQobm9kZSwgJGVsZW1lbnQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy4kZ2hvc3QgPSAkKFwiPGxpIGNsYXNzPVxcXCJqcXRyZWVfY29tbW9uIGpxdHJlZS1naG9zdFxcXCI+PHNwYW4gY2xhc3M9XFxcImpxdHJlZV9jb21tb24ganF0cmVlLWNpcmNsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJqcXRyZWVfY29tbW9uIGpxdHJlZS1saW5lXFxcIj48L3NwYW4+PC9saT5cIik7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbm9kZV8xLlBvc2l0aW9uLkFmdGVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVBZnRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID09PSBub2RlXzEuUG9zaXRpb24uQmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVCZWZvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwb3NpdGlvbiA9PT0gbm9kZV8xLlBvc2l0aW9uLkluc2lkZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuaXNGb2xkZXIoKSAmJiBub2RlLmlzX29wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVJbnNpZGVPcGVuRm9sZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVJbnNpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHaG9zdERyb3BIaW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGdob3N0LnJlbW92ZSgpO1xuICAgIH07XG4gICAgR2hvc3REcm9wSGludC5wcm90b3R5cGUubW92ZUFmdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFmdGVyKHRoaXMuJGdob3N0KTtcbiAgICB9O1xuICAgIEdob3N0RHJvcEhpbnQucHJvdG90eXBlLm1vdmVCZWZvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYmVmb3JlKHRoaXMuJGdob3N0KTtcbiAgICB9O1xuICAgIEdob3N0RHJvcEhpbnQucHJvdG90eXBlLm1vdmVJbnNpZGVPcGVuRm9sZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMubm9kZS5jaGlsZHJlblswXS5lbGVtZW50KS5iZWZvcmUodGhpcy4kZ2hvc3QpO1xuICAgIH07XG4gICAgR2hvc3REcm9wSGludC5wcm90b3R5cGUubW92ZUluc2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZnRlcih0aGlzLiRnaG9zdCk7XG4gICAgICAgIHRoaXMuJGdob3N0LmFkZENsYXNzKFwianF0cmVlLWluc2lkZVwiKTtcbiAgICB9O1xuICAgIHJldHVybiBHaG9zdERyb3BIaW50O1xufSgpKTtcbmV4cG9ydHMuR2hvc3REcm9wSGludCA9IEdob3N0RHJvcEhpbnQ7XG5cblxuLyoqKi8gfSksXG4vKiAxMyAqLyxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7IiwiLy8gQGZsb3dcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuLi8uLi8uLi9ib3dlci9qcVRyZWUvYnVpbGQvdHJlZS5qcXVlcnknO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vLi4vcGFydGlhbHMvbm90aWZpY2F0aW9uJztcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gIGluZGV4IChpdGVtcywgaXRlbSkge1xyXG4gICAgdmFyIG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oKTtcclxuICAgIHRoaXMuanFUcmVlKGl0ZW1zLCBpdGVtKTtcclxuICAgIHRoaXMuZ2V0VXJsRnJvbVNlbGVjdCgpO1xyXG4gICAgdGhpcy5zZXJpYWxpemVNZW51KG5vdGlmaWNhdGlvbik7XHJcblxyXG4gICAgbm90aWZpY2F0aW9uLmRlc3Ryb3lSb3cobnVsbCwgJ2xpJyk7XHJcbiAgICBub3RpZmljYXRpb24uZmxhc2hNZXNzYWdlKCk7XHJcbiAgfVxyXG5cclxuICBzZXJpYWxpemVNZW51IChub3RpZmljYXRpb24pIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgXyQoJyNzYXZlLXNlcmlhbGl6ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIHNlcmlhbGl6ZSA9IF8kKCcjbGlzdCcpLnRyZWUoJ3RvSnNvbicpO1xyXG4gICAgICBfJC5wb3N0KHdpbmRvdy5sYXJvdXRlLnJvdXRlKCdiYWNrZW5kLm1lbnUuc2VyaWFsaXplJyksIHtzZXJpYWxpemV9KVxyXG4gICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBub3RpZmljYXRpb24uYWxlcnROb3RpZmljYXRpb24ocmVzcG9uc2UubWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5mYWlsKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmFsZXJ0Tm90aWZpY2F0aW9uKHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5tZXNzYWdlLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVcmxGcm9tU2VsZWN0ICgpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgXyQoJ3NlbGVjdFtuYW1lPWNhdGVnb3J5X2lkXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLnZhbHVlO1xyXG4gICAgICBsZXQgbmFtZSA9ICQodGhpcykuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgIF8kKCdpbnB1dFtuYW1lPW5hbWVdJykudmFsKG5hbWUpO1xyXG4gICAgICBfJCgnaW5wdXRbbmFtZT11cmxdJykudmFsKHVybCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBqcVRyZWUgKGl0ZW1zLCBpdGVtLCBzZWxlY3RvciA9ICcjbGlzdCcpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgXyQoc2VsZWN0b3IpLnRyZWUoe1xyXG4gICAgICBjbG9zZWRJY29uOiBfJCgnPGkgY2xhc3M9XCJpb24tcGx1c1wiPjwvaT4nKSxcclxuICAgICAgb3BlbmVkSWNvbjogXyQoJzxpIGNsYXNzPVwiaW9uLW1pbnVzXCI+PC9pPicpLFxyXG4gICAgICBkYXRhOiBpdGVtcyxcclxuICAgICAgZHJhZ0FuZERyb3A6IHRydWUsXHJcbiAgICAgIGF1dG9PcGVuOiBmYWxzZSxcclxuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgIG9uQ2FuTW92ZVRvOiBmdW5jdGlvbihtb3ZlZF9ub2RlLCB0YXJnZXRfbm9kZSwgcG9zaXRpb24pIHtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2luc2lkZScgJiYgIW1vdmVkX25vZGUuY2hpbGRyZW4ubGVuZ3RoICYmICF0YXJnZXRfbm9kZS5wYXJlbnQuaWQpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2FmdGVyJykge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNyZWF0ZUxpOiBmdW5jdGlvbihub2RlLCAkbGkpIHtcclxuICAgICAgICBpZiAoaXRlbSAhPSAwICYmIGl0ZW0uaWQgPT0gbm9kZS5pZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUubG9ja2VkKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRsaS5maW5kKCcuanF0cmVlLWVsZW1lbnQnKVxyXG4gICAgICAgICAgLmFwcGVuZCgnPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0IHRvb2xzXCI+XFxcclxuICAgICAgICAgICAgPGEgaHJlZj1cIicrbGFyb3V0ZS5yb3V0ZSgnYmFja2VuZC5tZW51LmVkaXQnLCB7bWVudTogbm9kZS5pZH0pKydcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4teHNcIj48aSBjbGFzcz1cImlvbi1lZGl0XCI+PC9pPjwvYT4gXFxcclxuICAgICAgICAgICAgPGEgaHJlZj1cIicrbGFyb3V0ZS5yb3V0ZSgnYmFja2VuZC5tZW51LmRlc3Ryb3knLCB7bWVudTogbm9kZS5pZH0pKydcIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRhbmdlciBkZWxldGUtYWN0aW9uXCI+PGkgY2xhc3M9XCJpb24tY2xvc2UtY2lyY2xlZFwiPjwvaT48L2E+XFxcclxuICAgICAgICAgICAgPC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cubWVudSA9IG5ldyBNZW51KCk7XHJcbiIsIi8vIEBmbG93XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuY2xhc3MgTm90aWZpY2F0aW9uIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0ICh0ZXh0KSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lSb3cgKGRhdGF0YWJsZSA9IG51bGwsIHJlbW92ZSA9IG51bGwsIHNlbGVjdG9yKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBlbCA9IHNlbGVjdG9yIHx8ICdhLmRlbGV0ZS1hY3Rpb24nO1xyXG4gICAgXyQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGVsLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgJHRoaXMgPSBfJCh0aGlzKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgZGVsZXRlVXJsID0gXyQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICBzd2FsKHtcclxuICAgICAgICB0aXRsZTogd2luZG93LmxhbmcuZ2V0KCdyZXBvc2l0b3JpZXMuc3dlZXRhbGVydC5xdWVzdGlvbicpLFxyXG4gICAgICAgIHRleHQ6IHNlbGYuX3RleHQsXHJcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI0RENkI1NScsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHdpbmRvdy5sYW5nLmdldCgncmVwb3NpdG9yaWVzLnN3ZWV0YWxlcnQub2snKSxcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB3aW5kb3cubGFuZy5nZXQoJ3JlcG9zaXRvcmllcy5zd2VldGFsZXJ0LmNhbmNlbCcpXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF8kLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICB1cmw6IGRlbGV0ZVVybCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLmFsZXJ0Tm90aWZpY2F0aW9uKHJlc3BvbnNlLm1lc3NhZ2UsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgZGF0YXRhYmxlLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRhdGF0YWJsZSAmJiByZW1vdmUpIHtcclxuICAgICAgICAgICAgICAkdGhpcy5jbG9zZXN0KHJlbW92ZSkuZmFkZU91dCg0MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWxlcnROb3RpZmljYXRpb24ocmVzcG9uc2UucmVzcG9uc2VKU09OLm1lc3NhZ2UsIGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgZnVuY3Rpb24gKGRpc21pc3MpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbGVydE5vdGlmaWNhdGlvbiAobWVzc2FnZSwgc3RhdHVzID0gdHJ1ZSwgZGVsYXkgPSAzMDAwKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIGxldCBhbGVydFR5cGUgPSBzdGF0dXMgPyAnYWxlcnQtc3VjY2VzcycgOiAnYWxlcnQtZGFuZ2VyJztcclxuICAgIF8kKCcjbm90aWZpY2F0aW9uIC5hbGVydC1jb250ZW50JykuaHRtbCgnJyk7XHJcbiAgICBfJChtZXNzYWdlKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICBfJCgnI25vdGlmaWNhdGlvbiAuYWxlcnQtY29udGVudCcpLmFwcGVuZCgnPHN0cm9uZz4nICsgZWxlbWVudCArICc8L3N0cm9uZz48YnI+Jyk7XHJcbiAgICB9KTtcclxuICAgIF8kKCcjbm90aWZpY2F0aW9uJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpLnJlbW92ZUNsYXNzKCdhbGVydC1zdWNjZXNzIGFsZXJ0LWRhbmdlcicpLmFkZENsYXNzKGFsZXJ0VHlwZSkuZGVsYXkoZGVsYXkpLnNob3coZnVuY3Rpb24gKCkge1xyXG4gICAgICBfJCh0aGlzKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZsYXNoTWVzc2FnZSAoKSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9IHdpbmRvdy5mbGFzaF9tZXNzYWdlO1xyXG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlLnN0YXR1cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdmFyIGUgPSBtZXNzYWdlO1xyXG4gICAgICB0aGlzLmFsZXJ0Tm90aWZpY2F0aW9uKGUubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9