import THEMEProvide from './assets/MUI/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
function App() {
 
  
  
  return (
    <THEMEProvide>
      <RouterProvider router={router} />
    </THEMEProvide>
  );
}

export default App;
