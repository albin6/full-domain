import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import TestWithParams from "./components/TestWithParams";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<TestWithParams />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <Layout />;
}

export default App;
