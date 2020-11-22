import React, {useState} from 'react'

export default function ListItem(props) {
  const { id, text, done } = props.item;
  const [editing, setEditing] = useState(false)

  const handleEnter = (e) => {
    if(e.key==='Enter') toggleEdit()
  }
  const toggleEdit = () => setEditing(!editing)
  const handleInputChange = (e) => {
    let {type, name, value, checked} = e.target
    if(type === 'checkbox') value = checked
    props.handleChange(id, name, value)
  }

  return (
    <div key={id} className="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input
            type="checkbox"
            checked={done}
            name="done"
            onChange={handleInputChange} />
        </div>
      </div>
      {editing ?
        <input
          type="text"
          name="text"
          className="form-control"
          onKeyPress={handleEnter}
          onChange={handleInputChange}
          value={text}/> :
        <input
          type="text"
          className="form-control"
          style={disabled}
          onClick={toggleEdit}
          value={`${text}${done ? ' ✅' : ''}`}>
        </input>
      }
      <div class="input-group-append">
        <button
          className="btn btn-light"
          onClick={() => props.handleDeleteItem(id)}>&times;</button>
      </div>
    </div>
  )
}

const disabled = {
  userSelect: 'none',
  color: 'gray',
  cursor: 'pointer'
}