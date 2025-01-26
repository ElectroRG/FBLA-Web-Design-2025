import React, { useState } from "react";

// Modal component with improved styling
const Modal: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "30px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        maxHeight: "80vh",
        overflowY: "auto",
        width: "80%",
        maxWidth: "600px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}
    >
      <div className="prose prose-invert mx-auto">{message}</div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const handleHover = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const amenities = (
    <div className="space-y-2 text-gray-300">
      <p>Spacious seating with excellent views from all angles</p>
      <p>Concession stand offering snacks, drinks, and hot meals</p>
      <p>Accessible restrooms located throughout the facility</p>
      <p>Free Wi-Fi for visitors</p>
      <p>On-site parking available for all guests</p>
      <p>Locker rooms and team meeting spaces for athletes</p>
    </div>
  );

  const policies = (
    <div className="space-y-2 text-gray-300">
      <p>Outside food and beverages are not permitted</p>
      <p>Smoking and vaping are strictly prohibited on school grounds</p>
      <p>Alcohol and illegal substances are not allowed</p>
      <p>Pets are not permitted, except for service animals</p>
      <p>Children must be supervised at all times</p>
      <p>All guests must follow staff instructions for safety and security</p>
    </div>
  );

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Location Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6582369322114!2d-90.638122146671!3d38.596213338995604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88603e3cd46c2c85%3A0x5426222ae71dcbd2!2sLafayette%20High%20School!5e0!3m2!1sen!2sus!4v1736146807470!5m2!1sen!2sus"
              width="200"
              height="200"
              className="rounded-lg mb-4"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-300">Lafayette High School</p>
              <p className="text-gray-400">17050 Clayton Rd</p>
              <p className="text-gray-400">Wildwood, MO 63011</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 4:00 PM - 9:00 PM</p>
              <p>Saturday: 8:00 AM - 9:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Phone: +1 (636) 733-4100</p>
              <p>Email: sumnerjonathon@rsdmo.org</p>
              <a 
                href="https://lafayette.rsdmo.org/"
                className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-yellow-400 font-bold text-xl mb-6 tracking-wide">Quick Links</h3>
            <div className="space-y-2">
              <button
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 inline-block"
                onMouseEnter={() => handleHover(amenities as unknown as string)}
                onMouseLeave={handleCloseModal}
              >
                Amenities
              </button>
              <br />
              <button
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 inline-block"
                onMouseEnter={() => handleHover(policies as unknown as string)}
                onMouseLeave={handleCloseModal}
              >
                Policies
              </button>
              <br />
              <a
                href="/documentation"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 inline-block"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700/30 pt-8 text-center backdrop-blur-sm">
          <p className="text-gray-400 text-sm font-light tracking-wider">&copy; 2024 Lafayette High School. All rights reserved.</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </footer>
  );
};

export default Footer;