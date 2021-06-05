import {useState, memo} from 'react'

const App = () => {
  /*const initialCount = +localStorage.getItem('storageCount') || 0;
  const [myName,setMyName] = useState('Change my name');*/
//const [state, setstate] = useState(initialState) this is a hook
  const [count, setCount] = useState(0);
  const [greeting,setGreeting] = useState('Hello React!')

  const handlerIncrement = () => setCount(currentCount => currentCount+1); 
  const handlerDecrement = () => setCount(currentCount => currentCount-1); 

  const handlerChange = event => setGreeting(event.target.value);

/*  useEffect(() => {
    localStorage.setItem('storageCount',count)
    console.log('updating when state changed.')
  },[count])
    ต้องการให้ทำงานทุกครั้ง           ไม่ต้องใส่ ,[]
    เฉพาะตอน mount or unmount   ใส่ ,[]
    เปลี่ยนตอนมีตัวแปรเปลี่ยน          ใส่ ,[variable]
*/


  return (
    <div className="App">
      <input type="text" onChange={handlerChange} />
      <br />

      <Count count={count}/>

     <button type="button" onClick={handlerIncrement}>Increment</button>
     <button type="button" onClick={handlerDecrement}>Decrement</button>

    </div>
  );
}

const Count = memo(({count}) => {
  console.log('Does it (re)render?');
  return <h1>{count}</h1>
})
export default App;
