import clsx from 'clsx';
import React, { useState } from 'react';
import Form from './Form';

export default function EditForm ({ handleClose, user })  {
  // status and error message 
  const [ status, setStatus ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  /*
  const [ editedUser, setEditedUser ] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    adminNotes: ''
  });
  */
  
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

        // reset form
        //resetForm();
      } else {
        // set error response
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        setErrorMessage(errorData.message);
        }
        console.log('SUBMIT')
    }

  /*
  // reset form 
  const resetForm = () => {
    setEditedUser({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      adminNotes: ''
    });
  };
  */
  

  /*


 

  const submitForm = async (values: UserFormData) => {
    
    
    try {
      const response = await fetch(`http://localhost:50000/users/update/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values), // Send the form values
        
      });
  
      if (response.ok) {
        //console.log(JSON.stringify(values));
        const data = await response.json();
        //console.log(data);
        setStatus(data.message);
        //resetForm();
      } else {
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
    }
  };
  */

  
  return (
        <>
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className="bg-white p-8 w-full h-full ">
              <Form handleClose={handleClose} submitForm={submitForm} user={user}/>
              {/*<button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>*/}
              {status ? <p className='font-medium text-green-500 text-left p-6'>{status}</p> : <p className='font-medium text-red-500 text-left p-6'>{errorMessage}</p>}
            </div> 
          </div>
        </>
    )
}
