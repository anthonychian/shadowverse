import React from 'react'
import imageCernunnos from '../assets/leaders/Cernunnos/Cernunnos.png'
import imageMizuchi from '../assets/leaders/Mizuchi/Mizuchi.png'
// import wallpaperDragon from '../assets/leaders/Mizuchi/Wallpaper.jpg'
import '../css/Leader.css'

export default function Leader({ name }) {
  let image
  switch (name) {
    case 'Cernunnos':
      image = imageCernunnos
      break;
    case 'Mizuchi':
      image = imageMizuchi
      // wallpaper = wallpaperDragon
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
