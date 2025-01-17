import './Display.css'

const Display = ({operation}: {operation: string}) => {
  return (
    <div className='display'>
      <h1>{operation}</h1>
    </div>
  )
}

export { Display }