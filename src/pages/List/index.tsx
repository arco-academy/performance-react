import React, { useEffect, useState, useCallback } from 'react';

import axios from 'axios';

import { UserItemProps } from './components/UserItem'
import UserList from './components/UserList'

const List: React.FC = () => {
  const [users, setUsers] = useState([] as UserItemProps[])
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const getUser = useCallback(async (): Promise<void>  =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    setUsers(response.data)
  },[])

  useEffect(() => {
    getUser()
  },[getUser])

  return (
    <div>
      <h1>Listagem de usuários</h1>

      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <UserList users={users}  query={input} />

      <h3>{count}</h3>

      <button type="button" onClick={() => setCount(count+1)}>Adicionar</button>
    </div>
  );
}

export default List;