import React ,{useEffect} from 'react';
import WebcamCapture from './Webcam/WebcamCapture';
import Chats from './Chats/Chats'
import ChatView from './Chats/ChatView';
import {
  BrowserRouter as Router,Routes,Route
} from 'react-router-dom'
import Preview from './Webcam/Preview';
import './App.css';
import Login from './Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
useEffect(() => {
  auth.onAuthStateChanged((authUser=>{
    if (authUser){
      dispatch(login({
        username:authUser.displayName,
        profilePic:authUser.photoURL,
        id:authUser.uid
      }))

    }
    else{dispatch(logout())}
  }))
}, [dispatch]);
  return (
    <div className="App">

<Router>
      {!user ?(
            <Login/>
          ):(
            <>
        <img className='app_logo' src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
        <div className='app_body'>
     <div className='app_bodyBackground'>
          <Routes>
            <Route  path="/" element={<WebcamCapture/>}/>
            <Route  path="/chats" element={<Chats/>}/>
            <Route exact path="/chatsview" element={<ChatView/>}/>
            <Route  path="/preview" element={<Preview/>}/>
            <Route path='/login' element ={<Login/>}/>
         
          </Routes>
     </div>
         
        </div>
        </>
  
      )}
      </Router>
      </div>
  );
}

export default App;
