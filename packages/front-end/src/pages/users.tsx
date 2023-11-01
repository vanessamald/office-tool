import clsx from 'clsx';
import { useState, useEffect } from 'react';
import SearchBar from './search';
import { fetchUserData } from '../utilities/api.js';
import EditForm from '../components/editUser';
import DisplayUsers from '../components/DisplayUsers';
import { handleEdit, handleDelete } from '../utilities/api';
import { sortingById, sortingByEmail, sortingByFirstName, sortingByLastName  } from '../utilities/sorting';
import { useRouter } from 'next/router';

export default function AllUsers({  }) {
    /*
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
      console.log('TOGGLE BUTTON')
    };
    */

    const router = useRouter();
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
    
    // handle sorting from utilities
    const handleSortingByLastName = () => {
        sortingByLastName(users, setUsers);
      };

    const handleSortingById = () => {
        sortingById(users, setUsers);
    };

    const handleSortingByFirstName = () => {
        sortingByFirstName(users, setUsers);
      };

    const handleSortingByEmail = () => {
        sortingByEmail(users, setUsers);
    };

    // fetch user data from utilities 
    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            setUsers(data);
        }
        fetchData();
    }, []);

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
        <div className='p-4 overflow-x-auto'>
            <table className='table-auto w-full'>
                <thead>
                    <tr className='border-t'>
                        <th className='p-2 text-left'>
                            <button onClick={handleSortingById}>Id</button>
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
                    <DisplayUsers user={user} key={user.id} handleEdit={handleEdit} />
                ))}
            </table>
           {showModal ? ( <EditForm user={selectedUser} handleClose={handleClose} />  ) : null}
        </div>
    </>
  )
}