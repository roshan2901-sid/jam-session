import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function AdminScan() {

  const [scanResult, setScanResult] = useState("");

  useEffect(() => {

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );

    scanner.render(success, error);

    function success(result) {

      scanner.clear();

      console.log(result);

      setScanResult(result);

    }

    function error(err) {
      console.warn(err);
    }

  }, []);

  return (

    <div
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >

      <h1
        style={{
          color: "red",
          marginBottom: "30px",
        }}
      >
        ADMIN QR SCANNER
      </h1>

      <div id="reader"></div>

      {scanResult && (

        <div
          style={{
            marginTop: "30px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "lime",
          }}
        >
          Ticket Scanned:
          <br />
          {scanResult}
        </div>

      )}

    </div>

  );
}

export default AdminScan;