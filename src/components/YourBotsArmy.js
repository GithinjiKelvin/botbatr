import React from 'react'
import BotCard from './BotCard'

function YourBotsArmy({bots}) {
  return (
    <div className='ui segment inverted olive bot-army'>
        <div className='column grid'>
            <div className='row bot-army-row'>
                {bots.map(bot => <BotCard key={bot.id} bot={bot}/>)}
            </div>
        </div>

    </div>
  )
}

export default YourBotsArmy