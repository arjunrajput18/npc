import React from 'react'
import { ContextState } from '../context/Context'

export const Profile = () => {
    const {profileData}=ContextState()
const {name,
    bio,
    img}=profileData
  return (
    <div>
        <li>
            <img src={img} alt="img" height={200} width={200}/>
            <p>{name}</p>
            <p>{bio}</p>
        </li>
    </div>
  )
}
