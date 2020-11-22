import React, {useState, useEffect} from 'react'
import Listtem from './ListItem'
import NewItem from './NewItem'

export default function List() {
  const [tasks, setTasks] = useState([])
  const handleChange = (id, name, value) => {
    setTasks(
      tasks.map(item => {
        if (item.id === id) item = {...item, [name]: value}
        return item
      })
    )
  }
  const handleNewItem = (item) => {
    setTasks([ ...tasks, {id: tasks[tasks.length-1].id+1, ...item} ])
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({item})
    }
    fetch('/items.json', options)
      .then(res => console.log(res))
  }
  const handleDeleteItem = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`/items/${id}.json`, options)
      .then(res => console.log(res))
  }
  useEffect(() => {
    fetch("/items.json")
      .then(res => res.json())
      .then(result => setTasks(result.items))
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <NewItem
            handleNewItem={handleNewItem} />
          {tasks.map(item => <Listtem item={item} handleChange={handleChange} handleDeleteItem={handleDeleteItem} />)}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  )
}
