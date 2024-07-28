import ThemeContextProvider from "@/Context/ThemeContext";
import { PropsWithChildren } from "react";

const AuthenticatedLayout = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
};

export default AuthenticatedLayout