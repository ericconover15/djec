import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Plan Your Perfect Event
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule a free 30-minute consultation directly on my calendar. We'll discuss your vision, music preferences, and how we can make your event unforgettable.
            </p>
          </div>

          <div className="bg-muted/30 p-8 rounded-xl border border-border space-y-6">
            <h3 className="font-serif text-2xl font-semibold">What to expect</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">1</div>
                <div>
                  <span className="font-medium block text-foreground">Personalized Planning</span>
                  <span className="text-sm text-muted-foreground">We'll discuss your timeline, music style, and special requests.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">2</div>
                <div>
                  <span className="font-medium block text-foreground">Transparent Pricing</span>
                  <span className="text-sm text-muted-foreground">Get a clear quote with no hidden fees. Our standard package covers everything you need.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">3</div>
                <div>
                  <span className="font-medium block text-foreground">Equipment Overview</span>
                  <span className="text-sm text-muted-foreground">Learn about our professional sound, lighting, and effects setup.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
             <img 
               src="/images/consultation-planning.jpg" 
               alt="Wedding planning consultation" 
               className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
             />
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden h-[800px] md:h-[900px]">
          {/* Calendly inline widget begin */}
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url="https://calendly.com/eric-conover-15/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=4a7c59" 
          />
          {/* Calendly inline widget end */}
        </div>
      </div>
    </div>
  );
}
