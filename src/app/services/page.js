/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  return (
    <div>
      <section className="lg:min-h-dvh">
        <div className="mx-auto flex max-w-6xl flex-col justify-center gap-5 px-4 md:flex-row-reverse md:items-start md:pt-28">
          {/* Left */}
          <div className="relative h-96 w-full md:max-w-1/2">
            {/* Truck Image - Large and covering most of the screen */}
            <div className="absolute inset-0 aspect-square h-full w-full">
              <img
                src="/about-truck.jpeg"
                alt="truck"
                className="h-full w-full object-contain object-left"
              />
            </div>

            {/* Delivery Person Image - Positioned in the bottom right */}
            <div className="absolute -bottom-16 aspect-square w-1/2">
              <img
                src="/delivery_guy.jpg"
                alt="Delivery person"
                className="h-auto w-full bg-neutral-100 p-4"
              />
            </div>
          </div>
          {/* Right */}
          <div className="mt-16 ml-0 w-full text-black md:mt-0 md:ml-10 md:max-w-1/2">
            <div className="my-4">
              <Badge>Services</Badge>
            </div>
            <h2 className="mb-4 text-4xl font-bold">Our Expertise</h2>
            <p className="mb-8 pr-2 text-justify text-lg leading-relaxed">
              As a trusted leader in logistics, we specialize in end-to-end
              supply chain solutions tailored to your business needs. With a
              robust transportation network, advanced technology, and deep
              industry expertise, we streamline freight management, warehousing,
              and last-mile delivery. Whether it’s domestic or international
              shipping, customs clearance, or real-time tracking, our team
              ensures efficient, cost-effective, and timely
              transportation—helping you stay ahead in a fast-moving global
              market.
            </p>
            <Button>
              <Link href="contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-fit pt-10">
          <Badge>What We Do</Badge>
        </div>
        <h2 className="py-5 text-center text-4xl font-bold text-black">
          Our Logistics Services
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={52}
        height={56}
        viewBox="0 0 52 56"
        fill="none"
      >
        <path
          d="M25.6602 7.16494V1"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50.3195 35.9345C46.5692 49.035 29.2046 53.6073 26.1221 54.3265C25.8187 54.4037 25.5008 54.4037 25.1974 54.3265C22.1149 53.6073 4.75034 49.035 1 35.9345V27.1494C0.999964 26.7167 1.13652 26.295 1.39021 25.9445C1.64389 25.594 2.00176 25.3324 2.4128 25.1972L25.0176 17.6452C25.436 17.5164 25.8835 17.5164 26.3019 17.6452L48.9067 25.1972C49.3178 25.3324 49.6756 25.594 49.9293 25.9445C50.183 26.295 50.3195 26.7167 50.3195 27.1494V35.9345Z"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.1271 47.6652C23.6883 47.1036 9.94964 43.5341 6.98242 33.3066"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.98242 9.98273V23.1361L25.5288 16.5551L44.0752 23.1361V9.98273C44.0752 8.32587 42.7321 6.98273 41.0752 6.98273H9.98242C8.32557 6.98273 6.98242 8.32587 6.98242 9.98273Z"
          fill="#971934"
          stroke="#1C1F35"
          strokeWidth={2}
        />
        <path
          d="M25.6602 37.9898V17.5427"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.9141 36.8963L30.9141 28.5205"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7695 17.7516V11.7689"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.8613 20.1447V9.37579"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Sea Transport Services",
    description:
      "Wherever your cargo is going, we can arrange the shipment for you and remain competitive with the business market.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={57}
        height={46}
        viewBox="0 0 57 46"
        fill="none"
      >
        <path
          d="M2.04785 45H54.4288"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.4285 45V2.91304C32.4285 2.40567 32.2235 1.91908 31.8587 1.56032C31.4938 1.20155 30.9989 1 30.4829 1H7.13601C6.62001 1 6.12514 1.20155 5.76028 1.56032C5.39541 1.91908 5.19043 2.40567 5.19043 2.91304V45"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.4287 13.5714H48.2859C49.9427 13.5714 51.2859 14.9146 51.2859 16.5714V43.9524H32.4287V13.5714Z"
          fill="#971934"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5713 10.4286H20.9046"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 40.8095L0.999999 26.1428"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55.4766 30.3333L55.4766 15.6667"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.5713 9.38095L42.9046 9.38095"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.7139 26.1429H24.0472"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5713 35.5714H20.9046"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.7617 35.5714H43.9522"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.7617 26.1429H43.9522"
          stroke="#141414"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Warehousing Services",
    description:
      "We have buildings that can provide you with distribution, storage, inventory management, order fulfilment services.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={76}
        height={66}
        viewBox="0 0 76 66"
        fill="none"
      >
        <path
          d="M17.3047 55.4348H53.1743"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.333 40.4762L49.855 31.1313"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.69531 37.8881L15.7105 43.9033"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 35.7143L7.01521 41.7295"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7687 35.4431L25.2262 44.5152C26.4873 45.7263 28.0962 46.488 29.8137 46.6871C31.5313 46.8862 33.2657 46.5121 34.759 45.6203L72.7396 23.0042L68.0735 17.1446C66.8598 15.6259 65.1558 14.602 63.2695 14.2579C61.3832 13.9138 59.439 14.2723 57.7882 15.2684L46.6499 21.9762L31.5981 16.8362L27.4589 18.6609C27.1492 18.7968 26.8779 19.0105 26.6701 19.2821C26.4622 19.5537 26.3244 19.8746 26.2694 20.2151C26.2144 20.5556 26.244 20.9049 26.3554 21.2306C26.4669 21.5564 26.6565 21.8481 26.907 22.079L34.6085 29.1722L27.5843 33.2842L20.5602 30.2002L16.3457 32.0506C16.0391 32.1856 15.7701 32.3967 15.5632 32.6649C15.3563 32.9332 15.2179 33.25 15.1606 33.5868C15.1034 33.9236 15.129 34.2697 15.2351 34.5938C15.3413 34.918 15.5247 35.2098 15.7687 35.4431V35.4431Z"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68.9352 18.4782C62.9052 23.2142 56.9528 23.8095 52.6309 18.4782L56.0268 16.2708C60.2468 13.5278 65.8664 14.4887 68.9352 18.4782Z"
          fill="#971934"
          stroke="#1C1F35"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Air Freight Services",
    description:
      "We have buildings that can provide you with distribution, storage, inventory management, order fulfilment services.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={52}
        height={59}
        viewBox="0 0 52 59"
        fill="none"
      >
        <path
          d="M4.83301 41.7498V14.9165"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.167 14.9165V41.7498"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.333 28.3335V32.1668"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 26.4167V32.1667"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.667 24.5V32.1667"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.0833 7.25H2.91666C1.85812 7.25 1 8.10812 1 9.16666V13C1 14.0585 1.85812 14.9167 2.91666 14.9167H45.0833C46.1418 14.9167 46.9999 14.0585 46.9999 13V9.16666C46.9999 8.10812 46.1418 7.25 45.0833 7.25Z"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.0833 7.25H2.91666C1.85812 7.25 1 8.10812 1 9.16666V13C1 14.0585 1.85812 14.9167 2.91666 14.9167H45.0833C46.1418 14.9167 46.9999 14.0585 46.9999 13V9.16666C46.9999 8.10812 46.1418 7.25 45.0833 7.25Z"
          fill="#971934"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3997 57.2948C15.5968 55.985 14.7876 52.8168 16.813 50.2047"
          stroke="#1C1F35"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1H22"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51 18L51 28"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 41.75V49.4167"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.0003 57.0834C26.1174 57.0834 27.8337 55.3672 27.8337 53.2501C27.8337 51.133 26.1174 49.4167 24.0003 49.4167C21.8832 49.4167 20.167 51.133 20.167 53.2501C20.167 55.3672 21.8832 57.0834 24.0003 57.0834Z"
          fill="#971934"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 41.75H46.9999"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={52}
          height={59}
          viewBox="0 0 52 59"
          fill="none"
        >
          <path
            d="M4.83301 41.7498V14.9165"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.167 14.9165V41.7498"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.333 28.3335V32.1668"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 26.4167V32.1667"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.667 24.5V32.1667"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.0833 7.25H2.91666C1.85812 7.25 1 8.10812 1 9.16666V13C1 14.0585 1.85812 14.9167 2.91666 14.9167H45.0833C46.1418 14.9167 46.9999 14.0585 46.9999 13V9.16666C46.9999 8.10812 46.1418 7.25 45.0833 7.25Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.0833 7.25H2.91666C1.85812 7.25 1 8.10812 1 9.16666V13C1 14.0585 1.85812 14.9167 2.91666 14.9167H45.0833C46.1418 14.9167 46.9999 14.0585 46.9999 13V9.16666C46.9999 8.10812 46.1418 7.25 45.0833 7.25Z"
            fill="#971934"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3997 57.2948C15.5968 55.985 14.7876 52.8168 16.813 50.2047"
            stroke="#1C1F35"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1H22"
            stroke="#1C1F35"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M51 18L51 28"
            stroke="#1C1F35"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 41.75V49.4167"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.0003 57.0834C26.1174 57.0834 27.8337 55.3672 27.8337 53.2501C27.8337 51.133 26.1174 49.4167 24.0003 49.4167C21.8832 49.4167 20.167 51.133 20.167 53.2501C20.167 55.3672 21.8832 57.0834 24.0003 57.0834Z"
            fill="#971934"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 41.75H46.9999"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </svg>
    ),
    title: "Network & Route",
    description:
      "Our transportation strategy experts identify the most compelling transportation a roadmap of the process, organization.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={62}
        height={62}
        viewBox="0 0 62 62"
        fill="none"
      >
        <path
          d="M42.0713 28.7857V18.8214H47.6681C50.5026 18.8214 53.0574 20.5309 54.1387 23.151L56.1791 28.095C56.3149 28.4241 56.073 28.7857 55.7169 28.7857H42.0713Z"
          fill="#971934"
          stroke="#1C1F35"
          strokeWidth={2}
        />
        <path
          d="M4.42871 35.4286H42.0716"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.3929 53.1429C49.0616 53.1429 52.0357 50.1688 52.0357 46.5C52.0357 42.8313 49.0616 39.8571 45.3929 39.8571C41.7241 39.8571 38.75 42.8313 38.75 46.5C38.75 50.1688 41.7241 53.1429 45.3929 53.1429Z"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6067 53.1429C20.2755 53.1429 23.2496 50.1688 23.2496 46.5C23.2496 42.8313 20.2755 39.8571 16.6067 39.8571C12.938 39.8571 9.96387 42.8313 9.96387 46.5C9.96387 50.1688 12.938 53.1429 16.6067 53.1429Z"
          fill="#971934"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.75 45.3929H23.25"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.90907 45.3929H6.31085C5.81168 45.3929 5.33295 45.1887 4.97998 44.8254C4.62701 44.462 4.42871 43.9692 4.42871 43.4554V16.3304C4.42871 15.8165 4.62701 15.3237 4.97998 14.9603C5.33295 14.597 5.81168 14.3929 6.31085 14.3929H42.0716V40.3554"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42.0713 28.7857H57.5713V43.5476C57.5713 44.037 57.3672 44.5063 57.0038 44.8524C56.6405 45.1984 56.1476 45.3928 55.6338 45.3928H51.8972"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.85742 28.0946L8.85742 18.8214"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.7854 31L38.0586 31"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.786 49.7144L32.1074 49.7144"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Local Shipping Services",
    description:
      "We work close with strategic partners to ensure our domestic trucking offers clients everything they need in their place.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={56}
        height={39}
        viewBox="0 0 56 39"
        fill="none"
      >
        <path
          d="M24.8232 28.2459C32.3469 28.2459 38.4461 22.1467 38.4461 14.623C38.4461 7.09921 32.3469 1 24.8232 1C17.2994 1 11.2002 7.09921 11.2002 14.623C11.2002 22.1467 17.2994 28.2459 24.8232 28.2459Z"
          fill="#971934"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.34277 37.328C7.72964 34.4832 10.7106 32.1956 14.0761 30.6262C17.4417 29.0567 21.1101 28.2434 24.8236 28.2434C28.5371 28.2434 32.2055 29.0567 35.5711 30.6262C38.9366 32.1956 41.9176 34.4832 44.3044 37.328"
          stroke="#1C1F35"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.8877 38.4629L41.6705 38.4629L41.6705 20.2989L51.8877 20.2989L51.8877 38.4629Z"
          fill="white"
          stroke="#141414"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.8877 27.1106L41.6705 27.1106L41.6705 20.2991L51.8877 20.2991L51.8877 27.1106Z"
          fill="#971934"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.4824 24.8401L45.0767 24.8401"
          stroke="#141414"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.4824 30.5164L45.0767 30.5164"
          stroke="#141414"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55.2939 28.2458L55.2939 37.9031"
          stroke="#1C1F35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.71595 21.9802C5.84022 20.8261 3.68155 16.9857 5.35156 9.77075"
          stroke="#1C1F35"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.2407 16.0356C35.1924 17.196 34.5511 20.6797 29.7041 24.363"
          stroke="#1C1F35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Customer Clearance",
    description:
      "Certified aerospace logistics expertise and technology that transforms your supply chain, while keeping your downtime time down.",
  },
];

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group flex max-w-xl flex-col items-start justify-evenly p-4 font-sans">
      <div className="mb-4">{icon}</div>
      <div className="space-y-2">
        <h3 className="group-hover:text-primary text-2xl text-black transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
};
