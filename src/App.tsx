import {Route, Routes} from "react-router-dom"
import './style.scss';
import { CardItem } from "./pages/CardItem/CardItem";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/ErrorPage";
function App() {
  
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:itemId" element={<CardItem/>}/>
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
  );
}

export default App;
