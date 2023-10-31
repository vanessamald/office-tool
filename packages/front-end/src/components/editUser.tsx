import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import { useRouter } from 'next/router';
import { submitUserForm } from '../utilities/api';
import { fetchSingleUserData } from '../utilities/api';

export default function EditForm ({ userId })  {
  const router = useRouter();

  console.log(userId);

  // state to  store the user information
  const [user, setUser] = useState({});

  

  // status and error message 
  const [ status, setStatus ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  
  console.log(userId);

  interface UserFormData {
    firstName: string;
    middleName?: string; // Optional field
    lastName: string;
    email: string;
    phoneNumber?: string; // Optional field
    address?: string; // Optional field
    adminNotes?: string; // Optional field
  }

  /*
   // Fetch user data based on the userId
   useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:50000/users/${userId}`);
        console.log(userId);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          console.log(user);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
     // Call the fetchUserData function
     fetchUserData();
    }, [userId]);
    if (!user) {
      return <p>Loading...</p>;
    }
    */
    
/*
      // Fetch user data based on the userId
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:50000/users/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
})
*/
useEffect(() => {
  // Fetch user data when the component mounts
  async function fetchUserData() {
    if (userId) {
      try {
        const userData = await fetchSingleUserData(userId); // Assuming you have an API function to fetch a user by ID
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  }

  fetchUserData();
}, [userId]);


    /*
    // Call the fetchUserData function
   
*/
  
  /*
    const submitForm = async (values) => {
      const { id } = user; // Get the user's ID
  
      const result = await submitUserForm(id, values); // Use the utility function
  
      if (result.success) {
        setStatus(result.message);
      } else {
        setErrorMessage(result.message);
      }
    };
    */
  

  
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
        console.log(status);
        // reset form
        //resetForm();
        router.push('/');
      } else {
        // set error response
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        setErrorMessage(errorData.message);
        }
        console.log('SUBMIT')
    }
    

    /*
    const submitForm = async (values: UserFormData) => {
      const { id } = userId; // Get the user's ID
  
      const result = await submitUserForm(id, values); // Use the utility function
  
      if (result.success) {
        setStatus(result.message);
        //router.push('/');
      } else {
        setErrorMessage(result.message);
      }
    };
    */

    const handleClose = () => {
      
    }

  return (
        <>
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className="bg-white p-8 w-full h-full">
              <Form handleClose={handleClose} submitForm={submitForm} user={user}/>
              {status ? <p className='font-medium text-green-500 text-left'>{status}</p> : <p className='font-medium text-red-500 text-left'>{errorMessage}</p>}  
            </div> 
          </div>
        </>
    )
}
