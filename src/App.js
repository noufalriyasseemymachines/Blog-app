import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PostList from './Components/PostList/PostList';
import {useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './Components/WrapperPage/Wrapper';



function App() {
  const [post, setPost] = useState(() => {
    const savedpost = localStorage.getItem('posts')
    return savedpost ? JSON.parse(savedpost) : []
  })

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(post))
  }, [post])

  const [lastId, setLastId] = useState(0)

  useEffect(() => {
    const savedBlog = JSON.parse(localStorage.getItem('posts'))
    const savedId = savedBlog.length
    if (savedId > 0) {
      setLastId(savedId)
    }
  }, [post])

  return (
    <div className="app">
      <Header></Header>
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<div className='postlist-container'>
            <PostList posts={post} setPosts={setPost} lastId={lastId} setLastId={setLastId}></PostList>
          </div>}></Route>
          <Route path='/display/:id' element=
            {<div className='display'><Wrapper post={post}></Wrapper></div>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}



export default App;

