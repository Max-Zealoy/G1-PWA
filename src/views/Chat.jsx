import Catjump from '../images/cattenor.gif'
import "../styling/ChatCSS.css";
import { v4 as uuidv4 } from 'uuid';


export default function Chat() {

  // Note:
  // The script utilities/updateHandler.js 
  // fetches all messages and rooms


  const g = useNamedContext('global');


  useEffect(() => {
 
    if (g.newRoom ) {
      console.log(g.newRoom);

    }

  }, [] ); 

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

    let message= {
      author: g.user._id,
      text: s.message,
       room: g.myRoom,
       
      
     };
     // sync messages with the service worker
  if('serviceWorker' in navigator && 'SyncManager' in window) {
    // store message in indexedDB, so the service worker
    // gets access to it
    await IDB.add('sync-messages', message);
  
    // tell the service worker that there's messages
    // waiting to be sent to the server
    const sw = await navigator.serviceWorker.ready;
    await sw.sync.register('sync-new-messages');
  }
  // or send message manually
  else {
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
  
  }
   
  s.message = '';  
/*
   let newMessage = new Message({
     author: g.user._id,
     text: s.message,
      room: g.myRoom
    });
    await newMessage.save();
    s.message = '';
  }  */
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

  return <SFC

    template=
    {<div>

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
              <button className="SubmitBtn" type="button submit">Create</button>
            </div>
          </div>
        </form>
      </div>

      <div className="messages" >
        {g.messages.filter(message=> message.room === g.myRoom).map((message =>
            



          <div 
            className={'message' + (message.author._id === g.user._id ? ' my' : '')}
            
            
             >
               <div className="AuthorAbove">
            <p>
              {message.author.name}<br />
              <span>{formatDate(message.sent)}</span>
            </p>
            </div>
            <p className="ChatTextCenter">{message.text}
            </p>
          </div>
          
        ))}
      </div>

<div className="spaceBetween"></div>
      <div className="writeMessage">
      {/* <img className="catJump" src={Catjump}></img>*/}
        <form className="messageForm" autoComplete="off" onSubmit={send}>
          <div className="chatbox">
            <input type="text" className="chatcontrol" placeholder="Write message" {...s.bind('message')} />
            <div className="input-group-append">
              <button className="Chatbtn" type="button submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>}

  
  />;
}