import React, { useState } from 'react'
import './NewForm.css'

const NewForm = ({addPost,setFormDisplay}) => {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [content,setContent]=useState("")

    const handleChange=(event)=>{
        event.preventDefault()

        addPost({title,author,content,date:new Date().toISOString().slice(0,10)})
        setTitle("")
        setAuthor("")
        setContent("")
        setFormDisplay(false)
    }
  return (
    <div className='modal'>
        <div className='modal-content'>
            <form onSubmit={handleChange}>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' required></input>
                <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder='Author' required></input>
                <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Description' required></textarea>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    </div>    
  )
}

export default NewForm
