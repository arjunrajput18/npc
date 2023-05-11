import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/favorite">fav</NavLink>{ " "}
        <NavLink to="/profile">Profile</NavLink>{" "}
    </div>
  )
}
