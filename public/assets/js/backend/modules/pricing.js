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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ "./resources/assets/js/backend/modules/pricing.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/backend/modules/pricing.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../partials/notification */ "./resources/assets/js/backend/partials/notification.js");
// @flow


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Pricing = /*#__PURE__*/function () {
  function Pricing() {
    _classCallCheck(this, Pricing);
  }

  _createClass(Pricing, [{
    key: "form",
    value: function form() {
      var notification = new _partials_notification__WEBPACK_IMPORTED_MODULE_0__["default"]();
      notification.flashMessage();
      var _$ = window.jQuery;
    }
  }]);

  return Pricing;
}();

/* harmony default export */ __webpack_exports__["default"] = (window.pricing = new Pricing());

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

/***/ 11:
/*!**************************************************************!*\
  !*** multi ./resources/assets/js/backend/modules/pricing.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/app/resources/assets/js/backend/modules/pricing.js */"./resources/assets/js/backend/modules/pricing.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrZW5kL21vZHVsZXMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2JhY2tlbmQvcGFydGlhbHMvbm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIlByaWNpbmciLCJub3RpZmljYXRpb24iLCJOb3RpZmljYXRpb24iLCJmbGFzaE1lc3NhZ2UiLCJfJCIsIndpbmRvdyIsImpRdWVyeSIsInByaWNpbmciLCJfdGV4dCIsInRleHQiLCJkYXRhdGFibGUiLCJyZW1vdmUiLCJzZWxlY3RvciIsIiQiLCJzZWxmIiwiZWwiLCJkb2N1bWVudCIsIm9uIiwiZSIsIiR0aGlzIiwicHJldmVudERlZmF1bHQiLCJkZWxldGVVcmwiLCJhdHRyIiwic3dhbCIsInRpdGxlIiwibGFuZyIsImdldCIsInR5cGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJhbGVydE5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJyZWZyZXNoIiwiY2xvc2VzdCIsImZhZGVPdXQiLCJlcnJvciIsInJlc3BvbnNlSlNPTiIsImRpc21pc3MiLCJzdGF0dXMiLCJkZWxheSIsImFsZXJ0VHlwZSIsImh0bWwiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiYXBwZW5kIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2hvdyIsImZsYXNoX21lc3NhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUE0RDtBQUM3RCxDQUFDLFNBQ2dDO0FBQ2pDLENBQUMscUJBQXFCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLElBQUk7QUFDN0U7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsTUFBTSxRQUFRLElBQUk7QUFDeEY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOW9EQTtBQUFBO0FBQUE7QUFDYTs7Ozs7Ozs7QUFFYjs7SUFFTUEsTzs7Ozs7OzsyQkFDSTtBQUNOLFVBQUlDLFlBQVksR0FBRyxJQUFJQyw4REFBSixFQUFuQjtBQUNBRCxrQkFBWSxDQUFDRSxZQUFiO0FBQ0EsVUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLE1BQWhCO0FBQ0Q7Ozs7OztBQUdZRCxxRUFBTSxDQUFDRSxPQUFQLEdBQWlCLElBQUlQLE9BQUosRUFBaEMsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFDYTs7Ozs7Ozs7QUFFYjs7SUFDTUUsWTtBQUNKLDBCQUFlO0FBQUE7O0FBQ2IsU0FBS00sS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs0QkFFUUMsSSxFQUFNO0FBQ2IsV0FBS0QsS0FBTCxHQUFhQyxJQUFiO0FBQ0Q7OztpQ0FFc0Q7QUFBQSxVQUEzQ0MsU0FBMkMsdUVBQS9CLElBQStCO0FBQUEsVUFBekJDLE1BQXlCLHVFQUFoQixJQUFnQjtBQUFBLFVBQVZDLFFBQVU7QUFDckQsVUFBSVIsRUFBRSxHQUFHQyxNQUFNLENBQUNRLENBQWhCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJQyxFQUFFLEdBQUdILFFBQVEsSUFBSSxpQkFBckI7O0FBQ0FSLFFBQUUsQ0FBQ1ksUUFBRCxDQUFGLENBQWFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUJGLEVBQXpCLEVBQTZCLFVBQVVHLENBQVYsRUFBYTtBQUN4QyxZQUFJQyxLQUFLLEdBQUdmLEVBQUUsQ0FBQyxJQUFELENBQWQ7O0FBQ0FjLFNBQUMsQ0FBQ0UsY0FBRjs7QUFDQSxZQUFJQyxTQUFTLEdBQUdqQixFQUFFLENBQUMsSUFBRCxDQUFGLENBQVNrQixJQUFULENBQWMsTUFBZCxDQUFoQjs7QUFDQUMsMERBQUksQ0FBQztBQUNIQyxlQUFLLEVBQUVuQixNQUFNLENBQUNvQixJQUFQLENBQVlDLEdBQVosQ0FBZ0Isa0NBQWhCLENBREo7QUFFSGpCLGNBQUksRUFBRUssSUFBSSxDQUFDTixLQUZSO0FBR0htQixjQUFJLEVBQUUsU0FISDtBQUlIQywwQkFBZ0IsRUFBRSxJQUpmO0FBS0hDLDRCQUFrQixFQUFFLFNBTGpCO0FBTUhDLDJCQUFpQixFQUFFekIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZQyxHQUFaLENBQWdCLDRCQUFoQixDQU5oQjtBQU9ISywwQkFBZ0IsRUFBRTFCLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWUMsR0FBWixDQUFnQixnQ0FBaEI7QUFQZixTQUFELENBQUosQ0FRR00sSUFSSCxDQVFRLFlBQVk7QUFDbEI1QixZQUFFLENBQUM2QixJQUFILENBQVE7QUFDTk4sZ0JBQUksRUFBRSxRQURBO0FBRU5PLGVBQUcsRUFBRWIsU0FGQztBQUdOYyxtQkFBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzNCdEIsa0JBQUksQ0FBQ3VCLGlCQUFMLENBQXVCRCxRQUFRLENBQUNFLE9BQWhDLEVBQXlDLElBQXpDOztBQUNBLGtCQUFJNUIsU0FBSixFQUFlO0FBQ2JBLHlCQUFTLENBQUM2QixPQUFWO0FBQ0Q7O0FBQ0Qsa0JBQUksQ0FBQzdCLFNBQUQsSUFBY0MsTUFBbEIsRUFBMEI7QUFDeEJRLHFCQUFLLENBQUNxQixPQUFOLENBQWM3QixNQUFkLEVBQXNCOEIsT0FBdEIsQ0FBOEIsR0FBOUIsRUFBbUMsWUFBVztBQUM1Q3RCLHVCQUFLLENBQUNSLE1BQU47QUFDRCxpQkFGRDtBQUdEO0FBQ0YsYUFiSztBQWNOK0IsaUJBQUssRUFBRSxlQUFVTixRQUFWLEVBQW9CO0FBQ3pCdEIsa0JBQUksQ0FBQ3VCLGlCQUFMLENBQXVCRCxRQUFRLENBQUNPLFlBQVQsQ0FBc0JMLE9BQTdDLEVBQXNELEtBQXREO0FBQ0Q7QUFoQkssV0FBUjtBQWtCRCxTQTNCRCxFQTJCRyxVQUFVTSxPQUFWLEVBQW1CO0FBQ3BCLGlCQUFPLEtBQVA7QUFDRCxTQTdCRDtBQThCRCxPQWxDRDtBQW1DRDs7O3NDQUVrQk4sTyxFQUFzQztBQUFBLFVBQTdCTyxNQUE2Qix1RUFBcEIsSUFBb0I7QUFBQSxVQUFkQyxLQUFjLHVFQUFOLElBQU07QUFDdkQsVUFBSTFDLEVBQUUsR0FBR0MsTUFBTSxDQUFDUSxDQUFoQjtBQUNBLFVBQUlrQyxTQUFTLEdBQUdGLE1BQU0sR0FBRyxlQUFILEdBQXFCLGNBQTNDOztBQUNBekMsUUFBRSxDQUFDLDhCQUFELENBQUYsQ0FBbUM0QyxJQUFuQyxDQUF3QyxFQUF4Qzs7QUFDQTVDLFFBQUUsQ0FBQ2tDLE9BQUQsQ0FBRixDQUFZVyxJQUFaLENBQWlCLFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ3pDL0MsVUFBRSxDQUFDLDhCQUFELENBQUYsQ0FBbUNnRCxNQUFuQyxDQUEwQyxhQUFhRCxPQUFiLEdBQXVCLGVBQWpFO0FBQ0QsT0FGRDs7QUFHQS9DLFFBQUUsQ0FBQyxlQUFELENBQUYsQ0FBb0JpRCxXQUFwQixDQUFnQyxRQUFoQyxFQUEwQ0MsV0FBMUMsQ0FBc0QsNEJBQXRELEVBQW9GQyxRQUFwRixDQUE2RlIsU0FBN0YsRUFBd0dELEtBQXhHLENBQThHQSxLQUE5RyxFQUFxSFUsSUFBckgsQ0FBMEgsWUFBWTtBQUNwSXBELFVBQUUsQ0FBQyxJQUFELENBQUYsQ0FBU2lELFdBQVQsQ0FBcUIsUUFBckI7QUFDRCxPQUZEO0FBR0Q7OzttQ0FFZTtBQUNkLFVBQUlmLE9BQU8sR0FBR2pDLE1BQU0sQ0FBQ29ELGFBQXJCOztBQUNBLFVBQUksT0FBT25CLE9BQU8sQ0FBQ08sTUFBZixLQUEwQixXQUE5QixFQUEyQztBQUN6QyxZQUFJM0IsQ0FBQyxHQUFHb0IsT0FBUjtBQUNBLGFBQUtELGlCQUFMLENBQXVCbkIsQ0FBQyxDQUFDb0IsT0FBekIsRUFBa0NwQixDQUFDLENBQUMyQixNQUFwQztBQUNEO0FBQ0Y7Ozs7OztBQUdZM0MsMkVBQWYsRSIsImZpbGUiOiIvYXNzZXRzL2pzL2JhY2tlbmQvbW9kdWxlcy9wcmljaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCIvKiFcbiAqIHN3ZWV0YWxlcnQyIHY2LjExLjVcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIHR5cGU6IG51bGwsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICBhbGxvd0VudGVyS2V5OiB0cnVlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IG51bGwsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogbnVsbCxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2FhYScsXG4gIGNhbmNlbEJ1dHRvbkNsYXNzOiBudWxsLFxuICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICBmb2N1c0NvbmZpcm06IHRydWUsXG4gIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VXaWR0aDogbnVsbCxcbiAgaW1hZ2VIZWlnaHQ6IG51bGwsXG4gIGltYWdlQWx0OiAnJyxcbiAgaW1hZ2VDbGFzczogbnVsbCxcbiAgdGltZXI6IG51bGwsXG4gIHdpZHRoOiA1MDAsXG4gIHBhZGRpbmc6IDIwLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGlucHV0OiBudWxsLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0Q2xhc3M6IG51bGwsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiAnNDBweCcsXG4gIG9uQmVmb3JlT3BlbjogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICB1c2VSZWplY3Rpb25zOiB0cnVlXG59O1xuXG52YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xuXG52YXIgcHJlZml4ID0gZnVuY3Rpb24gcHJlZml4KGl0ZW1zKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBpdGVtcykge1xuICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdpb3NmaXgnLCAnbW9kYWwnLCAnb3ZlcmxheScsICdmYWRlJywgJ3Nob3cnLCAnaGlkZScsICdub2FuaW1hdGlvbicsICdjbG9zZScsICd0aXRsZScsICdjb250ZW50JywgJ2J1dHRvbnN3cmFwcGVyJywgJ2NvbmZpcm0nLCAnY2FuY2VsJywgJ2ljb24nLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uZXJyb3InLCAncHJvZ3Jlc3NzdGVwcycsICdhY3RpdmVwcm9ncmVzc3N0ZXAnLCAncHJvZ3Jlc3NjaXJjbGUnLCAncHJvZ3Jlc3NsaW5lJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbiddKTtcblxudmFyIGljb25UeXBlcyA9IHByZWZpeChbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ10pO1xuXG52YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuXG4vKlxuICogU2V0IGhvdmVyLCBhY3RpdmUgYW5kIGZvY3VzLXN0YXRlcyBmb3IgYnV0dG9ucyAoc291cmNlOiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vamF2YXNjcmlwdC1nZW5lcmF0ZS1saWdodGVyLWRhcmtlci1jb2xvcilcbiAqL1xudmFyIGNvbG9yTHVtaW5hbmNlID0gZnVuY3Rpb24gY29sb3JMdW1pbmFuY2UoaGV4LCBsdW0pIHtcbiAgLy8gVmFsaWRhdGUgaGV4IHN0cmluZ1xuICBoZXggPSBTdHJpbmcoaGV4KS5yZXBsYWNlKC9bXjAtOWEtZl0vZ2ksICcnKTtcbiAgaWYgKGhleC5sZW5ndGggPCA2KSB7XG4gICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xuICB9XG4gIGx1bSA9IGx1bSB8fCAwO1xuXG4gIC8vIENvbnZlcnQgdG8gZGVjaW1hbCBhbmQgY2hhbmdlIGx1bWlub3NpdHlcbiAgdmFyIHJnYiA9ICcjJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICB2YXIgYyA9IHBhcnNlSW50KGhleC5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgYyA9IE1hdGgucm91bmQoTWF0aC5taW4oTWF0aC5tYXgoMCwgYyArIGMgKiBsdW0pLCAyNTUpKS50b1N0cmluZygxNik7XG4gICAgcmdiICs9ICgnMDAnICsgYykuc3Vic3RyKGMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiByZ2I7XG59O1xuXG52YXIgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheShhcnIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSB3YXJuaW5nc1xuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKGNvbnNvbGVQcmVmaXggKyAnICcgKyBtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbnZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihjb25zb2xlUHJlZml4ICsgJyAnICsgbWVzc2FnZSk7XG59O1xuXG4vLyBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG52YXIgc3RhdGVzID0ge1xuICBwcmV2aW91c1dpbmRvd0tleURvd246IG51bGwsXG4gIHByZXZpb3VzQWN0aXZlRWxlbWVudDogbnVsbCxcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuXG4gIC8qXG4gICAqIEFkZCBtb2RhbCArIG92ZXJsYXkgdG8gRE9NXG4gICAqL1xufTt2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgbW9kYWwgaWYgaXQgZXhpc3RzXG4gIHZhciBjID0gZ2V0Q29udGFpbmVyKCk7XG4gIGlmIChjKSB7XG4gICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHN3ZWV0SFRNTDtcblxuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgdmFyIHJhbmdlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgaW5wdXQnKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgb3V0cHV0Jyk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gIHZhciBjaGVja2JveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnIGlucHV0Jyk7XG4gIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuXG4gIGlucHV0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIGZpbGUub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIHJhbmdlLnByZXZpb3VzU2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHNlbGVjdC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gIH07XG5cbiAgY2hlY2tib3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIHRleHRhcmVhLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIHJldHVybiBtb2RhbDtcbn07XG5cbi8qXG4gKiBNYW5pcHVsYXRlIERPTVxuICovXG5cbnZhciBzd2VldEhUTUwgPSAoJ1xcbiA8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIicgKyBzd2FsQ2xhc3Nlcy50aXRsZSArICdcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMubW9kYWwgKyAnXCIgdGFiaW5kZXg9XCItMVwiPlxcbiAgIDx1bCBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzICsgJ1wiPjwvdWw+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLmVycm9yICsgJ1wiPlxcbiAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmtcIj48c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLnF1ZXN0aW9uICsgJ1wiPj88L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmljb24gKyAnICcgKyBpY29uVHlwZXMud2FybmluZyArICdcIj4hPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLmluZm8gKyAnXCI+aTwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5zdWNjZXNzICsgJ1wiPlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XFxuICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIj48L3NwYW4+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxpbWcgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaW1hZ2UgKyAnXCIgLz5cXG4gICA8aDIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCIgaWQ9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCI+PC9oMj5cXG4gICA8ZGl2IGlkPVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY29udGVudCArICdcIj48L2Rpdj5cXG4gICA8aW5wdXQgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaW5wdXQgKyAnXCIgLz5cXG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5maWxlICsgJ1wiIC8+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICdcIj5cXG4gICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgLz5cXG4gICA8L2Rpdj5cXG4gICA8c2VsZWN0IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnNlbGVjdCArICdcIj48L3NlbGVjdD5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJ1wiPjwvZGl2PlxcbiAgIDxsYWJlbCBmb3I9XCInICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnXCI+XFxuICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cXG4gICA8L2xhYmVsPlxcbiAgIDx0ZXh0YXJlYSBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSArICdcIj48L3RleHRhcmVhPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yICsgJ1wiIGlkPVwiJyArIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvciArICdcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmJ1dHRvbnN3cmFwcGVyICsgJ1wiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY29uZmlybSArICdcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2FuY2VsICsgJ1wiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNsb3NlICsgJ1wiPlxceEQ3PC9idXR0b24+XFxuIDwvZGl2PlxcbicpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxudmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jb250YWluZXIpO1xufTtcblxudmFyIGdldE1vZGFsID0gZnVuY3Rpb24gZ2V0TW9kYWwoKSB7XG4gIHJldHVybiBnZXRDb250YWluZXIoKSA/IGdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMubW9kYWwpIDogbnVsbDtcbn07XG5cbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICByZXR1cm4gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzd2FsQ2xhc3Nlcy5pY29uKTtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgPyBnZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuJyArIGNsYXNzTmFtZSkgOiBudWxsO1xufTtcblxudmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG59O1xuXG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbn07XG5cbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xufTtcblxudmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyk7XG59O1xuXG52YXIgZ2V0VmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yKTtcbn07XG5cbnZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbmZpcm0pO1xufTtcblxudmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNhbmNlbCk7XG59O1xuXG52YXIgZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRCdXR0b25zV3JhcHBlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmJ1dHRvbnN3cmFwcGVyKTtcbn07XG5cbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTtcblxudmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IEFycmF5LmZyb20oZ2V0TW9kYWwoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpXG4gIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChnZXRNb2RhbCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pLCB0ZXh0YXJlYSwgc2VsZWN0LCBhLCBbdGFiaW5kZXg9XCIwXCJdJykpO1xuXG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpO1xufTtcblxudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpO1xuXG4gIC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1LzEzMzE0MjVcbiAgICB2YXIgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgfVxufTtcblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmICghZWxlbSB8fCAhY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWVsZW0gfHwgIWNsYXNzTmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoYXNDbGFzcyhlbGVtLmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSwgZGlzcGxheSkge1xuICBpZiAoIWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn07XG5cbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG52YXIgZW1wdHkgPSBmdW5jdGlvbiBlbXB0eShlbGVtKSB7XG4gIHdoaWxlIChlbGVtLmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbi8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoO1xufTtcblxudmFyIHJlbW92ZVN0eWxlUHJvcGVydHkgPSBmdW5jdGlvbiByZW1vdmVTdHlsZVByb3BlcnR5KGVsZW0sIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICB9XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcbiAgZm9yICh2YXIgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICBpZiAodHJhbnNFbmRFdmVudE5hbWVzLmhhc093blByb3BlcnR5KGkpICYmIHRlc3RFbC5zdHlsZVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0oKTtcblxuLy8gUmVzZXQgcHJldmlvdXMgd2luZG93IGtleWRvd24gaGFuZGxlciBhbmQgZm9jdWVkIGVsZW1lbnRcbnZhciByZXNldFByZXZTdGF0ZSA9IGZ1bmN0aW9uIHJlc2V0UHJldlN0YXRlKCkge1xuICB3aW5kb3cub25rZXlkb3duID0gc3RhdGVzLnByZXZpb3VzV2luZG93S2V5RG93bjtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgaWYgKHggJiYgeSkge1xuICAgICAgLy8gSUUgaGFzIG5vIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBNZWFzdXJlIHdpZHRoIG9mIHNjcm9sbGJhclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzI0wyNzktTDI4NlxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cztcbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn07XG5cbi8qKlxuICogSW5qZWN0IGEgc3RyaW5nIG9mIENTUyBpbnRvIHRoZSBwYWdlIGhlYWRlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NcbiAqL1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgbW9kYWxQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcyk7XG52YXIgcXVldWUgPSBbXTtcblxuLypcbiAqIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcbiAqIEhvcGVmdWxseSB0byBhdm9pZCBtYW55IGdpdGh1YiBpc3N1ZXNcbiAqL1xuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbGltb250ZS9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xufVxuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIG1vZGFsXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBzZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gSWYgYSBjdXN0b20gZWxlbWVudCBpcyBzZXQsIGRldGVybWluZSBpZiBpdCBpcyB2YWxpZFxuICBpZiAodHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZCkge1xuICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgcGFyYW1zLnRhcmdldCA9ICdib2R5JztcbiAgfVxuXG4gIHZhciBtb2RhbCA9IHZvaWQgMDtcbiAgdmFyIG9sZE1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyIHRhcmdldEVsZW1lbnQgPSB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIDogcGFyYW1zLnRhcmdldDtcbiAgLy8gSWYgdGhlIG1vZGVsIHRhcmdldCBoYXMgY2hhbmdlZCwgcmVmcmVzaCB0aGUgbW9kYWxcbiAgaWYgKG9sZE1vZGFsICYmIHRhcmdldEVsZW1lbnQgJiYgb2xkTW9kYWwucGFyZW50Tm9kZSAhPT0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgbW9kYWwgPSBpbml0KHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgbW9kYWwgPSBvbGRNb2RhbCB8fCBpbml0KHBhcmFtcyk7XG4gIH1cblxuICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICBpZiAoIXN3ZWV0QWxlcnQuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oJ1Vua25vd24gcGFyYW1ldGVyIFwiJyArIHBhcmFtICsgJ1wiJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IG1vZGFsIHdpZHRoXG4gIG1vZGFsLnN0eWxlLndpZHRoID0gdHlwZW9mIHBhcmFtcy53aWR0aCA9PT0gJ251bWJlcicgPyBwYXJhbXMud2lkdGggKyAncHgnIDogcGFyYW1zLndpZHRoO1xuXG4gIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSBwYXJhbXMucGFkZGluZyArICdweCc7XG4gIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBidXR0b25zV3JhcHBlciA9IGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHZhciBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG5cbiAgLy8gVGl0bGVcbiAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGlmIChwYXJhbXMudGV4dCB8fCBwYXJhbXMuaHRtbCkge1xuICAgIGlmIChfdHlwZW9mKHBhcmFtcy5odG1sKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoMCBpbiBwYXJhbXMuaHRtbCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIGluIHBhcmFtcy5odG1sOyBfaSsrKSB7XG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbFtfaV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gcGFyYW1zLmh0bWw7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgIH1cbiAgICBzaG93KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cblxuICAvLyBQb3NpdGlvblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfVxuXG4gIC8vIEdyb3dcbiAgaWYgKHBhcmFtcy5ncm93ICYmIHR5cGVvZiBwYXJhbXMuZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZ3Jvd0NsYXNzID0gJ2dyb3ctJyArIHBhcmFtcy5ncm93O1xuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xvc2UgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfVxuXG4gIC8vIEN1c3RvbSBDbGFzc1xuICBtb2RhbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5tb2RhbDtcbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgIGFkZENsYXNzKG1vZGFsLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICB9XG5cbiAgLy8gUHJvZ3Jlc3Mgc3RlcHNcbiAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG4gIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IG51bGwgPyBzd2VldEFsZXJ0LmdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAsIDEwKTtcbiAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgZW1wdHkocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG4gICAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2NpcmNsZSk7XG4gICAgICBjaXJjbGUuaW5uZXJIVE1MID0gc3RlcDtcbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLmFjdGl2ZXByb2dyZXNzc3RlcCk7XG4gICAgICB9XG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICBpZiAoaW5kZXggIT09IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBhZGRDbGFzcyhsaW5lLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2xpbmUpO1xuICAgICAgICBsaW5lLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG5cbiAgLy8gSWNvblxuICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBpY29ucy5sZW5ndGg7IF9pMisrKSB7XG4gICAgaGlkZShpY29uc1tfaTJdKTtcbiAgfVxuICBpZiAocGFyYW1zLnR5cGUpIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaWNvblR5cGUgaW4gaWNvblR5cGVzKSB7XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09IGljb25UeXBlKSB7XG4gICAgICAgIHZhbGlkVHlwZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgZXJyb3IoJ1Vua25vd24gYWxlcnQgdHlwZTogJyArIHBhcmFtcy50eXBlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmljb24gKyAnLicgKyBpY29uVHlwZXNbcGFyYW1zLnR5cGVdKTtcbiAgICBzaG93KGljb24pO1xuXG4gICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICAgIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbiwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcpLCAnc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnKSwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIGFkZENsYXNzKGljb24sICdzd2FsMi1hbmltYXRlLWVycm9yLWljb24nKTtcbiAgICAgICAgICBhZGRDbGFzcyhpY29uLnF1ZXJ5U2VsZWN0b3IoJy5zd2FsMi14LW1hcmsnKSwgJ3N3YWwyLWFuaW1hdGUteC1tYXJrJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VzdG9tIGltYWdlXG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG4gIGlmIChwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpO1xuICAgIHNob3coaW1hZ2UpO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVdpZHRoKSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUhlaWdodCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgIH1cblxuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuICAgIGlmIChwYXJhbXMuaW1hZ2VDbGFzcykge1xuICAgICAgYWRkQ2xhc3MoaW1hZ2UsIHBhcmFtcy5pbWFnZUNsYXNzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGlkZShpbWFnZSk7XG4gIH1cblxuICAvLyBDYW5jZWwgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjYW5jZWxCdXR0b24pO1xuICB9XG5cbiAgLy8gQ29uZmlybSBidXR0b25cbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoY29uZmlybUJ1dHRvbiwgJ2Rpc3BsYXknKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbmZpcm1CdXR0b24pO1xuICB9XG5cbiAgLy8gQnV0dG9ucyB3cmFwcGVyXG4gIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGhpZGUoYnV0dG9uc1dyYXBwZXIpO1xuICB9IGVsc2Uge1xuICAgIHNob3coYnV0dG9uc1dyYXBwZXIpO1xuICB9XG5cbiAgLy8gRWRpdCB0ZXh0IG9uIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gIGNvbmZpcm1CdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0O1xuICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNhbmNlbEJ1dHRvblRleHQ7XG5cbiAgLy8gQVJJQSBsYWJlbHMgZm9yIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNvbmZpcm1CdXR0b25BcmlhTGFiZWwpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNhbmNlbEJ1dHRvbkFyaWFMYWJlbCk7XG5cbiAgLy8gU2V0IGJ1dHRvbnMgdG8gc2VsZWN0ZWQgYmFja2dyb3VuZCBjb2xvcnNcbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICB9XG5cbiAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcbiAgY29uZmlybUJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb25maXJtO1xuICBhZGRDbGFzcyhjb25maXJtQnV0dG9uLCBwYXJhbXMuY29uZmlybUJ1dHRvbkNsYXNzKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNhbmNlbDtcbiAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBwYXJhbXMuY2FuY2VsQnV0dG9uQ2xhc3MpO1xuXG4gIC8vIEJ1dHRvbnMgc3R5bGluZ1xuICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICByZW1vdmVDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG5cbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG5cbiAgLy8gQ1NTIGFuaW1hdGlvblxuICBpZiAocGFyYW1zLmFuaW1hdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfVxuXG4gIC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL2xpbW9udGUuZ2l0aHViLmlvL3N3ZWV0YWxlcnQyLyNhamF4LXJlcXVlc3QnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbmltYXRpb25zXG4gKlxuICogQHBhcmFtIGFuaW1hdGlvblxuICogQHBhcmFtIG9uQmVmb3JlT3BlblxuICogQHBhcmFtIG9uQ29tcGxldGVcbiAqL1xudmFyIG9wZW5Nb2RhbCA9IGZ1bmN0aW9uIG9wZW5Nb2RhbChhbmltYXRpb24sIG9uQmVmb3JlT3Blbiwgb25Db21wbGV0ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgaWYgKG9uQmVmb3JlT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb25CZWZvcmVPcGVuKG1vZGFsKTtcbiAgfVxuXG4gIGlmIChhbmltYXRpb24pIHtcbiAgICBhZGRDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmZhZGUpO1xuICB9XG4gIHNob3cobW9kYWwpO1xuXG4gIC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgIWhhc0NsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbikpIHtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKCkge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbENsb3NlRXZlbnRGaW5pc2hlZCk7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gIH1cblxuICBhZGRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgZml4U2Nyb2xsYmFyKCk7XG4gIGlPU2ZpeCgpO1xuICBzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgaWYgKG9uQ29tcGxldGUgIT09IG51bGwgJiYgdHlwZW9mIG9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uQ29tcGxldGUobW9kYWwpO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gbWVhc3VyZVNjcm9sbGJhcigpICsgJ3B4JztcbiAgfVxufTtcblxudmFyIHVuZG9TY3JvbGxiYXIgPSBmdW5jdGlvbiB1bmRvU2Nyb2xsYmFyKCkge1xuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nO1xuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgfVxufTtcblxuLy8gRml4IGlPUyBzY3JvbGxpbmcgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk2MjYzMDIvMTMzMTQyNVxudmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG4gIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArICdweCc7XG4gICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgfVxufTtcblxudmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICB9XG59O1xuXG4vLyBTd2VldEFsZXJ0IGVudHJ5IHBvaW50XG52YXIgc3dlZXRBbGVydCA9IGZ1bmN0aW9uIHN3ZWV0QWxlcnQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgZXhwZWN0cyBhdCBsZWFzdCAxIGF0dHJpYnV0ZSEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gX2V4dGVuZHMoe30sIG1vZGFsUGFyYW1zKTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcGFyYW1zLnRpdGxlID0gYXJnc1swXTtcbiAgICAgIHBhcmFtcy5odG1sID0gYXJnc1sxXTtcbiAgICAgIHBhcmFtcy50eXBlID0gYXJnc1syXTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcbiAgICAgIHBhcmFtcy5leHRyYVBhcmFtcyA9IGFyZ3NbMF0uZXh0cmFQYXJhbXM7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdlbWFpbCcgJiYgcGFyYW1zLmlucHV0VmFsaWRhdG9yID09PSBudWxsKSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNn0kLztcbiAgICAgICAgICAgIGlmIChlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICd1cmwnICYmIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9PT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUvMTMzMTQyNVxuICAgICAgICAgICAgdmFyIHVybFJlZ2V4ID0gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopJC87XG4gICAgICAgICAgICBpZiAodXJsUmVnZXgudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCgnSW52YWxpZCBVUkwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgYXJndW1lbnQhIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJvYmplY3RcIiwgZ290ICcgKyBfdHlwZW9mKGFyZ3NbMF0pKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFBhcmFtZXRlcnMocGFyYW1zKTtcblxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBDbG9zZSBvbiB0aW1lclxuICAgIGlmIChwYXJhbXMudGltZXIpIHtcbiAgICAgIG1vZGFsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVqZWN0KCd0aW1lcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAndGltZXInIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBwYXJhbXMudGltZXIpO1xuICAgIH1cblxuICAgIC8vIEdldCBpbnB1dCBlbGVtZW50IGJ5IHNwZWNpZmllZCB0eXBlIG9yLCBpZiB0eXBlIGlzbid0IHNwZWNpZmllZCwgYnkgcGFyYW1zLmlucHV0XG4gICAgdmFyIGdldElucHV0ID0gZnVuY3Rpb24gZ2V0SW5wdXQoaW5wdXRUeXBlKSB7XG4gICAgICBpbnB1dFR5cGUgPSBpbnB1dFR5cGUgfHwgcGFyYW1zLmlucHV0O1xuICAgICAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnIGlucHV0Jyk7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYWRpbyArICcgaW5wdXQ6Y2hlY2tlZCcpIHx8IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFkaW8gKyAnIGlucHV0OmZpcnN0LWNoaWxkJyk7XG4gICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICByZXR1cm4gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgaW5wdXQnKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIG1vZGFsIGlucHV0XG4gICAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHBhcmFtcy5pbnB1dCkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpbnB1dCBhdXRvZm9jdXNcbiAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybSh2YWx1ZSkge1xuICAgICAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuc2hvd0xvYWRpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICAgIHBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBwYXJhbXMuZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgICAgcmVzb2x2ZShwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgaWYgKGVycm9yJCQxKSB7XG4gICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IoZXJyb3IkJDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIE1vdXNlIGludGVyYWN0aW9uc1xuICAgIHZhciBvbkJ1dHRvbkV2ZW50ID0gZnVuY3Rpb24gb25CdXR0b25FdmVudChldmVudCkge1xuICAgICAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gY29uZmlybUJ1dHRvbiAmJiAoY29uZmlybUJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNvbmZpcm1CdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDYW5jZWwgPSBjYW5jZWxCdXR0b24gJiYgKGNhbmNlbEJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNhbmNlbEJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcblxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IsIC0wLjEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCkge1xuICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JMdW1pbmFuY2UocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yLCAtMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IsIC0wLjIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCkge1xuICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JMdW1pbmFuY2UocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yLCAtMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAvLyBDbGlja2VkICdjb25maXJtJ1xuICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgc3dlZXRBbGVydC5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoKTtcblxuICAgICAgICAgICAgICBpZiAocGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgcGFyYW1zLmV4dHJhUGFyYW1zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuc2hvd1ZhbGlkYXRpb25FcnJvcihlcnJvciQkMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZmlybSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xpY2tlZCAnY2FuY2VsJ1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwgJiYgc3dlZXRBbGVydC5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICAgICAgICByZWplY3QoJ2NhbmNlbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6ICdjYW5jZWwnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0ub25jbGljayA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdmVyID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW91dCA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2Vkb3duID0gb25CdXR0b25FdmVudDtcbiAgICB9XG5cbiAgICAvLyBDbG9zaW5nIG1vZGFsIGJ5IGNsb3NlIGJ1dHRvblxuICAgIGdldENsb3NlQnV0dG9uKCkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgcmVqZWN0KCdjbG9zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6ICdjbG9zZScgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIENsb3NpbmcgbW9kYWwgYnkgb3ZlcmxheSBjbGlja1xuICAgIGNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVqZWN0KCdvdmVybGF5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6ICdvdmVybGF5JyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcblxuICAgIC8vIFJldmVyc2UgYnV0dG9ucyAoQ29uZmlybSBvbiB0aGUgcmlnaHQgc2lkZSlcbiAgICBpZiAocGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyBoYW5kbGluZ1xuICAgIHZhciBzZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKHBhcmFtcy5mb2N1c0NhbmNlbCk7XG4gICAgICAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50O1xuXG4gICAgICAgIC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICAgICAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgZWxlbWVudCBpcyB2aXNpYmxlXG4gICAgICAgIHZhciBlbCA9IGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGlzVmlzaWJsZShlbCkpIHtcbiAgICAgICAgICByZXR1cm4gZWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBnZXRJbnB1dCgpKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3ZWV0QWxlcnQuY2xpY2tDb25maXJtKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVEFCXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhwYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTsgLy8gRmluZCB0aGUgYnV0dG9uIC0gbm90ZSwgdGhpcyBpcyBhIG5vZGVsaXN0LCBub3QgYW4gYXJyYXkuXG4gICAgICAgIGZvciAodmFyIF9pNCA9IDA7IF9pNCA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbX2k0XSkge1xuICAgICAgICAgICAgYnRuSW5kZXggPSBfaTQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgICAgfSBlbHNlIGlmIChbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dkb3duJ10uaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIC8vIGZvY3VzIENhbmNlbCBidXR0b24gaWYgQ29uZmlybSBidXR0b24gaXMgY3VycmVudGx5IGZvY3VzZWRcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNvbmZpcm1CdXR0b24gJiYgaXNWaXNpYmxlKGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgICBjYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgICAvLyBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNhbmNlbEJ1dHRvbiAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFU0NcbiAgICAgIH0gZWxzZSBpZiAoKGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycpICYmIHBhcmFtcy5hbGxvd0VzY2FwZUtleSA9PT0gdHJ1ZSkge1xuICAgICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgICByZWplY3QoJ2VzYycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnZXNjJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIXdpbmRvdy5vbmtleWRvd24gfHwgd2luZG93Lm9ua2V5ZG93bi50b1N0cmluZygpICE9PSBoYW5kbGVLZXlEb3duLnRvU3RyaW5nKCkpIHtcbiAgICAgIHN0YXRlcy5wcmV2aW91c1dpbmRvd0tleURvd24gPSB3aW5kb3cub25rZXlkb3duO1xuICAgICAgd2luZG93Lm9ua2V5ZG93biA9IGhhbmRsZUtleURvd247XG4gICAgfVxuXG4gICAgLy8gTG9hZGluZyBzdGF0ZVxuICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICAgICAqL1xuICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcgPSBzd2VldEFsZXJ0LmRpc2FibGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICAgICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgICAgICAgaWYgKCFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgIGhpZGUoZ2V0QnV0dG9uc1dyYXBwZXIoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbW92ZUNsYXNzKGJ1dHRvbnNXcmFwcGVyLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICAgIG1vZGFsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRUaXRsZSgpO1xuICAgIH07XG4gICAgc3dlZXRBbGVydC5nZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldENvbnRlbnQoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW5wdXQoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW1hZ2UoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQ29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5kaXNhYmxlQ29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3IgKHZhciBfaTUgPSAwOyBfaTUgPCByYWRpb3MubGVuZ3RoOyBfaTUrKykge1xuICAgICAgICAgIHJhZGlvc1tfaTVdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3IgKHZhciBfaTYgPSAwOyBfaTYgPCByYWRpb3MubGVuZ3RoOyBfaTYrKykge1xuICAgICAgICAgIHJhZGlvc1tfaTZdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTaG93IGJsb2NrIHdpdGggdmFsaWRhdGlvbiBlcnJvclxuICAgIHN3ZWV0QWxlcnQuc2hvd1ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgdmFyIHZhbGlkYXRpb25FcnJvciA9IGdldFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgdmFsaWRhdGlvbkVycm9yLmlubmVySFRNTCA9IGVycm9yJCQxO1xuICAgICAgc2hvdyh2YWxpZGF0aW9uRXJyb3IpO1xuXG4gICAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dCgpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG4gICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIGVycm9yXG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSBnZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgIGhpZGUodmFsaWRhdGlvbkVycm9yKTtcblxuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLnByb2dyZXNzU3RlcHM7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuc2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIChwcm9ncmVzc1N0ZXBzKSB7XG4gICAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcyA9IHByb2dyZXNzU3RlcHM7XG4gICAgICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuc2hvd1Byb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzaG93KGdldFByb2dyZXNzU3RlcHMoKSk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuaGlkZVByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoaWRlKGdldFByb2dyZXNzU3RlcHMoKSk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICAvLyBpbnB1dHNcbiAgICB2YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcbiAgICB2YXIgaW5wdXQgPSB2b2lkIDA7XG4gICAgZm9yICh2YXIgX2k3ID0gMDsgX2k3IDwgaW5wdXRUeXBlcy5sZW5ndGg7IF9pNysrKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZXNbX2k3XV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIGlucHV0Q2xhc3MpO1xuICAgICAgaW5wdXQgPSBnZXRJbnB1dChpbnB1dFR5cGVzW19pN10pO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGZvciAodmFyIGogaW4gaW5wdXQuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChpbnB1dC5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2pdLm5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgIT09ICd0eXBlJyAmJiBhdHRyTmFtZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgcGFyYW1zLmlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGNsYXNzXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dENsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuaW5wdXRDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAndGVsJzpcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgdmFyIHJhbmdlID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gICAgICAgIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICBzaG93KHJhbmdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uVmFsdWUgaW4gaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBpbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvdyhzZWxlY3QpO1xuICAgICAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgICAgIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIGZvciAodmFyIHJhZGlvVmFsdWUgaW4gaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9MYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlKSB7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYWRpb0xhYmVsU3Bhbi5pbm5lckhUTUwgPSBpbnB1dE9wdGlvbnNbcmFkaW9WYWx1ZV07XG4gICAgICAgICAgICByYWRpb0xhYmVsLmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5hcHBlbmRDaGlsZChyYWRpb0xhYmVsU3Bhbik7XG4gICAgICAgICAgICByYWRpb0xhYmVsLmZvciA9IHJhZGlvSW5wdXQuaWQ7XG4gICAgICAgICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvdyhyYWRpbyk7XG4gICAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHZhciBjaGVja2JveCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuY2hlY2tib3gpO1xuICAgICAgICB2YXIgY2hlY2tib3hJbnB1dCA9IGdldElucHV0KCdjaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveElucHV0LnZhbHVlID0gMTtcbiAgICAgICAgY2hlY2tib3hJbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgdmFyIGxhYmVsID0gY2hlY2tib3guZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAgIGNoZWNrYm94LnJlbW92ZUNoaWxkKGxhYmVsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgc2hvdyhjaGVja2JveCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgc2hvdyh0ZXh0YXJlYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFwidGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJudW1iZXJcIiwgXCJ0ZWxcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwidGV4dGFyZWFcIiwgXCJmaWxlXCIgb3IgXCJ1cmxcIiwgZ290IFwiJyArIHBhcmFtcy5pbnB1dCArICdcIicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzd2VldEFsZXJ0LnNob3dMb2FkaW5nKCk7XG4gICAgICAgIHBhcmFtcy5pbnB1dE9wdGlvbnMudGhlbihmdW5jdGlvbiAoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgc3dlZXRBbGVydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyhwYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3Qgb3IgUHJvbWlzZSwgZ290ICcgKyBfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTW9kYWwocGFyYW1zLmFuaW1hdGlvbiwgcGFyYW1zLm9uQmVmb3JlT3BlbiwgcGFyYW1zLm9uT3Blbik7XG5cbiAgICBpZiAoIXBhcmFtcy5hbGxvd0VudGVyS2V5KSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoY2FuY2VsQnV0dG9uKSkge1xuICAgICAgY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShjb25maXJtQnV0dG9uKSkge1xuICAgICAgY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgfVxuXG4gICAgLy8gZml4IHNjcm9sbFxuICAgIGdldENvbnRhaW5lcigpLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3dhbDIgbW9kYWwgaXMgc2hvd25cbiAqL1xuc3dlZXRBbGVydC5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIWdldE1vZGFsKCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IG1vZGFsc1xuICovXG5zd2VldEFsZXJ0LnF1ZXVlID0gZnVuY3Rpb24gKHN0ZXBzKSB7XG4gIHF1ZXVlID0gc3RlcHM7XG4gIHZhciByZXNldFF1ZXVlID0gZnVuY3Rpb24gcmVzZXRRdWV1ZSgpIHtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcbiAgdmFyIHF1ZXVlUmVzdWx0ID0gW107XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpIDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnLCBpKTtcblxuICAgICAgICBzd2VldEFsZXJ0KHF1ZXVlW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBxdWV1ZVJlc3VsdC5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZGlzbWlzcykge1xuICAgICAgICAgIHJlc2V0UXVldWUoKTtcbiAgICAgICAgICByZWplY3QoZGlzbWlzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHF1ZXVlUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KSgwKTtcbiAgfSk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHRoZSBpbmRleCBvZiBjdXJyZW50IG1vZGFsIGluIHF1ZXVlXG4gKi9cbnN3ZWV0QWxlcnQuZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgbW9kYWwgdG8gdGhlIHF1ZXVlXG4gKi9cbnN3ZWV0QWxlcnQuaW5zZXJ0UXVldWVTdGVwID0gZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gIGlmIChpbmRleCAmJiBpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgIHJldHVybiBxdWV1ZS5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICB9XG4gIHJldHVybiBxdWV1ZS5wdXNoKHN0ZXApO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBtb2RhbCBmcm9tIHRoZSBxdWV1ZVxuICovXG5zd2VldEFsZXJ0LmRlbGV0ZVF1ZXVlU3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICBpZiAodHlwZW9mIHF1ZXVlW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBxdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuc3dlZXRBbGVydC5jbG9zZSA9IHN3ZWV0QWxlcnQuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uIChvbkNvbXBsZXRlKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgaWYgKCFtb2RhbCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gIGFkZENsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5oaWRlKTtcbiAgY2xlYXJUaW1lb3V0KG1vZGFsLnRpbWVvdXQpO1xuXG4gIHJlc2V0UHJldlN0YXRlKCk7XG5cbiAgdmFyIHJlbW92ZU1vZGFsQW5kUmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZU1vZGFsQW5kUmVzZXRTdGF0ZSgpIHtcbiAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc3dhbENsYXNzZXMuc2hvd24pO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgICB1bmRvU2Nyb2xsYmFyKCk7XG4gICAgdW5kb0lPU2ZpeCgpO1xuICB9O1xuXG4gIC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgaWYgKGhhc0NsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZU1vZGFsQW5kUmVzZXRTdGF0ZSgpO1xuICB9XG4gIGlmIChvbkNvbXBsZXRlICE9PSBudWxsICYmIHR5cGVvZiBvbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbXBsZXRlKG1vZGFsKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cbnN3ZWV0QWxlcnQuY2xpY2tDb25maXJtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0LmNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0LnNob3dMb2FkaW5nID0gc3dlZXRBbGVydC5lbmFibGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICBpZiAoIW1vZGFsKSB7XG4gICAgc3dlZXRBbGVydCgnJyk7XG4gIH1cbiAgbW9kYWwgPSBnZXRNb2RhbCgpO1xuICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuXG4gIHNob3coYnV0dG9uc1dyYXBwZXIpO1xuICBzaG93KGNvbmZpcm1CdXR0b24sICdpbmxpbmUtYmxvY2snKTtcbiAgYWRkQ2xhc3MoYnV0dG9uc1dyYXBwZXIsIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBhZGRDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gIG1vZGFsLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5zd2VldEFsZXJ0LmlzVmFsaWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZWZhdWx0UGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtTmFtZSkgfHwgcGFyYW1OYW1lID09PSAnZXh0cmFQYXJhbXMnO1xufTtcblxuLyoqXG4gKiBTZXQgZGVmYXVsdCBwYXJhbXMgZm9yIGVhY2ggcG9wdXBcbiAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyUGFyYW1zXG4gKi9cbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAodXNlclBhcmFtcykge1xuICBpZiAoIXVzZXJQYXJhbXMgfHwgKHR5cGVvZiB1c2VyUGFyYW1zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih1c2VyUGFyYW1zKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVycm9yKCd0aGUgYXJndW1lbnQgZm9yIHNldERlZmF1bHRzKCkgaXMgcmVxdWlyZWQgYW5kIGhhcyB0byBiZSBhIG9iamVjdCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcGFyYW0gaW4gdXNlclBhcmFtcykge1xuICAgIGlmICghc3dlZXRBbGVydC5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybignVW5rbm93biBwYXJhbWV0ZXIgXCInICsgcGFyYW0gKyAnXCInKTtcbiAgICAgIGRlbGV0ZSB1c2VyUGFyYW1zW3BhcmFtXTtcbiAgICB9XG4gIH1cblxuICBfZXh0ZW5kcyhtb2RhbFBhcmFtcywgdXNlclBhcmFtcyk7XG59O1xuXG4vKipcbiAqIFJlc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKi9cbnN3ZWV0QWxlcnQucmVzZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcyk7XG59O1xuXG5zd2VldEFsZXJ0Lm5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuc3dlZXRBbGVydC52ZXJzaW9uID0gJzYuMTEuNSc7XG5cbnN3ZWV0QWxlcnQuZGVmYXVsdCA9IHN3ZWV0QWxlcnQ7XG5cbnJldHVybiBzd2VldEFsZXJ0O1xuXG59KSkpO1xuaWYgKHdpbmRvdy5Td2VldGFsZXJ0Mikgd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuc3dhbCA9IHdpbmRvdy5Td2VldGFsZXJ0MjtcbiIsIi8vIEBmbG93XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi8uLi9wYXJ0aWFscy9ub3RpZmljYXRpb24nO1xyXG5cclxuY2xhc3MgUHJpY2luZyB7XHJcbiAgZm9ybSAoKSB7XHJcbiAgICB2YXIgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbigpO1xyXG4gICAgbm90aWZpY2F0aW9uLmZsYXNoTWVzc2FnZSgpO1xyXG4gICAgdmFyIF8kID0gd2luZG93LmpRdWVyeTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5wcmljaW5nID0gbmV3IFByaWNpbmcoKTtcclxuIiwiLy8gQGZsb3dcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5jbGFzcyBOb3RpZmljYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuX3RleHQgPSAnJztcclxuICB9XHJcblxyXG4gIHNldFRleHQgKHRleHQpIHtcclxuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveVJvdyAoZGF0YXRhYmxlID0gbnVsbCwgcmVtb3ZlID0gbnVsbCwgc2VsZWN0b3IpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGVsID0gc2VsZWN0b3IgfHwgJ2EuZGVsZXRlLWFjdGlvbic7XHJcbiAgICBfJChkb2N1bWVudCkub24oJ2NsaWNrJywgZWwsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9IF8kKHRoaXMpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBkZWxldGVVcmwgPSBfJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgIHRpdGxlOiB3aW5kb3cubGFuZy5nZXQoJ3JlcG9zaXRvcmllcy5zd2VldGFsZXJ0LnF1ZXN0aW9uJyksXHJcbiAgICAgICAgdGV4dDogc2VsZi5fdGV4dCxcclxuICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjREQ2QjU1JyxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogd2luZG93LmxhbmcuZ2V0KCdyZXBvc2l0b3JpZXMuc3dlZXRhbGVydC5vaycpLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHdpbmRvdy5sYW5nLmdldCgncmVwb3NpdG9yaWVzLnN3ZWV0YWxlcnQuY2FuY2VsJylcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXyQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgIHVybDogZGVsZXRlVXJsLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWxlcnROb3RpZmljYXRpb24ocmVzcG9uc2UubWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhdGFibGUpIHtcclxuICAgICAgICAgICAgICBkYXRhdGFibGUucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZGF0YXRhYmxlICYmIHJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICR0aGlzLmNsb3Nlc3QocmVtb3ZlKS5mYWRlT3V0KDQwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgc2VsZi5hbGVydE5vdGlmaWNhdGlvbihyZXNwb25zZS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoZGlzbWlzcykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFsZXJ0Tm90aWZpY2F0aW9uIChtZXNzYWdlLCBzdGF0dXMgPSB0cnVlLCBkZWxheSA9IDMwMDApIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgbGV0IGFsZXJ0VHlwZSA9IHN0YXR1cyA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInO1xyXG4gICAgXyQoJyNub3RpZmljYXRpb24gLmFsZXJ0LWNvbnRlbnQnKS5odG1sKCcnKTtcclxuICAgIF8kKG1lc3NhZ2UpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgIF8kKCcjbm90aWZpY2F0aW9uIC5hbGVydC1jb250ZW50JykuYXBwZW5kKCc8c3Ryb25nPicgKyBlbGVtZW50ICsgJzwvc3Ryb25nPjxicj4nKTtcclxuICAgIH0pO1xyXG4gICAgXyQoJyNub3RpZmljYXRpb24nKS50b2dnbGVDbGFzcygnaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGFuZ2VyJykuYWRkQ2xhc3MoYWxlcnRUeXBlKS5kZWxheShkZWxheSkuc2hvdyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF8kKHRoaXMpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmxhc2hNZXNzYWdlICgpIHtcclxuICAgIHZhciBtZXNzYWdlID0gd2luZG93LmZsYXNoX21lc3NhZ2U7XHJcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2Uuc3RhdHVzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB2YXIgZSA9IG1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuYWxlcnROb3RpZmljYXRpb24oZS5tZXNzYWdlLCBlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=