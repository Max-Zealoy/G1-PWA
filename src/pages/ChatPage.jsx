import React, { useState, useEffect } from 'react'
import { Style, useStates, useNamedContext } from 'react-easier';
import '../styling/Chat.css'
import Navbar from '../components/Navbar'
import mongoosy from 'mongoosy/frontend';
import SimpleButton from '../components/Buttons'
const { myRoom, room } = mongoosy;


function  ChatPage() {
  
  const g = useNamedContext('global');

  useEffect(() => {
    // Scroll to bottom of page after each update
    window.scrollTo(0, 1000000);
  });

  const s = useStates({
    message: '',
    newRoom: ''
  });

  async function send(e) {
    e.preventDefault();
    let newMessage = new Message({
      author: g.user._id,
      text: s.message,
      room: g.myRoom
    });
    await newMessage.save();
    s.message = '';
  }

  function addRoom(e) {
    e.preventDefault();
    g.rooms.push(s.newRoom);
    g.myRoom = s.newRoom;
    s.newRoom = '';
  }

  function switchRoom(e) {
    g.myRoom = e.target.innerHTML;
  }

  function formatDate(sent) {
    // format date to local time
    let d = new Date(sent);
    return d.toLocaleString();
  }

    return (
      <div>
                
        <Navbar/>
        <SimpleButton/>
        <div className="chat">

        <div className="chat">

<div className="rooms">
  <div className="roomList">
    <h4>Rooms</h4>
    {(g.rooms || []).map(room =>
      <div
        onClick={switchRoom}
        className={'room' + (room === g.myRoom ? ' active' : '')}
        key={room}>
        {room}
      </div>
    )}
  </div>
  <form className="addRoomForm" autoComplete="off" onSubmit={addRoom}>
    <div className="input-group">
      <input type="text" className="form-control shadow-none" placeholder="New room" {...s.bind('newRoom')} />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button submit">Create</button>
      </div>
    </div>
  </form>
</div>

<div className="messages">
  {g.messages.filter(message => message.room === g.myRoom).map(message =>
    <div
      className={'message' + (message.author._id === g.user._id ? ' my' : '')}
    >
      <p>
        {message.author.name}<br />
        <span>{formatDate(message.sent)}</span>
      </p>
      <p>{message.text}</p>
    </div>
  )}
</div>

<div className="writeMessage">
  <form className="messageForm" autoComplete="off" onSubmit={send}>
    <div className="input-group m-3">
      <input type="text" className="form-control shadow-none" placeholder="Write message" {...s.bind('message')} />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button submit">Send</button>
      </div>
    </div>
  </form>
</div>
</div>
</div>
</div>
    )
  }

  export default ChatPage
