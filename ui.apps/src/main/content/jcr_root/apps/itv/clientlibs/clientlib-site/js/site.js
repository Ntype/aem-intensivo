/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/webpack/site/main.scss":
/*!*****************************************!*\
  !*** ./src/main/webpack/site/main.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/site/main.scss?");

/***/ }),

/***/ "./src/main/webpack/site/main.ts":
/*!***************************************!*\
  !*** ./src/main/webpack/site/main.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main/webpack/site/main.scss\");\n/* harmony import */ var C_Users_EmmaMart_nPrieto_Documents_AEM_Dev_aem_intensivo_ui_frontend_src_main_webpack_site_main_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/main/webpack/site/main.ts */ \"./src/main/webpack/site/main.ts\");\n/* harmony import */ var C_Users_EmmaMart_nPrieto_Documents_AEM_Dev_aem_intensivo_ui_frontend_src_main_webpack_components_helloworld_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/main/webpack/components/_helloworld.js */ \"./src/main/webpack/components/_helloworld.js\");\n/* harmony import */ var C_Users_EmmaMart_nPrieto_Documents_AEM_Dev_aem_intensivo_ui_frontend_src_main_webpack_components_helloworld_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_EmmaMart_nPrieto_Documents_AEM_Dev_aem_intensivo_ui_frontend_src_main_webpack_components_helloworld_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n;\r\n\r\n\r\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/site/main.ts?");

/***/ }),

/***/ "./src/main/webpack/components/_helloworld.js":
/*!****************************************************!*\
  !*** ./src/main/webpack/components/_helloworld.js ***!
  \****************************************************/
/***/ (function() {

eval("// Example of how a component should be initialized via JavaScript\n// This script logs the value of the component's text property model message to the console\n\n(function() {\n    \"use strict\";\n\n    // Best practice:\n    // For a good separation of concerns, don't rely on the DOM structure or CSS selectors,\n    // but use dedicated data attributes to identify all elements that the script needs to\n    // interact with.\n    var selectors = {\n        self:      '[data-cmp-is=\"helloworld\"]',\n        property:  '[data-cmp-hook-helloworld=\"property\"]',\n        message:   '[data-cmp-hook-helloworld=\"model\"]'\n    };\n\n    function HelloWorld(config) {\n\n        function init(config) {\n            // Best practice:\n            // To prevents multiple initialization, remove the main data attribute that\n            // identified the component.\n            config.element.removeAttribute(\"data-cmp-is\");\n\n            var property = config.element.querySelectorAll(selectors.property);\n            property = property.length == 1 ? property[0].textContent : null;\n\n            var model = config.element.querySelectorAll(selectors.message);\n            model = model.length == 1 ? model[0].textContent : null;\n\n            if (console && console.log) {\n                console.log(\n                    \"HelloWorld component JavaScript example\",\n                    \"\\nText property:\\n\", property,\n                    \"\\nModel message:\\n\", model\n                );\n            }\n        }\n\n        if (config && config.element) {\n            init(config);\n        }\n    }\n\n    // Best practice:\n    // Use a method like this mutation obeserver to also properly initialize the component\n    // when an author drops it onto the page or modified it with the dialog.\n    function onDocumentReady() {\n        var elements = document.querySelectorAll(selectors.self);\n        for (var i = 0; i < elements.length; i++) {\n            new HelloWorld({ element: elements[i] });\n        }\n\n        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;\n        var body             = document.querySelector(\"body\");\n        var observer         = new MutationObserver(function(mutations) {\n            mutations.forEach(function(mutation) {\n                // needed for IE\n                var nodesArray = [].slice.call(mutation.addedNodes);\n                if (nodesArray.length > 0) {\n                    nodesArray.forEach(function(addedNode) {\n                        if (addedNode.querySelectorAll) {\n                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));\n                            elementsArray.forEach(function(element) {\n                                new HelloWorld({ element: element });\n                            });\n                        }\n                    });\n                }\n            });\n        });\n\n        observer.observe(body, {\n            subtree: true,\n            childList: true,\n            characterData: true\n        });\n    }\n\n    if (document.readyState !== \"loading\") {\n        onDocumentReady();\n    } else {\n        document.addEventListener(\"DOMContentLoaded\", onDocumentReady);\n    }\n\n}());\n\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/_helloworld.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/webpack/site/main.ts");
/******/ 	
/******/ })()
;