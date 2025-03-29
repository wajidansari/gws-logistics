"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Services" },
]

export  function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
return (
    <header className="font-sans sticky top-0 z-50 w-full bg-foreground py-2 md:py-3 ">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 max-w-7xl">
            {/* Logo */}
            <div className="flex items-center">
                {/* <a href="/" className="flex items-center">
                    <img 
                        src="/blx-logo.png" 
                        alt="BLX Logistics Logo" 
                        width={100}
                        height={90}
                        className="object-contain"
                    />
                </a> */}
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center">
                <NavigationMenu className="mx-auto">
                    <NavigationMenuList className="flex space-x-9 ">
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.href} className="relative group">
                              
                                    <NavigationMenuLink href={link.href}  className="font-sans text-primary-foreground text-md   ">
                                        {link.label}
                                    </NavigationMenuLink>
                                
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-primary-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>
        </div>
        
        {/* Mobile Navigation - Full Width */}
        {mobileMenuOpen && (
            <div className="md:hidden h-dvh bg-background w-full ">
                <div className="container h-full  mx-auto px-4 py-3 flex flex-col items-center justify-start pt-28 space-y-10 ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-foreground text-2xl py-2 text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* <Button className="w-full mt-2">Get a Quote</Button> */}
                </div>
            </div>
        )}
    </header>
)
}
