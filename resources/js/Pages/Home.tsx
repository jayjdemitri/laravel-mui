import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';
import { Box, Container, Typography } from '@mui/material';

const Home = () => {
    const title = 'Home';
    return (
        <EmptyLayout>
            <Head title={title} />
            <Container maxWidth='lg'>
                <Box textAlign='center' padding={12}>
                    <Typography variant="h1">
                        {title} Page
                    </Typography>
                </Box>
            </Container>
        </EmptyLayout>
    )
}

export default Home;