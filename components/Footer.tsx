import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <Image
              src="/text-logo.png"
              alt="Logo"
              width={120}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">
              We are dedicated to providing high-quality, thoughtfully designed
              products that allow you to express your unique identity. Thank you
              for supporting our store.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaPinterestP size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          {/* <p className="text-gray-200 text-sm flex flex-col md:flex-row gap-2 mx-auto w-fit">
            Developed by
            <Link
              href="https://site-monir.vercel.app/"
              target="_blank"
              className="text-orange-600 hover:underline underline-offset-2 flex w-fit items-center gap-2 text-center mb-2">
              <span className="text-center"> Md Moniruzzaman Monir</span>
              <span className="text-center">
                {" "}
                <ExternalLink />
              </span>
            </Link>{" "}
          </p> */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Chick Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
