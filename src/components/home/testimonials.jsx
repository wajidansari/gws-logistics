"use client"

import { Star } from "lucide-react";
import { Quote } from "lucide-react";
import { useEffect, useRef,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Badge } from "../ui/badge";

 

// Sample testimonial data
const testimonials = [
    {
        id: 1,
        name: "David Malan",
        company: "Fuel company",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
        content: "We are so happy with everything that the logistics group has done for us. They have excellent delivery to North-Eastern region of united states. I highly recommend them! Superb communication, pick up and delivery right on time.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Johnson",
        company: "Manufacturing Inc.",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        content: "The logistics team provided exceptional service for our time-sensitive deliveries. Their attention to detail and proactive communication made all the difference. Our shipments arrived ahead of schedule every time.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Scott",
        company: "Global Exports",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        content: "After working with several logistics providers, this team stands out for their reliability and problem-solving abilities. When unexpected issues arose, they quickly developed alternative solutions that kept our supply chain moving.",
        rating: 4
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        company: "Fresh Foods Distribution",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        content: "The temperature-controlled transport services were perfect for our perishable goods. Their specialized fleet and careful handling ensured our products arrived in optimal condition, which is crucial for our business.",
        rating: 5
    }
];

const TestimonialCard = ({ testimonial, index }) => {
    const isEven = index % 2 === 0;
    
    return (
        <div className={`flex flex-col items-start justify-between gap-4 w-full shadow-md min-h-96 ${
            isEven ? "bg-primary text-primary-foreground" : "bg-neutral-200"
        }`}>
            <div className="w-full p-8 pb-0">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 overflow-hidden rounded-full bg-secondary/20">
                            <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name}`} 
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className={`text-xl font-semibold tracking-tight ${
                                isEven ? "text-primary-foreground" : ""
                            }`}>
                                {testimonial.name}
                            </h3>
                            <p className={`text-base ${
                                isEven ? "text-primary-foreground/80" : "text-muted-foreground"
                            }`}>{testimonial.company}</p>
                        </div>
                    </div>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isEven ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                    }`} aria-hidden="true">
                        <Quote className="h-5 w-5" />
                    </div>
                </div>
            </div>
            <div className="p-8 pt-3">
                <blockquote className={`text-base md:text-lg leading-relaxed ${
                    isEven ? "text-primary-foreground" : ""
                }`}>
                    {testimonial.content}
                </blockquote>
            </div>
            <div className="p-8 pt-0">
                <div className="flex items-center gap-2" role="group" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {Array(5).fill(0).map((_, i) => (
                        <Star 
                            key={i} 
                            className={`h-6 w-6 ${
                                i < testimonial.rating 
                                    ? isEven ? "text-primary-foreground fill-primary-foreground" : "text-primary fill-primary" 
                                    : isEven ? "text-primary-foreground/30" : "text-muted-foreground"
                            }`}
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Import Swiper styles

export const Testimonials = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <section className="py-16 px-5 flex items-center justify-center mt-[35rem] md:mt-10 lg:mt-64 lg:min-h-dvh relative w-dvw md:max-w-6xl mx-auto " aria-labelledby="testimonials-heading">
            <div className="container relative">
                <div className="my-5">
                    <Badge>Testimonials</Badge>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <h2 id="testimonials-heading" className="text-3xl font-bold text-black">What Our Clients Say</h2>
                    <div className="flex items-center gap-2 absolute top-0 right-0">
                        <button 
                            ref={navigationPrevRef} 
                           
                            aria-label="Previous testimonial" 
                            title="Previous testimonial"
                            className="h-10 w-10 rounded-full border bg-white shadow-md flex items-center justify-center transition-transform active:scale-90 "
                            aria-controls="testimonials-carousel"
                        >
                            <ChevronLeft className="h-5 w-5 text-primary" aria-hidden="true" />
                        </button>
                        <button 
                            ref={navigationNextRef} 
                           
                            aria-label="Next testimonial" 
                            title="Next testimonial"
                            className="h-10 w-10 rounded-full border bg-white shadow-md flex items-center justify-center transition-transform active:scale-90"
                            aria-controls="testimonials-carousel"
                        >
                            <ChevronRight className="h-5 w-5 text-primary" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="w-full"></div>
                    <Swiper
                        id="testimonials-carousel"
                        modules={[Navigation]}
                        onSwiper={setSwiper}
                        navigation={{ 
                            prevEl: navigationPrevRef.current, 
                            nextEl: navigationNextRef.current 
                        }}
                        breakpoints={{
                            // Mobile (default)
                            0: { slidesPerView: 1 },
                            // Tablet
                            640: { slidesPerView: 1 },
                            // Desktop
                            1024: { slidesPerView: 2 }
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialCard testimonial={testimonial} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            
        </section>
    )
};

