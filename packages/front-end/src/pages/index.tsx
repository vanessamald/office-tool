import clsx from 'clsx';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  //const router = useRouter();

  // fetch user data
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('http://localhost:50000/users')
        if (response.ok) {
          const results = await response.json();
          setUsers(results.data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <>
      <Head>
        <title>Atllas Takehome</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>
      <main className={clsx('w-full h-full', inter.className)}>
        <h1 className='border-b border-neutral-300 px-4 py-2 text-2xl font-medium text-center'>
          User Management
        </h1>
        <div className='p-4'>
          <p className='text-neutral-500'>Hello, world.</p>
          {/* Display ALL USERS, if no users send message 'No users available' */}
          {users.length > 0 ? (
            <ul>
              {users.map((user)=> (
                <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
            ) : (
            <p>No users available.</p>
            )}
        </div>
      </main>
    </>
  );
}
