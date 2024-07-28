import ResponsiveAppBar from "@/Components/Navigation/ResponsiveAppBar";
import ThemeContextProvider from "@/Context/ThemeContext";
import { PropsWithChildren } from "react";

const EmptyLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            <ResponsiveAppBar>
                {children}
            </ResponsiveAppBar>
        </ThemeContextProvider>
    );
};

export default EmptyLayout