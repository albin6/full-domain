import React from "react";

function Home() {
  return (
    <div>
      <h2>
        <u>Home</u>
      </h2>
      <h3>Full Url : {window.location.href}</h3>
      <h3>Pathname : {window.location.pathname}</h3>
      <h3>Query : {window.location.search}</h3>
      <h3>Hash : {window.location.hash}</h3>
    </div>
  );
}

export default Home;
