import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get Microsoft Graph access token
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: process.env.MS_CLIENT_ID!,
          client_secret: process.env.MS_CLIENT_SECRET!,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    );

    if (!tokenResponse.ok) {
      throw new Error('Failed to get access token');
    }

    const { access_token } = await tokenResponse.json();

    // Prepare email content
    const emailContent = {
      message: {
        subject: `New Contact Form Submission from ${name}`,
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header with Company Name -->
              <div style="background-color: #0a1628; padding: 30px 20px; text-align: center;">
                <h1 style="color: #c9a84c; margin: 0; font-size: 28px; letter-spacing: 2px; font-weight: bold;">
                  R N B P & Co.
                </h1>
                <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px;">
                  CHARTERED ACCOUNTANTS
                </p>
              </div>
              
              <!-- Main Content -->
              <div style="padding: 30px 20px;">
                <h2 style="color: #0a1628; border-bottom: 3px solid #c9a84c; padding-bottom: 10px; margin-top: 0;">
                  New Contact Form Submission
                </h2>
                
                <div style="background-color: #f8f5f0; padding: 20px; margin: 20px 0; border-left: 4px solid #c9a84c;">
                  <p style="margin: 10px 0;"><strong style="color: #0a1628;">Name:</strong> ${name}</p>
                  <p style="margin: 10px 0;"><strong style="color: #0a1628;">Email:</strong> <a href="mailto:${email}" style="color: #c9a84c; text-decoration: none;">${email}</a></p>
                  ${phone ? `<p style="margin: 10px 0;"><strong style="color: #0a1628;">Phone:</strong> ${phone}</p>` : ''}
                  ${service ? `<p style="margin: 10px 0;"><strong style="color: #0a1628;">Service Required:</strong> ${service}</p>` : ''}
                </div>
                
                <div style="margin: 20px 0;">
                  <h3 style="color: #0a1628; margin-bottom: 10px;">Message:</h3>
                  <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e0e0e0; border-radius: 4px;">
                    <p style="color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
                  </div>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f8f5f0; padding: 20px; text-align: center; border-top: 3px solid #c9a84c;">
                <p style="color: #666; font-size: 12px; margin: 5px 0;">This email was sent from the RNBP & Co. website contact form.</p>
                <p style="color: #666; font-size: 12px; margin: 5px 0;">Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          `,
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'info@rnbp.in',
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    // Send email using Microsoft Graph API
    const sendEmailResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.MS_SENDER_EMAIL}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent),
      }
    );

    if (!sendEmailResponse.ok) {
      const errorText = await sendEmailResponse.text();
      console.error('Microsoft Graph API Error:', errorText);
      throw new Error('Failed to send email');
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
