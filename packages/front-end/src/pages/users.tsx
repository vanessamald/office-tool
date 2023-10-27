import clsx from 'clsx';
import { useState, useEffect } from 'react';
import SearchBar from './search';
import { fetchUserData } from '../utilities/api.js';

export default function AllUsers() {
    
    const [ users, setUsers ] = useState([]);
    const [searchUser, setSearchUser] = useState('');

    // fetch user data from utilities 
    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            setUsers(data);
        }
        fetchData();
    }, []);

    const  handleDelete = async (id) => {
        console.log('DELETE', id)
        const response = await fetch(`http://localhost:50000/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        });
    }

    /*
    const handleEdit = async (id) => {
        const response = await fetch(`http://localhost:50000/users/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(newUserInfo)
        })
    }
    */

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
                            <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
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