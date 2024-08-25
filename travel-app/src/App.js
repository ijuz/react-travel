
import "./App.css"
import Place from "./components/screens/Place"
import Places from './components/screens/ListPlace'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import Button from './components/screens/Header'
import PrivateRoute from "./components/screens/PrivateRoute"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React,{useEffect,useState} from "react"

export const UserContext = React.createContext()
function App() {
    const [ userData,setUserData ]=useState({});
    const [loading,setLoading]=useState(true)
    const ubdateUserData = (action)=>{
        switch(action.type){
            case "LOGOUT":
                setUserData(null);
                localStorage.clear();
                break;
            case "LOGIN":
                setUserData(action.payload);
            default:
                break;
        }
    }
    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem("user_data")))
        setLoading(false)
    },[])
return loading ?(
    <h1>LOADING</h1>
) : (
<div>
    <UserContext.Provider value={{userData,ubdateUserData}}>
<Router>
<Button/>
<Routes>

<Route element={<Places />} path="/" />
<Route path="/place/:id" element={<PrivateRoute Element={<Place />} />} />
<Route element={<Login />} path="/login" exact />
<Route element={<Signup/>} path="/register" exact/>
</Routes>

</Router>
</UserContext.Provider>
</div>
)
}

export default App
