export function sortingById(users, setUsers) {
    const sortedUsersById = [...users];
    sortedUsersById.sort((a, b) => a.id - b.id);
    setUsers(sortedUsersById);
  }
  
  export function sortingByFirstName(users, setUsers) {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    setUsers(sortedUsers);
  }
  
  export function sortingByLastName(users, setUsers) {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setUsers(sortedUsers);
  }
  
  export function sortingByEmail(users, setUsers) {
    const sortedUserByEmail = [...users];
    sortedUserByEmail.sort((a, b) => a.email.localeCompare(b.email));
    setUsers(sortedUserByEmail);
  } 