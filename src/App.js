import React from 'react';
import WebcamCapture from './Webcam/WebcamCapture';
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
          <Route path=''/>
          <Route  path="/preview" element={<Preview/>}/>
          <Route exact path="/" element={<WebcamCapture/>}/>
          <Route exact path="/chats" element={<Chats/>}/>
        </Routes>
      </div>
    </Router>

    </div>
  );
}

export default App;
