import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';

const Dashboard = () => {
    const title = 'Dashboard';
    return (
        <EmptyLayout>
            <Head title={title} />
            {title} Page
        </EmptyLayout>
    )
}

export default Dashboard;