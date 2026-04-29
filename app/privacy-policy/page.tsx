import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Waleed Amazon Consultant",
  description:
    "Read our privacy policy to learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-yellow-100 px-1 rounded font-medium">{children}</span>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded mb-8 text-base"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Privacy Policy
        </h1>

        <p className="text-base text-gray-700 mb-10">
          <strong>Last Updated: April 30, 2026</strong>
        </p>

        <div className="space-y-10 text-gray-900">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-base leading-relaxed">
              Welcome to{" "}
              <strong>
                <Placeholder>Waleed Amazon Consultant</Placeholder>
              </strong>{" "}
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We provide
              Amazon Virtual Assistant services including listing optimization,
              PPC management, product research, and Amazon account management to
              e-commerce sellers worldwide. This Privacy Policy explains how we
              collect, use, store, and protect your personal information when
              you interact with us through our Facebook and Instagram
              advertisements, lead forms, website, WhatsApp, email, or other
              communication channels. By submitting your information through our
              Facebook lead form or any other contact method, you agree to the
              practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Who We Are</h2>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>
                <strong>Business Name:</strong> Waleed Amazon Consultant
              </li>
              <li>
                <strong>Owner / Operator:</strong> Waleed Hassan
              </li>
              <li>
                <strong>Location:</strong> Bahawalnagar, Pakistan
              </li>
              <li>
                <strong>Contact Email:</strong> waleed.hassan@ecompearls.org
              </li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              We are a small business operating from Pakistan and providing
              services to Amazon sellers globally, including in the United
              States, United Kingdom, Canada, Australia, and other countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-4">
              When you fill out our Facebook lead form, contact us through
              WhatsApp, email, or other channels, we may collect:
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              Information You Provide Directly:
            </h3>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>Full Name — to personalize our communication</li>
              <li>
                Email Address — to deliver your free audit and send follow-up
                communications
              </li>
              <li>
                Phone Number / WhatsApp Number — to contact you about your audit
                and services
              </li>
              <li>
                Amazon Store URL or Listing URL — to perform the audit you
                requested
              </li>
              <li>Monthly Revenue Range — to understand your business stage</li>
              <li>Business Challenges and Goals — to tailor our recommendations</li>
              <li>
                Any other information you voluntarily share during calls,
                messages, or emails
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              Information Collected Automatically:
            </h3>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>
                Technical Information such as IP address, device type, browser
                type
              </li>
              <li>
                Cookies and Tracking Pixels including Meta Pixel and Conversions
                API
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              Information from Third-Party Sources:
            </h3>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>Meta (Facebook/Instagram) Lead Forms data</li>
              <li>Publicly available information about your Amazon store</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. How We Use Your Information
            </h2>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>To deliver your free audit</li>
              <li>To communicate with you via WhatsApp, email, or phone</li>
              <li>To provide our services if you become a paying client</li>
              <li>To improve our marketing</li>
              <li>To send helpful tips and case studies (occasionally)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Legal Basis for Processing (For EU/UK Users)
            </h2>
            <p className="text-base leading-relaxed">
              Our legal basis includes consent, legitimate interest, contract
              fulfillment, and legal obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Who We Share Your Information With
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We share
              only with:
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              Service Providers:
            </h3>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>Meta Platforms (Facebook, Instagram, WhatsApp)</li>
              <li>Email Service Providers (Gmail, etc.)</li>
              <li>Calendar Tools (Calendly)</li>
              <li>Video Communication Tools (Loom, Zoom, Google Meet)</li>
              <li>Payment Processors (Payoneer, Wise, Stripe, PayPal)</li>
              <li>Cloud Storage (Google Drive, Dropbox)</li>
            </ul>

            <p className="text-base leading-relaxed mt-4">
              We may also disclose information for legal compliance or in case
              of business transfer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. How We Store and Protect Your Information
            </h2>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>Secure password-protected storage</li>
              <li>Limited access to authorized personnel only</li>
              <li>Industry-standard encryption</li>
              <li>No public sharing of business data</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              No method of transmission is 100% secure, but we take reasonable
              precautions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. How Long We Keep Your Information
            </h2>
            <p className="text-base leading-relaxed">
              We retain your information for as long as necessary to fulfill the
              purposes outlined. If you are not a client and have not interacted
              with us for 24 months, we will delete or anonymize your
              information unless legally required to keep it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-base leading-relaxed">
              We are based in Pakistan, and the services we use may store data
              in the United States, European Union, or other countries. By
              submitting your information, you consent to these transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Your Rights</h2>
            <p className="text-base leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion (&quot;right to be forgotten&quot;)</li>
              <li>Restrict processing</li>
              <li>Object to marketing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
              <li>Unsubscribe from communications</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              To exercise these rights, email us at{" "}
              <Placeholder>waleed.hassan@ecompearls.org</Placeholder> with the subject &quot;Privacy
              Request.&quot; We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              11. California Privacy Rights (CCPA)
            </h2>
            <p className="text-base leading-relaxed">
              California residents have the right to know what data we collect,
              request deletion, opt out of &quot;sale&quot; of personal
              information (we don&apos;t sell), and not be discriminated against
              for exercising rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              12. Children&apos;s Privacy
            </h2>
            <p className="text-base leading-relaxed">
              Our services are intended for individuals 18 and older. We do not
              knowingly collect information from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              13. Cookies and Tracking Technologies
            </h2>
            <p className="text-base leading-relaxed">
              We may use Meta Pixel, Google Analytics, and functional cookies.
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              14. Third-Party Links
            </h2>
            <p className="text-base leading-relaxed">
              Our communications may link to third-party websites (Calendly,
              Loom, etc.). We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              15. WhatsApp Communication
            </h2>
            <p className="text-base leading-relaxed">
              We use WhatsApp to send your audit, follow up about services, and
              share occasional helpful tips. Reply &quot;STOP&quot; to
              unsubscribe. WhatsApp messages are subject to WhatsApp&apos;s own
              privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              16. Email Communication
            </h2>
            <p className="text-base leading-relaxed">
              We use email to send your audit and occasional helpful content.
              Every marketing email includes an unsubscribe link. Email{" "}
              <Placeholder>waleed.hassan@ecompearls.org</Placeholder> to be removed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              17. Updates to This Privacy Policy
            </h2>
            <p className="text-base leading-relaxed">
              We may update this policy. The &quot;Last Updated&quot; date
              indicates the most recent revision. Continued use after changes
              constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">18. Disclaimer</h2>
            <p className="text-base leading-relaxed">
              Our free audit and advice are based on professional experience.
              Results vary based on product quality, market conditions, and
              execution. We make no specific guarantees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">19. Governing Law</h2>
            <p className="text-base leading-relaxed">
              This Privacy Policy is governed by the laws of Pakistan. Disputes
              will be resolved in the courts of{" "}
              <Placeholder>Bahawalnagar</Placeholder>, Pakistan, unless otherwise
              required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">20. Contact Us</h2>
            <ul className="space-y-2 text-base leading-relaxed list-disc pl-6">
              <li>
                <strong>Email:</strong> waleed.hassan@ecompearls.org
              </li>
              <li>
                <strong>Business Name:</strong> Waleed Amazon Consultant
              </li>
              <li>
                <strong>Location:</strong> <Placeholder>Bahawalnagar</Placeholder>,
                Pakistan
              </li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              We will respond to all reasonable inquiries within 30 days.
            </p>
          </section>

          <hr className="border-gray-200" />

          <p className="text-base leading-relaxed text-gray-700 italic">
            By submitting our Facebook lead form, contacting us via WhatsApp,
            email, or any other channel, or engaging our services, you
            acknowledge that you have read, understood, and agreed to this
            Privacy Policy.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-block text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded text-base"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
