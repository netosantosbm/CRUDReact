import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [values, setValues] = useState();

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
    });
  }

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Scrim Shop</h1>

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
    </div>
  );
}

export default App;
