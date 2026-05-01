import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import About from "./pages/About"
import Erro404 from "./pages/Erro404"

export default function App(){
  return(
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/*" element={<Erro404 />} />
    </Routes>
  )
}