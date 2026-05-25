import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Tickets from "./pages/Tickets.jsx"
import Summary from "./pages/Summary.jsx"
import Success from "./pages/Success.jsx"
import AdminScan from "./pages/AdminScan.jsx"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<AdminScan />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App