'use client';
import { useState } from "react";
// import styles from './page.module.css'
import {
  createCalendar,
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
// import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { ScheduleXCalendar } from "@schedule-x/react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { TypewriterEffectSmoothDemo } from '@/components/Typewriter';
import SeatingChart from './SeatingChart';

interface EventDetails {
  title?: string;
  start?: string | Date;
  end?: string | Date;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false); // Modal visibility
  const [eventDetails, setEventDetails] = useState<EventDetails | null>(null); // Store event details

  const eventsServicePlugin = useState(() => createEventsServicePlugin())[0];

  const calendarApp = createCalendar({
    views: [viewWeek, viewMonthGrid, viewDay, viewMonthAgenda],
    defaultView: viewWeek.name,
    isDark: true,
    calendars: {
      events : {
        colorName: 'events',
        darkColors: {
          main: '#FFEB3B',
          onContainer: '#fff5de',
          container: '#a29742',
        },
      },
    },
    dayBoundaries: {start: '06:00', end: '22:00'},
    callbacks: {
      onRangeUpdate: (range) => {
        calendarApp.eventsService.set([
          {
            id: '12',
            title: 'LHS vs EHS Basketball Game',
            start: range.start,
            end: range.end,
          },
          {
            id: '13',
            title: 'LHS vs MHS Basketball Game',
            start: range.start,
            end: range.end,
          },
        ]);
      },
      onEventClick(calendarEvent) {
        console.log('onEventClick', calendarEvent);
        setEventDetails(calendarEvent);
        setIsVisible(true);
      },
    },
    events: [
      {
        id: '12',
        title: 'LHS vs EHS Basketball Game',
        start: '2024-12-15 06:00',
        end: '2024-12-15 08:00',
        calendarId: 'events',
      },
      {
        id: '13',
        title: 'LHS vs MHS Basketball Game',
        start: '2024-12-13 06:00',
        end: '2024-12-13 08:00',
        calendarId: 'events',
      },
    ],
    selectedDate: '2024-12-15',
  }, [createEventModalPlugin(), eventsServicePlugin]);

  const closeModal = () => {
    setIsVisible(false); // Close modal
    setEventDetails(null); // Reset event details
  };

  return (
    <div>
      {/* Modal */}
      {isVisible && eventDetails && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 backdrop-blur-md flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">{eventDetails.title}</h2>
            <p><strong>Start Time:</strong> {eventDetails.start && new Date(eventDetails.start).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
            <p><strong>End Time:</strong> {eventDetails.end && new Date(eventDetails.end).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
            <div className="mt-4">
              <h3 className="font-medium text-lg">Seating Chart</h3>
              <SeatingChart />
            </div>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}

      <div>
        <TypewriterEffectSmoothDemo />
      </div>

      <div
        style={{
          maxWidth: '1400px',
          maxHeight: '750px',
          marginTop: '-100px', 
          marginLeft: '40px', 
          marginRight: 'auto', 
          marginBottom: '0', 
          height: '800px',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          borderRadius: '20px',
          paddingRight: '10px',
        }}
      >
        <ScheduleXCalendar calendarApp={calendarApp} />
      </div>
    </div>
  );
}