import { useState, useEffect } from 'react';
import { fetchUserData } from '../utilities/api';
import EditForm from '../components/editUser';
import DisplayUsers from '../components/DisplayUsers';
import { sortingById, sortingByEmail, sortingByFirstName, sortingByLastName  } from '../utilities/sorting';

export default function AllUsers() {
    const [isOnScreen, setIsOnScreen] = useState(false);

    // all users
    const [ users, setUsers ] = useState([]);
    // open/close modal
    const [showModal, setShowModal] = useState(false);
    // selected user to edit
    const [ selectedUser, setSelectedUser ] = useState(null);

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
            setIsOnScreen(true);
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
        <div className='overflow-x-auto bg-blue'>
            <div className='pl-10 pr-10'>
            
            <table className='table-auto w-full'>
                <thead>
                    <tr className='border-t'>
                        <th className='p-2 text-left text-sky-500 text-lg underline hover:text-sky-700 font-bold sm:inline-block hidden hover:text-gray'>
                            <button onClick={handleSortingById} className='hover:text-gray'>Id</button>
                        </th>
                        <th className='p-2 text-left text-sky-500 text-lg underline hover:text-sky-700 font-bold'>
                            <button onClick={handleSortingByFirstName}>First Name</button>
                        </th>
                        <th className='p-2 text-left text-sky-500 text-lg underline hover:text-sky-700 font-bold'>
                            <button onClick={handleSortingByLastName}>Last Name</button>
                        </th>
                        <th className='p-2 text-left text-sky-500 text-lg underline hover:text-sky-700 font-bold sm:inline-block hidden'>
                            <button onClick={handleSortingByEmail}>Email</button>
                        </th>
                    </tr>
                </thead>
                {users.map((user)=> (
                    <DisplayUsers user={user} key={user.id} handleEdit={handleEdit}  />
                ))}
            </table>
            </div>
           {showModal ? ( <EditForm user={selectedUser} handleClose={handleClose} />  ) : null}
        </div>
    </>
  )
}