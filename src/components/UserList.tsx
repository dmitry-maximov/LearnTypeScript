import React, { FC } from 'react';
import { IUser } from '../types/user';
import UserItem from './UserItem';

interface UserListProps {
  users: IUser[] | null;
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <UserItem
              onClick={(user) => alert(user.id)}
              user={user}
              key={user.id}
            />
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пользователей не найдено</h1>
      )}
    </div>
  );
};

export default UserList;
