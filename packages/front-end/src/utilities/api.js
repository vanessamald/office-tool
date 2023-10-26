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