import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Store from "../routes/Store";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={
            <Store
              items={[
                {
                  name: "foobar1",
                  description: "really thes best kind of thing",
                },
                {
                  name: "barboo2",
                  description: "really thes best kind of thing",
                },
                {
                  name: "whoooads",
                  description: "really thes best kind of thing",
                },
                {
                  name: "batads",
                  description: "really thes best kind of thing",
                },
                {
                  name: "whstres",
                  description: "really thes best kind of thing",
                },
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
