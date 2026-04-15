import React from "react";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white pt-6 pb-2 px-6">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
