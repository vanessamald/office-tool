import clsx from 'clsx';
import { useState, useEffect } from 'react';

export default function AllUsers() {
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
    </>
  )
}