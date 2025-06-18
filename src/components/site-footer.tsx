import { SiteLogo } from ".";
import { Shell } from "@/components/ui/shell";
import { Shield, Award } from "lucide-react";

/* export default function SiteFooter() {
  return (
    <footer className="bg-secondaryBackground">
      <Shell as="div">
        <div className="flex items-center justify-between px-2.5 py-3.5 lg:px-0">
          <SiteLogo />
        </div>
      </Shell>
    </footer>
  );
}
 */

const footerData = {
  promoText: {
    title: "Strike it rich at CASINO!",
    description:
      "Experience heart-pounding action with massive jackpots, fast payouts, and VIP treatment that keeps champions coming back. Join thousands of winners today - your fortune awaits!",
  },
  footerLinks: {
    games: {
      title: "Games",
      links: [
        { name: "Slots", href: "/slots" },
        { name: "Live Dealers", href: "/live-dealers" },
        { name: "Table Games", href: "/table-games" },
        { name: "Video Poker", href: "/video-poker" },
        { name: "Crash", href: "/crash" },
      ],
    },
    promotions: {
      title: "Promotions",
      links: [
        { name: "Welcome Bonus", href: "/welcome-bonus" },
        { name: "Cash Back Deals", href: "/cashback" },
        { name: "Weekly Cashback", href: "/weekly-cashback" },
        { name: "Tournaments", href: "/tournaments" },
        { name: "VIP Club", href: "/vip" },
      ],
    },
    banking: {
      title: "Banking",
      links: [
        { name: "Deposit Options", href: "/deposit" },
        { name: "Withdraw Options", href: "/withdraw" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "Payment Security", href: "/payment-security" },
        { name: "AML Policy", href: "/aml-policy" },
      ],
    },
    casino: {
      title: "Casino",
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Bonus Terms", href: "/bonus-terms" },
        { name: "Affiliate Program", href: "/affiliate" },
        { name: "About CASINO", href: "/about" },
      ],
    },
    customerCare: {
      title: "Customer Care",
      links: [
        { name: "Live Chat", href: "/live-chat" },
        { name: "Phone Support", href: "/phone-support" },
        { name: "Email Support", href: "/email-support" },
        { name: "Help Desk", href: "/help" },
        { name: "Responsible Gaming", href: "/responsible-gaming" },
      ],
    },
  },
};

const paymentMethods = [
  { name: "Bitcoin", icon: "₿" },
  { name: "Ethereum", icon: "♦" },
  { name: "Litecoin", icon: "Ł" },
  { name: "Bitcoin Cash", icon: "₿" },
  { name: "Dogecoin", icon: "Ð" },
  { name: "Tether", icon: "₮" },
  { name: "Visa", icon: "VISA" },
  { name: "Mastercard", icon: "MC" },
  { name: "American Express", icon: "AMEX" },
  { name: "Discover", icon: "DISC" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-secondaryBackground text-white border-t-2 border-border">
      <Shell className="px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Promotional Text */}
          <div className="lg:col-span-2">
            <SiteLogo />
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerData.promoText.description}
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(footerData.footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {paymentMethods.map(method => (
              <div
                key={method.name}
                className="flex items-center justify-center w-12 h-8 bg-gray-700 rounded text-xs font-bold text-white"
                title={method.name}
              >
                {method.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 <span className="font-semibold">CASINO.COM</span> All
                Rights Reserved.
              </p>
            </div>

            {/* Certification Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
                <Shield className="w-4 h-4" />
                <span className="text-xs">SSL</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
                <Award className="w-4 h-4" />
                <span className="text-xs">Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
                <span className="text-xs font-bold">18+</span>
              </div>
            </div>
          </div>

          {/* Responsible Gaming Notice */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong>GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY.</strong>
              <br />
              Gambling can be harmful if not controlled and may lead to
              addiction! If you or someone you know has a gambling problem and
              wants help, please visit{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                BeGambleAware.org
              </a>{" "}
              or call the National Problem Gambling Helpline at 1-800-522-4700.
              We are committed to integrity and ethical practices in all the use
              of our business. We strongly advocate security measures, including
              SSL encryption and robust fraud systems, to protect your personal
              and financial information. As such, it is important that you read
              and understand our privacy policy. We also provide tools and
              resources to help you gamble responsibly. We offer a variety of
              secure payment methods and a world-class customer support team
              that is available 24/7 to assist you with any questions or
              concerns you may have. Contact us via live chat, email, or phone
              for prompt and professional assistance.
            </p>
          </div>
        </div>
      </Shell>
    </footer>
  );
}
