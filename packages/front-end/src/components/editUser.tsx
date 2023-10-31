import clsx from 'clsx';
import React, { useState } from 'react';
import Form from './Form';
import { useRouter } from 'next/router';

export default function EditForm ({ handleClose, user })  {
  const router = useRouter();

  // status and error message 
  const [ status, setStatus ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  
  console.log(user);

  interface UserFormData {
    firstName: string;
    middleName?: string; // Optional field
    lastName: string;
    email: string;
    phoneNumber?: string; // Optional field
    address?: string; // Optional field
    adminNotes?: string; // Optional field
  }
  
  // handle submit form
  const submitForm = async (values: UserFormData) => {
    
    // prevent page from reloading
    //event.preventDefault();
  const response = await fetch(`http://localhost:50000/users/update/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
      body: JSON.stringify(values),
  });
      // if response ok set response
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setStatus(data.message); 
        console.log(status);
        // reset form
        //resetForm();
        router.push('/');
      } else {
        // set error response
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        setErrorMessage(errorData.message);
        }
        console.log('SUBMIT')
    }

  return (
        <>
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className="bg-white p-8 w-full h-full">
              <Form handleClose={handleClose} submitForm={submitForm} user={user}/>
              {status ? <p className='font-medium text-green-500 text-left'>{status}</p> : <p className='font-medium text-red-500 text-left'>{errorMessage}</p>}  
            </div> 
          </div>
        </>
    )
}
