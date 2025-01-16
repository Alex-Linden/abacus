import React from 'react'

export const Button = ({ text, buttonFunc }: { text: string, buttonFunc: (value: string) => void }) => {
    const handleClick = () => {
        buttonFunc(text)
    }
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  )
}
