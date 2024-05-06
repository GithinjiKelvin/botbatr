import React from 'react'
import BotCard from './BotCard'

function AllBots({bots, handleClick}) {

  return (
    <div className='grid'>
        {bots.map((bot) => (
        <BotCard bot={bot} key={bot.id} handleClick={handleClick}/>))}

    </div>
  )
}

export default AllBots