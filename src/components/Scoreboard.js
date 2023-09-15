import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import '../css/Scoreboard.css'

import counterAudio from '../assets/buttons/counter.wav'
import limitAudio from '../assets/buttons/limit.wav'
// import playpointsAudio from '../assets/buttons/playpoints.wav'


export default function Scoreboard() {
    let counter = new Audio(counterAudio)
    let limit = new Audio(limitAudio)
    // let playpoints = new Audio(playpointsAudio)

    const incrementPlayerPoints = () => {
        setPlayerPoints(playerPoints + 1)
        counter.play()
    }
    const incrementEnemyPoints = () => {
        setEnemyPoints(enemyPoints + 1)
        counter.play()
    }
    const decrementPlayerPoints = () => {
        (playerPoints > 0) ? setPlayerPoints(playerPoints - 1) : setPlayerPoints(0);
        (playerPoints > 0) ? counter.play() : limit.play()
    }
    const decrementEnemyPoints = () => {
        (enemyPoints > 0) ? setEnemyPoints(enemyPoints - 1) : setEnemyPoints(0);
        (enemyPoints > 0) ? counter.play() : limit.play()
    }
    const [playerPoints, setPlayerPoints] = useState(20)
    const [enemyPoints, setEnemyPoints] = useState(20)

    return (
        <div className='ScoreboardContainer'>
            
            <div className='EnemyScoreboard'>
                <IconButton size='large' className='decButton' onClick={() => decrementEnemyPoints()} >
                    <RemoveIcon sx={{ color: "white", width:"50px", height: "50px" }} />
                </IconButton>
                {enemyPoints >= 20 ? <span className='pointsWhite'>
                    {enemyPoints}
                </span> : <span className='pointsRed'>
                    {enemyPoints}
                </span>}
                <IconButton size='large' onClick={() => incrementEnemyPoints()} >
                    <AddIcon sx={{ color: "white", width:"50px", height: "50px" }} className='incButton'/>
                </IconButton >
            </div>
            <div className='PlayerScoreboard'>
                <IconButton size='large' className='decButton' onClick={() => decrementPlayerPoints()} >
                    <RemoveIcon sx={{ color: "white", width:"50px", height: "50px" }} />
                </IconButton>
                {playerPoints >= 20 ? <span className='pointsWhite'>
                    {playerPoints}
                </span> : <span className='pointsRed'>
                    {playerPoints}
                </span>}
                <IconButton size='large' onClick={() => incrementPlayerPoints()} >
                    <AddIcon sx={{ color: "white", width:"50px", height: "50px" }} className='incButton'/>
                </IconButton >
            </div>
            
        </div>
    )
}
