import ThemeContextProvider from "@/Context/ThemeContext";
import { PropsWithChildren } from "react";

const StickyFooterLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
};

export default StickyFooterLayout