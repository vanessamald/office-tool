import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Navigation () {
    const router = useRouter();

    const handleNavigation = (path: any) => {
        router.push(path);
    }

    return (
        <>
        <nav>
            <button onClick={() => handleNavigation('/users')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                All Users
            </button>
            <button onClick={()=> handleNavigation('/newUser')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add New User
            </button>
        </nav>
        </>
    )
} 