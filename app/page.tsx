import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center px-6 py-20 sm:py-28">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Waleed Amazon Consultant
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Helping Amazon sellers scale their stores with expert virtual
            assistant services.
          </p>
          <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            I work directly with Amazon sellers to optimize listings, run
            profitable PPC campaigns, and manage day-to-day account operations.
            Whether you&apos;re launching your first product or scaling past
            seven figures, I help remove the bottlenecks slowing your growth.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Listing Optimization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Keyword-driven titles, bullets, and A+ content that convert
                browsers into buyers.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                PPC Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Profitable Sponsored Ads campaigns built around your ACoS and
                TACoS targets.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Account Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Full Seller Central oversight — health, cases, inventory, and
                day-to-day operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ready to scale your Amazon store? Reach out and I&apos;ll get back
            to you within 24 hours.
          </p>
          <ul className="space-y-3 text-base text-gray-800">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:waleed.hassan@ecompearls.org"
                className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                waleed.hassan@ecompearls.org
              </a>
            </li>
            <li>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <span className="text-gray-700">Available on request</span>
            </li>
            <li>
              <span className="font-semibold">Location:</span> Bahawalnagar,
              Pakistan
            </li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Waleed Amazon Consultant. All
            rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
