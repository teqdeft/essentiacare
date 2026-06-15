import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { getPageSEO } from "@/lib/wordpress";
export async function generateMetadata() {
  return getPageSEO("privacy-policy");
}

const dataCategories = [
  {
    letter: "A",
    category: "Identifiers.",
    examples:
      "A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.",
    collected: "YES",
  },
  {
    letter: "B",
    category:
      "Personal information categories listed in the California Customer Records statute (Cal. Civ. Code Â§ 1798.80(e)).",
    examples:
      "A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.",
    collected: "YES",
  },
  {
    letter: "C",
    category:
      "Protected classification characteristics under California or federal law.",
    examples:
      "Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).",
    collected: "YES",
  },
  {
    letter: "D",
    category: "Commercial information.",
    examples:
      "Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.",
    collected: "YES",
  },
  {
    letter: "E",
    category: "Biometric information.",
    examples:
      "Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.",
    collected: "YES",
  },
  {
    letter: "F",
    category: "Internet or other similar network activity.",
    examples:
      "Browsing history, search history, information on a consumer's interaction with a website, application, or advertisement.",
    collected: "YES",
  },
  {
    letter: "G",
    category: "Geolocation data.",
    examples: "Physical location or movements.",
    collected: "YES",
  },
  {
    letter: "H",
    category: "Sensory data.",
    examples:
      "Audio, electronic, visual, thermal, olfactory, or similar information.",
    collected: "YES",
  },
  {
    letter: "I",
    category: "Professional or employment-related information.",
    examples: "Current or past job history or performance evaluations.",
    collected: "NO",
  },
  {
    letter: "J",
    category:
      "Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).",
    examples:
      "Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.",
    collected: "NO",
  },
  {
    letter: "K",
    category: "Inferences drawn from other personal information.",
    examples:
      "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.",
    collected: "NO",
  },
];

const personalInfoExclusions = [
  "Publicly available information from government records.",
  "De-identified or aggregated consumer information.",
  "Information excluded from the CCPA's and CPRA's scope, like:",
];

const exclusionDetails = [
  "health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;",
  "personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.",
];

const useOfInfo = [
  "To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to request a price quote or ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery. We may also save your information to facilitate new product orders or process returns.",
  "To provide, support, personalize, and develop our Website, products, and services.",
  "To create, maintain, customize, and secure your account with us.",
  "To process your requests, purchases, transactions, and payments and prevent transactional fraud.",
  "To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.",
  "To personalize your Website experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Website, third-party sites, and via email or text message (with your consent, where required by law).",
  "To help maintain the safety, security, and integrity of our Website, products and services, databases and other technology assets, and business.",
  "For testing, research, analysis, and product development, including to develop and improve our Website, products, and services.",
  "To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.",
  "As described to you when collecting your personal information or as otherwise set forth in the CCPA and CPRA.",
  "To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of EssentiaCare's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by EssentiaCare about our Website users is among the assets transferred.",
];

const businessCategories = [
  "[Category A: Identifiers.]",
  "[Category B: California Customer Records personal information categories.]",
  "[Category C: Protected classification characteristics under California or federal law..]",
  "[Category D: Commercial information.]",
  "[Category E: Biometric information.]",
  "[Category F: Internet or other similar network activity.]",
  "[Category G: Geolocation data.]",
  "[Category H: Sensory data.]",
];

const accessRights = [
  "The categories of personal information we collected about you.",
  "The categories of sources for the personal information we collected about you.",
  "Our business or commercial purpose for collecting or selling that personal information.",
  "The categories of third parties with whom we share that personal information.",
  "The specific pieces of personal information we collected about you (also called a data portability request).",
  "If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:",
  "sales, identifying the personal information categories that each category of recipient purchased; and",
  "disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.",
];

const deletionExceptions = [
  "Complete the transaction for which we collected the personal information, provide a good or service that you or your benefit provider(s) have requested, take actions reasonably anticipated within the context of our ongoing business relationship with you or your benefit provider(s), or otherwise perform our contract with you or your benefit provider(s).",
  "Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.",
  "Debug products to identify and repair errors that impair existing intended functionality.",
  "Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.",
  "Comply with the California Electronic Communications Privacy Act (Cal. Penal Code Â§ 1546 et. seq.).",
  "Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.",
  "Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us or that of the benefit provider(s).",
  "Comply with a legal obligation.",
  "Make other internal and lawful uses of that information that are compatible with the context in which you provided it.",
];

const verifiableRequestMethods = [
  {
    text: "Submitting a request via our Privacy Center at privacy.essentiacare.ai",
  },
  { text: "Calling us at 833-237-5455; or" },
  { text: "Writing us at 123 E San Carlos St San Jose, CA 95112" },
];

const requestRequirements = [
  "Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.",
  "Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.",
];

const hipaaRights = [
  "You have the right to ask for restrictions on the ways we use and disclose your health information for treatment, payment, and healthcare operations. You may also request that we limit our disclosures to persons assisting your care. We will consider your request, but are not required to accept it.",
  "You have the right to request that you receive communications containing your protected health information from us by alternative means or at alternative locations. For example, you may ask that we only contact you at home or by mail.",
  "Except under certain circumstances, you have the right to inspect and copy medical, billing and other records used to make decisions about you. If you ask for copies of this information, we may charge you a nominal fee for copying, packaging, and postage.",
  "If you believe that information in your records is incorrect, or incomplete, you have the right to ask us to correct the existing information, or add missing information. Under certain circumstances, we may deny your request, such as when the information is accurate and complete.",
  "You have a right to receive a list of certain instances when we have used or disclosed your medical information. If you ask for this information from us more than once every twelve months, charges may apply, to cover our costs for administration, archive retrieval, copying, packaging, and postage.",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden h-[280px] md:h-[320px]"
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
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding py-16 md:py-20 bg-white">
          <div className="container-main max-w-5xl">
            {/* EssentiaCare Privacy Policy */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                EssentiaCare Privacy Policy.
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                <p>
                  EssentiaCare, Inc., as well as our vendors, partners,
                  consultants, and affiliates respect the privacy of its members
                  and users of web site. Our policy regarding privacy
                  information that is collected and how that data is used is
                  outlined below.
                </p>
                <p>
                  EssentiaCare has developed all the system technologies,
                  including the interfaces to the technology systems provided by
                  third party providers. EssentiaCare, Inc. manages the
                  data security for this site. All data is stored in encrypted
                  format that meets standards defined by HIPAA (Health Insurance
                  Portability and Accountability Act). All data transfer is
                  executed using similar standards that meet or exceed HIPAA,
                  and no data is transferred to users that do not have specific
                  data access keys.
                </p>
                <p>
                  The importance of security for all personal information
                  associated with you, your family, and that which you share
                  with your primary care physician (PCP), is of extreme concern
                  to us. At EssentiaCare, we put into practice state of
                  the art care in providing secure transmission of your
                  information from your personal computer to our servers.
                  Personal information collected by our web site is stored in
                  secure operations environments that are not available to the
                  public; and firewalled. Only those employees who require
                  access to your information in order to do their jobs are
                  allowed access, and each have signed a confidentiality
                  agreement that is on-file. Any employee who violates our
                  privacy or security policies is subject to disciplinary
                  action, up to, and including, termination and civil and/or
                  criminal prosecution.
                </p>
                <p>
                  Any information that you submit to us via our Website -
                  whether a survey, registration form, personal history form, or
                  e-mail will be used exclusively by the consulting physicians
                  and only for the specific reason for which they were
                  submitted.
                </p>
                <p>
                  We take every reasonable precaution to protect your personal
                  information including encryption and passwords.
                </p>
                <p>
                  EssentiaCare is the sole owner of the information
                  collected on this site. We will not sell, share or lease this
                  information to others. EssentiaCare does not sell
                  customer lists, e-mail addresses, cookies or other data.
                </p>
                <p>
                  Cookies are data stored on the user's hard drive containing
                  information about the user's browsing history. Usage of a
                  cookie is not linked to any personally identifiable
                  information while visiting the essentiacare.ai website.
                  Once users close their browser, cookies simply terminate.
                  EssentiaCare software never uses cookies to retrieve
                  information from your computer that was not already originally
                  sent in a cookie. Except as described in this Policy, we do
                  not use information transferred through cookies for any
                  promotional or marketing purposes, nor is that information
                  shared with any third parties whatsoever.
                </p>
              </div>
            </div>

            {/* Acceptance */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                Acceptance.
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                <p>
                  By using this site and the EssentiaCare service, you
                  signify your acceptance of this Privacy Policy, as stated. If
                  you do not agree to this policy, you should not continue, and
                  you should not use our service. Should we make any changes to
                  the EssentiaCare Privacy Policy, we will post these
                  changes prominently so users are always aware of what
                  information we collect, how we use it, and under what
                  circumstances, if any, we disclose it. We recommend that you
                  read this Privacy Policy each time you use our Website in case
                  you missed our notice of changes to the Privacy Policy. Your
                  continued use of the services and site following the posting
                  of changes to these terms will mean you accept those changes.
                </p>
                <p>
                  EssentiaCare welcomes your questions and comments about
                  privacy, in general, and our privacy policy, specifically. If
                  you have any questions about our policies or our site, please
                  Contact Us.
                </p>
              </div>
            </div>

            {/* Notice of HIPAA Privacy Practices */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                Notice of HIPAA Privacy Practices.
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                <p>
                  THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
                  USED, AND DISCLOSED, AND HOW YOU CAN GET ACCESS TO THIS
                  INFORMATION. PLEASE REVIEW IT CAREFULLY AND REPORT ANY ISSUES,
                  OR CONCERNS, TO: EssentiaCare HIPAA COMPLIANCE
                  DEPARTMENT, 123 E San Carlos St San Jose, CA 95112; PHONE.
                  833-237-5455.
                </p>
                <p>
                  The Health Insurance Portability & Accountability Act of 1996
                  (HIPAA) is a federal program requiring that all medical
                  records and other individually identifiable health information
                  used, or disclosed, by us in any form, whether electronically,
                  on paper, or orally, are kept properly confidential. This Act
                  gives you, the Patient, significant new rights to understand
                  and control how your health information is used. HIPAA
                  provides penalties for covered entities that misuse personal
                  health information.
                </p>
                <p>
                  We have prepared this "Notice of HIPAA Privacy Practices" to
                  explain how we are required to maintain the privacy of your
                  health information and how we may use and disclose your health
                  information.
                </p>
                <p>
                  We may use and disclose your medical records for each of the
                  following purposes: treatment, payment, and health care
                  operations:
                </p>
                <p>
                  TREATMENT means providing, coordinating, or managing health
                  care and related services by one or more health care
                  providers.
                </p>
                <p>
                  PAYMENT means such activities as obtaining payment or
                  reimbursement for services, billing or collection activities
                  and utilization review. HEALTHCARE OPERATIONS include managing
                  your Electronic Medical Record to facilitate diagnostic
                  medical consultations with associated physicians, as well as
                  conducting quality assessment review and service improvement
                  planning activities, auditing functions, cost-containment
                  analysis, and customer service.
                </p>
                <p>
                  We may also create and distribute de-identified health
                  information by removing all references to individually
                  identifiable information.
                </p>
                <p>
                  We may contact you to provide information about our services
                  or other health-related services that may be of interest to
                  you.
                </p>
                <p>
                  Any other uses and disclosures will be made only with your
                  written authorization. You may revoke such authorization in
                  writing and we are required to honor and abide by that written
                  request, except to the extent that we have already taken
                  actions relying on your authorization.
                </p>
                <p>
                  You have the following rights with respect to your protected
                  health information, which you can exercise by presenting a
                  written request to the EssentiaCare HIPAA Compliance
                  Department at 123 E San Carlos St San Jose, CA 95112; PHONE.
                  833-237-5455:
                </p>

                <ul className="space-y-3 mt-4">
                  {hipaaRights.map((right, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Privacy Notice for California Residents */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block border-b-2 border-primary pb-2 mb-6">
                Privacy Notice for California Residents.
              </h2>

              <div className="space-y-3 text-gray-700 leading-relaxed text-base mb-6">
                <p>
                  <span className="font-bold">Effective Date:</span> 1/1/2019
                </p>
                <p>
                  <span className="font-bold">Last Updated:</span> 1/1/2023
                </p>
                <p>
                  This{" "}
                  <span className="font-bold">
                    Privacy Notice for California
                  </span>{" "}
                  Residents section applies solely to all visitors, users, and
                  others who reside in the State of California ("consumers" or
                  "you").
                </p>
              </div>

              {/* Information We Collect */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                Our Website collects information that identifies, relates to,
                describes, references, is capable of being associated with, or
                could reasonably be linked, directly or indirectly, with a
                particular consumer or device ("personal information"). In
                particular, EssentiaCare ("Company" or "The Company") and
                EssentiaCare's portals located at https://portal.essentiacare.ai ("Website"), have collected the following
                categories of personal information from its consumers within the
                last twelve (12) months:
              </p>

              {/* Data Categories Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-[13px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-bold text-gray-900 border-b border-gray-200 align-top">
                        Category
                      </th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b border-gray-200 align-top">
                        Examples
                      </th>
                      <th className="text-left p-4 font-bold text-gray-900 border-b border-gray-200 align-top w-24">
                        Collected
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCategories.map((row, i) => (
                      <tr
                        key={row.letter}
                        className={cn(
                          i !== dataCategories.length - 1 &&
                            "border-b border-gray-100",
                        )}
                      >
                        <td className="p-4 text-gray-700 align-top">
                          <span className="font-bold">{row.letter}.</span>{" "}
                          {row.category}
                        </td>
                        <td className="p-4 text-gray-700 align-top">
                          {row.examples}
                        </td>
                        <td className="p-4 text-gray-700 align-top">
                          [{row.collected}]
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Personal Info Exclusions */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Personal information does not include:
              </h3>
              <ul className="space-y-3 mb-6">
                {personalInfoExclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ol className="space-y-3 mb-6 ml-9 list-decimal text-base text-gray-700 leading-relaxed marker:text-gray-500">
                {exclusionDetails.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ol>

              <div className="space-y-4 text-gray-700 leading-relaxed text-base mb-6">
                <p>
                  EssentiaCare obtains the categories of personal
                  information listed above from the following categories of
                  sources:
                </p>
                <p className="ml-4">
                  Directly from you. For example, from forms you complete or
                  products and services you purchase.
                </p>
                <p className="ml-4">
                  Indirectly from you. For example, from observing your actions
                  on our Website.
                </p>
              </div>

              {/* Use of Personal Information */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Use of Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                We may use, or disclose the personal information we collect for
                one or more of the following business purposes:
              </p>
              <ul className="space-y-3 mb-6">
                {useOfInfo.map((use, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                EssentiaCare will not collect additional categories of
                personal information or use the personal information we
                collected for materially different, unrelated, or incompatible
                purposes without providing you notice.
              </p>

              {/* Sharing Personal Information */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Sharing Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                EssentiaCare may disclose your personal information to a
                third party for a business purpose. When we disclose personal
                information for a business purpose, we enter a contract that
                describes the purpose and requires the recipient to both keep
                that personal information confidential and not use it for any
                purpose except performing the contract.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-3">
                We share your personal information with the following categories
                of third parties:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 items-start text-base text-gray-700">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>Service providers.</span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>Data aggregators.</span>
                </li>
              </ul>

              <p className="italic text-gray-700 leading-relaxed text-base mb-3">
                Disclosures of Personal Information for a Business Purpose
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                In the preceding twelve (12) months, Company has disclosed the
                following categories of personal information for a business
                purpose:
              </p>
              <div className="space-y-2 mb-6">
                {businessCategories.map((cat, i) => (
                  <p key={i} className="text-base text-gray-700">
                    {cat}
                  </p>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-base mb-3">
                We disclose your personal information for a business purpose to
                the following categories of third parties:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 items-start text-base text-gray-700">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>Service providers.</span>
                </li>
                <li className="flex gap-3 items-start text-base text-gray-700">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span>Data aggregators.</span>
                </li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Sales of Personal Information
              </h4>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                Company does not sell personal information. In the preceding
                twelve (12) months, Company has not sold personal information.
              </p>

              {/* Your Rights and Choices */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Your Rights and Choices.
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                The CCPA and CPRA provide consumers (California residents) with
                specific rights regarding their personal information. This
                section describes your CCPA and CPRA rights, and explains how to
                exercise those rights.
              </p>

              <p className="italic text-gray-700 leading-relaxed text-base mb-3">
                Access to Specific Information and Data Portability Rights
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                You have the right to request that EssentiaCare disclose
                certain information to you about our collection and use of your
                personal information over the past 12 months. Once we receive
                and confirm your verifiable consumer request (see Exercising
                Access, Data Portability, and Deletion Rights), we will disclose
                to you:
              </p>
              <ul className="space-y-3 mb-6">
                {accessRights.map((right, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>

              {/* Deletion Request Rights */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Deletion Request Rights.
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                You have the right to request that EssentiaCare delete any
                of your personal information that we collected from you and
                retained, subject to certain exceptions. Once we receive and
                confirm your verifiable consumer request (see Exercising Access,
                Data Portability, and Deletion Rights), we will delete (and
                direct our service providers to delete) your personal
                information from our records, unless an exception applies.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                We may deny your deletion request if retaining the information
                is necessary for us or our service provider(s) to:
              </p>
              <ol className="space-y-3 mb-6 ml-6 list-decimal text-base text-gray-700 leading-relaxed marker:text-gray-500 marker:font-semibold">
                {deletionExceptions.map((exception, i) => (
                  <li key={i} className="pl-2">
                    {exception}
                  </li>
                ))}
              </ol>

              {/* Right to Correct */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Right to Correct.
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                You have the right to request that EssentiaCare corrects
                inaccurate personal information
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Right to Limit Use and Disclosure
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                You have the right to request that EssentiaCare limits the
                use and disclosure of sensitive personal information.
              </p>

              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Exercising Access, Data Portability, Deletion, Correction, and
                Limit Use and Disclosure Rights
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                To exercise the access, data portability, deletion, correction,
                and limit use and disclosure rights described above, please
                submit a verifiable consumer request to us by either:
              </p>
              <ul className="space-y-3 mb-6">
                {verifiableRequestMethods.map((method, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{method.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Only you, or a person registered with the California Secretary
                of State that you authorize to act on your behalf, may make a
                verifiable consumer request related to your personal
                information. You may also make a verifiable consumer request on
                behalf of your minor child.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                You may only make a verifiable consumer request for access or
                data portability twice within a 12-month period. The verifiable
                consumer request must:
              </p>
              <ul className="space-y-3 mb-6">
                {requestRequirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-base text-gray-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-gray-700 leading-relaxed text-base mb-6">
                <p>
                  We cannot respond to your request or provide you with personal
                  information if we cannot verify your identity or authority to
                  make the request and confirm the personal information relates
                  to you.
                </p>
                <p>
                  Making a verifiable consumer request does not require you to
                  create an account with us. However, we do consider requests
                  made through your password protected account sufficiently
                  verified when the request relates to personal information
                  associated with that specific account.
                </p>
                <p>
                  We will only use personal information provided in a verifiable
                  consumer request to verify the requestor's identity or
                  authority to make the request.
                </p>
                <p>Response Timing and Format</p>
                <p>
                  We endeavor to respond to a verifiable consumer request within
                  forty-five (45) days of its receipt. If we require more time
                  (up to 90 days), we will inform you of the reason and
                  extension period in writing.
                </p>
                <p>
                  If you have an account with us, we will deliver our written
                  response to that account. If you do not have an account with
                  us, we will deliver our written response by mail or
                  electronically, at your option.
                </p>
                <p>
                  Any disclosures we provide will only cover the 12-month period
                  preceding the verifiable consumer request's receipt. The
                  response we provide will also explain the reasons we cannot
                  comply with a request, if applicable. For data portability
                  requests, we will select a format to provide your personal
                  information that is readily usable and should allow you to
                  transmit the information from one entity to another entity
                  without hindrance.
                </p>
                <p>
                  We do not charge a fee to process or respond to your
                  verifiable consumer request unless it is excessive,
                  repetitive, or manifestly unfounded. If we determine that the
                  request warrants a fee, we will tell you why we made that
                  decision and provide you with a cost estimate before
                  completing your request.
                </p>
              </div>

              {/* Changes to Privacy Notice */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Changes to Our Privacy Notice.
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                EssentiaCare reserves the right to amend this privacy
                notice at our discretion and at any time. When we make changes
                to this privacy notice, we will post the updated notice on the
                Website and update the notice's effective date.{" "}
                <span className="font-bold">
                  Your continued use of our Website following the posting of
                  changes constitutes your acceptance of such changes.
                </span>
              </p>

              {/* Contact Information */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-10">
                Contact Information.
              </h3>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                If you have any questions or comments about this notice, the
                ways in which EssentiaCare collects and uses your
                information described above, your choices and rights regarding
                such use, or wish to exercise your rights under California law,
                please do not hesitate to contact us at:
              </p>

              <div className="space-y-2 text-base text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold">Phone:</span> 833-237-5455
                </p>
                <p>
                  <span className="font-bold">Website:</span>{" "}
                  <a
                    href="https://essentiacare.ai"
                    className="text-primary hover:underline"
                  >
                    https://essentiacare.ai
                  </a>
                </p>
                <p>
                  <span className="font-bold">Postal Address:</span>
                </p>
                <p>EssentiaCare</p>
                <p>Attn: Compliance - Privacy Officer</p>
                <p>123 E San Carlos St San Jose, CA 95112</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
