import React from 'react';
import { useRouter } from 'next/router';
import EditForm from '../../components/editUser'; // Adjust the import path as needed

export default function EditUserPage() {
  const router = useRouter();
  const { userId } = router.query; // Get the user ID from the URL

  console.log(userId);

  if (!userId) {
    // Handle the case when the user ID is not available
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit User</h1>
      <EditForm userId={userId}/>
    </div>
  );
}