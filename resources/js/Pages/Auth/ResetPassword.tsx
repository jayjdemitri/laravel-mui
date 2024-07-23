import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function ResetPassword({ token, email }: { token: string, email: string }) {
    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <p>Reset Password</p>
        </GuestLayout>
    );
}
