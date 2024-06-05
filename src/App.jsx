import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log('Made by https://github.com/InmerZ')

  //background-1-makeYourself
  //background-2-morningView
  //background-3-lightGr
  //background-4-morningViewxxiii

  const handleClick = (el) => {
    const divBackground = document.getElementById("setBackground");
    const audio = document.getElementById("playSong");
   
    if (el.target.id === "makeYourself") {
    divBackground.className = "background-1-makeYourself";
      audio.src = "/assets/audio/drive.mp3";
  } else if (el.target.id === "morningView") {
    divBackground.className = "background-2-morningView";
    audio.src = "/assets/audio/wish-you-were-here.mp3";
  } else if (el.target.id === "lightGr") {
   divBackground.className = "background-3-lightGr";
   audio.src = "/assets/audio/dig.mp3";
  } else if (el.target.id === "morningViewxxiii") {
    divBackground.className = "background-4-morningViewxxiii";
    audio.src = "/assets/audio/echo.mp3";
  }
}

  const handleVolume = (el) => {
    const audio = document.getElementById("playSong");
    if(el.target.src === "http://localhost:5173/assets/svg/volume-on.svg" && audio.muted === false){
      el.target.src = "http://localhost:5173/assets/svg/volume-off.svg";
      audio.muted = true;
    }else if(el.target.src === "http://localhost:5173/assets/svg/volume-off.svg" && audio.muted === true){
      el.target.src = "http://localhost:5173/assets/svg/volume-on.svg";
      audio.muted = false;
    }

  }

  return (
    <div className="" id="setBackground">
      <audio src="" autoPlay loop  id="playSong"></audio>
      <img className="band-logo" src="/assets/svg/band-logo.svg"></img>
      <section className="album__section">
      <div className="album__background"></div>
      <div className="album__container">
        <div className="album__item" id="makeYourself" onClick={handleClick}></div>
        <div className="album__item" id="morningView" onClick={handleClick}></div>
        <div className="album__item" id="lightGr" onClick={handleClick}></div>
        <div className="album__item" id="morningViewxxiii" onClick={handleClick}></div>
      </div>
      </section>
      <footer>
        <p className="copyRightFooter">Content curated by fans. <br/>   Music and video property of <br /> Incubus. ©</p>
        <img src="/assets/svg/volume-on.svg" className="volume-on" id="volumeOn" alt="volume on" onClick={handleVolume}></img>
      </footer>
    </div>
  );
}

export default App;
