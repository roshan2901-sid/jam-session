import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Tickets from "./pages/Tickets.jsx";
import Summary from "./pages/Summary.jsx";
import Success from "./pages/Success.jsx";
import AdminScan from "./pages/AdminScan.jsx";
import AdminPanel from "./pages/AdminPanel";

function App() {

  const sendTestEmail = async () => {

    try {

      const response = await fetch("/api/send-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: "g.roshansiddarth9c.takshasila@gmail.com",
          name: "Roshan",
          ticketId: "OYM1029",
        }),

      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        alert("Email Sent Successfully!");

      } else {

        alert("Email Failed");

        console.log(data);

      }

    } catch (error) {

      console.error(error);

      alert("Something went wrong");

    }

  };

  return (

    <BrowserRouter>

      <div>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin" element={<AdminScan />} />
          <Route path="/admin-panel" element={<AdminPanel />} />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;