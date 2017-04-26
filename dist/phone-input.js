var ValidationLibrary =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PhoneInput = (function () {
    function PhoneInput(limit, spaces, prefix) {
        if (limit === void 0) { limit = 10; }
        if (spaces === void 0) { spaces = [2, 6, 10]; }
        if (prefix === void 0) { prefix = '+7'; }
        this.limit = limit;
        this.spaces = spaces;
        this.prefix = prefix;
        this._phone = null;
        this.flag = false;
    }
    Object.defineProperty(PhoneInput.prototype, "phone", {
        get: function () {
            if (this._phone === null) {
                return this.flag ? this.prefix : '';
            }
            var phoneStr = "" + this.prefix + this._phone;
            for (var _i = 0, _a = this.spaces; _i < _a.length; _i++) {
                var spacePos = _a[_i];
                if (spacePos < phoneStr.length) {
                    phoneStr = phoneStr.slice(0, spacePos) + " " + phoneStr.slice(spacePos);
                }
            }
            return phoneStr;
        },
        set: function (newPhone) {
            newPhone = newPhone.replace(/(^|)((\+\d)|([^\d]))/g, '');
            if (newPhone.length <= this.limit) {
                this._phone = Number(newPhone) || null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** get validated phone
     * @param newPhone {string}
     */
    PhoneInput.prototype.getValidatedPhone = function (newPhone) {
        this.phone = newPhone;
        return this.phone;
    };
    /**
     * add phone prefix
     */
    PhoneInput.prototype.addPhonePrefix = function () { this.flag = true; };
    /**
     * remove phone prefix
     */
    PhoneInput.prototype.removePhonePrefix = function () {
        if (this._phone === null) {
            this.flag = false;
            this.phone = '';
        }
    };
    /**
     * get pure phone number
     */
    PhoneInput.prototype.getPhoneNumber = function () {
        return this._phone;
    };
    return PhoneInput;
}());
exports.PhoneInput = PhoneInput;


/***/ })
/******/ ]);