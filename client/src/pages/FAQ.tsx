import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you take song requests?",
      answer: "Absolutely! I work with you beforehand to build a 'must-play' and 'do-not-play' list. During the event, I'm happy to take requests from guests if they fit the vibe you're looking for."
    },
    {
      question: "How far do you travel?",
      answer: "I am happy to travel anywhere for your event! I'm based in Utah County, and travel within Utah County, Salt Lake County, and neighboring areas is included in my standard rate. For locations further away, I'm more than willing to come to you, but please note that an added travel fee will apply to cover the distance."
    },
    {
      question: "Do you provide your own equipment?",
      answer: "Yes, I bring everything needed for a professional setup, including high-end JBL EON 700 speakers, wireless microphones, dance floor lighting, and a fog machine. You don't need to rent anything extra."
    },
    {
      question: "What happens if we need you to stay longer?",
      answer: "The party doesn't have to stop! If you decide you want to extend the time on the night of the event, we can discuss an overtime rate to keep the music going."
    },
    {
      question: "Do you also emcee the event?",
      answer: "Yes, I act as the Master of Ceremonies (MC) for your event. I'll handle all the announcements, introduce the wedding party, and keep the timeline moving smoothly so you can relax and enjoy the night."
    },
    {
      question: "How do we book you?",
      answer: "It's simple! Click the 'Book Consultation' button to schedule a free 30-minute chat. We'll discuss your details, and if it's a good fit, I'll send over a contract to secure your date."
    }
  ];

  return (
    <div className="container py-16 md:py-24 max-w-4xl">
      <div className="text-center space-y-4 mb-16">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
          <HelpCircle size={24} />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are answers to some of the most common questions I get. If you don't see your question here, feel free to reach out!
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-serif text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16 text-center space-y-6 bg-muted/30 p-12 rounded-xl border border-border">
        <h2 className="font-serif text-2xl font-bold">Still have questions?</h2>
        <p className="text-muted-foreground">
          I'd love to chat and answer any other questions you might have about your specific event.
        </p>
        <Link href="/booking">
          <Button size="lg" className="font-serif px-8">
            Schedule a Free Chat
          </Button>
        </Link>
      </div>
    </div>
  );
}
