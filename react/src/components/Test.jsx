import React from "react";
import { useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return (
    <div>
      <h2>
        <u>Test</u>
      </h2>
      <h3>Using useLocation() Hook</h3>
      <h3>Pathname: {location.pathname}</h3>
      <h3>Query : {location.search}</h3>
      <h4>{searchParams.get("hi")}</h4>
      <h3>Hash : {location.hash}</h3>
    </div>
  );
}

export default Test;
