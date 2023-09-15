import React from 'react'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import IconButton from '@mui/material/IconButton';
import '../css/Voicelines.css'
import greetingCernunnos from '../assets/leaders/Cernunnos/Greeting.mp3'
import thanksCernunnos from '../assets/leaders/Cernunnos/Thanks.mp3'
import apologyCernunnos from '../assets/leaders/Cernunnos/Apology.mp3'
import impressedCernunnos from '../assets/leaders/Cernunnos/Impressed.mp3'
import tauntCernunnos from '../assets/leaders/Cernunnos/Taunt.mp3'

import greetingMizuchi from '../assets/leaders/Mizuchi/Greeting.mp3'
import thanksMizuchi from '../assets/leaders/Mizuchi/Thanks.mp3'
import apologyMizuchi from '../assets/leaders/Mizuchi/Apology.mp3'
import impressedMizuchi from '../assets/leaders/Mizuchi/Impressed.mp3'
import tauntMizuchi from '../assets/leaders/Mizuchi/Taunt.mp3'

export default function Voicelines({ name }) {
  let greeting, thanks, apology, impressed, taunt;
  const buttonBackgroundColor = 'rgba(0, 0, 0, 0.6)'

  switch (name) {
    case 'Cernunnos':
      greeting = new Audio(greetingCernunnos)
      thanks = new Audio(thanksCernunnos)
      apology = new Audio(apologyCernunnos)
      impressed = new Audio(impressedCernunnos)
      taunt = new Audio(tauntCernunnos)
      break;
      case 'Mizuchi':
        greeting = new Audio(greetingMizuchi)
        thanks = new Audio(thanksMizuchi)
        apology = new Audio(apologyMizuchi)
        impressed = new Audio(impressedMizuchi)
        taunt = new Audio(tauntMizuchi)
        break;
    default:
      greeting = new Audio(greetingCernunnos)
      thanks = new Audio(thanksCernunnos)
      apology = new Audio(apologyCernunnos)
      impressed = new Audio(impressedCernunnos)
      taunt = new Audio(tauntCernunnos)
  }
  
  function playAudio(audio) {
    audio.play()
  }
  return (
    <div className='VoicelinesContainer'>
        <IconButton sx={{ color:"white", backgroundColor: buttonBackgroundColor }}
          onClick={() => playAudio(greeting)} >
          <WavingHandIcon />
        </IconButton>
        <IconButton sx={{ color:"white", backgroundColor: buttonBackgroundColor }}
          onClick={() => playAudio(impressed)} >
          <SentimentVerySatisfiedIcon />
        </IconButton>
        <IconButton sx={{ color:"white", backgroundColor: buttonBackgroundColor }}
          onClick={() => playAudio(apology)} >
          <SentimentVeryDissatisfiedIcon />
        </IconButton >
          <IconButton sx={{ color:"white", backgroundColor: buttonBackgroundColor }}
            onClick={() => playAudio(thanks)} >
          <ThumbUpIcon />
        </IconButton>
        <IconButton sx={{ color:"white", backgroundColor: buttonBackgroundColor }}
          onClick={() => playAudio(taunt)} >
          <ThumbDownIcon />
        </IconButton>
    </div>
  )
}
