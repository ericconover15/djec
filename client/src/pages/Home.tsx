import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Music, Mic, Calendar, MapPin, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-wedding-dance.jpg" 
            alt="Wedding reception dance floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 text-center text-white space-y-6 animate-in fade-in zoom-in duration-1000">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Unforgettable Moments,<br />Perfectly Soundtracked
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white/90 text-balance">
            Professional DJ & Emcee services for weddings and events in Utah County and beyond.
          </p>
          <div className="pt-4">
            <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 font-serif text-lg px-8 py-6 bg-white text-black hover:bg-white/90 border-none">
              Book Your Date
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section className="section-padding bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">About DJ EC</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              More Than Just Music
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey! My name is Eric Conover. I was born and raised in Utah and have always valued connecting with people. 
              From being the "iTunes kid" to a professional DJ, music has always been my passion.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My favorite part of this job is looking out on the dance floor and seeing people smiling and having fun together.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <MapPin className="text-primary" />
                <span>Based in Utah County • Willing to Travel</span>
              </div>
              <Link href="/about" className="inline-flex items-center text-primary font-medium hover:underline">
                Read my full story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/dj-mixing-closeup.jpg" 
              alt="DJ mixing at an event" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services / What's Included */}
      <section id="services" className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground">
              No hidden fees or complicated packages. My standard service includes premium equipment and comprehensive planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Music size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Professional Sound</h3>
              <p className="text-muted-foreground">
                Crystal clear audio with high-end speakers suitable for both intimate gatherings and large dance floors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Star size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Lighting & Atmosphere</h3>
              <p className="text-muted-foreground">
                Includes dance floor lighting and a fog machine to create the perfect party vibe when the dancing starts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Mic size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Emcee & Planning</h3>
              <p className="text-muted-foreground">
                I handle all announcements and coordinate with your other vendors. Includes pre-event planning meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/equipment-setup.jpg" 
                alt="Professional DJ equipment setup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Top-Tier Equipment
              </h2>
              <p className="text-lg text-muted-foreground">
                Reliability is key. I use professional-grade gear to ensure your event sounds amazing and runs without a hitch.
              </p>
              <ul className="space-y-3">
                {[
                  "JBL EON 700 Series Speakers",
                  "Wireless Microphone for Toasts",
                  "Dance Floor Lighting",
                  "Atmospheric Fog Machine",
                  "Professional DJ Controller",
                  "Backup Equipment On-Site"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-wedding-dance.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Ready to Celebrate?
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Let's chat about your vision. Schedule a free consultation to discuss details, availability, and pricing.
          </p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 font-serif text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
            Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
