import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';


const App = () => {
  return(
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Layout/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
