import NavBar, { Offset } from '@/Components/Navigation/NavBar';
import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';
import { Box, Container, Typography } from '@mui/material';

const Login = () => {
    const title = 'Login';
    return (
        <EmptyLayout>
            <Head title={title} />
            <NavBar hasBack />
            <Offset />
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

export default Login;