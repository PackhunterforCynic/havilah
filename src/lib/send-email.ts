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
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f9f9f9; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
              .header { background-color: #0a0a0a; padding: 30px 20px; text-align: center; border-bottom: 3px solid #D4AF37; }
              .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; }
              .content { padding: 30px; }
              .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #D4AF37; margin-bottom: 20px; font-weight: 600; }
              .field { margin-bottom: 15px; border-bottom: 1px solid #eeeeee; padding-bottom: 15px; }
              .field-label { font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 1px; margin-bottom: 5px; }
              .field-value { font-size: 16px; color: #111111; margin: 0; }
              .message-box { background-color: #f5f5f5; padding: 20px; border-radius: 4px; border-left: 3px solid #D4AF37; margin-top: 25px; }
              .message-box p { margin: 0; white-space: pre-wrap; font-size: 15px; color: #333333; }
              .footer { text-align: center; padding: 20px; color: #888888; font-size: 12px; background-color: #f9f9f9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Havilah Studio</h1>
              </div>
              <div class="content">
                <div class="section-title">New Project Inquiry</div>
                
                <div class="field">
                  <div class="field-label">Client Name</div>
                  <div class="field-value">${data.name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value"><a href="mailto:${data.email}" style="color: #D4AF37; text-decoration: none;">${data.email}</a></div>
                </div>
                
                ${data.phone ? `
                <div class="field">
                  <div class="field-label">Phone Number</div>
                  <div class="field-value">${data.phone}</div>
                </div>
                ` : ''}
                
                ${data.company ? `
                <div class="field">
                  <div class="field-label">Company / Brand</div>
                  <div class="field-value">${data.company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="field-label">Requested Service</div>
                  <div class="field-value">${data.service || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Estimated Budget</div>
                  <div class="field-value">${data.budget || 'Not specified'}</div>
                </div>
                
                ${data.date ? `
                <div class="field">
                  <div class="field-label">Project Date</div>
                  <div class="field-value">${data.date}</div>
                </div>
                ` : ''}
                
                <div class="message-box">
                  <div class="field-label" style="margin-bottom: 10px;">The Brief</div>
                  <p>${data.message}</p>
                </div>
              </div>
              <div class="footer">
                This is an automated message from the Havilah Studio contact form.<br>
                Reply directly to this email to contact the client.
              </div>
            </div>
          </body>
          </html>
        `,
      });
      return { success: true };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email");
    }
  });