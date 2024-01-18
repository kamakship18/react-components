import "./gallery.css"

export default function GallaryBody(props){
  const imageData = props.data;
  return(
<div>
    {
     props.data.map(image=>{
      return(
        <div key={image.id} className="column">
          <img src={image.img} alt=""></img>
        </div>
      )
    })
    }
</div>
  )
}