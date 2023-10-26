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
          {/* Display ALL USERS, if no users send message 'No users available' */}
          {users.length > 0 ? (
            <table className='table-auto'>
              <thead>
                  <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
              {users.map((user)=> (
                <tbody key={user.id}>
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </td>
                    <td>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                    </button>
                    </td>
                  </tr>
                </tbody>
                ))}
            </table>
            ) : (
            <p>No users available.</p>
            )}
        </div>
      </main>
    </>
  );
}