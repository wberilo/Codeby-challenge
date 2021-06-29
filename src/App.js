import { useEffect, useState } from "react";
import { Button, Alert, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchData = (url) =>{
    axios
      .get(url)
      .then((result) => {
        setResponse(result.data.items);
        setTotal(result.data.totalizers[0].value + result.data.totalizers[1].value);
      });
  }

  useEffect(() => {
    fetchData("https://raw.githubusercontent.com/wberilo/Codeby-challenge/master/abaixo-10-reais.json")
  }, []);

  function addVirgulasESifrao(numero) {
    if(numero < 100) return `R$ 0,${numero}`
    return `R$ ${numero.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")}`;
  }

  return (
    <div className="App">
      <div>
        <h1 className="condicoesTitle">Condições</h1>
        <div className="condicoes">
          <Button variant="warning" onClick={() => fetchData("https://raw.githubusercontent.com/wberilo/Codeby-challenge/master/abaixo-10-reais.json")}>abaixo de 10 reais</Button>
          <Button variant="danger" onClick={() => fetchData("https://raw.githubusercontent.com/wberilo/Codeby-challenge/master/acima-10-reais.json")}>acima de 10 reais</Button>
        </div>
      </div>
      <div className="cart">
        <div className="title">
          <h2 className="bold">Meu carrinho</h2>
        </div>
        <hr />
        {response.map(
          ({ name, id, imageUrl, sellingPrice, price }) => (
            <div className="listItem" key={id}>
              <img src={imageUrl} alt={name} />
              <div>
                <h4 className="bold">{name}</h4>
                <p>{addVirgulasESifrao(price)}</p>
                <p className="bold">{addVirgulasESifrao(sellingPrice)}</p>
              </div>
            </div>
          )
          )}
        <hr />
        <div className="total">
          <div>
            <h2 className="bold">Total</h2>
          </div>
          <div>
            <h2 className="bold">{response && addVirgulasESifrao(total)}</h2>
          </div>
        </div>
        {total > 1000 && (
          <Alert className="alert bold" variant="success ">
            Parabéns, sua compra tem frete grátis !
          </Alert>
        )}
        <hr />
        <div className="checkout">
          <Button size="lg" className="checkoutBtn bold">Finalizar Compra</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
