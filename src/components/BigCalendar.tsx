"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendarEvents } from "@/lib/data"; // Your event data

const colorPalette = [
  "#CEF0D1", // colorMintGreen
  "#F5FCF6", // colorMintGreenLight
  "#F8D0D2", // colorPink
  "#FFE7E9", // colorPinkLight
  "#90D5FF", // colorBlueLight
  "#EFF2FB", // colorWhite
];

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
    <div className="w-full max-w-screen-md mx-auto sm:px-4 lg:max-w-screen-lg">
      <FullCalendar
        contentHeight="auto" // Auto height to adjust dynamically
        plugins={[timeGridPlugin, interactionPlugin]}
        events={calendarEvents}
        initialView={currentView}
        eventBorderColor="#2B92E4"
        eventTextColor="#5C3B00"
        eventDisplay="block"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "week,day",
        }}
        weekends={false}
        hiddenDays={[0, 6]}
        firstDay={1}
        slotMinTime="08:00:00"
        slotMaxTime="17:00:00"
        allDaySlot={false}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }}
        height="100%" // Allow FullCalendar to expand based on the container height
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
        eventContent={(eventInfo) => {
          const startTime = eventInfo.event.start
            ? eventInfo.event.start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "No start time";

          const endTime = eventInfo.event.end
            ? eventInfo.event.end.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "No end time";

          return (
            <div className="text-xs md:text-sm font-semibold">
              <strong>
                {startTime} - {endTime}
              </strong>
              <br />
              {eventInfo.event.title}
            </div>
          );
        }}
        eventDataTransform={(eventData) => {
          eventData.backgroundColor = getRandomColor();
          return eventData;
        }}
        eventClassNames="text-sm" // Event text size for smaller screens
        slotLabelClassNames="text-sm font-medium" // Time slot text size
        dayHeaderClassNames="text-sm font-medium" // Header text size
      />
    </div>
  );
};

export default BigCalendar;
