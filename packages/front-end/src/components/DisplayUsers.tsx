import React, { useState } from 'react';
import Confirmation from "./Confirmation"

export default function DisplayUsers ({ user, handleDelete, handleEdit }) {
    const [ confirmationWindow, setConfirmationWindow ] = useState(false);



  const openConfirmDialog = () => {
    setConfirmationWindow(true);
    console.log('clicked')
  };

  const closeConfirmDialog = () => {
    setConfirmationWindow(false);
  };
    const confirmDelete = (event) => {
        handleDelete(event, user.id);
        closeConfirmDialog();
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

                        //onClick={(event) => handleDelete(event, user.id)} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Delete
                    </button>
                    {confirmationWindow && (
                        <div className=''>
                            <Confirmation handleDelete={handleDelete} user={user} closeConfirmDialog={closeConfirmDialog}/>
                            {/*
                            <p>Are you sure you want to delete the user?</p>
                            <button 
                                className='bg-green-500 hover:bg-green-700'
                                onClick={confirmDelete}
                            >
                                Yes
                            </button>
                            <button 
                                className='bg-red-500 hover:bg-red-700'
                                onClick={closeConfirmDialog}
                            >
                                Cancel
                            </button>
                    */}
                        </div>
                        

               )}
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
        
            
        </>
    )
}