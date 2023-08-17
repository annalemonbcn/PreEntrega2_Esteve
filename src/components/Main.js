// Routing
import { Routes, Route } from "react-router-dom";

// Components
import ItemListContainer from "./Containers/ItemListContainer";
import Checkout from "./Checkout";
// import About from "./About";

const Main = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
}

export default Main;