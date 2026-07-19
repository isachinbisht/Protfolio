import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main id="contact" className="mx-auto w-full max-w-6xl flex-1 px-6 pb-32 pt-28 sm:pt-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left column - heading */}
          <div className="order-2 lg:order-1 lg:pt-24">
            <p className="max-w-md text-pretty text-3xl font-light leading-tight text-foreground sm:text-[2.5rem]">
              please contact me to set up an online meeting or ask any questions
              you have.
            </p>
          </div>

          {/* Right column - label + form */}
          <div className="order-1 lg:order-2">
            <p className="mb-16 text-sm tracking-wide text-foreground/40">
              {"[let's talk]"}
            </p>
            <ContactForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
