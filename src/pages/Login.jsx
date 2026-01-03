import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        const role = login(email,password);
        if(role==="admin"){
            navigate("/admin/dashboard");
        }else if(role==="customer"){
            navigate("/customer/dashboard");
        }
    }
  return (
    <div style={logstyle}>
      <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
const logstyle={
    display:"flex",
    flexDirection:"column",
    width:"400px",
    margin:"100px auto",
    gap:"10px",
    padding:"20px",
    border:"1px solid black",
    borderRadius:"5px",
}
