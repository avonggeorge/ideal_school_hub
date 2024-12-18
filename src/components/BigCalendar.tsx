"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendarEvents } from "@/lib/data"; // Your event data

// Define your color palette
const colorPalette = [
  "#CEF0D1", // colorMintGreen
  "#F5FCF6", // colorMintGreenLight
  "#F8D0D2", // colorPink
  "#FFE7E9", // colorPinkLight
  "#90D5FF", // colorBlueLight
  "#EFF2FB", // colorWhite
];

// Function to get a random color from the palette
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
};

const BigCalendar = () => {
  const [currentView, setCurrentView] = useState<string>("timeGridWeek");

  const handleViewChange = (selectedView: string) => {
    setCurrentView(selectedView);
  };

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      events={calendarEvents} // Your event data
      initialView={currentView}
      eventBorderColor="#2B92E4" // Keep border color consistent
      eventTextColor="#5C3B00" // Text color for events
      eventDisplay="block" // Display as a block to make the event visible
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "week,day",
      }}
      weekends={false} // Hide weekends
      hiddenDays={[0, 6]} // Hide weekends (0 is Sunday, 6 is Saturday)
      firstDay={1} // Week starts on Monday
      slotMinTime="08:00:00" // Set the minimum time for the calendar
      slotMaxTime="17:00:00" // Set the maximum time for the calendar
      allDaySlot={false} // Hide the all-day slot
      contentHeight="auto" // Make content height auto to adjust dynamically
      slotLabelFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }}
      eventClick={(info) => alert(`Event clicked: ${info.event.title}`)}
      viewDidMount={(viewInfo) => {
        const calendarApi = viewInfo.view.calendar;
        calendarApi.setOption("hiddenDays", [0, 6]);
        calendarApi.setOption("firstDay", 1);
      }}
      views={{
        week: {
          type: "timeGridWeek",
          buttonText: "Week",
        },
        day: {
          type: "timeGridDay",
          buttonText: "Day",
        },
      }}
      dateClick={(info) => alert(`Clicked on date: ${info.dateStr}`)}
      eventContent={(eventInfo) => {
        const startTime = eventInfo.event.start
          ? eventInfo.event.start.toLocaleTimeString()
          : "No start time"; 

        return (
          <div className="text-lg font-semibold">
            <strong>{eventInfo.event.title}</strong>
            <br />
            {startTime}
          </div>
        );
      }}
      height="98%"
      eventDataTransform={(eventData) => {
        eventData.backgroundColor = getRandomColor();
        return eventData;
      }}
      // Apply responsive styles for FullCalendar
      eventClassNames="text-xl" // Event text size
      slotLabelClassNames="text-xl font-semibold" // Time slot text size
      dayHeaderClassNames="text-xl font-semibold" // Header text size
      // Adding Tailwind responsive utilities to adjust the calendar layout
    />
  );
};

export default BigCalendar;
