/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./colourgrab/frontend/js/app.js":
/*!***************************************!*\
  !*** ./colourgrab/frontend/js/app.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./modules/alerts */ "./colourgrab/frontend/js/modules/alerts.js");
__webpack_require__(/*! ./modules/a11y-dialog */ "./colourgrab/frontend/js/modules/a11y-dialog.js");
__webpack_require__(/*! ./modules/clipboard */ "./colourgrab/frontend/js/modules/clipboard.js");
__webpack_require__(/*! ./modules/selectPalette */ "./colourgrab/frontend/js/modules/selectPalette.js");

/***/ }),

/***/ "./colourgrab/frontend/js/modules/a11y-dialog.js":
/*!*******************************************************!*\
  !*** ./colourgrab/frontend/js/modules/a11y-dialog.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var a11y_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! a11y-dialog */ "./node_modules/a11y-dialog/dist/a11y-dialog.esm.js");

var container = document.querySelector('#palette-modal');
var dialog;
var dialogCloseButton = document.querySelector('.palette-modal-close');
var dialogOverlay = document.querySelector('.palette-modal-overlay');
var allDialogCloseElements = [dialogCloseButton, dialogOverlay];
var openModal = function openModal() {
  dialog.show();
  document.body.classList.add('__modal');
};
var closeModal = function closeModal() {
  dialog.hide();
  document.body.classList.remove('__modal');
};
if (container) {
  dialog = new a11y_dialog__WEBPACK_IMPORTED_MODULE_0__["default"](container);
  allDialogCloseElements.forEach(function (el) {
    el.addEventListener('click', function () {
      closeModal();
    });
  });
}


/***/ }),

/***/ "./colourgrab/frontend/js/modules/alerts.js":
/*!**************************************************!*\
  !*** ./colourgrab/frontend/js/modules/alerts.js ***!
  \**************************************************/
/***/ (() => {

var alertsClose = document.querySelector('.alerts-close');
var alertsWrap = document.querySelector('.alerts-wrap');
var fadeOutSpeed = 1000; // matches the .alerts-wrap opacity transition property in _alerts.scss  

var closeAlerts = function closeAlerts() {
  alertsWrap.style.opacity = 0;
  setTimeout(function () {
    alertsWrap.remove();
  }, fadeOutSpeed);
};
if (alertsClose) {
  alertsClose.addEventListener('click', closeAlerts);
}

/***/ }),

/***/ "./colourgrab/frontend/js/modules/clipboard.js":
/*!*****************************************************!*\
  !*** ./colourgrab/frontend/js/modules/clipboard.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyButton: () => (/* binding */ copyButton)
/* harmony export */ });
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectPalette */ "./colourgrab/frontend/js/modules/selectPalette.js");


var copyButton = document.querySelector('.palette-modal-copy');
if (copyButton) {
  copyButton.addEventListener('click', function () {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default()(_selectPalette__WEBPACK_IMPORTED_MODULE_1__.paletteString);
    copyButton.textContent = 'Copied';
    clearTimeout(resetCopyBtnText);
    var resetCopyBtnText = setTimeout(function () {
      copyButton.textContent = 'Copy to clipboard';
    }, 2000);
  });
}


/***/ }),

/***/ "./colourgrab/frontend/js/modules/selectPalette.js":
/*!*********************************************************!*\
  !*** ./colourgrab/frontend/js/modules/selectPalette.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paletteString: () => (/* binding */ paletteString)
/* harmony export */ });
/* harmony import */ var _a11y_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a11y-dialog */ "./colourgrab/frontend/js/modules/a11y-dialog.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clipboard */ "./colourgrab/frontend/js/modules/clipboard.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var colourPalettes = document.querySelectorAll('.toggleColour');
var rgbPaletteButton = document.querySelector('.rgbPalette');
var cssPaletteButton = document.querySelector('.cssPalette');
var sassPaletteButton = document.querySelector('.sassPalette');
var tailwindPaletteButton = document.querySelector('.tailwindPalette');
var paletteString;
var rgbOptions = {
  'format': 'rgb'
};
var cssOptions = {
  'format': 'css',
  'paletteStart': ':root {\n',
  'paletteEnd': '}'
};
var sassOptions = {
  'format': 'sass'
};
var tailwindOptions = {
  'format': 'tailwind',
  'paletteStart': 'module.exports = {\n\ttheme: {\n\t\tcolors: {\n',
  'paletteEnd': '\t\t}\n\t}\n}'
};
var allButtons = [rgbPaletteButton, cssPaletteButton, sassPaletteButton, tailwindPaletteButton];
var allOptions = [rgbOptions, cssOptions, sassOptions, tailwindOptions];
var selectPaletteColour = function selectPaletteColour(el) {
  el.setAttribute('aria-pressed', el.getAttribute('aria-pressed') == 'false' ? 'true' : 'false');
};
var setTextColour = function setTextColour(el) {
  var elementBackgroundColour = window.getComputedStyle(el).backgroundColor;
  var _elementBackgroundCol = elementBackgroundColour.match(/\d+/g),
    _elementBackgroundCol2 = _slicedToArray(_elementBackgroundCol, 3),
    r = _elementBackgroundCol2[0],
    g = _elementBackgroundCol2[1],
    b = _elementBackgroundCol2[2];
  var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  el.classList.add(luminance > 0.5 ? '__blackicon' : '__whiteicon');
};
var generatePalette = function generatePalette(options) {
  var selectedColours = document.querySelectorAll('.palette-color[aria-pressed=true]');
  if (!selectedColours.length) {
    paletteString = '';
    return;
  }
  ;
  var palette = '';
  var paletteStart = options.paletteStart,
    paletteEnd = options.paletteEnd,
    format = options.format;
  if (!paletteStart) {
    paletteStart = '';
  }
  if (!paletteEnd) {
    paletteEnd = '';
  }
  selectedColours.forEach(function (color, i) {
    var backgroundColor = window.getComputedStyle(color).backgroundColor;
    switch (format) {
      case 'rgb':
        palette += "Colour ".concat(i + 1, ": ").concat(backgroundColor, ";\n");
        break;
      case 'css':
        palette += "\t--color-".concat(i + 1, ": ").concat(backgroundColor, ";\n");
        break;
      case 'sass':
        palette += "$color-".concat(i + 1, ": ").concat(backgroundColor, ";\n");
        break;
      case 'tailwind':
        palette += "\t\t\tcolor-".concat(i + 1, ": '").concat(backgroundColor, "',\n");
        break;
      default:
        palette = '';
    }
  });
  paletteString = paletteStart + palette + paletteEnd;
};
var updatePaletteModal = function updatePaletteModal(format) {
  var modalTitle = document.querySelector('.palette-modal-title');
  var modalText = document.querySelector('.palette-modal-text');
  if (!paletteString) {
    modalTitle.innerHTML = 'Oh no!';
    modalText.innerHTML = 'It appears you don\'t have any colours selected. Please select colours from the list and try again.';
    _clipboard__WEBPACK_IMPORTED_MODULE_1__.copyButton.classList.add('d-none');
  } else {
    var formattedStr = paletteString.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
    modalTitle.innerHTML = format;
    modalText.innerHTML = formattedStr;
    _clipboard__WEBPACK_IMPORTED_MODULE_1__.copyButton.classList.remove('d-none');
  }
};
if (colourPalettes.length > 0) {
  colourPalettes.forEach(function (palette) {
    // Add class to determine what colour checkmark should be used when selected
    setTextColour(palette);

    // Event listener to select palette colour
    palette.addEventListener('click', function () {
      selectPaletteColour(palette);
    });
  });
  allButtons.forEach(function (button, i) {
    button.addEventListener('click', function () {
      generatePalette(allOptions[i]);
      updatePaletteModal(allOptions[i].format);
      (0,_a11y_dialog__WEBPACK_IMPORTED_MODULE_0__.openModal)();
    });
  });
}


/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./colourgrab/frontend/sass/main.scss":
/*!********************************************!*\
  !*** ./colourgrab/frontend/sass/main.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./node_modules/a11y-dialog/dist/a11y-dialog.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/a11y-dialog/dist/a11y-dialog.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11yDialog)
/* harmony export */ });
const not = {
  inert: ':not([inert]):not([inert] *)',
  negTabIndex: ':not([tabindex^="-"])',
  disabled: ':not(:disabled)',
};

var focusableSelectors = [
  `a[href]${not.inert}${not.negTabIndex}`,
  `area[href]${not.inert}${not.negTabIndex}`,
  `input:not([type="hidden"]):not([type="radio"])${not.inert}${not.negTabIndex}${not.disabled}`,
  `input[type="radio"]${not.inert}${not.negTabIndex}${not.disabled}`,
  `select${not.inert}${not.negTabIndex}${not.disabled}`,
  `textarea${not.inert}${not.negTabIndex}${not.disabled}`,
  `button${not.inert}${not.negTabIndex}${not.disabled}`,
  `details${not.inert} > summary:first-of-type${not.negTabIndex}`,
  // Discard until Firefox supports `:has()`
  // See: https://github.com/KittyGiraudel/focusable-selectors/issues/12
  // `details:not(:has(> summary))${not.inert}${not.negTabIndex}`,
  `iframe${not.inert}${not.negTabIndex}`,
  `audio[controls]${not.inert}${not.negTabIndex}`,
  `video[controls]${not.inert}${not.negTabIndex}`,
  `[contenteditable]${not.inert}${not.negTabIndex}`,
  `[tabindex]${not.inert}${not.negTabIndex}`,
];

/**
 * Set the focus to the first element with `autofocus` with the element or the
 * element itself.
 */
function moveFocusToDialog(el) {
    const focused = (el.querySelector('[autofocus]') || el);
    focused.focus();
}
/**
 * Get the first and last focusable elements in a given tree.
 */
function getFocusableEdges(el) {
    // Check for a focusable element within the subtree of `el`.
    const first = findFocusableElement(el, true);
    // Only if we find the first element do we need to look for the last one. If
    // there’s no last element, we set `last` as a reference to `first` so that
    // the returned array is always of length 2.
    const last = first ? findFocusableElement(el, false) || first : null;
    return [first, last];
}
/**
 * Find the first focusable element inside the given node if `forward` is truthy
 * or the last focusable element otherwise.
 */
function findFocusableElement(node, forward) {
    // If we’re walking forward, check if this node is focusable, and return it
    // immediately if it is.
    if (forward && isFocusable(node))
        return node;
    // We should only search the subtree of this node if it can have focusable
    // children.
    if (canHaveFocusableChildren(node)) {
        // Start walking the DOM tree, looking for focusable elements.
        // Case 1: If this node has a shadow root, search it recursively.
        if (node.shadowRoot) {
            // Descend into this subtree.
            let next = getNextChildEl(node.shadowRoot, forward);
            // Traverse siblings, searching the subtree of each one
            // for focusable elements.
            while (next) {
                const focusableEl = findFocusableElement(next, forward);
                if (focusableEl)
                    return focusableEl;
                next = getNextSiblingEl(next, forward);
            }
        }
        // Case 2: If this node is a slot for a Custom Element, search its assigned
        // nodes recursively.
        else if (node.localName === 'slot') {
            const assignedElements = node.assignedElements({
                flatten: true,
            });
            if (!forward)
                assignedElements.reverse();
            for (const assignedElement of assignedElements) {
                const focusableEl = findFocusableElement(assignedElement, forward);
                if (focusableEl)
                    return focusableEl;
            }
        }
        // Case 3: this is a regular Light DOM node. Search its subtree.
        else {
            // Descend into this subtree.
            let next = getNextChildEl(node, forward);
            // Traverse siblings, searching the subtree of each one
            // for focusable elements.
            while (next) {
                const focusableEl = findFocusableElement(next, forward);
                if (focusableEl)
                    return focusableEl;
                next = getNextSiblingEl(next, forward);
            }
        }
    }
    // If we’re walking backward, we want to check the node’s entire subtree
    // before checking the node itself. If this node is focusable, return it.
    if (!forward && isFocusable(node))
        return node;
    return null;
}
function getNextChildEl(node, forward) {
    return forward ? node.firstElementChild : node.lastElementChild;
}
function getNextSiblingEl(el, forward) {
    return forward ? el.nextElementSibling : el.previousElementSibling;
}
/**
 * Determine if an element is hidden from the user.
 */
const isHidden = (el) => {
    // Browsers hide all non-<summary> descendants of closed <details> elements
    // from user interaction, but those non-<summary> elements may still match our
    // focusable-selectors and may still have dimensions, so we need a special
    // case to ignore them.
    if (el.matches('details:not([open]) *') &&
        !el.matches('details>summary:first-of-type'))
        return true;
    // If this element has no painted dimensions, it's hidden.
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
};
/**
 * Determine if an element is focusable and has user-visible painted dimensions.
 */
const isFocusable = (el) => {
    // A shadow host that delegates focus will never directly receive focus,
    // even with `tabindex=0`. Consider our <fancy-button> custom element, which
    // delegates focus to its shadow button:
    //
    // <fancy-button tabindex="0">
    //  #shadow-root
    //  <button><slot></slot></button>
    // </fancy-button>
    //
    // The browser acts as as if there is only one focusable element – the shadow
    // button. Our library should behave the same way.
    if (el.shadowRoot?.delegatesFocus)
        return false;
    return el.matches(focusableSelectors.join(',')) && !isHidden(el);
};
/**
 * Determine if an element can have focusable children. Useful for bailing out
 * early when walking the DOM tree.
 * @example
 * This div is inert, so none of its children can be focused, even though they
 * meet our criteria for what is focusable. Once we check the div, we can skip
 * the rest of the subtree.
 * ```html
 * <div inert>
 *   <button>Button</button>
 *   <a href="#">Link</a>
 * </div>
 * ```
 */
function canHaveFocusableChildren(el) {
    // The browser will never send focus into a Shadow DOM if the host element
    // has a negative tabindex. This applies to both slotted Light DOM Shadow DOM
    // children
    if (el.shadowRoot && el.getAttribute('tabindex') === '-1')
        return false;
    // Elemments matching this selector are either hidden entirely from the user,
    // or are visible but unavailable for interaction. Their descentants can never
    // receive focus.
    return !el.matches(':disabled,[hidden],[inert]');
}
/**
 * Get the active element, accounting for Shadow DOM subtrees.
 * @author Cory LaViska
 * @see: https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
 */
function getActiveElement(root = document) {
    const activeEl = root.activeElement;
    if (!activeEl)
        return null;
    // If there’s a shadow root, recursively find the active element within it.
    // If the recursive call returns null, return the active element
    // of the top-level Document.
    if (activeEl.shadowRoot)
        return getActiveElement(activeEl.shadowRoot) || document.activeElement;
    // If not, we can just return the active element
    return activeEl;
}
/**
 * Trap the focus inside the given element
 */
function trapTabKey(el, event) {
    const [firstFocusableChild, lastFocusableChild] = getFocusableEdges(el);
    // If there are no focusable children in the dialog, prevent the user from
    // tabbing out of it
    if (!firstFocusableChild)
        return event.preventDefault();
    const activeElement = getActiveElement();
    // If the SHIFT key is pressed while tabbing (moving backwards) and the
    // currently focused item is the first one, move the focus to the last
    // focusable item from the dialog element
    if (event.shiftKey && activeElement === firstFocusableChild) {
        // @ts-ignore: we know that `lastFocusableChild` is not null here
        lastFocusableChild.focus();
        event.preventDefault();
    }
    // If the SHIFT key is not pressed (moving forwards) and the currently focused
    // item is the last one, move the focus to the first focusable item from the
    // dialog element
    else if (!event.shiftKey && activeElement === lastFocusableChild) {
        firstFocusableChild.focus();
        event.preventDefault();
    }
}

class A11yDialog {
    $el;
    id;
    previouslyFocused;
    shown;
    constructor(element) {
        this.$el = element;
        this.id = this.$el.getAttribute('data-a11y-dialog') || this.$el.id;
        this.previouslyFocused = null;
        this.shown = false;
        this.maintainFocus = this.maintainFocus.bind(this);
        this.bindKeypress = this.bindKeypress.bind(this);
        this.handleTriggerClicks = this.handleTriggerClicks.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.$el.setAttribute('aria-hidden', 'true');
        this.$el.setAttribute('aria-modal', 'true');
        this.$el.setAttribute('tabindex', '-1');
        if (!this.$el.hasAttribute('role')) {
            this.$el.setAttribute('role', 'dialog');
        }
        document.addEventListener('click', this.handleTriggerClicks, true);
    }
    /**
     * Destroy the current instance (after making sure the dialog has been hidden)
     * and remove all associated listeners from dialog openers and closers
     */
    destroy() {
        // Hide the dialog to avoid destroying an open instance
        this.hide();
        // Remove the click event delegates for our openers and closers
        document.removeEventListener('click', this.handleTriggerClicks, true);
        // Clone and replace the dialog element to prevent memory leaks caused by
        // event listeners that the author might not have cleaned up.
        this.$el.replaceWith(this.$el.cloneNode(true));
        // Dispatch a `destroy` event
        this.fire('destroy');
        return this;
    }
    /**
     * Show the dialog element, trap the current focus within it, listen for some
     * specific key presses and fire all registered callbacks for `show` event
     */
    show(event) {
        // If the dialog is already open, abort
        if (this.shown)
            return this;
        // Keep a reference to the currently focused element to be able to restore
        // it later
        this.shown = true;
        this.$el.removeAttribute('aria-hidden');
        this.previouslyFocused = getActiveElement();
        // Due to a long lasting bug in Safari, clicking an interactive element
        // (like a <button>) does *not* move the focus to that element, which means
        // `document.activeElement` is whatever element is currently focused (like
        // an <input>), or the <body> element otherwise. We can work around that
        // problem by checking whether the focused element is the <body>, and if it,
        // store the click event target.
        // See: https://bugs.webkit.org/show_bug.cgi?id=22261
        if (this.previouslyFocused?.tagName === 'BODY' && event?.target) {
            this.previouslyFocused = event.target;
        }
        // Set the focus to the dialog element
        // See: https://github.com/KittyGiraudel/a11y-dialog/pull/583
        if (event?.type === 'focus') {
            this.maintainFocus(event);
        }
        else {
            moveFocusToDialog(this.$el);
        }
        // Bind a focus event listener to the body element to make sure the focus
        // stays trapped inside the dialog while open, and start listening for some
        // specific key presses (TAB and ESC)
        document.body.addEventListener('focus', this.maintainFocus, true);
        this.$el.addEventListener('keydown', this.bindKeypress, true);
        // Dispatch a `show` event
        this.fire('show', event);
        return this;
    }
    /**
     * Hide the dialog element, restore the focus to the previously active
     * element, stop listening for some specific key presses and fire all
     * registered callbacks for `hide` event
     */
    hide(event) {
        // If the dialog is already closed, abort
        if (!this.shown)
            return this;
        this.shown = false;
        this.$el.setAttribute('aria-hidden', 'true');
        this.previouslyFocused?.focus?.();
        // Remove the focus event listener to the body element and stop listening
        // for specific key presses
        document.body.removeEventListener('focus', this.maintainFocus, true);
        this.$el.removeEventListener('keydown', this.bindKeypress, true);
        // Dispatch a `hide` event
        this.fire('hide', event);
        return this;
    }
    /**
     * Register a new callback for the given event type
     */
    on(type, handler, options) {
        this.$el.addEventListener(type, handler, options);
        return this;
    }
    /**
     * Unregister an existing callback for the given event type
     */
    off(type, handler, options) {
        this.$el.removeEventListener(type, handler, options);
        return this;
    }
    /**
     * Dispatch a custom event from the DOM element associated with this dialog.
     * This allows authors to listen for and respond to the events in their own
     * code
     */
    fire(type, event) {
        this.$el.dispatchEvent(new CustomEvent(type, {
            detail: event,
            cancelable: true,
        }));
    }
    /**
     * Add a delegated event listener for when elememts that open or close the
     * dialog are clicked, and call `show` or `hide`, respectively
     */
    handleTriggerClicks(event) {
        const target = event.target;
        // We use `.closest(..)` and not `.matches(..)` here so that clicking
        // an element nested within a dialog opener does cause the dialog to open
        if (target.closest(`[data-a11y-dialog-show="${this.id}"]`)) {
            this.show(event);
        }
        if (target.closest(`[data-a11y-dialog-hide="${this.id}"]`) ||
            (target.closest('[data-a11y-dialog-hide]') &&
                target.closest('[aria-modal="true"]') === this.$el)) {
            this.hide(event);
        }
    }
    /**
     * Private event handler used when listening to some specific key presses
     * (namely ESC and TAB)
     */
    bindKeypress(event) {
        // This is an escape hatch in case there are nested open dialogs, so that
        // only the top most dialog gets interacted with
        if (document.activeElement?.closest('[aria-modal="true"]') !== this.$el) {
            return;
        }
        let hasOpenPopover = false;
        try {
            hasOpenPopover = !!this.$el.querySelector('[popover]:not([popover="manual"]):popover-open');
        }
        catch {
            // Run that DOM query in a try/catch because not all browsers support the
            // `:popover-open` selector, which would cause the whole expression to
            // fail
            // See: https://caniuse.com/mdn-css_selectors_popover-open
            // See: https://github.com/KittyGiraudel/a11y-dialog/pull/578#discussion_r1343215149
        }
        // If the dialog is shown and the ESC key is pressed, prevent any further
        // effects from the ESC key and hide the dialog, unless:
        // - its role is `alertdialog`, which means it should be modal
        // - or it contains an open popover, in which case ESC should close it
        if (event.key === 'Escape' &&
            this.$el.getAttribute('role') !== 'alertdialog' &&
            !hasOpenPopover) {
            event.preventDefault();
            this.hide(event);
        }
        // If the dialog is shown and the TAB key is pressed, make sure the focus
        // stays trapped within the dialog element
        if (event.key === 'Tab') {
            trapTabKey(this.$el, event);
        }
    }
    /**
     * If the dialog is shown and the focus is not within a dialog element (either
     * this one or another one in case of nested dialogs) or attribute, move it
     * back to the dialog container
     * See: https://github.com/KittyGiraudel/a11y-dialog/issues/177
     */
    maintainFocus(event) {
        const target = event.target;
        if (!target.closest('[aria-modal="true"], [data-a11y-dialog-ignore-focus-trap]')) {
            moveFocusToDialog(this.$el);
        }
    }
}

function instantiateDialogs() {
    for (const el of document.querySelectorAll('[data-a11y-dialog]')) {
        new A11yDialog(el);
    }
}
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', instantiateDialogs);
    }
    else {
        instantiateDialogs();
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/colourgrab/static/js/app": 0,
/******/ 			"colourgrab/static/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcolourgrab"] = self["webpackChunkcolourgrab"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["colourgrab/static/css/main"], () => (__webpack_require__("./colourgrab/frontend/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["colourgrab/static/css/main"], () => (__webpack_require__("./colourgrab/frontend/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;