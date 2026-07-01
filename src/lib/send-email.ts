import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service?: string;
    budget?: string;
    date?: string;
    message: string;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await resend.emails.send({
        from: "Havilah <onboarding@resend.dev>",
        to: ["robinson30122000@gmail.com"],
        replyTo: data.email,
        subject: `New Contact Form - ${data.name}`,
        html: `
          <h2>New Project Inquiry</h2>
          <p><b>Name:</b> ${data.name}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Company:</b> ${data.company}</p>
          <p><b>Service:</b> ${data.service}</p>
          <p><b>Budget:</b> ${data.budget}</p>
          <p><b>Date:</b> ${data.date}</p>
          <hr>
          <p>${data.message}</p>
        `,
      });
      return { success: true };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email");
    }
  });