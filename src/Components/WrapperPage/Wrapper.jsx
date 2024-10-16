import React from 'react'
import { useParams } from 'react-router-dom'
import DisplayPage from '../../Pages/DisplayPage/DisplayPage';
import './Wrapper.css'

const Wrapper = ({post}) => {
    const {id}=useParams()
  return (
    <div className='wrapper'>
        <DisplayPage posts={post} id={id} />
    </div>
  )
}

export default Wrapper

