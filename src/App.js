import {Component,useState, useEffect} from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       value: localStorage.getItem('myValueInLocalStorage') || ''
//     }
//   }

//   componentDidUpdate() {
//     localStorage.setItem('myValueInLocalStorage', this.state.value);
//   }

//   onChange = event => {
//     this.setState({value: event.target.value})
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello React ES6 Class Component</h1>
//         <input type="text" value={this.state.value} onChange={this.onChange} />

//         <p>{this.state.value}</p>

//       </div>
//     )
//   }
// }



const App = () => {
  const [value,setValue] = useState(localStorage.getItem('myValueInLocalStorage') || '');

  useEffect(()=>{
    localStorage.setItem('myValueInLocalStorage',value) 
  },[value])

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React Function Component</h1>
      <input type="text" value={value} onChange={onChange} />
      <p>{value}</p>
    </div>
  )
}

export default App
