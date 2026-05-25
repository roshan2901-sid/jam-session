import { useLocation } from "react-router-dom"
import { useState } from "react"

function Summary() {

  const location = useLocation()

  const {
    name,
    generalCount,
    kidsCount,
    total
  } = location.state

  const [utr, setUtr] = useState("")
  const [screenshot, setScreenshot] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  // DYNAMIC UPI LINK

  const upiLink =
    `upi://pay?pa=8341353673-2@ybl&pn=ManaPaata&am=${total}&cu=INR`

  const handleSubmit = () => {

    if (!screenshot || !utr) {
      return
    }

    setSubmitted(true)

    // FIREBASE SAVE LATER

    alert("Payment submitted for verification!")

  }

  return (

    <div className="min-h-screen bg-black text-white px-5 py-10">

      <div className="max-w-md mx-auto bg-[#0b0b0b] border border-yellow-500 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,200,0,0.15)]">

        {/* TITLE */}

        <h1 className="text-4xl font-black text-center text-yellow-400 tracking-[0.25em] mb-8">
          PAYMENT
        </h1>

        {/* QR */}

        <div className="bg-white rounded-3xl p-5 flex justify-center">

          <img
            src="/qr.png"
            alt="UPI QR"
            className="w-72 h-72 object-contain"
          />

        </div>

        {/* DETAILS */}

        <div className="text-center mt-8 space-y-4">

          <div>

            <p className="text-gray-400 tracking-widest text-sm">
              TICKET HOLDER
            </p>

            <h2 className="text-2xl font-bold text-white">
              {name}
            </h2>

          </div>

          <div>

            <p className="text-gray-400 tracking-widest text-sm">
              UPI ID
            </p>

            <h2 className="text-yellow-400 text-xl font-bold break-all">
              8341353673-2@ybl
            </h2>

          </div>

          <div>

            <p className="text-gray-400 tracking-widest text-sm">
              TOTAL AMOUNT
            </p>

            <h1 className="text-6xl font-black text-red-500 mt-2">
              ₹{total}
            </h1>

          </div>

        </div>

        {/* PAY BUTTON */}

        <a
          href={upiLink}
          className="block mt-10"
        >

          <button
            className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 py-5 rounded-2xl text-2xl font-black shadow-[0_0_30px_rgba(0,255,120,0.4)] hover:scale-[1.02]"
          >
            PAY ₹{total}
          </button>

        </a>

        {/* HOW TO PAY */}

        <div className="mt-10 border border-yellow-700 rounded-2xl p-5 bg-[#111111]">

          <h2 className="text-xl tracking-[0.3em] text-yellow-400 mb-5">
            HOW TO PAY
          </h2>

          <div className="space-y-4 text-gray-300">

            <p>
              1. Click PAY button
            </p>

            <p>
              2. Complete payment in GPay / PhonePe / Paytm
            </p>

            <p>
              3. Take payment screenshot
            </p>

            <p>
              4. Copy UTR / Transaction ID
            </p>

            <p>
              5. Upload payment proof below
            </p>

          </div>

        </div>

        {/* SCREENSHOT */}

        <div className="mt-10">

          <h2 className="text-xl tracking-[0.25em] text-red-400 mb-4">
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

            <span className="text-xl font-bold text-red-400 text-center">

              {screenshot
                ? "SCREENSHOT UPLOADED ✅"
                : "UPLOAD SCREENSHOT"}

            </span>

          </label>

        </div>

        {/* UTR */}

        <div className="mt-8">

          <h2 className="text-xl tracking-[0.25em] text-white mb-4">
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

        <div className="mt-8 bg-blue-500/10 border border-blue-500 rounded-2xl p-5 text-blue-300 leading-relaxed">

          Your payment will be manually verified by admin.
          Ticket will be activated only after successful verification.

        </div>

        {/* SUBMIT */}

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