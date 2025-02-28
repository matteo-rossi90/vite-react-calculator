import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Wrapper from './components/Wrapper'
import Screen from './components/Screen'

import './App.css'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from './context/CalcContext'

//elenco dei pulsanti del calcolatore
const btnValues = [
  ["C", "+-", "%", "/"],
  [1, 2, 3, "x"],
  [4, 5, 6, "-"],
  [7, 8, 9, "+"],
  [0, ".", "="],
]

function App() {

  //gestione del pulsante per cambiare da modalità diurna a notturna
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
    <CalcProvider>
        <Wrapper darkMode={darkMode}>
        <div className="btn-container">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon}></FontAwesomeIcon>
            </button>
        </div>
        <Screen/>
        <ButtonBox>
          {
            //inserimento dinamico dei bottoni del calcolatore
            btnValues.flat().map((btn, i) =>
              <Button value={btn} key={i}/>
            )
          }
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    </>
  )
}

export default App
