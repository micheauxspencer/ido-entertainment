import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for I DO Entertainment. Learn how we collect, use, and protect your personal information when you use our event planning services in Toronto and the GTA.",
  alternates: { canonical: "https://idoentertainment.ca/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar solid />

      <section className="pt-32 pb-24 md:pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <span
            className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Legal
          </span>
          <h1
            className="text-5xl md:text-7xl text-charcoal mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            PRIVACY POLICY
          </h1>
          <p className="text-charcoal/50 text-sm mb-12">
            Last updated: March 24, 2026
          </p>

          <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal/70 text-[15px] leading-relaxed">
            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                1. INTRODUCTION
              </h2>
              <p>
                I DO Entertainment (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
                protecting and respecting your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your personal information when you visit our website at
                idoentertainment.ca (the &ldquo;Site&rdquo;), use our services, or otherwise interact with us.
              </p>
              <p>
                By accessing our Site or using our services, you acknowledge that you have read, understood,
                and agree to be bound by this Privacy Policy. If you do not agree with the terms of this
                Privacy Policy, please do not access the Site or use our services.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2. INFORMATION WE COLLECT
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">2.1 Personal Information You Provide</h3>
              <p>We may collect the following personal information when you voluntarily provide it to us:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address or event venue address</li>
                <li>Event date and details</li>
                <li>Payment and billing information (processed securely through our third-party payment processor)</li>
                <li>Any other information you choose to provide in contact forms, emails, or during consultations</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">2.2 Information Collected Automatically</h3>
              <p>When you visit our Site, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website or source</li>
                <li>Pages viewed, time spent on pages, and navigation paths</li>
                <li>Date and time of access</li>
                <li>Device identifiers and screen resolution</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies, web beacons, pixels, and similar tracking technologies to collect information
                about your browsing activities. Cookies are small data files placed on your device that help us
                improve our Site and your experience. You may control cookies through your browser settings;
                however, disabling cookies may limit your ability to use certain features of our Site.
              </p>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for the Site to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site (e.g., Google Analytics)</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
                <li><strong>Third-Party Cookies:</strong> Set by third-party services embedded in our Site (e.g., HoneyBook, Google Reviews widget)</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3. HOW WE USE YOUR INFORMATION
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process bookings, contracts, and payments for our event services</li>
                <li>To communicate with you about your event, including confirmations, updates, and follow-ups</li>
                <li>To send promotional communications, newsletters, and marketing materials (with your consent)</li>
                <li>To improve, personalize, and optimize our Site and services</li>
                <li>To analyze usage trends and measure the effectiveness of our marketing campaigns</li>
                <li>To comply with legal obligations, resolve disputes, and enforce our agreements</li>
                <li>To detect, prevent, and address fraud, security breaches, or technical issues</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                4. HOW WE SHARE YOUR INFORMATION
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Service Providers:</strong> We may share your information with trusted third-party
                  service providers who assist us in operating our business, including payment processors
                  (e.g., Stripe, HoneyBook), email service providers, analytics providers (e.g., Google
                  Analytics), and cloud hosting services. These providers are contractually obligated to
                  protect your information and use it only for the purposes we specify.
                </li>
                <li>
                  <strong>Event Partners:</strong> With your consent, we may share relevant event details with
                  subcontractors, venues, or partner vendors involved in delivering your event services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by
                  law, court order, or governmental regulation, or if we believe such disclosure is necessary
                  to protect our rights, your safety, or the safety of others.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization,
                  or sale of all or a portion of our assets, your personal information may be transferred as
                  part of that transaction.
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                5. DATA RETENTION
              </h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which
                it was collected, including to satisfy any legal, accounting, or reporting requirements. For
                event-related data, we typically retain records for a period of seven (7) years following the
                completion of services. Contact form submissions and marketing data are retained until you
                request deletion or unsubscribe from our communications.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                6. DATA SECURITY
              </h2>
              <p>
                We implement commercially reasonable technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or destruction.
                These measures include encryption of data in transit (SSL/TLS), secure server infrastructure,
                access controls, and regular security assessments. However, no method of transmission over the
                Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                7. YOUR RIGHTS AND CHOICES
              </h2>
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access:</strong> You may request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You may request that we correct any inaccurate or incomplete personal information.</li>
                <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain legal exceptions.</li>
                <li><strong>Withdrawal of Consent:</strong> Where processing is based on your consent, you may withdraw consent at any time.</li>
                <li><strong>Opt-Out of Marketing:</strong> You may opt out of receiving promotional communications by following the unsubscribe instructions in our emails or by contacting us directly.</li>
                <li><strong>Data Portability:</strong> You may request a copy of your data in a structured, commonly used, and machine-readable format.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at info@idoentertainment.ca. We will respond
                to your request within thirty (30) days.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                8. CANADIAN PRIVACY LEGISLATION
              </h2>
              <p>
                We comply with applicable Canadian privacy legislation, including the Personal Information
                Protection and Electronic Documents Act (PIPEDA) and any applicable provincial privacy
                legislation. Under PIPEDA, you have the right to access your personal information held by us,
                to challenge its accuracy, and to request amendments. You also have the right to file a
                complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy
                rights have been violated.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                9. THIRD-PARTY LINKS AND SERVICES
              </h2>
              <p>
                Our Site may contain links to third-party websites, services, or applications that are not
                operated by us. These include, but are not limited to, HoneyBook (our booking and contact form
                provider), Google Reviews, and social media platforms. We are not responsible for the privacy
                practices of these third parties, and we encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                10. CHILDREN&apos;S PRIVACY
              </h2>
              <p>
                Our Site and services are not directed to individuals under the age of sixteen (16). We do not
                knowingly collect personal information from children under 16. If we become aware that we have
                inadvertently collected personal information from a child under 16, we will take steps to
                delete such information promptly.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                11. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be
                effective immediately upon posting the revised Privacy Policy on our Site with an updated
                &ldquo;Last updated&rdquo; date. Your continued use of our Site or services following the
                posting of changes constitutes your acceptance of such changes. We encourage you to review
                this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                12. CONTACT US
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="bg-off-white rounded-2xl p-6 mt-4">
                <p className="font-semibold text-charcoal">I DO Entertainment</p>
                <p>Email: info@idoentertainment.ca</p>
                <p>Phone: (437) 876-3359</p>
                <p>Service Area: Toronto and the Greater Toronto Area, Ontario, Canada</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
