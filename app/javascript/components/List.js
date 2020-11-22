import React, {useState} from 'react'
import tasksData from '../data/listData'
import Listtem from './ListItem'
import NewItem from './NewItem'

export default function List() {
  const [tasks, setTasks] = useState(tasksData)
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
  }
  const handleDeleteItem = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }
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
