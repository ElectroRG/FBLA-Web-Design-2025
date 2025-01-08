import { useState, useEffect } from 'react';
import './SeatingChart.css';

const sections = [
  { id: 'Section 1', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 2', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 3', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 4', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 5', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) },
  { id: 'Section 6', seats: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, reserved: false, selected: false })) }
];

export default function SeatingChart() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [seats, setSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  // Load saved reservations from localStorage on first render
  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservedSeats')) || {};
    sections.forEach(section => {
      section.seats.forEach(seat => {
        if (savedReservations[section.id]?.includes(seat.id)) {
          seat.reserved = true;
        }
      });
    });
  }, []);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
    const section = sections.find(section => section.id === sectionId);
    setSeats(section.seats);
  };

  const handleSeatClick = (seatId) => {
    setSeats(seats.map(seat => seat.id === seatId ? { ...seat, selected: !seat.selected } : seat));
  };

  const handleReserveClick = () => {
    const reserved = seats.filter(seat => seat.selected).map(seat => seat.id);
    const totalCost = reserved.length * SEAT_PRICE;

    // Update the local state
    setReservedSeats(reserved);

    // Update the seats in this section as reserved
    const updatedSeats = seats.map(seat => {
      if (seat.selected) {
        return { ...seat, reserved: true, selected: false };
      }
      return seat;
    });

    setSeats(updatedSeats);

    // Save to localStorage
    const savedReservations = JSON.parse(localStorage.getItem('reservedSeats')) || {};
    savedReservations[selectedSection] = [
      ...(savedReservations[selectedSection] || []),
      ...reserved
    ];
    localStorage.setItem('reservedSeats', JSON.stringify(savedReservations));

    // Show alert popup with header
    alert(`Reservation Successful!\n\nYou have reserved the following seats: ${reserved.join(', ')}.\nTotal cost: $${totalCost}.\n\nPlease pay at Lafayette.`);
  };

  // Add a constant for seat price
  const SEAT_PRICE = 12;

  return (
    <div className="seating-chart-container text-white">
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={handleReserveClick} disabled={!seats.some(seat => seat.selected)}>
              Reserve Seats
            </button>
            <div style={{ marginLeft: '10px' }}>
              {seats.filter(seat => seat.selected).length} seat(s) selected - Total: ${seats.filter(seat => seat.selected).length * SEAT_PRICE}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}