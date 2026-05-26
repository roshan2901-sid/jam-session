import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {

    const { email, name, ticketId } = req.body;

    console.log("Sending email to:", email);

    const response = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: email,

      subject: "Your ONE YOUTH × MAYA Ticket",

      html: `
        <div style="background:black;padding:40px;color:white;font-family:sans-serif;">
          
          <h1 style="color:red;">
            YOU'RE IN 🎉
          </h1>

          <p>Hello ${name},</p>

          <p>Your ticket has been verified successfully.</p>

          <p>
            <strong>Ticket ID:</strong> ${ticketId}
          </p>

          <p>See you at the event.</p>

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