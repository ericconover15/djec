import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/booking" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              DJ EC
            </span>
            <span className="hidden md:inline-block text-sm font-light tracking-widest uppercase text-muted-foreground">
              Weddings & Events
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/booking">
              <Button variant="default" size="sm" className="font-serif">
                Book Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 shadow-lg absolute w-full">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/booking">
                <Button className="w-full font-serif" onClick={() => setIsMenuOpen(false)}>
                  Book Consultation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary">
                DJ EC Weddings & Events
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Creating unforgettable memories in Utah County and beyond. 
                Professional DJ & Emcee services for your special day.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li><Link href="/#services" className="hover:text-primary">Services</Link></li>
                <li><Link href="/booking" className="hover:text-primary">Book Consultation</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="mailto:hello@djec.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Based in Utah County, UT<br />
                Willing to travel
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} DJ EC Weddings & Events. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
