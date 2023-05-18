import { createBrowserRouter } from 'react-router-dom';
import Form from '../layout/form';
import QuestionPage from '../layout/questionPage';
import NotFound from '../layout/notFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Form />,
    errorElement: <NotFound/>,
  },
  {
    path: '/quiz',
    element: <QuestionPage />,
  },
]);
