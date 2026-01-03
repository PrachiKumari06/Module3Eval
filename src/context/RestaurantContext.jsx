import { useState,createContext,useEffect } from 'react'

export const RestaurantContext = createContext();
export default function RestaurantProvider({children}) {
    const [restraunts,setRestaurants]=useState([
        {
        id:1,
        name:"The Spice House",
        "address":"123 Flavor St, Foodville",
        "type":"Indian",
        "parking":true,
        "image":"https://example.com/spicehouse.jpg"
        },
        {
        id:2,
        name:"Pasta Paradise",  
        "address":"456 Noodle Ave, Carb City",
        "type":"Italian",
        "parking":false,
        "image":"https://example.com/pastaparadise.jpg"
        }
    ]);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("restraunts")) || [];
        setRestaurants(data);
    },[])

    function save(data){
        localStorage.setItem("restraunts",JSON.stringify(data));
        setRestaurants(data);
    }
    function addRestraunt(data){
        save([...restraunts,data]);
    }
    function deleteRestraunt(id){
        save(restraunts.filter(a=>a.id!==id));
    }
    function updateRestraunt(id,updatedData){
        save(restraunts.map(a=>a.id===id ? {...a,...updatedData} : a));
    }
  return (
    <RestaurantContext.Provider value={{restraunts,addRestraunt,deleteRestraunt,updateRestraunt}}>
      {children}
   </RestaurantContext.Provider>
  )
}
