import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThemeSwitcher from '@/Components/ThemeSwitcher';
import { Paper } from '@mui/material';

export function DemoButton() {
    return (
        <Paper>
            <Stack spacing={2} direction="row" justifyContent='center'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button>
                    <ThemeSwitcher></ThemeSwitcher>
                    Switch Theme
                </Button>
                <Button
                    className="mt-4"
                    onClick={() => window.location.assign(window.location.origin)}
                >
                    Go Home
                </Button>
            </Stack>
        </Paper>
    )
}