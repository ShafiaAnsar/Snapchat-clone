import React, {useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { auth, db } from "../firebase";
import { Avatar } from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Chat from './Chat';
import './Chats.css'
import { useDispatch, useSelector } from 'react-redux';
import {  selectUser } from '../features/appSlice';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage } from '../features/cameraSlice';
function Chats() {
  const [posts,setPosts] = useState([])
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
     useEffect(() => {
    db.collection("posts").orderBy("timestamp",'desc').onSnapshot((snapshot)=>setPosts(snapshot.docs.map((doc) =>({
      id:doc.id,
      data:doc.data()
    })))

    )
  }, []);
  const takeSnap=()=>{
    dispatch(resetCameraImage())
    navigate('/')
  }
  return (
    <div className='chats'>
      <div className='chats_header'>
        <Avatar  src ={user.profilePic} onClick={()=>auth.signOut()} className='chats_avatar'/>
        <div className='chats_search'>
          <SearchIcon className='chats_searchIcon'/>
          <input placeholder='Friends' type='text'/>
        </div>
        <ChatBubbleIcon className="chats_chatIcon"/>
      </div>
      <div className='chats_posts'>
          <div className='chats_posts'>
            {posts.map(
              ({
                id,
                data:{profilePic,username,timestamp,imageUrl,read}
              }) =>
              (<Chat 
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}/>)
            
            )}
          </div>
      </div>
      <RadioButtonUncheckedIcon
      className= 'chats_takePicIcon'
      onClick={takeSnap}
      fontSize='large'/>

    </div>
  )
}

export default Chats