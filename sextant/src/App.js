import Header from "./Components/Header";
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <Card Name= "Public IPV4" ></Card>
        <Card Name= "Public IPV6" ></Card>
      </div>
    </div>
  );
}

export default App;
