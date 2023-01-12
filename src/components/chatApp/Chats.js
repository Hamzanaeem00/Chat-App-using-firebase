import React, { useContext, useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useHistory } from 'react-router-dom'
// import { useAuth } from '../../contexts/AuthContext'
import { auth } from '../../firbase/firebase'
import {AuthContext} from "../../contexts/AuthContext"
import axios from 'axios'


const Chats = () => {
      const history = useHistory()
  const [loading, setLoading]= useState(true)

  const useAuth = useContext(AuthContext)
      const {user} = useAuth
      console.log(user);

  const handleLogout = async ()=>{
      await auth.signOut()
      history.push('/')
  }

  const getFile = async (url)=> {
    const response = await fetch(url , {mode: 'no-cors'},{referrerpolicy:"no-referrer"})
    console.log("response==>",response);

    const data = await response.blob();
    console.log("response url convert to binary format 0,1 by using blob", data);

    return new File([data], "userPhoto.jpeg", {type: 'image/jpeg'}) ;
  }

  useEffect(()=>{
  if(!user){
    history.push('/')
    return;
  }
  axios.get('https://api.chatengine.io/users/me/' , {  
    
    headers:{
      "project-id": "d068da18-7ee4-4197-bbc0-f0cbd543b724",
      "user-name": user.email,
      "user-secret": user.uid,
      // "private-key":"7dc9f4ff-b09e-4a36-a710-412d39abe746" ,
    }
  })
  .then (()=>{
    setLoading(false)
  })
  .catch(()=>{
    let formData = new FormData();
    formData.append("email", user.email)
    formData.append("username", user.email)
    formData.append("usersecret", user.uid)

    getFile(user.photoURL)
    .then((avatar)=>{
      formData.append("avatar", avatar, avatar.name);

     axios.post('https://api.chatengine.io/users/', 
     formData, 
      {headers: { "private-key": "7dc9f4ff-b09e-4a36-a710-412d39abe746 " }
    })
    .then(()=> setLoading(false))
    .catch((error)=> console.log("error==>",error))

    })
  })
  },[user, history])


  if(!user || loading) return 'Loading....'
    
  return (
    <div className='chats-page'>
        <div className='nav-bar'>
            <div className='logo-tab'>
                Chat App
            </div>
            <div onClick={handleLogout} className='logout-tab'>
               Logout
            </div>
        </div>

        <ChatEngine height ="calc(100vh -66px)"
        projectID="d068da18-7ee4-4197-bbc0-f0cbd543b724"
        userName ={user.email}
        userSecret ={user.uid} />
    </div>
  )
}

export default Chats