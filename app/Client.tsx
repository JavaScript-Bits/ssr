'use client'

import axios from "axios";
import { useEffect, useState } from "react"
import { Todo } from "./types";

export default function Client() {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data)
      setLoading(false)
    }
    fetchData()

  }, [])

  if (loading) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <div>
      <header>Client</header>
      {
        todos?.map((todo: Todo, index: number) => (
          <div key={index}>
            {todo.title}
          </div>
        ))
      }
    </div>
  )
}
