import React from 'react'
import '../css/Note.css'
const Note = (props) => {
  return (
    <div className='container'>
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Note
