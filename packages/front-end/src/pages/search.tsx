import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../utilities/api.js';
import DisplayUsers from '../components/DisplayUsers';
import EditForm from '../components/editUser';
import { handleDelete } from '../utilities/api.js';

export default function SearchBar ({ }) {
    const [ users, setUsers ] = useState([]);
    const [ searchUser, setSearchUser ] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    // selected user to edit
    const [ selectedUser, setSelectedUser ] = useState(null);
    // open/close modal edit modal
    const [showModal, setShowModal] = useState(false);
   
    // fetch user data from utilities
    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            setUsers(data);
            }
            fetchData();
        }, []);

    // filter users by search parameters
    const handleSearch = async () => {
        console.log(searchUser);

        // split search parameters 
        const splitSearchUser = searchUser.toLowerCase().split(' ');
        
        const filtered = users.filter((user)=> {
            // variable to track if search values match a user
            let userSearch = true;
            
            // loop through each search parameter and find matches
            splitSearchUser.forEach((searchParam) => {
                const firstNameSearch = user.firstName.toLowerCase().includes(searchParam);
                const emailSearch = user.email.toLowerCase().includes(searchParam);
                const lastName = user.lastName.toLowerCase().includes(searchParam);
                
                // if search params return no matches set to false
                if (!firstNameSearch && !emailSearch && !lastName) {
                    userSearch = false;
                }
            })
            // return true if any search params matches
            return userSearch;
        })
        setFilteredUsers(filtered);
        console.log(filtered);
    }

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
        <div>
            <form className=''>   
                <label 
                    htmlFor="default-search" 
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        type="search" 
                        id="default-search" 
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search User by Name and Email" 
                        onChange={(e)=> setSearchUser(e.target.value)}
                        required
                    />
                    <button onClick={handleSearch} type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            {filteredUsers.length > 0 ?
            <div>
                <table className='table-auto w-full'>
                    <thead>
                        <tr className='border-t'>
                            <th className='p-2 text-left'>User Id</th>
                            <th className='p-2 text-left'>First Name</th>
                            <th className='p-2 text-left'>Last Name</th>
                            <th className='p-2 text-left'>Email</th>
                        </tr>
                    </thead>
                    {filteredUsers.map((user) => (
                        <DisplayUsers handleEdit={handleEdit} user={user} key={user.id}/>           
                    ))}
                </table>
                
                {showModal ? ( <EditForm user={selectedUser} handleClose={handleClose} />  ) : null} 
            </div>
            : 'No users found' }
        </div>
        </>
    )
}