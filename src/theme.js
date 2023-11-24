import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
//import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },

  colorSchemes: {
    /*light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }*/

  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#c8d6e5',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#01a3a4'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          //color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          //color: theme.palette.primary.main,
          fontSize: '0.875rem',
          //'.MuiOutlinedInput-notchedOutline': {
          //  borderColor: theme.palette.primary.light
          //},
          //'&:hover': {
          //  '.MuiOutlinedInput-notchedOutline': {
          //    borderColor: theme.palette.primary.main
          //  }
          //},
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '2px !important' },
          '&.Mui-focused fieldset': { borderWidth: '2px !important' }
        })
      }
    }
  }
// ...other properties
})

export default theme
