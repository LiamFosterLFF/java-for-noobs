import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    // fetch("/api/products").then(response => {
    //   console.log(response.body);
    //   setProducts(response.url)
    // })
    const fetchData = async () => {
      const { data } = await axios.get("/api/products")
      console.log(data);
      setProducts(data)
    }
    fetchData();
  }, []);
  console.log(products);
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/bean.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
