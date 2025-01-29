import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-6 overflow-hidden border-t border-zinc-800/30">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-y-0 h-full w-full bg-black/50 -z-10" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Location Section */}
          <div className="flex flex-col items-center md:items-start space-y-6 backdrop-blur-sm p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 transition-all duration-300 hover:border-yellow-500/30 group">
            <h3 className="text-yellow-400 font-bold text-xl tracking-wide group-hover:text-yellow-300 transition-colors">Our Location</h3>
            <div className="w-full max-w-[300px] aspect-square relative mb-3 overflow-hidden rounded-xl border border-zinc-800/50 group-hover:border-yellow-500/30 transition-all duration-300 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6582369322114!2d-90.638122146671!3d38.596213338995604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88603e3cd46c2c85%3A0x5426222ae71dcbd2!2sLafayette%20High%20School!5e0!3m2!1sen!2sus!4v1736146807470!5m2!1sen!2sus"
                className="w-full h-full"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center md:text-left w-full space-y-2">
              <p className="font-semibold text-zinc-100">Lafayette High School</p>
              <p className="text-zinc-400">17050 Clayton Rd</p>
              <p className="text-zinc-400">Wildwood, MO 63011</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="flex flex-col items-center md:items-start space-y-6 backdrop-blur-sm p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 transition-all duration-300 hover:border-yellow-500/30 group">
            <h3 className="text-yellow-400 font-bold text-xl tracking-wide group-hover:text-yellow-300 transition-colors">Business Hours</h3>
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center w-full p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 transition-all duration-300 hover:border-yellow-500/20">
                <span className="text-zinc-400">Monday - Friday:</span>
                <span className="text-zinc-100 font-medium">4:00 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center w-full p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 transition-all duration-300 hover:border-yellow-500/20">
                <span className="text-zinc-400">Saturday:</span>
                <span className="text-zinc-100 font-medium">8:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center w-full p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 transition-all duration-300 hover:border-yellow-500/20">
                <span className="text-zinc-400">Sunday:</span>
                <span className="text-zinc-100 font-medium">10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-6 backdrop-blur-sm p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 transition-all duration-300 hover:border-yellow-500/30 group">
            <h3 className="text-yellow-400 font-bold text-xl tracking-wide group-hover:text-yellow-300 transition-colors">Contact Us</h3>
            <div className="space-y-4 w-full">
              <a href="tel:+16367334100" className="flex items-center space-x-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 transition-all duration-300 hover:border-yellow-500/20 group/item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 group-hover/item:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-zinc-100 font-medium group-hover/item:text-white transition-colors">+1 (636) 733-4100</span>
              </a>
              <a href="mailto:sumnerjonathon@rsdmo.org" className="flex items-center space-x-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 transition-all duration-300 hover:border-yellow-500/20 group/item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 group-hover/item:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-zinc-100 font-medium group-hover/item:text-white transition-colors">sumnerjonathon@rsdmo.org</span>
              </a>
              <a 
                href="https://lafayette.rsdmo.org/"
                className="flex items-center space-x-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 transition-all duration-300 hover:border-yellow-500/20 group/item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 group-hover/item:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-zinc-100 font-medium group-hover/item:text-white transition-colors">Visit Our Website</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 pt-8 text-center border-t border-zinc-800/30 backdrop-blur-sm">
          <p className="text-zinc-400 text-sm font-light tracking-wider">&copy; 2024 Lafayette High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;