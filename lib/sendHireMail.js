
import { Resend } from 'resend';

export async function sendHireMail({ firstname, lastname, email, phone, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: 'chandradeepyadav2@gmail.com',
      subject: `New Hire Request from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
