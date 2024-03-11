/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/createCard.js":
/*!*******************************!*\
  !*** ./scripts/createCard.js ***!
  \*******************************/
/***/ ((module) => {

eval("const cardContainer = document.getElementById(\"div-card\");\r\n\r\nfunction createCard(movie, index) {\r\n  const card = document.createElement(\"div\");\r\n  card.classList.add(\"card\");\r\n  card.id = \"card\" + index;\r\n\r\n  const cardFragment = document.createDocumentFragment();\r\n\r\n  const elements = [\"title\", \"year\", \"director\", \"genre\"];\r\n  elements.forEach((element) => {\r\n    const elementNode = document.createElement(\r\n      element === \"title\" ? \"h3\" : \"p\"\r\n    );\r\n    elementNode.innerHTML = movie[element];\r\n    cardFragment.appendChild(elementNode);\r\n  });\r\n\r\n  const flyer = document.createElement(\"img\");\r\n  flyer.classList.add(\"card-img-top\");\r\n  flyer.src = movie.poster;\r\n  cardFragment.appendChild(flyer);\r\n\r\n  card.appendChild(cardFragment);\r\n  return card;\r\n}\r\ncardContainer.classList.add(\"contenido\");\r\n\r\nmodule.exports = { createCard };\r\n\n\n//# sourceURL=webpack://front/./scripts/createCard.js?");

/***/ }),

/***/ "./scripts/dataCard.js":
/*!*****************************!*\
  !*** ./scripts/dataCard.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createCard } = __webpack_require__(/*! ./createCard */ \"./scripts/createCard.js\");\r\n\r\nfunction loadCards() {\r\n  const cardContainer = document.getElementById(\"div-card\");\r\n  cardContainer.classList.add(\"contenido\");\r\n\r\n  $.get(\"https://students-api.2.us-1.fl0.io/movies\", (films) => {\r\n    films.forEach((movie, index) => {\r\n      const card = createCard(movie, index);\r\n      cardContainer.appendChild(card);\r\n      console.log(\"todas las tarjetas, soy una gueva \");\r\n    });\r\n  });\r\n}\r\n\r\nmodule.exports = { loadCards };\r\n\n\n//# sourceURL=webpack://front/./scripts/dataCard.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// main.js\r\nconst { loadCards } = __webpack_require__(/*! ./dataCard */ \"./scripts/dataCard.js\");\r\n\r\nconst cardContainer = document.getElementById(\"div-card\");\r\nloadCards(cardContainer);\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;