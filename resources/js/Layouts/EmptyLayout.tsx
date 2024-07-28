import ThemeContextProvider from "@/Context/ThemeContext";
import { PropsWithChildren } from "react";

const EmptyLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
};

export default EmptyLayout