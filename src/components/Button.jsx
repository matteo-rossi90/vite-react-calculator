import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyle = btn => {
    const className = {
        '=' : 'equal',
        'x' : 'operators',
        '+': 'operators',
        '-': 'operators',
        '/': 'operators',

    }
    return className[btn]
}

const Button = ({ value }) => {

    const { calc, setCalc } = useContext(CalcContext);
    
    //gestione del separatore delle unità
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num // se non è già presente il punto separatore, non aggiungerne un altro
        })
    }

    //gestione del modo in cui cancellare i numeri
    const resetClick = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0
        })
    }

    //gestione del calcolo
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue

        //se il numero digitatlo è 0, non ne verrà aggiunto un altro se digitato di nuovo
        if(numberString === '0' && calc.num === 0){
            numberValue = '0'
        }else{
            numberValue = Number(calc.num + numberString) // se è un numero diverso da 0 il numero nuovo si aggiunerà al precedente
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }
    
    //condizioni per il funzionamento
    const handleClick = () => {
        const result = {
            '.' : commaClick, //funzionamento del separatore
            'C' : resetClick //funzione per cancellare
        }
        if (result[value]){
            return result[value]()
        }else{
            return handleClickButton()
        }
  }
  return (
    <button onClick={handleClick} className={`${getStyle(value)} btn-number`}>{ value }</button>
  )
}

export default Button