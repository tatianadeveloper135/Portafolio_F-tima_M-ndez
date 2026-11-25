import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactBody = await request.json();
    const name = data.name?.trim() ?? "";
    const email = data.email?.trim() ?? "";
    const message = data.message?.trim() ?? "";

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { ok: false, error: "Ingresa un nombre válido (2 a 80 caracteres)." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 1500) {
      return NextResponse.json(
        { ok: false, error: "El mensaje debe tener entre 10 y 1500 caracteres." },
        { status: 400 }
      );
    }

    const destination = process.env.CONTACT_EMAIL || "fatima09mata@gmail.com";

    console.info("[POST /api/contact] Mensaje validado", {
      destination,
      fromName: name,
      fromEmail: email,
      hasResendKey: Boolean(process.env.RESEND_API_KEY),
      at: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        message: `Gracias, ${name}. Tu mensaje se envió correctamente.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida o error interno del servidor." },
      { status: 400 }
    );
  }
}