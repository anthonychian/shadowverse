import React from 'react'
import Leader from './Leader'
import Scoreboard from './Scoreboard'
import Voicelines from './Voicelines'
import PlayPoints from './PlayPoints'
import '../css/Home.css'

export default function Home({ name }) {
  return (
    <div style={{background: 'url(' + require('../assets/leaders/Mizuchi/36326.png') + ') no-repeat center center fixed',
        backgroundSize: "cover" }}>
        <header className="Home-header">
            <Leader name={name} />
            <Voicelines name={name} />
            <Scoreboard name={name} />
            <PlayPoints />
        </header>
    </div>
  )
}
