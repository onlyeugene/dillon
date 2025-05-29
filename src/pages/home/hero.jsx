import React from "react";
import { Link } from "react-router-dom";
import home from "@/assets/images/home.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+2347087701706"; // Add your WhatsApp number here
    const message = "Hello! I'm interested in your pet services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative bg-gray-200 dark:bg-gray-800 pt-20" id="home">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              A beautiful pet store, where all your pets needs are met.
            </h1>
            <p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Professional pet care services, premium pet supplies, and a loving
              environment for your furry friends. Trust us to provide the best
              care for your beloved pets.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Link
                to="#services"
                className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Our Services
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us
              </button>
            </div>

            {/* Features */}
            <div
              className="grid grid-cols-2 gap-4 pt-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-yellow-500 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  24/7 Care
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-yellow-500 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Expert Staff
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative z-10">
              <img
                src={home}
                alt="Happy pets"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500 dark:bg-yellow-600 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 dark:bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
