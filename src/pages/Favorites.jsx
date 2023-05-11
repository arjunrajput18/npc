import React from 'react'
import { ContextState } from '../context/Context'
import { SingleCard } from '../component/SingleCard'

export const Favorites = () => {

    const {favData}=ContextState()
  return (
 <div>
    <ul>
        {favData.map((data)=><SingleCard data={data} noBtn/>)}
    </ul>
 </div>
  )
}
