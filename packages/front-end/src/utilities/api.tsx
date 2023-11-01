export interface UserFormData {
  id?: number; 
  firstName: string;
  middleName?: string; // Optional field
  lastName: string;
  email: string;
  phoneNumber?: string; // Optional field
  address?: string; // Optional field
  adminNotes?: string; // Optional field
  registered: Date;
}

// fetch all users 
export async function fetchUserData() {
    try {
      const response = await fetch('http://localhost:50000/users');
      if (response.ok) {
        const results = await response.json();
        return results.data;
      } else {
        console.error('Error fetching data:', response.statusText);
        return [];
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

// handle deleting a user without a promise (no response data needed)
export async function handleDelete (id: number): Promise<void> {
    console.log('DELETE', id)
    try {
    const response = await fetch(`http://localhost:50000/users/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
          }
        });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
        }
    } catch (error) {
      console.error('Error occurred:', error);
    }
}

// handle creating a new user
export async function submitNewUserForm (formData: UserFormData)  {
    console.log(formData);
    
    const response = await fetch('http://localhost:50000/users/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
        body: JSON.stringify(formData),
      });
      // if response ok set response
      if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message };
      } else {
        // set error response
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        return { success: false, message: errorData.message };
      }
  }

  // handle updating user form 
  export async function submitUserForm(userId: number, values: UserFormData) {
    try {
      const response = await fetch(`http://localhost:50000/users/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      console.error('Error occurred:', error);
      return { success: false, message: 'An error occurred while updating user data.' };
    }
  }