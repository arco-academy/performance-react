import React, { useMemo } from 'react';
import UserItem, { UserItemProps } from '../UserItem';

import filterName from '../../../../utils/filterName'

interface UserListProps {
  users: UserItemProps[]
  query: string
} 

const UserList: React.FC<UserListProps> = ({ users, query }) => {

  const filtered = useMemo(() => filterName({ users, query }), [users, query])

  return (
    <ul>
      {filtered.map(user => ( <UserItem key={user.id} {...user} />))}
    </ul>
  );
}

export default UserList;