import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@mui/material';
const Home = () => {
    const title = 'Home';
    return (
        <EmptyLayout>
            <Head title={title} />
            {title} Page
            <br />
            <Link href="/">
                <Button variant="outlined">Home</Button>
            </Link>
        </EmptyLayout>
    )
}

export default Home;