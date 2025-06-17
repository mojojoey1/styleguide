import { DesignTokens } from './types';

/**
 * Design tokens for the application
 * This file contains all design tokens including colors, typography, spacing, etc.
 * Tokens are organized by category for better maintainability
 */
export const designTokens: DesignTokens = {
  colors: {
    neutral: {
      light: {
        // Base neutral colors
        black: '#000000',
        white: '#ffffff',
        grey: {
          26: '#424242',
          38: '#616161',
          86: '#dbdbdb',
          88: '#e0e0e0',
          96: '#f5f5f5',
          98: '#fafafa',
        },
        
        // Background variations
        background: {
          // Primary background variations
          1: {
            rest: '#ffffff',
            hover: '#f5f5f5',
            pressed: '#e0e0e0',
            selected: '#ebebeb',
          },
          2: {
            rest: '#fafafa',
            hover: '#f0f0f0',
            pressed: '#dbdbdb',
            selected: '#e6e6e6',
          },
          3: {
            rest: '#f5f5f5',
            hover: '#ebebeb',
            pressed: '#d6d6d6',
            selected: '#e0e0e0',
          },
          4: {
            rest: '#f0f0f0',
            hover: '#fafafa',
            pressed: '#f5f5f5',
            selected: '#ffffff',
          },
          5: {
            rest: '#ebebeb',
            hover: '#f5f5f5',
            pressed: '#f0f0f0',
            selected: '#fafafa',
          },
          6: {
            rest: '#e6e6e6',
          },
          
          // Special background variations
          inverted: {
            rest: '#292929',
            disabled: '#ffffff1a',
          },
          alpha: {
            1: '#ffffff80',
            2: '#ffffffcc',
            3: '#fafafae5',
          },
          static: '#333333',
          disabled: '#f0f0f0',
        },
        
        // Foreground/text variations
        foreground: {
          1: {
            rest: '#242424',
            hover: '#242424',
            pressed: '#242424',
            selected: '#242424',
            static: '#242424',
          },
          2: {
            rest: '#424242',
            hover: '#242424',
            pressed: '#242424',
            selected: '#242424',
            brandHover: '#0060ca',
            brandPressed: '#0052b3',
            brandSelected: '#0060ca',
          },
          3: {
            rest: '#616161',
            hover: '#424242',
            pressed: '#424242',
            selected: '#424242',
            brandHover: '#0060ca',
            brandPressed: '#0052b3',
            brandSelected: '#0060ca',
          },
          4: {
            rest: '#707070',
          },
          disabled: '#bdbdbd',
          inverted: {
            rest: '#ffffff',
            hover: '#ffffff',
            pressed: '#ffffff',
            selected: '#ffffff',
            static: '#ffffff',
            2: {
              rest: '#ffffff',
            },
          },
          onBrand: '#ffffff',
        },
        
        // Stroke/border variations
        stroke: {
          1: {
            rest: '#d1d1d1',
            hover: '#c7c7c7',
            pressed: '#b3b3b3',
            selected: '#bdbdbd',
          },
          2: {
            rest: '#e0e0e0',
          },
          3: {
            rest: '#f0f0f0',
          },
          alpha: {
            1: '#0000000d',
            2: '#ffffff33',
          },
          subtle: '#e0e0e0',
          onBrand: {
            1: '#ffffff',
            2: {
              rest: '#ffffff',
              hover: '#ffffff',
              pressed: '#ffffff',
              selected: '#ffffff',
            },
          },
          accessible: {
            rest: '#616161',
            hover: '#575757',
            pressed: '#4d4d4d',
            selected: '#0060ca',
          },
          disabled: '#e0e0e0',
          invertedDisabled: '#ffffff66',
          focus: {
            1: '#ffffff',
            2: '#000000',
          },
        },
        
        // Subtle background variations
        subtleBackground: {
          rest: '#ffffff00',
          hover: '#f5f5f5',
          pressed: '#e0e0e0',
          selected: '#ebebeb',
          lightAlpha: {
            hover: '#ffffffb2',
            pressed: '#ffffff80',
            selected: '#ffffff00',
          },
          inverted: {
            rest: '#ffffff00',
            hover: '#0000001a',
            pressed: '#0000004d',
            selected: '#00000033',
          },
        },
        
        // Transparent background variations
        transparentBackground: {
          rest: '#ffffff00',
          hover: '#ffffff00',
          pressed: '#ffffff00',
          selected: '#ffffff00',
        },
        
        // Overlay variations
        overlay: {
          background: '#00000066',
          scrollbar: '#00000080',
        },
        
        // Stencil variations
        stencil: {
          1: '#e6e6e6',
          2: '#fafafa',
        },
      },
      dark: {
        // Base neutral colors
        black: '#000000',
        white: '#ffffff',
        grey: {
          26: '#424242',
          38: '#616161',
          86: '#dbdbdb',
          88: '#e0e0e0',
          96: '#f5f5f5',
          98: '#fafafa',
        },
        background: {
          1: {
            rest: '#1f1f1f',
            hover: '#292929',
            pressed: '#333333',
            selected: '#2e2e2e',
          },
          2: {
            rest: '#242424',
            hover: '#2e2e2e',
            pressed: '#383838',
            selected: '#333333',
          },
          3: {
            rest: '#292929',
            hover: '#333333',
            pressed: '#3d3d3d',
            selected: '#383838',
          },
          4: {
            rest: '#2e2e2e',
            hover: '#383838',
            pressed: '#424242',
            selected: '#3d3d3d',
          },
          5: {
            rest: '#333333',
            hover: '#3d3d3d',
            pressed: '#474747',
            selected: '#424242',
          },
          6: {
            rest: '#383838',
          },
          inverted: {
            rest: '#ffffff',
            disabled: '#0000001a',
          },
          alpha: {
            1: '#00000080',
            2: '#000000cc',
            3: '#1f1f1fe5',
          },
          static: '#333333',
          disabled: '#2e2e2e',
        },
        foreground: {
          1: {
            rest: '#ffffff',
            hover: '#ffffff',
            pressed: '#ffffff',
            selected: '#ffffff',
            static: '#ffffff',
          },
          2: {
            rest: '#f5f5f5',
            hover: '#ffffff',
            pressed: '#ffffff',
            selected: '#ffffff',
            brandHover: '#75bcff',
            brandPressed: '#98ceff',
            brandSelected: '#75bcff',
          },
          3: {
            rest: '#e0e0e0',
            hover: '#f5f5f5',
            pressed: '#f5f5f5',
            selected: '#f5f5f5',
            brandHover: '#75bcff',
            brandPressed: '#98ceff',
            brandSelected: '#75bcff',
          },
          4: {
            rest: '#bdbdbd',
          },
          disabled: '#616161',
          inverted: {
            rest: '#242424',
            hover: '#242424',
            pressed: '#242424',
            selected: '#242424',
            static: '#242424',
            2: {
              rest: '#242424',
            },
          },
          onBrand: '#ffffff',
        },
        stroke: {
          1: {
            rest: '#424242',
            hover: '#4d4d4d',
            pressed: '#575757',
            selected: '#4d4d4d',
          },
          2: {
            rest: '#333333',
          },
          3: {
            rest: '#2e2e2e',
          },
          alpha: {
            1: '#ffffff0d',
            2: '#00000033',
          },
          subtle: '#333333',
          onBrand: {
            1: '#000000',
            2: {
              rest: '#000000',
              hover: '#000000',
              pressed: '#000000',
              selected: '#000000',
            },
          },
          accessible: {
            rest: '#bdbdbd',
            hover: '#d1d1d1',
            pressed: '#e0e0e0',
            selected: '#75bcff',
          },
          disabled: '#333333',
          invertedDisabled: '#00000066',
          focus: {
            1: '#000000',
            2: '#ffffff',
          },
        },
        subtleBackground: {
          rest: '#00000000',
          hover: '#333333',
          pressed: '#424242',
          selected: '#383838',
          lightAlpha: {
            hover: '#0000004d',
            pressed: '#00000080',
            selected: '#00000000',
          },
          inverted: {
            rest: '#00000000',
            hover: '#ffffff1a',
            pressed: '#ffffff4d',
            selected: '#ffffff33',
          },
        },
        transparentBackground: {
          rest: '#00000000',
          hover: '#00000000',
          pressed: '#00000000',
          selected: '#00000000',
        },
        overlay: {
          background: '#ffffff66',
          scrollbar: '#ffffff80',
        },
        stencil: {
          1: '#333333',
          2: '#242424',
        },
      },
    },
    brand: {
      light: {
        background: {
          rest: '#0060ca',
          hover: '#0052b3',
          pressed: '#002a6d',
          selected: '#00449b',
          static: { rest: '#0060ca' },
          2: {
            rest: '#d9f1ff',
            hover: '#b9e0ff',
            pressed: '#75bcff'
          },
          inverted: {
            rest: '#ffffff',
            hover: '#d9f1ff',
            pressed: '#98ceff',
            selected: '#b9e0ff'
          },
          compound: {
            rest: '#0060ca',
            hover: '#0052b3',
            pressed: '#00449b'
          }
        },
        foreground: {
          1: { rest: '#0060ca' },
          2: {
            rest: '#0052b3',
            hover: '#00449b',
            pressed: '#001d58'
          },
          link: {
            rest: '#0052b3',
            hover: '#00449b',
            pressed: '#002a6d',
            selected: '#0052b3'
          },
          inverted: {
            rest: '#0084f1',
            hover: '#2496ff',
            pressed: '#0084f1'
          },
          onLight: {
            rest: '#0060ca',
            hover: '#0052b3',
            pressed: '#003784',
            selected: '#00449b'
          },
          compound1: {
            rest: '#0060ca',
            hover: '#0052b3',
            pressed: '#00449b'
          }
        },
        stroke: {
          1: { rest: '#0060ca' },
          2: {
            rest: '#98ceff',
            hover: '#4da9ff',
            pressed: '#0060ca',
            contrast: { rest: '#98ceff' }
          },
          compound: {
            rest: '#0060ca',
            hover: '#0052b3',
            pressed: '#00449b'
          }
        }
      },
      dark: {
        background: {
          rest: '#75bcff',
          hover: '#98ceff',
          pressed: '#d9f1ff',
          selected: '#b9e0ff',
          static: { rest: '#75bcff' },
          2: {
            rest: '#002a6d',
            hover: '#003784',
            pressed: '#0052b3'
          },
          inverted: {
            rest: '#1f1f1f',
            hover: '#002a6d',
            pressed: '#0052b3',
            selected: '#003784'
          },
          compound: {
            rest: '#75bcff',
            hover: '#98ceff',
            pressed: '#b9e0ff'
          }
        },
        foreground: {
          1: { rest: '#75bcff' },
          2: {
            rest: '#98ceff',
            hover: '#b9e0ff',
            pressed: '#d9f1ff'
          },
          link: {
            rest: '#98ceff',
            hover: '#b9e0ff',
            pressed: '#d9f1ff',
            selected: '#98ceff'
          },
          inverted: {
            rest: '#0060ca',
            hover: '#0052b3',
            pressed: '#0060ca'
          },
          onLight: {
            rest: '#75bcff',
            hover: '#98ceff',
            pressed: '#d9f1ff',
            selected: '#b9e0ff'
          },
          compound1: {
            rest: '#75bcff',
            hover: '#98ceff',
            pressed: '#b9e0ff'
          }
        },
        stroke: {
          1: { rest: '#75bcff' },
          2: {
            rest: '#0052b3',
            hover: '#0060ca',
            pressed: '#75bcff',
            contrast: { rest: '#0052b3' }
          },
          compound: {
            rest: '#75bcff',
            hover: '#98ceff',
            pressed: '#b9e0ff'
          }
        }
      }
    },
    error: {
      light: {
        danger: {
          background1: { rest: '#fdf3f4' },
          background3: { rest: '#c50f1f' },
          foreground1: { rest: '#b10e1c' },
          foreground3: { rest: '#c50f1f' },
          border1: { rest: '#eeacb2' },
          border2: { rest: '#960b18' }
        },
        severe: {
          background1: { rest: '#fdf6f3' },
          background3: { rest: '#de590b' },
          foreground1: { rest: '#c43501' },
          foreground2: { rest: '#960b18' },
          foreground3: { rest: '#da3b01' },
          border1: { rest: '#f4bfab' },
          border2: { rest: '#6e0811' }
        },
        success: {
          background1: { rest: '#f1faf1' },
          background3: { rest: '#107c10' },
          foreground1: { rest: '#0e700e' },
          foreground3: { rest: '#107c10' },
          foregroundInverted: { rest: '#359b35' },
          border1: { rest: '#9fd89f' },
          border2: { rest: '#107c10' }
        },
        warning: {
          background1: { rest: '#fff9f5' },
          background3: { rest: '#eaa300' },
          foreground1: { rest: '#de590b' },
          foreground2: { rest: '#8a3707' },
          border1: { rest: '#fdcfb4' }
        },
        presence: {
          oof: { rest: '#c239b3' },
          away: { rest: '#eaa300' },
          available: { rest: '#13a10e' }
        }
      },
      dark: {
        danger: {
          background1: { rest: '#3b1113' },
          background3: { rest: '#c50f1f' },
          foreground1: { rest: '#ff99a1' },
          foreground3: { rest: '#ff99a1' },
          border1: { rest: '#c50f1f' },
          border2: { rest: '#ff99a1' }
        },
        severe: {
          background1: { rest: '#3b1409' },
          background3: { rest: '#de590b' },
          foreground1: { rest: '#ffaa80' },
          foreground2: { rest: '#ff99a1' },
          foreground3: { rest: '#ffaa80' },
          border1: { rest: '#de590b' },
          border2: { rest: '#ffaa80' }
        },
        success: {
          background1: { rest: '#0d2b0d' },
          background3: { rest: '#107c10' },
          foreground1: { rest: '#92cc92' },
          foreground3: { rest: '#92cc92' },
          foregroundInverted: { rest: '#359b35' },
          border1: { rest: '#107c10' },
          border2: { rest: '#92cc92' }
        },
        warning: {
          background1: { rest: '#3b2209' },
          background3: { rest: '#eaa300' },
          foreground1: { rest: '#ffaa80' },
          foreground2: { rest: '#ffaa80' },
          border1: { rest: '#eaa300' }
        },
        presence: {
          oof: { rest: '#c239b3' },
          away: { rest: '#eaa300' },
          available: { rest: '#13a10e' }
        }
      }
    },
    dataViz: {
      light: {
        slot1: '#4f6bed', // Blue
        slot2: '#689920', // Green
        slot3: '#3a96dd', // Light Blue
        slot4: '#8764b8', // Purple
        slot5: '#ba58c9', // Pink
        slot6: '#ad006a', // Magenta
        slot7: '#d06228', // Orange
        slot8: '#ae8c00'  // Gold
      },
      dark: {
        slot1: '#7b91ff', // Blue
        slot2: '#8abe32', // Green
        slot3: '#61b1ee', // Light Blue
        slot4: '#a98ed9', // Purple
        slot5: '#d17fe0', // Pink
        slot6: '#e01b91', // Magenta
        slot7: '#e88951', // Orange
        slot8: '#d4af37'  // Gold
      }
    }
  },
  typography: {
    fontFamily: 'Segoe UI',
    caption2: {
      regular: {
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: 400
      },
      strong: {
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: 600
      }
    },
    caption1: {
      regular: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400
      },
      strong: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600
      },
      stronger: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 700
      }
    },
    body1: {
      regular: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400
      },
      strong: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 600
      },
      stronger: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 700
      }
    },
    body2: {
      regular: {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 400
      }
    },
    subtitle2: {
      regular: {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 600
      },
      stronger: {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 700
      }
    },
    subtitle1: {
      regular: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 600
      }
    },
    title3: {
      regular: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 600
      }
    },
    title2: {
      regular: {
        fontSize: '28px',
        lineHeight: '36px',
        fontWeight: 600
      }
    },
    title1: {
      regular: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 600
      }
    },
    largeTitle: {
      regular: {
        fontSize: '40px',
        lineHeight: '52px',
        fontWeight: 600
      }
    },
    display: {
      regular: {
        fontSize: '68px',
        lineHeight: '92px',
        fontWeight: 600
      }
    }
  },
  spacing: {
    vertical: {
      none: '0',
      xxs: '2px',
      xs: '4px',
      sNudge: '6px',
      s: '8px',
      mNudge: '10px',
      m: '12px',
      l: '16px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px'
    },
    horizontal: {
      none: '0',
      xxs: '2px',
      xs: '4px',
      sNudge: '6px',
      s: '8px',
      mNudge: '10px',
      m: '12px',
      l: '16px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px'
    }
  },
  borderRadius: {
    none: '0',
    small: '2px',
    medium: '4px',
    large: '6px',
    xLarge: '8px',
    circular: '10000px',
    page: '32px',
  },
  shadows: {
    light: {
      2: {
        primary: {
          x: '0px',
          y: '1px',
          blur: '2px',
          color: '#000000',
          alpha: 0.14
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.12
        }
      },
      4: {
        primary: {
          x: '0px',
          y: '2px',
          blur: '4px',
          color: '#000000',
          alpha: 0.14
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.12
        }
      },
      8: {
        primary: {
          x: '0px',
          y: '4px',
          blur: '8px',
          color: '#000000',
          alpha: 0.14
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.12
        }
      },
      16: {
        primary: {
          x: '0px',
          y: '8px',
          blur: '16px',
          color: '#000000',
          alpha: 0.14
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.12
        }
      },
      28: {
        primary: {
          x: '0px',
          y: '14px',
          blur: '28px',
          color: '#000000',
          alpha: 0.24
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '8px',
          color: '#000000',
          alpha: 0.20
        }
      },
      64: {
        primary: {
          x: '0px',
          y: '32px',
          blur: '64px',
          color: '#000000',
          alpha: 0.24
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '8px',
          color: '#000000',
          alpha: 0.20
        }
      },
      brand: {
        2: {
          primary: {
            x: '0px',
            y: '1px',
            blur: '2px',
            color: '#000000',
            alpha: 0.25
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.30
          }
        },
        4: {
          primary: {
            x: '0px',
            y: '2px',
            blur: '4px',
            color: '#000000',
            alpha: 0.25
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.30
          }
        },
        8: {
          primary: {
            x: '0px',
            y: '4px',
            blur: '8px',
            color: '#000000',
            alpha: 0.25
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.30
          }
        },
        16: {
          primary: {
            x: '0px',
            y: '8px',
            blur: '16px',
            color: '#000000',
            alpha: 0.25
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.30
          }
        },
        28: {
          primary: {
            x: '0px',
            y: '14px',
            blur: '28px',
            color: '#000000',
            alpha: 0.25
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '8px',
            color: '#000000',
            alpha: 0.30
          }
        },
        64: {
          primary: {
            x: '0px',
            y: '32px',
            blur: '64px',
            color: '#000000',
            alpha: 0.25
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '8px',
            color: '#000000',
            alpha: 0.30
          }
        }
      }
    },
    dark: {
      2: {
        primary: {
          x: '0px',
          y: '1px',
          blur: '2px',
          color: '#000000',
          alpha: 0.25
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.20
        }
      },
      4: {
        primary: {
          x: '0px',
          y: '2px',
          blur: '4px',
          color: '#000000',
          alpha: 0.25
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.20
        }
      },
      8: {
        primary: {
          x: '0px',
          y: '4px',
          blur: '8px',
          color: '#000000',
          alpha: 0.25
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.20
        }
      },
      16: {
        primary: {
          x: '0px',
          y: '8px',
          blur: '16px',
          color: '#000000',
          alpha: 0.25
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '2px',
          color: '#000000',
          alpha: 0.20
        }
      },
      28: {
        primary: {
          x: '0px',
          y: '14px',
          blur: '28px',
          color: '#000000',
          alpha: 0.35
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '8px',
          color: '#000000',
          alpha: 0.30
        }
      },
      64: {
        primary: {
          x: '0px',
          y: '32px',
          blur: '64px',
          color: '#000000',
          alpha: 0.35
        },
        secondary: {
          x: '0px',
          y: '0px',
          blur: '8px',
          color: '#000000',
          alpha: 0.30
        }
      },
      brand: {
        2: {
          primary: {
            x: '0px',
            y: '1px',
            blur: '2px',
            color: '#000000',
            alpha: 0.35
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.40
          }
        },
        4: {
          primary: {
            x: '0px',
            y: '2px',
            blur: '4px',
            color: '#000000',
            alpha: 0.35
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.40
          }
        },
        8: {
          primary: {
            x: '0px',
            y: '4px',
            blur: '8px',
            color: '#000000',
            alpha: 0.35
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.40
          }
        },
        16: {
          primary: {
            x: '0px',
            y: '8px',
            blur: '16px',
            color: '#000000',
            alpha: 0.35
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '2px',
            color: '#000000',
            alpha: 0.40
          }
        },
        28: {
          primary: {
            x: '0px',
            y: '14px',
            blur: '28px',
            color: '#000000',
            alpha: 0.35
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '8px',
            color: '#000000',
            alpha: 0.40
          }
        },
        64: {
          primary: {
            x: '0px',
            y: '32px',
            blur: '64px',
            color: '#000000',
            alpha: 0.35
          },
          secondary: {
            x: '0px',
            y: '0px',
            blur: '8px',
            color: '#000000',
            alpha: 0.40
          }
        }
      }
    }
  }
}; 