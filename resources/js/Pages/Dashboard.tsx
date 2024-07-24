import { Head } from '@inertiajs/react';

const Dashboard = () => {
    const title = 'Dashboard';
    return (
        <>
            <Head title={title} />
            { title } Page
        </>
    )
}

export default Dashboard;