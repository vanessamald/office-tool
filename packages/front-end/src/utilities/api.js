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

export async function fetchUserProfile() {
  try {
    const response = await fetch(`http://localhost:50000/users/profile/${id}`);
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


// handle deleting a user
export async function handleDelete (id) {
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
        return data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
}

// handle creating a new user
export async function submitForm (formData)  {
    console.log(formData);
      // prevent page from reloading
      //event.preventDefault();
      // reset form
      //event.target.reset();

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
      //console.log(data);
      //setStatus(data.message); 
      } else {
        // set error response
        const errorData = await response.json();
        console.error('Error occurred:', errorData);
        //setErrorMessage(errorData.message);
        return { success: false, message: errorData.message };
      }
  }