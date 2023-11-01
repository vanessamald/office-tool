import React, { useState } from 'react';
import Form from '../components/Form';
import { useRouter } from 'next/router';
import { submitNewUserForm } from '../utilities/api';
import { UserFormData } from '../utilities/api';
import Status from '../components/Status';

export default function AddNewUser () {
    // open/close modal
    const [showModal, setShowModal] = useState(true);
    
    // status and error message 
    const [ status, setStatus ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    
    // handle submit form
    const handleSubmit = async (values: UserFormData) => {
        const result = await submitNewUserForm(values);

        console.log(values);

        if (result.success) {
            setStatus(result.message);
            // reset form

        } else {
            setErrorMessage(result.message);
        }
    };

    // take user back to home page when add new user page is closed 
    const router = useRouter();
    const handleClose = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal(false);
        router.push('/');
    }

    return (
        <> 
            <div className=''>
            {showModal ? ( <Form submitForm={handleSubmit} user='' handleClose={handleClose} isNewUser={true} />  ) : null}
            
           {/* {status || errorMessage ? <Status statusMessage={status || errorMessage} messageType={'success' || 'error'} /> : null}*/}

            {status || errorMessage ? <Status statusMessage={status || errorMessage} messageType={status ? 'success' : 'error'}/> : null}
            </div>
            
        </>
    )
}