import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Matt Laurie, REALTOR® and mattlaurierealestate.com.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white shadow-sm p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Privacy Policy
          </h1>
          <div className="prose prose-slate max-w-none prose-p:text-[var(--color-text-muted)] prose-li:text-[var(--color-text-muted)] prose-headings:text-[var(--color-primary)]">
            <p>
              Matt Laurie, REALTOR® (&ldquo;Matt Laurie,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy.
              This Privacy Policy explains how information is collected, used, and protected when you visit
              mattlaurierealestate.com or submit your information through our forms.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following information when you contact us or submit a form:</p>
            <ul>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address or location preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your request for home value information, buyer guidance, or property details</li>
              <li>Contact you about your real estate inquiry</li>
              <li>Coordinate appointments, consultations, and follow-up communication</li>
              <li>Improve website performance, lead handling, and customer service</li>
            </ul>

            <h2>SMS Text Messaging</h2>
            <p>
              If you submit a form on mattlaurierealestate.com and check the SMS consent box, you agree to
              receive text messages from Matt Laurie regarding your real estate inquiry. These messages may
              include follow-up about buying or selling, home value estimates, requested property information,
              appointment coordination, and related customer care communication.
            </p>
            <p>
              Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time.
              Reply HELP for help.
            </p>
            <p>
              Consent to receive SMS messages is not a condition of purchase.
            </p>
            <p>
              Mobile information will not be shared, sold, rented, or transferred to third parties or affiliates
              for marketing or promotional purposes.
            </p>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share limited information with service providers
              who help us operate the website, manage communications, or respond to your inquiry, but only as
              needed to provide those services.
            </p>

            <h2>Cookies and Analytics</h2>
            <p>
              We may use cookies, analytics tools, and advertising pixels to understand website traffic and
              improve marketing performance. These tools may collect browser and device information, pages
              visited, and interaction data.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable steps to protect the information you submit, but no website or transmission
              method is guaranteed to be 100% secure.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may contact us at any time to request that we update or delete your information, subject to
              any legal or recordkeeping obligations.
            </p>

            <h2>Contact</h2>
            <p>
              Matt Laurie, REALTOR®<br />
              Keller Williams Real Estate<br />
              584 Middletown Blvd Suite A50<br />
              Langhorne, PA 19047<br />
              (267) 225-5611<br />
              mattlaurie@kw.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
