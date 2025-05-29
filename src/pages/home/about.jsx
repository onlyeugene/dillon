import React from "react";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Pet Products" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="bg-gray-50 py-16" id="about">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Dillon Pet-Store & Kennel
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in pet care since 2013. We're dedicated to
            providing the best products and services for your beloved pets.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for pets, Dillon Pet-Store & Kennel has
              grown from a small local shop to a comprehensive pet care center.
              We believe that every pet deserves the best care and attention,
              which is why we've built our business around quality products and
              exceptional service.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence has made us the go-to destination for
              pet owners in the community, offering everything from premium pet
              supplies to professional grooming and veterinary services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compassion
              </h3>
              <p className="text-gray-600">
                We treat every pet with love and care, understanding their
                unique needs and personalities.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our products and
                services.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trust
              </h3>
              <p className="text-gray-600">
                We build lasting relationships with our customers through
                transparency and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
