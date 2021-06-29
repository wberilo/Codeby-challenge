import { useEffect, useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [trufas, setTrufas] = useState([])

  // useEffect(() => {
  //   axios.get()
  // }, [])

  return (
    <div className="App">
      <div className="cart">
        <div className="title">
          <h1>Meu carrinho</h1> 
        </div>
        <hr/>
        <div className="total">

        </div>
        <hr/>
        <Button>Finalizar Compra</Button>
      </div>
    </div>
  );
}

export default App;
