import clsx from 'clsx';
import { useState, useEffect } from 'react';
import SearchBar from './search';
import { fetchUserData } from '../utilities/api.js';
import EditForm from '../components/editUser';

export default function AllUsers({  }) {
    // all users
    const [ users, setUsers ] = useState([]);
    const [searchUser, setSearchUser] = useState('');

    // open/close modal
    const [showModal, setShowModal] = useState(false);

    // selected user to edit
    const [ selectedUser, setSelectedUser ] = useState(null);

    // fetch user data from utilities 
    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            setUsers(data);
        }
        fetchData();
    }, []);

    // handle deleting a user
    const  handleDelete = async (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log('DELETE', id)
        const response = await fetch(`http://localhost:50000/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    }

    // handle edit form
    const handleEdit = async (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        // Find the user with the given ID
        const userToEdit = users.find((user) => user.id === id);
        if (userToEdit) {
            setSelectedUser(userToEdit);
            setShowModal(true);
        }
    }

    // handle closing edit form
    const handleClose = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal(false);
    }
    
    // handle sorting by id 
    const handleSortingById = () => {
        console.log('BUTTON CLICKED')
        // copy of the users array
        const sortedUsersById = [...users];
        // sort users by id
        sortedUsersById.sort((a, b)=>  a.id - b.id)

        // update the user array
        setUsers(sortedUsersById);
        console.log(sortedUsersById)
    };

    // handle sorting by name 
    const handleSortingByFirstName = () => {
        // make a copy of the users array
        const sortedUsers = [...users];
        // sort users by first name
        sortedUsers.sort((a, b)=> {
            if (a.firstName < b.firstName ) {
                return -1
            }
            if (a.firstName > b.firstName) {
                return 1
            } else {
                return 0;
            } 
        })
        // update the user array
        setUsers(sortedUsers);
        console.log(sortedUsers);
    }

    const handleSortingByLastName = () => {
        const sortedUsers = [...users];
        sortedUsers.sort((a, b) => {
             // sort users by last name
             if (a.lastName > b.lastName) {
                return 1;
            } else if (a.lastName < b.lastName) {
                return -1;
            } else {
                return 0;
            }  
        })
        setUsers(sortedUsers)
    }

    const handleSortingByEmail = () => {
        console.log('Sorting by Email')
        const sortedUserByEmail = [...users];
        sortedUserByEmail.sort((a, b) => {
            if (a.email < b.email) {
                return -1
            }
            if (a.email < b.email) {
                return 1
            }  
        })
        // update the user array
        setUsers(sortedUserByEmail);
    }

    return (
        <>
            <div className='p-4 overflow-x-auto'>
            {/* Display ALL USERS, if no users send message 'No users available' */}
            {users.length > 0 ? (
            <table className='table-auto w-full'>
                <thead>
                    <tr className='border-t'>
                        <th className='p-2 text-left'>
                            <button onClick={handleSortingById}>User Id</button>
                        </th>
                        <th className='p-2 text-left'>
                            <button onClick={handleSortingByFirstName}>First Name</button>
                        </th>
                        <th className='p-2 text-left'>
                            <button onClick={handleSortingByLastName}>Last Name</button>
                        </th>
                        <th className='p-2 text-left'>
                            <button onClick={handleSortingByEmail}>Email</button>
                        </th>
                    </tr>
                </thead>
                {users.map((user)=> (
                <tbody key={user.id}>
                    <tr>
                        <td className='p-2'>{user.id}</td>
                        <td className='p-2'>{user.firstName}</td>
                        <td className='p-2'>{user.lastName}</td>
                        <td className='p-2'>{user.email}</td>
                        <div className='flex space-x-2'>
                        <td>
                            <button 
                                onClick={(event) => handleDelete(event, user.id)} 
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Delete
                            </button>
                        </td>
                        <td>
                            <button 
                                onClick={(event) => handleEdit(event, user.id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Edit
                            </button>
                        </td>
                        </div>
                        
                    </tr>
                </tbody>
                ))}
            </table>
            ) : (
            <p>No users available.</p>
            )}
            {showModal ? ( <EditForm user={selectedUser} handleClose={handleClose} />  ) : null}
        </div>
    </>
  )
}
//onClose={() => setShowModal(false)}