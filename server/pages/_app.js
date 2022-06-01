"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./utility/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(3548);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./styles/theme/lightThemeOptions.ts

const lightThemeOptions = {
    palette: {
        mode: "light",
        primary: colors_namespaceObject.blue,
        text: {
            primary: colors_namespaceObject.brown[900]
        }
    },
    typography: {
        fontFamily: "'Poppins'",
        h1: {
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "52px"
        },
        h2: {},
        h3: {},
        h4: {},
        h5: {
            fontFamily: "Poppins",
            fontSize: "24px",
            lineHeight: "52px"
        },
        h6: {},
        subtitle1: {},
        subtitle2: {},
        body1: {
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px"
        },
        body2: {},
        button: {},
        caption: {},
        overline: {}
    },
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "& label": {
                        display: "none"
                    },
                    "& .MuiInputBase-root input": {
                        height: "24px"
                    },
                    "& .MuiInputBase-root fieldset": {
                        height: "58px",
                        top: 0
                    },
                    "& .MuiInputBase-root fieldset legend": {
                        display: "none"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    textTransform: "initial"
                },
                outlined: {
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: colors_namespaceObject.blueGrey[500],
                    color: colors_namespaceObject.blueGrey[500],
                    ":hover": {
                        borderWidth: 2,
                        borderColor: colors_namespaceObject.blueGrey[500]
                    }
                },
                contained: {
                    height: 50,
                    outline: "none",
                    borderRadius: 15,
                    textTransform: "initial"
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    marginBottom: 24,
                    outline: "none",
                    borderRadius: 15
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
                    "&.Mui-focused fieldset": {
                        borderColor: `${colors_namespaceObject.blueGrey[500]} !important`
                    }
                },
                notchedOutline: {
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: colors_namespaceObject.blueGrey[500]
                }
            }
        }
    },
    spacing: (factor)=>`${0.25 * factor}rem`
    ,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
};
/* harmony default export */ const theme_lightThemeOptions = (lightThemeOptions);

;// CONCATENATED MODULE: ./pages/_app.tsx








const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
const lightTheme = (0,material_.createTheme)(theme_lightThemeOptions);
const MyApp = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
            theme: lightTheme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utility_createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utility/createEmotionCache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};
/* harmony default export */ const utility_createEmotionCache = (createEmotionCache);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5507));
module.exports = __webpack_exports__;

})();