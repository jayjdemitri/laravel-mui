import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import EmptyLayout from '@/Layouts/EmptyLayout';

export default function Welcome() {

    return (
        <EmptyLayout>
            <Head title="Welcome" />
            <div>Welcome Page Content</div>
        </EmptyLayout>

    );
}
