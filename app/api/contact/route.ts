import { NextResponse } from "next/server";
import Mail from "@sendgrid/mail";

// POST /api/contact
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL; // required: recipient
    const FROM_EMAIL = process.env.FROM_EMAIL || process.env.SENDGRID_FROM || process.env.SMTP_USER;

    if (!SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: "SendGrid API key not configured. Set SENDGRID_API_KEY in environment." },
        { status: 500 }
      );
    }

    if (!TO_EMAIL) {
      return NextResponse.json(
        { error: "Recipient not configured. Set TO_EMAIL in environment." },
        { status: 500 }
      );
    }

    if (!FROM_EMAIL) {
      return NextResponse.json(
        { error: "Sender email not configured. Set FROM_EMAIL in environment." },
        { status: 500 }
      );
    }

    Mail.setApiKey(SENDGRID_API_KEY);

    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nPhone: ${phone || "-"}\n\nMessage:\n${message}`;
    const html = `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>`;

    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject,
      text,
      html,
      replyTo: email,
    } as any;

    await Mail.send(msg);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("/api/contact error:", err);
    return NextResponse.json({ error: err?.message || "Internal error" }, { status: 500 });
  }
}
