import { Badge } from "../ui/badge";
import { Button } from "../ui/button";


export const HeroSection = () => {
  return (
    <section className="relative flex min-h-dvh w-full items-end md:items-center">
      <div className=" absolute inset-0 z-0">
        <img
          src="/home-truck.jpeg"
          alt="Logistics fleet"
          className="h-full w-full object-cover object-center brightness-[0.8] md:object-right"
        />
        {/* Responsive gradient overlay - bottom-to-top on mobile, side gradient on larger screens */}

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/82 to-transparent brightness-[0.6] md:bg-gradient-to-r md:from-black via-black/65  md:to-transparent"></div>
      </div>

      <div className="z-20 mb-24 h-full w-full px-6 text-white md:mb-0 md:pl-20">
        <div className="flex max-w-4xl flex-col items-start space-y-4 md:space-y-5">
          <Badge>Logistics Solutions</Badge>
          <h1 className="text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
            Need fast freight shipping? <br className="hidden sm:block" />
            We&apos;re your shipping partner.
          </h1>
          <p className="max-w-lg text-base md:text-xl">
            From truckload to ocean drayage, we get your freight delivered on
            time—every time.
          </p>
          <Button >
            Get a Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};