import FormComponent from "./Components/FormComponenr";
import Login from "./Pages/Login";
import React from 'react';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import PreferenceComponent from "./Components/CoursePreferenceComponent";

// function App() {
//   return (
//     <div>
//       {/* <Login /> */}
//       <FormComponent />
//       {/* <PreferenceComponent/> */}

//     </div>
//   );
// }

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/form' element={<FormComponent/>}/>
        <Route path='/courses' element={<PreferenceComponent/>}/>
      </Routes>
     </BrowserRouter>
  );
}
export default App;
