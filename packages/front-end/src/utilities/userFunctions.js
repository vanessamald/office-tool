import { fetchUserData } from './api'; 

// handle edit form
export async function handleEdit(id) {
    console.log(id);
    // Find the user with the given ID
    const userToEdit = users.find((user) => user.id === id);
        if (userToEdit) {
            setSelectedUser(userToEdit);
            setShowModal(true);
        }
    }