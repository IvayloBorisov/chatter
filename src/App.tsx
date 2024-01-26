import { useState } from "react";
import Login from "./components/Login";

const App = () => {

  const [id, setID] = useState('');

  return (
    <>
      {console.log(id)}
      <Login onSubmitID={ setID } />
    </>
  );
}

export default App;
