import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/email";
import { contactConfig } from "@/config/contact";

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

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

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city,
        woonplaats: data.city
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log("Starting dual submission:", data);
  }

  // Send to all services simultaneously for better performance
  const [emailJSSuccess, leadflowSuccess] = await Promise.allSettled([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  const emailJSResult = emailJSSuccess.status === 'fulfilled' && emailJSSuccess.value;
  const leadflowResult = leadflowSuccess.status === 'fulfilled' && leadflowSuccess.value;

  if (DEBUG_MODE) {
    console.log("EmailJS result:", emailJSResult);
    console.log("Leadflow result:", leadflowResult);
  }

  // Only throw error if ALL methods fail
  if (!emailJSResult && !leadflowResult) {
    throw new Error('Failed to send contact form data');
  }

  if (DEBUG_MODE) {
    console.log("Dual submission completed successfully");
  }
};