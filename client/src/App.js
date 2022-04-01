import './App.css';

function App() {
  return (
    <div className="App--container">
      <div className='register--conteiner'>
        <h1>Formulário de Cadastro</h1>
        <input 
        type="text" 
        name='name' 
        placeholder='Nome' 
        className='register--input'
        />
        <input 
        type="text" 
        name='cost' 
        placeholder='Preço' 
        className='register--input'
        />
        <input 
        type="text" 
        name='category' 
        placeholder='Categoria' 
        className='register--input'
        />
        <input 
        type="text" 
        name='name' 
        placeholder='Nome' 
        className='register--input'
        />
      </div>
      
    </div>
  );
}

export default App;
