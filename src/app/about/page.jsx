"use client";
import Accordion from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react'




const items = [
  { value: "item-1", title: "What services do you offer?", content: "We offer warehousing, air freight, ocean freight, and more." },
  { value: "item-2", title: "How can I contact you?", content: "You can email us at contact@logistics.com or call (00) 123 456 789." },
  { value: "item-3", title: "What services do you offer?", content: "We offer warehousing, air freight, ocean freight, and more." },
  { value: "item-4", title: "How can I contact you?", content: "You can email us at contact@logistics.com or call (00) 123 456 789." },
  { value: "item-5", title: "What services do you offer?", content: "We offer warehousing, air freight, ocean freight, and more." },
  
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$39",
    details: ["Single Truck", "Full Insurance", "500 Km", "Real-time rate shopping"],
  },
  {
    name: "Standard",
    price: "$59",
    details: ["Double Truck", "Full Insurance", "1000 Km", "Real-time rate shopping"],
  },
  {
    name: "Premium",
    price: "$89",
    details: ["Double Truck", "Full Insurance", "Unlimited", "Real-time rate shopping"],
  },
];



function AboutPage() {
  return (
    <main className='
    font-sans'>
      <section className='lg:min-h-dvh '>
        <div className='max-w-6xl md:pt-28 flex flex-col md:flex-row justify-center md:items-start mx-auto gap-5 px-4'>
           
          {/* Left */}
          <div className="relative  h-96 w-full md:max-w-1/2 ">
          {/* Truck Image - Large and covering most of the screen */}
          <div className="absolute inset-0 w-full h-full aspect-square">
            <img 
              src="/about-truck.jpeg" 
              alt="truck" 
              className="w-full h-full object-contain object-left"
            />
          </div>
          
          {/* Delivery Person Image - Positioned in the bottom right */}
          <div className="absolute aspect-square -bottom-16 -right-1 md:-right-8 w-1/2 ">
            <img 
              src="/delivery_guy.jpg" 
              alt="Delivery person" 
              className="w-full h-auto p-4 bg-neutral-100"
            />
          </div>
          </div>
          {/* Right */}
          <div className='text-black w-full md:max-w-1/2 mt-16 ml-0 md:ml-10 md:mt-0'>
           <div className='my-4'><Badge>About Us</Badge></div>
            <h2 className="mb-4 text-4xl font-bold">
           Our Company Overview
            </h2>
            <p className='mb-8 text-lg  text-justify leading-relaxed pr-2'>
             With a global reach, deep industry expertise, cutting-edge technology, and a vast transportation network, we provide innovative, tailored solutions to help customers optimize their supply chains and stay ahead in an ever-changing market. Whether you're an experienced shipper or navigating logistics for the first time, we’re here to support you at every step—from booking shipments and clearing customs to managing warehouses—ensuring a seamless and efficient experience.</p>
            <Button>
              <Link href="/services" >Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* <section className='py-24 bg-white '>
        <div className='w-full max-w-fit mx-auto pt-10'>
          <Badge>
               Pricing
          </Badge>
         
        </div>
         <h2 className="text-4xl font-bold text-black text-center py-5">Our Best Pricing</h2>
        <div className='max-w-6xl mx-auto py-14 pt-6 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0'>
          {pricingPlans.map((item) => {
            return <PricingCard key={item.name} name={item.name} price={item.price} details={item.details} /> 
          })}
        </div>
      </section> */}
      <section className='py-24'>
        <div className='max-w-7xl  flex flex-col md:flex-row mx-auto  md:items-start  gap-5 px-4'>
           
         
       
         
          <div className='text-black w-full md:max-w-1/2 mt-16 ml-0 md:ml-10 md:mt-0 '>
            <div>
               <div className='my-5'><Badge>FAQ</Badge></div>
            <h2 className="mb-4 text-4xl px-2 font-bold">
           Frequently Asked Question's
            </h2>
            </div>
           <Accordion items={items} />
          </div>
            <div className="relative h-96 w-full md:max-w-1/2 ">
          {/* Truck Image - Large and covering most of the screen */}
          <div className="hidden md:block absolute inset-0 w-full h-full aspect-square">
            <img 
              src="/background-2.jpeg" 
              alt="Scania truck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:absolute w-full  -bottom-16 -right-1 md:-right-8 md:w-80 ">
              <div className='bg-primary text-white p-10 flex flex-col w-full items-start space-y-6 '>
                <Badge bg="bg-secondary" >Let's Talk</Badge>
                <h2 className='text-2xl font-bold'>You Need Any Help? Get Free Consultation</h2>
                <div
                className="flex cursor-pointer items-center gap-4"
                // onClick={() => (window.location.href = "tel:+00123456789")}
                role="button"
                tabIndex={0}
                aria-label="You Need Any Help? Get Free Consultation Call (00) 123 456 789"
              >
                <div className="bg-primary/70 border text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full">
                  <Phone className="text-white" />
                </div>
                <div className='text-white'>
                  <p className= "text-lg font-bold">Call Us</p>
                  <p className="underline">(00) 123 456 789</p>
                </div>
                </div>
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Link href="/contact">
                Contact Us</Link></Button>
              </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage





const PricingCard = ({ name, price, details }) => {
  return (
    <div className="group select-none">
      <div className="bg-neutral-100 text-black  py-24 px-16 transition-colors duration-300 
        group-hover:bg-primary group-hover:text-neutral-50 
        group-active:bg-primary group-active:text-neutral-50 
        md:group-active:bg-secondary md:group-active:text-secondary-foreground">
        
        <p className="text-2xl text-center font-medium mb-2">{name}</p>
        <h1 className="font-bold text-center text-7xl mb-4">
          {price}
          <span className="text-base font-normal"> /month</span>
        </h1>
        <ul className="space-y-5 text-lg">
          {details.map((detail, index) => (
            <li key={index} className="border-t text-center border-gray-300 pt-2 
              group-hover:border-neutral-50 
              group-active:border-neutral-50 
              md:group-active:border-secondary-foreground">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



