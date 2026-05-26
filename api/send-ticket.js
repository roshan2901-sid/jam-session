import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { email, name, ticketId } = req.body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your ONE YOUTH × MAYA Ticket",
      html: `
        <div style="background:black;padding:40px;color:white;">
          <h1 style="color:red;">YOU'RE IN 🎉</h1>

          <p>Hello ${name}</p>

          <p>Your Ticket ID: ${ticketId}</p>
        </div>
      `,
    });

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}