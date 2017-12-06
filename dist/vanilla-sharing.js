(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VanillaSharing"] = factory();
	else
		root["VanillaSharing"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encodeParams;
function encodeParams(obj) {
  return Object.keys(obj).filter(function (k) {
    return typeof obj[k] !== 'undefined';
  }).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WIN_PARAMS = exports.WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';
var VK_MAX_LENGTH = exports.VK_MAX_LENGTH = 80;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mobileShare;

var _isMobileSafari = __webpack_require__(13);

var _isMobileSafari2 = _interopRequireDefault(_isMobileSafari);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mobileShare(link) {
  return (0, _isMobileSafari2.default)() ? window.open(link) : window.location.assign(link);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.line = exports.messenger = exports.linkedin = exports.whatsapp = exports.vk = exports.getVkUrl = exports.viber = exports.tw = exports.telegram = exports.ok = exports.mail = exports.gp = exports.fbButton = exports.fbShare = exports.fbFeed = undefined;

var _fbFeed = __webpack_require__(4);

var _fbFeed2 = _interopRequireDefault(_fbFeed);

var _fbShare = __webpack_require__(5);

var _fbShare2 = _interopRequireDefault(_fbShare);

var _fbButton = __webpack_require__(6);

var _fbButton2 = _interopRequireDefault(_fbButton);

var _gp = __webpack_require__(7);

var _gp2 = _interopRequireDefault(_gp);

var _mail = __webpack_require__(8);

var _mail2 = _interopRequireDefault(_mail);

var _ok = __webpack_require__(9);

var _ok2 = _interopRequireDefault(_ok);

var _telegram = __webpack_require__(10);

var _telegram2 = _interopRequireDefault(_telegram);

var _tw = __webpack_require__(11);

var _tw2 = _interopRequireDefault(_tw);

var _viber = __webpack_require__(12);

var _viber2 = _interopRequireDefault(_viber);

var _vk = __webpack_require__(14);

var _whatsapp = __webpack_require__(15);

var _whatsapp2 = _interopRequireDefault(_whatsapp);

var _linkedin = __webpack_require__(16);

var _linkedin2 = _interopRequireDefault(_linkedin);

var _messenger = __webpack_require__(17);

var _messenger2 = _interopRequireDefault(_messenger);

var _line = __webpack_require__(18);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fbFeed = _fbFeed2.default;
exports.fbShare = _fbShare2.default;
exports.fbButton = _fbButton2.default;
exports.gp = _gp2.default;
exports.mail = _mail2.default;
exports.ok = _ok2.default;
exports.telegram = _telegram2.default;
exports.tw = _tw2.default;
exports.viber = _viber2.default;
exports.getVkUrl = _vk.getUrl;
exports.vk = _vk.share;
exports.whatsapp = _whatsapp2.default;
exports.linkedin = _linkedin2.default;
exports.messenger = _messenger2.default;
exports.line = _line2.default;

// @FIXME

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fbFeed;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fbFeed() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url,
      redirectUri = options.redirectUri;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = (0, _encodeParams2.default)({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    link: url
  });

  return window.open('https://www.facebook.com/dialog/feed?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fbShare;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fbShare() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url,
      hashtag = options.hashtag,
      quote = options.quote,
      redirectUri = options.redirectUri;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = (0, _encodeParams2.default)({
    app_id: fbAppId,
    display: 'popup',
    redirect_uri: redirectUri,
    href: url,
    hashtag: hashtag,
    quote: quote
  });

  return window.open('https://www.facebook.com/dialog/share?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fbButton;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fbButton() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;


  if (!url) {
    throw new Error('url is not defined');
  }

  var params = (0, _encodeParams2.default)({
    kid_directed_site: 0,
    sdk: 'joey',
    u: url,
    display: 'popup',
    ref: 'plugin',
    src: 'share_button'
  });

  return window.open('https://www.facebook.com/sharer/sharer.php?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gp;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url;


  var params = (0, _encodeParams2.default)({ url: url });

  return window.open('https://plus.google.com/share?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mail;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mail() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title,
      description = options.description,
      image = options.image;


  var params = (0, _encodeParams2.default)({
    share_url: url,
    title: title,
    description: description,
    imageurl: image
  });

  return window.open('http://connect.mail.ru/share?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ok;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ok() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    'st.cmd': 'addShare',
    'st._surl': url,
    title: title
  });

  return window.open('https://ok.ru/dk?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = telegram;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function telegram() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    url: url,
    text: title
  });

  return window.open('https://t.me/share/url?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tw;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tw() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;


  var params = (0, _encodeParams2.default)({
    text: title,
    url: url
  });

  return window.open('https://twitter.com/intent/tweet?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = viber;

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

var _mobileShare = __webpack_require__(2);

var _mobileShare2 = _interopRequireDefault(_mobileShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function viber() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;

  if (!url && !title) {
    throw new Error('url and title not specified');
  }

  var params = (0, _encodeParams2.default)({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' ')
  });

  return (0, _mobileShare2.default)('viber://forward?' + params);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobileSafari;
function isMobileSafari() {
  return !!window.navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrl = getUrl;
exports.share = share;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUrl() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      image = options.image,
      isVkParse = options.isVkParse;
  var description = options.description,
      title = options.title;


  if (description && description.length > _config.VK_MAX_LENGTH) {
    description = description.substr(0, _config.VK_MAX_LENGTH) + '...';
  }

  if (title && title.length > _config.VK_MAX_LENGTH) {
    title = title.substr(0, _config.VK_MAX_LENGTH) + '...';
  }

  var params = void 0;
  if (isVkParse) {
    params = (0, _encodeParams2.default)({ url: url });
  } else {
    params = (0, _encodeParams2.default)({
      url: url, title: title, description: description, image: image, noparse: true
    });
  }

  return 'https://vk.com/share.php?' + params;
}

function share() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return window.open(getUrl(options), '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whatsapp;

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

var _mobileShare = __webpack_require__(2);

var _mobileShare2 = _interopRequireDefault(_mobileShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whatsapp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      title = options.title;


  var params = (0, _encodeParams2.default)({
    text: [title, url].filter(function (item) {
      return item;
    }).join(' ')
  });

  return (0, _mobileShare2.default)('whatsapp://send?' + params);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = linkedin;

var _config = __webpack_require__(1);

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkedin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url,
      description = options.description;


  var params = (0, _encodeParams2.default)({
    title: title,
    summary: description,
    url: url
  });

  return window.open('https://www.linkedin.com/shareArticle?mini=true&' + params, '_blank', _config.WIN_PARAMS);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = messenger;

var _encodeParams = __webpack_require__(0);

var _encodeParams2 = _interopRequireDefault(_encodeParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function messenger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var fbAppId = options.fbAppId,
      url = options.url;


  if (!fbAppId) {
    throw new Error('fbAppId is not defined');
  }

  var params = (0, _encodeParams2.default)({
    app_id: fbAppId,
    link: url
  });

  return window.location.assign('fb-messenger://share?' + params);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = line;

var _config = __webpack_require__(1);

function line() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var title = options.title,
      url = options.url;


  if (!url) {
    throw new Error('url is not defined');
  }

  var params = encodeURIComponent('' + url);

  if (title) {
    params = '' + encodeURIComponent(title + ' ') + params;
  }

  return window.open('https://line.me/R/msg/text/?' + params, '_blank', _config.WIN_PARAMS);
}

/***/ })
/******/ ]);
});