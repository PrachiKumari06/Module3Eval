import React from 'react'
import { RestaurantContext } from '../context/RestaurantContext';
import RestrauntCard from '../component/RestrauntCard';
import { useContext } from 'react';

export default function AdminDashboard() {
  const {restraunts} = useContext(RestaurantContext);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{display:"flex","gap":"20px","flexWrap":"wrap"}}>
        {restraunts.map((a) => (
        <RestrauntCard key={a.id} data={a} isAdmin={true} />
      ))}
      </div>
    </div>
  )
}
