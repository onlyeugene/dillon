import React from "react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+2347087701706";
    const message = "Hello! I'm interested in your pet services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16" id="contact">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our services? We're here to help! Reach out to
            us through WhatsApp or visit our store.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ife-Ilesa Expressway,
                    <br />
                    Ife, Osun, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 8:00 PM
                    <br />
                    Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +234 708 770 1706
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    dillonpetkennelandstore@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
            data-aos="fade-left"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">💬</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Chat with Us on WhatsApp
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get quick responses to your questions and inquiries through
                WhatsApp. Our team is ready to assist you!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
