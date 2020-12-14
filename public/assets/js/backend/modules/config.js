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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "./resources/assets/js/backend/modules/config.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/backend/modules/config.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../partials/uploadfile */ "./resources/assets/js/backend/partials/uploadfile.js");
/* harmony import */ var _partials_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../partials/notification */ "./resources/assets/js/backend/partials/notification.js");
// @flow


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Config = /*#__PURE__*/function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, [{
    key: "form",
    value: function form() {
      var notification = new _partials_notification__WEBPACK_IMPORTED_MODULE_1__["default"]();
      notification.flashMessage();
      var _$ = window.jQuery;
      var uploadfile = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]();
      uploadfile.init();
      var uploadblog = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]('#blog_banner', '#blog_banner-upload');
      uploadblog.init();
      var uploadAbout = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]('#about_banner', '#about_banner-upload');
      uploadAbout.init();
      var uploadWhoweare = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]('#who_we_are_image', '#who_we_are_image-upload');
      uploadWhoweare.init();
      var uploadContactBanner = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]('#contact_banner', '#contact_banner-upload');
      uploadContactBanner.init();
      var uploadContactBanner1 = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]('#contact_banner_1', '#contact_banner_1-upload');
      uploadContactBanner1.init();
      var uploadContactBanner2 = new _partials_uploadfile__WEBPACK_IMPORTED_MODULE_0__["default"]('#contact_banner_2', '#contact_banner_2-upload');
      uploadContactBanner2.init();
    }
  }]);

  return Config;
}();

/* harmony default export */ __webpack_exports__["default"] = (window.config = new Config());

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

/***/ 10:
/*!*************************************************************!*\
  !*** multi ./resources/assets/js/backend/modules/config.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/app/resources/assets/js/backend/modules/config.js */"./resources/assets/js/backend/modules/config.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrZW5kL21vZHVsZXMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYmFja2VuZC9wYXJ0aWFscy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYWNrZW5kL3BhcnRpYWxzL3VwbG9hZGZpbGUuanMiXSwibmFtZXMiOlsiQ29uZmlnIiwibm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uIiwiZmxhc2hNZXNzYWdlIiwiXyQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJ1cGxvYWRmaWxlIiwiVXBsb2FkZmlsZSIsImluaXQiLCJ1cGxvYWRibG9nIiwidXBsb2FkQWJvdXQiLCJ1cGxvYWRXaG93ZWFyZSIsInVwbG9hZENvbnRhY3RCYW5uZXIiLCJ1cGxvYWRDb250YWN0QmFubmVyMSIsInVwbG9hZENvbnRhY3RCYW5uZXIyIiwiY29uZmlnIiwiX3RleHQiLCJ0ZXh0IiwiZGF0YXRhYmxlIiwicmVtb3ZlIiwic2VsZWN0b3IiLCIkIiwic2VsZiIsImVsIiwiZG9jdW1lbnQiLCJvbiIsImUiLCIkdGhpcyIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlVXJsIiwiYXR0ciIsInN3YWwiLCJ0aXRsZSIsImxhbmciLCJnZXQiLCJ0eXBlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJhamF4IiwidXJsIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiYWxlcnROb3RpZmljYXRpb24iLCJtZXNzYWdlIiwicmVmcmVzaCIsImNsb3Nlc3QiLCJmYWRlT3V0IiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJkaXNtaXNzIiwic3RhdHVzIiwiZGVsYXkiLCJhbGVydFR5cGUiLCJodG1sIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImFwcGVuZCIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNob3ciLCJmbGFzaF9tZXNzYWdlIiwiVXBsb2FkIiwiaW1nIiwiX2VsIiwiX2ltZyIsImNoYW5nZSIsImxhYmVsIiwidmFsIiwicmVwbGFjZSIsImlucHV0IiwicGFyZW50cyIsImZpbmQiLCJsZW5ndGgiLCJyZWFkVVJMIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImZpbGUiLCJjYWxsYmFjayIsImRhdGEiLCJGb3JtRGF0YSIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1bW1lcm5vdGUiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiYWxlcnQiLCJlcnJvcnMiLCJpbWFnZSIsInRvU3RyaW5nIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUE0RDtBQUM3RCxDQUFDLFNBQ2dDO0FBQ2pDLENBQUMscUJBQXFCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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a2VuZC9tb2R1bGVzL2NvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuIiwiLyohXG4gKiBzd2VldGFsZXJ0MiB2Ni4xMS41XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICB0eXBlOiBudWxsLFxuICBjdXN0b21DbGFzczogJycsXG4gIHRhcmdldDogJ2JvZHknLFxuICBhbmltYXRpb246IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBwcmVDb25maXJtOiBudWxsLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICBjb25maXJtQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogJyNhYWEnLFxuICBjYW5jZWxCdXR0b25DbGFzczogbnVsbCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlV2lkdGg6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiBudWxsLFxuICBpbWFnZUFsdDogJycsXG4gIGltYWdlQ2xhc3M6IG51bGwsXG4gIHRpbWVyOiBudWxsLFxuICB3aWR0aDogNTAwLFxuICBwYWRkaW5nOiAyMCxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICBpbnB1dDogbnVsbCxcbiAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gIGlucHV0VmFsdWU6ICcnLFxuICBpbnB1dE9wdGlvbnM6IHt9LFxuICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICBpbnB1dENsYXNzOiBudWxsLFxuICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICBpbnB1dFZhbGlkYXRvcjogbnVsbCxcbiAgZ3JvdzogZmFsc2UsXG4gIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgcHJvZ3Jlc3NTdGVwczogW10sXG4gIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IG51bGwsXG4gIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogJzQwcHgnLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uT3BlbjogbnVsbCxcbiAgb25DbG9zZTogbnVsbCxcbiAgdXNlUmVqZWN0aW9uczogdHJ1ZVxufTtcblxudmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcblxudmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaW9zZml4JywgJ21vZGFsJywgJ292ZXJsYXknLCAnZmFkZScsICdzaG93JywgJ2hpZGUnLCAnbm9hbmltYXRpb24nLCAnY2xvc2UnLCAndGl0bGUnLCAnY29udGVudCcsICdidXR0b25zd3JhcHBlcicsICdjb25maXJtJywgJ2NhbmNlbCcsICdpY29uJywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAndmFsaWRhdGlvbmVycm9yJywgJ3Byb2dyZXNzc3RlcHMnLCAnYWN0aXZlcHJvZ3Jlc3NzdGVwJywgJ3Byb2dyZXNzY2lyY2xlJywgJ3Byb2dyZXNzbGluZScsICdsb2FkaW5nJywgJ3N0eWxlZCcsICd0b3AnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2NlbnRlcicsICdjZW50ZXItbGVmdCcsICdjZW50ZXItcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICdncm93LXJvdycsICdncm93LWNvbHVtbicsICdncm93LWZ1bGxzY3JlZW4nXSk7XG5cbnZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxudmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6JztcblxuLypcbiAqIFNldCBob3ZlciwgYWN0aXZlIGFuZCBmb2N1cy1zdGF0ZXMgZm9yIGJ1dHRvbnMgKHNvdXJjZTogaHR0cDovL3d3dy5zaXRlcG9pbnQuY29tL2phdmFzY3JpcHQtZ2VuZXJhdGUtbGlnaHRlci1kYXJrZXItY29sb3IpXG4gKi9cbnZhciBjb2xvckx1bWluYW5jZSA9IGZ1bmN0aW9uIGNvbG9yTHVtaW5hbmNlKGhleCwgbHVtKSB7XG4gIC8vIFZhbGlkYXRlIGhleCBzdHJpbmdcbiAgaGV4ID0gU3RyaW5nKGhleCkucmVwbGFjZSgvW14wLTlhLWZdL2dpLCAnJyk7XG4gIGlmIChoZXgubGVuZ3RoIDwgNikge1xuICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgfVxuICBsdW0gPSBsdW0gfHwgMDtcblxuICAvLyBDb252ZXJ0IHRvIGRlY2ltYWwgYW5kIGNoYW5nZSBsdW1pbm9zaXR5XG4gIHZhciByZ2IgPSAnIyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgdmFyIGMgPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgIGMgPSBNYXRoLnJvdW5kKE1hdGgubWluKE1hdGgubWF4KDAsIGMgKyBjICogbHVtKSwgMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSAoJzAwJyArIGMpLnN1YnN0cihjLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmdiO1xufTtcblxudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2Fybihjb25zb2xlUHJlZml4ICsgJyAnICsgbWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG52YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoY29uc29sZVByZWZpeCArICcgJyArIG1lc3NhZ2UpO1xufTtcblxuLy8gUmVtZW1iZXIgc3RhdGUgaW4gY2FzZXMgd2hlcmUgb3BlbmluZyBhbmQgaGFuZGxpbmcgYSBtb2RhbCB3aWxsIGZpZGRsZSB3aXRoIGl0LlxudmFyIHN0YXRlcyA9IHtcbiAgcHJldmlvdXNXaW5kb3dLZXlEb3duOiBudWxsLFxuICBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ6IG51bGwsXG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcblxuICAvKlxuICAgKiBBZGQgbW9kYWwgKyBvdmVybGF5IHRvIERPTVxuICAgKi9cbn07dmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAvLyBDbGVhbiB1cCB0aGUgb2xkIG1vZGFsIGlmIGl0IGV4aXN0c1xuICB2YXIgYyA9IGdldENvbnRhaW5lcigpO1xuICBpZiAoYykge1xuICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzd2VldEhUTUw7XG5cbiAgdmFyIHRhcmdldEVsZW1lbnQgPSB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIDogcGFyYW1zLnRhcmdldDtcbiAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB2YXIgZmlsZSA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gIHZhciByYW5nZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIGlucHV0Jyk7XG4gIHZhciByYW5nZU91dHB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIG91dHB1dCcpO1xuICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICB2YXIgY2hlY2tib3ggPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJyBpbnB1dCcpO1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcblxuICBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICBmaWxlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHJhbmdlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICByYW5nZS5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICBzZWxlY3Qub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICB9O1xuXG4gIGNoZWNrYm94Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICB0ZXh0YXJlYS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgfTtcblxuICByZXR1cm4gbW9kYWw7XG59O1xuXG4vKlxuICogTWFuaXB1bGF0ZSBET01cbiAqL1xuXG52YXIgc3dlZXRIVE1MID0gKCdcXG4gPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCIgYXJpYS1kZXNjcmliZWRieT1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLm1vZGFsICsgJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8dWwgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyArICdcIj48L3VsPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5lcnJvciArICdcIj5cXG4gICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+PHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5xdWVzdGlvbiArICdcIj4/PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLndhcm5pbmcgKyAnXCI+ITwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5pbmZvICsgJ1wiPmk8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmljb24gKyAnICcgKyBpY29uVHlwZXMuc3VjY2VzcyArICdcIj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxcbiAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8aW1nIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmltYWdlICsgJ1wiIC8+XFxuICAgPGgyIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnRpdGxlICsgJ1wiIGlkPVwiJyArIHN3YWxDbGFzc2VzLnRpdGxlICsgJ1wiPjwvaDI+XFxuICAgPGRpdiBpZD1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCI+PC9kaXY+XFxuICAgPGlucHV0IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmlucHV0ICsgJ1wiIC8+XFxuICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuZmlsZSArICdcIiAvPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnXCI+XFxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XFxuICAgPC9kaXY+XFxuICAgPHNlbGVjdCBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5zZWxlY3QgKyAnXCI+PC9zZWxlY3Q+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5yYWRpbyArICdcIj48L2Rpdj5cXG4gICA8bGFiZWwgZm9yPVwiJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJ1wiPlxcbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XFxuICAgPC9sYWJlbD5cXG4gICA8dGV4dGFyZWEgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudGV4dGFyZWEgKyAnXCI+PC90ZXh0YXJlYT5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvciArICdcIiBpZD1cIicgKyBzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IgKyAnXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5idXR0b25zd3JhcHBlciArICdcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNvbmZpcm0gKyAnXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNhbmNlbCArICdcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jbG9zZSArICdcIj5cXHhENzwvYnV0dG9uPlxcbiA8L2Rpdj5cXG4nKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLCAnJyk7XG5cbnZhciBnZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY29udGFpbmVyKTtcbn07XG5cbnZhciBnZXRNb2RhbCA9IGZ1bmN0aW9uIGdldE1vZGFsKCkge1xuICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgPyBnZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLm1vZGFsKSA6IG51bGw7XG59O1xuXG52YXIgZ2V0SWNvbnMgPSBmdW5jdGlvbiBnZXRJY29ucygpIHtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgc3dhbENsYXNzZXMuaWNvbik7XG59O1xuXG52YXIgZWxlbWVudEJ5Q2xhc3MgPSBmdW5jdGlvbiBlbGVtZW50QnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGdldENvbnRhaW5lcigpID8gZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLicgKyBjbGFzc05hbWUpIDogbnVsbDtcbn07XG5cbnZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xufTtcblxudmFyIGdldENvbnRlbnQgPSBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29udGVudCk7XG59O1xuXG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbn07XG5cbnZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnByb2dyZXNzc3RlcHMpO1xufTtcblxudmFyIGdldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG59O1xuXG52YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb25maXJtKTtcbn07XG5cbnZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jYW5jZWwpO1xufTtcblxudmFyIGdldEJ1dHRvbnNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0QnV0dG9uc1dyYXBwZXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5idXR0b25zd3JhcHBlcik7XG59O1xuXG52YXIgZ2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiBnZXRDbG9zZUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNsb3NlKTtcbn07XG5cbnZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSBBcnJheS5mcm9tKGdldE1vZGFsKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKVxuICAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuXG4gIHZhciBvdGhlckZvY3VzYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZ2V0TW9kYWwoKS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwgdGV4dGFyZWEsIHNlbGVjdCwgYSwgW3RhYmluZGV4PVwiMFwiXScpKTtcblxuICByZXR1cm4gdW5pcXVlQXJyYXkoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXguY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHMpKTtcbn07XG5cbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQuZm9jdXMoKTtcblxuICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNS8xMzMxNDI1XG4gICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQudmFsdWUgPSB2YWw7XG4gIH1cbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWVsZW0gfHwgIWNsYXNzTmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFlbGVtIHx8ICFjbGFzc05hbWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxudmFyIGdldENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0sIGRpc3BsYXkpIHtcbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59O1xuXG52YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxudmFyIGVtcHR5ID0gZnVuY3Rpb24gZW1wdHkoZWxlbSkge1xuICB3aGlsZSAoZWxlbS5maXJzdENoaWxkKSB7XG4gICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG4vLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbn07XG5cbnZhciByZW1vdmVTdHlsZVByb3BlcnR5ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtLCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnXG4gIH07XG4gIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKHRyYW5zRW5kRXZlbnROYW1lcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0ZXN0RWwuc3R5bGVbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIFJlc2V0IHByZXZpb3VzIHdpbmRvdyBrZXlkb3duIGhhbmRsZXIgYW5kIGZvY3VlZCBlbGVtZW50XG52YXIgcmVzZXRQcmV2U3RhdGUgPSBmdW5jdGlvbiByZXNldFByZXZTdGF0ZSgpIHtcbiAgd2luZG93Lm9ua2V5ZG93biA9IHN0YXRlcy5wcmV2aW91c1dpbmRvd0tleURvd247XG4gIGlmIChzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIC8vIElFIGhhcyBubyBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gTWVhc3VyZSB3aWR0aCBvZiBzY3JvbGxiYXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9tb2RhbC5qcyNMMjc5LUwyODZcbnZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgdmFyIHN1cHBvcnRzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7XG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuXG4vKipcbiAqIEluamVjdCBhIHN0cmluZyBvZiBDU1MgaW50byB0aGUgcGFnZSBoZWFkZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzXG4gKi9cblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIG1vZGFsUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMpO1xudmFyIHF1ZXVlID0gW107XG5cbi8qXG4gKiBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG4gKiBIb3BlZnVsbHkgdG8gYXZvaWQgbWFueSBnaXRodWIgaXNzdWVzXG4gKi9cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgZXJyb3IoJ1RoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2xpbW9udGUvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbn1cblxuLyoqXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBtb2RhbFxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgc2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaXMgc2V0LCBkZXRlcm1pbmUgaWYgaXQgaXMgdmFsaWRcbiAgaWYgKHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH1cblxuICB2YXIgbW9kYWwgPSB2b2lkIDA7XG4gIHZhciBvbGRNb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIC8vIElmIHRoZSBtb2RlbCB0YXJnZXQgaGFzIGNoYW5nZWQsIHJlZnJlc2ggdGhlIG1vZGFsXG4gIGlmIChvbGRNb2RhbCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZE1vZGFsLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIG1vZGFsID0gaW5pdChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIG1vZGFsID0gb2xkTW9kYWwgfHwgaW5pdChwYXJhbXMpO1xuICB9XG5cbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgaWYgKCFzd2VldEFsZXJ0LmlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuKCdVbmtub3duIHBhcmFtZXRlciBcIicgKyBwYXJhbSArICdcIicpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBtb2RhbCB3aWR0aFxuICBtb2RhbC5zdHlsZS53aWR0aCA9IHR5cGVvZiBwYXJhbXMud2lkdGggPT09ICdudW1iZXInID8gcGFyYW1zLndpZHRoICsgJ3B4JyA6IHBhcmFtcy53aWR0aDtcblxuICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gcGFyYW1zLnBhZGRpbmcgKyAncHgnO1xuICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICB2YXIgYnV0dG9uc1dyYXBwZXIgPSBnZXRCdXR0b25zV3JhcHBlcigpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuXG4gIC8vIFRpdGxlXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICB9XG5cbiAgLy8gQ29udGVudFxuICBpZiAocGFyYW1zLnRleHQgfHwgcGFyYW1zLmh0bWwpIHtcbiAgICBpZiAoX3R5cGVvZihwYXJhbXMuaHRtbCkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgaWYgKDAgaW4gcGFyYW1zLmh0bWwpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSBpbiBwYXJhbXMuaHRtbDsgX2krKykge1xuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYW1zLmh0bWxbX2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYW1zLmh0bWwuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IHBhcmFtcy5odG1sO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dDtcbiAgICB9XG4gICAgc2hvdyhjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbnRlbnQpO1xuICB9XG5cbiAgLy8gUG9zaXRpb25cbiAgaWYgKHBhcmFtcy5wb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbcGFyYW1zLnBvc2l0aW9uXSk7XG4gIH1cblxuICAvLyBHcm93XG4gIGlmIChwYXJhbXMuZ3JvdyAmJiB0eXBlb2YgcGFyYW1zLmdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9ICdncm93LScgKyBwYXJhbXMuZ3JvdztcbiAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgIH1cbiAgfVxuXG4gIC8vIENsb3NlIGJ1dHRvblxuICBpZiAocGFyYW1zLnNob3dDbG9zZUJ1dHRvbikge1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCk7XG4gICAgc2hvdyhjbG9zZUJ1dHRvbik7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjbG9zZUJ1dHRvbik7XG4gIH1cblxuICAvLyBDdXN0b20gQ2xhc3NcbiAgbW9kYWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubW9kYWw7XG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhtb2RhbCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfVxuXG4gIC8vIFByb2dyZXNzIHN0ZXBzXG4gIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICB2YXIgY3VycmVudFByb2dyZXNzU3RlcCA9IHBhcnNlSW50KHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwID09PSBudWxsID8gc3dlZXRBbGVydC5nZXRRdWV1ZVN0ZXAoKSA6IHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwLCAxMCk7XG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIGVtcHR5KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gICAgfVxuICAgIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGFkZENsYXNzKGNpcmNsZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NjaXJjbGUpO1xuICAgICAgY2lyY2xlLmlubmVySFRNTCA9IHN0ZXA7XG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5hY3RpdmVwcm9ncmVzc3N0ZXApO1xuICAgICAgfVxuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgYWRkQ2xhc3MobGluZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NsaW5lKTtcbiAgICAgICAgbGluZS5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIEljb25cbiAgdmFyIGljb25zID0gZ2V0SWNvbnMoKTtcbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgaWNvbnMubGVuZ3RoOyBfaTIrKykge1xuICAgIGhpZGUoaWNvbnNbX2kyXSk7XG4gIH1cbiAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSBpY29uVHlwZSkge1xuICAgICAgICB2YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIGVycm9yKCdVbmtub3duIGFsZXJ0IHR5cGU6ICcgKyBwYXJhbXMudHlwZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpY29uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJy4nICsgaWNvblR5cGVzW3BhcmFtcy50eXBlXSk7XG4gICAgc2hvdyhpY29uKTtcblxuICAgIC8vIEFuaW1hdGUgaWNvblxuICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIGFkZENsYXNzKGljb24sICdzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbicpO1xuICAgICAgICAgIGFkZENsYXNzKGljb24ucXVlcnlTZWxlY3RvcignLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnKSwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCcpO1xuICAgICAgICAgIGFkZENsYXNzKGljb24ucXVlcnlTZWxlY3RvcignLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJyksICdzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICBhZGRDbGFzcyhpY29uLCAnc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDIteC1tYXJrJyksICdzd2FsMi1hbmltYXRlLXgtbWFyaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEN1c3RvbSBpbWFnZVxuICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuICBpZiAocGFyYW1zLmltYWdlVXJsKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTtcbiAgICBzaG93KGltYWdlKTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VXaWR0aCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaW1hZ2VIZWlnaHQpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICB9XG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBpZiAocGFyYW1zLmltYWdlQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGltYWdlLCBwYXJhbXMuaW1hZ2VDbGFzcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhpZGUoaW1hZ2UpO1xuICB9XG5cbiAgLy8gQ2FuY2VsIGJ1dHRvblxuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2FuY2VsQnV0dG9uKTtcbiAgfVxuXG4gIC8vIENvbmZpcm0gYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICByZW1vdmVTdHlsZVByb3BlcnR5KGNvbmZpcm1CdXR0b24sICdkaXNwbGF5Jyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgfVxuXG4gIC8vIEJ1dHRvbnMgd3JhcHBlclxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGJ1dHRvbnNXcmFwcGVyKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93KGJ1dHRvbnNXcmFwcGVyKTtcbiAgfVxuXG4gIC8vIEVkaXQgdGV4dCBvbiBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25maXJtQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dDtcbiAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0O1xuXG4gIC8vIEFSSUEgbGFiZWxzIGZvciBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jb25maXJtQnV0dG9uQXJpYUxhYmVsKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jYW5jZWxCdXR0b25BcmlhTGFiZWwpO1xuXG4gIC8vIFNldCBidXR0b25zIHRvIHNlbGVjdGVkIGJhY2tncm91bmQgY29sb3JzXG4gIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgfVxuXG4gIC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG4gIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29uZmlybTtcbiAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgcGFyYW1zLmNvbmZpcm1CdXR0b25DbGFzcyk7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jYW5jZWw7XG4gIGFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgcGFyYW1zLmNhbmNlbEJ1dHRvbkNsYXNzKTtcblxuICAvLyBCdXR0b25zIHN0eWxpbmdcbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGFkZENsYXNzKGNvbmZpcm1CdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGNvbmZpcm1CdXR0b24sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgcmVtb3ZlQ2xhc3MoY2FuY2VsQnV0dG9uLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuXG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgfVxuXG4gIC8vIENTUyBhbmltYXRpb25cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24gPT09IHRydWUpIHtcbiAgICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH1cblxuICAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9saW1vbnRlLmdpdGh1Yi5pby9zd2VldGFsZXJ0Mi8jYWpheC1yZXF1ZXN0Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogQW5pbWF0aW9uc1xuICpcbiAqIEBwYXJhbSBhbmltYXRpb25cbiAqIEBwYXJhbSBvbkJlZm9yZU9wZW5cbiAqIEBwYXJhbSBvbkNvbXBsZXRlXG4gKi9cbnZhciBvcGVuTW9kYWwgPSBmdW5jdGlvbiBvcGVuTW9kYWwoYW5pbWF0aW9uLCBvbkJlZm9yZU9wZW4sIG9uQ29tcGxldGUpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIGlmIChvbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIG9uQmVmb3JlT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQmVmb3JlT3Blbihtb2RhbCk7XG4gIH1cblxuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuICBzaG93KG1vZGFsKTtcblxuICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9XG5cbiAgYWRkQ2xhc3MoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gIGZpeFNjcm9sbGJhcigpO1xuICBpT1NmaXgoKTtcbiAgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChvbkNvbXBsZXRlICE9PSBudWxsICYmIHR5cGVvZiBvbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbXBsZXRlKG1vZGFsKTtcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IG1lYXN1cmVTY3JvbGxiYXIoKSArICdweCc7XG4gIH1cbn07XG5cbnZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZztcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8vIEZpeCBpT1Mgc2Nyb2xsaW5nIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5NjI2MzAyLzEzMzE0MjVcbnZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyAncHgnO1xuICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gIH1cbn07XG5cbnZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgfVxufTtcblxuLy8gU3dlZXRBbGVydCBlbnRyeSBwb2ludFxudmFyIHN3ZWV0QWxlcnQgPSBmdW5jdGlvbiBzd2VldEFsZXJ0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJnc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IF9leHRlbmRzKHt9LCBtb2RhbFBhcmFtcyk7XG5cbiAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbMF0pKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHBhcmFtcy50aXRsZSA9IGFyZ3NbMF07XG4gICAgICBwYXJhbXMuaHRtbCA9IGFyZ3NbMV07XG4gICAgICBwYXJhbXMudHlwZSA9IGFyZ3NbMl07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIF9leHRlbmRzKHBhcmFtcywgYXJnc1swXSk7XG4gICAgICBwYXJhbXMuZXh0cmFQYXJhbXMgPSBhcmdzWzBdLmV4dHJhUGFyYW1zO1xuXG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnZW1haWwnICYmIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9PT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDZ9JC87XG4gICAgICAgICAgICBpZiAoZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAndXJsJyAmJiBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1LzEzMzE0MjVcbiAgICAgICAgICAgIHZhciB1cmxSZWdleCA9IC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKSQvO1xuICAgICAgICAgICAgaWYgKHVybFJlZ2V4LnRlc3QodXJsKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgVVJMJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGFyZ3VtZW50ISBFeHBlY3RlZCBcInN0cmluZ1wiIG9yIFwib2JqZWN0XCIsIGdvdCAnICsgX3R5cGVvZihhcmdzWzBdKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gQ2xvc2Ugb24gdGltZXJcbiAgICBpZiAocGFyYW1zLnRpbWVyKSB7XG4gICAgICBtb2RhbC50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICAgIHJlamVjdCgndGltZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgZGlzbWlzczogJ3RpbWVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgcGFyYW1zLnRpbWVyKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgaW5wdXQgZWxlbWVudCBieSBzcGVjaWZpZWQgdHlwZSBvciwgaWYgdHlwZSBpc24ndCBzcGVjaWZpZWQsIGJ5IHBhcmFtcy5pbnB1dFxuICAgIHZhciBnZXRJbnB1dCA9IGZ1bmN0aW9uIGdldElucHV0KGlucHV0VHlwZSkge1xuICAgICAgaW5wdXRUeXBlID0gaW5wdXRUeXBlIHx8IHBhcmFtcy5pbnB1dDtcbiAgICAgIGlmICghaW5wdXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKTtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJyBpbnB1dCcpO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFkaW8gKyAnIGlucHV0OmNoZWNrZWQnKSB8fCBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJyBpbnB1dDpmaXJzdC1jaGlsZCcpO1xuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgcmV0dXJuIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIGlucHV0Jyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBtb2RhbCBpbnB1dFxuICAgIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaW5wdXQgYXV0b2ZvY3VzXG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0odmFsdWUpIHtcbiAgICAgIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgICBzd2VldEFsZXJ0LnNob3dMb2FkaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBwYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgcGFyYW1zLmV4dHJhUGFyYW1zKS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgICAgIHJlc29sdmUocHJlQ29uZmlybVZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgc3dlZXRBbGVydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIGlmIChlcnJvciQkMSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5zaG93VmFsaWRhdGlvbkVycm9yKGVycm9yJCQxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcbiAgICB2YXIgb25CdXR0b25FdmVudCA9IGZ1bmN0aW9uIG9uQnV0dG9uRXZlbnQoZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgICAgdmFyIHRhcmdldGVkQ29uZmlybSA9IGNvbmZpcm1CdXR0b24gJiYgKGNvbmZpcm1CdXR0b24gPT09IHRhcmdldCB8fCBjb25maXJtQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuICAgICAgdmFyIHRhcmdldGVkQ2FuY2VsID0gY2FuY2VsQnV0dG9uICYmIChjYW5jZWxCdXR0b24gPT09IHRhcmdldCB8fCBjYW5jZWxCdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG5cbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yLCAtMC4xKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvciwgLTAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yLCAtMC4yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvciwgLTAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgLy8gQ2xpY2tlZCAnY29uZmlybSdcbiAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIHBhcmFtcy5leHRyYVBhcmFtcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvciQkMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IoZXJyb3IkJDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsaWNrZWQgJ2NhbmNlbCdcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsICYmIHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KCdjYW5jZWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnY2FuY2VsJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBidXR0b25zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2luZyBtb2RhbCBieSBjbG9zZSBidXR0b25cbiAgICBnZXRDbG9zZUJ1dHRvbigpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzd2VldEFsZXJ0LmNsb3NlTW9kYWwocGFyYW1zLm9uQ2xvc2UpO1xuICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlamVjdCgnY2xvc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnY2xvc2UnIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDbG9zaW5nIG1vZGFsIGJ5IG92ZXJsYXkgY2xpY2tcbiAgICBjb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuY2xvc2VNb2RhbChwYXJhbXMub25DbG9zZSk7XG4gICAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICAgIHJlamVjdCgnb3ZlcmxheScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBkaXNtaXNzOiAnb3ZlcmxheScgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnNXcmFwcGVyID0gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG5cbiAgICAvLyBSZXZlcnNlIGJ1dHRvbnMgKENvbmZpcm0gb24gdGhlIHJpZ2h0IHNpZGUpXG4gICAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGNvbmZpcm1CdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbik7XG4gICAgfVxuXG4gICAgLy8gRm9jdXMgaGFuZGxpbmdcbiAgICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhwYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcbiAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDtcblxuICAgICAgICAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgICAgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGVsZW1lbnQgaXMgdmlzaWJsZVxuICAgICAgICB2YXIgZWwgPSBmb2N1c2FibGVFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChpc1Zpc2libGUoZWwpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZ2V0SW5wdXQoKSkge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2VldEFsZXJ0LmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRBQlxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMocGFyYW1zLmZvY3VzQ2FuY2VsKTtcbiAgICAgICAgdmFyIGJ0bkluZGV4ID0gLTE7IC8vIEZpbmQgdGhlIGJ1dHRvbiAtIG5vdGUsIHRoaXMgaXMgYSBub2RlbGlzdCwgbm90IGFuIGFycmF5LlxuICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pNF0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2k0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0Fycm93ZG93biddLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShjYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgLy8gYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjYW5jZWxCdXR0b24gJiYgaXNWaXNpYmxlKGNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRVNDXG4gICAgICB9IGVsc2UgaWYgKChlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnKSAmJiBwYXJhbXMuYWxsb3dFc2NhcGVLZXkgPT09IHRydWUpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZU1vZGFsKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgaWYgKHBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcmVqZWN0KCdlc2MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgZGlzbWlzczogJ2VzYycgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCF3aW5kb3cub25rZXlkb3duIHx8IHdpbmRvdy5vbmtleWRvd24udG9TdHJpbmcoKSAhPT0gaGFuZGxlS2V5RG93bi50b1N0cmluZygpKSB7XG4gICAgICBzdGF0ZXMucHJldmlvdXNXaW5kb3dLZXlEb3duID0gd2luZG93Lm9ua2V5ZG93bjtcbiAgICAgIHdpbmRvdy5vbmtleWRvd24gPSBoYW5kbGVLZXlEb3duO1xuICAgIH1cblxuICAgIC8vIExvYWRpbmcgc3RhdGVcbiAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uIGFuZCBkaXNhYmxlIENhbmNlbCBidXR0b25cbiAgICAgKi9cbiAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nID0gc3dlZXRBbGVydC5kaXNhYmxlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgICAgIGhpZGUoY29uZmlybUJ1dHRvbik7XG4gICAgICAgIGlmICghcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICBoaWRlKGdldEJ1dHRvbnNXcmFwcGVyKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZW1vdmVDbGFzcyhidXR0b25zV3JhcHBlciwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgICByZW1vdmVDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0VGl0bGUoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDb250ZW50KCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldElucHV0KCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEltYWdlKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldEJ1dHRvbnNXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH07XG4gICAgc3dlZXRBbGVydC5nZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUNvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUNvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5lbmFibGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9yICh2YXIgX2k1ID0gMDsgX2k1IDwgcmFkaW9zLmxlbmd0aDsgX2k1KyspIHtcbiAgICAgICAgICByYWRpb3NbX2k1XS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmRpc2FibGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9yICh2YXIgX2k2ID0gMDsgX2k2IDwgcmFkaW9zLmxlbmd0aDsgX2k2KyspIHtcbiAgICAgICAgICByYWRpb3NbX2k2XS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2hvdyBibG9jayB3aXRoIHZhbGlkYXRpb24gZXJyb3JcbiAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSBnZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgIHZhbGlkYXRpb25FcnJvci5pbm5lckhUTUwgPSBlcnJvciQkMTtcbiAgICAgIHNob3codmFsaWRhdGlvbkVycm9yKTtcblxuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IpO1xuICAgICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBlcnJvclxuICAgIHN3ZWV0QWxlcnQucmVzZXRWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbkVycm9yID0gZ2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gICAgICBoaWRlKHZhbGlkYXRpb25FcnJvcik7XG5cbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5nZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhcmFtcy5wcm9ncmVzc1N0ZXBzO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LnNldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAocHJvZ3Jlc3NTdGVwcykge1xuICAgICAgcGFyYW1zLnByb2dyZXNzU3RlcHMgPSBwcm9ncmVzc1N0ZXBzO1xuICAgICAgc2V0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LnNob3dQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2hvdyhnZXRQcm9ncmVzc1N0ZXBzKCkpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmhpZGVQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGlkZShnZXRQcm9ncmVzc1N0ZXBzKCkpO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuXG4gICAgLy8gaW5wdXRzXG4gICAgdmFyIGlucHV0VHlwZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG4gICAgdmFyIGlucHV0ID0gdm9pZCAwO1xuICAgIGZvciAodmFyIF9pNyA9IDA7IF9pNyA8IGlucHV0VHlwZXMubGVuZ3RoOyBfaTcrKykge1xuICAgICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVzW19pN11dO1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBpbnB1dENsYXNzKTtcbiAgICAgIGlucHV0ID0gZ2V0SW5wdXQoaW5wdXRUeXBlc1tfaTddKTtcblxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBmb3IgKHZhciBqIGluIGlucHV0LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgdmFyIGF0dHJOYW1lID0gaW5wdXQuYXR0cmlidXRlc1tqXS5uYW1lO1xuICAgICAgICAgICAgaWYgKGF0dHJOYW1lICE9PSAndHlwZScgJiYgYXR0ck5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBjbGFzc1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzcztcbiAgICAgIGlmIChwYXJhbXMuaW5wdXRDbGFzcykge1xuICAgICAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLmlucHV0Q2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSB2b2lkIDA7XG4gICAgc3dpdGNoIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3RlbCc6XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHZhciByYW5nZSA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMucmFuZ2UpO1xuICAgICAgICB2YXIgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgICAgICByYW5nZUlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIHJhbmdlSW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgc2hvdyhyYW5nZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIGZvciAodmFyIG9wdGlvblZhbHVlIGluIGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSBvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNob3coc2VsZWN0KTtcbiAgICAgICAgICBzZWxlY3QuZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHZhciByYWRpbyA9IGdldENoaWxkQnlDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgICByYWRpby5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBmb3IgKHZhciByYWRpb1ZhbHVlIGluIGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWU7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gcmFkaW9WYWx1ZSkge1xuICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmFkaW9MYWJlbFNwYW4uaW5uZXJIVE1MID0gaW5wdXRPcHRpb25zW3JhZGlvVmFsdWVdO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbFNwYW4pO1xuICAgICAgICAgICAgcmFkaW9MYWJlbC5mb3IgPSByYWRpb0lucHV0LmlkO1xuICAgICAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNob3cocmFkaW8pO1xuICAgICAgICAgIHZhciByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByYWRpb3NbMF0uZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB2YXIgY2hlY2tib3ggPSBnZXRDaGlsZEJ5Q2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmNoZWNrYm94KTtcbiAgICAgICAgdmFyIGNoZWNrYm94SW5wdXQgPSBnZXRJbnB1dCgnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3hJbnB1dC52YWx1ZSA9IDE7XG4gICAgICAgIGNoZWNrYm94SW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgICAgICAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gQm9vbGVhbihwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIHZhciBsYWJlbCA9IGNoZWNrYm94LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJyk7XG4gICAgICAgIGlmIChsYWJlbC5sZW5ndGgpIHtcbiAgICAgICAgICBjaGVja2JveC5yZW1vdmVDaGlsZChsYWJlbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHNob3coY2hlY2tib3gpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKG1vZGFsLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIHNob3codGV4dGFyZWEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIicgKyBwYXJhbXMuaW5wdXQgKyAnXCInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBpZiAocGFyYW1zLmlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc3dlZXRBbGVydC5zaG93TG9hZGluZygpO1xuICAgICAgICBwYXJhbXMuaW5wdXRPcHRpb25zLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcignVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0IG9yIFByb21pc2UsIGdvdCAnICsgX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHBhcmFtcy5hbmltYXRpb24sIHBhcmFtcy5vbkJlZm9yZU9wZW4sIHBhcmFtcy5vbk9wZW4pO1xuXG4gICAgaWYgKCFwYXJhbXMuYWxsb3dFbnRlcktleSkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZm9jdXNDYW5jZWwgJiYgaXNWaXNpYmxlKGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgIGNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXMoLTEsIDEpO1xuICAgIH1cblxuICAgIC8vIGZpeCBzY3JvbGxcbiAgICBnZXRDb250YWluZXIoKS5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHN3YWwyIG1vZGFsIGlzIHNob3duXG4gKi9cbnN3ZWV0QWxlcnQuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFnZXRNb2RhbCgpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgY2hhaW5pbmcgc3dlZXRBbGVydCBtb2RhbHNcbiAqL1xuc3dlZXRBbGVydC5xdWV1ZSA9IGZ1bmN0aW9uIChzdGVwcykge1xuICBxdWV1ZSA9IHN0ZXBzO1xuICB2YXIgcmVzZXRRdWV1ZSA9IGZ1bmN0aW9uIHJlc2V0UXVldWUoKSB7XG4gICAgcXVldWUgPSBbXTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gIH07XG4gIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIChmdW5jdGlvbiBzdGVwKGksIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaSA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG5cbiAgICAgICAgc3dlZXRBbGVydChxdWV1ZVtpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQpO1xuICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRpc21pc3MpIHtcbiAgICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgICAgcmVqZWN0KGRpc21pc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0UXVldWUoKTtcbiAgICAgICAgcmVzb2x2ZShxdWV1ZVJlc3VsdCk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBtb2RhbCBpbiBxdWV1ZVxuICovXG5zd2VldEFsZXJ0LmdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIG1vZGFsIHRvIHRoZSBxdWV1ZVxuICovXG5zd2VldEFsZXJ0Lmluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcXVldWUuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgfVxuICByZXR1cm4gcXVldWUucHVzaChzdGVwKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGRlbGV0aW5nIGEgbW9kYWwgZnJvbSB0aGUgcXVldWVcbiAqL1xuc3dlZXRBbGVydC5kZWxldGVRdWV1ZVN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBxdWV1ZVtpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbG9zZSBzd2VldEFsZXJ0XG4gKi9cbnN3ZWV0QWxlcnQuY2xvc2UgPSBzd2VldEFsZXJ0LmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAob25Db21wbGV0ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG4gIGlmICghbW9kYWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVtb3ZlQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLnNob3cpO1xuICBhZGRDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIGNsZWFyVGltZW91dChtb2RhbC50aW1lb3V0KTtcblxuICByZXNldFByZXZTdGF0ZSgpO1xuXG4gIHZhciByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUgPSBmdW5jdGlvbiByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUoKSB7XG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gICAgdW5kb1Njcm9sbGJhcigpO1xuICAgIHVuZG9JT1NmaXgoKTtcbiAgfTtcblxuICAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGlmIChoYXNDbGFzcyhtb2RhbCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgcmVtb3ZlTW9kYWxBbmRSZXNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVNb2RhbEFuZFJlc2V0U3RhdGUoKTtcbiAgfVxuICBpZiAob25Db21wbGV0ZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db21wbGV0ZShtb2RhbCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0LmNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuc3dlZXRBbGVydC5jbGlja0NhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG4vKipcbiAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uIGFuZCBkaXNhYmxlIENhbmNlbCBidXR0b25cbiAqL1xuc3dlZXRBbGVydC5zaG93TG9hZGluZyA9IHN3ZWV0QWxlcnQuZW5hYmxlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgaWYgKCFtb2RhbCkge1xuICAgIHN3ZWV0QWxlcnQoJycpO1xuICB9XG4gIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyIGJ1dHRvbnNXcmFwcGVyID0gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcblxuICBzaG93KGJ1dHRvbnNXcmFwcGVyKTtcbiAgc2hvdyhjb25maXJtQnV0dG9uLCAnaW5saW5lLWJsb2NrJyk7XG4gIGFkZENsYXNzKGJ1dHRvbnNXcmFwcGVyLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgYWRkQ2xhc3MobW9kYWwsIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICBtb2RhbC5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuc3dlZXRBbGVydC5pc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVmYXVsdFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbU5hbWUpIHx8IHBhcmFtTmFtZSA9PT0gJ2V4dHJhUGFyYW1zJztcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKiBAcGFyYW0ge09iamVjdH0gdXNlclBhcmFtc1xuICovXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzID0gZnVuY3Rpb24gKHVzZXJQYXJhbXMpIHtcbiAgaWYgKCF1c2VyUGFyYW1zIHx8ICh0eXBlb2YgdXNlclBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXNlclBhcmFtcykpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcnJvcigndGhlIGFyZ3VtZW50IGZvciBzZXREZWZhdWx0cygpIGlzIHJlcXVpcmVkIGFuZCBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgfVxuXG4gIGZvciAodmFyIHBhcmFtIGluIHVzZXJQYXJhbXMpIHtcbiAgICBpZiAoIXN3ZWV0QWxlcnQuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oJ1Vua25vd24gcGFyYW1ldGVyIFwiJyArIHBhcmFtICsgJ1wiJyk7XG4gICAgICBkZWxldGUgdXNlclBhcmFtc1twYXJhbV07XG4gICAgfVxuICB9XG5cbiAgX2V4dGVuZHMobW9kYWxQYXJhbXMsIHVzZXJQYXJhbXMpO1xufTtcblxuLyoqXG4gKiBSZXNldCBkZWZhdWx0IHBhcmFtcyBmb3IgZWFjaCBwb3B1cFxuICovXG5zd2VldEFsZXJ0LnJlc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMpO1xufTtcblxuc3dlZXRBbGVydC5ub29wID0gZnVuY3Rpb24gKCkge307XG5cbnN3ZWV0QWxlcnQudmVyc2lvbiA9ICc2LjExLjUnO1xuXG5zd2VldEFsZXJ0LmRlZmF1bHQgPSBzd2VldEFsZXJ0O1xuXG5yZXR1cm4gc3dlZXRBbGVydDtcblxufSkpKTtcbmlmICh3aW5kb3cuU3dlZXRhbGVydDIpIHdpbmRvdy5zd2VldEFsZXJ0ID0gd2luZG93LnN3YWwgPSB3aW5kb3cuU3dlZXRhbGVydDI7XG4iLCIvLyBAZmxvd1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVXBsb2FkZmlsZSBmcm9tICcuLy4uL3BhcnRpYWxzL3VwbG9hZGZpbGUnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vLi4vcGFydGlhbHMvbm90aWZpY2F0aW9uJztcclxuXHJcbmNsYXNzIENvbmZpZyB7XHJcbiAgZm9ybSAoKSB7XHJcbiAgICB2YXIgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbigpO1xyXG4gICAgbm90aWZpY2F0aW9uLmZsYXNoTWVzc2FnZSgpO1xyXG4gICAgdmFyIF8kID0gd2luZG93LmpRdWVyeTtcclxuICAgIHZhciB1cGxvYWRmaWxlID0gbmV3IFVwbG9hZGZpbGUoKTtcclxuICAgIHVwbG9hZGZpbGUuaW5pdCgpO1xyXG4gICAgdmFyIHVwbG9hZGJsb2cgPSBuZXcgVXBsb2FkZmlsZSgnI2Jsb2dfYmFubmVyJywgJyNibG9nX2Jhbm5lci11cGxvYWQnKTtcclxuICAgIHVwbG9hZGJsb2cuaW5pdCgpO1xyXG4gICAgdmFyIHVwbG9hZEFib3V0ID0gbmV3IFVwbG9hZGZpbGUoJyNhYm91dF9iYW5uZXInLCAnI2Fib3V0X2Jhbm5lci11cGxvYWQnKTtcclxuICAgIHVwbG9hZEFib3V0LmluaXQoKTtcclxuICAgIHZhciB1cGxvYWRXaG93ZWFyZSA9IG5ldyBVcGxvYWRmaWxlKCcjd2hvX3dlX2FyZV9pbWFnZScsICcjd2hvX3dlX2FyZV9pbWFnZS11cGxvYWQnKTtcclxuICAgIHVwbG9hZFdob3dlYXJlLmluaXQoKTtcclxuICAgIHZhciB1cGxvYWRDb250YWN0QmFubmVyID0gbmV3IFVwbG9hZGZpbGUoJyNjb250YWN0X2Jhbm5lcicsICcjY29udGFjdF9iYW5uZXItdXBsb2FkJyk7XHJcbiAgICB1cGxvYWRDb250YWN0QmFubmVyLmluaXQoKTtcclxuICAgIHZhciB1cGxvYWRDb250YWN0QmFubmVyMSA9IG5ldyBVcGxvYWRmaWxlKCcjY29udGFjdF9iYW5uZXJfMScsICcjY29udGFjdF9iYW5uZXJfMS11cGxvYWQnKTtcclxuICAgIHVwbG9hZENvbnRhY3RCYW5uZXIxLmluaXQoKTtcclxuICAgIHZhciB1cGxvYWRDb250YWN0QmFubmVyMiA9IG5ldyBVcGxvYWRmaWxlKCcjY29udGFjdF9iYW5uZXJfMicsICcjY29udGFjdF9iYW5uZXJfMi11cGxvYWQnKTtcclxuICAgIHVwbG9hZENvbnRhY3RCYW5uZXIyLmluaXQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5jb25maWcgPSBuZXcgQ29uZmlnKCk7XHJcbiIsIi8vIEBmbG93XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuY2xhc3MgTm90aWZpY2F0aW9uIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0ICh0ZXh0KSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lSb3cgKGRhdGF0YWJsZSA9IG51bGwsIHJlbW92ZSA9IG51bGwsIHNlbGVjdG9yKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBlbCA9IHNlbGVjdG9yIHx8ICdhLmRlbGV0ZS1hY3Rpb24nO1xyXG4gICAgXyQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGVsLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgJHRoaXMgPSBfJCh0aGlzKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgZGVsZXRlVXJsID0gXyQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICBzd2FsKHtcclxuICAgICAgICB0aXRsZTogd2luZG93LmxhbmcuZ2V0KCdyZXBvc2l0b3JpZXMuc3dlZXRhbGVydC5xdWVzdGlvbicpLFxyXG4gICAgICAgIHRleHQ6IHNlbGYuX3RleHQsXHJcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI0RENkI1NScsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHdpbmRvdy5sYW5nLmdldCgncmVwb3NpdG9yaWVzLnN3ZWV0YWxlcnQub2snKSxcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB3aW5kb3cubGFuZy5nZXQoJ3JlcG9zaXRvcmllcy5zd2VldGFsZXJ0LmNhbmNlbCcpXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF8kLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICB1cmw6IGRlbGV0ZVVybCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLmFsZXJ0Tm90aWZpY2F0aW9uKHJlc3BvbnNlLm1lc3NhZ2UsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgZGF0YXRhYmxlLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRhdGF0YWJsZSAmJiByZW1vdmUpIHtcclxuICAgICAgICAgICAgICAkdGhpcy5jbG9zZXN0KHJlbW92ZSkuZmFkZU91dCg0MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWxlcnROb3RpZmljYXRpb24ocmVzcG9uc2UucmVzcG9uc2VKU09OLm1lc3NhZ2UsIGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgZnVuY3Rpb24gKGRpc21pc3MpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbGVydE5vdGlmaWNhdGlvbiAobWVzc2FnZSwgc3RhdHVzID0gdHJ1ZSwgZGVsYXkgPSAzMDAwKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIGxldCBhbGVydFR5cGUgPSBzdGF0dXMgPyAnYWxlcnQtc3VjY2VzcycgOiAnYWxlcnQtZGFuZ2VyJztcclxuICAgIF8kKCcjbm90aWZpY2F0aW9uIC5hbGVydC1jb250ZW50JykuaHRtbCgnJyk7XHJcbiAgICBfJChtZXNzYWdlKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICBfJCgnI25vdGlmaWNhdGlvbiAuYWxlcnQtY29udGVudCcpLmFwcGVuZCgnPHN0cm9uZz4nICsgZWxlbWVudCArICc8L3N0cm9uZz48YnI+Jyk7XHJcbiAgICB9KTtcclxuICAgIF8kKCcjbm90aWZpY2F0aW9uJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpLnJlbW92ZUNsYXNzKCdhbGVydC1zdWNjZXNzIGFsZXJ0LWRhbmdlcicpLmFkZENsYXNzKGFsZXJ0VHlwZSkuZGVsYXkoZGVsYXkpLnNob3coZnVuY3Rpb24gKCkge1xyXG4gICAgICBfJCh0aGlzKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZsYXNoTWVzc2FnZSAoKSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9IHdpbmRvdy5mbGFzaF9tZXNzYWdlO1xyXG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlLnN0YXR1cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdmFyIGUgPSBtZXNzYWdlO1xyXG4gICAgICB0aGlzLmFsZXJ0Tm90aWZpY2F0aW9uKGUubWVzc2FnZSwgZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xyXG4iLCIvLyBAZmxvd1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBVcGxvYWQge1xyXG4gIGNvbnN0cnVjdG9yIChlbCA9ICcjaW1hZ2UnLCBpbWcgPSAnI2ltZy11cGxvYWQnKSB7XHJcbiAgICB0aGlzLl9lbCA9IHdpbmRvdy4kKGVsKTtcclxuICAgIHRoaXMuX2ltZyA9IHdpbmRvdy4kKGltZyk7XHJcbiAgfVxyXG5cclxuICBpbml0ICgpIHtcclxuICAgIHZhciBfJCA9IHdpbmRvdy4kO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5fZWwuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGxhYmVsID0gXyQodGhpcykudmFsKCkucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoLy4qXFwvLywgJycpO1xyXG4gICAgICBsZXQgaW5wdXQgPSBfJCh0aGlzKS5wYXJlbnRzKCcuaW5wdXQtZ3JvdXAnKS5maW5kKCc6dGV4dCcpO1xyXG4gICAgICBpZiAoaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgaW5wdXQudmFsKGxhYmVsKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLnJlYWRVUkwodGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRVUkwgKGlucHV0KSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2VsZi5faW1nLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRJbWFnZShmaWxlLCB1cmwsIGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgXyQgPSB3aW5kb3cuJDtcclxuICAgIHZhciAgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcclxuICAgIF8kLmFqYXgoe1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBlbGVtZW50LnN1bW1lcm5vdGUoXCJpbnNlcnRJbWFnZVwiLCBkYXRhLnVybCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoeGhyLnJlc3BvbnNlSlNPTi5lcnJvcnMuaW1hZ2UudG9TdHJpbmcoKSB8fCB4aHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==