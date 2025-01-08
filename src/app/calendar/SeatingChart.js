import { useState } from 'react';
import './SeatingChart.css';
import { SignupFormDemo } from '@/components/SignUp';

const sections = [
  { id: 'Section 1', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 2', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 3', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 4', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 5', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 6', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) }
];

function SeatingChart() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [seats, setSeats] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [reservedSeats, setReservedSeats] = useState([]);

  const handleSectionClick = (sectionId) => {
    const section = sections.find(s => s.id === sectionId);
    setSeats(section.seats);
    setSelectedSection(sectionId);
  };

  const handleSeatClick = (id) => {
    setSeats(seats.map(seat => {
      if (seat.id === id && !seat.reserved) {
        return { ...seat, selected: !seat.selected };
      }
      return seat;
    }));
  };

  const handleReserveClick = () => {
    const reserved = seats.filter(seat => seat.selected).map(seat => seat.id);
    setReservedSeats(reserved);
    setSeats(seats.map(seat => {
      if (seat.selected) {
        return { ...seat, reserved: true, selected: false };
      }
      return seat;
    }));
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="seating-chart-container">
      <div className="sections">
        {sections.map(section => (
          <div
            key={section.id}
            className={`section ${selectedSection === section.id ? 'selected' : ''}`}
            onClick={() => handleSectionClick(section.id)}
          >
            {section.id}
          </div>
        ))}
      </div>

      {selectedSection && (
        <div>
          <div className="seating-chart">
            {seats.map(seat => (
              <div
                key={seat.id}
                className={`seat ${seat.reserved ? 'reserved' : ''} ${seat.selected ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seat.id)}
              >
                {seat.id}
              </div>
            ))}
          </div>
          <button onClick={handleReserveClick} disabled={!seats.some(seat => seat.selected)}>
            Reserve Seats
          </button>
        </div>
      )}

      {isPopupOpen && (
        <div className="popup-overlay">
            <SignupFormDemo />
            <button className="close-popup" onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default SeatingChart;