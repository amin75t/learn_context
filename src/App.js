import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowInfo from "./pages/ShowInfo";
import EnterPage from "./pages/EnterPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<ShowInfo />} />
          <Route path="/" element={<EnterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
