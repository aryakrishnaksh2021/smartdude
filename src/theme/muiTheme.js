import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme(
    {
    
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
                "md": 960,
                "lg": 1280,
                "xl": 1920
            },
            "unit": "px"
        },
        "direction": "ltr",
        "components": {
            "MuiButton": {
                "styleOverrides": {
                    "root": {
                        "fontWeight": 500,
                        "textTransform": "capitalize",
                        "borderRadius": "4px"
                    }
                }
            },
            "MuiPaper": {
                "defaultProps": {
                    "elevation": 0
                },
                "styleOverrides": {
                    "root": {
                        "backgroundImage": "none"
                    },
                    "rounded": {
                        "borderRadius": "12px"
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
            "MuiListItemButton": {
                "styleOverrides": {
                    "root": {
                        "color": "#616161",
                        "paddingTop": "10px",
                        "paddingBottom": "10px",
                        "&.Mui-selected": {
                            "color": "#5e35b1",
                            "backgroundColor": "#ede7f6",
                            "&:hover": {
                                "backgroundColor": "#ede7f6"
                            },
                            "& .MuiListItemIcon-root": {
                                "color": "#5e35b1"
                            }
                        },
                        "&:hover": {
                            "backgroundColor": "#ede7f6",
                            "color": "#5e35b1",
                            "& .MuiListItemIcon-root": {
                                "color": "#5e35b1"
                            }
                        }
                    }
                }
            },
            "MuiListItemIcon": {
                "styleOverrides": {
                    "root": {
                        "color": "#616161",
                        "minWidth": "36px"
                    }
                }
            },
            "MuiListItemText": {
                "styleOverrides": {
                    "primary": {
                        "color": "#212121"
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
            "MuiAvatar": {
                "styleOverrides": {
                    "root": {
                        "color": "#1e88e5",
                        "background": "#90caf9"
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
        "palette": {
            "mode": "light",
            "common": {
                "black": "#000000",
                "white": "#fff"
            },
            "primary": {
                "200": "#90caf9",
                "800": "#1565c0",
                "light": "#e3f2fd",
                "main": "#2196f3",
                "dark": "#1e88e5",
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
            "error": {
                "light": "#ef9a9a",
                "main": "#f44336",
                "dark": "#c62828",
                "contrastText": "#fff"
            },
            "orange": {
                "light": "#fbe9e7",
                "main": "#ffab91",
                "dark": "#d84315"
            },
            "warning": {
                "light": "#fff8e1",
                "main": "#ffe57f",
                "dark": "#ffc107",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "success": {
                "200": "#69f0ae",
                "light": "#b9f6ca",
                "main": "#00e676",
                "dark": "#00c853",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            "grey": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#eeeeee",
                "300": "#e0e0e0",
                "400": "#bdbdbd",
                "500": "#9e9e9e",
                "600": "#212121",
                "700": "#616161",
                "800": "#424242",
                "900": "#212121",
                "A100": "#f5f5f5",
                "A200": "#eeeeee",
                "A400": "#bdbdbd",
                "A700": "#616161"
            },
            "text": {
                "primary": "#616161",
                "secondary": "#9e9e9e",
                "dark": "#212121",
                "hint": "#f5f5f5",
                "disabled": "rgba(0, 0, 0, 0.38)"
            },
            "background": {
                "paper": "#ffffff",
                "default": "#ffffff"
            },
            "info": {
                "main": "#0288d1",
                "light": "#03a9f4",
                "dark": "#01579b",
                "contrastText": "#fff"
            },
            "contrastThreshold": 3,
            "tonalOffset": 0.2,
            "divider": "rgba(0, 0, 0, 0.12)",
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
        "mixins": {
            "toolbar": {
                "minHeight": "48px",
                "padding": "16px",
                "@media (min-width: 600px)": {
                    "minHeight": "48px"
                }
            }
        },
        "typography": {
            "fontFamily": "'Roboto', sans-serif",
            "h6": {
                "fontWeight": 500,
                "color": "#212121",
                "fontSize": "0.75rem",
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.6
            },
            "h5": {
                "fontSize": "0.875rem",
                "color": "#212121",
                "fontWeight": 500,
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.334
            },
            "h4": {
                "fontSize": "1rem",
                "color": "#212121",
                "fontWeight": 600,
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.235
            },
            "h3": {
                "fontSize": "1.25rem",
                "color": "#212121",
                "fontWeight": 600,
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.167
            },
            "h2": {
                "fontSize": "1.5rem",
                "color": "#212121",
                "fontWeight": 700,
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.2
            },
            "h1": {
                "fontSize": "2.125rem",
                "color": "#212121",
                "fontWeight": 700,
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.167
            },
            "subtitle1": {
                "fontSize": "0.875rem",
                "fontWeight": 500,
                "color": "#212121",
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.75
            },
            "subtitle2": {
                "fontSize": "0.75rem",
                "fontWeight": 400,
                "color": "#9e9e9e",
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.57
            },
            "caption": {
                "fontSize": "0.75rem",
                "color": "#9e9e9e",
                "fontWeight": 400,
                "fontFamily": "'Roboto', sans-serif",
                "lineHeight": 1.66
            },
            "body1": {
                "fontSize": "0.875rem",
                "fontWeight": 400,
                "lineHeight": "1.334em",
                "fontFamily": "'Roboto', sans-serif"
            },
            "body2": {
                "letterSpacing": "0em",
                "fontWeight": 400,
                "lineHeight": "1.5em",
                "color": "#616161",
                "fontFamily": "'Roboto', sans-serif",
                "fontSize": "0.875rem"
            },
            "customInput": {
                "marginTop": 8,
                "marginBottom": 8,
                "& > label": {
                    "top": "23px",
                    "left": 0,
                    "&[data-shrink=\"false\"]": {
                        "top": "5px"
                    }
                },
                "& > div > input": {
                    "padding": "30.5px 14px 11.5px !important"
                },
                "& legend": {
                    "display": "none"
                },
                "& fieldset": {
                    "top": 0
                }
            },
            "mainContent": {
                "backgroundColor": "#e3f2fd",
                "width": "100%",
                "minHeight": "calc(100vh - 88px)",
                "flexGrow": 1,
                "padding": "20px",
                "marginTop": "88px",
                "marginRight": "20px",
                "borderRadius": "12px"
            },
            "menuCaption": {
                "fontSize": "0.875rem",
                "fontWeight": 500,
                "color": "#212121",
                "padding": "6px",
                "textTransform": "capitalize",
                "marginTop": "10px"
            },
            "subMenuCaption": {
                "fontSize": "0.6875rem",
                "fontWeight": 500,
                "color": "#9e9e9e",
                "textTransform": "capitalize"
            },
            "commonAvatar": {
                "cursor": "pointer",
                "borderRadius": "8px"
            },
            "smallAvatar": {
                "width": "22px",
                "height": "22px",
                "fontSize": "1rem"
            },
            "mediumAvatar": {
                "width": "34px",
                "height": "34px",
                "fontSize": "1.2rem"
            },
            "largeAvatar": {
                "width": "44px",
                "height": "44px",
                "fontSize": "1.5rem"
            },
            "htmlFontSize": 16,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500,
            "fontWeightBold": 700,
            "button": {
                "fontFamily": "'Roboto', sans-serif",
                "fontWeight": 500,
                "fontSize": "0.875rem",
                "lineHeight": 1.75,
                "textTransform": "uppercase"
            },
            "overline": {
                "fontFamily": "'Roboto', sans-serif",
                "fontWeight": 400,
                "fontSize": "0.75rem",
                "lineHeight": 2.66,
                "textTransform": "uppercase"
            }
        },
        "shadows": [
            "none",
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
            "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
            "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
            "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
            "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
            "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
            "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
            "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
            "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
            "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
            "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
            "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
            "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
            "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
            "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
            "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
            "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
            "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
            "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
            "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
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
        }
    }



);
export default theme;
