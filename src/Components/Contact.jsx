import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // 👈 step 1

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0z039zq",
        "template_w930pwc",
        form.current,
        "wxdSIAE28dBQFPzi5"
      )
      .then(
        () => {
          setMessageSent(true);        // 👈 step 2
          form.current.reset();

          setTimeout(() => {
            setMessageSent(false);     // 👈 step 3: hide after 5s
          }, 5000);
        },
        (error) => {
          console.error("❌ EmailJS Error:", error.text || error);
          alert("❌ Failed to send message!");
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold mb-4">Contact</h3>
      <p className="mb-6">Feel free to reach out using the form below!</p>

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
    </section>
  );
};

export default Contact;
