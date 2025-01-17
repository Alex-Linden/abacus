import React from 'react'

export const Button = ({ text, buttonFunc }: { text: string, buttonFunc: Function }) => {
    // const handleClick = () => {
    //     buttonFunc(text)
    // }
  return (
    <button className="button" onClick={() => buttonFunc()}>
      {text}
    </button>
  )
}
