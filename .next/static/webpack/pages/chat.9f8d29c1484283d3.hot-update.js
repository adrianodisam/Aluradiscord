"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1ODMzNCwiZXhwIjoxOTU5MjM0MzM0fQ.FnN8bvy8qU2dT3NGDzk3JXxvhZoKo1Qr886jgf-RLSU';\nvar SUPABASE_URL = 'https://krnkenzdoqftoaowuhjk.supabase.co';\nvar supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\nsupabase.from('mensagens').select('*').then(function(dadosSupabase) {\n    console.log(dadosSupabase);\n});\nfunction ChatPage() {\n    var handleNovaMensagem = // Sua lógica vai aqui\n    function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaMensagem.length + 1,\n            de: 'adrianodisam',\n            texto: novaMensagem\n        };\n        setListamensagem([\n            mensagem\n        ].concat(_toConsumableArray(listaMensagem)));\n        setMensagem('');\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaMensagem = ref1[0], setListamensagem = ref1[1];\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaMensagem\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(param) {\n                                    var target = param.target;\n                                    setMensagem(target.value);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === 'Enter') {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"+b+z5IwKzr50K8mKRjsFuzLk32g=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    var apagar = function apagar(id) {\n        console.log('apagou');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflowY: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(param) {\n            var id = param.id, texto = param.texto;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/adrianodisam.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                                lineNumber: 178,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                                lineNumber: 188,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                                lineNumber: 189,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                        lineNumber: 173,\n                        columnNumber: 13\n                    }, _this),\n                    texto,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            position: 'relative',\n                            width: '100%',\n                            overflow: 'hidden',\n                            display: 'flex',\n                            padding: '6px',\n                            borderRadius: '10px',\n                            marginTop: '6px',\n                            justifyContent: 'right',\n                            alignItems: 'center',\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                        },\n                        onClick: apagar(id),\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                        lineNumber: 201,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, id, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n                lineNumber: 161,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Aluradiscord\\\\pages\\\\chat.js\",\n        lineNumber: 148,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTs7Ozs7UUEwRGIsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztNQWhGUWdDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuY29uc3QgU1VQQUJBU0VfQU5PTl9LRVkgPVxyXG4gICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNelkxT0RNek5Dd2laWGh3SWpveE9UVTVNak0wTXpNMGZRLkZuTjhidnk4cVUyZFQzTkdEemszSlh4dmhab0tvMVFyODg2amdmLVJMU1UnO1xyXG5jb25zdCBTVVBBQkFTRV9VUkwgPSAnaHR0cHM6Ly9rcm5rZW56ZG9xZnRvYW93dWhqay5zdXBhYmFzZS5jbyc7XHJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpO1xyXG5zdXBhYmFzZVxyXG4gIC5mcm9tKCdtZW5zYWdlbnMnKVxyXG4gIC5zZWxlY3QoJyonKVxyXG4gIC50aGVuKChkYWRvc1N1cGFiYXNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYWRvc1N1cGFiYXNlKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsaXN0YU1lbnNhZ2VtLCBzZXRMaXN0YW1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9IHtcclxuICAgICAgaWQ6IGxpc3RhTWVuc2FnZW0ubGVuZ3RoICsgMSxcclxuICAgICAgZGU6ICdhZHJpYW5vZGlzYW0nLFxyXG4gICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxyXG4gICAgfTtcclxuICAgIHNldExpc3RhbWVuc2FnZW0oW21lbnNhZ2VtLCAuLi5saXN0YU1lbnNhZ2VtXSk7XHJcbiAgICBzZXRNZW5zYWdlbSgnJyk7XHJcbiAgfVxyXG5cclxuICAvLyAuL1N1YSBsw7NnaWNhIHZhaSBhcXVpXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiAnOTV2aCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YU1lbnNhZ2VtfSAvPlxyXG4gICAgICAgICAgey8qICB7bGlzdGFNZW5zYWdlbS5tYXAoKHsgaWQsIGRlLCB0ZXh0byB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAge2RlfTp7dGV4dG99XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfSAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lbnNhZ2VtKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgY29sb3JWYXJpYW50PVwibmV1dHJhbFwiXHJcbiAgICAgICAgICBsYWJlbD1cIkxvZ291dFwiXHJcbiAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xyXG4gIGZ1bmN0aW9uIGFwYWdhcihpZCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FwYWdvdScpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgoeyBpZCwgdGV4dG8gfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICB0YWc9XCJsaVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHgnLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxyXG4gICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS9hZHJpYW5vZGlzYW0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPjwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7dGV4dG99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnNnB4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YXBhZ2FyKGlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2UiLCJmcm9tIiwic2VsZWN0IiwidGhlbiIsImRhZG9zU3VwYWJhc2UiLCJjb25zb2xlIiwibG9nIiwiQ2hhdFBhZ2UiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImlkIiwibGlzdGFNZW5zYWdlbSIsImxlbmd0aCIsImRlIiwidGV4dG8iLCJzZXRMaXN0YW1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJ1c2VTdGF0ZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJhcGFnYXIiLCJ0YWciLCJvdmVyZmxvd1kiLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});