import React  from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { resetCameraImage, selectCameraImage } from '../features/cameraSlice'
import TimerIcon from '@mui/icons-material/Timer';
import CloseIcon from '@mui/icons-material/Close';
import CropIcon from '@mui/icons-material/Crop';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import SendIcon from '@mui/icons-material/Send';
import {v4 as uuid} from 'uuid'
import { db, storage } from "../firebase";
import firebase from "firebase";
import { selectUser } from "../features/appSlice";
import './Preview.css'
import { useEffect } from 'react'
// import { upload } from '@testing-library/user-event/dist/types/utility';
function Preview() {
    const cameraImage= useSelector(selectCameraImage)
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if(!cameraImage){
            navigate('/')
        }
    }, [cameraImage,navigate]);
    const closePreview = ()=>{
        dispatch(resetCameraImage())
        // navigate
    }
    const sendPost =()=>{
        const id = uuid()
        const upLoadTask = storage.ref(`posts/${id}`).putString(cameraImage,"data_url")
        upLoadTask.on("state_changed",null,(error)=>
        //Error function
        {console.log(error)
        },
        //complete function
        ()=>{
            storage.ref("posts").child(id).getDownloadURL()
            .then((url)=>{
                db.collection( 'posts').add({
                    imageURL:url,
                    username:user.username,
                    read: false,
                    profilePic:user.profilePic,
                    timestamp:firebase.firestore.FieldValue.serverTimestamp()
                })
                navigate('/chats')
            })
        }
        )
    }
  return (
    <div className='preview'>
        <CloseIcon className='preview_close' onClick={closePreview}/>
        <div className='preview_toolbarRight'>
        <TextFieldsIcon/>
        <CreateIcon/>
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon/>
        <CropIcon />
        <TimerIcon />
        
        </div>
        <img src={cameraImage} alt=""/>
        <div  onClick={sendPost}className='preview_footer'>
            <h2>Send Now</h2>
            <SendIcon fontSize="small" className='preview_sendIcon'/>
        </div>
    </div>
  )
}

export default Preview