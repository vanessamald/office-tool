import React, { useState } from 'react';
import Form from './Form';
import { useRouter } from 'next/router';
import { submitUserForm } from '../utilities/api';
import { UserFormData } from '../utilities/api';

export default function EditForm ({ user, handleClose })  {
  // open/close modal
  const [showModal, setShowModal] = useState(true);
  // status and error message 
  const [ status, setStatus ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const router = useRouter();

  const handleSubmit = async (values: UserFormData) => {
    const result = await submitUserForm(user.id, values);

    if (result.success) {
      setStatus(result.message);
    } else {
      setErrorMessage(result.message);
    }
  }
    
  return (
        <>
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className="bg-blueish p-8 w-full h-full">
              
              <Form handleClose={handleClose} submitForm={handleSubmit} user={user}/>
              {status ? <p className='font-medium text-green text-left'>{status}</p> : <p className='font-medium text-red text-left'>{errorMessage}</p>}  
            </div> 
          </div>
        </>
    )
}