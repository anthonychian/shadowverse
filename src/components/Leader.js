import React from 'react'
import imageCernunnos from '../assets/leaders/Cernunnos/Cernunnos.png'
import imageMizuchi from '../assets/leaders/Mizuchi/Mizuchi.png'
import imageForte from '../assets/leaders/Forte/Forte.png'

import '../css/Leader.css'

export default function Leader({ name }) {
  let image
  switch (name) {
    case 'Cernunnos':
      image = imageCernunnos
      break;
    case 'Mizuchi':
      image = imageMizuchi
      break;
    case 'Forte':
      image = imageForte
      break;
    default:
      image = imageCernunnos
  }
  return (
    <div className="LeaderContainer">
        <img src={image} className="LeaderImage" alt="Leader" />
    </div>
  )
}
