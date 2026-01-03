
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext.jsx';
export default function RestrauntCard({data,isAdmin}) {
    const {deleteRestraunt} = useContext(RestaurantContext);
    const navigate = useNavigate();
  return (
    <div style={card}>
        <img src={data.image} alt={data.name} width="200" />
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>{data.parking ? "Parking Available" : "No Parking"}</p>
      {isAdmin && (
        <div>
          <button style={btnstyle} onClick={() => navigate(`/admin/update/${data.id}`)}>Update</button>
          <button style={btnstyle} onClick={() => deleteRestraunt(data.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}
const card={
    border:"1px solid gray",
    borderRadius:"5px",
    padding:"10px",
    textAlign:"center"
}   
const btnstyle={
    marginRight:"10px",
    backgroundColor:"blue",
    color:"white",
    border:"none",
    padding:"5px 10px",
    borderRadius:"3px",
    cursor:"pointer"
}