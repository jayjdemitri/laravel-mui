import theme from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>{children}</main>
            </ThemeProvider>

        </>
    );
}
