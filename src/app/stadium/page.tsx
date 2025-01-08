'use client';
import { useState } from "react";
import styles from './page.module.css'
import {
  createCalendar,
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { TypewriterEffectSmoothDemo } from '@/components/Typewriter';
import { LampDemo } from "@/components/Lamp";
import { TracingBeamDemo } from "@/components/TracingBeam";
import { ShootingStars } from "@/components/ui/shooting-stars";





export default function Home() {
  

  return (
    <div>
        <LampDemo/>
        <ShootingStars/>
    </div>
  )
}   
