import clsx from 'clsx';
import React, { useState } from 'react';
import Form from './Form';

export default function EditForm ({user, onClose})  {
  // status and error message 
  const [ status, setStatus ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const [ editedUser, setEditedUser ] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    adminNotes: ''
  });

  // handle onChange event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({
      ...editedUser,
      [event.target.id]: event.target.value
    })
    console.log(editedUser);
  }

  // handle submit form
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // prevent page from reloading
    event.preventDefault();
    // reset form
    //event.target.reset();
  
  const response = await fetch(`http://localhost:50000/users/update/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
      body: JSON.stringify(editedUser),
  });
      // if response ok set response
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setStatus(data.message); 
      } else {
        // set error response
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        setErrorMessage(errorData.message);
        }
    }
  
  return (
        <>
          <div className='absolute'>
            <div className="relative p-6 flex-auto">
              <Form handleChange={handleChange} submitForm={submitForm} user={user}/>
            </div>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
          </div>
        </>
    )
}
