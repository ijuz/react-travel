import React,{useContext} from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';


function Header() {
    const {userData,ubdateUserData} = useContext(UserContext);
    const Logout=()=>{
        ubdateUserData({
            type:"LOGOUT"
        });
    }

  return (
    <div>{userData ?(
        <button onClick={()=>Logout()}>log out</button>
    ):(
        <Link to='/login'>
            <button>login</button>
        </Link>
    )}
    </div>
  )
}

export default Header
