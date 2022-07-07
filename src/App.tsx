import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import { IUser } from './types/user';

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    fetchUsers();
  }, [users]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
