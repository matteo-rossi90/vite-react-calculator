import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'

import './App.css'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from './context/CalcContext'

const btnValues = [
  ["C", "+-", "%", "/"],
  [1, 2, 3, "x"],
  [4, 5, 6, "-"],
  [7, 8, 9, "+"],
  [0, ".", "="],
]

function App() {
  

  return (
    <>
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {
            btnValues.flat().map((btn, i) =>
            <Button
              value={btn}
              key={i}/>)
          }
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    </>
  )
}

export default App
