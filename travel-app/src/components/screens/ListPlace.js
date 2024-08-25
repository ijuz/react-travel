import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './Places.css';

import axios from 'axios'
function Places() {
    const [places,setPlaces] = useState([])
    useEffect(()=>{
        axios
        .get("https://traveller.talrop.works/api/v1/places/")
        .then((response)=>{
            setPlaces(response.data.data);
    
        });
    },[])
   const renderPlaces = ()=>{
    return places.map((list)=>(
        <li key={list.id}>
            <Link className='link-component' to={`/place/${list.id}`}>
            <div className='img-container'>
                <img src={list.image} className='main-img'/>
            </div>
            <div className='name'>
                {list.name}
            </div>
            <span className='bottom'>
                <img src={require("../../Assets/images/place.svg").default} className='icon'/>
                <span className='loacation-name'>
                   {list.location}
                </span>
            </span>
            </Link>
        </li>
       
    ))
   }
  return (
    <div className='main-container'>
      <ul>
        {renderPlaces()}
      </ul>
    </div>
  )
}

export default Places
