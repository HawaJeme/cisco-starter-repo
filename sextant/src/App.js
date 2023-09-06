import Header from "./Components/Header";
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <Card 
          Name= "Public IP"
          Num= "0"
        />
        <Card 
          Name= "Latency metrics"
          Num= "0"
        />
      </div>
    </div>
  );
}

export default App;
