import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom"
import ProductDescScreen from "./screens/ProductDescScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <Route path="/" Component={HomeScreen} />
        <Route path="/product/:id" Component={ProductDescScreen} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
