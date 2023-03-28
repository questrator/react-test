import './App.css';
import Books from './Books';

function App() {  
  const books = [
    {name: "one", id: 12, price: 340},
    {name: "two", id: 14, price: 140},
    {name: "three", id: 16, price: 240},
    {name: "four", id: 1123, price: 840},
    {name: "five", id: 456, price: 450},
    {name: "six", id: 3523, price: 257},
    {name: "seven", id: 823, price: 27},
    {name: "eight", id: 67, price: 118},
  ];
  return (
    <Books books={books}/>
  );
}

export default App;
