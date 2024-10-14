import React, { useState } from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './PostList.css'
import NewForm from '../NewForm/NewForm'

const PostList = ({posts,setPosts,setLastId}) => {

    const [formDisplay,setFormDisplay]=useState(false)
    const [editPost,setEditPost]=useState(null)

    const addPost=(newOne)=>{
        if(editPost){
            const updatedPost=posts.map((post)=>post.id===editPost.id ? {...post,...newOne} :post)
            setPosts(updatedPost)
        }
        else{
            const maxId=posts.reduce((max,post)=>Math.max(max,post.id),0)
            const newId=maxId+1
            setPosts([...posts,{id:newId,...newOne}])
            setLastId(newId)
        }
        setFormDisplay(false)
        setEditPost(null)
        }
        

    const toggleForm =()=>{
        setFormDisplay(!formDisplay)
        setEditPost(null)
    }

    const handleEditFunction=(id)=>{
        const postToEdit=posts.find(post=>post.id===id)
        setEditPost(postToEdit)
        setFormDisplay(true)

      
    }

    const handleDeleteFunction=(id)=>{
        const updatedPosts=posts.filter(post=>post.id !== id)
        setPosts(updatedPosts)
    }

  return (
    <div className='postList'>
        <div className='form-display'>{formDisplay && <NewForm addPost={addPost} formDisplay={formDisplay} setFormDisplay={setFormDisplay} editPost={editPost}></NewForm>}</div>
        <div className='postList-head'>
            <button className='add-button' onClick={()=>toggleForm()}>{formDisplay? "Cancel" : "Add"}</button>
            <h2>Blogs</h2>
        </div>
        <div className='grid-container'>
        {posts.map((item,index)=>{
            return <BlogPost key={index} id={item.id} title={item.title} author={item.author} date={item.date} content={item.content} addPost={addPost} formDisplay={formDisplay} setFormDisplay={setFormDisplay}
         deleteBlog={()=>handleDeleteFunction(item.id)} editBlog={()=>handleEditFunction(item.id)}></BlogPost>
        })}
        </div>
        
    </div>
  )
}

export default PostList
