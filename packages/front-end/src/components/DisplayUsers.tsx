import React, { useState } from 'react';
import Confirmation from "./Confirmation"
import { useRouter } from 'next/router';

export default function DisplayUsers ({ user }) {// handleEdit }) {
    //console.log(user);

    const router = useRouter();

    const [ confirmationWindow, setConfirmationWindow ] = useState(false);
    const [ dropdown, setDropDown ] = useState(false);

    // open confirmation window
    const openConfirmDialog = () => {
        setConfirmationWindow(true);
        console.log('clicked')
    };

    // close confirmation window
    const closeConfirmDialog = () => {
        setConfirmationWindow(false);
    };

    const handleEdit = () => {
        router.push(`/edit/${user.id}`);
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
                    <button 
                        onClick={openConfirmDialog}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Delete
                    </button>
                    {confirmationWindow && (
                        <div className=''>
                            <Confirmation user={user} closeConfirmDialog={closeConfirmDialog} />
                        </div>
                    )}
                </td>
                <td>
                    <button 
                        //onClick={() => handleEdit(user)}
                        onClick={handleEdit}
                        
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Edit
                    </button>
                </td>       
            </tr>
        </tbody>   
        </>
    )
}