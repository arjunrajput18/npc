import React from 'react'
import { ContextState } from '../context/Context'
import { SingleCard } from '../component/SingleCard'

export const Home = () => {

  const {bookData}=ContextState()
    return (
    <div>

    <ul>
      {bookData.map((data)=><SingleCard data={data} key={data.id} />)}
    </ul>
    </div>
  )
}
