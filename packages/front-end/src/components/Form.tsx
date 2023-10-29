import React, { useState } from 'react';

export default function Form ({ handleClose, handleChange, submitForm, user }) {
    return (
        <> 
        <div>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
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
                            defaultValue={user.firstName}
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
                            defaultValue={user.middleName}
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
                            defaultValue={user.lastName}
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
                            defaultValue={user.email}
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
                            defaultValue={user.phoneNumber}
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
                            defaultValue={user.address}
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
                            onChange={handleChange}
                            defaultValue={user.adminNotes}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Submit
                    </button>
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                </form>
            </div>  
        </>
    )
}