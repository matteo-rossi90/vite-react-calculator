import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

//gestione degli stili di operatori 
const getStyle = btn => {
    const className = {
        '=' : 'equal',
        'C' : 'others-calc',
        '+-': 'others-calc',
        '%': 'others-calc',
        'x' : 'operators',
        '+': 'operators',
        '-': 'operators',
        '/': 'operators',

    }
    return className[btn]
}

const Button = ({ value }) => {

    const { calc, setCalc } = useContext(CalcContext); //gestione dello stato
    
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

        //se il numero digitato è 0, non ne verrà aggiunto un altro se digitato di nuovo
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

    //gestione degli operatori
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    //gestione del pulsante uguale
    const equalClick = () => {

        //operazioni matematiche
        if(calc.res && calc.num){
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b, //somma
                    '-': (a, b) => a - b, //sottrazione
                    '/': (a, b) => a / b, //divisione
                    'x': (a, b) => a * b, //moltiplicazione
                }
                return result[sign](a, b)
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }

    }

    //gestione della percentuale
    const percentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }

    //gestione dei numeri positivi e negativi
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }
    
    //condizioni per il funzionamento
    const handleClick = () => {
        const result = {
            '.' : commaClick, //funzionamento del separatore
            'C' : resetClick, //funzione per cancellare
            'x' : signClick, //opertaore X
            '+': signClick, // operatore +
            '-': signClick, // operatore -
            '/': signClick, //operatore /
            '=' : equalClick, // funzione per restiruire i risultati
            '%' : percentClick, //funzione per il calcolo della percentuale
            '+-' : invertClick
        }
        if (result[value]){
            return result[value]()
        }else{
            return handleClickButton()
        }
  }
  return (
    //bottoni del calcolatore
    <button onClick={handleClick} className={`${getStyle(value)} btn-number`}>{ value }</button>
  )
}

export default Button