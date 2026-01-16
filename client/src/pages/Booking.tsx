import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  eventDate: z.date(),
  eventType: z.string().min(2, {
    message: "Please specify the type of event.",
  }),
  details: z.string().optional(),
});

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "Wedding",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to a backend
    console.log(values);
    setIsSubmitted(true);
    toast.success("Consultation request sent! We'll be in touch shortly.");
  }

  if (isSubmitted) {
    return (
      <div className="container max-w-2xl py-24 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="font-serif text-4xl font-bold text-foreground">Request Received</h1>
        <p className="text-muted-foreground text-lg">
          Thank you for reaching out! I'll review your details and get back to you within 24 hours to confirm your consultation time.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8">
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Plan Your Perfect Event
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule a free consultation to discuss your vision, music preferences, and how we can make your event unforgettable.
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

        <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
          <h2 className="font-serif text-2xl font-bold mb-6">Book a Free Consultation</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane & John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="hello@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <FormControl>
                        <Input placeholder="Wedding, Party, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your venue, estimated guest count, or any specific questions you have..." 
                        className="resize-none min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full font-serif text-lg py-6">
                Request Consultation
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
