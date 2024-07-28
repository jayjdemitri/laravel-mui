import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';

const Welcome = () => {
    const title = 'Welcome';
    return (
        <EmptyLayout>
            <Head title={title} />
            {title} Page
        </EmptyLayout>
    )
}

export default Welcome;