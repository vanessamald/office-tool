import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

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
                
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="firstName" 
                            type="text" 
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
                            Middle Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="middleName" 
                            type="text" 
                            placeholder="Middle Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="lastName" 
                            type="text" 
                            placeholder="Last Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="text" 
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="phoneNumber" 
                            type="text" 
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="address" 
                            type="text" 
                            placeholder="address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminNotes">
                            Notes
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="adminNotes" 
                            type="text" 
                            placeholder="Notes"
                            value={form.adminNotes}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
                
                
                <div>
                    { errorMessage ? 
                    <p className='font-medium text-red-500'>{errorMessage}</p>
                    : '' }
                </div>
            </div>
        </>
    )
}