import clsx from 'clsx';
import { useState, useEffect } from 'react';
import SearchBar from './search';
import { fetchUserData } from '../utilities/api.js';
import EditForm from '../components/editUser';
import DisplayUsers from '../components/DisplayUsers';
import { handleEdit, handleDelete } from '../utilities/api';

export default function AllUsers({  }) {
    // all users
    const [ users, setUsers ] = useState([]);

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

    
    const onDeleteSuccess = async (userId) => {
        try {
          await handleDelete(userId);
          // Remove the user from the list
          setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
          console.error('Failed to delete user:', error);
        }
      };
      

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

    // sort users by last name
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

    // sort users by email
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
                    <DisplayUsers user={user} key={user.id} handleEdit={handleEdit}/>
                ))}
            </table>
            {showModal ? ( <EditForm user={selectedUser} handleClose={handleClose} />  ) : null}
        </div>
    </>
  )
}