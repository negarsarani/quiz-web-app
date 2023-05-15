import { useState } from 'react';

import Form from './layout/form';
import Button from './components/Button';
import THEMEProvide from './assets/MUI/theme';
import QuestionPage from './layout/questionPage';


function App() {
  const [count, setCount] = useState(0);

  return (
  
      <THEMEProvide>
        <Form />
        {/* <QuestionPage/> */}
      </THEMEProvide>
  );
}

export default App;
