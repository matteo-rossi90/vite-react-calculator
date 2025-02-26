import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'

import './App.css'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [3, 2, 1, "+"],
  [0, ".", "="],
]

function App() {
  

  return (
    <>
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
    </>
  )
}

export default App
