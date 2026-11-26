import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { ok: false, error: "Por favor ingresa tu nombre completo (entre 2 y 80 caracteres)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Por favor ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 1500) {
      return NextResponse.json(
        { ok: false, error: "El mensaje debe tener entre 10 y 1500 caracteres." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[POST /api/contact] Falta RESEND_API_KEY en el entorno.");
      return NextResponse.json(
        { ok: false, error: "El servicio de correo no está configurado en el servidor." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "fatima09mata@gmail.com";

    const { error } = await resend.emails.send({
      from: "Portafolio Fátima Méndez <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo mensaje del portafolio de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      console.error("[POST /api/contact] Error de Resend:", error);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el correo en este momento." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: `¡Gracias por escribir, ${name}! Tu mensaje ha sido enviado correctamente.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ocurrió un error al procesar la solicitud." },
      { status: 400 }
    );
  }
}