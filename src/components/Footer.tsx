import React, { useState } from "react";

// Modal component
const Modal: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        maxHeight: "80vh",
        overflowY: "auto",
        width: "80%",  // Adjust width as needed
        maxWidth: "600px",  // Max width for better display
      }}
    >
      <div>{message}</div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  // Handle modal display on hover
  const handleHover = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const amenities = (
    <div style={{ fontSize: "0.9rem", paddingLeft: "20px" }}>
      <p>Spacious seating with excellent views from all angles.</p>
      <p>Concession stand offering snacks, drinks, and hot meals.</p>
      <p>Accessible restrooms located throughout the facility.</p>
      <p>Free Wi-Fi for visitors.</p>
      <p>On-site parking available for all guests.</p>
      <p>Locker rooms and team meeting spaces for athletes.</p>
    </div>
  );

  const policies = (
    <div style={{ fontSize: "0.9rem", paddingLeft: "20px" }}>
      <p>Outside food and beverages are not permitted.</p>
      <p>Smoking and vaping are strictly prohibited on school grounds.</p>
      <p>Alcohol and illegal substances are not allowed.</p>
      <p>Pets are not permitted, except for service animals.</p>
      <p>Children must be supervised at all times.</p>
      <p>All guests must follow staff instructions for safety and security.</p>
    </div>
  );

  return (
    <footer style={{ padding: "50px", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          textAlign: "center",
          minHeight: "350px",
        }}
      >
        {/* Location Map and Details section */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "100px" }}>
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6582369322114!2d-90.638122146671!3d38.596213338995604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88603e3cd46c2c85%3A0x5426222ae71dcbd2!2sLafayette%20High%20School!5e0!3m2!1sen!2sus!4v1736146807470!5m2!1sen!2sus"
            width="150"
            height="150"  // Square size for circular map
            style={{
              border: 0,
              borderRadius: "50%", // Circular map shape
              marginBottom: "20px",  // Add margin between map and location details
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Location Details */}
          <div>
            <b>
              <p style={{ fontSize: "0.8rem" }}>Lafayette High School</p>
              <p style={{ fontSize: "0.8rem" }}>17050 Clayton Rd, Wildwood, MO 63011</p>
            </b>
          </div>
        </div>

        {/* Only show modal on hover for Amenities */}
        <div
          onMouseEnter={() => handleHover(amenities as unknown as string)} // Passing amenities as string to modal
          onMouseLeave={handleCloseModal}
        >
          <p className="text-yellow-500 font-bold text-sm mb-2">Amenities</p>
        </div>

        {/* Business Hours section doesn't trigger the modal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="text-yellow-500 font-bold text-sm mb-2">Business Hours</p>
          <b>
            <p style={{ fontSize: "0.9rem" }}>Monday - Friday: 4:00 PM - 9:00 PM</p>
            <p style={{ fontSize: "0.9rem" }}>Saturday: 8:00 AM - 9:00 PM</p>
            <p style={{ fontSize: "0.9rem" }}>Sunday: 10:00 AM - 6:00 PM</p>
          </b>
        </div>

        {/* Contact Us section doesn't trigger the modal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="text-yellow-500 font-bold text-sm mb-2">Contact Us</p>
          <b>
            <p style={{ fontSize: "0.9rem" }}>+1 (636) 733-4100</p>
            <p style={{ fontSize: "0.9rem" }}>sumnerjonathon@rsdmo.org</p>
            <p style={{ fontSize: "0.9rem" }}>https://lafayette.rsdmo.org/</p>
          </b>
        </div>

        {/* Only show modal on hover for Policies */}
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          onMouseEnter={() => handleHover(policies as unknown as string)} // Passing policies as string to modal
          onMouseLeave={handleCloseModal}
        >
          <p className="text-yellow-500 font-bold text-sm mb-2" style={{ paddingRight: "20px" }}>
            Policies
          </p>
        </div>
      </div>

      {/* Render modal if visible */}
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </footer>
  );
};

export default Footer;