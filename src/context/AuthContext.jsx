import { useState,createContext } from 'react'

 const AuthContext = createContext();
function AuthProvider({children}){
const [role,setRole]=useState(localStorage.getItem("role"));    
function login(email,password){
    if(email==="admin@gmail.com" && password==="admin1234"){
        localStorage.setItem("role","admin");
                setRole("admin");
        return "admin";
    }
    if(email==="customer@gmail.com" && password==="customer1234"){
        localStorage.setItem("role","customer");
                setRole("customer");

        return "customer";
    }
    alert("Invalid Credentials");
    return null;
}

function logout(){
    setRole(null);
    localStorage.clear();
}
  return (
   <AuthContext.Provider value={{role,login,logout}}>
      {children}
   </AuthContext.Provider>
  )
}
export {AuthContext};
export default AuthProvider;