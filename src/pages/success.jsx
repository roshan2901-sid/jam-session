import { useLocation } from "react-router-dom"

import { QRCodeCanvas } from "qrcode.react"

import onesoul from "../assets/onesoul.png"

import maya from "../assets/maya.png"

function Success() {

  const location = useLocation()

  const {
    name,
    generalCount,
    kidsCount,
    total
  } = location.state

  const ticketId =
    "MAYA-" +
    Math.floor(
      100000 + Math.random() * 900000
    )

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-5 py-10">

      {/* Ticket */}
      <div className="relative w-full max-w-md bg-zinc-900 border border-red-500 rounded-[40px] overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.35)]">

        {/* Left Cut */}
        <div className="absolute -left-5 top-1/2 w-10 h-10 bg-black rounded-full"></div>

        {/* Right Cut */}
        <div className="absolute -right-5 top-1/2 w-10 h-10 bg-black rounded-full"></div>

        {/* Top Glow */}
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500 shadow-[0_0_25px_rgba(255,0,0,0.9)]"></div>

        {/* Header */}
        <div className="text-center px-8 pt-10 pb-6 border-b border-dashed border-red-500">

          {/* Logos */}
          <div className="flex justify-center items-center gap-4 mb-5">

            <div className="flex justify-center items-center gap-4 mb-5">

  <img
    src={onesoul}
    className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
  />

  <span className="text-red-500 text-3xl font-bold">
    ×
  </span>

  <img
    src={maya}
    className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
  />

</div>

          </div>

          <h1 className="text-5xl font-black text-red-500 tracking-widest">
            MANA PAATA
          </h1>

          <p className="text-gray-400 mt-3">
            ONE SOUL × MAYA BAND
          </p>

        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-4">

          {/* Holder */}
          <div>

            <p className="text-gray-500 text-sm uppercase">
              Ticket Holder
            </p>

            <h2 className="text-2xl font-bold text-white">
              {name}
            </h2>

          </div>

          {/* Ticket ID */}
          <div>

            <p className="text-gray-500 text-sm uppercase">
              Ticket ID
            </p>

            <h2 className="text-xl font-bold text-red-500">
              {ticketId}
            </h2>

          </div>

          {/* Pass Counts */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-black rounded-2xl p-4 border border-red-500">

              <p className="text-gray-500 text-sm">
                General Passes
              </p>

              <h2 className="text-3xl font-bold text-white">
                {generalCount}
              </h2>

            </div>

            <div className="bg-black rounded-2xl p-4 border border-red-500">

              <p className="text-gray-500 text-sm">
                Kids Passes
              </p>

              <h2 className="text-3xl font-bold text-white">
                {kidsCount}
              </h2>

            </div>

          </div>

          {/* Event Details */}
          <div className="bg-black rounded-2xl p-5 border border-red-500 space-y-3">

            <div className="flex justify-between">

              <span className="text-gray-400">
                Venue
              </span>

              <span className="font-bold">
                HYJACK DRIVE IN
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">
                Date
              </span>

              <span className="font-bold">
                JUNE 06 2026
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">
                Total Paid
              </span>

              <span className="font-bold text-red-500 text-xl">
                ₹{total}
              </span>

            </div>

          </div>

        </div>

        {/* QR Section */}
        <div className="border-t border-dashed border-red-500 px-8 py-8 flex flex-col items-center bg-black">

          <div className="bg-white p-4 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.2)]">

            <QRCodeCanvas
              value={ticketId}
              size={180}
            />

          </div>

          <p className="text-gray-400 mt-5 text-center">
            Show this QR at entry for verification
          </p>

          {/* Screenshot Note */}
          <div className="mt-5 bg-yellow-500/10 border border-yellow-500 px-5 py-3 rounded-2xl text-center">

            <p className="text-yellow-400 font-semibold">
              Please take a screenshot of this ticket for entry verification
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Success