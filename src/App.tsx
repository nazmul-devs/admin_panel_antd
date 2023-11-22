import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './route/Routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default App;
