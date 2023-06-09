import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    "breakpoints": {
        "keys": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 900,
            "lg": 1200,
            "xl": 1536
        },
        "unit": "px"
    },
    "direction": "ltr",
    "palette": {
        "mode": "light",
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        // "primary": {
        //     "200": "#ED1F24",
        //     "800": "#ED1F24",
        //     "light": "#ED1F24",
        //     "main": "#ED1F24",
        //     "dark": "#ED1F24",
        //     "contrastText": "#fff"
        // },
        "primary": {
            "200": "#ED1F24",
            "800": "#ED1F24",
            "light": "#ED1F24",
            "main": "#ffd600",
            "dark": "#ED1F24",
            "contrastText": "#fff"
        },
        "secondary": {
            "200": "#b39ddb",
            "800": "#4527a0",
            "light": "#ede7f6",
            "main": "#673ab7",
            "dark": "#5e35b1",
            "contrastText": "#fff"
        },
        "status": {
            "created": "#fffde7",
            "enabled": "#bbdefb",
            "rejected": "#ff8a80",
        },
        "error": {
            "main": "#ff1744",
            "light": "#ff616f",
            "dark": "#c4001d",
            "contrastText": "#fff"
        },
        "warning": {
            "main": "#ffa000",
            "light": "#ffd149",
            "dark": "#c67100",
            "contrastText": "#fff"
        },
        "info": {
            "main": "#80beff",
            "light": "#b5f0ff",
            "dark": "#4a8ecc",
            "contrastText": "#fff"
        },
        "success": {
            "main": "#00bfa5",
            "light": "#5df2d6",
            "dark": "#008e76",
            "contrastText": "#fff"
        },
        "grey": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.6)",
            "disabled": "rgba(0, 0, 0, 0.38)"
        },
        "divider": "rgba(0, 0, 0, 0.12)",
        "background": {
            "paper": "#fff",
            "default": "#F4F7FC",
            "header": '#1e88e5'
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "hoverOpacity": 0.04,
            "selected": "rgba(0, 0, 0, 0.08)",
            "selectedOpacity": 0.08,
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)",
            "disabledOpacity": 0.38,
            "focus": "rgba(0, 0, 0, 0.12)",
            "focusOpacity": 0.12,
            "activatedOpacity": 0.12
        }
    },
    "shape": {
        "borderRadius": 4
    },
    "typography": {
        "fontFamily": "Poppins",
        "fontSize": 12,
        "htmlFontSize": 16,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
        "h1": {
            "fontFamily": "Poppins",
            "fontWeight": 500,
            "fontSize": "5.142857142857142rem",
            "lineHeight": 1.167
        },
        "h2": {
            "fontFamily": "Poppins",
            "fontWeight": 500,
            "fontSize": "3.214285714285714rem",
            "lineHeight": 1.2
        },
        "h3": {
            "fontFamily": "Poppins",
            "fontWeight": 400,
            "fontSize": "2.571428571428571rem",
            "lineHeight": 1.167
        },
        "h4": {
            "fontFamily": "Poppins",
            "fontWeight": 400,
            "fontSize": "1.8214285714285714rem",
            "lineHeight": 1.235
        },
        "h5": {
            "fontFamily": "Poppins",
            "fontWeight": 400,
            "fontSize": "1.2857142857142856rem",
            "lineHeight": 1.334
        },
        "h6": {
            "fontFamily": "Poppins",
            "fontWeight": 500,
            "fontSize": "1.0714285714285714rem",
            "lineHeight": 1.6
        },
        "subtitle1": {
            "fontFamily": "Poppins",
            "fontWeight": 400,
            "fontSize": "0.8571428571428571rem",
            "lineHeight": 1.75,
            "color":'rgba(0, 0, 0, 0.6)'
        },
        "subtitle2": {
            "fontFamily": "Poppins",
            "fontWeight": 500,
            "fontSize": "0.75rem",
            "lineHeight": 1.57,
            "color":'rgba(0, 0, 0, 0.6)'
        },
        "body1": {
            "fontFamily": "Poppins",
            "fontWeight": 300,
            "fontSize": "0.8571428571428571rem",
            "lineHeight": 1.5,
            "color":'rgba(0, 0, 0, 0.6)',
            "letterSpacing" :'.05rem',

        },
        "body2": {
            "fontFamily": "Poppins",
            "fontWeight": 300,
            "fontSize": "0.75rem",
            "lineHeight": 1.43,
            "color":'rgba(0, 0, 0, 0.6)',
            "letterSpacing" :'.05rem',

        },
        "button": {
            "fontFamily": "Poppins",
            "fontWeight": 500,
            "fontSize": "0.75rem",
            "lineHeight": 1.75,
            "textTransform": "uppercase"
        },
        "caption": {
            "fontFamily": "Poppins",
            "fontWeight": 400,
            "fontSize": "0.6428571428571428rem",
            "lineHeight": 1.66,
            "color":'rgba(0, 0, 0, 0.6)'
        },
        "overline": {
            "fontFamily": "Poppins",
            "fontWeight": 400,
            "fontSize": "0.6428571428571428rem",
            "lineHeight": 2.66,
            "textTransform": "uppercase",
            "color":'rgba(0, 0, 0, 0.6)'
        }
    },
    "mixins": {
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px) and (orientation: landscape)": {
                "minHeight": 48
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    "shadows": [
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "none",
        // '0 .5rem 1rem rgba(0,0,0,.15)',
        // "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"            
    ],
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "zIndex": {
        "mobileStepper": 1000,
        "speedDial": 1050,
        "appBar": 1100,
        "drawer": 1200,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500
    },
    "components": {
        'MuiPaper': {
            'styleOverrides': {
                'root': {
                    'borderRadius': '10px',
                },
            },
        },
        "MuiButton": {
            "styleOverrides": {
                "root": {
                    "fontWeight": 500,
                    "textTransform": "capitalize",
                    "borderRadius": "4px"
                }
            }
        },
        "MuiCardHeader": {
            "styleOverrides": {
                "root": {
                    "padding": "24px"
                },
                "title": {
                    "fontSize": "1.125rem"
                }
            }
        },
        "MuiCardContent": {
            "styleOverrides": {
                "root": {
                    "padding": "24px"
                }
            }
        },
        "MuiCardActions": {
            "styleOverrides": {
                "root": {
                    "padding": "24px"
                }
            }
        },
        "MuiInputBase": {
            "styleOverrides": {
                "input": {
                    "color": "#212121",
                    "&::placeholder": {
                        "color": "#9e9e9e",
                        "fontSize": "0.875rem"
                    }
                }
            }
        },
        "MuiOutlinedInput": {
            "styleOverrides": {
                "root": {
                    "background": "#fafafa",
                    "borderRadius": "12px",
                    "& .MuiOutlinedInput-notchedOutline": {

                    },
                    "&:hover $notchedOutline": {
                        "borderColor": "#e3f2fd"
                    },
                    "&.MuiInputBase-multiline": {
                        "padding": 1
                    }
                },
                "input": {
                    "fontWeight": 500,
                    "background": "#fafafa",
                    "padding": "15.5px 14px",
                    "borderRadius": "12px",
                    "&.MuiInputBase-inputSizeSmall": {
                        "padding": "10px 14px",
                        "&.MuiInputBase-inputAdornedStart": {
                            "paddingLeft": 0
                        }
                    }
                },
                "inputAdornedStart": {
                    "paddingLeft": 4
                },
                "notchedOutline": {
                    "borderRadius": "12px"
                }
            }
        },
        "MuiSlider": {
            "styleOverrides": {
                "root": {
                    "&.Mui-disabled": {
                        "color": "#e0e0e0"
                    }
                },
                "mark": {
                    "backgroundColor": "#ffffff",
                    "width": "4px"
                },
                "valueLabel": {
                    "color": "#e3f2fd"
                }
            }
        },
        "MuiDivider": {
            "styleOverrides": {
                "root": {
                    "borderColor": "#eeeeee",
                    "opacity": 1
                }
            }
        },
        "MuiChip": {
            "styleOverrides": {
                "root": {
                    "&.MuiChip-deletable .MuiChip-deleteIcon": {
                        "color": "inherit"
                    }
                }
            }
        },
        "MuiTooltip": {
            "styleOverrides": {
                "tooltip": {
                    "color": "#ffffff",
                    "background": "#616161"
                }
            }
        }
    },

});
export default theme;
