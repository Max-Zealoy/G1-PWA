import '../styling/UploadPage.css'

let fetchedLocation = {lat: 0, lng: 0};
let address;
export default function PhotoUpload() {




  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [city, setCity] = useState(null);
  const [staddress, setAdress] = useState(null);
  const [status, setStatus] = useState(null);


  const getLocation = () => {

    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(async(position) => {
        fetchedLocation = {lat: position.coords.latitude, lng: position.coords.longitude};

        address = await fetch(`https://geocode.xyz/${fetchedLocation.lat},${fetchedLocation.lng}?geoit=json`)
        address = await address.json()
      console.log(address);

   

        setStatus(null);
       
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setCity(address.city)
        setAdress(address.staddress)

        

      }, () => {
        setStatus('Unable to retrieve your location');
        console.log('Unable to retrieve your location');
      });
  
    }
    }   
  const newposition = (setLng,setLat)
    

  const g = useNamedContext('global');

  // State
  const s = useStates({
    file: '',
    base64url: '',
    fileNameOnServer: '',
    text: '',
  });

  // Listen for changes to the file filed to trigger a preview
  useEffect(async () => {
    if (!s.file) { return; }
    // Read the file object from the file input field
    let data = await read(document.forms.fileUploadForm.file.files[0]);
    // Scale
    s.base64url = await scale(data, 1500, 1500, 0.75);
  }, [s.file]);

  // Upload the image
  const uploadImg = async e => {
    e.preventDefault();
    // Create a new photo in the db
    let newPhoto = new Photo({
      author: g.user._id,
      url: s.base64url,
      location: city,
      description: s.text
    });


    console.log(city);

    let result = await newPhoto.save();
    s.fileNameOnServer = result.url;
  }

  // Reset for a new uploada
  const newUpload = () => {
    // reset all state variables
    // to show an empty form again
    s.fileNameOnServer = '';
    s.base64url = '';
    s.file = '';
  }


  
  

  return <SFC

    template=
    {
      <div id="uploadPic">
        <If c={!s.fileNameOnServer}>
        
          <form name="fileUploadForm" onSubmit={uploadImg}>
            <h1 className="UpploadImagetext">Upload image</h1>
            <p>
              <input type="file" accept="image/*" name="file" {...s.bind('file')} />
              <If c={s.base64url}>
                <input type="submit" value="Upload" />
              </If>
              
            </p>
            <If c={s.base64url}>
              <p><img className="previewImage" src={s.base64url} /></p>
            </If>
            
          </form>
          <Else>
            <p>The photo has been uploaded!</p>
            <a target="_blank" href={'/uploads/' + s.fileNameOnServer}>Here's a link to your photo</a>
            <p className="mt-3"><button variant="primary" onClick={() => newUpload()}>Upload another image</button></p>
          </Else>
        </If>

        
    
        <div className="Description">
        <input type="text" name="text" {...s.bind('text')} />
      
      <div id="locaDiv">
    
        <button onClick={getLocation}>Add location to photo? </button>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        {city && <p>city: {city}</p>}
        {staddress && <p>address: {staddress}</p>}
        </div>
  </div>
        
      </div>
    }
  
    style=
    {/*css*/`

      .previewImage {
        max-width: 300px;
        width:
      }

      
  
    `}
  />
}

