interface FilterDataProps {
  name: string;
  id: number
}

interface FilterProps {
  query: string;
  users: FilterDataProps[]
}

export default function filterName(data: FilterProps):FilterDataProps[]  {

  console.log('renderizou meu filter')

  const { users, query  } = data

  return users.filter(i => i.name.toLowerCase().includes(query))
}
