import React, { useState } from 'react';
import Form from './Form';
import { useRouter } from 'next/router';
import { submitUserForm } from '../utilities/api';
import { UserFormData } from '../utilities/api';
import Status from './Status';

export default function EditUser ({ user, handleClose })  {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  
  // status and error message 
  const [ status, setStatus ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const router = useRouter();

  const handleSubmit = async (values: UserFormData) => {
    const result = await submitUserForm(user.id, values);

    console.log(values);
    if (result.success) {
      setStatus(result.message);
    } else {
      setErrorMessage(result.message);
    }
  }
    
  return (
        <>
          <div className='fixed inset-0 flex items-center justify-center z-40'>
            <div className="bg-blueish p-8 w-full h-full">
            {isStatusOpen ? null : (
              <Form handleClose={handleClose} submitForm={handleSubmit} user={user} isNewUser={false}/>
            )}
              {status || errorMessage ? <Status statusMessage={status || errorMessage} messageType={status ? 'success' : 'error'}/> : null}
              </div> 
          </div>
        </>
    )
}