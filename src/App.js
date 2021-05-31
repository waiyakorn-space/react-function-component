import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hello Function Component!"
//const [state, setstate] = useState(initialState) this is a hook
  const [mytitle,setMyTitle] = useState('Edit something...')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {mytitle}
        </p>

        <input type="text" value={mytitle} onChange={event =>setMyTitle(event.target.value) } />
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
