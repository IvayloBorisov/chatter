import { Dashboard, Login } from './components';
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {

  const [id, setID] = useLocalStorage({key: 'id'});

  return (
    <>
      { id ? <Dashboard id={ id } /> : <Login onSubmitID={ setID } /> }
    </>
  );
}

export default App;
