import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';

const Login = () => {
    const title = 'Login';
    return (
        <EmptyLayout>
            <Head title={title} />
            {title} Page
        </EmptyLayout>
    )
}

export default Login;