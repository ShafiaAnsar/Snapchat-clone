import React ,{useEffect}from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { selectSelectedImage } from '../features/appSlice'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import './Chat.css'
const ChatView =()=> {
    const selectedImage = useSelector(selectSelectedImage)
    const navigate = useNavigate()
    const exit =()=>{
      navigate ('/chats')
    }
    // useEffect(() => {
    //   if(!selectedImage){
    //     exit()
    //   }
    // }, [selectedImage,exit]);
    
  return (
    <div  className='chatView'>
        <img src={selectedImage}
        // src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=400'
         onClick={exit} alt= ''/>
    <div className ='chatView_timer'> <CountdownCircleTimer
    isPlaying
    duration={10}
    strokeWidth={6}
    size={50}
    colors={[
      // ['#004777',0.33]
      // ['#F7BB01',0.33]
      // ['A30000',0.33]
    ]}>
{({remainingTime})=>{
   if (remainingTime === 0){
    exit()
   }
  return remainingTime;
}}

    </CountdownCircleTimer>
  </div>
   
    </div>
  )
}

export default ChatView