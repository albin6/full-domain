import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import TestWithParams from "./components/TestWithParams";
import ThemeChangerComponent from "./components/ContextAPI/themeTest/ThemeChangerComponent";
import ThemeProvider from "./components/ContextAPI/ThemeProvider";
import Counter from "./components/counterRedux/Counter";

import {Provider} from 'react-redux'
import { store } from "./components/counterRedux/store";

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

// function App() {
//   return (
//     <>
//       <ThemeProvider>
//       <ThemeChangerComponent/>
//       </ThemeProvider>
//     </>
//   )
// }

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default App;
