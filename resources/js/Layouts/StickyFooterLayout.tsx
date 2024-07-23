import theme from "@/theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

export default function StickyFooter({ children }: PropsWithChildren) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>{children}</main>
            </ThemeProvider>

        </>
    );
}