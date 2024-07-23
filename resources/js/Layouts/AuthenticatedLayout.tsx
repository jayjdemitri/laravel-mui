import { PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

export default function Authenticated({ children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {

    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>{children}</main>
        </ThemeProvider>

    </>
    );
}
