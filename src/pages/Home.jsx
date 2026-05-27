import onesoul from "../assets/onesoul.png"
import maya from "../assets/maya.png"
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 top-20 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <div className="flex items-center justify-center gap-6 mb-12">

  <img
    src="/onesoul.png"
    alt="One Soul"
    className="w-28 md:w-36 object-contain"
  />

  <h1
    className="text-4xl md:text-6xl font-black text-red-500 drop-shadow-[0_0_20px_rgba(255,0,0,0.9)]"
  >
    ×
  </h1>

  <img
    src="/maya.png"
    alt="Maya"
    className="w-28 md:w-36 object-contain"
  />

</div>

       <p className="text-gray-300 text-lg md:text-2xl tracking-[0.3em] mb-1">
  MANA PAATA
</p>

<p className="text-gray-400 text-lg md:text-2xl tracking-[0.3em]">
  JAM SESSION NIGHT
</p>

        <button
          onClick={() => navigate("/tickets")}
          className="mt-10 bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-4 rounded-2xl text-xl font-bold shadow-[0_0_30px_rgba(255,0,0,0.7)] hover:scale-105"
        >
          BOOK NOW
        </button>

      </div>
    </div>
  )
}

export default Home