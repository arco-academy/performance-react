import React, { useEffect, memo } from 'react';


export interface UserItemProps {
  name: string
  id: number
}

const UserItem: React.FC<UserItemProps> = ({ name }) => {

  useEffect(() => {
    console.log('renderizou')
  })

  return <li>{name}</li>;
}

export default memo(UserItem);