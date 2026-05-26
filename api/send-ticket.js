import { Resend } from "resend";
import QRCode from "qrcode";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });

  }

  try {

    const { email, name } = req.body;

    const ticketId =
      "OYM-" + Math.floor(100000 + Math.random() * 900000);

    const qrCodeData = await QRCode.toDataURL(ticketId, {
      width: 300,
      margin: 2,
    });

    console.log("Sending email to:", email);

    const response = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: email,

      subject: "Your ONE YOUTH × MAYA Ticket",

      html: `
        <div style="
          background:black;
          padding:40px;
          color:white;
          font-family:sans-serif;
          text-align:center;
        ">

          <h1 style="
            color:red;
            font-size:42px;
            margin-bottom:30px;
          ">
            YOU'RE IN 🎉
          </h1>

          <p style="font-size:22px;">
            Hello ${name},
          </p>

          <p style="
            font-size:20px;
            margin-top:25px;
          ">
            Your ticket has been verified successfully.
          </p>

          <p style="
            font-size:26px;
            font-weight:bold;
            margin-top:30px;
          ">
            Ticket ID: ${ticketId}
          </p>

          <div style="
            background:white;
            padding:20px;
            border-radius:20px;
            display:inline-block;
            margin-top:35px;
          ">

            <img
              src="${qrCodeData}"
              alt="QR Code"
              width="220"
              height="220"
              style="display:block;"
            />

          </div>

          <p style="
            margin-top:30px;
            font-size:18px;
          ">
            Show this QR at entry.
          </p>

          <p style="
            margin-top:40px;
            color:red;
            font-weight:bold;
            letter-spacing:2px;
          ">
            ONE YOUTH × MAYA
          </p>

        </div>
      `,
    });

    console.log("Resend response:", response);

    return res.status(200).json({
      success: true,
      response,
    });

  } catch (error) {

    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });

  }

}