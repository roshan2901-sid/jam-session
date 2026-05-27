import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

function AdminPanel() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      const querySnapshot = await getDocs(
        collection(db, "bookings")
      );

      const bookingsArray = [];

      querySnapshot.forEach((docSnap) => {

        bookingsArray.push({
          id: docSnap.id,
          ...docSnap.data(),
        });

      });

      setBookings(bookingsArray);

    } catch (error) {

      console.error(error);

    }

  };

  const approveBooking = async (booking) => {

    try {

      const response = await fetch("/api/send-ticket", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          email: booking.email,
          name: booking.name,

        }),

      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        await updateDoc(
          doc(db, "bookings", booking.id),
          {
            approved: true,
          }
        );

        alert("Ticket Sent Successfully!");

        fetchBookings();

      } else {

        alert("Failed to send ticket");

      }

    } catch (error) {

      console.error(error);

      alert("Something went wrong");

    }

  };

  return (

    <div
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >

      <h1
        style={{
          color: "red",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        ADMIN BOOKINGS PANEL
      </h1>

      {

        bookings.length === 0 ? (

          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
            }}
          >
            No bookings found.
          </p>

        ) : (

          bookings.map((booking) => (

            <div
              key={booking.id}
              style={{
                border: "1px solid red",
                padding: "25px",
                borderRadius: "15px",
                marginBottom: "25px",
                background: "#111",
              }}
            >

              <h2
                style={{
                  color: "red",
                  marginBottom: "15px",
                }}
              >
                {booking.name}
              </h2>

              <p>
                <strong>Email:</strong> {booking.email}
              </p>

              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>

              <p>
                <strong>General Tickets:</strong> {booking.generalCount}
              </p>

              <p>
                <strong>Kids Tickets:</strong> {booking.kidsCount}
              </p>

              <p>
                <strong>Total:</strong> ₹{booking.total}
              </p>

              <p>
                <strong>UTR:</strong> {booking.utr}
              </p>

              <p>
                <strong>Ticket ID:</strong> {booking.ticketId}
              </p>

              <p>
                <strong>Status:</strong>{" "}

                {booking.approved
                  ? "APPROVED ✅"
                  : "PENDING"}
              </p>

              {

                !booking.approved && (

                  <button
                    onClick={() => approveBooking(booking)}
                    style={{
                      marginTop: "20px",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    APPROVE & SEND TICKET
                  </button>

                )

              }

            </div>

          ))

        )

      }

    </div>

  );
}

export default AdminPanel;