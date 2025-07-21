import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/email";
import { contactConfig } from "@/config/contact";

// Webhook configuration
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

// Debug mode - set to true for troubleshooting
const DEBUG_MODE = false;

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city?: string;
}

// Send data via EmailJS (existing method)
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log("Sending via EmailJS:", data);
    }

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone_number: data.phone,
        message: data.message,
        to_name: contactConfig.companyName,
        reply_to: data.email,
      },
      emailConfig.publicKey
    );

    if (DEBUG_MODE) {
      console.log("EmailJS success");
    }

    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error("EmailJS error:", error);
    }
    return false;
  }
};

// Send data to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log("Sending to GHL webhook:", data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || "Limburg",
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log("Webhook response status:", response.status);
      console.log("Webhook response headers:", response.headers);
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        const errorText = await response.text();
        console.error("Webhook error response:", errorText);
      }
      return false;
    }
    
    if (DEBUG_MODE) {
      console.log("Webhook success");
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error("Webhook error:", error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log("Starting dual submission:", data);
  }

  // Send to both services simultaneously for better performance
  const [emailJSSuccess, webhookSuccess] = await Promise.allSettled([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);

  const emailJSResult = emailJSSuccess.status === 'fulfilled' && emailJSSuccess.value;
  const webhookResult = webhookSuccess.status === 'fulfilled' && webhookSuccess.value;

  if (DEBUG_MODE) {
    console.log("EmailJS result:", emailJSResult);
    console.log("Webhook result:", webhookResult);
  }

  // Only throw error if BOTH methods fail
  if (!emailJSResult && !webhookResult) {
    throw new Error('Failed to send contact form data');
  }

  if (DEBUG_MODE) {
    console.log("Dual submission completed successfully");
  }
};

// Webhook-only function for testing
export const sendToWebhookOnly = async (data: EmailData): Promise<void> => {
  const success = await sendToWebhook(data);
  if (!success) {
    throw new Error('Failed to send data to webhook');
  }
};