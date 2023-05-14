import { useState } from 'react'

import { TextField } from '@mui/material'
import ValidationTextFields from './text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ValidationTextFields/>
    </>
  )
}

export default App
