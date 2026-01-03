import React, { useContext, useState } from 'react'
import { RestaurantContext } from '../context/RestaurantContext';
import { useParams,useNavigate } from 'react-router-dom';
export default function UpdateRestraunt() {
    const {id}= useParams();
    const {restraunts,updateRestraunt}= useContext(RestaurantContext);
    const navigate= useNavigate();
    const restrantData=restraunts.find(a=>a.restrauntsId===Number(id));

    const [name,setName]= useState(restrantData.name);
    function handleSubmit(){
        updateRestraunt(restrantData.restrauntsId,{name});
        navigate("/admin/dashboard");
    }
  return (
    <div>
      <h1>Update Restraunt</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSubmit}>Update</button>
    </div>
  )
}
