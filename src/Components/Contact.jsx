import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0z039zq",       // ✅ Your service ID
        "template_w930pwc",      // ✅ Your template ID
        form.current,
        "wxdSIAE28dBQFPzi5"      // ✅ Your public key
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.error("❌ EmailJS Error:", error.text || error);
          alert("❌ Failed to send message!");
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h3 className="text-3xl font-bold mb-4">Contact</h3>
      <p className="mb-6 text-gray-600">Feel free to reach out using the form below!</p>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Send
        </button>
      </form>

      {messageSent && (
        <p className="mt-4 text-green-600 font-medium animate-pulse">
          ✅ Your message has been sent. I'll get back to you soon!
        </p>
      )}

      {/* ✅ QR Code Section */}
      <div className="mt-10">
        <h4 className="text-xl font-semibold mb-2">My Resume</h4>
        <p className="text-gray-500 mb-4">Scan the QR code below to access and download my resume</p>
        <img
          src="/resume-qr.png"
          alt="Resume QR Code"
          className="w-48 h-48 mx-auto border border-gray-300 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
