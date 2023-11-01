import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Navigation () {
    const router = useRouter();

    const handleNavigation = (path: any) => {
        router.push(path);
    }

    return (
        <>
            <nav className='h-full'>
                <div className='h-full flex flex-col text-center space-y-4 justify-center px-10'>
                    <button onClick={() => handleNavigation('/users')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 rounded-lg hover:content-around">
                        All Users
                    </button>
                    <button onClick={()=> handleNavigation('/newUser')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 rounded-lg hover:content-around">
                        Add New User
                    </button>
                </div>
            </nav>
        </>
    )
} 