import { Link } from "wouter";
import { ArrowRight, Music, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Meet The DJ</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
              Eric Conover
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utah native, music lover, and the person dedicated to making your event unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/eric-conover-new.jpg" 
                alt="Eric Conover DJing" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                My Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey! My name is Eric Conover. I was born and raised in Utah and have always valued connecting with people. 
                  I was also the "iTunes" kid in our family and have always loved music.
                </p>
                <p>
                  In college, I started to really love hosting and planning events. I also had a roommate and some friends who were DJs, 
                  so I always thought it would be fun to get into.
                </p>
                <p>
                  When my sister Emily was planning her wedding, which would take place in my parents' backyard, it seemed like the 
                  perfect time for me to kick off my DJ career. I asked her if she would like me to DJ/Emcee her wedding, bought my 
                  first set of speakers, and was off to the races from there.
                </p>
                <p>
                  Since then, I've enjoyed DJing many weddings, church events, parties, dances, and more. My favorite part of this job 
                  is looking out on the dance floor and seeing people smiling and having fun together. The moment where they visibly get 
                  excited about a song and start going crazy with their family and friends is what it's all about for me.
                </p>
                <p className="font-medium text-foreground">
                  I promise to make many of those moments happen for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4 p-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Users size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Connection</h3>
              <p className="text-primary-foreground/80">
                I value connecting with people and ensuring every guest feels part of the celebration.
              </p>
            </div>
            
            <div className="space-y-4 p-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Music size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Passion</h3>
              <p className="text-primary-foreground/80">
                From being the "iTunes kid" to a professional DJ, music has always been my life's passion.
              </p>
            </div>
            
            <div className="space-y-4 p-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Heart size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Moments</h3>
              <p className="text-primary-foreground/80">
                My goal is to create those unforgettable moments where everyone is smiling and having fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-center">
        <div className="container space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Let's Create Memories Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear about your event and how we can make it special.
          </p>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-serif text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
            Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
