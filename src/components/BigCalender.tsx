"use client"

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/lib/data';
import'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const BigCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      min={new Date(2025, 1,0,8,0,0)}
      max={new Date(2025, 1,0,17,0,0)}
    />
  </div>
)

export default BigCalendar;