import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Tickets from "./pages/Tickets"
import Summary from "./pages/Summary"
import Success from "./pages/Success"
import AdminScan from "./pages/AdminScan"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tickets"
          element={<Tickets />}
        />

        <Route
          path="/summary"
          element={<Summary />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

        <Route
          path="/admin"
          element={<AdminScan />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App