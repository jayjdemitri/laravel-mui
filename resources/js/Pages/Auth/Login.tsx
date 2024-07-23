import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {

    return (
        <GuestLayout>
            <Head title="Log in" />
            <p>Login</p>
        </GuestLayout>
    );
}
