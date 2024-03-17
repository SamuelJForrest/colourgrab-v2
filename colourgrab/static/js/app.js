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
__webpack_require__(/*! ./modules/imageUpload */ "./colourgrab/frontend/js/modules/imageUpload.js");
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

/***/ "./colourgrab/frontend/js/modules/imageUpload.js":
/*!*******************************************************!*\
  !*** ./colourgrab/frontend/js/modules/imageUpload.js ***!
  \*******************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var uploadForm = document.querySelector('#upload-form');
var uploadArea = document.querySelector('.upload-area');
var uploadText = document.querySelector('.upload-area-text');
var uploadIcon = document.querySelector('.upload-icon');
if (uploadForm) {
  var compressImage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, _ref) {
      var _ref$quality, quality, _ref$type, type, imageBitmap, canvas, ctx, blob;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref$quality = _ref.quality, quality = _ref$quality === void 0 ? 1 : _ref$quality, _ref$type = _ref.type, type = _ref$type === void 0 ? file.type : _ref$type;
            _context.next = 3;
            return createImageBitmap(file);
          case 3:
            imageBitmap = _context.sent;
            canvas = document.createElement('canvas');
            canvas.width = imageBitmap.width;
            canvas.height = imageBitmap.height;
            ctx = canvas.getContext('2d');
            ctx.drawImage(imageBitmap, 0, 0);

            // turn image data into blob
            _context.next = 11;
            return new Promise(function (res) {
              canvas.toBlob(res, type, quality);
            });
          case 11:
            blob = _context.sent;
            return _context.abrupt("return", new File([blob], file.name, {
              type: blob.type
            }));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function compressImage(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  uploadForm.addEventListener('change', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var files, targetFile, uploadConditions, dataTransfer, compressedImage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            files = e.target.files; // return if no file selected, or the file type isn't an image
            if (files.length) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            targetFile = files[0];
            uploadConditions = targetFile.type.startsWith('image') && targetFile.size <= 5 * 1024 * 1024;
            dataTransfer = new DataTransfer();
            uploadText.innerText = 'Generating Palette...';
            uploadIcon.remove();
            uploadArea.insertAdjacentHTML('afterbegin', '<div class="loader"></div>');
            if (!uploadConditions) {
              _context2.next = 15;
              break;
            }
            _context2.next = 12;
            return compressImage(targetFile, {
              quality: 0.75
            });
          case 12:
            compressedImage = _context2.sent;
            dataTransfer.items.add(compressedImage);
            e.target.files = dataTransfer.files;
          case 15:
            uploadForm.submit();
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
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