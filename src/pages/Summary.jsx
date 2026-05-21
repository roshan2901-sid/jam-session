import { useLocation, useNavigate } from "react-router-dom"

function Summary() {

  const location = useLocation()
  const navigate = useNavigate()

  const {
    name,
    phone,
    email,
    generalCount,
    kidsCount,
    total
  } = location.state

  const handlePayment = () => {

    navigate("/success", {
      state: {
        name,
        generalCount,
        kidsCount,
        total
      }
    })

  }

  return (
    <div className="min-h-screen bg-black text-white px-5 py-10">

      <div className="max-w-xl mx-auto bg-zinc-900 border border-red-500 rounded-3xl p-8 shadow-[0_0_25px_rgba(255,0,0,0.4)]">

        <h1 className="text-4xl font-bold text-red-500 text-center mb-8 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
          Booking Summary
        </h1>

        <div className="space-y-5 text-lg">

          <div>
            <p className="text-gray-400">Full Name</p>
            <h2 className="font-bold">{name}</h2>
          </div>

          <div>
            <p className="text-gray-400">Phone Number</p>
            <h2 className="font-bold">{phone}</h2>
          </div>

          <div>
            <p className="text-gray-400">Email Address</p>
            <h2 className="font-bold">{email}</h2>
          </div>

          <div>
            <p className="text-gray-400">General Passes</p>
            <h2 className="font-bold">{generalCount}</h2>
          </div>

          <div>
            <p className="text-gray-400">Kids Passes</p>
            <h2 className="font-bold">{kidsCount}</h2>
          </div>

          <div className="pt-6 border-t border-red-500">

            <p className="text-gray-400 mb-2">
              Total Amount
            </p>

            <h1 className="text-5xl font-bold text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.9)]">
              ₹{total}
            </h1>

          </div>

        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-10 bg-red-600 hover:bg-red-500 py-4 rounded-2xl text-xl font-bold shadow-[0_0_20px_rgba(255,0,0,0.7)] hover:scale-105 transition-all"
        >
          Pay Now
        </button>

      </div>

    </div>
  )
}

export default Summary