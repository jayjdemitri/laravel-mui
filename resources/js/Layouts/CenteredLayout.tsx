import ThemeContextProvider from "@/Context/ThemeContext";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

const CenteredLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,minHeight: '100dvh', }}>
                {children}
            </Box>
        </ThemeContextProvider>
    );
};

export default CenteredLayout