import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-heading3-bold  text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Get in Touch
            </h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="flex flex-col space-y-4">
              <Input type="hidden" name="form-name" value="contact" />
              <div className="relative">
                <label htmlFor="name" className="text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 p-3 "
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 p-3 "
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="button"
                className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Contact Information
            </h2>
            <div className="flex items-center space-x-4 mb-6">
              <FaMapMarkerAlt className="text-orange-500" size={24} />
              <p className="text-gray-700">
                Mymensingh Museum, Mymensingh City, 2200
              </p>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <FaPhoneAlt className="text-orange-500" size={24} />
              <p className="text-gray-700">+880 1234-567891</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-orange-500" size={24} />
              <p className="text-gray-700">contact@chickshop.com</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-heading4-bold mb-4 text-gray-800 text-center">
            Find Us
          </h2>
          <div className="relative w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.43835458882384!2d90.40547262343613!3d24.76072032077134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f027e6288db%3A0xb9f65b5bf6e07230!2sMymensingh%20Museum!5e0!3m2!1sen!2sbd!4v1726259691312!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
