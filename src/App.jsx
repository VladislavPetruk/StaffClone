import Layout from "./components/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Shops from "./pages/Shops";
import Delivery from "./pages/Delivery";
import Cooperation from "./pages/Cooperation";
import Product from "./pages/Product";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="about" element={<About />} exact />
          <Route path="shops" element={<Shops />} exact />
          <Route path="delivery-and-payment" element={<Delivery />} exact />
          <Route path="cooperation" element={<Cooperation />} exact />
          <Route path="product" element={<Product />} exact />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
