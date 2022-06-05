import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./routes/Home";
import Store from "./routes/Store";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
