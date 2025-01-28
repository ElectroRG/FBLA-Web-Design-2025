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
import StadiumLayout from '@/components/StadiumLayout';

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
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 backdrop-blur-lg flex items-center justify-center transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-2xl max-w-6xl w-full border border-zinc-800 shadow-2xl transform transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">{eventDetails.title}</h2>
              <button 
                onClick={closeModal} 
                className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-zinc-400 text-sm mb-1">Start Time</p>
                  <p className="text-xl font-medium text-white">
                    {eventDetails.start && new Date(eventDetails.start).toLocaleString('en-US', 
                      { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
                    )}
                  </p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-zinc-400 text-sm mb-1">End Time</p>
                  <p className="text-xl font-medium text-white">
                    {eventDetails.end && new Date(eventDetails.end).toLocaleString('en-US', 
                      { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
                    )}
                  </p>
                </div>
              </div>
              
              <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Event Details</h3>
                <p className="text-zinc-300">Join us for an exciting basketball game! Select your preferred seats below to secure your spot.</p>
              </div>
            </div>
          
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Select Your Seats</h3>
              <StadiumLayout />
            </div>
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