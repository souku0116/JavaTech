import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/app/config/site";

type ContactFormData = {
  email: string;
  message: string;
  name: string;
  phone: string;
  subject: "campaign" | "course" | "general";
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: {
      subject: "course",
    },
  });

  const fieldClassName =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all";

  const onSubmit: SubmitHandler<ContactFormData> = () => {
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            Have questions about our programs or campaigns? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Head Office</h3>
                  <p className="text-slate-600">
                    {CONTACT_DETAILS.addressLine1}
                    <br />
                    {CONTACT_DETAILS.addressLine2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">{CONTACT_DETAILS.phone}</p>
                  <p className="text-sm text-slate-500">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">{CONTACT_DETAILS.admissionsEmail}</p>
                  <p className="text-slate-600">{CONTACT_DETAILS.partnershipsEmail}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.slice(0, 3).map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {social.label.slice(0, 2).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className={fieldClassName}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input
                    {...register("phone", { required: true })}
                    className={fieldClassName}
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className={fieldClassName}
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select {...register("subject", { required: true })} className={fieldClassName}>
                  <option value="course">Course Inquiry</option>
                  <option value="campaign">Campaign Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className={fieldClassName}
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>

              {isSubmitted && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
