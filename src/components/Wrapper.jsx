import React from 'react'

const Wrapper = ({ children, darkMode }) => {
  return (
    <div className={`wrapper ${darkMode ? "dark" : ""}`}>{ children }</div>
  )
}

export default Wrapper