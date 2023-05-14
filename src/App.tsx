import { useState } from 'react';

import Form from './layout/form';
import Button from './components/Button';
import THEMEProvide from './assets/MUI/theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <THEMEProvide>
      <Form />
    </THEMEProvide>
  );
}

export default App;
