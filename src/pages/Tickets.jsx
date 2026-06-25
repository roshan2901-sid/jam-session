import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Tickets() {

  const navigate = useNavigate()

  const [generalCount, setGeneralCount] = useState(0)
  const [kidsCount, setKidsCount] = useState(0)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const generalPrice = 279
  const kidsPrice = 189

  const total =
    generalCount * generalPrice +
    kidsCount * kidsPrice

  return (
    <div className="min-h-screen bg-black text-white px-5 py-8">

      {/* Header */}
      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-red-500 mb-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
          JAM SESSION PASSES
        </h1>

        <p className="text-gray-400">
          ONE SOUL × MAYA BAND
        </p>

      </div>

      {/* User Details Form */}
      <div className="bg-zinc-900 border border-red-500 rounded-3xl p-6 mb-6 shadow-[0_0_20px_rgba(255,0,0,0.3)]">

        <h2 className="text-2xl font-bold mb-6 text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
          Your Details
        </h2>

        <div className="space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-red-500 rounded-xl p-4 outline-none focus:shadow-[0_0_15px_rgba(255,0,0,0.7)]"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-black border border-red-500 rounded-xl p-4 outline-none focus:shadow-[0_0_15px_rgba(255,0,0,0.7)]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-red-500 rounded-xl p-4 outline-none focus:shadow-[0_0_15px_rgba(255,0,0,0.7)]"
          />

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

  {/* General Pass */}
  <div className="bg-zinc-900 border border-red-500 rounded-3xl p-6 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
    <h2 className="text-2xl font-bold mb-2">General Jam Pass</h2>

    <p className="text-red-500 text-3xl font-bold mb-4">
      ₹269
    </p>

    <div className="text-gray-300 space-y-1 mb-6">
      <p>✓ Entry Access</p>
    </div>

    {/* Your General Pass + and - buttons */}
  </div>

  {/* Group Pass */}
  <div className="bg-zinc-900 border border-red-500 rounded-3xl p-6 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
    <h2 className="text-2xl font-bold mb-2">Group of 4</h2>

    <p className="text-red-500 text-3xl font-bold mb-1">
      ₹1000
    </p>

    <p className="text-green-400 mb-4">
      Only ₹250 per person
    </p>

    <div className="text-gray-300 space-y-1 mb-6">
      <p>✓ Entry for 4 People</p>
    </div>

    {/* Separate + and - buttons for Group Pass */}
  </div>

</div>
      {/* Kids Pass */}
      <div className="bg-zinc-900 border border-red-500 rounded-3xl p-6 mb-28 shadow-[0_0_20px_rgba(255,0,0,0.3)]">

        <h2 className="text-2xl font-bold mb-2">
          Kids Pass
        </h2>

        <p className="text-red-500 text-3xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">
          ₹99
        </p>

        <div className="text-gray-300 mb-6">

          <p className="font-bold mb-4">
            For children below 10 years
          </p>

          <p>✓ Entry Access</p>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              setKidsCount(Math.max(0, kidsCount - 1))
            }
            className="bg-red-600 w-10 h-10 rounded-full text-xl font-bold shadow-[0_0_15px_rgba(255,0,0,0.8)] hover:scale-110 transition-all"
          >
            -
          </button>

          <span className="text-2xl font-bold text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
            {kidsCount}
          </span>

          <button
            onClick={() =>
              setKidsCount(kidsCount + 1)
            }
            className="bg-red-600 w-10 h-10 rounded-full text-xl font-bold shadow-[0_0_15px_rgba(255,0,0,0.8)] hover:scale-110 transition-all"
          >
            +
          </button>

        </div>
      </div>

      {/* Bottom Payment Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-zinc-950 border-t border-red-500 p-5 flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            Total Amount
          </p>

          <h2 className="text-3xl font-bold text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">
            ₹{total}
          </h2>

        </div>

        <button
          onClick={() =>
            navigate("/summary", {
              state: {
                name,
                phone,
                email,
                generalCount,
                kidsCount,
                total
              }
            })
          }
          disabled={
            total === 0 ||
            !name ||
            !phone ||
            !email
          }
          className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all
          ${
            total === 0 || !name || !phone || !email
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:scale-105"
          }`}
        >
          Proceed
        </button>

      </div>

    </div>
  )
}

export default Tickets