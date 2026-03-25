import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for I DO Entertainment. Read our terms and conditions governing the use of our website and event planning services in Toronto and the GTA.",
  alternates: { canonical: "https://idoentertainment.ca/terms" },
};

export default function TermsPage() {
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
            TERMS OF SERVICE
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
                1. ACCEPTANCE OF TERMS
              </h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
                (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and I DO Entertainment
                (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing
                your access to and use of our website at idoentertainment.ca (the &ldquo;Site&rdquo;) and all
                related services, including but not limited to event planning, DJ services, photo booth rentals,
                catering, bar services, lighting and audio rentals, and event equipment rentals (collectively,
                the &ldquo;Services&rdquo;).
              </p>
              <p>
                By accessing or using our Site or engaging our Services, you represent that you are at least
                eighteen (18) years of age and have the legal capacity to enter into these Terms. If you are
                entering into these Terms on behalf of an organization, you represent and warrant that you have
                the authority to bind that organization.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2. SERVICES AND BOOKINGS
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">2.1 Service Descriptions</h3>
              <p>
                All descriptions of Services on our Site are provided for informational purposes only and do not
                constitute an offer to sell or a solicitation of an offer to purchase. We reserve the right to
                modify, discontinue, or update our Services and pricing at any time without prior notice.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">2.2 Booking Process</h3>
              <p>
                All bookings are subject to availability and are not confirmed until you receive a written
                confirmation from us (via email or through our booking platform, HoneyBook). A booking is
                considered confirmed only upon (a) execution of a service agreement or contract, and (b)
                receipt of the required deposit payment.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">2.3 Service Agreements</h3>
              <p>
                For each booking, we will provide a separate Service Agreement detailing the specific scope of
                services, pricing, timeline, and terms applicable to your event. In the event of any conflict
                between these Terms and a Service Agreement, the Service Agreement shall prevail with respect
                to the specific engagement.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3. PRICING AND PAYMENT
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">3.1 Pricing</h3>
              <p>
                All prices quoted are in Canadian Dollars (CAD) and are exclusive of applicable taxes (HST)
                unless otherwise stated. Prices are subject to change without notice; however, any price
                confirmed in a signed Service Agreement will be honoured for that engagement.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">3.2 Deposits</h3>
              <p>
                A non-refundable deposit of twenty-five percent (25%) of the total contract value is required
                to confirm your booking, unless otherwise specified in your Service Agreement. The deposit
                secures your event date and initiates the planning process.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">3.3 Payment Schedule</h3>
              <p>
                Unless otherwise agreed in writing, the remaining balance is due no later than fourteen (14)
                days prior to the event date. Payments may be made via credit card, e-transfer, or cheque.
                Late payments may be subject to a late fee of two percent (2%) per month on the outstanding
                balance.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">3.4 Additional Charges</h3>
              <p>
                Any additional services, equipment, or modifications requested after the execution of a Service
                Agreement may result in additional charges. We will obtain your written approval before
                incurring any additional costs.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                4. CANCELLATION AND REFUND POLICY
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">4.1 Client Cancellation</h3>
              <p>All cancellation requests must be submitted in writing (email is acceptable). The following cancellation schedule applies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>More than ninety (90) days before the event:</strong> Full refund of amounts paid, less the non-refundable deposit.</li>
                <li><strong>Sixty (60) to ninety (90) days before the event:</strong> Fifty percent (50%) of the total contract value is retained; balance refunded.</li>
                <li><strong>Thirty (30) to fifty-nine (59) days before the event:</strong> Seventy-five percent (75%) of the total contract value is retained; balance refunded.</li>
                <li><strong>Less than thirty (30) days before the event:</strong> No refund. One hundred percent (100%) of the contract value is due and payable.</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">4.2 Company Cancellation</h3>
              <p>
                In the unlikely event that we must cancel our Services due to circumstances within our control,
                we will provide you with a full refund of all amounts paid, including the deposit. We shall not
                be liable for any consequential, incidental, or indirect damages resulting from our cancellation.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">4.3 Rescheduling</h3>
              <p>
                Event date changes are subject to availability and must be requested in writing at least thirty
                (30) days prior to the original event date. One (1) date change may be accommodated at no
                additional charge, provided the new date is within twelve (12) months of the original date.
                Subsequent date changes may incur a rescheduling fee of $250 CAD.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                5. FORCE MAJEURE
              </h2>
              <p>
                Neither party shall be liable for any failure or delay in the performance of its obligations
                under these Terms or any Service Agreement to the extent such failure or delay is caused by
                circumstances beyond the reasonable control of the affected party, including but not limited to:
                acts of God, natural disasters, pandemics, epidemics, government orders or restrictions, civil
                unrest, war, terrorism, labour disputes, power outages, severe weather conditions, or venue
                closures (&ldquo;Force Majeure Event&rdquo;). In the event of a Force Majeure Event, the
                affected party shall promptly notify the other party, and both parties shall work in good faith
                to reschedule the event or agree upon an equitable resolution.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                6. EQUIPMENT AND RENTAL TERMS
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">6.1 Care of Equipment</h3>
              <p>
                All rental equipment remains the property of I DO Entertainment. You are responsible for the
                care and safekeeping of all rented equipment from the time of delivery or setup until the time
                of pickup. Equipment must be returned in the same condition as received, subject to normal
                wear and tear.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">6.2 Damage and Loss</h3>
              <p>
                You shall be liable for the full replacement cost of any equipment that is lost, stolen,
                damaged beyond normal wear and tear, or not returned. A damage assessment will be conducted
                upon equipment retrieval, and you will be invoiced for any damage or loss at current
                replacement value.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">6.3 Setup and Removal</h3>
              <p>
                We require reasonable access to the venue for equipment setup and removal. You are responsible
                for ensuring that the venue permits our team to access the space at the agreed-upon times.
                Delays in access may result in additional charges.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                7. LIABILITY AND INDEMNIFICATION
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">7.1 Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by applicable law, I DO Entertainment&apos;s total liability
                arising out of or related to these Terms or any Service Agreement shall not exceed the total
                amount paid by you for the specific Services giving rise to the claim. In no event shall we be
                liable for any indirect, incidental, special, consequential, or punitive damages, including but
                not limited to loss of profits, loss of data, loss of enjoyment, or emotional distress, even
                if we have been advised of the possibility of such damages.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">7.2 Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless I DO Entertainment, its owners, officers,
                employees, agents, and subcontractors from and against any and all claims, liabilities, damages,
                losses, costs, and expenses (including reasonable attorney&apos;s fees) arising out of or
                related to: (a) your breach of these Terms; (b) your use of our Services; (c) any injury,
                damage, or loss occurring at your event venue; or (d) any third-party claims related to your
                event.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">7.3 Insurance</h3>
              <p>
                We maintain commercial general liability insurance for our operations. Certificates of
                insurance are available upon request. We recommend that you obtain your own event insurance
                to cover risks specific to your event, including but not limited to guest injuries, property
                damage, and vendor-related incidents.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                8. INTELLECTUAL PROPERTY
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">8.1 Company Content</h3>
              <p>
                All content on our Site, including but not limited to text, graphics, logos, images, audio,
                video, software, and design elements, is the property of I DO Entertainment or its licensors
                and is protected by Canadian and international copyright, trademark, and other intellectual
                property laws. You may not reproduce, distribute, modify, create derivative works of, publicly
                display, or otherwise exploit any content from our Site without our prior written consent.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">8.2 Event Photography and Media</h3>
              <p>
                We reserve the right to photograph and record our Services at your event for use in our
                marketing materials, portfolio, website, and social media, unless you notify us in writing
                at least fourteen (14) days prior to your event that you do not consent to such use. Any
                photos or videos taken by our team remain the intellectual property of I DO Entertainment.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                9. USE OF WEBSITE
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Site for any unlawful purpose or in violation of any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the Site, other accounts, computer systems, or networks</li>
                <li>Interfere with or disrupt the operation of the Site or the servers or networks connected to the Site</li>
                <li>Use any automated means (including bots, scrapers, or crawlers) to access or collect data from the Site</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li>Upload or transmit any viruses, malware, or other harmful code</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                10. DISPUTE RESOLUTION
              </h2>
              <h3 className="text-lg font-semibold text-charcoal mb-2">10.1 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Province of
                Ontario and the federal laws of Canada applicable therein, without regard to conflict of law
                principles.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">10.2 Mediation</h3>
              <p>
                In the event of any dispute arising out of or relating to these Terms or any Service Agreement,
                the parties agree to first attempt to resolve the dispute through good-faith negotiation. If
                the dispute is not resolved within thirty (30) days, the parties agree to submit the dispute
                to mediation administered by a mutually agreed-upon mediator in the City of Toronto, Ontario.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">10.3 Jurisdiction</h3>
              <p>
                If mediation is unsuccessful, any legal action or proceeding shall be brought exclusively in
                the courts of the Province of Ontario, and you irrevocably consent to the jurisdiction of
                such courts.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                11. GENERAL PROVISIONS
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Entire Agreement:</strong> These Terms, together with any applicable Service
                  Agreement, constitute the entire agreement between you and I DO Entertainment and supersede
                  all prior or contemporaneous agreements, representations, and understandings.
                </li>
                <li>
                  <strong>Severability:</strong> If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall continue in full force and effect.
                </li>
                <li>
                  <strong>Waiver:</strong> The failure of either party to enforce any right or provision of
                  these Terms shall not constitute a waiver of such right or provision.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign or transfer your rights or obligations under
                  these Terms without our prior written consent. We may assign our rights and obligations
                  without restriction.
                </li>
                <li>
                  <strong>Notices:</strong> All notices under these Terms shall be in writing and delivered
                  via email to the addresses provided by each party.
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                12. CHANGES TO THESE TERMS
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Any changes will be effective
                immediately upon posting the revised Terms on our Site with an updated &ldquo;Last
                updated&rdquo; date. Your continued use of our Site or Services following the posting of
                changes constitutes your acceptance of such changes.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                13. CONTACT US
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
