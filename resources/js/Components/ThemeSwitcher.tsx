import { ThemeContext } from "@/Context/ThemeContext";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";

const ThemeSwitcher = () => {

    const theme = useTheme();
    const { switchColorMode } = useContext(ThemeContext);

    return (
        <>
            <IconButton
                onClick={switchColorMode}
                sx={{
                    p: 1
                }}
                size="large"
                color="primary"
            >
                {theme.palette.mode === "dark" ? (
                    <LightModeOutlined />
                ) : (
                    <DarkModeOutlined />
                )}
            </IconButton>
        </>
    )
};

export default ThemeSwitcher