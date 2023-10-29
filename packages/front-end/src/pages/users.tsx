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