import { createContext, useState } from 'react'

export const CalcContext = createContext()
const CalcProvider = ({children}) => {
  
  //stato per le impostazioni di calcolo
  const [calc, setCalc] = useState({
    sign: "", //proprietà dell'operatore
    num: 0, //numero
    res: 0, //risultato
  })

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContext.Provider value={providerValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider