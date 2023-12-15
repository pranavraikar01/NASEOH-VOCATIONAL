import Login from "./Pages/Login";
import VocationalForm from "./Pages/VocationalForm";
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/vocationalform' element={<VocationalForm/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
