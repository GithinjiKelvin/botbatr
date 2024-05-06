import React, { useEffect, useState } from 'react'
import AllBots from './AllBots';
import YourBotsArmy from './YourBotsArmy';

const API = "http://localhost:3000/bots"

function HomePage() {
    // starting with an empty array, prevent it from being undefined 
    // map cannot work on undefined 
    const[bots, setbots] = useState([])

    // creating an array to store my bot army
    const [enlistedBots, setEnlistedBots] = useState([])

// loading initially using useeffect & dispaly it once in an array
    useEffect(()=> {fetch(API)
.then((res) => res.json())
.then(setbots)}, []);

function handleClick(bot){
    // console.log(`clicked on ${bot.name}`);
    setEnlistedBots([...enlistedBots, bot])
}

  return (
    <div>
        <YourBotsArmy bots={enlistedBots}/>
        <AllBots bots = {bots} handleClick={handleClick}/>
    </div>
  )
}

export default HomePage