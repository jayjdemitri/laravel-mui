import ThemeSwitcher from '@/Components/ThemeSwitcher';
import EmptyLayout from '@/Layouts/EmptyLayout';
import { Head } from '@inertiajs/react';
import { Button } from '@mui/material';

const clearLocal = ()=>{
    console.log('Clearing local Storage')
    localStorage.clear()
}

const Welcome = () => {
    const title = 'Welcome';
    return (
        <EmptyLayout>
            <Head title={title} />
            {title} Page
            <ThemeSwitcher></ThemeSwitcher>
            <Button href={route('login')}>Login</Button>

            <Button onClick={clearLocal}>Clear LocalStorage</Button>
        </EmptyLayout>
    )
}

export default Welcome;