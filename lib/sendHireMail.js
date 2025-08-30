
import { Resend } from 'resend';

export async function sendHireMail({ firstname, lastname, email, phone, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: 'chandradeepyadav2@gmail.com',
      subject: `New Hire Request from ${firstname} ${lastname}`,
      // text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #e0e7ff 0%, #f6f8fa 100%); padding: 0; border-radius: 16px; max-width: 520px; margin: 32px auto; box-shadow: 0 4px 24px rgba(37,99,235,0.10);">
          <div style="background: #2563eb; border-radius: 16px 16px 0 0; padding: 24px 32px; text-align: center;">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Contact" width="48" style="margin-bottom: 8px;" />
            <h2 style="color: #fff; margin: 0; font-size: 2rem; letter-spacing: 1px;">New Hire Request</h2>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="font-weight: bold; color: #2563eb; padding: 10px 0; width: 90px;">Name:</td>
                <td style="color: #222; padding: 10px 0;">${firstname} ${lastname}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; color: #2563eb; padding: 10px 0;">Email:</td>
                <td style="color: #222; padding: 10px 0;">${email}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; color: #2563eb; padding: 10px 0;">Phone:</td>
                <td style="color: #222; padding: 10px 0;">${phone}</td>
              </tr>
            </table>
            <div style="background: #f1f5f9; border-radius: 8px; padding: 20px; color: #222; margin-bottom: 16px; border-left: 4px solid #2563eb;">
              <strong style="color: #2563eb; font-size: 1.1rem;">Message:</strong>
              <p style="margin-top: 10px; color: #333; font-size: 1rem; line-height: 1.6;">${message}</p>
            </div>
            <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">
              <span>Portfolio Contact Form &mdash; ${new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
