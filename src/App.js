import {useState, useEffect} from 'react'

const App = () => {
  const initialCount = +localStorage.getItem('storageCount') || 0;
//const [state, setstate] = useState(initialState) this is a hook
  const [count, setCount] = useState(initialCount);
  const [myName,setMyName] = useState('Change my name');
  const handlerIncrement = () => setCount(currentCount => currentCount+1); 
  const handlerDecrement = () => setCount(currentCount => currentCount-1); 

  useEffect(() => {
    localStorage.setItem('storageCount',count)
    console.log('updating when state changed.')
  },[count])
/*  ต้องการให้ทำงานทุกครั้ง           ไม่ต้องใส่ ,[]
    เฉพาะตอน mount or unmount   ใส่ ,[]
    เปลี่ยนตอนมีตัวแปรเปลี่ยน          ใส่ ,[variable]
*/


  return (
    <div className="App">
     <h1>{count}</h1>
     <h1>{myName}</h1>
     <button type="button" onClick={handlerIncrement}>Increment</button>
     <button type="button" onClick={handlerDecrement}>Decrement</button>
     <br />
     <button type='button' onClick={() => setMyName('Stan Smith')}>Change name</button>
    </div>
  );
}

export default App;
