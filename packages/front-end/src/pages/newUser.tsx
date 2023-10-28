import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import Form from '../components/Form';

export default function AddNewUser () {
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
    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        // prevent page from reloading
        event.preventDefault();
        // reset form
        //event.target.reset();

        const response = await fetch('http://localhost:50000/users/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(form),
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
    
    // handle onChange event
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
        console.log(form);
    }

    return (
        <>
            <div className="w-full max-w-xs">
                <Form handleChange={handleChange}  submitForm={submitForm} user=''/>    
                <div>
                    { errorMessage ? 
                    <p className='font-medium text-red-500'>{errorMessage}</p>
                    : '' }
                </div>
            </div>
        </>
    )
}