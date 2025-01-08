// components/Footer.tsx

import React from "react";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const stadium = [
  {
    text: "Stadium",
    className: "text-white-500 dark:text-yellow-500 text-2xl",
  },
  {
    text: "Booking",
    className: "text-yellow-500 dark:text-yellow-500 text-2xl",
  },
];

const business = [
  {
    text: "Business",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
  {
    text: "Hours",
    className: "text-yellow-500 dark:text-yellow-500 text-xl",
  },
];

const location = [
  {
    text: "Location",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
  {
    text: "Details",
    className: "text-yellow-500 dark:text-yellow-500 text-xl",
  },
];

const contact = [
  {
    text: "Contact",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
  {
    text: "Us",
    className: "text-yellow-500 dark:text-yellow-500 text-xl",
  },
];

const amenities = [
  {
    text: "Amenities",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
];

const policies = [
  {
    text: "Policies",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
];


const locate = 'Lafayette High School, 17050 Clayton Rd, Wildwood, MO 63011';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "10px", backgroundColor: "#333", color: "#fff", textAlign: "center"}}>
      <div style={{ display: "flex", justifyContent: "right" }}>

          </div>

          <div
          style={{
            display: "flex", // Flexbox to align items horizontally
            justifyContent: "center", // Center the items horizontally
            gap: "25px", // Space between the sections
            textAlign: "center", // Center-align content within each section
          }}
        >
          <div>
            <TypewriterEffectSmooth words={amenities} /> 
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TypewriterEffectSmooth words={business} />
            <b>
              <p>Monday - Friday: 4:00 PM - 9:00 PM</p>
              <p>Saturday: 8:00 AM - 9:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </b>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TypewriterEffectSmooth words={location} />
          <section>
            <b>
              <p>Lafayette High School</p>
              <p> 17050 Clayton Rd, Wildwood, MO 63011</p>
            </b>

            <div
              style={{
                marginTop: "16px", // Adds spacing between the address and the map
                display: "flex", // Ensures alignment for map
                justifyContent: "center", // Centers the map
                width: "100%", // Ensures the container takes full width
              }}
            >
            </div>

          </section>
        </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TypewriterEffectSmooth words={contact} />
            <div>
              <b>
                <p>+1 (636) 733-4100</p>
                <p>sumnerjonathon@rsdmo.org</p>
                <p>https://lafayette.rsdmo.org/</p>
              </b>
            </div>
          </div>
        
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TypewriterEffectSmooth words={policies} />
          </div>

    </div>

    </footer>
  );
};

export default Footer;

/*
          <div
              style={{
                marginTop: "16px", // Adds spacing between the address and the map
                display: "flex", // Ensures alignment for map
                justifyContent: "center", // Centers the map
                width: "100%", // Ensures the container takes full width
              }}
            >
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6582369322114!2d-90.638122146671!3d38.596213338995604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88603e3cd46c2c85%3A0x5426222ae71dcbd2!2sLafayette%20High%20School!5e0!3m2!1sen!2sus!4v1736146807470!5m2!1sen!2sus"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
      */