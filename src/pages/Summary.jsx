import { useState } from "react"

function Summary() {

  const [utr, setUtr] = useState("")
  const [screenshot, setScreenshot] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const amount = 150

  const upiLink =
  `upi://pay?pa=8341353673-2@ybl&pn=ManaPaata&am=${amount}&cu=INR`

  const handleSubmit = () => {

    if (!screenshot || !utr) {
      return
    }

    setSubmitted(true)

    // FIREBASE SAVE HERE LATER

  }

  return (

    <div className="min-h-screen bg-black text-white px-5 py-10">

      {/* PAYMENT CARD */}

      <div className="max-w-md mx-auto bg-[#0b0b0b] border border-yellow-500 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,200,0,0.15)]">

        <h1 className="text-3xl font-bold text-center mb-8 tracking-widest text-yellow-400">
          SCAN TO PAY
        </h1>

        {/* QR */}

        <div className="bg-white rounded-3xl p-5 flex justify-center">

          <img
  src="/qr.png"
  alt="UPI QR"
  className="w-72 h-72 object-contain"
/>

        </div>

        {/* PAYMENT DETAILS */}

        <div className="text-center mt-6 space-y-2">

          <p className="text-gray-400 uppercase tracking-widest text-sm">
            UPI ID
          </p>

          <p className="text-yellow-400 text-2xl font-bold">
            8328477757@ybl
          </p>

          <p className="text-gray-400 mt-4">
            Amount
          </p>

          <p className="text-5xl font-black text-red-500">
            ₹{amount}
          </p>

        </div>

        {/* OPEN UPI BUTTON */}

        <a
          href={upiLink}
          className="block mt-8"
        >

          <button
            className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 py-4 rounded-2xl text-xl font-bold shadow-[0_0_25px_rgba(0,255,100,0.35)]"
          >
            PAY VIA UPI APP
          </button>

        </a>

        {/* HOW TO PAY */}

        <div className="mt-10 border border-yellow-700 rounded-2xl p-5 bg-[#111111]">

          <h2 className="text-xl tracking-[0.3em] text-yellow-400 mb-5">
            HOW TO PAY
          </h2>

          <div className="space-y-4 text-gray-300">

            <p>
              1. Open GPay / PhonePe / Paytm
            </p>

            <p>
              2. Scan QR and pay exact amount
            </p>

            <p>
              3. Take payment screenshot
            </p>

            <p>
              4. Copy UTR / Transaction ID
            </p>

            <p>
              5. Upload proof below
            </p>

          </div>

        </div>

        {/* SCREENSHOT */}

        <div className="mt-10">

          <h2 className="text-xl tracking-[0.3em] text-red-400 mb-4">
            PAYMENT SCREENSHOT
          </h2>

          <label
            className="border-2 border-red-500 rounded-2xl p-6 flex justify-center items-center cursor-pointer hover:bg-red-500/10 transition-all"
          >

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setScreenshot(e.target.files[0])}
            />

            <span className="text-2xl font-bold text-red-400">

              {screenshot
                ? "SCREENSHOT UPLOADED ✅"
                : "UPLOAD SCREENSHOT"}

            </span>

          </label>

        </div>

        {/* UTR */}

        <div className="mt-8">

          <h2 className="text-xl tracking-[0.3em] text-white mb-4">
            UTR / TRANSACTION ID
          </h2>

          <input
            type="text"
            placeholder="Enter UTR Number"
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
            className="w-full bg-[#111111] border border-gray-700 rounded-2xl px-5 py-4 text-lg outline-none focus:border-yellow-400"
          />

        </div>

        {/* INFO */}

        <div className="mt-8 bg-blue-500/10 border border-blue-500 rounded-2xl p-5 text-blue-300">

          Your payment will be manually verified by admin.
          Ticket will be activated after approval.

        </div>

        {/* BUTTON */}

        <button

          disabled={!screenshot || !utr || submitted}

          onClick={handleSubmit}

          className={`

            w-full mt-10 py-5 rounded-2xl text-2xl font-black transition-all duration-300

            ${!screenshot || !utr
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500 shadow-[0_0_35px_rgba(255,0,0,0.5)]"}

          `}
        >

          {submitted
            ? "PAYMENT UNDER VERIFICATION"
            : "SUBMIT PAYMENT"}

        </button>

      </div>

    </div>
  )
}

export default Summary