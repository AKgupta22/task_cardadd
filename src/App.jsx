import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../components/Login/Login'
import Signup from "../components/Signup/signup"
import Home from "./Home"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App