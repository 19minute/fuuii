import { createTheme, Theme } from '@mui/material/styles';

export interface ThemeConfig {
  id: string;
  name: string;
  muiTheme: Theme;
}

// Create MUI themes
const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        },
      },
    },
  },
});

const colorfulTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#0d47a1',
    },
    background: {
      default: '#f0f7ff',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(106, 27, 154, 0.15)',
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(45deg, #6a1b9a 30%, #9c27b0 90%)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: 'rgba(106, 27, 154, 0.08)',
          },
        },
      },
    },
  },
});

// Brutalism theme
const brutalismTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff0000', // Bold red
    },
    secondary: {
      main: '#000000', // Black
    },
    background: {
      default: '#ffffff', // White
      paper: '#ffff00', // Yellow
    },
    error: {
      main: '#0000ff', // Bold blue
    },
  },
  typography: {
    fontFamily: '"Courier New", Courier, monospace',
    h1: {
      textTransform: 'uppercase',
    },
    h2: {
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '3px solid black',
          boxShadow: '5px 5px 0px black',
          textTransform: 'uppercase',
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            boxShadow: '7px 7px 0px black',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '3px solid black',
          boxShadow: '8px 8px 0px black',
          overflow: 'visible',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

// Glassmorphism theme
const glassmorphismTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(99, 102, 241, 0.9)', // Translucent indigo
    },
    secondary: {
      main: 'rgba(217, 70, 239, 0.9)', // Translucent purple
    },
    background: {
      default: 'rgba(244, 247, 254, 1)', // Light blue-gray
      paper: 'rgba(255, 255, 255, 0.7)', // Translucent white
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.17)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          textTransform: 'none',
          backdropFilter: 'blur(5px)',
          background: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 12px 0 rgba(31, 38, 135, 0.15)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 12px 0 rgba(31, 38, 135, 0.15)',
        },
      },
    },
  },
});

// Dark Neon theme
const darkNeonTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0ff', // Cyan
    },
    secondary: {
      main: '#f0f', // Magenta
    },
    background: {
      default: '#0a0a14', // Very dark blue-gray
      paper: '#141428', // Dark blue-gray
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3cc',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(20, 20, 40, 0.8)',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 10px rgba(0, 255, 255, 0.1)',
          borderRadius: 5,
          backdropFilter: 'blur(5px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(45deg, #00ffff 30%, #00ccff 90%)',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
          color: '#000',
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #f0f 30%, #c0f 90%)',
          boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
          color: '#000',
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 0, 255, 0.8)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 255, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 255, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0ff',
              boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
            },
          },
        },
      },
    },
  },
});

export const themes: ThemeConfig[] = [
  {
    id: 'default',
    name: 'Default',
    muiTheme: defaultTheme,
  },
  {
    id: 'dark',
    name: 'Dark',
    muiTheme: darkTheme,
  },
  {
    id: 'colorful',
    name: 'Colorful',
    muiTheme: colorfulTheme,
  },
  {
    id: 'brutalism',
    name: 'Brutalism',
    muiTheme: brutalismTheme,
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    muiTheme: glassmorphismTheme,
  },
  {
    id: 'darkneon',
    name: 'Dark Neon',
    muiTheme: darkNeonTheme,
  },
];