import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  name: string;
  price: number;
  color: string;
  rows: number;
  seatsPerRow: number;
}

interface Seat {
  id: string;
  row: number;
  number: number;
  price: number;
  isAvailable: boolean;
}

const StadiumLayout: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [scale, setScale] = useState(1);
  const [numTickets, setNumTickets] = useState<number>(0);

  const sections: Section[] = [
    { id: 'S412', name: 'Section 412', price: 21, color: '#4CAF50', rows: 3, seatsPerRow: 8 },
    { id: 'S417', name: 'Section 417', price: 18, color: '#4CAF50', rows: 3, seatsPerRow: 8 },
    { id: 'S420', name: 'Section 420', price: 25, color: '#4CAF50', rows: 3, seatsPerRow: 8 },
    { id: 'S421', name: 'Section 421', price: 9, color: '#4CAF50', rows: 3, seatsPerRow: 8 },
    { id: 'S423', name: 'Section 423', price: 7, color: '#4CAF50', rows: 3, seatsPerRow: 8 },
    { id: 'S424', name: 'Section 424', price: 12, color: '#4CAF50', rows: 3, seatsPerRow: 8 },
  ];

  const generateSeats = (section: Section): Seat[] => {
    const seats: Seat[] = [];
    for (let row = 1; row <= section.rows; row++) {
      for (let seatNum = 1; seatNum <= section.seatsPerRow; seatNum++) {
        seats.push({
          id: `${section.id}-${row}-${seatNum}`,
          row,
          number: seatNum,
          price: section.price,
          isAvailable: Math.random() > 0.2, // Randomly mark some seats as unavailable
        });
      }
    }
    return seats;
  };

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    setSelectedSeats([]);
  };

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      }
      return [...prev, seatId];
    });
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prevScale => {
      const newScale = direction === 'in' ? prevScale + 0.2 : prevScale - 0.2;
      return Math.min(Math.max(newScale, 0.5), 2);
    });
  };

  const renderSeats = (section: Section) => {
    const seats = generateSeats(section);
    return (
      <div className="grid gap-2 p-4">
        {Array.from({ length: section.rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2">
            {seats
              .filter(seat => seat.row === rowIndex + 1)
              .map(seat => (
                <button
                  key={seat.id}
                  onClick={() => seat.isAvailable && handleSeatClick(seat.id)}
                  className={`
                    w-8 h-8 rounded-t-lg text-xs font-medium transition-all duration-200
                    ${seat.isAvailable
                      ? selectedSeats.includes(seat.id)
                        ? 'bg-yellow-400 text-black transform scale-110'
                        : 'bg-white text-gray-800 hover:bg-yellow-200'
                      : 'bg-gray-400 cursor-not-allowed opacity-50'
                    }
                  `}
                  disabled={!seat.isAvailable}
                  title={`Row ${seat.row}, Seat ${seat.number}${!seat.isAvailable ? ' (Not Available)' : ''}`}
                >
                  {seat.number}
                </button>
              ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black/90 p-8 rounded-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">How many tickets?</h2>
        <div className="flex gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setNumTickets(num)}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                numTickets === num
                  ? 'bg-yellow-400 text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              {num}{num === 6 ? '+' : ''}
            </button>
          ))}
        </div>
        <p className="text-zinc-400 text-sm">{numTickets > 0 ? "You'll be seated together" : "Select number of tickets"}</p>
      </div>
      
      <div className="absolute top-4 right-4 space-x-2 z-10">
        <button
          onClick={() => handleZoom('in')}
          className="bg-zinc-800 text-white p-2 rounded-full hover:bg-zinc-700 transition-colors"
        >
          +
        </button>
        <button
          onClick={() => handleZoom('out')}
          className="bg-zinc-800 text-white p-2 rounded-full hover:bg-zinc-700 transition-colors"
        >
          -
        </button>
      </div>

      <motion.div
        className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden"
        style={{ scale }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
          <div className="absolute inset-[15%] border-2 border-white/50 rounded-lg" />

          <div className="absolute inset-0">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                className={`absolute cursor-pointer transition-colors duration-200 ${
                  selectedSection === section.id ? 'ring-2 ring-white' : ''
                }`}
                style={{
                  backgroundColor: section.color,
                  opacity: selectedSection === section.id ? 1 : 0.7,
                  ...(section.id === 'S412' && { top: '10%', left: '20%', width: '15%', height: '20%' }),
                  ...(section.id === 'S417' && { top: '10%', right: '20%', width: '15%', height: '20%' }),
                  ...(section.id === 'S420' && { top: '35%', left: '10%', width: '15%', height: '20%' }),
                  ...(section.id === 'S421' && { top: '35%', right: '10%', width: '15%', height: '20%' }),
                  ...(section.id === 'S423' && { bottom: '10%', left: '20%', width: '15%', height: '20%' }),
                  ...(section.id === 'S424' && { bottom: '10%', right: '20%', width: '15%', height: '20%' }),
                }}
                onClick={() => handleSectionClick(section.id)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {section.id}
                </div>
                <div className="absolute bottom-2 left-2 text-xs text-white font-medium">
                  ${section.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {selectedSection && (
        <div className="mt-4 p-6 bg-gray-800 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">
              {sections.find(s => s.id === selectedSection)?.name}
            </h3>
            <p className="text-yellow-400 font-semibold">
              Price: ${sections.find(s => s.id === selectedSection)?.price} per seat
            </p>
          </div>
          
          {renderSeats(sections.find(s => s.id === selectedSection)!)}
          
          {selectedSeats.length > 0 && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">Selected Seats</h4>
              <p className="text-gray-300">
                {selectedSeats.length} seat(s) selected - Total: ${selectedSeats.length * (sections.find(s => s.id === selectedSection)?.price || 0)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StadiumLayout;