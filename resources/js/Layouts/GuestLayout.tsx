import ThemeContextProvider from "@/Context/ThemeContext";
import { PropsWithChildren } from "react";

const GuestLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
        {children}
    </ThemeContextProvider>
    );
};

export default GuestLayout