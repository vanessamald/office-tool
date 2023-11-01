interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// sorting functions
export function sortingById(users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>>) {
    const sortedUsersById = [...users];
    sortedUsersById.sort((a, b) => a.id - b.id);
    setUsers(sortedUsersById);
  }
  
export function sortingByFirstName(users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>>) {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    setUsers(sortedUsers);
    console.log(sortedUsers);
  }
  
  export function sortingByLastName(users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>>) {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setUsers(sortedUsers);
  }
  
  export function sortingByEmail(users: User[], setUsers: React.Dispatch<React.SetStateAction<User[]>>) {
    const sortedUserByEmail = [...users];
    sortedUserByEmail.sort((a, b) => a.email.localeCompare(b.email));
    setUsers(sortedUserByEmail);
  } 