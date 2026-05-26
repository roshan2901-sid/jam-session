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

  const qrCodeData = await QRCode.toDataURL(ticketId);

    console.log("Sending email to:", email);

    const response = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: email,

      subject: "Your ONE YOUTH × MAYA Ticket",

     html: `
  <div style="background:black;padding:40px;color:white;font-family:sans-serif;text-align:center;">
    
    <h1 style="color:red;">
      YOU'RE IN 🎉
    </h1>

    <p>Hello ${name},</p>

    <p>Your ticket has been verified successfully.</p>

    <p>
      <strong>Ticket ID:</strong> ${ticketId}
    </p>

    <img 
      src="${qrCodeData}" 
      alt="QR Code"
      style="width:220px;margin-top:20px;border-radius:12px;"
    />

    <p style="margin-top:20px;">
      Show this QR at entry.
    </p>

    <p>
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