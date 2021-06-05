import {useState, memo} from 'react'
import Headline from './Headline'

const App = () => {
  const greeting = 'Hello Function Component'

  return (
    <div className="App">
      <Headline value={greeting}/>
    </div>
  );
}


export default App;
