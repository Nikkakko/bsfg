import { Button } from "@/components/ui/button";
import Image from "next/image";

const PAYMENT_METHODS = [
  {
    id: "1",
    name: "VISA",
    icon: "/images/payment/visa.png",
  },
  {
    id: "2",
    name: "Mastercard",
    icon: "/images/payment/mastercard.png",
  },
  {
    id: "3",
    name: "Apple Pay",
    icon: "/images/payment/apay.png",
  },
  {
    id: "4",
    name: "Google Pay",
    icon: "/images/payment/gpay.png",
  },
  {
    id: "5",
    name: "Neteller",
    icon: "/images/payment/net.png",
  },
  {
    id: "6",
    name: "Skrill",
    icon: "/images/payment/skril.png",
  },
  {
    id: "7",
    name: "Revolut",
    icon: "/images/payment/rev.png",
  },
];

export default function PaymentMethods() {
  return (
    <div className="bg-darkBackground  text-white p-6 rounded-lg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="text-lg font-bold text-center lg:text-start ">
            You don&apos;t have Crypto?
            <br />
            No problem.
          </div>

          <div className=" flex flex-wrap  items-center gap-2 justify-center">
            {PAYMENT_METHODS.map(method => (
              <div key={method.id}>
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={80}
                  height={55}
                  quality={100}
                  className="w-auto h-auto hover:scale-105 transition-all duration-300 "
                />
              </div>
            ))}
          </div>
        </div>

        <Button className="bg-blue font-semibold text-sm text-white px-14 py-2 rounded-md hover:bg-blue-600 ">
          BUY NOW
        </Button>
      </div>
    </div>
  );
}
