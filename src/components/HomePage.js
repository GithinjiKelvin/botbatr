import React, { useEffect, useState } from 'react'
import AllBots from './AllBots';
import YourBotsArmy from './YourBotsArmy';

const API = "http://localhost:3000/bots"

function HomePage() {
    // starting with an empty array, prevent it from being undefined 
    // map cannot work on undefined 
    const[bots, setbots] = useState([])

    // creating an array to store my bot army
    // const [enlistedBots, setEnlistedBots] = useState([])

// loading initially using useeffect & dispaly it once in an array
    useEffect(()=> {fetch(API)
.then((res) => res.json())
.then(setbots)}, []);

function enlistBots(clickedBot){
    // console.log(`clicked on ${bot.name}`);
    // setEnlistedBots([...enlistedBots, bot])
    const newBots = bots.map((bot)=>
    bot.id === clickedBot.id ? {...bot, enlisted:true} : bot);
    setbots(newBots);
}
function releaseBot(clickedBot){
    const newBots = bots.map((bot)=>
        bot.id === clickedBot.id ? {...bot, enlisted:false} : bot);
        setbots(newBots);
}

function discharge(discharged){
    setbots(bots.filter(bot => bot.id !== discharged.id))
}

  return (
    <div>
        {/* <YourBotsArmy bots={enlistedBots} handleClick={releaseBot}/> */}
        <YourBotsArmy bots={bots.filter((bot)=>bot.enlisted)} handleClick={releaseBot} discharge={discharge}/>
        <AllBots bots = {bots} handleClick={enlistBots} discharge={discharge}/>
    </div>
  )
}

export default HomePage