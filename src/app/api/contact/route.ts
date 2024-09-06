import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(res: NextRequest) {
  try {
    const formData = await res.json();
    const { name, email, phone, service, message } = formData;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // 다른 SMTP 서비스도 사용 가능 (예: SendGrid, Mailgun)
      auth: {
        user: process.env.EMAIL_USER, // 환경변수로부터 사용자명 가져오기
        pass: process.env.EMAIL_PASS, // 환경변수로부터 비밀번호 가져오기
      },
    });

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #333; border-bottom: 2px solid #4caf50; padding-bottom: 10px;">New Contact Form Submission</h2>
      <p style="color: #555;"><strong>Name:</strong> ${name}</p>
      <p style="color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4caf50;">${email}</a></p>
      <p style="color: #555;"><strong>Phone:</strong> ${phone}</p>
      <p style="color: #555;"><strong>Service Interested In:</strong> ${service}</p>
      <p style="color: #555;"><strong>Message:</strong></p>
      <p style="color: #555; background-color: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">${message}</p>
      <p style="font-size: 0.9em; color: #777; border-top: 1px solid #ddd; padding-top: 10px;">This is an automated message. Please do not reply directly to this email.</p>
    </div>
  `;
    // 이메일 옵션 설정
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [email, process.env.EMAIL_USER], // 수신자의 이메일 주소
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent, // HTML 본문 설정
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!', data: formData },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('알 수 없는 오류:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  } finally {
  }
}
