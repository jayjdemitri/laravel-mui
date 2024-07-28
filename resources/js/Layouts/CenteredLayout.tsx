import ThemeContextProvider from "@/Context/ThemeContext";
import { PropsWithChildren } from "react";

const CenteredLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
};

export default CenteredLayout