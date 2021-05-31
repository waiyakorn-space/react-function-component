import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const greeting = "Hello Function Component!"
//const [state, setstate] = useState(initialState) this is a hook
  const [myTitle,setMyTitle] = useState('Edit something...')
  const handlerChange = event =>setMyTitle(event.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header value={myTitle} onChangeHeadline={handlerChange}/>
        <Input value={myTitle} onChangeHeadline={handlerChange}>
        <h3>Submit :</h3>
        Some text : 
        </Input>
      </header>      
    </div>
  );
}

const Header = ({value}) => (
  <div>
    <h1>{value}</h1>
  </div>
);

const Input = ({value,onChangeHeadline,children}) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeHeadline} />
  </label>
);



export default App;
