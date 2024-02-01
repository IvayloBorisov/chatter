import Login from "./components/Login";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {

  const [id, setID] = useLocalStorage({key: 'id'});

  return (
    <>
      {console.log(id)}
      <Login onSubmitID={ setID } />
    </>
  );
}

export default App;
