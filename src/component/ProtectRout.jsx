import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  {AuthContext } from '../context/AuthContext';

export default function ProtectRout({role,children}) {
  const {role:userRole} = useContext(AuthContext);
  if(!userRole){
    return <Navigate to="/"/>
  }
  if(userRole!==role){
    return <Navigate to="/"/>
  }
  
    return children;
}

