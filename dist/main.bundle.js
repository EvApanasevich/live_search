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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _insert_mark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-mark */ \"./src/insert-mark.js\");\n\r\n\r\n// get input element\r\nlet inputSearch = document.getElementById('input-search-id');\r\n// add listener\r\ninputSearch.addEventListener(\"input\", textSearch)\r\n\r\n// the function that is passed to the listener\r\nfunction textSearch() {\r\n   // get input value\r\n   // \"this\" is an input because it is called on behalf of the input when will the listener work\r\n   let val = this.value.trim().toLowerCase();\r\n   // get all items \"p\" in which we will search\r\n   let items = document.querySelectorAll('.content p');\r\n\r\n   if (val != '') {\r\n      // \r\n      items.forEach((el) => {\r\n         let regExp = new RegExp(val, 'g');\r\n         let arrSearchResult = Array.from(el.innerText.toLowerCase().matchAll(regExp));\r\n\r\n         if (!arrSearchResult.length) {\r\n            el.classList.add('hide');\r\n            el.innerHTML = el.innerText;\r\n         } else {\r\n            el.classList.remove('hide');\r\n            el.innerHTML = (0,_insert_mark__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrSearchResult, val.length);\r\n         };\r\n      });\r\n   } else {\r\n      items.forEach((el) => {\r\n         el.classList.remove('hide');\r\n         el.innerHTML = el.innerText;\r\n      });\r\n   };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://live_search_js/./src/index.js?");

/***/ }),

/***/ "./src/insert-mark.js":
/*!****************************!*\
  !*** ./src/insert-mark.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ insertMark)\n/* harmony export */ });\nfunction insertMark(arrSearchResult) {\r\n   \r\n   const stringWithMarkers = arrSearchResult.reduce((resultStr, e) => {\r\n\r\n      const markerTag = '<mark></mark>';\r\n      const startOfString = e.input.slice(0, e.index);\r\n      const endOfString = e.input.slice(e.index + e[0].length);\r\n      const partBetweenMarkedSearchParts = e.input.slice(resultStr.length - markerTag.length * arrSearchResult.indexOf(e), e.index);\r\n      const markedSearchPart = '<mark>' + e.input.slice(e.index, e.index + e[0].length) + '</mark>';\r\n\r\n      if (!resultStr.length) {\r\n         if (arrSearchResult.length === 1) {\r\n            return startOfString + markedSearchPart + endOfString;\r\n         } else {\r\n            return startOfString + markedSearchPart;\r\n         };\r\n      } else {\r\n         if (arrSearchResult.length - 1 === arrSearchResult.indexOf(e)) {\r\n            return resultStr + partBetweenMarkedSearchParts + markedSearchPart + endOfString;\r\n         } else {\r\n            return resultStr + partBetweenMarkedSearchParts + markedSearchPart;\r\n         };\r\n      };\r\n   }, '');\r\n   return stringWithMarkers;\r\n};\n\n//# sourceURL=webpack://live_search_js/./src/insert-mark.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;