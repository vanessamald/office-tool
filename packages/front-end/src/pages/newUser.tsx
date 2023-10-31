import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { useRouter } from 'next/router';
import { submitForm } from '../utilities/api';

export default function AddNewUser () {
    // open/close modal
    const [showModal, setShowModal] = useState(true);
    
    // status and error message 
    const [ status, setStatus ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    /*
    // user form
    const [ form, setForm ] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        adminNotes: ''
    })
    */

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
    const handleSubmit = async (values: UserFormData) => {
        const result = await submitForm(values);

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
            {showModal ? ( <Form submitForm={handleSubmit} user='' handleClose={handleClose} />  ) : null}

            {status ? <p className='font-medium text-green-500 text-left p-6'>{status}</p> : <p className='font-medium text-red-500 text-left p-6'>{errorMessage}</p>}
        </>
    )
}