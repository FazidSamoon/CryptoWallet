import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  News,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  HomePage,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>

              <Route path="/exchanges" element={<Exchanges />}></Route>

              <Route path="/cryptocurrency" element={<Cryptocurrencies />}></Route>

              <Route path="/crypto/:coi" element={<CryptoDetails />}></Route>

              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
