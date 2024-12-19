import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();
    console.log('Datos recibidos:', formData);

    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'sjcheno@hotmail.com', 
      subject: `Nuevo mensaje de contacto - ${formData.nombre}`,
      html: `
        <div style="padding: 30px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
          <h1 style="color: #1a4a5e; text-align: center; margin-bottom: 30px;">Nuevo Mensaje de Contacto</h1>
          
          <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #87CEEB; padding-bottom: 10px;">Información del Contacto</h2>
            <p><strong>Nombre:</strong> ${formData.nombre}</p>
            <p><strong>Correo:</strong> ${formData.correo}</p>
            
            <h2 style="color: #333; border-bottom: 2px solid #87CEEB; padding-bottom: 10px; margin-top: 25px;">Mensaje</h2>
            <p>${formData.mensaje}</p>
          </div>
          
          <p style="color:#898989; font-size:12px; margin-top:20px; text-align: center;">
            Este mensaje fue enviado desde el formulario de contacto
          </p>
        </div>
      `,
      text: `
        Nuevo Mensaje de Contacto

        INFORMACIÓN DEL CONTACTO
        Nombre: ${formData.nombre}
        Correo: ${formData.correo}

        MENSAJE
        ${formData.mensaje}
      `
    };

    console.log('Intentando enviar email con:', emailData);

    const data = await resend.emails.send(emailData);
    console.log('Respuesta de Resend:', data);

    if (data.error) {
      console.error('Error de Resend:', data.error);
      return NextResponse.json(
        { success: false, error: data.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data.id,
      message: 'Email enviado correctamente'
    });

  } catch (error) {
    console.error('Error detallado:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}