import React, { useState, useEffect } from 'react'
import { Style, useStates, useNamedContext } from 'react-easier';
import '../styling/Chat.css'
import Navbar from '../components/Navbar'
import SimpleButton from '../components/Buttons'
import mongoosy from 'mongoosy/frontend';
const { User } = mongoosy;



function  ChatPage() {
  
  const g = useNamedContext('global');


  const s = useStates({
    users: [],
    chatMessage: '',
    toWhom: '',
    display: null
  });
  

  const getUsers = async () => {
    s.users = await User.find();
    s.display = true;
  }

  // when the StartPage mounts
  useEffect(() => getUsers(), []);

    return (
      <div>
                
        <Navbar/>
        <SimpleButton/>
        <div className="ChatTitle">
           
           
            <h1>Cat Room</h1>
            <h3>Let's cat with your friends</h3>
        </div>

        <h2>Chat</h2>
    <form name="writeInChat">
      <label>To whom:&nbsp;
      <select {...s.bind('toWhom')}>
          {s.users
            .filter(x => x._id !== g.user._id)
            .map((x, i) => <option key={x._id}>{x.name}</option>)}
        </select>
      </label>
      <input type="text" placeholder="new message"
        {...s.bind('chatMessage')} />
      <button type="submit"value="Send">send</button>
    </form>

      <div id="message-list"></div>


        </div>
    )
  }
  
  export default ChatPage