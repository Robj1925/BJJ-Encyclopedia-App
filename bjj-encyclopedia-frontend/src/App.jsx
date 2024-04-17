import './App.css'
import { ListUserComponent } from './components/ListUserComponent'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { Todo } from "./components/Todo";


function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/todo" element= { <Todo/>} /> 
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
