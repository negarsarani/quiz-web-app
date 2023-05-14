import { useState } from 'react';

import Form from './layout/form';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <Form />
    </>
  );
}

export default App;
