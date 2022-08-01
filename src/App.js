import React from 'react';
import WebcamCapture from './Webcam/WebcamCapture';
import Chats from './Chats/Chats'
import ChatView from './Chats/ChatView';
import {
  BrowserRouter as Router,Routes,Route
} from 'react-router-dom'
import Preview from './Webcam/Preview';
import './App.css';

function App() {
  return (
    <div className="App">

<Router>
      <div className='app_body'>
        <Routes>
        <Route  path="/" element={<WebcamCapture/>}/>
        <Route  path="/chats" element={<Chats/>}/>
        <Route path="/chatsview" element={<ChatView/>}/>
          <Route  path="/preview" element={<Preview/>}/>
          
       
        </Routes>
      </div>
    </Router>

    </div>
  );
}

export default App;
