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
    }
}