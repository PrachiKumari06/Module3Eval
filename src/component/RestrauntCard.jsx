
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
          <button onClick={() => navigate(`/admin/update/${data.id}`)}>Update</button>
          <button onClick={() => deleteRestraunt(data.id)}>Delete</button>
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