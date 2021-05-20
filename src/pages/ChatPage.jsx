import React, { useState, useEffect } from 'react'
import '../styling/Chat.css'
import Navbar from '../components/Navbar'
import SimpleButton from '../components/Buttons'




function  ChatPage() {
    const [count, setCount] = useState(0)
  
    const startSSE = () => {
      let sse = new EventSource('/api/sse')
  
      sse.addEventListener('connect', message => {
        let data = JSON.parse(message.data)
        console.log('[connect]', data);
      })
  
      sse.addEventListener('disconnect', message => {
        let data = JSON.parse(message.data)
        console.log('[disconnect]', data);
      })
  
      sse.addEventListener('new-message', message => {
        let data = JSON.parse(message.data)
        console.log('[new-message]', data);
      })
    }
  
    useEffect(() => {
      startSSE()
    }, [])
  
    return (
      <div>
                
        <Navbar/>
        <SimpleButton/>
        <div className="ChatTitle">
            <h1>Cat Room</h1>
            <h3>Let's cat with your friends</h3>
        </div>

      <div id="message-list"></div>
    
      <form>
        <input required type="text" placeholder="new message"/>
        <button>send</button>
        </form>


        </div>
    )
  }
  
  export default ChatPage