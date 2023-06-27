import Image from 'next/image'
import Client from './Client'
import { log } from 'console'
import { Todo } from './types'
//types


//request
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}


const Home = async () => {
  const data = await fetchData()
  log(data)
  return (
    <main className="flex min-h-screen flex-row items-start justify-between p-24">
      <div>
        <header>Server</header>
        {data.map((todo: Todo, index: number) => (
          <div key={index} >
            {todo.title}
          </div>
        ))}
      </div>
      <Client />
    </main>
  )
}
export default Home;