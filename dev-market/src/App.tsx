import {BrowserRouter,} from 'react-router-dom'
import RoutesApp from './web/routes/Routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App
