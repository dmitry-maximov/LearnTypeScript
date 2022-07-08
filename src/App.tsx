import { Routes, Link, Route, BrowserRouter } from 'react-router-dom';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UserPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Список дел</Link>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
