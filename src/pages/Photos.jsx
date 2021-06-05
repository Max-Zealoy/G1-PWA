export default function Photos(props) {

  const s = useStates({});

  useEffect(async () => {
    console.log(props.userId)
    // fetching all photos
    s.photos = await Photo.find({ author: props.userId }).populate('author');
    // newest photos on top
    s.photos.sort((a, b) => a.posted > b.posted ? -1 : 1);
  }, []);

  return (
    
    s.photos ? null : <div>
      <div>
        <h1>{props.userId ? 'My photos' : 'All photos'}</h1>
        {s.photos.map(photo =>
          <div className="photo" key={photo._id} >
            <img src={'/uploads/' + photo.url} />
            <p>Photographer: {photo.author.name}</p>
          </div>
        )}
      </div>
    </div>

)
}