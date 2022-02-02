import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowInfo from "./pages/ShowInfo";
import EnterPage from "./pages/EnterPage";
import UserProvider from "./contexts/UserProvider";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/info" element={<ShowInfo />} />
          <Route path="/" element={<EnterPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
