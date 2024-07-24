import { Head } from '@inertiajs/react';

const Welcome = () => {
    const title = 'Welcome';
    return (
        <>
            <Head title={title} />
            { title } Page
        </>
    )
}

export default Welcome;