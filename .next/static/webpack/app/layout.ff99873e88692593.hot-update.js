"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/layout.js":
/*!***************************!*\
  !*** ./src/app/layout.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// export const metadata = {\n//   title: 'Web tutorials',\n//   description: 'Generated by baejjang_i',\n// }\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [topics, setTopics] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetch(\"http://localhost:9999/topics\").then((resp)=>resp.json()).then((result)=>{\n            setTopics(result);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"WEB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    children: topics.map((topic)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/read/$\",\n                                children: topic.title\n                            }, void 0, false, {\n                                fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                                lineNumber: 26,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                            lineNumber: 26,\n                            columnNumber: 18\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/create\",\n                                children: \"Create\"\n                            }, void 0, false, {\n                                fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/update/1\",\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: \"delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/baejjang_i/Documents/next.js_study/src/app/layout.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"5PrH2L6CTp15aUV0qkyKrxReD80=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QjtBQUNOO0FBQ3FCO0FBRTNDLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNENBQTRDO0FBQzVDLElBQUk7QUFFVyxTQUFTRyxXQUFXLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkNELGdEQUFTQSxDQUFDO1FBQ1JNLE1BQU0sZ0NBQ0xDLElBQUksQ0FBQ0MsQ0FBQUEsT0FBTUEsS0FBS0MsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQTtZQUNKTCxVQUFVSztRQUNaO0lBQ0YsR0FBRSxFQUFFO0lBQ0oscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQzs7OEJBQ0QsOERBQUNDOzhCQUFHLDRFQUFDZCxrREFBSUE7d0JBQUNlLE1BQUs7a0NBQUk7Ozs7Ozs7Ozs7OzhCQUNuQiw4REFBQ0M7OEJBQ0VYLE9BQU9ZLEdBQUcsQ0FBQyxDQUFDQzt3QkFDWCxxQkFBTyw4REFBQ0M7c0NBQUcsNEVBQUNuQixrREFBSUE7Z0NBQUNlLE1BQU07MENBQVlHLE1BQU1FLEtBQUs7Ozs7Ozs7Ozs7O29CQUNoRDs7Ozs7O2dCQUVDaEI7OEJBQ0QsOERBQUNpQjs7c0NBQ0MsOERBQUNGO3NDQUFHLDRFQUFDbkIsa0RBQUlBO2dDQUFDZSxNQUFLOzBDQUFVOzs7Ozs7Ozs7OztzQ0FDekIsOERBQUNJO3NDQUFHLDRFQUFDbkIsa0RBQUlBO2dDQUFDZSxNQUFLOzBDQUFZOzs7Ozs7Ozs7OztzQ0FDM0IsOERBQUNJO3NDQUFHLDRFQUFDRztnQ0FBTUMsTUFBSztnQ0FBU0MsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QztHQTNCd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC5qcz81YjE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG4vLyBleHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4vLyAgIHRpdGxlOiAnV2ViIHR1dG9yaWFscycsXG4vLyAgIGRlc2NyaXB0aW9uOiAnR2VuZXJhdGVkIGJ5IGJhZWpqYW5nX2knLFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbdG9waWNzLCBzZXRUb3BpY3NdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5OTk5L3RvcGljcycpXG4gICAgLnRoZW4ocmVzcD0+cmVzcC5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0PT57XG4gICAgICBzZXRUb3BpY3MocmVzdWx0KTtcbiAgICB9KTtcbiAgfSxbXSk7XG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8Ym9keT5cbiAgICAgIDxoMT48TGluayBocmVmPVwiL1wiPldFQjwvTGluaz48L2gxPlxuICAgICAgPG9sPlxuICAgICAgICB7dG9waWNzLm1hcCgodG9waWMpPT57XG4gICAgICAgICAgcmV0dXJuIDxsaT48TGluayBocmVmPXsnL3JlYWQvJCd9Pnt0b3BpYy50aXRsZX08L0xpbms+PC9saT5cbiAgICAgICAgfSl9XG4gICAgICA8L29sPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGU8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi91cGRhdGUvMVwiPlVwZGF0ZTwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiZGVsZXRlXCIvPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwidG9waWNzIiwic2V0VG9waWNzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJyZXN1bHQiLCJodG1sIiwiYm9keSIsImgxIiwiaHJlZiIsIm9sIiwibWFwIiwidG9waWMiLCJsaSIsInRpdGxlIiwidWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.js\n"));

/***/ })

});