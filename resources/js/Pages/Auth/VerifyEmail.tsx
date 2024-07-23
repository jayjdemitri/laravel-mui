import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function VerifyEmail({ status }: { status?: string }) {

    return (
        <GuestLayout>
            <Head title="Email Verification" />
            <p>Verify Email</p>
        </GuestLayout>
    );
}
