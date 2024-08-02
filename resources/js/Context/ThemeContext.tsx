import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, StyledEngineProvider, CssBaseline, useMediaQuery } from "@mui/material";
import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useMemo,
    useState
} from "react"

// palette values for light mode
const lightTheme = {
    primary: red
}

// palette values for dark mode
const darkTheme = {
    primary: red,
    // background: {
    //     default: '#1c0000',
    //     paper: '#1c0000',
    // }
}

// Define our theme contect type
type ThemeContextType = {
    switchColorMode: () => void
}

// Define an exported context based on the theme context type
export const ThemeContext = createContext<ThemeContextType>({ switchColorMode: () => { } });

function ThemeContextProvider({ children }: PropsWithChildren): ReactElement {

    // Check for system default here as its a hook that cannot be placed in another
    const systemDefault = useMediaQuery('(prefers-color-scheme: dark)')

    // Create our mode based on react use state. mode can either be dark or light
    // Here we passed a function to work out the default value as its not a case of a simple string
    const [mode, setMode] = useState<'light' | 'dark'>(() => {

        // First we check localstorage to see if a preset mode is found
        if (localStorage.getItem('mui-mode') !== null) {
            // We have to return a string based on the item if found as returning
            // the result directly could result in type null which isnt dark or light
            //console.log('LocalStorage Mode: ', localStorage.getItem('mui-mode'))
            return (localStorage.getItem('mui-mode') === 'dark') ? 'dark' : 'light'
        }

        // If we didnt find one in localstorage we move to our system default checking for an os preference
        if (systemDefault) {
            //console.log('SystemDefault Mode: ', (systemDefault === true) ? 'dark' : 'light')
            // If we find one we store in our localstorage
            localStorage.setItem('mui-mode', (systemDefault === true) ? 'dark' : 'light')
            // and return dark or light based on the result if found
            return (systemDefault === true) ? 'dark' : 'light'
        }

        // Else we just default to light
        return 'light'
    })

    const switchColorMode = () => {
        setMode((prevMode) => {
            // First we can work our what our updated mode will be based on the prev
            const newMode = (prevMode === 'light' ? 'dark' : 'light')
            // Then we can update our localstoage
            localStorage.setItem('mui-mode', newMode)
            // Before returning to update our state
            return newMode
        })
    }

    const theme = useMemo(
        // This will recompute our theme only when we see a change in mode
        () => createTheme({ palette: { mode, ...(mode === 'light') ? lightTheme : darkTheme } }), [mode]
    )

    return (
        // Not sure if this styledengineprovider is needed
        <StyledEngineProvider injectFirst>
            <ThemeContext.Provider value={{ switchColorMode }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </StyledEngineProvider>
    )
}

export default ThemeContextProvider;