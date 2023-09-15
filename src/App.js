import './App.css';
import Leader from './components/Leader'
import Scoreboard from './components/Scoreboard'
import Voicelines from './components/Voicelines'
// import wallpaperDragon from '../src/assets/leaders/Mizuchi/Wallpaper.jpg'
// import wallpaperDragon2 from '../src/assets/leaders/Mizuchi/36321.png'
// import wallpaperDragon3 from '../src/assets/leaders/Mizuchi/36326.png'
// import wallpaperDragon4 from '../src/assets/leaders/Mizuchi/990846.jpg'


function App() {
  let name = "Mizuchi"
  return (
    <div style={{background: 'url(' + require('../src/assets/leaders/Mizuchi/36326.png') + ') no-repeat center center fixed',
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    oBackgroundSize: "cover",
    backgroundSize: "cover" }}>
     {/* <div style={{backgroundImage: 'url(' + require('../src/assets/leaders/Mizuchi/Wallpaper.jpg') + ') '}}>  */}
      <header className="App-header">
        <Leader name={name} />
        <Voicelines name={name} />
        <Scoreboard />
      </header>
    </div>
  );
}

export default App;
