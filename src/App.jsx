import React, {useState} from 'react'
import duckduckgoLogo from './assets/DuckDuckGo_Logo.png'
import './App.css'
import Buscador from './components/Buscador/Buscador'
import './components/info_blocks/main_infoBlocks'
import MainInfoBlocks from './components/info_blocks/main_infoBlocks'
import Onboarding from './components/onboarding/Onboarding'
import DropDownMenu from "./components/DropDownMenu/DropDownMenu.jsx";
import SocialMedia from "./components/SocialMedia/SocialMedia.jsx";

function App() {

  return (

    <div className="App">
      <header className='App-header'>
        <SocialMedia />
        <DropDownMenu />
      </header>
      <Buscador></Buscador>
      <div className='fondo'>
        <svg class="content-info__curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438 134"><path d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z" fill="currentColor"></path></svg>
        <div className='filler'></div>
      </div>
      <MainInfoBlocks className ='mainInfo'></MainInfoBlocks>
      <Onboarding/>
    </div>
  )
}

export default App
