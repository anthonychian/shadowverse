import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import '../css/Scoreboard.css'

import scoreAudio from '../assets/buttons/counter.mp3'
import limitAudio from '../assets/buttons/limit.wav'

import victoryCernunnos from '../assets/leaders/Cernunnos/Victory.mp3'
import concedeCernunnos from '../assets/leaders/Cernunnos/Concede.mp3'

import victoryMizuchi from '../assets/leaders/Mizuchi/Victory.mp3'
import concedeMizuchi from '../assets/leaders/Mizuchi/Concede.mp3'

import victoryForte from '../assets/leaders/Forte/Victory.mp3'
import concedeForte from '../assets/leaders/Forte/Concede.mp3'

import victoryPompom from '../assets/leaders/Pompom/Victory.mp3'
import concedePompom from '../assets/leaders/Pompom/Concede.mp3'

export default function Scoreboard({ name }) {
    let scoreCounter = new Audio(scoreAudio)
    let limit = new Audio(limitAudio)

    let victory, concede;
    let win = false;
    let lose = false;

    switch (name) {
        case 'Cernunnos':
            victory = new Audio(victoryCernunnos)
            concede = new Audio(concedeCernunnos)
            break;
        case 'Mizuchi':
            victory = new Audio(victoryMizuchi)
            concede = new Audio(concedeMizuchi)
            break;
        case 'Forte':
            victory = new Audio(victoryForte)
            concede = new Audio(concedeForte)
            break;
        case 'Pompom':
            victory = new Audio(victoryPompom)
            concede = new Audio(concedePompom)
            break;
        default:
        victory = new Audio(victoryCernunnos)
        concede = new Audio(concedeCernunnos)
    }
  

    const incrementPlayerPoints = () => {
        setPlayerPoints(playerPoints + 1)
        scoreCounter.play()
    }
    const incrementEnemyPoints = () => {
        setEnemyPoints(enemyPoints + 1)
        scoreCounter.play()
    }
    const decrementPlayerPoints = () => {
        (playerPoints > 0) ? setPlayerPoints(playerPoints - 1) : setPlayerPoints(0);
        (playerPoints > 0) ? scoreCounter.play() : limit.play()
    }
    const decrementEnemyPoints = () => {
        (enemyPoints > 0) ? setEnemyPoints(enemyPoints - 1) : setEnemyPoints(0);
        (enemyPoints > 0) ? scoreCounter.play() : limit.play()
    }
    const [playerPoints, setPlayerPoints] = useState(20)
    const [enemyPoints, setEnemyPoints] = useState(20)

    if (enemyPoints === 0)
        win = true
    if (playerPoints === 0)
        lose = true

    useEffect(() => {
        if (win) 
            victory.play()
    }, [win])

    useEffect(() => {
        if (lose) 
            concede.play()
    }, [lose])

    return (
        <div className='ScoreboardContainer'>
            <div className='EnemyScoreboardContainer'>
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
            </div>
            <div className='PlayerScoreboardContainer'>
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
            
        </div>
    )
}
