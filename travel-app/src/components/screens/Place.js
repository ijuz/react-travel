
import React, { useState, useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../../App"
import './Places.css'


function Place( ) {
const {id} = useParams()
const [place, setPlace] = useState({
    gallery:[]
   
})
const {userData}=useContext(UserContext)

useEffect(() => {
    

axios
.get(
`https://traveller.talrop.works/api/v1/places/protected/${id}`,{
    headers:{
        Authorization: `Bearer ${userData?.access}`,
    },
}
)
.then((response) => {
console.log(response)
setPlace(response.data.data);
})
.catch((error) => {
console.log(error)
})

},[])

return (
<div className="main-page" key={place.id}>
    <div className="head" >
    <h1>{place.name}</h1>
    <p>{place.category_name}</p>
    </div>
    <div>
        <span>

        </span>
        <div className="spot-light" key={place.id}>
             <div className="first-img">
                     <img src={place.image}/>
             </div>
            <div className="loop-img">
            {place.gallery.map((img)=>(
                <div>
                   <img src={img.image} />
                </div>
            ))}
             </div>
        </div>
        <div>
            <h1>place deteals</h1>
            <span>
                {place.description}
            </span>

        </div>
    </div>

</div>
)
}

export default Place

