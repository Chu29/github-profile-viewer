import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
