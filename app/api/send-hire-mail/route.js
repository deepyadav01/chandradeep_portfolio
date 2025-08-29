import { sendHireMail } from "@/lib/sendHireMail";

export async function POST(req) {
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const result = await sendHireMail(body);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
