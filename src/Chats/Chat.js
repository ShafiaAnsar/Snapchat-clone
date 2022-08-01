import { Avatar } from '@mui/material'
import React from 'react'
import StopIcon from '@mui/icons-material/Stop';
import { useDispatch } from 'react-redux/es/exports';
import { selectImage } from '../features/appSlice';
import {useNavigate} from 'react-router-dom'
import './Chat.css'
import ReactTimeago from 'react-timeago';
import { db } from '../firebase';
function Chat({id,profilePic,username,timestamp,imageUrl,read}) {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const open =()=>{
        
        if(!read){
            dispatch(selectImage(imageUrl))
            db.collection("posts").doc(id).set({
                read:true,

            },{merge:true}
            )
            navigate( '/chatsview',{replace:true})
            // // Navigate(to'/chatsview')
            // console.log("open running")
        }
    }
  return (
    <div className='chat' onClick={open} >
        <Avatar className='chat_avatar' src={profilePic}/>
        <div className='chat_info'>
            <h4>{username}</h4>
            <p>
                {!read && 'Tap to view -' }{''}
                <ReactTimeago date = {new Date(timestamp?.toDate()).toUTCString()}/></p>  
        </div>
        {!read && < StopIcon className='chat_readIcon'/>}
    </div>
  )
}

export default Chat