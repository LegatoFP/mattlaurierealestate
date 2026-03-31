import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Matt Laurie, REALTOR® and mattlaurierealestate.com.',
}

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white shadow-sm p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Terms of Service
          </h1>
          <div className="prose prose-slate max-w-none prose-p:text-[var(--color-text-muted)] prose-li:text-[var(--color-text-muted)] prose-headings:text-[var(--color-primary)]">
            <p>
              By using mattlaurierealestate.com, you agree to these Terms of Service. If you do not agree,
              please do not use the website.
            </p>

            <h2>Website Use</h2>
            <p>
              This website is provided for informational purposes related to real estate services offered by
              Matt Laurie, REALTOR®. You agree not to misuse the website, submit false information, or attempt
              to interfere with site functionality.
            </p>

            <h2>No Guarantee of Results</h2>
            <p>
              Home value estimates, market commentary, buyer program information, and other content on this site
              are for general informational purposes only and do not guarantee specific results, pricing,
              financing approval, or transaction outcomes.
            </p>

            <h2>SMS Communications</h2>
            <p>
              By submitting a form on mattlaurierealestate.com and checking the SMS consent box, you agree to
              receive text messages from Matt Laurie related to your real estate inquiry. These messages may
              include follow-up about buying, selling, home value estimates, requested property details,
              scheduling, and customer care communication.
            </p>
            <p>
              Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for
              help. Consent to receive SMS messages is not a condition of purchase.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including copy, branding, graphics, and layout, is owned by or used
              with permission by Matt Laurie unless otherwise noted. You may not reproduce or republish site
              materials without permission.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              This website may use third-party tools for analytics, advertising, communications, and hosting.
              We are not responsible for the independent policies or practices of those third parties.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent allowed by law, Matt Laurie shall not be liable for any indirect,
              incidental, or consequential damages resulting from your use of this website or reliance on its
              content.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              These Terms of Service may be updated from time to time. Continued use of the website after any
              update means you accept the revised terms.
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
