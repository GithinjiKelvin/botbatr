import React from 'react'
import BotCard from './BotCard'
import "./Bots.css"

function AllBots({bots, handleClick, discharge}) {

  return (
    <div className='grid'>
        {bots.map((bot) => (
        <BotCard bot={bot} key={bot.id} handleClick={handleClick} discharge={discharge}/>))}

    </div>
  )
}

export default AllBots