/* eslint-disable no-unused-vars */
import { RevealOnScroll } from "../RevealOnScroll";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    window.history.replaceState(null, "", window.location.pathname);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully.");
          setFormData({ name: "", email: "", message: "" });
          setStatusMessage("Your message was sent successfully.");
        },
        () => {
          toast.error("Something went wrong.");
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-2xl md:text-3xl font-bold mb-8  bg-gradient-to-r from-fuchsia-400 to bg-blue-300 bg-clip-text text-transparent leading-right">
            Get in touch!
          </h2>
          <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#F5C45E] text-lg">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="pl-10 w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F5C45E]"
              />
            </div>
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#F5C45E] text-lg">
                <FaEnvelope className=" text-[#F5C45E]" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="pl-10 w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F5C45E]"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F5C45E]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#F5C45E] text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(253,224,71,0.3)]"
            >
              Send Message
            </button>
            {statusMessage && (
              <p className="mt-2 text-[#F5C45E] text-center">{statusMessage}</p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
