import type { GymClass, ScheduledSession } from "@/types";

export const classes: GymClass[] = [
  { id:"strength-foundations", slug:"strength-foundations", name:"Strength Foundations", shortDescription:"Learn the main movement patterns with attentive coaching.", fullDescription:"A placeholder small-group class focused on safe, repeatable strength fundamentals. Final programming details must be confirmed.", duration:60, intensity:"Moderate", experienceLevel:"Beginner", maximumCapacity:8, trainerIds:["coach-one"], equipment:["Barbells","Kettlebells","Benches"], image:"/images/class-strength.svg", accentLabel:"Start here", active:true },
  { id:"forge-strength", slug:"forge-strength", name:"FORGE Strength", shortDescription:"Progressive strength work built around the major lifts.", fullDescription:"A placeholder coached strength session using progressive programming and adaptable loading.", duration:75, intensity:"High", experienceLevel:"Intermediate", maximumCapacity:10, trainerIds:["coach-one","coach-two"], equipment:["Barbells","Racks","Dumbbells"], image:"/images/class-barbell.svg", accentLabel:"Build strength", active:true },
  { id:"engine", slug:"engine", name:"Engine", shortDescription:"Conditioning that supports performance rather than noise.", fullDescription:"A placeholder mixed-modal conditioning class with scalable work periods and clear technique standards.", duration:50, intensity:"High", experienceLevel:"All levels", maximumCapacity:12, trainerIds:["coach-two"], equipment:["Rowers","Bikes","Sleds"], image:"/images/class-engine.svg", accentLabel:"Conditioning", active:true },
  { id:"mobility-recovery", slug:"mobility-recovery", name:"Mobility + Recovery", shortDescription:"Controlled movement, range, and recovery work.", fullDescription:"A placeholder lower-intensity session supporting joint range, movement quality, and recovery.", duration:45, intensity:"Low", experienceLevel:"All levels", maximumCapacity:12, trainerIds:["coach-two"], equipment:["Mats","Bands","Foam rollers"], image:"/images/class-mobility.svg", accentLabel:"Recover", active:true },
];

export const sampleSessions: ScheduledSession[] = [
  { id:"mon-foundations", classId:"strength-foundations", trainerId:"coach-one", date:"2026-08-03", startTime:"07:00", endTime:"08:00", timeZone:"Asia/Beirut", capacity:8, bookedCount:3, status:"Available", recurring:true, mock:true },
  { id:"mon-strength", classId:"forge-strength", trainerId:"coach-two", date:"2026-08-03", startTime:"18:00", endTime:"19:15", timeZone:"Asia/Beirut", capacity:10, bookedCount:8, status:"Nearly full", recurring:true, mock:true },
  { id:"tue-engine", classId:"engine", trainerId:"coach-two", date:"2026-08-04", startTime:"17:30", endTime:"18:20", timeZone:"Asia/Beirut", capacity:12, bookedCount:12, status:"Waitlist", recurring:true, mock:true },
  { id:"wed-mobility", classId:"mobility-recovery", trainerId:"coach-one", date:"2026-08-05", startTime:"19:30", endTime:"20:15", timeZone:"Asia/Beirut", capacity:12, bookedCount:4, status:"Available", recurring:true, mock:true },
];
export const getClassBySlug = (slug: string) => classes.find((item) => item.slug === slug && item.active);
