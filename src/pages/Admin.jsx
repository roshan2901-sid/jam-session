import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"

import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore"

import { db } from "../firebase"

function Admin() {

  const [ticketData, setTicketData] = useState(null)
  const [docId, setDocId] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 5,
        qrbox: 250
      },
      false
    )

    scanner.render(
      async (decodedText) => {

        scanner.clear()

        setLoading(true)

        try {

          const q = query(
            collection(db, "bookings"),
            where("ticketId", "==", decodedText)
          )

          const querySnapshot = await getDocs(q)

          if (querySnapshot.empty) {

            alert("Invalid Ticket")

            setLoading(false)

            return
          }

          querySnapshot.forEach((document) => {

            setTicketData(document.data())

            setDocId(document.id)

          })

        } catch (error) {

          console.log(error)

        }

        setLoading(false)

      }
    )

  }, [])

  const approveEntry = async () => {

    try {

      const ticketRef = doc(db, "bookings", docId)

      await updateDoc(ticketRef, {
        used: true
      })

      alert("Entry Approved")

      window.location.reload()

    } catch (error) {

      console.log(error)

    }

  }

  return (
    <div className="min-h-screen bg-black text-white px-5 py-10">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        ADMIN SCANNER
      </h1>

      {/* QR Scanner */}
      <div
        id="reader"
        className="max-w-md mx-auto overflow-hidden rounded-3xl border border-red-500"
      ></div>

      {/* Loading */}
      {
        loading && (
          <p className="text-center mt-6">
            Checking Ticket...
          </p>
        )
      }

      {/* Ticket Data */}
      {
        ticketData && (

          <div className="max-w-xl mx-auto mt-10 bg-zinc-900 border border-red-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-green-400">
              VALID TICKET
            </h2>

            <div className="space-y-4 text-lg">

              <div>
                <p className="text-gray-400">
                  Name
                </p>

                <h2 className="font-bold">
                  {ticketData.name}
                </h2>
              </div>

              <div>
                <p className="text-gray-400">
                  Ticket ID
                </p>

                <h2 className="font-bold text-red-500">
                  {ticketData.ticketId}
                </h2>
              </div>

              <div>
                <p className="text-gray-400">
                  Status
                </p>

                <h2 className="font-bold">
                  {
                    ticketData.used
                      ? "ALREADY USED"
                      : "NOT USED"
                  }
                </h2>
              </div>

            </div>

            {
              !ticketData.used && (

                <button
                  onClick={approveEntry}
                  className="w-full mt-8 bg-green-500 hover:bg-green-400 py-4 rounded-2xl text-xl font-bold"
                >
                  APPROVE ENTRY
                </button>

              )
            }

          </div>

        )
      }

    </div>
  )
}

export default Admin