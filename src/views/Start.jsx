import "../styling/Start.css";
import "../styling/SearchPage.css";

import Search from "../images/Buttons/Search.png";
import { useHistory } from "react-router-dom";

const SearchBar = ({ search, setSearch }) => (
  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    type="text"
    placeholder="Search"
  />
);

export default function Start(props) {
  const fetchUsers = async (e) => {
    setUser();
  };


  const g = useNamedContext('global');

  useEffect(async () => {
    console.log(props.userId);
    // fetching all photos
    s.photos = await Photo.find({ author: props.userId }).populate("author");
    // newest photos on top
    s.photos.sort((a, b) => (a.posted > b.posted ? -1 : 1));
    fetchUsers();
  }, []);

  const addFavorite = (id) => {
    let favoriteIds =
      (localStorage["Photos"] && JSON.parse(localStorage["Photos"])) || [];
    favoriteIds.push(id);
    localStorage["Photos"] = JSON.stringify(favoriteIds);
  };
  //declairing search

  const s = useStates({
    newRoom: "",
  });

  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  function addRoom(id) {
    s.newRoom = id;
    g.newRoom = id;
    history.push("/chat/");
    g.rooms.push(s.newRoom);
    g.myRoom = s.newRoom;
  }

  return (
    <SFC
      template={
        !s.photos ? null : (
          <div className="Photos">
            <div className="SearchPage">
              <SearchBar
                search={search}
                src={Search}
                className="SearchImage"
                setSearch={setSearch}
              />

              <img src={Search} className="SearchImage"></img>
            </div>

            <h1>{props.userId ? "My photos" : "All photos"}</h1>
            <div className="grid">
              <br></br>
              <br />
              
              {s.photos
                .filter((photo) =>
                  photo.author.name.toLowerCase().includes(search.toLowerCase())
                )
                
                .map((photo) => (
                  <div className="photo" key={photo._id}>
                    <p>Photographer: {photo.author.name}</p>
                    <div className="PhotoFeed">
                    <img src={"/uploads/" + photo.url} 
                      //onClick={() => history.push('/Chat/' + photo.id)}

                      onClick={() => addRoom(photo._id)} />

                    

                    <p>{photo.description}</p>
                    
                    <p> {photo.location}</p>
                    <p>Date: {photo.posted}</p>
                    
                      </div>
                      
                  </div>
                ))}
            </div>
          </div>
        )
      }
      style={
        /*css*/ `
   
    .grid {
      
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      
    }
    

      h1 {
        padding-left: 15px;
      }

      .grid img {
        width: 100%;
      }

      
    `
      }
    />
  );
}
