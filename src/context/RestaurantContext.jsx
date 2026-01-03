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
        },
        {
        id:3,
        name:"Sushi World",
        "address":"789 Ocean Blvd, Fish Town",
        "type":"Japanese",
        "parking":true,
        "image":"https://example.com/sushiworld.jpg"
        },
        {
        id:4,
        name:"Burger Barn",
        "address":"321 Grill Rd, Meat City",
        "type":"American",
        "parking":false,
        "image":"https://example.com/burgerbarn.jpg"
        }
    ]);
    
    function deleteRestraunt(id){
        save(restraunts.filter(a=>a.id!==id));
    }
    function updateRestraunt(id,updatedData){
        setRestaurants(
            restraunts.map(a=>a.id===id ? {...a,...updatedData} : a)
        )
    }
   
  return (
    <RestaurantContext.Provider value={{restraunts,deleteRestraunt,updateRestraunt}}>
      {children}
   </RestaurantContext.Provider>
  )
}
