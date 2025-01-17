import React from 'react'

const botTypeClasses = {
    Assult: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
};

function BotCard({bot, handleClick, discharge}) {
  return (
    <div className='column'>
        <div className='card' key={bot.id}
        onClick={() => handleClick(bot)}>
            <div className='image'>
                <img alt='oh no' src={bot.avatar_url}/>
            </div>
            <div className='content'>
                <div className='header'>
                    {bot.name}
                    <i className={botTypeClasses[bot.bot_class]}/>
                </div>
                <div className='meta text-wrap'>
                    <small>{bot.catchphrase}</small>
                </div>
            </div>
            <div className='extra-content'>
                <span>
                    
                    <i class="fa-regular fa-heart"></i>
                    {bot.health}
                </span>

                <span>
                <i class="fa-solid fa-bolt-lightning"></i>
                    {bot.damage}
                </span>

                <span>
                <i class="fa-regular fa-bookmark"></i>
                    {bot.armor}
                </span>
                <span>
                    <div className='ui center aligned segment basic'>
                        <button className='ui mini red button'
                        onClick={(e)=> {
                            e.stopPropagation();
                            discharge(bot);
                        }
                        }
                        >X</button>
                    </div>
                </span>
            </div>

        </div>
    </div>
  )
}

export default BotCard