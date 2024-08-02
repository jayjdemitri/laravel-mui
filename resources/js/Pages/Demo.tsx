import { DemoButton } from '@/Features/Demo';
import CenteredLayout from '@/Layouts/CenteredLayout';
import { Head } from '@inertiajs/react';
import { Box, Typography } from '@mui/material';

const Demo = () => {
    const title = 'Demo';
    return (
        <CenteredLayout>
            <Box textAlign='center'>
                <Head title={title} />
                <Typography variant='h1' sx={{marginBottom: 3}}>{title} Page</Typography>
                <DemoButton />
            </Box>
        </CenteredLayout>
    )
}

export default Demo;