import { fetchUserData } from './api'; 
    
    // handle deleting a user
    export async function handleDelete(id) {
        console.log('DELETE', id)
        const response = await fetch(`http://localhost:50000/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    }

    /*
    // handle edit form
    export async function handleEdit(id) {
        // Find the user with the given ID
        const userToEdit = users.find((user) => user.id === id);
        if (userToEdit) {
            setSelectedUser(userToEdit);
            setShowModal(true);
        }
    }
    */