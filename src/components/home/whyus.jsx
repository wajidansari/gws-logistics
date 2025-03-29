import { HandCoinsIcon, Package } from "lucide-react";
import { Badge } from "../ui/badge";


export const WhyUsSection = () => {
  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center py-10">
      <div className="absolute inset-0 z-0 w-full bg-[url('/background-2.jpeg')] bg-cover bg-fixed bg-center bg-no-repeat shadow-lg md:h-96" />

      <div className="absolute top-30 m-5 bg-neutral-50 p-5 md:top-1/4 md:max-w-3xl md:p-16 lg:max-w-7xl">
        {/* Top Content */}
        <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <Badge>Why Us</Badge>
            <h1 className="max-w-xl text-3xl font-bold text-black">
              We provide End-to-End Global Logistics Solutions
            </h1>
            <div className="max-w-md text-sm text-gray-600">
              <p>
                We prioritize understanding our customers&apos; needs,
                challenges, and budget requirements to deliver seamless
                logistics solutions that matter to them and their clients.
              </p>
              <p className="mt-3">
                Through strong, lasting partnerships, we ensure reliable,
                customer-focused service—because we care.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Package className="size-6 text-neutral-50" />
                </div>
                <span className="text-lg font-medium">Delivery on Time</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <HandCoinsIcon className="size-6 text-neutral-50" />
                </div>
                <span className="text-lg font-medium">Optimized Cost</span>
              </div>
            </div>
          </div>
          {/* Images  Right*/}
          <div className="relative w-full">
            <div className="md: absolute top-0 right-0 z-0 w-full p-5 pt-0 md:h-full md:w-80">
              <img
                src="/background-2.jpeg"
                alt="Van going fast"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 hidden bg-neutral-50 pt-5 pr-5 lg:left-0 lg:block">
              <img
                src="/63a5a12bed59557597246f6f_about-image-2.jpg"
                alt="Woman with moving boxes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Stats Bottom */}
        <div className="mx-auto mt-72 flex max-w-4xl flex-col items-center justify-between border-t border-b border-gray-300 py-8 md:mt-16 md:flex-row md:py-0">
          <div className="mb-8 flex w-full flex-col items-center space-y-4 text-center md:mb-0 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
            <span className="text-6xl font-bold text-gray-800">81294</span>
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-secondary mb-2 h-2 w-8"></div>
              <span className="text-lg text-gray-600">Delivered Packages</span>
            </div>
          </div>

          <div className="mx-8 hidden h-20 border-l border-gray-300 md:block"></div>

          <div className="flex w-full flex-col items-center space-y-4 text-center md:w-auto md:flex-row md:space-y-0 md:space-x-4">
            <span className="text-6xl font-bold text-gray-800">13594</span>
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-secondary mb-2 h-2 w-8"></div>
              <span className="text-lg text-gray-600">Satisfied Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};