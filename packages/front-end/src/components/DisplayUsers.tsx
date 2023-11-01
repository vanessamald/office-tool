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
                <td className='p-2 text-black'>{user.id}</td>
                <td className='p-2 text-black'>{user.firstName}</td>
                <td className='p-2 text-black'>{user.lastName}</td>
                {/*<td className='p-2'>{user.email}</td>*/}
                <td>
                    <button onClick={toggleDropdown} id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-light focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                    {isDropdownVisible && ( 
                    <>
                    <div>
                        <div  id="dropdownDotsHorizontal" className="w-30 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute" >
                            <ul className="py-2 text-sm text-black dark:text-gray-200 " aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li className='dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex flex-row items-center'>
                                    <button 
                                        onClick={openConfirmDialog}
                                        className="flex items-center space-between px-4 py-2 text-right"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        Delete
                                    </button>
                                </li>
                                <li className='dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex flex-row items-center'>
                                    <button 
                                        onClick={(event) => handleEdit(event, user.id)}
                                        className="flex items-center px-4 py-2 text-right"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                        </svg>
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