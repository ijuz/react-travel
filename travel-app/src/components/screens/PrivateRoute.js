import React, { useContext } from 'react';
import { Navigate , useLocation, } from 'react-router-dom';
import { UserContext } from '../../App';

function PrivateRoute({ Element }) {
  const { userData } = useContext(UserContext);
  const location = useLocation()

  // Directly return either the element or a <Navigate> component based on authentication status
  return userData?.access ? Element : <Navigate to={
    {pathname:"/login",
    search: `?next=${location.pathname}`
    }}  />;
}

export default PrivateRoute;