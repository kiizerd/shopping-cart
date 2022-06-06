import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./routes/Home";
import Store from "./routes/Store";
import Product from "./routes/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There&apos;s nothing here!!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
