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
    
    // handle submit form
    const handleSubmit = async () => {
        const result = await submitForm(form);

        console.log(form);

        if (result.success) {
            setStatus(result.message);
            // reset form

        } else {
            setErrorMessage(result.message);
        }
    };
    
    // handle onChange event
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
        console.log(form);
    }

    // take user back to home page when add new user page is closed 
    const router = useRouter();
    const handleClose = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal(false);
        router.push('/');
    }

    return (
        <> 
            {showModal ? ( <Form handleChange={handleChange} submitForm={handleSubmit} user='' handleClose={handleClose} />  ) : null}

            {status ? <p className='font-medium text-green-500 text-left p-6'>{status}</p> : <p className='font-medium text-red-500 text-left p-6'>{errorMessage}</p>}
        </>
    )
}