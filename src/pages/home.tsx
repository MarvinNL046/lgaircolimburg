import { Navbar } from "@/components/sections/navbar";
import { HeroOptimized } from "@/components/sections/hero-optimized";
import { ServicesOptimized } from "@/components/sections/services-optimized";
import { WhyUs } from "@/components/sections/why-us";
import { BrandLogos } from "@/components/sections/brand-logos";
import { ContactForm } from "@/components/sections/contact-form";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <Navbar />
      <main>
        <section id="home">
          <HeroOptimized />
        </section>
        <section id="diensten">
          <ServicesOptimized />
        </section>
        <section id="waarom-ons">
          <WhyUs />
        </section>
        <section id="merken">
          <BrandLogos />
        </section>
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}