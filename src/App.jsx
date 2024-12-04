import React from "react";
import Cart from "./Cart/Cart.jsx";
import "./styles/main.css";

function App() {
  const jobName = "UX/UI Designer";
  const company = "Kapital Bank";
  const location = "Bakı,Azerbaycan";
  const appearenceCount = 110;
  const price = 1000;

  return (
    <div className="flex h-screen items-center justify-center">
      <Cart jobName={jobName} company={company} location={location} appearenceCount={appearenceCount} price={price} />
    </div>
  );
}

export default App;
