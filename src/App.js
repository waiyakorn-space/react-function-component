import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hello Function Component!"
//const [state, setstate] = useState(initialState) this is a hook
  const [myTitle,setMyTitle] = useState('Edit something...')
  const handlerChange = event =>setMyTitle(event.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myTitle}
        </p>
        <input type="text" value={myTitle} onChange={handlerChange} />
      </header>
      <Header value={greeting}/>
    </div>
  );
}

function Header({value}){
  
  return(
    <h1>{value}</h1>
  )
}

export default App;
