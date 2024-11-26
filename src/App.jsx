import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Pages from "./pages/Pages";
import Services from "./pages/Services";

function App() {
  return (
    <>
      {/* <Layout /> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
