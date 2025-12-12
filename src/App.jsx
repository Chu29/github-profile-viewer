import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/users/:query" Component={StatsPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
