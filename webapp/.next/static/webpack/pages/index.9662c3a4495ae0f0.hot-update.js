"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hardhat_artifacts_contracts_Coffee_sol_Coffee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hardhat/artifacts/contracts/Coffee.sol/Coffee.json */ \"../hardhat/artifacts/contracts/Coffee.sol/Coffee.json\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function() {\n    _s();\n    // Contract Address & ABI\n    var contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    var contractABI = _hardhat_artifacts_contracts_Coffee_sol_Coffee_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    // Component state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), memos = ref3[0], setMemos = ref3[1];\n    var onNameChange = function(event) {\n        setName(event.target.value);\n    };\n    var onMessageChange = function(event) {\n        setMessage(event.target.value);\n    };\n    // Wallet connection logic\n    var isWalletConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var ethereum1, accounts, account, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        ethereum1 = window.ethereum;\n                        return [\n                            4,\n                            ethereum1.request({\n                                method: \"eth_accounts\"\n                            })\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        console.log(\"accounts: \", accounts);\n                        if (accounts.length > 0) {\n                            account = accounts[0];\n                            console.log(\"wallet is connected! \" + account);\n                        } else {\n                            console.log(\"make sure MetaMask is connected\");\n                        }\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.log(\"error: \", error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function isWalletConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var provider, accounts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!window.ethereum) return [\n                            3,\n                            5\n                        ];\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        return [\n                            4,\n                            provider.send(\"eth_requestAccounts\", [])\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        setCurrentAccount(accounts[0]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        alert(\"Please install MetaMask\");\n                        _state.label = 6;\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var buyCoffee = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var provider, signer, buyMeACoffee;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                console.log(\"coffee bought OK!\");\n                if (window.ethereum) {\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum, \"any\");\n                    signer = provider.getSigner();\n                    buyMeACoffee = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, contractABI, signer);\n                    console.log(\"\\uD83D\\uDE80 ~ file: index.js ~ line 81 ~ buyCoffee ~ buyMeACoffee\", buyMeACoffee);\n                } else {}\n                return [\n                    2\n                ];\n            });\n        });\n        return function buyCoffee() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                maxW: \"xl\",\n                centerContent: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n                        as: \"fieldset\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                placeholder: \"Enter your name\",\n                                type: \"text\",\n                                id: \"name\",\n                                onChange: onNameChange\n                            }, void 0, false, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                type: \"text\",\n                                mt: 4,\n                                placeholder: \"Write me a message\",\n                                id: \"message\",\n                                onChange: onMessageChange\n                            }, void 0, false, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                mt: 4,\n                                colorScheme: \"teal\",\n                                onClick: buyCoffee,\n                                children: \"Buy 1 Coffee for 0.001ETH\"\n                            }, void 0, false, {\n                                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        mt: 4,\n                        colorScheme: \"teal\",\n                        onClick: connectWallet,\n                        children: \"CONNECT WALLET\"\n                    }, void 0, false, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Connected :\",\n                            currentAccount,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                children: [\n                    \"Built with ❤ by \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"http://www.federico.com\",\n                        children: \"Federico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/federico/Documents/Blockchain/AlchemyProjects/buymeacoffee/webapp/pages/index.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"sBwM6Je+XOH2wga5vimzQ4cWq7w=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQVM7Z0NBQUNDLFFBQVEsRUFBRTdCLGVBQWU7Ozs7O3FDQUFJOzBDQUN0Ryw4REFBQ25CLG9EQUFNO2dDQUFDaUQsRUFBRSxFQUFFLENBQUM7Z0NBQUVDLFdBQVcsRUFBQyxNQUFNO2dDQUFDQyxPQUFPLEVBQUVkLFNBQVM7MENBQUUsMkJBRXREOzs7OztxQ0FBUzs7Ozs7OzZCQUNHO2tDQUVaLDhEQUFDckMsb0RBQU07d0JBQUNpRCxFQUFFLEVBQUUsQ0FBQzt3QkFBRUMsV0FBVyxFQUFDLE1BQU07d0JBQUNDLE9BQU8sRUFBRXBCLGFBQWE7a0NBQUUsZ0JBRTFEOzs7Ozs2QkFBUztrQ0FFVCw4REFBQ3FCLEdBQUM7OzRCQUFDLGFBQVc7NEJBQUU3QyxjQUFjOzRCQUFFLEdBQUM7Ozs7Ozs2QkFBSTs7Ozs7O3FCQUU3QjswQkFFWiw4REFBQ1gsdURBQVM7O29CQUFDLGtCQUNPO2tDQUFBLDhEQUFDeUQsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLHlCQUF5QjtrQ0FBQyxVQUFROzs7Ozs2QkFBSTs7Ozs7O3FCQUNwRDs7Ozs7O2FBQ0wsQ0FDVDtBQUNKLENBQUM7R0FyR0tuRCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUF1R1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBWU3RhY2ssXG4gIENvbnRhaW5lcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjb250cmFjdEFiaSBmcm9tIFwiLi4vLi4vaGFyZGhhdC9hcnRpZmFjdHMvY29udHJhY3RzL0NvZmZlZS5zb2wvQ29mZmVlLmpzb25cIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgLy8gQ29udHJhY3QgQWRkcmVzcyAmIEFCSVxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiO1xuICBjb25zdCBjb250cmFjdEFCSSA9IGNvbnRyYWN0QWJpLmFiaTtcblxuICAvLyBDb21wb25lbnQgc3RhdGVcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVtb3MsIHNldE1lbW9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbk5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25NZXNzYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIC8vIFdhbGxldCBjb25uZWN0aW9uIGxvZ2ljXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHM6IFwiLCBhY2NvdW50cyk7XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXQgaXMgY29ubmVjdGVkISBcIiArIGFjY291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlIHN1cmUgTWV0YU1hc2sgaXMgY29ubmVjdGVkXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgICAgaWYgKCB3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXG4gICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSlcbiAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgfVxuXG4gIH07XG5cbiAgY29uc3QgYnV5Q29mZmVlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY29mZmVlIGJvdWdodCBPSyFcIik7XG5cbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSwgXCJhbnlcIik7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IGJ1eU1lQUNvZmZlZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgY29udHJhY3RBQkksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSA4MSB+IGJ1eUNvZmZlZSB+IGJ1eU1lQUNvZmZlZVwiLCBidXlNZUFDb2ZmZWUpXG4gICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZTdGFjaz5cblxuICAgICAgPENvbnRhaW5lciBtYXhXPVwieGxcIiBjZW50ZXJDb250ZW50PlxuICAgICAgICA8Rm9ybUNvbnRyb2wgYXM9XCJmaWVsZHNldFwiPlxuICAgICAgICAgIHsvKiA8Rm9ybUxhYmVsIGFzPVwibGVnZW5kXCI+RW50ZXIgeW91ciBuYW1lPC9Gb3JtTGFiZWw+ICovfVxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgb25DaGFuZ2U9e29uTmFtZUNoYW5nZX0gLz5cblxuICAgICAgICAgIHsvKiA8Rm9ybUxhYmVsICBtdD17NH0gYXM9XCJsZWdlbmRcIj5Xcml0ZSBhIE1lc3NhZ2U8L0Zvcm1MYWJlbD4gKi99XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbXQ9ezR9ICBwbGFjZWhvbGRlcj1cIldyaXRlIG1lIGEgbWVzc2FnZVwiIGlkPVwibWVzc2FnZVwiIG9uQ2hhbmdlPXtvbk1lc3NhZ2VDaGFuZ2V9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBtdD17NH0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgb25DbGljaz17YnV5Q29mZmVlfT5cbiAgICAgICAgICAgIEJ1eSAxIENvZmZlZSBmb3IgMC4wMDFFVEhcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgIDxCdXR0b24gbXQ9ezR9IGNvbG9yU2NoZW1lPVwidGVhbFwiIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9PlxuICAgICAgICAgICAgQ09OTkVDVCBXQUxMRVRcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxwPkNvbm5lY3RlZCA6eyBjdXJyZW50QWNjb3VudCB9IDwvcD5cblxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIEJ1aWx0IHdpdGgg4p2kIGJ5IDxhIGhyZWY9XCJodHRwOi8vd3d3LmZlZGVyaWNvLmNvbVwiPkZlZGVyaWNvPC9hPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9WU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJHcmlkIiwiVlN0YWNrIiwiQ29udGFpbmVyIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIkJ1dHRvbiIsIkxpbmsiLCJjb250cmFjdEFiaSIsIkhvbWUiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsImFiaSIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJuYW1lIiwic2V0TmFtZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVtb3MiLCJzZXRNZW1vcyIsIm9uTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbk1lc3NhZ2VDaGFuZ2UiLCJpc1dhbGxldENvbm5lY3RlZCIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJhY2NvdW50IiwiZXJyb3IiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNvbm5lY3RXYWxsZXQiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNlbmQiLCJhbGVydCIsImJ1eUNvZmZlZSIsInNpZ25lciIsImJ1eU1lQUNvZmZlZSIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwibWF4VyIsImNlbnRlckNvbnRlbnQiLCJhcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJtdCIsImNvbG9yU2NoZW1lIiwib25DbGljayIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});