import "./App.css";
import Page from "./Components/MainPage/Page";
import Thankyou from "./Components/Thankyou/Thankyou";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Page />} />
          <Route path="/Thankyou" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
