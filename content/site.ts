import type { Facility, Faq, TrainingDay } from "@/types";
export const facilities: Facility[] = [
 { id:"strength-floor", name:"Strength Floor", description:"Placeholder zone planned for structured strength work.", zone:"Zone A", equipment:["[EQUIPMENT LIST TO CONFIRM]"], accessibilityNotes:"[ACCESSIBILITY DETAILS TO CONFIRM]", image:"/images/facility-strength.svg", svgRegionId:"zone-strength", placeholder:true },
 { id:"conditioning-zone", name:"Conditioning Zone", description:"Placeholder zone planned for conditioning sessions.", zone:"Zone B", equipment:["[EQUIPMENT LIST TO CONFIRM]"], accessibilityNotes:"[ACCESSIBILITY DETAILS TO CONFIRM]", image:"/images/facility-conditioning.svg", svgRegionId:"zone-conditioning", placeholder:true },
 { id:"recovery-area", name:"Recovery Area", description:"Placeholder area for mobility and recovery work.", zone:"Zone C", equipment:["[EQUIPMENT LIST TO CONFIRM]"], accessibilityNotes:"[ACCESSIBILITY DETAILS TO CONFIRM]", image:"/images/facility-recovery.svg", svgRegionId:"zone-recovery", placeholder:true },
];
export const faqs: Faq[] = [
 { question:"Do I need training experience?", answer:"No. Your first session starts with a movement assessment, and coaching is adapted to your current level." },
 { question:"Can I try a session first?", answer:"Yes. Book one trial session before choosing a membership. Final trial terms are placeholder information pending confirmation." },
 { question:"What should I bring?", answer:"Comfortable training clothes, clean training shoes, and water. Any additional requirements will be confirmed before your visit." },
 { question:"Are class capacities live?", answer:"No. Capacities and schedules shown on this website are sample data until a live booking system is connected." },
];
export const gymRules = ["Train with control and respect the coach’s instructions.","Return equipment after use.","Tell a coach about relevant limitations privately before training.","[FINAL GYM RULES TO BE CONFIRMED]."];
export const firstVisit = ["Choose a trial-session preference.","A team member confirms the appointment.","Begin with a movement assessment.","Discuss the appropriate training option after the session."];
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
export const trainingWeek: TrainingDay[] = days.map((day,index) => ({ fullDayName:day, shortLabel:day.slice(0,3), featuredClasses:index % 2 ? ["FORGE Strength","Mobility + Recovery"] : ["Strength Foundations","Engine"], trainer:index % 2 ? "[COACH NAME TWO]" : "[COACH NAME ONE]", intensity:index === 6 ? "Low" : index % 2 ? "High" : "Moderate", capacityState:index === 2 ? "Nearly full" : "Available", startTimes:index > 4 ? ["09:00"] : ["07:00","18:00"], backgroundImage:index % 2 ? "/images/week-dark.svg" : "/images/week-light.svg", shortDescription:"Sample training day. Times, coach, and capacity are placeholder data.", mock:true }));
export const legalNotice = "Template content only. This page requires review by a qualified Lebanese lawyer and must be adapted to FORGE Training Club’s actual practices.";
