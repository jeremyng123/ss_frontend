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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get(\"/\", (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|   box-sizing: border-box;\\n|   margin: 0;\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_page_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page/Login/Login */ \"./src/components/page/Login/Login.js\");\n/* harmony import */ var _components_page_Register_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page/Register/Register */ \"./src/components/page/Register/Register.js\");\n/* harmony import */ var _components_page_HomePage_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/HomePage/Home */ \"./src/components/page/HomePage/Home.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _helpers_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/history */ \"./src/helpers/history.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/auth */ \"./src/actions/auth.js\");\n/* harmony import */ var _actions_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/message */ \"./src/actions/message.js\");\n/* harmony import */ var _components_page_Profile_Profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/Profile/Profile */ \"./src/components/page/Profile/Profile.js\");\n/* harmony import */ var _components_BoardUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/BoardUser */ \"./src/components/BoardUser.js\");\n/* harmony import */ var _components_BoardModerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/BoardModerator */ \"./src/components/BoardModerator.js\");\n/* harmony import */ var _components_BoardAdmin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/BoardAdmin */ \"./src/components/BoardAdmin.js\");\n\n\n\n\n // import Home from \"./components/Home\";\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  const [showModeratorBoard, setShowModeratorBoard] = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false);\n  const [showAdminBoard, setShowAdminBoard] = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false);\n  const {\n    user: currentUser\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(state => state.auth);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(() => {\n    _helpers_history__WEBPACK_IMPORTED_MODULE_8__[\"history\"].listen(location => {\n      dispatch(Object(_actions_message__WEBPACK_IMPORTED_MODULE_10__[\"clearMessage\"])()); // clear message when changing location\n    });\n  }, [dispatch]);\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(() => {\n    if (currentUser) {\n      setShowModeratorBoard(currentUser.roles.includes(\"ROLE_MODERATOR\"));\n      setShowAdminBoard(currentUser.roles.includes(\"ROLE_ADMIN\"));\n    }\n\n    console.log(currentUser);\n  }, [currentUser]);\n\n  const logOut = () => {\n    dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_9__[\"logout\"])());\n  };\n\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], {\n    history: _helpers_history__WEBPACK_IMPORTED_MODULE_8__[\"history\"]\n  }, /*#__PURE__*/React.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentUser: currentUser,\n    logout: logOut\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: [\"/\", \"/home\"],\n    component: _components_page_HomePage_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/login\",\n    component: _components_page_Login_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/register\",\n    component: _components_page_Register_Register__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/profile\",\n    component: _components_page_Profile_Profile__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/user\",\n    component: _components_BoardUser__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/mod\",\n    component: _components_BoardModerator__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/admin\",\n    component: _components_BoardAdmin__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App); // https://bezkoder.com/react-hooks-redux-login-registration-example/\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/*! exports provided: register, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n\n\nconst register = (username, email, password) => dispatch => {\n  return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(username, email, password).then(response => {\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"REGISTER_SUCCESS\"]\n    });\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_MESSAGE\"],\n      payload: response.data.message\n    });\n    return Promise.resolve();\n  }, error => {\n    const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"REGISTER_FAIL\"]\n    });\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_MESSAGE\"],\n      payload: message\n    });\n    return Promise.reject();\n  });\n};\nconst login = (username, password) => dispatch => {\n  return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login(username, password).then(data => {\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_SUCCESS\"],\n      payload: {\n        user: data\n      }\n    });\n    return Promise.resolve();\n  }, error => {\n    const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_FAIL\"]\n    });\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_MESSAGE\"],\n      payload: message\n    });\n    return Promise.reject();\n  });\n};\nconst logout = () => dispatch => {\n  _services_auth_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout();\n  dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"LOGOUT\"]\n  });\n};\n\n//# sourceURL=webpack:///./src/actions/auth.js?");

/***/ }),

/***/ "./src/actions/message.js":
/*!********************************!*\
  !*** ./src/actions/message.js ***!
  \********************************/
/*! exports provided: setMessage, clearMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMessage\", function() { return setMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearMessage\", function() { return clearMessage; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n\nconst setMessage = message => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_MESSAGE\"],\n  payload: message\n});\nconst clearMessage = () => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"CLEAR_MESSAGE\"]\n});\n\n//# sourceURL=webpack:///./src/actions/message.js?");

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE, CLEAR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGISTER_SUCCESS\", function() { return REGISTER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGISTER_FAIL\", function() { return REGISTER_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_SUCCESS\", function() { return LOGIN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_FAIL\", function() { return LOGIN_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT\", function() { return LOGOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_MESSAGE\", function() { return SET_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_MESSAGE\", function() { return CLEAR_MESSAGE; });\nconst REGISTER_SUCCESS = \"REGISTER_SUCCESS\";\nconst REGISTER_FAIL = \"REGISTER_FAIL\";\nconst LOGIN_SUCCESS = \"LOGIN_SUCCESS\";\nconst LOGIN_FAIL = \"LOGIN_FAIL\";\nconst LOGOUT = \"LOGOUT\";\nconst SET_MESSAGE = \"SET_MESSAGE\";\nconst CLEAR_MESSAGE = \"CLEAR_MESSAGE\";\n\n//# sourceURL=webpack:///./src/actions/types.js?");

/***/ }),

/***/ "./src/components/BoardAdmin.js":
/*!**************************************!*\
  !*** ./src/components/BoardAdmin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ \"./src/services/user.service.js\");\n\n\n\nconst BoardAdmin = () => {\n  const [content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _services_user_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAdminBoard().then(response => {\n      setContent(response.data);\n    }, error => {\n      const _content = error.response && error.response.data && error.response.data.message || error.message || error.toString();\n\n      setContent(_content);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"jumbotron\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, content)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardAdmin);\n\n//# sourceURL=webpack:///./src/components/BoardAdmin.js?");

/***/ }),

/***/ "./src/components/BoardModerator.js":
/*!******************************************!*\
  !*** ./src/components/BoardModerator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ \"./src/services/user.service.js\");\n\n\n\nconst BoardModerator = () => {\n  const [content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _services_user_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getModeratorBoard().then(response => {\n      setContent(response.data);\n    }, error => {\n      const _content = error.response && error.response.data && error.response.data.message || error.message || error.toString();\n\n      setContent(_content);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"jumbotron\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, content)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardModerator);\n\n//# sourceURL=webpack:///./src/components/BoardModerator.js?");

/***/ }),

/***/ "./src/components/BoardUser.js":
/*!*************************************!*\
  !*** ./src/components/BoardUser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ \"./src/services/user.service.js\");\n\n\n\nconst BoardUser = () => {\n  const [content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _services_user_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUserBoard().then(response => {\n      setContent(response.data);\n    }, error => {\n      const _content = error.response && error.response.data && error.response.data.message || error.message || error.toString();\n\n      setContent(_content);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"jumbotron\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, content)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardUser);\n\n//# sourceURL=webpack:///./src/components/BoardUser.js?");

/***/ }),

/***/ "./src/components/Button.css":
/*!***********************************!*\
  !*** ./src/components/Button.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> :root {\\n|   --primary: #fff;\\n| }\");\n\n//# sourceURL=webpack:///./src/components/Button.css?");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ \"./src/components/Button.css\");\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst STYLES = ['btn--primary', 'btn--outline'];\nconst SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];\nconst COLORS = ['primary', 'blue', 'red', 'green'];\nconst Button = ({\n  children,\n  type,\n  onClick,\n  buttonStyle,\n  buttonSize,\n  buttonColor\n}) => {\n  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];\n  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];\n  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: `btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`,\n    onClick: onClick,\n    type: type\n  }, children);\n};\n\n//# sourceURL=webpack:///./src/components/Button.js?");

/***/ }),

/***/ "./src/components/HeroSection.css":
/*!****************************************!*\
  !*** ./src/components/HeroSection.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .home__hero-section {\\n|   color: #fff;\\n|   background: #fff;\");\n\n//# sourceURL=webpack:///./src/components/HeroSection.css?");

/***/ }),

/***/ "./src/components/HeroSection.js":
/*!***************************************!*\
  !*** ./src/components/HeroSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HeroSection_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroSection.css */ \"./src/components/HeroSection.css\");\n/* harmony import */ var _HeroSection_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HeroSection_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction HeroSection({\n  lightBg,\n  topLine,\n  lightText,\n  lightTextDesc,\n  headline,\n  description,\n  buttonLabel,\n  img,\n  alt,\n  imgStart\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: lightBg ? \"home__hero-section\" : \"home__hero-section darkBg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row home__hero-row\",\n    style: {\n      display: \"flex\",\n      flexDirection: imgStart === \"start\" ? \"row-reverse\" : \"row\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"home__hero-text-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"top-line\"\n  }, topLine), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: lightText ? \"heading\" : \"heading dark\"\n  }, headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: lightTextDesc ? \"home__hero-subtitle\" : \"home__hero-subtitle dark\"\n  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/register\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    buttonSize: \"btn--wide\",\n    buttonColor: \"blue\"\n  }, buttonLabel)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"home__hero-img-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: img,\n    alt: alt,\n    className: \"home__hero-img\"\n  })))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\n\n//# sourceURL=webpack:///./src/components/HeroSection.js?");

/***/ }),

/***/ "./src/components/Navbar.css":
/*!***********************************!*\
  !*** ./src/components/Navbar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n> .navbar {\\n|   background: #1c2237;\\n|   height: 80px;\");\n\n//# sourceURL=webpack:///./src/components/Navbar.css?");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.css */ \"./src/components/Navbar.css\");\n/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/lib */ \"react-icons/lib\");\n/* harmony import */ var react_icons_lib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/**\n * Creates a navbar in every page\n * @return {render}\n */\n\nfunction Navbar(props) {\n  console.log(props);\n  const [click, setClick] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [button, setButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n\n  const handleClick = () => setClick(!click);\n\n  const closeMobileMenu = () => setClick(false);\n\n  const showButton = () => {\n    if (window.innerWidth <= 960) {\n      setButton(false);\n    } else {\n      setButton(true);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    showButton();\n    return () => {// do cleanup\n    };\n  }, []);\n  window.addEventListener(\"resize\", showButton);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib__WEBPACK_IMPORTED_MODULE_6__[\"IconContext\"].Provider, {\n    value: {\n      color: \"#fff\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navbar-container container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"navbar-logo\",\n    onClick: closeMobileMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdFingerprint\"], {\n    className: \"navbar-icon\"\n  }), \"SS-1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"menu-icon\",\n    onClick: handleClick\n  }, click ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaTimes\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaBars\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: click ? \"nav-menu active\" : \"nav-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"nav-links\",\n    onClick: closeMobileMenu\n  }, \"Home\")), props.currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/profile\",\n    className: \"nav-links\",\n    onClick: closeMobileMenu\n  }, \"Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-btn\"\n  }, button ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"btn-link\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    buttonStyle: \"btn--outline\",\n    onClick: () => {\n      props.logout();\n      closeMobileMenu();\n    }\n  }, \"Logout\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"btn-link\",\n    onClick: () => {\n      closeMobileMenu();\n      props.logout();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    buttonStyle: \"btn--outline\",\n    buttonSize: \"btn--mobile\"\n  }, \"Logout\")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\",\n    className: \"nav-links\",\n    onClick: closeMobileMenu\n  }, \"Log in\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-btn\"\n  }, button ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/register\",\n    className: \"btn-link\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    buttonStyle: \"btn--outline\"\n  }, \"Register\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/register\",\n    className: \"btn-link\",\n    onClick: closeMobileMenu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    buttonStyle: \"btn--outline\",\n    buttonSize: \"btn--mobile\"\n  }, \"Register\")))))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/components/Navbar.js?");

/***/ }),

/***/ "./src/components/page/HomePage/Data.js":
/*!**********************************************!*\
  !*** ./src/components/page/HomePage/Data.js ***!
  \**********************************************/
/*! exports provided: homeObjOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeObjOne\", function() { return homeObjOne; });\nconst homeObjOne = {\n  lightBg: true,\n  lightText: false,\n  lightTextDesc: false,\n  topLine: 'Exclusive Access',\n  headline: 'Unlimited Transactions with zero fees',\n  description: 'Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees',\n  buttonLabel: 'Get Started',\n  imgStart: '',\n  img: 'images/svg-1.svg',\n  alt: 'Credit Card'\n};\n\n//# sourceURL=webpack:///./src/components/page/HomePage/Data.js?");

/***/ }),

/***/ "./src/components/page/HomePage/Home.js":
/*!**********************************************!*\
  !*** ./src/components/page/HomePage/Home.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HeroSection */ \"./src/components/HeroSection.js\");\n/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ \"./src/components/page/HomePage/Data.js\");\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeroSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _Data__WEBPACK_IMPORTED_MODULE_2__[\"homeObjOne\"]));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/page/HomePage/Home.js?");

/***/ }),

/***/ "./src/components/page/Login/Login.js":
/*!********************************************!*\
  !*** ./src/components/page/Login/Login.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-validation/build/form */ \"react-validation/build/form\");\n/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-validation/build/input */ \"react-validation/build/input\");\n/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_input__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-validation/build/button */ \"react-validation/build/button\");\n/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/auth */ \"./src/actions/auth.js\");\n\n\n\n\n\n\n\n\nconst required = value => {\n  if (!value) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"alert alert-danger\",\n      role: \"alert\"\n    }, \"This field is required!\");\n  }\n};\n\nconst Login = props => {\n  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const checkBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    isLoggedIn\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.auth);\n  const {\n    message\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.message);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  const onChangeUsername = e => {\n    const username = e.target.value;\n    setUsername(username);\n  };\n\n  const onChangePassword = e => {\n    const password = e.target.value;\n    setPassword(password);\n  };\n\n  const handleLogin = e => {\n    e.preventDefault();\n    setLoading(true);\n    form.current.validateAll();\n\n    if (checkBtn.current.context._errors.length === 0) {\n      dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__[\"login\"])(username, password)).then(() => {\n        props.history.push(\"/profile\");\n        window.location.reload();\n      }).catch(() => {\n        setLoading(false);\n      });\n    } else {\n      setLoading(false);\n    }\n  };\n\n  if (isLoggedIn) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n      to: \"/profile\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"auth-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"auth-inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_form__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onSubmit: handleLogin,\n    ref: form\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_input__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    type: \"text\",\n    className: \"form-control\",\n    name: \"username\",\n    value: username,\n    onChange: onChangeUsername,\n    validations: [required]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_input__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    type: \"password\",\n    className: \"form-control\",\n    name: \"password\",\n    value: password,\n    onChange: onChangePassword,\n    validations: [required]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-primary btn-block\",\n    disabled: loading\n  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"spinner-border spinner-border-sm\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"register text-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/register\"\n  }, \"Create account\"))), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"alert alert-danger\",\n    role: \"alert\"\n  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    style: {\n      display: \"none\"\n    },\n    ref: checkBtn\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/components/page/Login/Login.js?");

/***/ }),

/***/ "./src/components/page/Profile/Profile.js":
/*!************************************************!*\
  !*** ./src/components/page/Profile/Profile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Profile = () => {\n  const {\n    user: currentUser\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.auth);\n\n  if (!currentUser) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n      to: \"/login\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"jumbotron\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, currentUser.username), \" Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Token:\"), \" \", currentUser.accessToken.substring(0, 20), \" ...\", \" \", currentUser.accessToken.substr(currentUser.accessToken.length - 20)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Id:\"), \" \", currentUser.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Email:\"), \" \", currentUser.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Authorities:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, currentUser.roles && currentUser.roles.map((role, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: index\n  }, role))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./src/components/page/Profile/Profile.js?");

/***/ }),

/***/ "./src/components/page/Register/Register.js":
/*!**************************************************!*\
  !*** ./src/components/page/Register/Register.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-validation/build/form */ \"react-validation/build/form\");\n/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_form__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-validation/build/input */ \"react-validation/build/input\");\n/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-validation/build/button */ \"react-validation/build/button\");\n/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/auth */ \"./src/actions/auth.js\");\n\n\n\n\n\n\n\n\nconst required = value => {\n  if (!value) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"alert alert-danger\",\n      role: \"alert\"\n    }, \"This field is required!\");\n  }\n};\n\nconst validEmail = value => {\n  if (!Object(validator__WEBPACK_IMPORTED_MODULE_5__[\"isEmail\"])(value)) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"alert alert-danger\",\n      role: \"alert\"\n    }, \"This is not a valid email.\");\n  }\n};\n\nconst vusername = value => {\n  if (value.length < 3 || value.length > 20) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"alert alert-danger\",\n      role: \"alert\"\n    }, \"The username must be between 3 and 20 characters.\");\n  }\n};\n\nconst vpassword = value => {\n  if (value.length < 6 || value.length > 40) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"alert alert-danger\",\n      role: \"alert\"\n    }, \"The password must be between 6 and 40 characters.\");\n  }\n};\n\nconst Register = () => {\n  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const checkBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [successful, setSuccessful] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    message\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state.message);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  const onChangeUsername = e => {\n    const username = e.target.value;\n    setUsername(username);\n  };\n\n  const onChangeEmail = e => {\n    const email = e.target.value;\n    setEmail(email);\n  };\n\n  const onChangePassword = e => {\n    const password = e.target.value;\n    setPassword(password);\n  };\n\n  const handleRegister = e => {\n    e.preventDefault();\n    setSuccessful(false);\n    form.current.validateAll();\n\n    if (checkBtn.current.context._errors.length === 0) {\n      dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__[\"register\"])(username, email, password)).then(() => {\n        setSuccessful(true);\n      }).catch(() => {\n        setSuccessful(false);\n      });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"auth-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"auth-inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_form__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    onSubmit: handleRegister,\n    ref: form\n  }, !successful && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"text\",\n    className: \"form-control\",\n    name: \"username\",\n    value: username,\n    onChange: onChangeUsername,\n    validations: [required, vusername]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"text\",\n    className: \"form-control\",\n    name: \"email\",\n    value: email,\n    onChange: onChangeEmail,\n    validations: [required, validEmail]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"password\",\n    className: \"form-control\",\n    name: \"password\",\n    value: password,\n    onChange: onChangePassword,\n    validations: [required, vpassword]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"btn btn-primary btn-block\"\n  }, \"Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"already-register text-right\"\n  }, \"Already registered \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/login\"\n  }, \"sign in?\"))), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: successful ? \"alert alert-success\" : \"alert alert-danger\",\n    role: \"alert\"\n  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_validation_build_button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      display: \"none\"\n    },\n    ref: checkBtn\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\n//# sourceURL=webpack:///./src/components/page/Register/Register.js?");

/***/ }),

/***/ "./src/helpers/history.js":
/*!********************************!*\
  !*** ./src/helpers/history.js ***!
  \********************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return history; });\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);\n\nconst history = Object(history__WEBPACK_IMPORTED_MODULE_0__[\"createBrowserHistory\"])();\n\n//# sourceURL=webpack:///./src/helpers/history.js?");

/***/ }),

/***/ "./src/services/auth-header.js":
/*!*************************************!*\
  !*** ./src/services/auth-header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return authHeader; });\nfunction authHeader() {\n  const user = JSON.parse(localStorage.getItem(\"user\"));\n\n  if (user && user.accessToken) {\n    return {\n      Authorization: \"Bearer \" + user.accessToken\n    };\n  } else {\n    return {};\n  }\n}\n\n//# sourceURL=webpack:///./src/services/auth-header.js?");

/***/ }),

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API_URL = \"https://ss-backend-2021.herokuapp.com/\";\n\nconst register = (username, email, password) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_URL + \"register\", {\n    username,\n    email,\n    password\n  });\n};\n\nconst login = (username, password) => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_URL + \"login\", {\n    username,\n    password\n  }).then(response => {\n    if (response.data.accessToken) {\n      localStorage.setItem(\"user\", JSON.stringify(response.data));\n    }\n\n    return response.data;\n  });\n};\n\nconst logout = () => {\n  localStorage.removeItem(\"user\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  register,\n  login,\n  logout\n});\n\n//# sourceURL=webpack:///./src/services/auth.service.js?");

/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header */ \"./src/services/auth-header.js\");\n\n\nconst API_URL = \"https://ss-backend-2021.herokuapp.com/\";\n\nconst getPublicContent = () => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL + \"all\");\n};\n\nconst getUserBoard = () => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL + \"user\", {\n    headers: Object(_auth_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  });\n};\n\nconst getModeratorBoard = () => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL + \"mod\", {\n    headers: Object(_auth_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  });\n};\n\nconst getAdminBoard = () => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL + \"admin\", {\n    headers: Object(_auth_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getPublicContent,\n  getUserBoard,\n  getModeratorBoard,\n  getAdminBoard\n});\n\n//# sourceURL=webpack:///./src/services/user.service.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");\n\n//# sourceURL=webpack:///external_%22react-icons/fa%22?");

/***/ }),

/***/ "react-icons/lib":
/*!**********************************!*\
  !*** external "react-icons/lib" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib%22?");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");\n\n//# sourceURL=webpack:///external_%22react-icons/md%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-validation/build/button":
/*!************************************************!*\
  !*** external "react-validation/build/button" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-validation/build/button\");\n\n//# sourceURL=webpack:///external_%22react-validation/build/button%22?");

/***/ }),

/***/ "react-validation/build/form":
/*!**********************************************!*\
  !*** external "react-validation/build/form" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-validation/build/form\");\n\n//# sourceURL=webpack:///external_%22react-validation/build/form%22?");

/***/ }),

/***/ "react-validation/build/input":
/*!***********************************************!*\
  !*** external "react-validation/build/input" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-validation/build/input\");\n\n//# sourceURL=webpack:///external_%22react-validation/build/input%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });