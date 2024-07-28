import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
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
    background: {
        default: '#1c0000',
        paper: '#1c0000',
    }
}

type ThemeContextType = {
    switchColorMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({ switchColorMode: () => { } });

function ThemeContextProvider({ children }: PropsWithChildren): ReactElement {

    // Either check local storage here and cast as const defaultMode to then assign here

    // const [mode, setMode] = useState<'light'|'dark'>(defaultMode)
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    // or we can assign after but then then means updating the state before its used which I guess could cause issues

    const switchColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode,
                ...(mode === 'light') ? lightTheme : darkTheme
            }
        }), [mode]
    )

    return (
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