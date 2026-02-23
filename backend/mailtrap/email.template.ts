export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4F46E5,#6366F1);padding:30px;text-align:center;color:white;">
              <h2 style="margin:0;font-size:22px;">Verify Your Email</h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;color:#333;">
              <p style="margin-top:0;">Hi there 👋</p>
              <p>
                Thank you for signing up! Please use the verification code below to complete your registration.
                This code will expire in <strong>15 minutes</strong>.
              </p>

              <div style="text-align:center;margin:30px 0;">
                <span style="display:inline-block;font-size:34px;font-weight:bold;letter-spacing:8px;color:#4F46E5;background:#f3f4ff;padding:15px 30px;border-radius:8px;">
                  {verificationCode}
                </span>
              </div>

              <p>If you didn’t create an account, you can safely ignore this email.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:20px;font-size:12px;color:#777;background:#f9fafc;">
              © ${new Date().getFullYear()} Kailash Badu. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#ef4444,#f87171);padding:30px;text-align:center;color:white;">
              <h2 style="margin:0;font-size:22px;">Reset Your Password</h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;color:#333;">
              <p>Hello 👋</p>
              <p>
                We received a request to reset your password. Click the button below to choose a new one.
              </p>

              <div style="text-align:center;margin:35px 0;">
                <a href="{resetURL}"
                  style="background:#4F46E5;color:white;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;">
                  Reset Password
                </a>
              </div>

              <p style="font-size:14px;color:#666;">
                This link will expire in <strong>1 hour</strong>. If you didn't request this, no further action is required.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:20px;font-size:12px;color:#777;background:#f9fafc;">
              © ${new Date().getFullYear()} Kailash Badu. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#10b981,#34d399);padding:30px;text-align:center;color:white;">
              <h2 style="margin:0;font-size:22px;">Welcome Aboard 🎉</h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;color:#333;">
              <h3 style="margin-top:0;">Welcome to the family, {userName}!</h3>
              <p>
                We're thrilled to have you on board. Your account is now fully verified and ready to go.
              </p>
              <p>
                You can now explore your dashboard and start using all available features.
              </p>

              <div style="text-align:center;margin:30px 0;">
                <a href="#"
                  style="background:#4F46E5;color:white;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;">
                  Go to Dashboard
                </a>
              </div>

              <p>Best regards,<br><strong>The Team</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:20px;font-size:12px;color:#777;background:#f9fafc;">
              © ${new Date().getFullYear()} Kailash Badu. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.05);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#10b981,#22c55e);padding:30px;text-align:center;color:white;">
              <h2 style="margin:0;font-size:22px;">Password Reset Successful ✅</h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;color:#333;">
              <p>Hello 👋</p>
              
              <p>
                Your password has been successfully updated. You can now log in using your new password.
              </p>

              <div style="text-align:center;margin:30px 0;">
                <a href="{loginURL}"
                  style="background:#4F46E5;color:white;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;">
                  Login to Your Account
                </a>
              </div>

              <p style="font-size:14px;color:#666;">
                If you did not perform this action, please contact our support team immediately to secure your account.
              </p>

              <p>Stay secure,<br><strong>The Team</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:20px;font-size:12px;color:#777;background:#f9fafc;">
              © ${new Date().getFullYear()} Kailash Badu. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
