import React from "react";
import Cart from "./Cart/Cart.jsx";
import "./styles/main.css";

function App() {
  const jobName = "UX/UI Designer";
  const company = "Kapital Bank";
  const location = "Bakı,Azerbaycan";
  const appearenceCount = 110;
  const price = 100;

  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - 31); //change date props

  return (
    <div className="flex h-screen items-center justify-center">
      <Cart
        jobName={jobName}
        company={company}
        location={location}
        appearenceCount={appearenceCount}
        price={price}
        dateProps={pastDate}
      />
    </div>
  );
}

export default App;
