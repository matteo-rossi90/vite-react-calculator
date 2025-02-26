import React from 'react'

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
  return (
    <button className={`${getStyle(value)} btn-number`}>{ value }</button>
  )
}

export default Button