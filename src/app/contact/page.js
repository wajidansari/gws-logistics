"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <section
      className="bg-neutral text-primary-foreground flex min-h-dvh items-center justify-center px-4 py-12 font-sans"
      aria-labelledby="contact-section"
    >
      <div className="container mx-auto flex h-full max-w-7xl flex-col items-start justify-center md:items-center lg:flex-row">
        {/* Text Info */}
        <div className="flex flex-col px-6 text-black lg:max-w-1/2">
          <div className="my-3">
            <Badge>Contact</Badge>
          </div>
          <h2 className="mb-4 text-4xl font-bold">Get In Touch With Us</h2>
          <p className="mb-8 text-lg leading-relaxed">
            We appreciate your interest. Please complete the form below, and we
            will contact you immediately to discuss your warehousing and
            distribution, air, ocean freight, or any other logistics needs.
          </p>
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div
                className="flex cursor-pointer items-center gap-4"
                onClick={() => {
                  window.location.href = "mailto:contact@logistics.com";
                }}
                role="button"
                tabIndex={0}
                aria-label="Send an email to contact@logistics.com"
              >
                <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="text-primary text-lg font-bold">Email</p>
                  <p className="underline">contact@logistics.com</p>
                </div>
              </div>
              <div
                className="flex cursor-pointer items-center gap-4"
                onClick={() => (window.location.href = "tel:+00123456789")}
                role="button"
                tabIndex={0}
                aria-label="Call (00) 123 456 789"
              >
                <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="text-primary text-lg font-bold">Call Us</p>
                  <p className="underline">(00) 123 456 789</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <form
          className="space-y-6"
          aria-labelledby="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <h3 id="contact-form" className="sr-only">
            Contact Form
          </h3>
          <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name*"
              className="border-secondary bg-input text-primary focus:ring-secondary w-full border p-4 font-sans text-lg focus:ring-2 focus:outline-none"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="border-secondary bg-input text-primary focus:ring-secondary w-full border p-4 font-sans text-lg focus:ring-2 focus:outline-none"
              required
              aria-label="Your Email"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="tel"
              placeholder="Phone Number*"
              className="border-secondary bg-input text-primary focus:ring-secondary w-full border p-4 font-sans text-lg focus:ring-2 focus:outline-none"
              required
              aria-label="Phone Number"
            />
            <input
              type="text"
              placeholder="City*"
              className="border-secondary bg-input text-primary focus:ring-secondary w-full border p-4 font-sans text-lg focus:ring-2 focus:outline-none"
              required
              aria-label="City"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="border-secondary bg-input text-primary focus:ring-secondary h-40 w-full border p-4 font-sans text-lg focus:ring-2 focus:outline-none"
            aria-label="Your Message"
          ></textarea>
          <Button type="submit" aria-label="Submit Message">
            Submit Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
