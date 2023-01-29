
import './App.css';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
    <Header></Header>
      <div className="Card-con">
        <Card></Card>
        <Card></Card>
      
       </div>
       </div>
  );
}

export default App;
