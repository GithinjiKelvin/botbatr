import React from 'react'
import BotCard from './BotCard'

function YourBotsArmy({bots, handleClick, discharge}) {
  return (
    <div className='ui segment inverted olive bot-army'>
        <div className='column grid'>
            <div className='row bot-army-row'>
                {bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={handleClick} discharge={discharge}/>)}
            </div>
        </div>

    </div>
  )
}

export default YourBotsArmy