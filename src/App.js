import "./App.css";

import Chat from "./Pages/Chat/index.jsx";
import Navbar from "./Components/Navbar";
import SignInPage from "./Pages/Auth/Signin.jsx";
import SignUpPage from "./Pages/Auth/Signup.jsx"
import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/chat" element={<Layout element={<Chat />} />} />
        <Route path="/" element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage/>} />


      </Routes>
    </div>
  );
}

export default App;
