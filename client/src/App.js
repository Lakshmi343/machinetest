import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Login from "./Registration/Login";

import Register from "./Registration/Register";

const App = () => {


  return (
   <div>    
    <BrowserRouter>
      <Routes>

     <Route exact path="/admin" element={< Welcome/>}></Route>
     <Route exact path="" element={<Login/>} />
        <Route exact path="user/register" element= {<Register/>}/>  
       
     </Routes>
     </BrowserRouter>
   </div>
  );
};

export default App;

