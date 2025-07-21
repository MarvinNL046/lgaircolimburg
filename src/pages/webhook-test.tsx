import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { sendToWebhookOnly } from "@/utils/email";

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(10, "Vul een geldig telefoonnummer in"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
  city: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function WebhookTestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastResponse, setLastResponse] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setLastResponse(null);

    try {
      await sendToWebhookOnly({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        city: data.city || "Limburg",
      });
      
      toast.success('Webhook test succesvol!');
      setLastResponse('SUCCESS: Data succesvol verzonden naar GoHighLevel webhook');
      reset();
    } catch (error) {
      console.error("Webhook test error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Webhook test gefaald: ${errorMessage}`);
      setLastResponse(`ERROR: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Meta Tags - NoIndex */}
          <div style={{ display: 'none' }}>
            <meta name="robots" content="noindex, nofollow" />
          </div>
          
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                GoHighLevel Webhook Test
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Test de GHL webhook integratie (alleen webhook, geen EmailJS)
              </p>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  ⚠️ Dit is een testpagina - alleen voor development/debugging
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Test Gebruiker"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="test@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  placeholder="0612345678"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stad (optioneel)
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  placeholder="Maastricht"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  placeholder="Dit is een test bericht voor de GHL webhook integratie"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Webhook testen...
                    </>
                  ) : (
                    "Test Webhook"
                  )}
                </button>
              </div>

              {lastResponse && (
                <div className={`rounded-md p-4 ${
                  lastResponse.startsWith('SUCCESS') 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`text-sm ${
                    lastResponse.startsWith('SUCCESS') ? 'text-green-800' : 'text-red-600'
                  }`}>
                    {lastResponse}
                  </p>
                </div>
              )}
            </form>

            <div className="mt-8 p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Webhook Details
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>URL:</strong> https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f
              </p>
              <p className="text-sm text-gray-600">
                <strong>Data formaat:</strong> JSON met 'data' object containing name, email, phone, city, message
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}