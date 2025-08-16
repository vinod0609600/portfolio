import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Send,
  Loader2 
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sadulavinod06@gmail.com",
      href: "mailto:sadulavinod06@gmail.com",
      testId: "contact-email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9704405296",
      href: "tel:+919704405296",
      testId: "contact-phone",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "vinod-sadula-5753402bb",
      href: "https://www.linkedin.com/in/vinod-sadula-5753402bb/",
      testId: "contact-linkedin",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "vinod0609600",
      href: "https://github.com/vinod0609600",
      testId: "contact-github",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6" data-testid="contact-info-title">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.testId} className="flex items-center space-x-4" data-testid={info.testId}>
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                      <IconComponent className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <a 
                        href={info.href}
                        {...(info.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        data-testid={`${info.testId}-link`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  {...form.register("name")}
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-name">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...form.register("email")}
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  className="resize-none"
                  {...form.register("message")}
                  data-testid="input-message"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-message">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700"
                disabled={contactMutation.isPending}
                data-testid="button-submit"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
