import  React, {useEffect, useState, createContext } from "react"
import { useHistory } from "react-router-dom";
import { auth } from "../firbase/firebase";



     export const AuthContext = createContext();

//  export  const useAuth = useContext (AuthContext)

export  const AuthProvider = ({ children })=>{
  const [user, setUser]= useState(null)
  const [loading, setLoading]= useState(true)
  const history = useHistory(); 

    useEffect(()=>{
        
        auth.onAuthStateChanged((user)=>{
            setUser(user)
            setLoading(false)
            if(user)
                history.push( "/chats")
            

        })
        
    },[user, history])

     const value = {user};

     return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
     )
}

