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

const Headline = ({headline}) =>{

  return (
    <h1>{headline}</h1>
  )
}

Headline.defaultProps ={
  headline: "Hello Word"
}
    




export default App;
