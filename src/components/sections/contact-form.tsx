import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Phone, Mail } from "lucide-react";
import { sendEmail } from "@/utils/email";

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(10, "Vul een geldig telefoonnummer in"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  variant?: 'hero' | 'section';
}

export function ContactForm({ variant = 'section' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);

    try {
      await sendEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw of neem telefonisch contact op.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Uw naam"
              {...register("name")}
              className="input-field w-full bg-white/90 text-gray-900 placeholder-gray-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              placeholder="Telefoonnummer"
              {...register("phone")}
              className="input-field w-full bg-white/90 text-gray-900 placeholder-gray-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <input
            type="email"
            id="email"
            placeholder="E-mailadres"
            {...register("email")}
            className="input-field w-full bg-white/90 text-gray-900 placeholder-gray-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            id="message"
            rows={3}
            placeholder="Vertel ons over uw wensen..."
            {...register("message")}
            className="input-field w-full bg-white/90 text-gray-900 placeholder-gray-500 min-h-[80px]"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verzenden...
            </>
          ) : (
            "Gratis offerte aanvragen"
          )}
        </button>

        {submitSuccess && (
          <div className="rounded-lg bg-green-500/20 p-3 border border-green-400">
            <p className="text-sm text-green-100">
              Bedankt! We nemen binnen 24u contact op.
            </p>
          </div>
        )}

        {submitError && (
          <div className="rounded-lg bg-red-500/20 p-3 border border-red-400">
            <p className="text-sm text-red-100">{submitError}</p>
          </div>
        )}
      </form>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact <span className="text-orange-500">StayCool</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Klaar voor professionele airconditioning? Neem contact op voor een 
                gratis offerte en perselijk advies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefoon</p>
                  <a href="tel:0462021430" className="text-orange-500 hover:text-orange-600">
                    046-202-1430
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <a 
                    href="https://wa.me/31636481054" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    063-648-1054
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Openingstijden</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Maandag - Dinsdag</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Woensdag - Donderdag</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vrijdag</span>
                    <span>09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span className="text-red-500">Gesloten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Aanvraag indienen
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="input-field w-full"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="input-field w-full"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="input-field w-full"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Uw bericht *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Vertel ons over uw wensen voor airconditioning..."
                  {...register("message")}
                  className="input-field w-full"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verzenden...
                  </>
                ) : (
                  "Verstuur aanvraag"
                )}
              </button>

              {submitSuccess && (
                <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                  <p className="text-sm text-green-800">
                    Bedankt voor uw aanvraag! We nemen binnen 24 uur contact met u op.
                  </p>
                </div>
              )}

              {submitError && (
                <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}