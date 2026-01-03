
import {Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Navbar() {
    const {role,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    function handleLogout(){
        logout();
        navigate("/");
    }
  return (
    <nav style={{display:"flex",justifyContent:"space-around",border:"1px solid black",padding:"10px"}}>
<h3>Restraunt App</h3>
<div>
    {!role && (<Link to="/">Login</Link>)}
    {role==="admin" && (
        <Link to="/admin/dashboard" style={{marginRight:"10px"}}>Admin Dashboard</Link>)}
    {role==="customer" && (
        <Link to="/customer/dashboard" style={{marginRight:"10px"}}>Customer Dashboard</Link>)}
    {role && (<button onClick={handleLogout}>Logout</button>)}
</div>
    </nav>
  )
}
