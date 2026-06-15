import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("terms-conditions");
}

const SupportLink = () => (
  <a
    href="mailto:support@iwilltilimwell.com"
    className="text-primary hover:underline"
  >
    support@iwilltilimwell.com
  </a>
);

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden h-[280px] md:h-[340px]"
          style={{
            background: "linear-gradient(135deg, #4a3260 0%, #604376 100%)",
          }}
        >
          {/* Decorative lotus */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] opacity-15 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
            <img
              src="/images/logo-favi.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <Link
            href="/"
            className="absolute top-6 left-6 z-[4] inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="relative h-full container-main section-padding flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Terms &amp; Conditions
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            {/* Intro */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-base mb-12">
              <p>
                Welcome to the EssentiaCare LLC ("The Company") website
                (the "Site"). The Company provides a platform for online health
                and wellness services by arranging for video, telephone, or
                electronic consultations with licensed healthcare professionals,
                offering electronic medical record storage, and other related
                products and services (collectively, the "Services"). The
                Company itself does not provide medical services but facilitates
                consultations between users and healthcare providers. The
                Company's role is exclusively to provide referrals and tools for
                accessing the services, for which the Company charges a fee.
              </p>
              <p>
                By accessing and using this Site, you agree to be bound by these
                Terms and Conditions. As used herein, "The Company" means EssentiaCare LLC, its parent, subsidiaries, and affiliated
                entities, and "you" or "your" refers to the user, including any
                dependents or others eligible under your account. These Terms
                and Conditions govern your access to and use of the Site, as
                well as your registration for and subscription to the Company's
                Services.
              </p>
            </div>

            {/* 1. Medical Emergency */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                1. Medical Emergency.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                If you are experiencing a medical emergency, please dial 911 or
                seek immediate medical attention. The Services provided through
                this Site are not intended for emergency care.
              </p>
            </div>

            {/* 2. Medical Consultations and Services */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                2. Medical Consultations and Services.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  The Company facilitates access to healthcare services,
                  including consultations with independent healthcare providers
                  ("The Providers"). These Providers are part of independent,
                  provider-owned medical groups and are not employed by the
                  Company. THE COMPANY DOES NOT PROVIDE MEDICAL CARE, and the
                  content of the Site and the Services offered do not constitute
                  medical advice, diagnosis, or treatment. The information
                  provided on this Site is intended solely for informational
                  purposes and is not a substitute for professional medical
                  advice or care from qualified healthcare providers assessing
                  your condition in person. Your reliance on any information
                  obtained via the Site is at your own risk.
                </p>
                <p>
                  While the Company may facilitate consultations with licensed
                  healthcare providers, the Company is not engaged in the
                  practice of medicine, does not offer medical services, and
                  does not establish a doctor-patient relationship between you
                  and the Company. Your relationship is exclusively with the
                  healthcare provider you select for your consultation.
                </p>
              </div>
            </div>

            {/* 3. Prescription Policy */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                3. Prescription Policy.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company and the Providers accessed through the platform do
                not guarantee that prescriptions will be issued. Healthcare
                providers do not prescribe DEA-controlled substances, lifestyle
                medications, or any other drugs that may have a potential for
                misuse or abuse. Providers reserve the right to deny care or
                prescriptions based on their professional judgment. State
                telehealth regulations may impose additional or different
                requirements on providers and the services they offer.
              </p>
            </div>

            {/* 4. Use of the Site */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                4. Use of the Site.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Subject to your compliance with these Terms and Conditions,
                  your acknowledgment of the Privacy Policy on the Site, and
                  your payment of any applicable fees, the Company grants you a
                  limited, revocable, non-exclusive, non-transferable, and
                  non-sublicensable license to access and use the Site and
                  Services for your personal, non-commercial purposes. With the
                  exception of your personal medical records, the Company
                  retains all rights, titles, and interests in and to the Site,
                  Services, and any information, products, software, or other
                  materials on the Site. You agree not to copy, reproduce,
                  retransmit, distribute, sell, publish, or circulate any
                  information obtained from the Site without the prior written
                  permission of the Company.
                </p>
                <p>
                  You further agree that you will not use the Site or Services
                  for any unlawful purpose or to post or transmit any material
                  that is defamatory, fraudulent, libelous, obscene, or in
                  violation of any intellectual property rights of others. You
                  will not post or introduce any viruses, worms, Trojan horses,
                  or other harmful computer code. The Company reserves the right
                  to delete any content that violates these Terms or that the
                  Company deems objectionable.
                </p>
              </div>
            </div>

            {/* 5. Eligibility, Enrollment, and Account Security */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                5. Eligibility, Enrollment, and Account Security.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  To use the Site and access the Services, you must be of legal
                  age and not be prohibited from receiving Services under
                  applicable laws. The Services are intended solely for users in
                  the United States, and by using the Site, you agree to comply
                  with all relevant local and federal laws. The Company may
                  refuse registration or access to Services if you do not meet
                  the eligibility criteria.
                </p>
                <p className="font-bold">
                  To access the Services, you are required to:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      Provide accurate and truthful personal contact
                      information, including but not limited to your name,
                      address, telephone number, and email address.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      Set your browser to accept cookies from the Site.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      Consent to receive communications from the Company via
                      email or other electronic means.
                    </span>
                  </li>
                </ul>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account password and any activities that occur under your
                  account. You must notify the Company immediately of any
                  unauthorized access to your account. The Company is not liable
                  for any unauthorized use of your account or password.
                </p>
              </div>
            </div>

            {/* 6. Electronic Medical Records (EMR) */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                6. Electronic Medical Records (EMR).
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  The Company creates and maintains an Electronic Medical Record
                  ("EMR") for each user to securely store and access personal
                  health information, which licensed healthcare providers can
                  review as part of your consultation. The information provided
                  to a healthcare provider becomes part of the Company's EMR and
                  is subject to applicable state and federal laws, including the
                  Health Insurance Portability and Accountability Act (HIPAA).
                </p>
                <p>
                  From time to time, the Company may outsource certain aspects
                  of EMR management to a HIPAA-compliant network service
                  provider to ensure the highest levels of data security and
                  regulatory compliance. In such cases, the Company will select
                  providers that adhere to all relevant HIPAA requirements and
                  industry best practices for safeguarding personal health
                  information.
                </p>
                <p>
                  The healthcare providers accessing the EMR are solely
                  responsible for complying with applicable laws, including
                  HIPAA, regarding the use, access, and disclosure of
                  information within the EMR. The Company and/or its providers
                  will retain your EMR for seven (7) years, after which it will
                  be securely archived or deleted as required by law.
                </p>
              </div>
            </div>

            {/* 7. Payments, Changes to Services, and Refunds */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                7. Payments, Changes to Services, and Refunds.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  You are responsible for paying all fees associated with your
                  use of the Services. If a third party (such as an employer) is
                  paying for your subscription, and that third party ceases to
                  do so, you may continue to access the Services provided if you
                  arrange to pay the Company directly. You may upgrade or
                  downgrade your subscription level at any time, with changes
                  taking effect during your next billing cycle.
                </p>

                <p className="font-bold">1. Annual Payments</p>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      For users who choose to pay annually, refunds will not be
                      provided for any portion of the annual term already
                      completed. If you cancel an annual subscription, you must
                      pay for the full quarter in which the cancellation takes
                      place. Cancellation will take effect at the end of the
                      quarter in which the cancellation request is made, and no
                      further charges will be incurred after that point.
                    </span>
                  </li>
                </ul>
                <p className="ml-7">
                  <span className="font-bold">Please note:</span> Once a new
                  month of a new quarter begins, whether you use the Services or
                  not, that period is non-refundable.
                </p>

                <p className="font-bold">
                  2. Bi-Annual Payments (Every 6 months)
                </p>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      For users who choose to pay on a bi-annual basis (every
                      six months), refunds will not be provided for any portion
                      of the six-month term already completed. If you cancel a
                      bi-annual subscription, you must pay for the full quarter
                      in which the cancellation occurs. Cancellation will take
                      effect at the end of the quarter during which the
                      cancellation request is made, and no further charges will
                      apply after that time.
                    </span>
                  </li>
                </ul>
                <p className="ml-7">
                  <span className="font-bold">Please note:</span> Once a new
                  month of a new quarter begins, whether you use the Services or
                  not, that period is non-refundable.
                </p>

                <p className="font-bold">
                  3. Quarterly Payments (Every 3 months)
                </p>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      For users who choose to pay quarterly, refunds will not be
                      provided for any portion of the quarter already completed.
                      If you cancel a quarterly subscription, you must pay for
                      the full quarter in which the cancellation occurs.
                      Cancellation will take effect at the end of that quarter,
                      and no additional charges will be incurred thereafter.
                    </span>
                  </li>
                </ul>
                <p className="ml-7">
                  <span className="font-bold">Please note:</span> Once a new
                  month of a new quarter begins, whether you use the Services or
                  not, that period is non-refundable.
                </p>

                <p className="font-bold">4. Monthly Payments</p>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      Monthly payments offer flexible access without long-term
                      commitment. Members are billed at the start of each month
                      and may cancel anytime prior to the next billing cycle.
                      Once a new month begins, whether or not you use the
                      services, that month is non-refundable.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      The monthly option is available for the first three (3)
                      consecutive months only. After completing three months of
                      service, your subscription will automatically transition
                      into a quarterly plan. This change helps us reduce
                      administrative costs and better support our community
                      long-term.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>
                      You will receive a notice before your plan converts. After
                      that point, quarterly payment terms and policies will
                      apply.
                    </span>
                  </li>
                </ul>

                <p className="font-bold">Refunds at the Company's Discretion</p>
                <p>
                  Refunds are issued solely at the discretion of the Company. In
                  exceptional cases, the Company reserves the right to provide
                  partial refunds on a case-by-case basis. However, the Company
                  is under no obligation to provide refunds outside of the terms
                  outlined above.
                </p>

                <p className="font-bold">Right to Cancel Subscription</p>
                <p>
                  The Company reserves the right to cancel your subscription at
                  any time for any reason, including but not limited to breaches
                  of these Terms and Conditions, non-payment, or misuse of the
                  Services.
                </p>
              </div>
            </div>

            {/* 8. Site Control and Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                8. Site Control and Third-Party Links.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company may, at any time, modify, withdraw, suspend, or
                discontinue any feature of the Site, including its availability.
                The Company provides links to third-party websites for your
                convenience, but the inclusion of such links does not imply
                endorsement by the Company. The Company is not responsible for
                the content, practices, or security of third-party websites. You
                agree that the Company is not liable for any damage caused by
                visiting or using third-party websites.
              </p>
            </div>

            {/* 9. Legal Notices */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                9. Legal Notices.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  The Company does not guarantee the content, accuracy, or
                  validity of any treatment recommendations provided by
                  healthcare providers. The Company merely facilitates access to
                  healthcare professionals and does not establish a
                  doctor-patient relationship. You and your healthcare provider
                  are solely responsible for any information communicated during
                  your consultation. The Company does not guarantee that
                  telehealth consultations are appropriate for your medical
                  condition. You should contact your primary care physician if
                  your symptoms worsen.
                </p>
                <p className="font-bold">Disclaimer of Warranties</p>
                <p>
                  ALL SERVICES PROVIDED THROUGH THIS SITE ARE OFFERED "AS IS"
                  WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO
                  THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY DISCLAIMS ALL
                  WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THAT THE SITE
                  OR SERVICES WILL BE FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL
                  COMPONENTS.
                </p>
                <p className="font-bold">Limitation of Liability</p>
                <p>
                  IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES,
                  INCLUDING LOSS OF PROFITS, LOSS OF USE, OR OTHER ECONOMIC
                  LOSS, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR
                  SERVICES, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES. THE COMPANY'S TOTAL LIABILITY TO
                  YOU SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID FOR SERVICES IN
                  THE ONE (1) MONTH IMMEDIATELY PRIOR TO THE EVENT THAT CAUSED
                  THE CLAIM.
                </p>
              </div>
            </div>

            {/* 10. Indemnification */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                10. Indemnification.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                You agree to indemnify, defend, and hold harmless the Company,
                its affiliates, employees, and agents from and against any and
                all claims, damages, costs, and expenses (including reasonable
                attorneys' fees) arising from or related to your use of the Site
                or Services, your breach of these Terms, or your violation of
                any rights of a third party.
              </p>
            </div>

            {/* 11. Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                11. Dispute Resolution.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Any dispute arising out of or related to these Terms or your use
                of the Site shall be resolved by binding arbitration under the
                rules of the American Arbitration Association. The arbitration
                will take place in San Jose, California, and will be governed by
                California law. The costs of arbitration, including attorneys'
                fees, will be borne by you. Any judgment rendered by the
                arbitrator may be entered in any court of competent
                jurisdiction.
              </p>
            </div>

            {/* 12. Force Majeure */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                12. Force Majeure.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company shall not be liable for delays or failures in
                performance resulting from acts of God, war, terrorism, civil
                unrest, severe weather, government action, or any other
                circumstances beyond the Company's reasonable control.
              </p>
            </div>

            {/* 13. Notices */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                13. Notices.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  The Company may provide notice to you via the email address
                  you provided during registration or through a general notice
                  posted on the Site. You may provide notice to the Company by
                  sending certified mail to: EssentiaCare LLC
                </p>
                <div>
                  <p className="font-bold">123 E San Carlos St</p>
                  <p className="font-bold">San Jose, CA 95112.</p>
                </div>
              </div>
            </div>

            {/* 14. Entire Agreement; Severability */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                14. Entire Agreement; Severability.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                These Terms and the Privacy Policy constitute the entire
                agreement between you and the Company. If any provision of these
                Terms is found to be invalid or unenforceable, that provision
                will be enforced to the maximum extent possible, and the
                remaining provisions will remain in full force and effect.
              </p>
            </div>

            {/* User-Generated Content (UGC) Policy */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                User-Generated Content (UGC) Policy.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  As a health and wellness platform, the Company allows users to
                  create and share User-Generated Content ("UGC") in designated
                  areas of our Site, such as community forums, peer-to-peer
                  support groups, and other interactive spaces.{" "}
                  <span className="font-bold">UGC</span> refers to any content
                  submitted by users, including but not limited to text posts,
                  comments, images, videos, reviews, questions, and any other
                  material provided by users within the Site's community
                  features.
                </p>
                <p>
                  The Company is committed to fostering a supportive and focused
                  environment centered around health and wellness. To maintain
                  this focus, the Company reserves the right, in its sole
                  discretion, to determine what constitutes acceptable UGC on
                  our platform. We do not allow discussions or content related
                  to topics outside the scope of health and wellness, including
                  but not limited to{" "}
                  <span className="font-bold">
                    sports, politics, religion, and other unrelated topics.
                  </span>
                </p>
              </div>
            </div>

            {/* Guidelines for Acceptable UGC */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Guidelines for Acceptable UGC.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                In order to create a positive and health-focused environment,
                users must adhere to the following guidelines when posting UGC:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    UGC should be relevant to health, wellness, mental health,
                    fitness, nutrition, and related topics.
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    Content should not contain offensive language, defamatory
                    statements, or any material that promotes hate, violence, or
                    discrimination.
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    UGC must not include medical advice that conflicts with the
                    Company's professional healthcare providers or promote
                    unverified, non-evidence-based health claims.
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    Users must refrain from posting any sensitive or
                    controversial topics that may detract from the supportive
                    and focused atmosphere of the community.
                  </span>
                </li>
              </ul>
            </div>

            {/* Content Moderation */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Content Moderation.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company reserves the right to review, monitor, edit, and
                remove any UGC that, in our opinion, does not meet these
                guidelines or is otherwise inappropriate for our platform. We
                may remove content at any time and without prior notice to the
                user if we determine it does not align with the health and
                wellness mission of the Company.
              </p>
            </div>

            {/* Termination for Violation of UGC Policy */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Termination for Violation of UGC Policy.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Users who repeatedly violate the UGC guidelines may have their
                accounts suspended or terminated, at the sole discretion of the
                Company. This includes users who persist in posting off-topic
                content or content that undermines the platform's focus on
                health and wellness.
              </p>
            </div>

            {/* DMCA Compliance */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                DMCA Compliance.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                The Company respects the intellectual property rights of others
                and expects users of our Site to do the same. If you believe
                that any material on our Site, including any user-generated
                content in our community or peer-to-peer forums, infringes your
                copyright, please send a written notice to our designated DMCA
                agent. The notice must include:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    Your contact information (name, mailing address, email
                    address, and phone number),
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A description of the copyrighted work you believe has been
                    infringed,
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A description of where the alleged infringing material is
                    located on our Site, including specific URLs if available,
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A statement that you have a good faith belief that the use
                    of the material is unauthorized by the copyright owner, its
                    agent, or the law,
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A statement under penalty of perjury that the information
                    provided is accurate and that you are the copyright owner or
                    authorized to act on behalf of the owner, and
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>Your physical or electronic signature.</span>
                </li>
              </ul>
            </div>

            {/* Please direct DMCA notices to */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Please direct DMCA notices to:
              </h2>
              <div className="space-y-1.5 text-base text-gray-700 leading-relaxed">
                <p className="font-bold">DMCA Agent</p>
                <p className="font-bold">EssentiaCare LLC</p>
                <p>123 E San Carlos St</p>
                <p>San Jose, CA 95112</p>
                <p>
                  <span className="font-bold">Email:</span> <SupportLink />
                </p>
              </div>
            </div>

            {/* Monitoring and Responsibility for User-Generated Content */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Monitoring and Responsibility for User-Generated Content.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company may, from time to time, allow users to post, share,
                and engage with content in community forums or peer-to-peer
                sections of our platform.{" "}
                <span className="font-bold">
                  All user-generated content is subject to review and monitoring
                  by the Company
                </span>{" "}
                to ensure compliance with our Terms of Service, including
                intellectual property rights and other applicable laws. However,
                despite our efforts to monitor and moderate content, we are not
                liable for any infringing content posted by users.
              </p>
            </div>

            {/* Removal of Infringing Content */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Removal of Infringing Content.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Upon receiving a valid DMCA notice, the Company will promptly
                investigate the claim and, if deemed appropriate, remove or
                disable access to the allegedly infringing material. In cases
                where user-generated content is removed under a DMCA notice, the
                Company may notify the user responsible for the content about
                the removal and provide information on how to file a
                counter-notification if they believe the removal was in error.
              </p>
            </div>

            {/* Counter-Notification Procedure */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Counter-Notification Procedure.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                If you believe that content you posted was removed or disabled
                by mistake or misidentification, you may submit a
                counter-notification to our DMCA agent. The counter-notification
                must include:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    Your contact information (name, mailing address, email
                    address, and phone number),
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A description of the content that was removed and the
                    location where it appeared before it was removed or
                    disabled,
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A statement under penalty of perjury that you have a good
                    faith belief that the content was removed or disabled as a
                    result of mistake or misidentification,
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>
                    A statement that you consent to the jurisdiction of the
                    federal district court in which your address is located, or
                    if you are outside of the United States, to the jurisdiction
                    of any judicial district in which the Company may be found,
                    and that you will accept service of process from the person
                    who provided the original DMCA notification or an agent of
                    such person, and
                  </span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700 leading-relaxed">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>Your physical or electronic signature.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-base">
                Upon receipt of a valid counter-notification, the Company may,
                at its discretion, restore the content in question unless the
                original claimant files a court action to prevent the
                restoration.
              </p>
            </div>

            {/* Policy on Repeat Infringers */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Policy on Repeat Infringers.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company maintains a policy that provides for the termination
                of user accounts in appropriate circumstances for those who are
                deemed repeat infringers. A repeat infringer is a user who has
                been the subject of multiple DMCA takedown notifications and,
                upon review, is found to be engaging in repeated copyright
                infringement.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-5">
                Privacy Policy.
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                The Company values your privacy and is committed to protecting
                your personal information. For more details on how we collect,
                use, and protect your data, please refer to our full Privacy
                Policy, available on the Site.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
