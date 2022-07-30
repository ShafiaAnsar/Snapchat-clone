import React  from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
import './Preview.css'
import { useEffect } from 'react'
function Preview() {
    const cameraImage= useSelector(selectCameraImage)
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
        <div className='preview_footer'>
            <h2>Send Now</h2>
            <SendIcon fontSize="small" className='preview_sendIcon'/>
        </div>
    </div>
  )
}

export default Preview