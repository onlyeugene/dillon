import React from "react";

const services = [
  {
    id: 1,
    title: "Pet Grooming",
    description:
      "Professional grooming services for all breeds. Includes bathing, haircuts, nail trimming, and ear cleaning.",
    icon: "✂️",
    features: [
      "Breed-specific styling",
      "Flea and tick treatment",
      "De-shedding service",
      "Teeth cleaning",
    ],
  },
  {
    id: 2,
    title: "Veterinary Care",
    description:
      "Comprehensive veterinary services including regular check-ups, vaccinations, and emergency care.",
    icon: "🏥",
    features: [
      "Regular health check-ups",
      "Vaccination services",
      "Dental care",
      "Emergency services",
    ],
  },
  {
    id: 3,
    title: "Pet Boarding",
    description:
      "Safe and comfortable boarding facilities for your pets when you're away.",
    icon: "🏠",
    features: [
      "24/7 supervision",
      "Individual playtime",
      "Regular feeding schedule",
      "Daily exercise",
    ],
  },
  {
    id: 4,
    title: "Training Services",
    description:
      "Professional training programs for pets of all ages and breeds.",
    icon: "🎓",
    features: [
      "Basic obedience training",
      "Behavioral modification",
      "Puppy training",
      "Socialization classes",
    ],
  },
  {
    id: 5,
    title: "Pet Nutrition Consultation",
    description: "Expert advice on pet nutrition and dietary planning.",
    icon: "🥗",
    features: [
      "Dietary assessment",
      "Weight management",
      "Special diet planning",
      "Nutritional supplements",
    ],
  },
  {
    id: 6,
    title: "Pet Transportation",
    description: "Safe and comfortable transportation services for your pets.",
    icon: "🚗",
    features: [
      "Air-conditioned vehicles",
      "Secure pet carriers",
      "Door-to-door service",
      "Emergency transport",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16"
    id="services">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive pet care services to ensure your furry
            friends receive the best care possible. Our team of experienced
            professionals is dedicated to making your pets happy and healthy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-4 h-4 text-yellow-500 mr-2"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to schedule an appointment or learn more about our
            services.
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
