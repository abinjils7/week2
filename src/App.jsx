import './App.css';
import ProductList from './components/ProductList';
import UseReducer from './components/UseReducer';
import useCounter from './hooks/Counter';


// function App() {
//   return (
//     <div className="App">

//       {/* <ProductList></ProductList> */}
//       {/* <UseReducer></UseReducer> */}

      
//     </div>
//   );
// }

// export default App;



function CounterComponent() {



  const{increment,decrement,reset,state}=useCounter(0)


  return (
    <div>

      <h2>{state} </h2>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

      
    </div>
  )
}

export default CounterComponent
