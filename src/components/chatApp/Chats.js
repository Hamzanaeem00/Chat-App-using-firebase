import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firbase/firebase'


const Chats = () => {
      const history = useHistory()

  const handleLogout = async ()=>{
      await auth.signOut()
      history.push('/')
  }

    
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
        projectId= "d068da18-7ee4-4197-bbc0-f0cbd543b724"
        userName ="."
        userSecret = "." />
    </div>
  )
}

export default Chats