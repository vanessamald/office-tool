import React, { useState } from 'react';
import Confirmation from "./Confirmation"

export default function DisplayUsers ({ user, handleEdit }) {
    // state for dropdown visibility
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    // state for confirmation window
    const [ confirmationWindow, setConfirmationWindow ] = useState(false);

    // handle toggle dropdown
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // open confirmation window
    const openConfirmDialog = () => {
        setConfirmationWindow(true);
        console.log('clicked')
    };

    // close confirmation window
    const closeConfirmDialog = () => {
        setConfirmationWindow(false);
    };

    return (
        <>
        <tbody key={user.id}>
            <tr>
                <td className='p-2'>{user.id}</td>
                <td className='p-2'>{user.firstName}</td>
                <td className='p-2'>{user.lastName}</td>
                <td className='p-2'>{user.email}</td>
                <td>
                    <button onClick={toggleDropdown} id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                    {isDropdownVisible && ( 
                    <>
                    <div>
                        <div  id="dropdownDotsHorizontal" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute" >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <button 
                                        onClick={openConfirmDialog}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Delete
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={(event) => handleEdit(event, user.id)}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Edit
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </>
                    )}
                    {confirmationWindow && (
                        <div className=''>
                            <Confirmation user={user} closeConfirmDialog={closeConfirmDialog} />
                        </div>
                    )}
                </td>          
            </tr>
        </tbody> 
     </>
)}