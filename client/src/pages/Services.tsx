import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Heart, Briefcase, PartyPopper, Globe, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Weddings & Receptions",
      description: "Your special day deserves a perfect soundtrack. From the ceremony procession to the last dance, I ensure every moment is timed perfectly and the energy matches your vision.",
      icon: <Heart className="w-8 h-8 text-primary" />,
      image: "/images/hero-wedding-dance.jpg"
    },
    {
      title: "Corporate Events",
      description: "Professional entertainment for holiday parties, product launches, and company milestones. I provide a polished atmosphere that allows colleagues to relax and celebrate together.",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      image: "/images/equipment-setup.jpg"
    },
    {
      title: "Private Parties",
      description: "Birthdays, anniversaries, or just because. Whatever the occasion, I bring the sound and lighting to turn any gathering into an unforgettable celebration.",
      icon: <PartyPopper className="w-8 h-8 text-primary" />,
      image: "/images/dj-mixing-closeup.jpg"
    },
    {
      title: "Country & Latin Dancing",
      description: "Specialized playlists for line dancing, two-step, salsa, bachata, and more. I know the tracks that get dancers on the floor and keep them there all night long.",
      icon: <Globe className="w-8 h-8 text-primary" />,
      image: "/images/country-latin-dancing.jpg"
    },
    {
      title: "Quinceañeras",
      description: "A coming-of-age celebration needs a DJ who understands the traditions and the party. I mix the best of Latin hits and modern favorites for a night the whole family will enjoy.",
      icon: <Star className="w-8 h-8 text-primary" />,
      image: "/images/quinceanera-party.jpg"
    },
    {
      title: "Themed Nights (80's, etc.)",
      description: "Want to travel back in time? I curate authentic playlists for 80s nights, disco parties, and other themed events to create a totally immersive musical experience.",
      icon: <Music className="w-8 h-8 text-primary" />,
      image: "/images/themed-party-80s.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container text-center space-y-6">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">What I Do</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
            Services & Events
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From elegant weddings to high-energy parties, I provide professional DJ and Emcee services tailored to your specific event needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href="/booking" className="block h-full">
                <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      Book This Service <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Don't See Your Event Listed?
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            I'm flexible and experienced with all types of gatherings. Let's chat about what you're planning!
          </p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 font-serif text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
            Discuss Your Event <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
