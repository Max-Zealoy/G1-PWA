export default function Photos(props) {

  const s = useStates({});

  useEffect(async () => {
    console.log(props.userId)
    // fetching all photos
    s.photos = await Photo.find({ author: props.userId }).populate('author');
    // newest photos on top
    s.photos.sort((a, b) => a.posted > b.posted ? -1 : 1);
  }, []);
 


  return  <SFC
  
    template=
    {!s.photos ? null : 
      <div className="Photos">
     
      
        <h1>{props.userId ? 'My photos' : 'All photos'}</h1>
        <div className="grid">
        <br></br><br/>
        {s.photos.map(photo =>
         
          <div className="photo" key={photo._id} >
            <img src={'/uploads/' + photo.url} />
            <p>{photo.description}</p>
            <p>Photographer: {photo.author.name}</p>
            <p>{photo.location}</p>
            <p>Date: {photo.posted}</p>
            
          </div>
        )}
     </div>
     </div>
    }

    style=
    {/*css*/`

    .grid {
      
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      
    }
      .photo {
        display: inline-block;
        width: 25%;
        border: 15px solid #fff;
      }

      h1 {
        padding-left: 15px;
      }

      .grid img {
        width: 100%;
      }

  
    `}
  />
}