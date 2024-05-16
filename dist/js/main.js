/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll.js */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servicesModal.js */ \"./modules/servicesModal.js\");\n/* harmony import */ var _modules_modalRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalRequest.js */ \"./modules/modalRequest.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modalRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"21 may 2024\");\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modalRequest.js":
/*!*********************************!*\
  !*** ./modules/modalRequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalRequest = () => {\r\n  const requestBtn = document.querySelector(\"#header .button\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n  const requestModal = document.querySelector(\".header-modal\");\r\n  const closeBtn = requestModal.querySelector(\".header-modal__close\");\r\n\r\n  requestBtn.addEventListener(\"click\", () => {\r\n    requestModal.style.display = \"flex\";\r\n    document.body.style.overflow = \"hidden\";\r\n    overlay.style.display = \"flex\";\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    requestModal.style.display = \"none\";\r\n    overlay.style.display = \"none\";\r\n    document.body.style.overflow = \"\"; //возвращает прокрутку\r\n  });\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".header-modal\")) {\r\n      requestModal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalRequest);\r\n\n\n//# sourceURL=webpack:///./modules/modalRequest.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const scrollBtns = document.querySelectorAll(\".smooth-scroll\");\r\n  const bodies = document.querySelectorAll(\"body\");\r\n  scrollBtns.forEach((btn) => {\r\n    window.addEventListener(\"scroll\", () => {\r\n      if (window.scrollY > 540) {\r\n        btn.style.display = \"block\";\r\n      } else {\r\n        btn.style.display = \"none\";\r\n      }\r\n    });\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      bodies.forEach((body) => {\r\n        body.scrollIntoView({\r\n          behavior: \"smooth\",\r\n        });\r\n      });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/servicesModal.js":
/*!**********************************!*\
  !*** ./modules/servicesModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesModal = () => {\r\n  const servicesRequestBtns = document.querySelectorAll(\".service-button\");\r\n  const servicesModal = document.querySelector(\".services-modal\");\r\n  const servicesModalCloseBtn = servicesModal.querySelector(\r\n    \".services-modal__close\"\r\n  );\r\n  const overlay = document.querySelector(\".overlay\");\r\n\r\n  servicesRequestBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      servicesModal.style.display = \"flex\";\r\n      overlay.style.display = \"flex\";\r\n      document.body.style.overflow = \"hidden\";\r\n    });\r\n  });\r\n  servicesModalCloseBtn.addEventListener(\"click\", () => {\r\n    servicesModal.style.display = \"none\";\r\n    overlay.style.display = \"none\";\r\n    document.body.style.overflow = \"\"; //возвращает прокрутку\r\n  });\r\n\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".services-modal\")) {\r\n      servicesModal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\r\n\n\n//# sourceURL=webpack:///./modules/servicesModal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const orderBlocks = document.querySelectorAll(\".order\");\r\n  const padZero = (elem) => {\r\n    if (elem < 10) {\r\n      return (elem = `0${elem}`);\r\n    } else {\r\n      return elem;\r\n    }\r\n  };\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 3600 / 24);\r\n    let hours = Math.floor((timeRemaining / 3600) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    seconds = padZero(seconds);\r\n    minutes = padZero(minutes);\r\n    hours = padZero(hours);\r\n    days = padZero(days);\r\n    console.log(days);\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  orderBlocks.forEach((block) => {\r\n    const timerDays = block.querySelector(\".count.count_1 > span\");\r\n    const timerHours = block.querySelector(\".count.count_2 > span\");\r\n    const timerMinutes = block.querySelector(\".count.count_3 > span\");\r\n    const timerSeconds = block.querySelector(\".count.count_4 > span\");\r\n    let intervalId;\r\n    const updateClock = () => {\r\n      let getTime = getTimeRemaining();\r\n\r\n      timerDays.textContent = getTime.days;\r\n      timerHours.textContent = getTime.hours;\r\n      timerMinutes.textContent = getTime.minutes;\r\n      timerSeconds.textContent = getTime.seconds;\r\n\r\n      if (getTime.timeRemaining <= 0) {\r\n        timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n        clearInterval(intervalId);\r\n      }\r\n    };\r\n\r\n    intervalId = setInterval(updateClock, 500);\r\n    updateClock();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;