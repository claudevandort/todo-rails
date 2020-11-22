import React, {useState} from 'react'

export default function NewItem(props) {
  const [newItem, setNewItem] = useState({text: '', done: false})
  const [editing, setEditing] = useState(false)

  const toggleEdit = () => setEditing(!editing)
  const handleEnter = (e) => {
    if(e.key==='Enter'){
      props.handleNewItem(newItem)
      toggleEdit()
    }
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setNewItem({...newItem, [name]: value})
  }

  return(
    <div className="mt-3 mb-3">
      {editing ?
        <input
          type="text"
          name="text"
          onKeyPress={handleEnter}
          onChange={handleChange}/> :
        <button
          className="btn btn-primary"
          onClick={toggleEdit}>
            + New item
        </button>
      }
    </div>
  )
}