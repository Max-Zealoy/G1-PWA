import Lady from '../images/CrazyLady.png'
import Edit from '../images/Edit.png'
import Notification from '../images/NotificationBar.png'
import '../styling/ProfilePage.css'

export default function MyPhotos(props) {
  const g = useNamedContext('global');

  const s = useStates({});


  return (
        <div>


    
    <div className="GridProfile">
      <h2 className="Notification">Push notification</h2>
    
      <img className="Lady"src={Lady} alt="Avatar"></img>
      <img className="Edit"src={Edit} alt="Edit"></img> 
      <img className="NotificationBar"src={Notification} alt="Bar"></img>   

      <h1 className="ProfileName">{g.user.name}</h1>
      
      <h2 className="Email">{g.user.email}</h2>
      
      </div> 
      <Photos {...{ userId: g.user._id }} />;

      
      </div>
)}
