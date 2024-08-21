import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { Client, sender } from "./MailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await Client.send({
      from: sender,
      to: recipient,
      subject: "PLEASE VERIFIY YOUR EMAIL",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    // console.log(response);
  } catch (error) {
    console.log(`error sending verification email`, { error });
    throw new Error(`error send in verification email`, { error });
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await Client.send({
      from: sender,
      to: recipient,
      template_uuid: "afe81702-a5f1-4248-8731-5a82478134fe",
      template_variables: {
        name: name,
        company_info_name: "E-Wakala",
      },
    });

    console.log("email welcome successfully", response);
  } catch (error) {
    throw new Error(`error welcome  verification email`, { error });
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await Client.send({
      from: sender,
      to: recipient,
      subject: "RESET PASSWORD",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password reset",
    });
  } catch (error) {
    console.log(`error sending password reset email`, { error });
    throw new Error(`error sending password reset email`, { error });
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await Client.send({
      from: sender,
      to: recipient,
      subject: "Reset Password successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password reset done",
    });

    console.log("password reset done", response);
  } catch (error) {
    console.log(`error in password reset reset email`, { error });
    throw new Error(`error in password reset reset email`, { error });
  }
};
