import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
