import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function UserForm ({ handleClose, submitForm, user }) {
    
    // form validation 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        middleName: Yup.string().optional(),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phoneNumber: Yup.string().optional(),
        address: Yup.string().optional(),
        adminNotes: Yup.string(),
    });
      
    return (
        <> 
        <div className='bg-blueish h-full'>
            <Formik
                // set initial values in the form, return empty string if null
                initialValues={{
                    firstName: user.firstName || '',
                    middleName:  user.middleName  || '',
                    lastName: user.lastName || '',
                    email: user.email || '',
                    phoneNumber: user.phoneNumber || '',
                    address: user.address || '',
                    adminNotes: user.adminNotes || ''
                }}

                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // Pass the form values to the submitForm function
                    submitForm(values);
                  }}
            >  
                <Form className=" rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="firstName" 
                            type="text" 
                            placeholder="First Name"
                            name="firstName"
                        />
                         <ErrorMessage name="firstName" component="div" className="text-red" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="middleName">
                            Middle Name
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="middleName" 
                            type="text" 
                            placeholder="Middle Name"
                            name="middleName"
                        />
                        <ErrorMessage name="middleName" component="div" className="text-red" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="lastName" 
                            type="text" 
                            placeholder="Last Name"
                            name="lastName"
                        />
                        <ErrorMessage name="lastName" component="div" className="text-red" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gra-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="text" 
                            placeholder="Email"
                            name="email"
                        />
                        <ErrorMessage name="email" component="div" className="text-red" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="phoneNumber" 
                            type="text" 
                            placeholder="Phone Number"
                            name="phoneNumber"
                        />
                        <ErrorMessage name="phoneNumber" component="div" className="text-red" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="address" 
                            type="text" 
                            placeholder="Address"
                            name="address"
                        />
                        <ErrorMessage name="address" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="adminNotes">
                            Notes
                        </label>
                        <Field 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gra-500 leading-tight focus:outline-none focus:shadow-outline" 
                            id="adminNotes" 
                            type="text" 
                            placeholder="Notes"
                            name="adminNotes"
                        />
                        <ErrorMessage name="adminNotes" component="div" className="text-red-500" />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Submit
                    </button>
                    <button
                        className="text-red background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </Form>
            </Formik>
        </div>  
    </>
    )
}