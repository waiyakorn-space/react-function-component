import {useState, useEffect, useRef, forwardRef} from 'react'

const App = () => {
  const [greeting,setGreeting] = useState('Hello React!')

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <Input value={greeting} handleChange={handleChange} />

    </div>
  );
}

const Input = ({value,handleChange}) =>{
  const ref = useRef(); //ต้องการ focus ที่ component นี้
  useEffect(() => ref.current.focus() ,[]);

  return (
    <input type="text" value={value} onChange={handleChange} ref={ref} />
  )
}

    




export default App;
