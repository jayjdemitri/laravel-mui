import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';
import { Box, Button, Container } from '@mui/material';

const clearLocal = () => {
    console.log('Clearing local Storage')
    localStorage.clear()
}

const Welcome = () => {
    const title = 'Welcome';
    return (
        <EmptyLayout>
            <Container>
                <Box>
                    <Head title={title} />
                    {title} Page

                    <Button href={route('login')}>Login</Button>
                    <Button onClick={clearLocal}>Clear LocalStorage</Button>

                </Box>
            </Container>
        </EmptyLayout>
    )
}

export default Welcome;