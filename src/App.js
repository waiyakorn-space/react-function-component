import {useState, useEffect, useRef, forwardRef} from 'react'

import PropType from 'prop-types'

const App = () => {
  const greeting = 'Hello Function Component!'


  return (
    <div className="App">
      <Headline value={greeting}/>

    </div>
  );
}

const Headline = ({value}) =>{

  return (
    <h1>{value}</h1>
  )
}

Headline.propTypes ={
  value: PropType.string.isRequired
}
    




export default App;
