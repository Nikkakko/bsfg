import { SiteLogo } from ".";
import { Shell } from "@/components/ui/shell";
import { Separator } from "./ui/separator";
import Image from "next/image";
import LegalLogos from "./legal-logos";
import { footerData, paymentMethods } from "@/config/data";
import { FooterLink } from "@/types/global";

export default function SiteFooter() {
  return (
    <footer className="bg-darkBackground text-white border-t-2 border-border">
      <Shell className="px-[25px] pt-[15px] pb-2.5 lg:pt-[35px]  lg:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Promotional Text */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 ">
            <SiteLogo />
            <p className="text-gray text-sm leading-relaxed">
              {footerData.promoText.description}
            </p>
            <Separator className="lg:hidden" />
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-10">
            {Object.entries(footerData.footerLinks).map(([key, section]) => (
              <div key={key}>
                {section.title !== "Ads" && (
                  <h4 className="font-bold mb-4 text-base leading-[18px] text-white">
                    {section.title}
                  </h4>
                )}
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link: FooterLink) => (
                    <li key={link.name} className="flex items-center gap-2">
                      {link.image && (
                        <Image
                          src={link.image}
                          alt={link.name}
                          width={130}
                          height={75}
                          className="w-full h-full max-w-[130px] max-h-[75px] object-cover rounded-md lg:hidden"
                        />
                      )}
                      <a
                        href={link.href}
                        className="text-gray hover:text-white text-sm transition-colors duration-200"
                      >
                        {!link.image && link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-separator pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {paymentMethods.map(method => (
              <div
                key={method.name}
                className="flex items-center justify-center w-12 h-8 bg-darkBackground rounded text-xs font-bold text-white"
                title={method.name}
              >
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={67.5}
                  height={45}
                  className="w-full h-full max-w-[67.5px] max-h-[45px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-separator pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray text-sm">
                {new Date().getFullYear()}{" "}
                <span className="font-bold text-white">CASINO.COM</span> All
                Rights Reserved.
              </p>
            </div>

            <LegalLogos />
          </div>

          {/* Responsible Gaming Notice */}
          <div className="mt-6 text-center flex flex-col gap-5">
            <p className="text-gray text-xs leading-relaxed font-bold">
              {footerData.responsibleGamingNotice.title}
            </p>
            <p className="text-gray text-xs leading-relaxed">
              {footerData.responsibleGamingNotice.description}
            </p>
          </div>
        </div>
      </Shell>
    </footer>
  );
}
