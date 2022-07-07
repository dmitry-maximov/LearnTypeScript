import axios from 'axios';
import { useEffect, useState } from 'react';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo } from './types/todo';
import { IUser } from './types/user';

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [todos, setTodos] = useState<ITodo[] | null>(null);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

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

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <div style={{ padding: 5 }}>
        <h1>Список Пользователей:</h1>
        <List
          items={users}
          renderItem={(user: IUser) => (
            <UserItem
              user={user}
              key={user.id}
              onClick={(user) => alert(user.id)}
            />
          )}
        />
      </div>
      <div style={{ padding: 5 }}>
        <h1>Список ToDO:</h1>
        <List
          items={todos}
          renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
      </div>
    </div>
  );
}

export default App;
