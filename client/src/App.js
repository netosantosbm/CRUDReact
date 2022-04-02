import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState();
  const [listProducts, setListProducts] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListProducts(response.data);
    })
  }, []);

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Cad. Produtos</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          placeholder="Preço"
          name="cost"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          placeholder="Categoria"
          name="category"
          className="register-input"
          onChange={handleChangeValues}
        />

        <button className="register-button" onClick={() => handleClickButton()}>
          Cadastrar
        </button>
      </div>
      {typeof listProducts !== "undefined" && listProducts.map((value) => {
        return <Card key={value.id}
          listCard={listProducts}
          setListCard={setListProducts}
          id={value.id}
          name={value.name}
          cost={value.cost}
          category={value.category}
        ></Card>;
      })}

    </div>
  );
}

export default App;
