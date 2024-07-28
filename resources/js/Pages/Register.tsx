import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';

const Register = () => {
    const title = 'Register';
    return (
        <EmptyLayout>
            <Head title={title} />
            {title} Page
        </EmptyLayout>
    )
}

export default Register;